import type { ComponentProps, ReactNode } from "react"

import { Container } from "@/components/layout"
import { Anchor, type AnchorProps } from "@/components/ui/link"
import { cn } from "@/lib/utils"

export type AppHeaderProps = ComponentProps<"header"> & {
    /** Usually `<Link href="/"><BrandMark name="…" /></Link>`. */
    brand: ReactNode
    /** Right-hand slot: ThemeToggle, CTA button, avatar. */
    actions?: ReactNode
    /** Stick to the top with a translucent background. */
    sticky?: boolean
}

/** Shared app header. Put `<NavLink>`s in `children`. */
export function AppHeader({ className, brand, actions, sticky = true, children, ...props }: AppHeaderProps) {
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
                <div className="shrink-0">{brand}</div>
                {children ? (
                    <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
                        {children}
                    </nav>
                ) : null}
                {actions ? <div className="ml-auto flex items-center gap-2">{actions}</div> : null}
            </Container>
        </header>
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
