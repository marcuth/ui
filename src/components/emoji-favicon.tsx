"use client"

import * as React from "react"

export type EmojiFaviconOptions = {
    /** Resolution size in pixels for the generated canvas PNG (default: 64). */
    size?: number
    /** Whether to restore the previous favicon href when the component unmounts. */
    revertOnUnmount?: boolean
}

export type EmojiFaviconProps = EmojiFaviconOptions & {
    /** The emoji symbol to set as the favicon (e.g. "🚀", "✨", "🎨"). */
    emoji: string
}

/**
 * Creates an SVG data URI for instant SSR and fast fallback.
 */
export function createEmojiFaviconSvg(emoji: string): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="90">${emoji}</text></svg>`
    return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

/**
 * Renders the emoji to a PNG data URL using HTML5 Canvas and the Noto Color Emoji font.
 * Falls back to the SVG data URI if canvas 2D is unavailable.
 */
export async function renderEmojiFaviconPng(emoji: string, size = 64): Promise<string> {
    if (typeof window === "undefined" || typeof document === "undefined") {
        return createEmojiFaviconSvg(emoji)
    }

    if ("fonts" in document) {
        try {
            await document.fonts.load(`${size}px "Noto Color Emoji"`)
        } catch {
            // Ignore font loading errors; canvas will fall back to system emoji
        }
    }

    try {
        const canvas = document.createElement("canvas")
        canvas.width = size
        canvas.height = size
        const ctx = canvas.getContext("2d")

        if (!ctx) {
            return createEmojiFaviconSvg(emoji)
        }

        ctx.clearRect(0, 0, size, size)
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.font = `${Math.floor(size * 0.84)}px "Noto Color Emoji", "Apple Color Emoji", "Segoe UI Emoji", sans-serif`
        ctx.fillText(emoji, size / 2, size / 2 + size * 0.04)

        return canvas.toDataURL("image/png")
    } catch {
        return createEmojiFaviconSvg(emoji)
    }
}

/**
 * Imperatively updates the document's favicon to the specified emoji.
 * Returns a cleanup function that restores the previous favicon href.
 */
export function setEmojiFavicon(emoji: string, options: EmojiFaviconOptions = {}): () => void {
    if (typeof document === "undefined") {
        return () => {}
    }

    const size = options.size ?? 64
    let link = document.querySelector<HTMLLinkElement>("link[data-emoji-favicon]")
    let previousHref = ""

    if (!link) {
        const existingIcon = document.querySelector<HTMLLinkElement>("link[rel~='icon']")
        if (existingIcon) {
            previousHref = existingIcon.href
            link = existingIcon
            link.setAttribute("data-emoji-favicon", "true")
        } else {
            link = document.createElement("link")
            link.rel = "icon"
            link.setAttribute("data-emoji-favicon", "true")
            document.head.appendChild(link)
        }
    } else {
        previousHref = link.href
    }

    // Set immediate SVG data URI
    link.href = createEmojiFaviconSvg(emoji)

    // Upgrade to high-resolution PNG with Noto Color Emoji once font is loaded
    let isCancelled = false
    renderEmojiFaviconPng(emoji, size).then((pngUrl) => {
        if (!isCancelled && link) {
            link.href = pngUrl
        }
    })

    return () => {
        isCancelled = true
        if (options.revertOnUnmount && link && previousHref) {
            link.href = previousHref
        }
    }
}

/**
 * Hook to dynamically set an emoji favicon in React components.
 */
export function useEmojiFavicon(emoji: string, options: EmojiFaviconOptions = {}): void {
    const size = options.size ?? 64
    const revertOnUnmount = options.revertOnUnmount ?? false

    React.useEffect(() => {
        return setEmojiFavicon(emoji, { size, revertOnUnmount })
    }, [emoji, size, revertOnUnmount])
}

/**
 * Declarative component that sets an emoji as the page favicon, prioritizing Noto Color Emoji.
 *
 * @example
 * <EmojiFavicon emoji="🚀" />
 */
export function EmojiFavicon({ emoji, size = 64, revertOnUnmount = false }: EmojiFaviconProps) {
    useEmojiFavicon(emoji, { size, revertOnUnmount })

    // Also emits a <link rel="icon"> in React 19 / document head for SSR
    return <link rel="icon" href={createEmojiFaviconSvg(emoji)} data-emoji-favicon="true" />
}
