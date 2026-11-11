"use client"

import type { CSSProperties } from "react"
import { LuCircleCheck, LuInfo, LuLoaderCircle, LuOctagonX, LuTriangleAlert } from "react-icons/lu"
import { Toaster as Sonner, type ToasterProps } from "sonner"

import { useThemeMode } from "@/hooks/use-theme-mode"

/** Sonner, following the library's `data-theme` instead of next-themes. */
const Toaster = ({ ...props }: ToasterProps) => {
    const theme = useThemeMode()

    return (
        <Sonner
            theme={theme}
            className="toaster group"
            icons={{
                success: <LuCircleCheck className="size-4 text-success" />,
                info: <LuInfo className="size-4" />,
                warning: <LuTriangleAlert className="size-4 text-warning" />,
                error: <LuOctagonX className="size-4 text-destructive" />,
                loading: <LuLoaderCircle className="size-4 animate-spin" />,
            }}
            style={
                {
                    "--normal-bg": "var(--popover)",
                    "--normal-text": "var(--popover-foreground)",
                    "--normal-border": "var(--border)",
                    "--border-radius": "var(--radius)",
                } as CSSProperties
            }
            toastOptions={{
                classNames: {
                    toast: "cn-toast",
                },
            }}
            {...props}
        />
    )
}

export { toast } from "sonner"
export { Toaster }
