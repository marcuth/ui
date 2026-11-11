import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export const BRAND_DOMAIN = "marcuth.dev"

export type BrandMarkProps = Omit<ComponentProps<"span">, "children"> & {
    /** Subdomain of the site, e.g. "blog" renders "blog.marcuth.dev". Omit on the root site. */
    name?: string
    /** Parent domain. Defaults to "marcuth.dev". */
    domain?: string
    /** Show the brand-colored monogram tile before the wordmark. */
    monogram?: boolean
}

/** Formats the wordmark: `brandName("blog")` → "blog.marcuth.dev", `brandName()` → "marcuth.dev". */
export function brandName(name?: string, domain: string = BRAND_DOMAIN): string {
    const subdomain = name?.trim().toLowerCase()
    return subdomain ? `${subdomain}.${domain}` : domain
}

/**
 * The `{name}.marcuth.dev` wordmark shared by every site: the subdomain carries the weight and
 * the parent domain recedes, so each service reads as part of one family.
 * Wrap it in `<Anchor href="/">` to make it the home link.
 */
export function BrandMark({ className, name, domain = BRAND_DOMAIN, monogram = true, ...props }: BrandMarkProps) {
    const subdomain = name?.trim().toLowerCase()
    const letter = (subdomain || domain).charAt(0).toUpperCase()

    return (
        <span
            data-slot="brand-mark"
            role="img"
            aria-label={brandName(subdomain, domain)}
            className={cn("inline-flex items-center gap-2.5 font-display tracking-tight", className)}
            {...props}
        >
            {monogram ? (
                <span
                    aria-hidden="true"
                    className="grid size-7 shrink-0 place-items-center rounded-[min(var(--ui-radius-control),8px)] bg-brand text-sm font-semibold text-brand-foreground"
                >
                    {letter}
                </span>
            ) : null}
            <span aria-hidden="true" className="whitespace-nowrap">
                {subdomain ? (
                    <>
                        <span className="font-semibold text-foreground">{subdomain}</span>
                        <span className="text-muted-foreground">.{domain}</span>
                    </>
                ) : (
                    <span className="font-semibold text-foreground">{domain}</span>
                )}
            </span>
        </span>
    )
}
