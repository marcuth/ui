import { THEME_COOKIE, type ThemeMode } from "@/theme/mode"

export type ThemeScriptProps = {
    /** Used when the visitor has no saved choice. Defaults to "dark", like marcuth.dev. */
    defaultMode?: ThemeMode
    cookieName?: string
    nonce?: string
}

/**
 * Blocking inline script for `<head>`: reads the saved mode (cookie) or the OS preference and
 * sets `data-theme` on `<html>` before first paint, so there is no light/dark flash.
 * Server-safe; add `suppressHydrationWarning` to `<html>` since the attribute is set pre-hydration.
 */
export function ThemeScript({ defaultMode = "dark", cookieName = THEME_COOKIE, nonce }: ThemeScriptProps) {
    const script = `(function(){try{var m=(document.cookie.match(/(?:^|; )${cookieName}=(light|dark|system)/)||[])[1]||${JSON.stringify(defaultMode)};var q=window.matchMedia("(prefers-color-scheme: dark)");var r=function(){return m==="system"?(q.matches?"dark":"light"):m};document.documentElement.dataset.theme=r();if(m==="system")q.addEventListener("change",function(){document.documentElement.dataset.theme=r()})}catch(e){}})()`
    return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: script }} />
}
