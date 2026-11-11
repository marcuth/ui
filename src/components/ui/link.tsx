import { cva, type VariantProps } from "class-variance-authority"
import NextLink from "next/link"
import { Slot } from "radix-ui"
import type { ComponentProps } from "react"

import { isExternalUrl, isInternalHref } from "@/lib/href"
import { cn } from "@/lib/utils"

export type AnchorProps = Omit<ComponentProps<"a">, "href"> & {
    href: string
    /** Render the child element instead, keeping the props. */
    asChild?: boolean
    /** Forwarded to Next.js `<Link>` for internal hrefs. */
    prefetch?: ComponentProps<typeof NextLink>["prefetch"]
    replace?: boolean
    scroll?: boolean
}

/**
 * Unstyled link that picks the element from the href: internal paths (`/`, `#`, `?`, `./`)
 * render Next.js `<Link>`; anything else renders `<a>`, and http(s) URLs open in a new tab.
 */
export function Anchor({ href, asChild = false, prefetch, replace, scroll, target, rel, ...props }: AnchorProps) {
    if (asChild) return <Slot.Root {...props} />

    if (isInternalHref(href)) {
        return (
            <NextLink
                href={href}
                prefetch={prefetch}
                replace={replace}
                scroll={scroll}
                target={target}
                rel={rel}
                {...props}
            />
        )
    }

    const external = isExternalUrl(href)
    return (
        <a
            href={href}
            target={target ?? (external ? "_blank" : undefined)}
            rel={rel ?? (external ? "noopener noreferrer" : undefined)}
            {...props}
        />
    )
}

export const linkVariants = cva(
    "rounded-[2px] underline-offset-4 transition-[color,text-decoration-color] duration-(--ui-duration-fast) ease-out",
    {
        variants: {
            variant: {
                /** Inline in running text: always underlined so it never relies on color alone. */
                inline: "font-medium text-foreground underline decoration-brand/50 hover:decoration-brand",
                /** Standalone (nav, footers): color shift on hover. */
                subtle: "text-muted-foreground hover:text-foreground",
                brand: "font-medium text-brand-ink hover:underline",
            },
        },
        defaultVariants: { variant: "inline" },
    },
)

export type LinkProps = AnchorProps & VariantProps<typeof linkVariants>

export function Link({ className, variant, ...props }: LinkProps) {
    return <Anchor data-slot="link" className={cn(linkVariants({ variant }), className)} {...props} />
}
