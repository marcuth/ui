"use client"

import { useSyncExternalStore } from "react"

import type { ResolvedThemeMode } from "@/theme/mode"

function subscribe(onChange: () => void) {
    const observer = new MutationObserver(onChange)
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
    return () => observer.disconnect()
}

function getSnapshot(): ResolvedThemeMode {
    return document.documentElement.dataset.theme === "light" ? "light" : "dark"
}

/**
 * The resolved light/dark mode, read from `data-theme` on `<html>` (set by ThemeScript and
 * ThemeToggle). Replaces next-themes for components that need the mode in JS, like Sonner.
 * Server render assumes "dark", the library default.
 */
export function useThemeMode(): ResolvedThemeMode {
    return useSyncExternalStore(subscribe, getSnapshot, () => "dark")
}
