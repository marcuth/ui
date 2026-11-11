# CLAUDE.md

TypeScript package `@marcuth/ui`.

## Commands

- `npm run dev`: runs `src/index.ts` with tsx.
- `npm run build`: compiles TypeScript to `dist/`.
- `npm run lint`: runs ESLint.
- `npm run lint:fix`: runs ESLint with auto-fix.
- `npm run format`: formats the code with Prettier.
- `npm run test`: runs the tests with Vitest.
- `npm run test:cov`: generates the coverage report.

## Structure

- `src/`: source code (entrypoint at `src/index.ts`).
- `__tests__/`: unit tests (Vitest).
- `eslint.config.mjs`: ESLint flat config with Prettier and unused-imports.
- `.prettierrc.js`: Prettier (4 spaces, no semicolons, double quotes, sorted imports).

## Conventions

- Run `npm run lint:fix` and `npm run test` before finishing a change.
- Unused variables and arguments must be prefixed with `_`.
- Commit messages follow Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`).
