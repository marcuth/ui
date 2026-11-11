import type { ComponentProps, ReactNode } from "react"

import { Container } from "@/components/layout"
import { Link } from "@/components/ui/link"
import { cn } from "@/lib/utils"
import { themeScope, type ThemeScopeProps } from "@/theme/scope"

export type FooterLink = { label: string; href: string }
export type FooterLinkGroup = { title: string; links: FooterLink[] }

export type AppFooterProps = ComponentProps<"footer"> &
    ThemeScopeProps & {
        brand?: ReactNode
        /** Short line under the brand. */
        tagline?: ReactNode
        /**
         * Link columns, e.g. one listing every subdomain so the sites cross-link.
         * Internal hrefs use Next.js `<Link>`; http(s) URLs open in a new tab.
         */
        groups?: FooterLinkGroup[]
        /** Bottom row: copyright, legal links. */
        bottom?: ReactNode
    }

export function AppFooter({
    className,
    brand,
    tagline,
    groups = [],
    bottom,
    theme,
    inverse,
    children,
    ...props
}: AppFooterProps) {
    return (
        <footer
            data-slot="app-footer"
            {...themeScope({ theme, inverse })}
            className={cn("border-t", className)}
            {...props}
        >
            <Container size="xl" className="flex flex-col gap-10 py-12">
                <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                    {brand || tagline ? (
                        <div className="flex max-w-xs flex-col gap-3">
                            {brand}
                            {tagline ? <p className="text-sm text-muted-foreground">{tagline}</p> : null}
                        </div>
                    ) : null}
                    {groups.length > 0 ? (
                        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
                            {groups.map((group) => (
                                <div key={group.title} className="flex flex-col gap-3">
                                    <p className="text-xs font-medium tracking-[0.08em] text-foreground uppercase">
                                        {group.title}
                                    </p>
                                    <ul className="flex flex-col gap-2">
                                        {group.links.map((link) => (
                                            <li key={link.href}>
                                                <Link href={link.href} variant="subtle" className="text-sm">
                                                    {link.label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    ) : null}
                </div>
                {children}
                {bottom ? (
                    <div className="flex flex-col gap-2 border-t pt-6 text-xs text-muted-foreground sm:flex-row sm:justify-between">
                        {bottom}
                    </div>
                ) : null}
            </Container>
        </footer>
    )
}
