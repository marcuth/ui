# @marcuth/ui

Design system for Marcuth's portfolio and the services on its subdomains: **one visual identity, a few knobs per site**.

- **Fixed identity, taken from [marcuth.dev](https://marcuth.dev):** shadcn zinc neutrals, emerald-500 brand with white ink, Geist, pill controls, dark by default.
- **Per-site knobs:** brand color, corner radius (`sharp` · `soft` · `pill`), density (`compact` · `comfortable`), fonts.
- Brand-derived tokens (`brand-subtle`, `brand-border`, `brand-ink`, `ring`, readable `brand-foreground`) are computed from the one color you pick.
- Next.js + React 19 + Tailwind CSS v4, built on shadcn/ui. shadcn token names, `className` merges via `tailwind-merge`, `asChild` for Next.js `<Link>`.

## Install

```bash
npm install @marcuth/ui
```

## Use in Next.js

`app/globals.css`:

```css
@import "tailwindcss";
@import "@marcuth/ui/theme.css";

```

`app/layout.tsx`:

```tsx
import { defineTheme, ThemeScript } from "@marcuth/ui"
import { Geist } from "next/font/google"

import "./globals.css"

// Geist is picked up automatically through next/font's --font-geist-sans variable.
// Put the className on <html>, not <body>: the tokens resolve at the root.
const sans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })

// One line per site: this is what makes blog.marcuth.dev differ from marcuth.dev.
// The root site can skip it: the defaults are marcuth.dev's own values.
const theme = defineTheme({ brand: "#f76b15", radius: "soft" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="pt-BR" className={sans.variable} suppressHydrationWarning {...theme}>
            <head>
                <ThemeScript />
            </head>
            <body>{children}</body>
        </html>
    )
}
```

`defineTheme` is server-safe, so the theme is in the first paint. `ThemeScript` sets `data-theme` from the saved choice before paint (default `"dark"`, like marcuth.dev; pass `defaultMode="system"` to follow the OS), so there is no light/dark flash.

### Brand

```tsx
<BrandMark name="blog" />  // blog.marcuth.dev
<BrandMark />              // marcuth.dev
brandName("tools")         // "tools.marcuth.dev"
```

The subdomain carries the weight, `.marcuth.dev` recedes, and the monogram tile takes the site's brand color.

### Icons

Every [react-icons](https://react-icons.github.io/react-icons/) set, one entry point per set so apps only load what they import:

```tsx
import { LuArrowRight } from "@marcuth/ui/icons/lucide"     // the UI set
import { SiGithub } from "@marcuth/ui/icons/simple-icons"   // brand logos
import { IconContext, type IconType } from "@marcuth/ui/icons"
```

| Entry point (`@marcuth/ui/icons/…`) | Set | Prefix |
| --- | --- | --- |
| `lucide` | Lucide (UI default) | `Lu` |
| `simple-icons` | Simple Icons (brand logos) | `Si` |
| `ant-design` | Ant Design Icons | `Ai` |
| `boxicons` | BoxIcons | `Bi` |
| `bootstrap` | Bootstrap Icons | `Bs` |
| `css-gg` | css.gg | `Cg` |
| `circum` | Circum Icons | `Ci` |
| `devicons` | Devicons | `Di` |
| `font-awesome` | Font Awesome 5 | `Fa` |
| `font-awesome-6` | Font Awesome 6 | `Fa6` |
| `flat-color` | Flat Color Icons | `Fc` |
| `feather` | Feather | `Fi` |
| `game-icons` | Game Icons | `Gi` |
| `octicons` | GitHub Octicons | `Go` |
| `grommet` | Grommet Icons | `Gr` |
| `heroicons` | Heroicons | `Hi` |
| `heroicons-2` | Heroicons 2 | `Hi2` |
| `icomoon` | IcoMoon Free | `Im` |
| `ionicons-4` | Ionicons 4 | `Io` |
| `ionicons` | Ionicons 5 | `Io5` |
| `line-awesome` | Icons8 Line Awesome | `Lia` |
| `material-design` | Material Design | `Md` |
| `phosphor` | Phosphor Icons | `Pi` |
| `remix` | Remix Icon | `Ri` |
| `radix` | Radix Icons | `Rx` |
| `simple-line` | Simple Line Icons | `Sl` |
| `tabler` | Tabler Icons | `Tb` |
| `themify` | Themify Icons | `Tfi` |
| `typicons` | Typicons | `Ti` |
| `vscode` | VS Code Icons | `Vsc` |
| `weather` | Weather Icons | `Wi` |

The files are generated from react-icons' manifest with `npm run icons` (it fails if a new set appears without a slug). Check each set's license in its file header.

Inside a `Button`, mark icon position with `data-icon="inline-start" | "inline-end"` for the right padding.

### Dark mode shared across subdomains

```tsx
<ThemeToggle domain=".example.dev" />
```

The choice is stored in a cookie on the parent domain, so switching on `blog.example.dev` also applies on `example.dev`.

### Links

`Link` (styled) and `Anchor` (unstyled) pick the element from the href: internal paths (`/`, `#`, `?`, `./`) render Next.js `<Link>`, anything else renders `<a>`, and http(s) URLs open in a new tab. `NavLink` and `AppFooter` use the same logic.

```tsx
<Link href="/projetos">Projetos</Link>            // next/link
<Link href="https://github.com/marcuth">GitHub</Link> // <a target="_blank">

<Button asChild variant="brand">
    <Anchor href="/contato">Fale comigo</Anchor>
</Button>
```

## Components

Base components come from the **shadcn/ui CLI** (`radix-nova` style, see `components.json`) and are only adapted to the theme tokens.

| Group       | Exports                                                                                |
| ----------- | -------------------------------------------------------------------------------------- |
| shadcn/ui   | `Button`, `Badge`, `Card*`, `Field*`, `Input`, `Textarea`, `Label`, `Separator`        |
| Links       | `Link`, `Anchor`, `isInternalHref`                                                     |
| Typography  | `Heading`, `Text`, `Eyebrow`, `Code`                                                   |
| Layout      | `Container`, `Stack`, `Inline`, `Section` (`theme="dark"` flips a band)                |
| App shell   | `AppHeader`, `NavLink`, `AppFooter`, `BrandMark`                                       |
| Theme       | `defineTheme`, `applyTheme`, `ThemeScript`, `ThemeToggle`, `setThemeMode`              |
| Utilities   | `cn`, `*Variants` (cva), `readableForeground`, `contrastRatio`                         |

Additions on top of shadcn: `brand` variant on `Button` and `Badge`, `success`/`warning` on `Badge`, heights follow the density knob.

### Radius

Two layers, so the `pill` knob never balloons multi-line surfaces:

- `--radius`: base of the shadcn scale (`rounded-sm` … `rounded-4xl`). Cards, textarea and popovers use it. Always bounded (4px / 10px / 12px).
- `--ui-radius-control` (`rounded-control`): single-line controls only (button, input, badge). Becomes fully round on `pill`.

## Motion

Following Emil Kowalski's design engineering rules: only `transform`/`opacity`/`filter` move, strong custom ease-out (`cubic-bezier(0.23, 1, 0.32, 1)`), UI under 300ms, frequent interactions don't move.

- `Button`: `scale(0.97)` on press (150ms). Transitions list exact properties, never `all`.
- `ThemeToggle`: sun/moon crossfade with scale 0.75 + rotate + 2px blur. The rest of the page flips instantly.
- `FieldError`: enters with `@starting-style` (fade + 4px).
- `animate-enter` / `animate-fade-in` utilities, and `stagger` to cascade direct children 60ms apart. For first-paint content.
- `prefers-reduced-motion`: fades stay, movement and blur go.
- Tokens: `--ui-ease-out`, `--ui-ease-in-out`, `--ui-ease-drawer`, `--ui-duration-fast|base|slow`, `--ui-stagger`.

## Tokens

Tailwind utilities available after importing `theme.css`:

- Colors: `background`, `foreground`, `card`, `popover`, `muted`, `accent`, `primary`, `secondary`, `border`, `input`, `ring`, `destructive`, `success`, `warning`, `brand`, `brand-foreground`, `brand-subtle`, `brand-border`, `brand-ink`
- `rounded-control`, `rounded-sm` … `rounded-4xl` (bounded scale)
- `h-control-sm|md|lg`, `py-section`
- `max-w-site-sm|md|lg|xl`
- `font-display`, `font-sans`, `font-mono`
- `dark:` variant follows `data-theme="dark"`

Raw CSS variables: colors use shadcn names (`--background`, `--primary`…). Everything else is prefixed `--ui-` (`--ui-radius-control`, `--ui-font-display`…).

## Development

```bash
npm run dev      # Next.js playground (playground/) with live theme knobs
npm run test
npm run build
```
