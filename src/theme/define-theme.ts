import type { CSSProperties } from "react"

import { normalizeHex, readableForeground } from "@/theme/contrast"

export const radii = ["sharp", "soft", "pill"] as const
export const densities = ["compact", "comfortable"] as const

export type Radius = (typeof radii)[number]
export type Density = (typeof densities)[number]

export type ThemeConfig = {
    /** The site's single accent color, as #rgb or #rrggbb. Defaults to the library brand. */
    brand?: string
    /**
     * Ink on top of the brand. Defaults to black or white, whichever has the higher WCAG contrast.
     * Override when the brand reads better with the other one (white on a mid red, for example).
     */
    brandForeground?: string
    /** Corner geometry of controls and cards. Defaults to "soft". */
    radius?: Radius
    /** Control heights and section spacing. Defaults to "comfortable". */
    density?: Density
}

export type ThemeStyle = CSSProperties & Record<`--${string}`, string>

export type ThemeAttributes = {
    "data-radius"?: Radius
    "data-density"?: Density
    style?: ThemeStyle
}

/**
 * Turns a site's theme config into attributes for its root element. Server-safe: call it in
 * the Next.js root layout and spread the result on `<html>` so the theme is in the first paint.
 *
 * ```tsx
 * const theme = defineTheme({ brand: "#e5484d", radius: "pill" })
 * <html lang="en" {...theme}>
 * ```
 */
export function defineTheme(config: ThemeConfig = {}): ThemeAttributes {
    const { brand, brandForeground, radius, density } = config

    if (radius !== undefined && !radii.includes(radius)) {
        throw new TypeError(`radius must be one of ${radii.join(", ")}; received "${radius}".`)
    }
    if (density !== undefined && !densities.includes(density)) {
        throw new TypeError(`density must be one of ${densities.join(", ")}; received "${density}".`)
    }

    const attributes: ThemeAttributes = {}
    if (radius) attributes["data-radius"] = radius
    if (density) attributes["data-density"] = density

    if (brand !== undefined) {
        const hex = normalizeHex(brand)
        const foreground = brandForeground === undefined ? readableForeground(hex) : normalizeHex(brandForeground)
        attributes.style = { "--brand": hex, "--brand-foreground": foreground }
    } else if (brandForeground !== undefined) {
        attributes.style = { "--brand-foreground": normalizeHex(brandForeground) }
    }

    return attributes
}

/** Applies a theme to an element at runtime (playgrounds, live previews). Clears knobs that are unset. */
export function applyTheme(element: HTMLElement, config: ThemeConfig = {}): void {
    const attributes = defineTheme(config)

    for (const name of ["data-radius", "data-density"] as const) {
        const value = attributes[name]
        if (value) element.setAttribute(name, value)
        else element.removeAttribute(name)
    }

    for (const property of ["--brand", "--brand-foreground"] as const) {
        const value = attributes.style?.[property]
        if (value) element.style.setProperty(property, value)
        else element.style.removeProperty(property)
    }
}
