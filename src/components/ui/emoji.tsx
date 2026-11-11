import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"
import * as React from "react"

import { cn } from "@/lib/utils"

const emojiVariants = cva(
    "inline-flex shrink-0 select-none items-center justify-center leading-none font-normal [font-family:var(--font-noto-color-emoji,'Noto_Color_Emoji','Noto_Color_Emoji_Compat','Noto_Color_Emoji','Apple_Color_Emoji','Segoe_UI_Emoji',sans-serif)]",
    {
        variants: {
            size: {
                xs: "size-3.5 text-xs",
                sm: "size-4 text-sm",
                md: "size-5 text-base",
                lg: "size-6 text-lg",
                xl: "size-8 text-2xl",
                "2xl": "size-10 text-3xl",
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
