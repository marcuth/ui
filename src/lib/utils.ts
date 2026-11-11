import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

// Teach tailwind-merge the library's theme scales so `h-control-md` vs `h-10` or
// `rounded-control` vs `rounded-none` resolve to the last one, like the built-ins do.
const twMerge = extendTailwindMerge({
    extend: {
        theme: {
            spacing: ["control-sm", "control-md", "control-lg", "section"],
            radius: ["control"],
            container: ["site-sm", "site-md", "site-lg", "site-xl"],
            font: ["display"],
            shadow: ["popover"],
        },
    },
})

export function cn(...inputs: ClassValue[]): string {
    return twMerge(clsx(inputs))
}
