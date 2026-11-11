const HEX_PATTERN = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i

export function isHexColor(value: string): boolean {
    return HEX_PATTERN.test(value)
}

/** Expands `#abc` to `#aabbcc` and lowercases. Throws on anything that is not a 3- or 6-digit hex. */
export function normalizeHex(value: string): string {
    if (!isHexColor(value)) throw new TypeError(`Expected a #rgb or #rrggbb color, received "${value}".`)
    const digits = value.slice(1).toLowerCase()
    if (digits.length === 6) return `#${digits}`
    return `#${[...digits].map((digit) => digit + digit).join("")}`
}

/** WCAG 2.x relative luminance, 0 (black) to 1 (white). */
export function relativeLuminance(hex: string): number {
    const normalized = normalizeHex(hex)
    const [red, green, blue] = [1, 3, 5].map((index) => {
        const channel = parseInt(normalized.slice(index, index + 2), 16) / 255
        return channel <= 0.04045 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4
    }) as [number, number, number]
    return 0.2126 * red + 0.7152 * green + 0.0722 * blue
}

export function contrastRatio(first: string, second: string): number {
    const [lighter, darker] = [relativeLuminance(first), relativeLuminance(second)].sort((a, b) => b - a) as [
        number,
        number,
    ]
    return (lighter + 0.05) / (darker + 0.05)
}

/** Black or white, whichever reads better on `background`. */
export function readableForeground(background: string): "#000000" | "#ffffff" {
    return contrastRatio(background, "#000000") >= contrastRatio(background, "#ffffff") ? "#000000" : "#ffffff"
}
