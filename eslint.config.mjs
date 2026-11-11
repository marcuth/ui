import eslint from "@eslint/js"
import { defineConfig, globalIgnores } from "eslint/config"
import prettierRecommended from "eslint-plugin-prettier/recommended"
import unusedImports from "eslint-plugin-unused-imports"
import tseslint from "typescript-eslint"

export default defineConfig(
    globalIgnores(["dist/**", "coverage/**", "node_modules/**"]),
    eslint.configs.recommended,
    tseslint.configs.recommended,
    prettierRecommended,
    {
        plugins: {
            "unused-imports": unusedImports
        },
        rules: {
            "@typescript-eslint/no-unused-vars": "off",
            "unused-imports/no-unused-imports": "error",
            "unused-imports/no-unused-vars": [
                "warn",
                { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" }
            ]
        }
    }
)
