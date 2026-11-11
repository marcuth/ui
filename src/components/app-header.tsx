import type { ComponentProps } from "react"

import { Container } from "@/components/layout"
import { Anchor, type AnchorProps } from "@/components/ui/link"
import { cn } from "@/lib/utils"

export type AppHeaderProps = ComponentProps<"header"> & {
    /** Stick to the top with a translucent background. */
    sticky?: boolean
}

/**
 * Shared app header, composed from its parts:
 *
 *     <AppHeader>
 *         <AppHeaderBrand><Anchor href="/"><BrandMark name="blog" /></Anchor></AppHeaderBrand>
 *         <AppHeaderNav><NavLink href="/" active>Home</NavLink></AppHeaderNav>
 *         <AppHeaderActions><ThemeToggle /></AppHeaderActions>
 *     </AppHeader>
 */
export function AppHeader({ className, sticky = true, children, ...props }: AppHeaderProps) {
    return (
        <header
            data-slot="app-header"
            className={cn(
                "z-40 w-full border-b bg-background/80 backdrop-blur-md",
                sticky && "sticky top-0",
                className,
            )}
            {...props}
        >
            <Container size="xl" className="flex h-16 items-center gap-6">
                {children}
            </Container>
        </header>
    )
}

/** Left slot. Usually `<Anchor href="/"><BrandMark name="…" /></Anchor>`. */
export function AppHeaderBrand({ className, ...props }: ComponentProps<"div">) {
    return <div data-slot="app-header-brand" className={cn("shrink-0", className)} {...props} />
}

/** Main navigation: put `<NavLink>`s inside. Hidden below `md`. */
export function AppHeaderNav({ className, ...props }: ComponentProps<"nav">) {
    return (
        <nav
            data-slot="app-header-nav"
            aria-label="Main"
            className={cn("hidden items-center gap-1 md:flex", className)}
            {...props}
        />
    )
}

/** Right slot: ThemeToggle, CTA button, avatar. */
export function AppHeaderActions({ className, ...props }: ComponentProps<"div">) {
    return (
        <div data-slot="app-header-actions" className={cn("ml-auto flex items-center gap-2", className)} {...props} />
    )
}

export type NavLinkProps = AnchorProps & {
    /** Marks the current page: sets aria-current and the active style. */
    active?: boolean
}

/** Header navigation link. Internal hrefs use Next.js `<Link>`. */
export function NavLink({ className, active = false, ...props }: NavLinkProps) {
    return (
        <Anchor
            data-slot="nav-link"
            data-active={active || undefined}
            aria-current={active ? "page" : undefined}
            className={cn(
                "rounded-control px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-(--ui-duration-fast) ease-out",
                "hover:bg-accent hover:text-foreground data-active:text-foreground",
                className,
            )}
            {...props}
        />
    )
}
