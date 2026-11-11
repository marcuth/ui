import type { ResolvedThemeMode } from "@/theme/mode"

export type ThemeScopeProps = {
    /**
     * Render this part in a fixed theme (e.g. a dark header on a light page). Sets `data-theme`,
     * so tokens re-derive inside and every component adapts.
     */
    theme?: ResolvedThemeMode
    /**
     * Render this part in the opposite of the surrounding theme, whichever it is: a dark band on
     * a light page and a light one on a dark page. Ignored when `theme` is set.
     */
    inverse?: boolean
}

/** Attributes that scope a subtree to a theme. Spread them on the element: `<div {...themeScope(props)} />`. */
export function themeScope({ theme, inverse }: ThemeScopeProps) {
    return {
        "data-theme": theme,
        "data-inverse": !theme && inverse ? "" : undefined,
    }
}
