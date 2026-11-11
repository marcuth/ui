import eslint from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import prettierRecommended from "eslint-plugin-prettier/recommended"
import reactHooks from "eslint-plugin-react-hooks"
import unusedImports from "eslint-plugin-unused-imports"
import tseslint from "typescript-eslint"

export default defineConfig(
    globalIgnores(["dist/**", "coverage/**", "node_modules/**", "**/.next/**", "**/next-env.d.ts"]),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    reactHooks.configs.flat.recommended,
    prettierRecommended,
    {
        plugins: {
            "unused-imports": unusedImports,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
            ],
        },
    },
)
