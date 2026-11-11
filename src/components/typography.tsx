import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import type { ComponentProps } from "react"

import { cn } from "@/lib/utils"

export const headingVariants = cva("font-display font-semibold tracking-tight text-balance text-foreground", {
    variants: {
        size: {
            display: "text-5xl leading-[1.05] tracking-[-0.03em] sm:text-6xl",
            xl: "text-4xl leading-[1.1] tracking-[-0.025em]",
            lg: "text-2xl leading-tight",
            md: "text-xl leading-snug",
            sm: "text-base leading-snug",
        },
    },
    defaultVariants: { size: "lg" },
})

const defaultSizeByLevel = { 1: "xl", 2: "lg", 3: "md", 4: "sm", 5: "sm", 6: "sm" } as const

export type HeadingProps = ComponentProps<"h2"> &
    VariantProps<typeof headingVariants> & {
        /** Semantic level. The visual `size` follows it unless set. */
        level?: 1 | 2 | 3 | 4 | 5 | 6
        asChild?: boolean
    }

export function Heading({ className, level = 2, size, asChild = false, ...props }: HeadingProps) {
    const Component = asChild ? Slot.Root : (`h${level}` as const)
    return (
        <Component
            data-slot="heading"
            className={cn(headingVariants({ size: size ?? defaultSizeByLevel[level] }), className)}
            {...props}
        />
    )
}

export const textVariants = cva("text-pretty", {
    variants: {
        size: {
            lg: "text-lg leading-relaxed",
            md: "text-base leading-relaxed",
            sm: "text-sm leading-normal",
            xs: "text-xs leading-normal",
        },
        tone: {
            default: "text-foreground",
            muted: "text-muted-foreground",
            brand: "text-brand-ink",
            destructive: "text-destructive",
        },
        weight: { normal: "font-normal", medium: "font-medium", semibold: "font-semibold" },
    },
    defaultVariants: { size: "md", tone: "default", weight: "normal" },
})

export type TextProps = ComponentProps<"p"> &
    VariantProps<typeof textVariants> & {
        asChild?: boolean
    }

export function Text({ className, size, tone, weight, asChild = false, ...props }: TextProps) {
    const Component = asChild ? Slot.Root : "p"
    return <Component data-slot="text" className={cn(textVariants({ size, tone, weight }), className)} {...props} />
}

/** Small uppercase label above a heading. */
export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
    return (
        <p
            data-slot="eyebrow"
            className={cn("text-xs font-medium tracking-[0.08em] text-brand-ink uppercase", className)}
            {...props}
        />
    )
}

export function Code({ className, ...props }: ComponentProps<"code">) {
    return (
        <code
            data-slot="code"
            className={cn(
                "rounded-[calc(var(--ui-radius-control)/2)] bg-muted px-1.5 py-0.5 font-mono text-[0.9em]",
                className,
            )}
            {...props}
        />
    )
}
