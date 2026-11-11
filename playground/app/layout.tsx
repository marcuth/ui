import { defineTheme, ThemeScript } from "@marcuth/ui"
import type { Metadata } from "next"
import type { ReactNode } from "react"

import "./globals.css"

export const metadata: Metadata = { title: "@marcuth/ui playground" }

// Server-side theme, exactly as a real site would set it. The playground overrides it live.
const theme = defineTheme({ brand: "#5b5bd6", radius: "soft", density: "comfortable" })

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning {...theme}>
            <head>
                <ThemeScript />
            </head>
            <body>{children}</body>
        </html>
    )
}
