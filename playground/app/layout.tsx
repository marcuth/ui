import { defineTheme, ThemeScript, Toaster, TooltipProvider } from "@marcuth/ui"
import type { Metadata } from "next"
import type { ReactNode } from "react"

import "./globals.css"

export const metadata: Metadata = { title: "@marcuth/ui playground" }

// marcuth.dev defaults (emerald, pill, dark). The playground overrides the knobs live.
const theme = defineTheme()

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="pt-BR" suppressHydrationWarning {...theme}>
            <head>
                <ThemeScript />
            </head>
            <body>
                <TooltipProvider>{children}</TooltipProvider>
                <Toaster />
            </body>
        </html>
    )
}
