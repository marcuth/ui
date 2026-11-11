import { fileURLToPath } from "node:url"

import { defineConfig } from "vitest/config"

export default defineConfig({
    resolve: {
        alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) },
    },
    test: {
        environment: "jsdom",
        globals: true,
        setupFiles: ["./__tests__/setup.ts"],
        include: ["__tests__/**/*.test.{ts,tsx}"],
        coverage: { include: ["src/**/*.{ts,tsx}"] },
    },
})
