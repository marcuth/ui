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
    CodeBlock,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockHeader,
    CodeBlockTitle,
    Container,
    densities,
    Emoji,
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
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Text,
    Textarea,
    ThemeToggle,
    type ThemeConfig,
} from "@marcuth/ui"
import { LuArrowRight, LuDownload, LuPlus } from "@marcuth/ui/icons/lucide"
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
                            <Anchor href="#contact">
                                <Emoji emoji="💬" className="mr-1.5" />
                                Contact
                            </Anchor>
                        </Button>
                    </>
                }
            >
                <NavLink href="/" active>
                    Home
                </NavLink>
                <NavLink href="/components">Components</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="https://github.com/marcuth">GitHub</NavLink>
            </AppHeader>

            <Container size="xl" className="grid gap-10 py-10 lg:grid-cols-[260px_1fr]">
                {/* Theme Knobs Sidebar */}
                <aside className="lg:sticky lg:top-24 lg:self-start">
                    <Card size="sm">
                        <CardHeader className="pb-3">
                            <CardTitle className="text-sm font-semibold flex items-center gap-2">
                                <Emoji emoji="🎨" size="sm" />
                                Theme Knobs
                            </CardTitle>
                            <CardDescription className="text-xs">Live per-site configuration.</CardDescription>
                        </CardHeader>
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
                    {/* Hero Section */}
                    <Stack gap={4} className="stagger max-w-2xl">
                        <div className="flex items-center gap-2">
                            <Eyebrow>Design System</Eyebrow>
                            <Badge variant="brand" className="gap-1">
                                <Emoji emoji="✨" size="xs" />
                                v0.1.0
                            </Badge>
                        </div>
                        <Heading level={1} size="display">
                            One identity, multiple sites.
                        </Heading>
                        <Text size="lg" tone="muted">
                            Fixed neutral tokens and a few knobs per subdomain: brand color, radius, and density. Built
                            with Next.js, React 19, and Tailwind CSS v4.
                        </Text>
                        <Inline gap={3} className="pt-2">
                            <Button variant="brand" size="lg" asChild>
                                <Anchor href="/components">
                                    <Emoji emoji="🧩" className="mr-1.5" />
                                    Explore Components
                                    <LuArrowRight data-icon="inline-end" />
                                </Anchor>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Anchor href="/projects">View Projects</Anchor>
                            </Button>
                        </Inline>
                    </Stack>

                    {/* Installation & Usage Guide */}
                    <section id="installation" className="flex flex-col gap-6">
                        <div className="flex flex-col gap-1">
                            <div className="flex items-center gap-2">
                                <Heading level={2} size="lg">
                                    Installation & Usage
                                </Heading>
                                <Badge variant="secondary">Quick Start</Badge>
                            </div>
                            <Text tone="muted">
                                Follow these simple steps to integrate @marcuth/ui into your Next.js application.
                            </Text>
                        </div>

                        <div className="flex flex-col gap-6">
                            {/* Step 1: Install */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2">
                                        <Badge
                                            variant="brand"
                                            className="size-6 rounded-full p-0 flex items-center justify-center font-bold"
                                        >
                                            1
                                        </Badge>
                                        <CardTitle className="text-base">Install the Package</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Install the library and its peer dependencies via your preferred package
                                        manager.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Tabs defaultValue="npm">
                                        <TabsList className="mb-3">
                                            <TabsTrigger value="npm">npm</TabsTrigger>
                                            <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                                            <TabsTrigger value="yarn">yarn</TabsTrigger>
                                            <TabsTrigger value="bun">bun</TabsTrigger>
                                        </TabsList>
                                        <TabsContent value="npm">
                                            <CodeBlock>
                                                <CodeBlockHeader>
                                                    <CodeBlockTitle>terminal</CodeBlockTitle>
                                                    <CodeBlockCopyButton value="npm install @marcuth/ui" />
                                                </CodeBlockHeader>
                                                <CodeBlockContent language="bash">
                                                    npm install @marcuth/ui
                                                </CodeBlockContent>
                                            </CodeBlock>
                                        </TabsContent>
                                        <TabsContent value="pnpm">
                                            <CodeBlock>
                                                <CodeBlockHeader>
                                                    <CodeBlockTitle>terminal</CodeBlockTitle>
                                                    <CodeBlockCopyButton value="pnpm add @marcuth/ui" />
                                                </CodeBlockHeader>
                                                <CodeBlockContent language="bash">
                                                    pnpm add @marcuth/ui
                                                </CodeBlockContent>
                                            </CodeBlock>
                                        </TabsContent>
                                        <TabsContent value="yarn">
                                            <CodeBlock>
                                                <CodeBlockHeader>
                                                    <CodeBlockTitle>terminal</CodeBlockTitle>
                                                    <CodeBlockCopyButton value="yarn add @marcuth/ui" />
                                                </CodeBlockHeader>
                                                <CodeBlockContent language="bash">
                                                    yarn add @marcuth/ui
                                                </CodeBlockContent>
                                            </CodeBlock>
                                        </TabsContent>
                                        <TabsContent value="bun">
                                            <CodeBlock>
                                                <CodeBlockHeader>
                                                    <CodeBlockTitle>terminal</CodeBlockTitle>
                                                    <CodeBlockCopyButton value="bun add @marcuth/ui" />
                                                </CodeBlockHeader>
                                                <CodeBlockContent>bun add @marcuth/ui</CodeBlockContent>
                                            </CodeBlock>
                                        </TabsContent>
                                    </Tabs>
                                </CardContent>
                            </Card>

                            {/* Step 2: Global CSS */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2">
                                        <Badge
                                            variant="brand"
                                            className="size-6 rounded-full p-0 flex items-center justify-center font-bold"
                                        >
                                            2
                                        </Badge>
                                        <CardTitle className="text-base">Configure Global Styles</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Import Tailwind CSS and the theme tokens in your <Code>app/globals.css</Code>.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <CodeBlock>
                                        <CodeBlockHeader>
                                            <CodeBlockTitle>app/globals.css</CodeBlockTitle>
                                            <CodeBlockCopyButton
                                                value={'@import "tailwindcss";\n@import "@marcuth/ui/theme.css";'}
                                            />
                                        </CodeBlockHeader>
                                        <CodeBlockContent>{`@import "tailwindcss";\n@import "@marcuth/ui/theme.css";`}</CodeBlockContent>
                                    </CodeBlock>
                                </CardContent>
                            </Card>

                            {/* Step 3: Root Layout */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2">
                                        <Badge
                                            variant="brand"
                                            className="size-6 rounded-full p-0 flex items-center justify-center font-bold"
                                        >
                                            3
                                        </Badge>
                                        <CardTitle className="text-base">Setup Theme in Root Layout</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Provide <Code>ThemeScript</Code>, <Code>TooltipProvider</Code>, and{" "}
                                        <Code>Toaster</Code> in <Code>app/layout.tsx</Code>.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <CodeBlock>
                                        <CodeBlockHeader>
                                            <CodeBlockTitle>app/layout.tsx</CodeBlockTitle>
                                            <CodeBlockCopyButton
                                                value={`import { defineTheme, ThemeScript, Toaster, TooltipProvider } from "@marcuth/ui"
import "./globals.css"

const theme = defineTheme({ brand: "#00bc7d" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning {...theme}>
            <head>
                <ThemeScript />
            </head>
            <body>
                <TooltipProvider>{children}</TooltipProvider>
                <Toaster />
            </body>
        </html>
    )
}`}
                                            />
                                        </CodeBlockHeader>
                                        <CodeBlockContent>{`import { defineTheme, ThemeScript, Toaster, TooltipProvider } from "@marcuth/ui"
import "./globals.css"

const theme = defineTheme({ brand: "#00bc7d" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning {...theme}>
            <head>
                <ThemeScript />
            </head>
            <body>
                <TooltipProvider>{children}</TooltipProvider>
                <Toaster />
            </body>
        </html>
    )
}`}</CodeBlockContent>
                                    </CodeBlock>
                                </CardContent>
                            </Card>

                            {/* Step 4: Component Usage */}
                            <Card>
                                <CardHeader className="pb-3">
                                    <div className="flex items-center gap-2">
                                        <Badge
                                            variant="brand"
                                            className="size-6 rounded-full p-0 flex items-center justify-center font-bold"
                                        >
                                            4
                                        </Badge>
                                        <CardTitle className="text-base">Use Components with Emoji Icons</CardTitle>
                                    </div>
                                    <CardDescription>
                                        Import UI components and use the <Code>Emoji</Code> component powered by Noto
                                        Color Emoji.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <CodeBlock>
                                        <CodeBlockHeader>
                                            <CodeBlockTitle>app/page.tsx</CodeBlockTitle>
                                            <CodeBlockCopyButton
                                                value={`import { Button, Badge, Card, Emoji } from "@marcuth/ui"

export default function Page() {
    return (
        <div className="flex flex-col gap-4 p-8">
            <Badge variant="brand">
                <Emoji emoji="🚀" size="xs" className="mr-1" />
                Ready for production
            </Badge>

            <Button variant="brand">
                <Emoji emoji="✨" className="mr-2" />
                Get Started
            </Button>
        </div>
    )
}`}
                                            />
                                        </CodeBlockHeader>
                                        <CodeBlockContent>{`import { Button, Badge, Card, Emoji } from "@marcuth/ui"

export default function Page() {
    return (
        <div className="flex flex-col gap-4 p-8">
            <Badge variant="brand">
                <Emoji emoji="🚀" size="xs" className="mr-1" />
                Ready for production
            </Badge>

            <Button variant="brand">
                <Emoji emoji="✨" className="mr-2" />
                Get Started
            </Button>
        </div>
    )
}`}</CodeBlockContent>
                                    </CodeBlock>
                                </CardContent>
                            </Card>
                        </div>
                    </section>

                    {/* Component Previews */}
                    <Demo title="Button with Emoji Icons">
                        <Inline gap={2} wrap>
                            <Button>
                                <Emoji emoji="✨" className="mr-1.5" />
                                Default
                            </Button>
                            <Button variant="brand">
                                <Emoji emoji="🚀" className="mr-1.5" />
                                Brand
                            </Button>
                            <Button variant="secondary">
                                <Emoji emoji="⚡" className="mr-1.5" />
                                Secondary
                            </Button>
                            <Button variant="outline">
                                <Emoji emoji="📦" className="mr-1.5" />
                                Outline
                            </Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="destructive">
                                <Emoji emoji="🔥" className="mr-1.5" />
                                Destructive
                            </Button>
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
                                Resume
                            </Button>
                            <Button size="icon" variant="outline" aria-label="Add">
                                <LuPlus />
                            </Button>
                        </Inline>
                    </Demo>

                    <Demo title="Badge & Status">
                        <Inline gap={2} wrap>
                            <Badge variant="success">
                                <Emoji emoji="🟢" size="xs" className="mr-1" />
                                Available
                            </Badge>
                            <Badge>Default</Badge>
                            <Badge variant="brand">
                                <Emoji emoji="💎" size="xs" className="mr-1" />
                                Brand
                            </Badge>
                            <Badge variant="secondary">Secondary</Badge>
                            <Badge variant="outline">Outline</Badge>
                            <Badge variant="success">Online</Badge>
                            <Badge variant="warning">
                                <Emoji emoji="⚠️" size="xs" className="mr-1" />
                                Beta
                            </Badge>
                            <Badge variant="destructive">
                                <Emoji emoji="🔴" size="xs" className="mr-1" />
                                Offline
                            </Badge>
                        </Inline>
                    </Demo>

                    <Demo title="Card">
                        <div className="grid gap-4 md:grid-cols-3">
                            {[
                                { name: "Portfolio", emoji: "🎨" },
                                { name: "Blog", emoji: "✍️" },
                                { name: "Tools", emoji: "🛠️" },
                            ].map((siteItem, index) => (
                                <Card key={siteItem.name}>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Emoji emoji={siteItem.emoji} />
                                            {siteItem.name}
                                        </CardTitle>
                                        <CardDescription>
                                            Smooth borders, constrained radius even in pill mode.
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
                                            Open
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </Demo>

                    <Demo title="Field · Input · Textarea">
                        <Card id="contact" className="max-w-md">
                            <CardContent>
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="name">Name</FieldLabel>
                                        <Input id="name" placeholder="Your name" />
                                    </Field>
                                    <Field data-invalid>
                                        <FieldLabel htmlFor="email">Email</FieldLabel>
                                        <Input id="email" defaultValue="you@" aria-invalid />
                                        <FieldError>This email seems incomplete.</FieldError>
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="message">Message</FieldLabel>
                                        <Textarea id="message" placeholder="Tell us about your project" />
                                        <FieldDescription>We reply within 2 business days.</FieldDescription>
                                    </Field>
                                    <Button variant="brand" className="self-start">
                                        <Emoji emoji="📨" className="mr-1.5" />
                                        Send Message
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
                        <Eyebrow>Inverted Theme Section</Eyebrow>
                        <Heading level={2} size="xl">
                            Tokens re-derive automatically inside sections.
                        </Heading>
                        <Text tone="muted">
                            <Code>{'<Section theme="dark">'}</Code> on a light page: components adapt seamlessly.
                        </Text>
                        <Inline gap={2}>
                            <Button variant="brand">
                                <Emoji emoji="✨" className="mr-1.5" />
                                Brand
                            </Button>
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
                        Full-stack developer. Portfolio and services.
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
                            { label: "Home", href: "/" },
                            { label: "Components", href: "/components" },
                            { label: "Projects", href: "/projects" },
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
                        <span>Built with @marcuth/ui</span>
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
