import type { ResolvedThemeMode } from "@/theme/mode"

export type ThemeScopeProps = {
    /**
     * Render this part in a different theme than the page:
     * - `"light"` / `"dark"` pin the theme (e.g. a dark header on a light page).
     * - `"inverse"` takes the opposite of the surrounding theme, whichever it is: a dark band on a
     *   light page and a light one on a dark page.
     *
     * Sets an attribute and tokens re-derive inside, so every component adapts. Omit it to follow the page.
     */
    theme?: ResolvedThemeMode | "inverse"
}

/** Attributes that scope a subtree to a theme. Spread them on the element: `<div {...themeScope(props)} />`. */
export function themeScope({ theme }: ThemeScopeProps) {
    return {
        "data-theme": theme === "inverse" ? undefined : theme,
        "data-inverse": theme === "inverse" ? "" : undefined,
    }
}
