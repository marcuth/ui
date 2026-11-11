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

export function setThemeMode(mode: ResolvedThemeMode, options: ThemeCookieOptions = {}): void {
    withoutTransitions(() => {
        document.documentElement.dataset.theme = mode
    })
    document.cookie = serializeThemeCookie(mode, options)
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
        setThemeMode(next, { domain, cookieName })
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
