import { act, fireEvent, render, renderHook, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import {
    DataTable,
    DataTableColumnHeader,
    DatePicker,
    InputGroup,
    InputGroupInput,
    NativeSelect,
    NativeSelectOption,
    Select,
    SelectTrigger,
    SelectValue,
    Tabs,
    TabsList,
    TabsTrigger,
    Toggle,
    Typography,
    useThemeMode,
    type ColumnDef,
} from "../src/index"

const sources = import.meta.glob<string>("../src/components/ui/*.tsx", {
    query: "?raw",
    import: "default",
    eager: true,
})

describe("shadcn/ui conventions", () => {
    it.each(Object.entries(sources))("%s follows the design system rules", (_path, source) => {
        expect(source).not.toContain("transition-all")
        expect(source).not.toContain('from "lucide-react"')
        expect(source).not.toContain('from "cn"')
        expect(source).not.toContain('from "next-themes"')
    })
})

describe("single-line controls follow the radius and density knobs", () => {
    it("Select trigger", () => {
        render(
            <Select>
                <SelectTrigger aria-label="Stack">
                    <SelectValue placeholder="Stack" />
                </SelectTrigger>
            </Select>,
        )
        expect(screen.getByRole("combobox", { name: "Stack" })).toHaveClass("rounded-control")
        expect(screen.getByRole("combobox", { name: "Stack" }).className).toContain("data-[size=default]:h-control-md")
    })

    it("NativeSelect", () => {
        render(
            <NativeSelect aria-label="País">
                <NativeSelectOption value="br">Brasil</NativeSelectOption>
            </NativeSelect>,
        )
        expect(screen.getByRole("combobox", { name: "País" })).toHaveClass("h-control-md", "rounded-control")
    })

    it("InputGroup", () => {
        const { container } = render(
            <InputGroup>
                <InputGroupInput aria-label="Buscar" />
            </InputGroup>,
        )
        expect(container.querySelector('[data-slot="input-group"]')).toHaveClass("h-control-md", "rounded-control")
    })

    it("Toggle has press feedback", () => {
        render(<Toggle aria-label="Negrito">B</Toggle>)
        const toggle = screen.getByRole("button", { name: "Negrito" })
        expect(toggle).toHaveClass("rounded-control", "h-control-md", "active:scale-[0.97]")
    })

    it("Tabs list", () => {
        render(
            <Tabs defaultValue="a">
                <TabsList>
                    <TabsTrigger value="a">A</TabsTrigger>
                </TabsList>
            </Tabs>,
        )
        expect(screen.getByRole("tablist")).toHaveClass("rounded-control")
    })
})

describe("Typography", () => {
    it("renders the shadcn scale with semantic tags", () => {
        render(
            <>
                <Typography.H1>Título</Typography.H1>
                <Typography.H2>Seção</Typography.H2>
                <Typography.Lead>Intro</Typography.Lead>
                <Typography.Muted>Nota</Typography.Muted>
            </>,
        )
        expect(screen.getByRole("heading", { level: 1, name: "Título" })).toBeInTheDocument()
        expect(screen.getByRole("heading", { level: 2, name: "Seção" })).toHaveClass("border-b")
        expect(screen.getByText("Intro")).toHaveClass("text-xl", "text-muted-foreground")
        expect(screen.getByText("Nota")).toHaveClass("text-sm")
    })
})

describe("DatePicker", () => {
    it("shows the placeholder, then the formatted date in pt-BR", () => {
        const { rerender } = render(<DatePicker />)
        expect(screen.getByRole("button", { name: /Escolha uma data/ })).toBeInTheDocument()

        rerender(<DatePicker value={new Date(2026, 10, 10)} />)
        expect(screen.getByRole("button", { name: /10 de novembro de 2026/ })).toBeInTheDocument()
    })
})

describe("DataTable", () => {
    type Row = { name: string; stars: number }
    const data: Row[] = [
        { name: "beta", stars: 2 },
        { name: "alpha", stars: 3 },
        { name: "gamma", stars: 1 },
    ]
    const columns: ColumnDef<Row>[] = [
        { accessorKey: "name", header: ({ column }) => <DataTableColumnHeader column={column} title="Nome" /> },
        { accessorKey: "stars", header: "Estrelas" },
    ]
    const names = () =>
        screen
            .getAllByRole("row")
            .slice(1)
            .map((row) => row.firstChild?.textContent)

    it("sorts, filters and paginates", () => {
        render(<DataTable columns={columns} data={data} filterColumn="name" pageSize={2} />)
        expect(names()).toEqual(["beta", "alpha"])
        expect(screen.getByText("Página 1 de 2")).toBeInTheDocument()

        fireEvent.click(screen.getByRole("button", { name: "Nome" }))
        expect(names()).toEqual(["alpha", "beta"])

        fireEvent.change(screen.getByPlaceholderText("Filtrar…"), { target: { value: "gam" } })
        expect(names()).toEqual(["gamma"])
    })

    it("shows the empty message", () => {
        render(<DataTable columns={columns} data={[]} />)
        expect(screen.getByText("Nenhum resultado.")).toBeInTheDocument()
    })
})

describe("useThemeMode", () => {
    it("follows data-theme on <html>", async () => {
        document.documentElement.dataset.theme = "light"
        const { result } = renderHook(() => useThemeMode())
        expect(result.current).toBe("light")

        await act(async () => {
            document.documentElement.dataset.theme = "dark"
            await new Promise((resolve) => setTimeout(resolve, 0))
        })
        expect(result.current).toBe("dark")
    })
})
