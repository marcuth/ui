import type { ComponentProps, ReactNode } from "react"

import { Background, BackgroundGlow, BackgroundGrid } from "@/components/background"
import { BRAND_DOMAIN, BrandMark } from "@/components/brand-mark"
import { Heading, Text } from "@/components/typography"
import { Button } from "@/components/ui/button"
import { Anchor } from "@/components/ui/link"
import { cn } from "@/lib/utils"
import type { ThemeScopeProps } from "@/theme/scope"

/*
 * Error pages shared by marcuth.dev and every subdomain. `ErrorPage` is the base layout; the
 * presets (`NotFoundPage`, `ServerErrorPage`…) only carry the status code and the default copy
 * (pt-BR), and every piece of text can be overridden per site.
 *
 * Server-safe: wire them up from `not-found.tsx`, `error.tsx`, `global-error.tsx` or a route.
 *
 *   // app/not-found.tsx
 *   export default function NotFound() {
 *       return <NotFoundPage name="blog" />
 *   }
 *
 *   // app/error.tsx ("use client")
 *   export default function Error({ error, reset }) {
 *       return <ServerErrorPage name="blog" digest={error.digest} onRetry={reset} />
 *   }
 */

export type ErrorPageProps = Omit<ComponentProps<"main">, "title"> & {
    /** Status code or short label shown large: `404`, `500`, "Offline". */
    code: string | number
    title: ReactNode
    description?: ReactNode
    /** Subdomain of the site (`blog` → `blog.marcuth.dev`). Omit on the root site. */
    name?: string
    /** Where the primary action goes. Defaults to `/`. */
    homeHref?: string
    /** Replaces the default actions (home button + parent-site link). */
    actions?: ReactNode
    /** Extra content under the actions (an error digest, a status link…). */
    children?: ReactNode
    /** Hide the grid/glow background. */
    plain?: boolean
    /** Classes for the outer surface (e.g. to contain the page inside a frame). */
    surfaceClassName?: string
} & ThemeScopeProps

export function ErrorPage({
    code,
    title,
    description,
    name,
    homeHref = "/",
    actions,
    children,
    plain = false,
    surfaceClassName,
    theme,
    className,
    ...props
}: ErrorPageProps) {
    return (
        <Background theme={theme} className={cn("min-h-dvh bg-background", surfaceClassName)}>
            {plain ? null : (
                <>
                    <BackgroundGrid fade="radial" opacity={8} />
                    <BackgroundGlow opacity={22} />
                </>
            )}
            <main
                data-slot="error-page"
                className={cn(
                    "mx-auto flex min-h-dvh w-full max-w-site-md flex-col items-center justify-center gap-8 px-5 py-16 text-center sm:px-8",
                    className,
                )}
                {...props}
            >
                <Anchor
                    href={homeHref}
                    aria-label={BRAND_DOMAIN}
                    className="rounded-control outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                    <BrandMark name={name} />
                </Anchor>

                <div className="flex animate-enter flex-col items-center gap-4 motion-reduce:animate-fade-in">
                    <p
                        aria-hidden="true"
                        className="bg-linear-to-b from-foreground to-foreground/10 bg-clip-text font-display text-8xl leading-none font-semibold tracking-[-0.05em] text-transparent select-none sm:text-9xl"
                    >
                        {code}
                    </p>
                    <Heading level={1} size="xl">
                        {title}
                    </Heading>
                    {description ? (
                        <Text tone="muted" className="max-w-prose">
                            {description}
                        </Text>
                    ) : null}
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                    {actions ?? <ErrorPageActions name={name} homeHref={homeHref} />}
                </div>

                {children}
            </main>
        </Background>
    )
}

export type ErrorPageActionsProps = {
    name?: string
    homeHref?: string
    /** Label of the home button. */
    homeLabel?: string
}

/** Default actions: back to the site home and, on a subdomain, to the parent site. */
export function ErrorPageActions({ name, homeHref = "/", homeLabel = "Voltar ao início" }: ErrorPageActionsProps) {
    return (
        <>
            <Button asChild variant="brand" size="lg">
                <Anchor href={homeHref}>{homeLabel}</Anchor>
            </Button>
            {name ? (
                <Button asChild variant="outline" size="lg">
                    <Anchor href={`https://${BRAND_DOMAIN}`}>Ir para {BRAND_DOMAIN}</Anchor>
                </Button>
            ) : null}
        </>
    )
}

export type PresetProps = Omit<ErrorPageProps, "code" | "title"> & { title?: ReactNode }

export function NotFoundPage({ title = "Página não encontrada", description, ...props }: PresetProps) {
    return (
        <ErrorPage
            code={404}
            title={title}
            description={description ?? "O endereço não existe ou foi movido. Confira o link e tente de novo."}
            {...props}
        />
    )
}

export function UnauthorizedPage({ title = "Você precisa entrar", description, ...props }: PresetProps) {
    return (
        <ErrorPage
            code={401}
            title={title}
            description={description ?? "Faça login para acessar esta página."}
            {...props}
        />
    )
}

export function ForbiddenPage({ title = "Acesso negado", description, ...props }: PresetProps) {
    return (
        <ErrorPage
            code={403}
            title={title}
            description={description ?? "Sua conta não tem permissão para ver este conteúdo."}
            {...props}
        />
    )
}

export function TooManyRequestsPage({ title = "Calma, são muitas requisições", description, ...props }: PresetProps) {
    return (
        <ErrorPage
            code={429}
            title={title}
            description={description ?? "Você atingiu o limite de requisições. Aguarde um instante e tente novamente."}
            {...props}
        />
    )
}

export type ServerErrorPageProps = PresetProps & {
    /** Error id (`error.digest` in Next.js) shown so the failure can be traced in the logs. */
    digest?: string
    /** Adds a "Tentar de novo" button. Pass `reset` from `error.tsx`. */
    onRetry?: () => void
}

export function ServerErrorPage({
    title = "Algo deu errado",
    description,
    digest,
    onRetry,
    actions,
    name,
    homeHref,
    children,
    ...props
}: ServerErrorPageProps) {
    return (
        <ErrorPage
            code={500}
            title={title}
            description={description ?? "Tivemos um problema do nosso lado. Tente novamente em instantes."}
            name={name}
            homeHref={homeHref}
            actions={
                actions ??
                (onRetry ? (
                    <>
                        <Button variant="brand" size="lg" onClick={onRetry}>
                            Tentar de novo
                        </Button>
                        <Button asChild variant="outline" size="lg">
                            <Anchor href={homeHref ?? "/"}>Voltar ao início</Anchor>
                        </Button>
                    </>
                ) : undefined)
            }
            {...props}
        >
            {digest ? (
                <p className="font-mono text-xs text-muted-foreground">
                    ID do erro: <span className="text-foreground">{digest}</span>
                </p>
            ) : null}
            {children}
        </ErrorPage>
    )
}

export function MaintenancePage({ title = "Em manutenção", description, ...props }: PresetProps) {
    return (
        <ErrorPage
            code={503}
            title={title}
            description={description ?? "Estamos fazendo melhorias e voltamos já. Obrigado pela paciência."}
            {...props}
        />
    )
}
