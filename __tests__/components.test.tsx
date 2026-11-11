import { fireEvent, render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
    AppFooter,
    AppHeader,
    Background,
    BackgroundGrid,
    BackgroundNoise,
    Badge,
    BrandMark,
    brandName,
    Button,
    Emoji,
    ErrorPage,
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
    ForbiddenPage,
    Heading,
    Input,
    isInternalHref,
    Link,
    NavLink,
    NotFoundPage,
    Section,
    ServerErrorPage,
    Textarea,
    ThemeToggle,
} from "../src/index"

describe("Button (shadcn)", () => {
    it("follows the theme knobs: control radius and density height", () => {
        render(<Button variant="brand">Contratar</Button>)
        const button = screen.getByRole("button", { name: "Contratar" })
        expect(button).toHaveClass("bg-brand", "text-brand-foreground", "h-control-md", "rounded-control")
    })

    it("gives press feedback with scale, not translate, and never transitions `all`", () => {
        render(<Button>Press</Button>)
        const button = screen.getByRole("button")
        expect(button.className).toContain("active:not-aria-[haspopup]:scale-[0.97]")
        expect(button.className).toContain("transition-[color,background-color,border-color,box-shadow,scale]")
        expect(button.className).not.toContain("transition-all")
    })

    it("lets className win over variant classes", () => {
        render(<Button className="h-12 bg-destructive">Go</Button>)
        const button = screen.getByRole("button")
        expect(button).toHaveClass("h-12", "bg-destructive")
        expect(button).not.toHaveClass("h-control-md", "bg-primary")
    })

    it("renders its child with asChild", () => {
        render(
            <Button asChild variant="outline">
                <Link href="/contato">Contato</Link>
            </Button>,
        )
        expect(screen.getByRole("link", { name: "Contato" })).toHaveAttribute("href", "/contato")
    })
})

describe("Textarea (shadcn)", () => {
    it("keeps the bounded radius instead of the pill control radius", () => {
        render(<Textarea aria-label="Mensagem" />)
        const textarea = screen.getByRole("textbox", { name: "Mensagem" })
        expect(textarea).toHaveClass("rounded-lg")
        expect(textarea).not.toHaveClass("rounded-control")
    })
})

describe("Link", () => {
    it("classifies hrefs", () => {
        for (const href of ["/", "/projetos", "#contato", "?tab=1", "./a", "../b"]) {
            expect(isInternalHref(href)).toBe(true)
        }
        for (const href of ["https://github.com", "//cdn.example.com", "mailto:a@b.c", "tel:+55"]) {
            expect(isInternalHref(href)).toBe(false)
        }
    })

    it("keeps internal links in the same tab", () => {
        render(<Link href="/projetos">Projetos</Link>)
        const link = screen.getByRole("link", { name: "Projetos" })
        expect(link).toHaveAttribute("href", "/projetos")
        expect(link).not.toHaveAttribute("target")
    })

    it("opens external URLs in a new tab", () => {
        render(<Link href="https://github.com/marcuth">GitHub</Link>)
        const link = screen.getByRole("link", { name: "GitHub" })
        expect(link).toHaveAttribute("target", "_blank")
        expect(link).toHaveAttribute("rel", "noopener noreferrer")
    })

    it("leaves mailto links alone", () => {
        render(<Link href="mailto:oi@example.com">Email</Link>)
        expect(screen.getByRole("link", { name: "Email" })).not.toHaveAttribute("target")
    })
})

describe("Field (shadcn)", () => {
    it("composes label, control, description and error", () => {
        render(
            <Field data-invalid>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input id="email" aria-invalid />
                <FieldDescription>Nunca compartilhamos.</FieldDescription>
                <FieldError>Email inválido</FieldError>
            </Field>,
        )
        expect(screen.getByLabelText("Email")).toHaveAttribute("id", "email")
        expect(screen.getByRole("alert")).toHaveTextContent("Email inválido")
    })
})

describe("app shell", () => {
    it("renders AppHeader navigation with the current page marked", () => {
        render(
            <AppHeader brand={<BrandMark name="marcuth" />}>
                <NavLink href="/" active>
                    Início
                </NavLink>
                <NavLink href="/projetos">Projetos</NavLink>
            </AppHeader>,
        )
        expect(screen.getByRole("navigation", { name: "Main" })).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Início" })).toHaveAttribute("aria-current", "page")
        expect(screen.getByRole("link", { name: "Projetos" })).not.toHaveAttribute("aria-current")
    })

    it("renders AppFooter groups with internal and external links", () => {
        render(
            <AppFooter
                groups={[
                    {
                        title: "Sites",
                        links: [
                            { label: "Blog", href: "/blog" },
                            { label: "GitHub", href: "https://github.com/marcuth" },
                        ],
                    },
                ]}
            />,
        )
        expect(screen.getByRole("link", { name: "Blog" })).not.toHaveAttribute("target")
        expect(screen.getByRole("link", { name: "GitHub" })).toHaveAttribute("target", "_blank")
    })

    it("renders the {name}.marcuth.dev wordmark", () => {
        render(<BrandMark name="Blog" />)
        const mark = screen.getByRole("img", { name: "blog.marcuth.dev" })
        expect(mark).toHaveTextContent("Bblog.marcuth.dev")
        expect(screen.getByText(".marcuth.dev")).toHaveClass("text-muted-foreground")
    })

    it("renders the bare domain on the root site", () => {
        render(<BrandMark monogram={false} />)
        expect(screen.getByRole("img", { name: "marcuth.dev" })).toHaveTextContent(/^marcuth\.dev$/)
    })

    it("formats brand names", () => {
        expect(brandName("tools")).toBe("tools.marcuth.dev")
        expect(brandName(" ")).toBe("marcuth.dev")
        expect(brandName(undefined, "example.dev")).toBe("example.dev")
    })

    it("lets a Section flip theme", () => {
        const { container } = render(<Section theme="dark">x</Section>)
        expect(container.querySelector("section")).toHaveAttribute("data-theme", "dark")
    })
})

describe("Heading", () => {
    it("uses the level as tag and default size", () => {
        render(<Heading level={1}>Olá</Heading>)
        expect(screen.getByRole("heading", { level: 1 })).toHaveClass("text-4xl")
    })
})

describe("Badge (shadcn)", () => {
    it("has the brand variant", () => {
        render(<Badge variant="brand">novo</Badge>)
        expect(screen.getByText("novo")).toHaveClass("bg-brand-subtle", "rounded-control")
    })
})

describe("icons", () => {
    const sets = import.meta.glob<Record<string, unknown>>("../src/icons/*.ts")
    const setNames = Object.keys(sets).filter((path) => !path.endsWith("/index.ts"))

    it("has one entry point per react-icons set", async () => {
        const { IconsManifest } = await import("../src/icons/index")
        expect(setNames).toHaveLength(IconsManifest.length)
    })

    it.each(setNames)("%s exports icon components", async (path) => {
        const icons = await sets[path]!()
        const names = Object.keys(icons)
        expect(names.length).toBeGreaterThan(0)
        expect(typeof icons[names[0]!]).toBe("function")
    })

    it("renders a Lucide icon with utility classes", async () => {
        const { LuSun } = await import("../src/icons/lucide")
        const { container } = render(<LuSun className="size-4" />)
        expect(container.querySelector("svg")).toHaveClass("size-4")
    })
})

describe("ThemeToggle", () => {
    it("crossfades two icons exempt from the theme-switch transition kill", () => {
        render(<ThemeToggle />)
        const icons = document.querySelectorAll("[data-theme-icon]")
        expect(icons).toHaveLength(2)
        for (const icon of icons)
            expect(icon.getAttribute("class")).toContain("transition-[opacity,scale,rotate,filter]")
    })

    it("flips data-theme on <html> and persists the choice in a cookie", () => {
        document.documentElement.dataset.theme = "light"
        render(<ThemeToggle />)
        const toggle = screen.getByRole("button", { name: "Toggle color theme" })

        fireEvent.click(toggle)
        expect(document.documentElement.dataset.theme).toBe("dark")
        expect(document.cookie).toContain("marcuth-theme=dark")

        fireEvent.click(toggle)
        expect(document.documentElement.dataset.theme).toBe("light")
        expect(document.cookie).toContain("marcuth-theme=light")
    })
})

describe("Background", () => {
    it("renders decorative, non-interactive layers behind the content", () => {
        const { container } = render(
            <Background>
                <BackgroundGrid fade="radial" tone="brand" size={20} />
                <BackgroundNoise />
                <p>Conteúdo</p>
            </Background>,
        )
        const grid = container.querySelector<HTMLElement>("[data-slot=background-grid]")!
        expect(grid).toHaveAttribute("aria-hidden", "true")
        expect(grid).toHaveClass("pointer-events-none", "-z-10")
        expect(grid.style.backgroundSize).toBe("20px 20px")
        expect(grid.style.backgroundImage).toContain("var(--brand)")
        expect(screen.getByText("Conteúdo")).toBeInTheDocument()
    })
})

describe("Emoji", () => {
    it("renders emoji with Noto Color Emoji font family and accessible role", () => {
        render(<Emoji emoji="🚀" label="Rocket" />)
        const element = screen.getByRole("img", { name: "Rocket" })
        expect(element).toHaveAttribute("data-slot", "emoji")
        expect(element).toHaveTextContent("🚀")
    })

    it("renders children as emoji content when provided", () => {
        const { container } = render(<Emoji size="lg">✨</Emoji>)
        const element = container.querySelector("[data-slot=emoji]")
        expect(element).toHaveAttribute("aria-hidden", "true")
        expect(element).toHaveTextContent("✨")
        expect(element).toHaveClass("size-6")
    })
})

describe("Error pages", () => {
    it("NotFoundPage shows the code, the brand and a home link", () => {
        render(<NotFoundPage name="blog" />)
        expect(screen.getByRole("heading", { level: 1, name: "Página não encontrada" })).toBeInTheDocument()
        expect(screen.getByText("404")).toBeInTheDocument()
        expect(screen.getByRole("img", { name: "blog.marcuth.dev" })).toBeInTheDocument()
        expect(screen.getByRole("link", { name: "Voltar ao início" })).toHaveAttribute("href", "/")
        expect(screen.getByRole("link", { name: "Ir para marcuth.dev" })).toHaveAttribute("href", "https://marcuth.dev")
    })

    it("omits the parent-site link on the root site", () => {
        render(<ForbiddenPage />)
        expect(screen.queryByRole("link", { name: /Ir para/ })).not.toBeInTheDocument()
    })

    it("ServerErrorPage exposes the digest and retries", () => {
        let retried = 0
        render(<ServerErrorPage digest="abc123" onRetry={() => retried++} />)
        expect(screen.getByText("abc123")).toBeInTheDocument()
        fireEvent.click(screen.getByRole("button", { name: "Tentar de novo" }))
        expect(retried).toBe(1)
    })

    it("ErrorPage accepts custom copy and actions", () => {
        render(<ErrorPage code="Offline" title="Sem conexão" actions={<button>Recarregar</button>} />)
        expect(screen.getByRole("button", { name: "Recarregar" })).toBeInTheDocument()
    })
})
