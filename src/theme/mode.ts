export const themeModes = ["light", "dark", "system"] as const

export type ThemeMode = (typeof themeModes)[number]
export type ResolvedThemeMode = Exclude<ThemeMode, "system">

export const THEME_COOKIE = "marcuth-theme"

export function parseThemeMode(value: string | null | undefined): ThemeMode | undefined {
    return themeModes.find((mode) => mode === value)
}

export type ThemeCookieOptions = {
    /** Cookie name. Defaults to "marcuth-theme". */
    cookieName?: string
    /**
     * Parent domain shared by every site, e.g. ".marcuth.dev". Set it and a dark-mode choice
     * made on one subdomain carries over to the others. Omit it on localhost.
     */
    domain?: string
}

const ONE_YEAR_IN_SECONDS = 60 * 60 * 24 * 365

export function serializeThemeCookie(mode: ThemeMode, options: ThemeCookieOptions = {}): string {
    const { cookieName = THEME_COOKIE, domain } = options
    const parts = [`${cookieName}=${mode}`, "Path=/", `Max-Age=${ONE_YEAR_IN_SECONDS}`, "SameSite=Lax"]
    if (domain) parts.push(`Domain=${domain}`)
    return parts.join("; ")
}
