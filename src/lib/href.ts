/** Same-site paths, fragments, queries and relative paths: routed by Next.js. */
export function isInternalHref(href: string): boolean {
    return /^(?:\/(?!\/)|#|\?|\.\.?\/)/.test(href)
}

/** http(s) and protocol-relative URLs: open in a new tab by default. */
export function isExternalUrl(href: string): boolean {
    return /^(?:https?:)?\/\//i.test(href)
}
