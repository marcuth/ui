"use client"

import type { ComponentProps, MouseEvent } from "react"
import { LuMoon, LuSun } from "react-icons/lu"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { serializeThemeCookie, type ResolvedThemeMode, type ThemeCookieOptions } from "@/theme/mode"

/**
 * Switches theme without every color transition animating at once (the page should flip, not
 * fade). The toggle's own icons are exempt: their swap is the one animation that explains the change.
 */
function withoutTransitions(change: () => void) {
    const style = document.createElement("style")
    style.textContent = "*:not([data-theme-icon]),*::before,*::after{transition:none!important}"
    document.head.appendChild(style)
    change()
    void window.getComputedStyle(document.body).opacity
    requestAnimationFrame(() => style.remove())
}

export type ThemeTransitionOrigin = { x: number; y: number }

const REVEAL_DURATION = 450

/**
 * Circular reveal: the new theme grows out of `origin` over the old one (View Transitions API).
 * The browser's default root crossfade is switched off for the duration, and the whole thing is
 * skipped under reduced motion or where the API is missing.
 */
function revealTheme(change: () => void, origin: ThemeTransitionOrigin) {
    const root = document.documentElement
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches

    if (reduced || typeof document.startViewTransition !== "function") {
        withoutTransitions(change)
        return
    }

    const style = document.createElement("style")
    style.textContent =
        "::view-transition-old(root),::view-transition-new(root){animation:none;mix-blend-mode:normal}" +
        "::view-transition-old(root){z-index:0}::view-transition-new(root){z-index:1}"
    document.head.appendChild(style)

    const transition = document.startViewTransition(() => withoutTransitions(change))
    const radius = Math.hypot(
        Math.max(origin.x, window.innerWidth - origin.x),
        Math.max(origin.y, window.innerHeight - origin.y),
    )

    transition.ready
        .then(() => {
            root.animate(
                {
                    clipPath: [
                        `circle(0px at ${origin.x}px ${origin.y}px)`,
                        `circle(${radius}px at ${origin.x}px ${origin.y}px)`,
                    ],
                },
                {
                    duration: REVEAL_DURATION,
                    easing: "cubic-bezier(0.23, 1, 0.32, 1)",
                    pseudoElement: "::view-transition-new(root)",
                },
            )
        })
        .catch(() => {})
    void transition.finished.finally(() => style.remove())
}

/**
 * Sets `data-theme` and the cookie. Pass `origin` (viewport coordinates) to animate the change
 * as a circular reveal growing from that point.
 */
export function setThemeMode(
    mode: ResolvedThemeMode,
    options: ThemeCookieOptions & { origin?: ThemeTransitionOrigin } = {},
): void {
    const { origin, ...cookie } = options
    const change = () => {
        document.documentElement.dataset.theme = mode
    }
    if (origin) revealTheme(change, origin)
    else withoutTransitions(change)
    document.cookie = serializeThemeCookie(mode, cookie)
}

/**
 * Sun/moon crossfade: the outgoing icon shrinks to 75% (never 0), turns and blurs while the
 * incoming one settles. Blur bridges the two shapes so it reads as one morph. Reduced motion
 * keeps only the fade.
 */
const iconMotion = cn(
    "size-4 transition-[opacity,scale,rotate,filter] duration-(--ui-duration-base) ease-out",
    "motion-reduce:scale-100! motion-reduce:rotate-0! motion-reduce:blur-none!",
)

export type ThemeToggleProps = Omit<ComponentProps<typeof Button>, "children"> & ThemeCookieOptions

/**
 * Light/dark switch. Stateless: the icon follows `data-theme` through CSS, so the server render
 * always matches. Pass `domain=".your.site"` to share the choice across subdomains.
 */
export function ThemeToggle({
    domain,
    cookieName,
    onClick,
    variant = "ghost",
    size = "icon",
    "aria-label": ariaLabel = "Toggle color theme",
    ...props
}: ThemeToggleProps) {
    function handleClick(event: MouseEvent<HTMLButtonElement>) {
        onClick?.(event)
        if (event.defaultPrevented) return
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark"
        const rect = event.currentTarget.getBoundingClientRect()
        setThemeMode(next, {
            domain,
            cookieName,
            origin: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
        })
    }

    return (
        <Button variant={variant} size={size} aria-label={ariaLabel} onClick={handleClick} {...props}>
            <span className="grid *:col-start-1 *:row-start-1" aria-hidden="true">
                <LuSun
                    data-theme-icon
                    className={cn(iconMotion, "dark:scale-75 dark:-rotate-45 dark:opacity-0 dark:blur-[2px]")}
                />
                <LuMoon
                    data-theme-icon
                    className={cn(
                        iconMotion,
                        "scale-75 rotate-45 opacity-0 blur-[2px] dark:scale-100 dark:rotate-0 dark:opacity-100 dark:blur-none",
                    )}
                />
            </span>
        </Button>
    )
}
