"use client"

import {
    Anchor,
    AppFooter,
    AppHeader,
    applyTheme,
    Badge,
    BrandMark,
    brandName,
    Button,
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    Code,
    Container,
    densities,
    Eyebrow,
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    Heading,
    Inline,
    Input,
    NavLink,
    radii,
    Section,
    Separator,
    Stack,
    Text,
    Textarea,
    ThemeToggle,
    type ThemeConfig,
} from "@marcuth/ui"
import { LuArrowRight, LuCircleCheck, LuDownload, LuPlus } from "@marcuth/ui/icons/lucide"
import { SiGithub } from "@marcuth/ui/icons/simple-icons"
import { useEffect, useState, type ReactNode } from "react"

/** One preset per site: same identity, different knobs. The root site uses marcuth.dev's own values. */
const sites = {
    portfolio: { name: undefined, config: { brand: "#00bc7d", brandForeground: "#ffffff", radius: "pill" } },
    blog: { name: "blog", config: { brand: "#f76b15", radius: "soft", density: "comfortable" } },
    tools: { name: "tools", config: { brand: "#3b82f6", radius: "sharp", density: "compact" } },
} satisfies Record<string, { name: string | undefined; config: ThemeConfig }>

type SiteKey = keyof typeof sites

export function Playground() {
    const [site, setSite] = useState<SiteKey>("portfolio")
    const [config, setConfig] = useState<ThemeConfig>(sites.portfolio.config)

    useEffect(() => {
        applyTheme(document.documentElement, config)
    }, [config])

    function selectSite(key: SiteKey) {
        setSite(key)
        setConfig(sites[key].config)
    }

    return (
        <>
            <AppHeader
                brand={
                    <Anchor href="/">
                        <BrandMark name={sites[site].name} />
                    </Anchor>
                }
                actions={
                    <>
                        <ThemeToggle />
                        <Button variant="brand" size="sm" asChild>
                            <Anchor href="#contato">Fale comigo</Anchor>
                        </Button>
                    </>
                }
            >
                <NavLink href="/" active>
                    Início
                </NavLink>
                <NavLink href="/projetos">Projetos</NavLink>
                <NavLink href="https://github.com/marcuth">GitHub</NavLink>
            </AppHeader>

            <Container size="xl" className="grid gap-10 py-10 lg:grid-cols-[260px_1fr]">
                <aside className="lg:sticky lg:top-24 lg:self-start">
                    <Card size="sm">
                        <CardContent>
                            <Stack gap={6}>
                                <Knob label={brandName(sites[site].name)}>
                                    <Segmented
                                        value={site}
                                        options={Object.keys(sites) as SiteKey[]}
                                        onChange={selectSite}
                                    />
                                </Knob>
                                <Separator />
                                <Knob label="Brand">
                                    <Inline gap={2}>
                                        <input
                                            aria-label="Brand color"
                                            type="color"
                                            value={config.brand}
                                            onChange={(event) => setConfig({ ...config, brand: event.target.value })}
                                            className="size-control-md shrink-0 cursor-pointer rounded-control border bg-card p-1"
                                        />
                                        <Code>{config.brand}</Code>
                                    </Inline>
                                </Knob>
                                <Knob label="Radius">
                                    <Segmented
                                        value={config.radius ?? "soft"}
                                        options={radii}
                                        onChange={(radius) => setConfig({ ...config, radius })}
                                    />
                                </Knob>
                                <Knob label="Density">
                                    <Segmented
                                        value={config.density ?? "comfortable"}
                                        options={densities}
                                        onChange={(density) => setConfig({ ...config, density })}
                                    />
                                </Knob>
                            </Stack>
                        </CardContent>
                    </Card>
                </aside>

                <main className="flex min-w-0 flex-col gap-16">
                    <Stack gap={4} className="stagger max-w-2xl">
                        <Eyebrow>Design system</Eyebrow>
                        <Heading level={1} size="display">
                            Uma identidade, vários sites.
                        </Heading>
                        <Text size="lg" tone="muted">
                            Tokens neutros fixos e poucos knobs por subdomínio: cor de marca, raio e densidade. Troque
                            no painel ao lado e veja tudo derivar.
                        </Text>
                        <Inline gap={3} className="pt-2">
                            <Button variant="brand" size="lg" asChild>
                                <Anchor href="/projetos">
                                    Ver projetos
                                    <LuArrowRight data-icon="inline-end" />
                                </Anchor>
                            </Button>
                            <Button variant="outline" size="lg">
                                Currículo
                            </Button>
                        </Inline>
                    </Stack>

                    <Demo title="Button">
                        <Inline gap={2} wrap>
                            <Button>Default</Button>
                            <Button variant="brand">Brand</Button>
                            <Button variant="secondary">Secondary</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="destructive">Destructive</Button>
                            <Button variant="link">Link</Button>
                            <Button disabled>Disabled</Button>
                        </Inline>
                        <Inline gap={2} wrap>
                            <Button size="xs">Extra small</Button>
                            <Button size="sm">Small</Button>
                            <Button>Default</Button>
                            <Button size="lg">Large</Button>
                            <Button variant="outline">
                                <LuDownload data-icon="inline-start" />
                                Currículo
                            </Button>
                            <Button size="icon" variant="outline" aria-label="Adicionar">
                                <LuPlus />
                            </Button>
                        </Inline>
                    </Demo>

                    <Demo title="Badge">
                        <Inline gap={2} wrap>
                            <Badge variant="success">
                                <LuCircleCheck data-icon="inline-start" />
                                Disponível
                            </Badge>
                            <Badge>Default</Badge>
                            <Badge variant="brand">Brand</Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="outline">Outline</Badge>
                            <Badge variant="success">Online</Badge>
                            <Badge variant="warning">Beta</Badge>
                            <Badge variant="destructive">Offline</Badge>
                        </Inline>
                    </Demo>

                    <Demo title="Card">
                        <div className="grid gap-4 md:grid-cols-3">
                            {["Portfólio", "Blog", "Tools"].map((name, index) => (
                                <Card key={name}>
                                    <CardHeader>
                                        <CardTitle>{name}</CardTitle>
                                        <CardDescription>
                                            Bordas suaves, raio limitado mesmo no modo pill.
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <Inline gap={2}>
                                            <Badge variant={index === 0 ? "brand" : "secondary"}>2026</Badge>
                                            <Text size="sm" tone="muted">
                                                Next.js · Tailwind 4
                                            </Text>
                                        </Inline>
                                    </CardContent>
                                    <CardFooter>
                                        <Button size="sm" variant={index === 0 ? "brand" : "outline"}>
                                            Abrir
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </Demo>

                    <Demo title="Field · Input · Textarea">
                        <Card id="contato" className="max-w-md">
                            <CardContent>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="name">Nome</FieldLabel>
                                        <Input id="name" placeholder="Seu nome" />
                                    </Field>
                                    <Field data-invalid>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <Input id="email" defaultValue="voce@" aria-invalid />
                                        <FieldError>Esse email parece incompleto.</FieldError>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="message">Mensagem</FieldLabel>
                                        <Textarea id="message" placeholder="Conte sobre o projeto" />
                                        <FieldDescription>Respondo em até 2 dias úteis.</FieldDescription>
                                    </Field>
                                    <Button variant="brand" className="self-start">
                                        Enviar
                                    </Button>
                                </FieldGroup>
                            </CardContent>
                        </Card>
                    </Demo>
                </main>
            </Container>

            <Section theme="dark" className="border-y">
                <Container size="lg">
                    <Stack gap={4} align="start" className="max-w-xl">
                        <Eyebrow>Section com tema invertido</Eyebrow>
                        <Heading level={2} size="xl">
                            Tokens re-derivam dentro da seção.
                        </Heading>
                        <Text tone="muted">
                            <Code>{'<Section theme="dark">'}</Code> numa página clara: os componentes se adaptam
                            sozinhos.
                        </Text>
                        <Inline gap={2}>
                            <Button variant="brand">Brand</Button>
                            <Button variant="outline">Outline</Button>
                            <Badge variant="brand">Brand badge</Badge>
                        </Inline>
                    </Stack>
                </Container>
            </Section>

            <AppFooter
                brand={<BrandMark name={sites[site].name} />}
                tagline={
                    <>
                        Desenvolvedor full-stack. Portfólio e serviços.
                        <span className="mt-3 flex gap-1">
                            <Button asChild size="icon-sm" variant="ghost" aria-label="GitHub">
                                <Anchor href="https://github.com/marcuth">
                                    <SiGithub />
                                </Anchor>
                            </Button>
                        </span>
                    </>
                }
                groups={[
                    {
                        title: "Sites",
                        links: [
                            { label: "Portfólio", href: "/" },
                            { label: "Projetos", href: "/projetos" },
                        ],
                    },
                    {
                        title: "Social",
                        links: [{ label: "GitHub", href: "https://github.com/marcuth" }],
                    },
                ]}
                bottom={
                    <>
                        <span>© 2026 Marcuth</span>
                        <span>Feito com @marcuth/ui</span>
                    </>
                }
            />
        </>
    )
}

function Knob({ label, children }: { label: string; children: ReactNode }) {
    return (
        <Stack gap={2}>
            <Text size="xs" tone="muted" weight="medium">
                {label}
            </Text>
            {children}
        </Stack>
    )
}

function Demo({ title, children }: { title: string; children: ReactNode }) {
    return (
        <Stack gap={4}>
            <Heading level={2} size="sm" className="text-muted-foreground">
                {title}
            </Heading>
            {children}
        </Stack>
    )
}

function Segmented<T extends string>({
    value,
    options,
    onChange,
}: {
    value: T
    options: readonly T[]
    onChange: (value: T) => void
}) {
    return (
        <div className="flex rounded-control bg-muted p-0.5">
            {options.map((option) => (
                <button
                    key={option}
                    type="button"
                    aria-pressed={option === value}
                    onClick={() => onChange(option)}
                    className="h-control-sm flex-1 rounded-[calc(var(--ui-radius-control)-2px)] px-2 text-xs text-muted-foreground transition-colors aria-pressed:bg-card aria-pressed:text-foreground aria-pressed:shadow-sm"
                >
                    {option}
                </button>
            ))}
        </div>
    )
}
