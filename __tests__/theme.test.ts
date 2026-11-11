import { describe, expect, it } from "vitest"

import {
    applyTheme,
    contrastRatio,
    defineTheme,
    normalizeHex,
    parseThemeMode,
    readableForeground,
    serializeThemeCookie,
} from "../src/index"

describe("contrast", () => {
    it("normalizes short and uppercase hex", () => {
        expect(normalizeHex("#ABC")).toBe("#aabbcc")
        expect(normalizeHex("#5B5BD6")).toBe("#5b5bd6")
    })

    it("rejects anything that is not a hex color", () => {
        expect(() => normalizeHex("red")).toThrow(TypeError)
        expect(() => normalizeHex("#12345")).toThrow(TypeError)
    })

    it("computes WCAG contrast ratios", () => {
        expect(contrastRatio("#000000", "#ffffff")).toBeCloseTo(21, 5)
        expect(contrastRatio("#777777", "#777777")).toBe(1)
    })

    it("picks black on light brands and white on dark ones", () => {
        expect(readableForeground("#fde047")).toBe("#000000")
        expect(readableForeground("#ffffff")).toBe("#000000")
        expect(readableForeground("#1e1b4b")).toBe("#ffffff")
        expect(readableForeground("#5b5bd6")).toBe("#ffffff")
    })
})

describe("defineTheme", () => {
    it("returns nothing for an empty config so the CSS defaults apply", () => {
        expect(defineTheme()).toEqual({})
    })

    it("maps knobs to data attributes and the brand to CSS variables", () => {
        expect(defineTheme({ brand: "#FDE047", radius: "pill", density: "compact" })).toEqual({
            "data-radius": "pill",
            "data-density": "compact",
            style: { "--brand": "#fde047", "--brand-foreground": "#000000" },
        })
    })

    it("honors an explicit brand foreground", () => {
        expect(defineTheme({ brand: "#e5484d" }).style?.["--brand-foreground"]).toBe("#000000")
        expect(defineTheme({ brand: "#e5484d", brandForeground: "#fff" }).style?.["--brand-foreground"]).toBe("#ffffff")
    })

    it("rejects unknown knob values", () => {
        // @ts-expect-error invalid on purpose
        expect(() => defineTheme({ radius: "round" })).toThrow(/radius must be one of/)
        // @ts-expect-error invalid on purpose
        expect(() => defineTheme({ density: "airy" })).toThrow(/density must be one of/)
        expect(() => defineTheme({ brand: "purple" })).toThrow(TypeError)
    })
})

describe("applyTheme", () => {
    it("sets and clears knobs on an element", () => {
        const element = document.createElement("div")

        applyTheme(element, { brand: "#e5484d", radius: "sharp" })
        expect(element.getAttribute("data-radius")).toBe("sharp")
        expect(element.style.getPropertyValue("--brand")).toBe("#e5484d")
        expect(element.style.getPropertyValue("--brand-foreground")).toBe("#000000")

        applyTheme(element, { density: "compact" })
        expect(element.hasAttribute("data-radius")).toBe(false)
        expect(element.getAttribute("data-density")).toBe("compact")
        expect(element.style.getPropertyValue("--brand")).toBe("")
    })
})

describe("theme mode", () => {
    it("parses only known modes", () => {
        expect(parseThemeMode("dark")).toBe("dark")
        expect(parseThemeMode("system")).toBe("system")
        expect(parseThemeMode("blue")).toBeUndefined()
        expect(parseThemeMode(undefined)).toBeUndefined()
    })

    it("serializes a cookie shared across subdomains when a domain is set", () => {
        expect(serializeThemeCookie("dark")).toBe("marcuth-theme=dark; Path=/; Max-Age=31536000; SameSite=Lax")
        expect(serializeThemeCookie("light", { domain: ".marcuth.dev", cookieName: "t" })).toBe(
            "t=light; Path=/; Max-Age=31536000; SameSite=Lax; Domain=.marcuth.dev",
        )
    })
})
