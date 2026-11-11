import path from "node:path"

import type { NextConfig } from "next"

const config: NextConfig = {
    // The playground compiles the library straight from ../src.
    turbopack: { root: path.resolve(import.meta.dirname, "..") },
}

export default config
