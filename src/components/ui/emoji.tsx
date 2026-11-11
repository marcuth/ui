import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import * as React from "react"

import { cn } from "@/lib/utils"

const emojiVariants = cva(
    "inline-flex shrink-0 select-none items-center justify-center text-center font-normal leading-none overflow-visible px-[0.08em] font-emoji [font-family:var(--font-emoji,'Noto_Color_Emoji','Noto_Color_Emoji_Compat','Apple_Color_Emoji','Segoe_UI_Emoji',sans-serif)] [font-variant-emoji:emoji]",
    {
        variants: {
            size: {
                xs: "h-3.5 min-w-[1.25em] text-xs",
                sm: "h-4 min-w-[1.25em] text-sm",
                md: "h-5 min-w-[1.25em] text-base",
                lg: "h-6 min-w-[1.25em] text-lg",
                xl: "h-8 min-w-[1.25em] text-2xl",
                "2xl": "h-10 min-w-[1.25em] text-3xl",
            },
        },
        defaultVariants: {
            size: "md",
        },
    },
)

export type EmojiProps = React.ComponentProps<"span"> &
    VariantProps<typeof emojiVariants> & {
        emoji?: string
        label?: string
        asChild?: boolean
    }

function Emoji({ className, size = "md", emoji, label, children, asChild = false, ...props }: EmojiProps) {
    const Comp = asChild ? Slot.Root : "span"
    const content = emoji ?? children

    return (
        <Comp
            data-slot="emoji"
            role={label ? "img" : undefined}
            aria-label={label}
            aria-hidden={label ? undefined : true}
            className={cn(emojiVariants({ size }), className)}
            {...props}
        >
            {content}
        </Comp>
    )
}

export { Emoji, emojiVariants }
