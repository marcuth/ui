import {
    Anchor,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    CodeBlock,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockHeader,
    CodeBlockTitle,
    Heading,
    Separator,
    Stack,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Text,
} from "@marcuth/ui"
import { LuArrowLeft, LuArrowRight } from "@marcuth/ui/icons/lucide"
import { getComponentCode } from "@playground/components/component-codes"
import { allItems, findItem, navGroups } from "@playground/components/component-nav-data"
import { ComponentPreview } from "@playground/components/component-previews"
import { notFound } from "next/navigation"

type Props = {
    params: Promise<{ slug: string }>
}

export function generateStaticParams() {
    return allItems.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: Props) {
    const { slug } = await params
    const item = findItem(slug)
    if (!item) return {}
    return {
        title: `${item.label} — @marcuth/ui`,
        description: item.description,
    }
}

export default async function ComponentPage({ params }: Props) {
    const { slug } = await params
    const item = findItem(slug)

    if (!item) notFound()

    const code = getComponentCode(slug, item.label)

    // Find prev / next for navigation
    const currentIndex = allItems.findIndex((i) => i.slug === slug)
    const prev = currentIndex > 0 ? allItems[currentIndex - 1] : undefined
    const next = currentIndex < allItems.length - 1 ? allItems[currentIndex + 1] : undefined

    // Find category label
    const groupLabel = navGroups.find((g) => g.items.some((i) => i.slug === slug))?.title

    return (
        <Stack gap={8}>
            {/* Breadcrumb */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/components">Components</BreadcrumbLink>
                    </BreadcrumbItem>
                    {groupLabel && (
                        <>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <span className="text-muted-foreground">{groupLabel}</span>
                            </BreadcrumbItem>
                        </>
                    )}
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>

            {/* Header */}
            <Stack gap={3}>
                <div className="flex items-center gap-2">
                    <Heading level={1} size="xl">
                        {item.label}
                    </Heading>
                    {item.badge && <Badge variant="brand">{item.badge}</Badge>}
                </div>
                <Text tone="muted" size="lg">
                    {item.description}
                </Text>
            </Stack>

            {/* Preview & Code Tabs (shadcn style) */}
            <Tabs defaultValue="preview" className="w-full">
                <div className="flex items-center justify-between border-b pb-2">
                    <TabsList>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                        <TabsTrigger value="code">Code</TabsTrigger>
                    </TabsList>
                </div>

                <TabsContent value="preview" className="pt-4">
                    <ComponentPreview
                        slug={slug}
                        fallback={
                            <div className="flex min-h-48 items-center justify-center rounded-lg border border-dashed bg-muted/30">
                                <Text tone="muted" size="sm">
                                    Preview coming soon.
                                </Text>
                            </div>
                        }
                    />
                </TabsContent>

                <TabsContent value="code" className="pt-4">
                    <CodeBlock>
                        <CodeBlockHeader>
                            <CodeBlockTitle>{item.slug}.tsx</CodeBlockTitle>
                            <CodeBlockCopyButton value={code} />
                        </CodeBlockHeader>
                        <CodeBlockContent language="tsx">{code}</CodeBlockContent>
                    </CodeBlock>
                </TabsContent>
            </Tabs>

            <Separator />

            {/* Prev / Next navigation */}
            <nav className="flex items-center justify-between gap-4">
                {prev ? (
                    <Anchor href={`/components/${prev.slug}`} className="group flex flex-col gap-0.5 no-underline">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <LuArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" />
                            Previous
                        </span>
                        <span className="text-sm font-medium text-foreground">{prev.label}</span>
                    </Anchor>
                ) : (
                    <div />
                )}

                {next ? (
                    <Anchor
                        href={`/components/${next.slug}`}
                        className="group flex flex-col items-end gap-0.5 no-underline"
                    >
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            Next
                            <LuArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" />
                        </span>
                        <span className="text-sm font-medium text-foreground">{next.label}</span>
                    </Anchor>
                ) : (
                    <div />
                )}
            </nav>
        </Stack>
    )
}
