import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"
import { themeScope, type ThemeScopeProps } from "@/theme/scope"

export const containerVariants = cva("mx-auto w-full px-5 sm:px-8", {
    variants: {
        size: {
            sm: "max-w-site-sm",
            md: "max-w-site-md",
            lg: "max-w-site-lg",
            xl: "max-w-site-xl",
        },
    },
    defaultVariants: { size: "lg" },
})

export type ContainerProps = ComponentProps<"div"> & VariantProps<typeof containerVariants> & { asChild?: boolean }

export function Container({ className, size, asChild = false, ...props }: ContainerProps) {
    const Component = asChild ? Slot.Root : "div"
    return <Component data-slot="container" className={cn(containerVariants({ size }), className)} {...props} />
}

export const stackVariants = cva("flex", {
    variants: {
        direction: { column: "flex-col", row: "flex-row" },
        gap: { 0: "gap-0", 1: "gap-1", 2: "gap-2", 3: "gap-3", 4: "gap-4", 6: "gap-6", 8: "gap-8", 12: "gap-12" },
        align: { start: "items-start", center: "items-center", end: "items-end", stretch: "items-stretch" },
        justify: { start: "justify-start", center: "justify-center", end: "justify-end", between: "justify-between" },
        wrap: { true: "flex-wrap" },
    },
    defaultVariants: { direction: "column", gap: 4 },
})

export type StackProps = ComponentProps<"div"> & VariantProps<typeof stackVariants> & { asChild?: boolean }

export function Stack({ className, direction, gap, align, justify, wrap, asChild = false, ...props }: StackProps) {
    const Component = asChild ? Slot.Root : "div"
    return (
        <Component
            data-slot="stack"
            className={cn(stackVariants({ direction, gap, align, justify, wrap }), className)}
            {...props}
        />
    )
}

/** Horizontal Stack, centered on the cross axis. */
export function Inline({ direction = "row", align = "center", gap = 2, ...props }: StackProps) {
    return <Stack direction={direction} align={align} gap={gap} {...props} />
}

export const sectionVariants = cva("", {
    variants: {
        spacing: {
            none: "",
            sm: "py-[calc(var(--ui-section-y)/2)]",
            md: "py-section",
        },
        tone: {
            default: "",
            muted: "bg-muted",
        },
    },
    defaultVariants: { spacing: "md", tone: "default" },
})

export type SectionProps = ComponentProps<"section"> & VariantProps<typeof sectionVariants> & ThemeScopeProps

export function Section({ className, spacing, tone, theme, inverse, ...props }: SectionProps) {
    return (
        <section
            data-slot="section"
            {...themeScope({ theme, inverse })}
            className={cn(sectionVariants({ spacing, tone }), className)}
            {...props}
        />
    )
}
