import { copyFile, readdir } from "node:fs/promises"

// The theme stylesheets live at the src root so `@source "./"` points at the components
// both in src (for the playground) and in dist (for consumers).
for (const file of await readdir("src")) {
    if (file.endsWith(".css")) await copyFile(`src/${file}`, `dist/${file}`)
}
