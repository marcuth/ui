import type { ComponentProps, CSSProperties } from "react"

import { cn } from "@/lib/utils"
import { themeScope, type ThemeScopeProps } from "@/theme/scope"

/*
 * Background patterns. Server-safe, pure CSS (gradients, masks, filters): no JS, no images.
 *
 * Compose: <Background> is a positioned, clipped surface; the pattern layers are absolutely
 * positioned behind its content and ignore pointer events.
 *
 *   <Background>
 *       <BackgroundGrid fade="radial" />
 *       <BackgroundGlow />
 *       <Container>…</Container>
 *   </Background>
 *
 * Colors come from the theme tokens, so every pattern follows light/dark and the site brand.
 */

export type BackgroundTone = "foreground" | "muted" | "brand"

export type BackgroundFade = "none" | "radial" | "top" | "bottom" | "x" | "edges"

const toneVar: Record<BackgroundTone, string> = {
    foreground: "var(--foreground)",
    muted: "var(--muted-foreground)",
    brand: "var(--brand)",
}

function tint(tone: BackgroundTone, percent: number) {
    return `color-mix(in oklab, ${toneVar[tone]} ${percent}%, transparent)`
}

const fadeMasks: Record<Exclude<BackgroundFade, "none">, string> = {
    radial: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 100%)",
    top: "linear-gradient(to bottom, #000 0%, #000 30%, transparent 100%)",
    bottom: "linear-gradient(to top, #000 0%, #000 30%, transparent 100%)",
    x: "linear-gradient(to right, transparent 0%, #000 20%, #000 80%, transparent 100%)",
    edges: "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
}

function layerStyle(fade: BackgroundFade, style?: CSSProperties): CSSProperties {
    if (fade === "none") return { ...style }
    const mask = fadeMasks[fade]
    return { maskImage: mask, WebkitMaskImage: mask, ...style }
}

type LayerProps = ComponentProps<"div"> & {
    /** Softens the pattern toward the edges with a mask. */
    fade?: BackgroundFade
}

function Layer({ className, fade = "none", style, ...props }: LayerProps) {
    return (
        <div
            aria-hidden
            className={cn("pointer-events-none absolute inset-0 -z-10", className)}
            style={layerStyle(fade, style)}
            {...props}
        />
    )
}

/** Clipped, positioned surface that hosts the pattern layers behind its children. */
export function Background({ className, theme, ...props }: ComponentProps<"div"> & ThemeScopeProps) {
    return (
        <div
            data-slot="background"
            {...themeScope({ theme })}
            className={cn("relative isolate overflow-hidden", className)}
            {...props}
        />
    )
}

export type BackgroundGridProps = LayerProps & {
    /** Cell size in px. */
    size?: number
    /** Line opacity, 0–100. */
    opacity?: number
    tone?: BackgroundTone
}

/** Square grid of thin lines. */
export function BackgroundGrid({
    size = 40,
    opacity = 10,
    tone = "foreground",
    className,
    style,
    ...props
}: BackgroundGridProps) {
    const line = tint(tone, opacity)
    return (
        <Layer
            data-slot="background-grid"
            className={className}
            style={{
                backgroundImage: `linear-gradient(to right, ${line} 1px, transparent 1px), linear-gradient(to bottom, ${line} 1px, transparent 1px)`,
                backgroundSize: `${size}px ${size}px`,
                ...style,
            }}
            {...props}
        />
    )
}

export type BackgroundDotsProps = LayerProps & {
    /** Distance between dots in px. */
    size?: number
    /** Dot radius in px. */
    radius?: number
    opacity?: number
    tone?: BackgroundTone
}

/** Regular dot matrix. */
export function BackgroundDots({
    size = 24,
    radius = 1,
    opacity = 25,
    tone = "foreground",
    className,
    style,
    ...props
}: BackgroundDotsProps) {
    return (
        <Layer
            data-slot="background-dots"
            className={className}
            style={{
                backgroundImage: `radial-gradient(${tint(tone, opacity)} ${radius}px, transparent ${radius}px)`,
                backgroundSize: `${size}px ${size}px`,
                ...style,
            }}
            {...props}
        />
    )
}

export type BackgroundLinesProps = LayerProps & {
    /** Distance between stripes in px. */
    size?: number
    /** Stripe angle in degrees. */
    angle?: number
    opacity?: number
    tone?: BackgroundTone
}

/** Diagonal (or any-angle) stripes. */
export function BackgroundLines({
    size = 12,
    angle = 45,
    opacity = 10,
    tone = "foreground",
    className,
    style,
    ...props
}: BackgroundLinesProps) {
    return (
        <Layer
            data-slot="background-lines"
            className={className}
            style={{
                backgroundImage: `repeating-linear-gradient(${angle}deg, ${tint(tone, opacity)} 0 1px, transparent 1px ${size}px)`,
                ...style,
            }}
            {...props}
        />
    )
}

export type BackgroundGradientProps = LayerProps & {
    variant?: "linear" | "radial" | "conic"
    tone?: BackgroundTone
    /** Gradient strength, 0–100. */
    opacity?: number
    /** Linear/conic angle in degrees. */
    angle?: number
}

/** Soft gradient wash: linear, radial (spotlight from the top) or conic. */
export function BackgroundGradient({
    variant = "linear",
    tone = "brand",
    opacity = 20,
    angle = 180,
    className,
    style,
    ...props
}: BackgroundGradientProps) {
    const color = tint(tone, opacity)
    const backgroundImage = {
        linear: `linear-gradient(${angle}deg, ${color}, transparent 70%)`,
        radial: `radial-gradient(ellipse 60% 50% at 50% 0%, ${color}, transparent 100%)`,
        conic: `conic-gradient(from ${angle}deg at 50% 50%, ${color}, transparent 30%, ${color} 60%, transparent 90%)`,
    }[variant]
    return (
        <Layer
            data-slot="background-gradient"
            data-variant={variant}
            className={className}
            style={{ backgroundImage, ...style }}
            {...props}
        />
    )
}

export type BackgroundGlowProps = Omit<ComponentProps<"div">, "children"> & {
    tone?: BackgroundTone
    /** Glow strength, 0–100. */
    opacity?: number
    /** Blur radius in px. */
    blur?: number
}

/** A single blurred ellipse hanging from the top edge, the classic hero glow. */
export function BackgroundGlow({
    tone = "brand",
    opacity = 35,
    blur = 80,
    className,
    style,
    ...props
}: BackgroundGlowProps) {
    return (
        <div
            aria-hidden
            data-slot="background-glow"
            className={cn(
                "pointer-events-none absolute -top-1/4 left-1/2 -z-10 h-1/2 w-3/4 max-w-4xl -translate-x-1/2 rounded-full",
                className,
            )}
            style={{ backgroundColor: tint(tone, opacity), filter: `blur(${blur}px)`, ...style }}
            {...props}
        />
    )
}

export type BackgroundBlurProps = Omit<ComponentProps<"div">, "children"> & {
    tone?: BackgroundTone
    /** Blob strength, 0–100. */
    opacity?: number
    /** Blur radius in px. */
    blur?: number
}

/** Two or three blurred blobs scattered across the surface (an aurora / mesh look). */
export function BackgroundBlur({
    tone = "brand",
    opacity = 25,
    blur = 100,
    className,
    style,
    ...props
}: BackgroundBlurProps) {
    const blobs = [
        { className: "-top-24 -left-24 size-96", tone },
        { className: "top-1/3 -right-32 size-[28rem]", tone: "foreground" as const },
        { className: "-bottom-32 left-1/4 size-80", tone },
    ]
    return (
        <div
            aria-hidden
            data-slot="background-blur"
            className={cn("pointer-events-none absolute inset-0 -z-10 overflow-hidden", className)}
            style={style}
            {...props}
        >
            {blobs.map((blob) => (
                <div
                    key={blob.className}
                    className={cn("absolute rounded-full", blob.className)}
                    style={{
                        backgroundColor: tint(blob.tone, blob.tone === "foreground" ? opacity / 3 : opacity),
                        filter: `blur(${blur}px)`,
                    }}
                />
            ))}
        </div>
    )
}

export type BackgroundNoiseProps = LayerProps & {
    /** Grain strength, 0–100. */
    opacity?: number
}

const noiseSvg =
    "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"

/** Film grain. Layer it over gradients to kill banding and add texture. */
export function BackgroundNoise({ opacity = 8, className, style, ...props }: BackgroundNoiseProps) {
    return (
        <Layer
            data-slot="background-noise"
            className={className}
            style={{ backgroundImage: noiseSvg, backgroundSize: "160px 160px", opacity: opacity / 100, ...style }}
            {...props}
        />
    )
}
