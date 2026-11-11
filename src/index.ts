// Utilities
export { isExternalUrl, isInternalHref } from "@/lib/href"
export { cn } from "@/lib/utils"

// Theme
export { contrastRatio, isHexColor, normalizeHex, readableForeground, relativeLuminance } from "@/theme/contrast"
export {
    applyTheme,
    defineTheme,
    densities,
    radii,
    type Density,
    type Radius,
    type ThemeAttributes,
    type ThemeConfig,
    type ThemeStyle,
} from "@/theme/define-theme"
export {
    parseThemeMode,
    serializeThemeCookie,
    THEME_COOKIE,
    themeModes,
    type ResolvedThemeMode,
    type ThemeCookieOptions,
    type ThemeMode,
} from "@/theme/mode"
export { ThemeScript, type ThemeScriptProps } from "@/theme/theme-script"
export { setThemeMode, ThemeToggle, type ThemeToggleProps } from "@/components/theme/theme-toggle"

// shadcn/ui (generated with the CLI, adapted to the theme tokens)
export * from "@/components/ui/badge"
export * from "@/components/ui/button"
export * from "@/components/ui/card"
export * from "@/components/ui/field"
export * from "@/components/ui/input"
export * from "@/components/ui/label"
export * from "@/components/ui/separator"
export * from "@/components/ui/textarea"
export * from "@/components/ui/link"

// Composition
export { AppFooter, type AppFooterProps, type FooterLink, type FooterLinkGroup } from "@/components/app-footer"
export { AppHeader, NavLink, type AppHeaderProps, type NavLinkProps } from "@/components/app-header"
export { BRAND_DOMAIN, BrandMark, brandName, type BrandMarkProps } from "@/components/brand-mark"
export {
    Container,
    containerVariants,
    Inline,
    Section,
    sectionVariants,
    Stack,
    stackVariants,
    type ContainerProps,
    type SectionProps,
    type StackProps,
} from "@/components/layout"
export {
    Code,
    Eyebrow,
    Heading,
    headingVariants,
    Text,
    textVariants,
    type HeadingProps,
    type TextProps,
} from "@/components/typography"
