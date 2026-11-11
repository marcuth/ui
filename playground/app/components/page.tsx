import { Anchor, Badge, Heading, Stack, Text } from "@marcuth/ui"
import { LuArrowRight } from "@marcuth/ui/icons/lucide"
import { allItems, navGroups } from "@playground/components/component-nav-data"
import { ComponentPreview } from "@playground/components/component-previews"

export default function ComponentsOverviewPage() {
    return (
        <Stack gap={8}>
            {/* Header */}
            <Stack gap={3}>
                <div className="flex items-center gap-3">
                    <Heading level={1} size="xl">
                        Components
                    </Heading>
                    <Badge variant="brand">{allItems.length} components</Badge>
                </div>
                <Text tone="muted" size="lg" className="max-w-2xl">
                    Accessible, customizable components styled with the @marcuth/ui design system. Click any component
                    below to explore its interactive preview, variants, and source code.
                </Text>
            </Stack>

            {/* Groups with component preview cards */}
            <div className="flex flex-col gap-12">
                {navGroups.map((group) => (
                    <section key={group.title} className="flex flex-col gap-4">
                        <div className="border-b pb-2">
                            <h2 className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                                {group.title}
                            </h2>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                            {group.items.map((item) => {
                                return (
                                    <Anchor
                                        key={item.slug}
                                        href={`/components/${item.slug}`}
                                        className="group relative flex flex-col justify-between overflow-hidden rounded-xl border bg-card p-4 no-underline transition-[border-color,box-shadow,scale] duration-(--ui-duration-fast) ease-out hover:border-brand/40 hover:shadow-md"
                                    >
                                        <div className="flex flex-col gap-1.5">
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="flex items-center gap-2">
                                                    <span className="font-semibold text-foreground group-hover:text-brand">
                                                        {item.label}
                                                    </span>
                                                    {item.badge && (
                                                        <Badge variant="brand" className="h-4 px-1 text-[10px]">
                                                            {item.badge}
                                                        </Badge>
                                                    )}
                                                </div>
                                                <LuArrowRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-brand" />
                                            </div>
                                            <p className="line-clamp-2 text-xs text-muted-foreground">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Component Live Preview Mini Frame */}
                                        <div className="mt-4 flex min-h-32 w-full items-center justify-center overflow-hidden rounded-lg border border-border/60 bg-muted/20 p-3 pointer-events-none select-none">
                                            <div className="flex w-full items-center justify-center [&_.max-w-md]:max-w-full [&_.max-w-sm]:max-w-full [&_.min-h-48]:min-h-0 [&_.p-6]:p-2 [&_section]:hidden">
                                                <ComponentPreview
                                                    slug={item.slug}
                                                    fallback={
                                                        <span className="text-xs text-muted-foreground">
                                                            Preview available inside
                                                        </span>
                                                    }
                                                />
                                            </div>
                                        </div>
                                            ) : (
                                                <span className="text-xs text-muted-foreground">
                                                    Preview available inside
                                                </span>
                                            )}
                                        </div>
                                    </Anchor>
                                )
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </Stack>
    )
}
