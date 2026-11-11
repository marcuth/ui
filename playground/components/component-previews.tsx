"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
    Alert,
    AlertDescription,
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    AlertTitle,
    AspectRatio,
    Attachment,
    AttachmentContent,
    AttachmentDescription,
    AttachmentMedia,
    AttachmentTitle,
    Avatar,
    AvatarFallback,
    Background,
    BackgroundBlur,
    BackgroundDots,
    BackgroundGlow,
    BackgroundGradient,
    BackgroundGrid,
    BackgroundLines,
    BackgroundNoise,
    Badge,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
    Bubble,
    BubbleContent,
    BubbleGroup,
    Button,
    ButtonGroup,
    Calendar,
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    Checkbox,
    CodeBlock,
    CodeBlockContent,
    CodeBlockCopyButton,
    CodeBlockHeader,
    CodeBlockTitle,
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList,
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandShortcut,
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuTrigger,
    DataTable,
    DataTableColumnHeader,
    DatePicker,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DirectionProvider,
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
    Emoji,
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
    ErrorPage,
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSet,
    ForbiddenPage,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
    Input,
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
    Item,
    ItemActions,
    ItemContent,
    ItemDescription,
    ItemTitle,
    Kbd,
    KbdGroup,
    Label,
    Link,
    MaintenancePage,
    Marker,
    MarkerContent,
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
    Message,
    MessageAvatar,
    MessageContent,
    NativeSelect,
    NativeSelectOption,
    NotFoundPage,
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    Popover,
    PopoverContent,
    PopoverTrigger,
    Progress,
    Questionnaire,
    QuestionnaireActions,
    QuestionnaireChoice,
    QuestionnaireChoices,
    QuestionnaireDescription,
    QuestionnaireError,
    QuestionnaireInput,
    QuestionnaireItem,
    QuestionnaireNext,
    QuestionnairePrevious,
    QuestionnaireProgress,
    QuestionnaireSkip,
    QuestionnaireSubmit,
    QuestionnaireTitle,
    RadioGroup,
    RadioGroupItem,
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
    ScrollArea,
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    Separator,
    ServerErrorPage,
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarInset,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    Skeleton,
    Slider,
    Spinner,
    Switch,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Text,
    toast,
    Toggle,
    ToggleGroup,
    ToggleGroupItem,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooManyRequestsPage,
    Trace,
    TraceDescription,
    TraceLine,
    TraceTitle,
    Typography,
    UnauthorizedPage,
    type ChartConfig,
    type ColumnDef,
} from "@marcuth/ui"
import {
    LuBold,
    LuFileText,
    LuInbox,
    LuInfo,
    LuItalic,
    LuSearch,
    LuSparkles,
    LuUnderline,
} from "@marcuth/ui/icons/lucide"
import type { ReactNode } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

/* ─── Shared fixtures ─────────────────────────────────────────────────── */

const chartData = [
    { month: "Jan", visitas: 186 },
    { month: "Fev", visitas: 305 },
    { month: "Mar", visitas: 237 },
    { month: "Abr", visitas: 273 },
    { month: "Mai", visitas: 209 },
    { month: "Jun", visitas: 314 },
]
const chartConfig = { visitas: { label: "Visitas", color: "var(--brand)" } } satisfies ChartConfig

type Project = { name: string; stack: string; stars: number }
const projects: Project[] = [
    { name: "@marcuth/ui", stack: "React", stars: 12 },
    { name: "xcrap", stack: "Node.js", stars: 48 },
    { name: "movie.js", stack: "FFmpeg", stars: 31 },
    { name: "xpict", stack: "Canvas", stars: 22 },
]
const projectColumns: ColumnDef<Project>[] = [
    { accessorKey: "name", header: ({ column }) => <DataTableColumnHeader column={column} title="Projeto" /> },
    { accessorKey: "stack", header: "Stack" },
    { accessorKey: "stars", header: ({ column }) => <DataTableColumnHeader column={column} title="Estrelas" /> },
]

const frameworks = ["Next.js", "Remix", "Astro", "Vite", "TanStack Start"]

/* ─── Wrapper ─────────────────────────────────────────────────────────── */

function PreviewWrapper({ children }: { children: ReactNode }) {
    return (
        <div className="flex min-h-48 flex-col items-start justify-center gap-4 rounded-lg border bg-background p-6">
            {children}
        </div>
    )
}

/* ─── Preview map ──────────────────────────────────────────────────────── */

export const previews: Record<string, ReactNode> = {
    emoji: (
        <PreviewWrapper>
            <div className="flex w-full flex-col gap-6">
                <div>
                    <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Sizes (Noto Color Emoji)
                    </p>
                    <div className="flex flex-wrap items-center gap-4 rounded-lg border bg-muted/20 p-4">
                        <div className="flex items-center gap-2">
                            <Emoji emoji="🚀" size="xs" label="Rocket" />
                            <span className="text-xs text-muted-foreground">xs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Emoji emoji="🚀" size="sm" />
                            <span className="text-xs text-muted-foreground">sm</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Emoji emoji="🚀" size="md" />
                            <span className="text-xs text-muted-foreground">md (default)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Emoji emoji="🚀" size="lg" />
                            <span className="text-xs text-muted-foreground">lg</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Emoji emoji="🚀" size="xl" />
                            <span className="text-xs text-muted-foreground">xl</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Emoji emoji="🚀" size="2xl" />
                            <span className="text-xs text-muted-foreground">2xl</span>
                        </div>
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Used as Icons in Components
                    </p>
                    <div className="flex flex-wrap items-center gap-3">
                        <Button variant="brand">
                            <Emoji emoji="✨" className="mr-1.5" />
                            Launch Project
                        </Button>
                        <Button variant="outline">
                            <Emoji emoji="📦" className="mr-1.5" />
                            Install Packages
                        </Button>
                        <Badge variant="success">
                            <Emoji emoji="🟢" className="mr-1" />
                            Active
                        </Badge>
                        <Badge variant="warning">
                            <Emoji emoji="⚠️" className="mr-1" />
                            Preview
                        </Badge>
                        <Badge variant="brand">
                            <Emoji emoji="⚡" className="mr-1" />
                            Fast
                        </Badge>
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Noto Color Emoji Collection
                    </p>
                    <div className="flex flex-wrap gap-2.5">
                        {["🚀", "🔥", "✨", "💡", "💎", "🎨", "💻", "⚡", "🎉", "🌟", "🛠️", "📦"].map((item) => (
                            <div
                                key={item}
                                className="flex size-11 items-center justify-center rounded-lg border bg-card shadow-xs transition-transform hover:scale-110"
                            >
                                <Emoji size="xl">{item}</Emoji>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </PreviewWrapper>
    ),

    accordion: (
        <PreviewWrapper>
            <Accordion type="single" collapsible className="w-full max-w-md">
                <AccordionItem value="a">
                    <AccordionTrigger>O que é o @marcuth/ui?</AccordionTrigger>
                    <AccordionContent>Um design system para marcuth.dev e seus subdomínios.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="b">
                    <AccordionTrigger>Posso trocar a cor?</AccordionTrigger>
                    <AccordionContent>Sim: defineTheme({"{ brand }"}).</AccordionContent>
                </AccordionItem>
            </Accordion>
        </PreviewWrapper>
    ),

    alert: (
        <PreviewWrapper>
            <Alert className="w-full max-w-md">
                <LuInfo />
                <AlertTitle>Atualização disponível</AlertTitle>
                <AlertDescription>Uma nova versão do tema foi publicada.</AlertDescription>
            </Alert>
            <Alert variant="destructive" className="w-full max-w-md">
                <LuInfo />
                <AlertTitle>Falha no deploy</AlertTitle>
                <AlertDescription>Verifique os logs do build.</AlertDescription>
            </Alert>
        </PreviewWrapper>
    ),

    "alert-dialog": (
        <PreviewWrapper>
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="destructive">Excluir conta</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Tem certeza?</AlertDialogTitle>
                        <AlertDialogDescription>Essa ação não pode ser desfeita.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancelar</AlertDialogCancel>
                        <AlertDialogAction>Excluir</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </PreviewWrapper>
    ),

    "aspect-ratio": (
        <PreviewWrapper>
            <div className="w-full max-w-md">
                <AspectRatio ratio={16 / 9}>
                    <div className="grid size-full place-items-center rounded-lg bg-muted text-sm text-muted-foreground">
                        16 / 9
                    </div>
                </AspectRatio>
            </div>
        </PreviewWrapper>
    ),

    "background-grid": (
        <PreviewWrapper>
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGrid />
                    <span className="text-sm text-muted-foreground">padrão</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGrid fade="radial" />
                    <span className="text-sm text-muted-foreground">fade="radial"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGrid size={20} tone="brand" opacity={20} fade="edges" />
                    <span className="text-sm text-muted-foreground">size=20 · tone="brand"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGrid fade="top" />
                    <span className="text-sm text-muted-foreground">fade="top"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGrid fade="x" />
                    <span className="text-sm text-muted-foreground">fade="x"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGrid size={64} opacity={25} fade="radial" />
                    <span className="text-sm text-muted-foreground">opacity=25 · size=64</span>
                </Background>
            </div>
        </PreviewWrapper>
    ),

    "background-dots": (
        <PreviewWrapper>
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundDots />
                    <span className="text-sm text-muted-foreground">padrão</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundDots fade="radial" />
                    <span className="text-sm text-muted-foreground">fade="radial"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundDots size={16} fade="edges" />
                    <span className="text-sm text-muted-foreground">size=16 · radius=1</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundDots size={28} radius={2} tone="brand" opacity={40} fade="radial" />
                    <span className="text-sm text-muted-foreground">radius=2 · tone="brand"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundDots fade="bottom" />
                    <span className="text-sm text-muted-foreground">fade="bottom"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundDots tone="muted" opacity={35} fade="x" />
                    <span className="text-sm text-muted-foreground">tone="muted"</span>
                </Background>
            </div>
        </PreviewWrapper>
    ),

    "background-lines": (
        <PreviewWrapper>
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundLines />
                    <span className="text-sm text-muted-foreground">padrão (45°)</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundLines angle={-45} fade="radial" />
                    <span className="text-sm text-muted-foreground">angle=-45</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundLines angle={90} size={8} fade="edges" />
                    <span className="text-sm text-muted-foreground">angle=90 · size=8</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundLines tone="brand" opacity={25} fade="radial" />
                    <span className="text-sm text-muted-foreground">tone="brand"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundLines size={24} opacity={15} fade="top" />
                    <span className="text-sm text-muted-foreground">size=24</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundLines angle={0} size={16} fade="x" />
                    <span className="text-sm text-muted-foreground">angle=0</span>
                </Background>
            </div>
        </PreviewWrapper>
    ),

    "background-gradient": (
        <PreviewWrapper>
            <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGradient variant="linear" />
                    <span className="text-sm text-muted-foreground">linear</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGradient variant="radial" />
                    <span className="text-sm text-muted-foreground">radial</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGradient variant="conic" />
                    <span className="text-sm text-muted-foreground">conic</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGradient variant="linear" angle={90} opacity={30} />
                    <span className="text-sm text-muted-foreground">linear · angle=90</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGradient variant="radial" tone="foreground" opacity={15} />
                    <span className="text-sm text-muted-foreground">radial · tone="foreground"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <>
                        <BackgroundGradient variant="radial" />
                        <BackgroundGrid fade="top" />
                    </>
                    <span className="text-sm text-muted-foreground">radial + grid</span>
                </Background>
            </div>
        </PreviewWrapper>
    ),

    "background-glow": (
        <PreviewWrapper>
            <div className="grid w-full gap-4 sm:grid-cols-2">
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGlow />
                    <span className="text-sm text-muted-foreground">padrão</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGlow blur={120} opacity={50} />
                    <span className="text-sm text-muted-foreground">blur=120 · opacity=50</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundGlow tone="foreground" opacity={15} />
                    <span className="text-sm text-muted-foreground">tone="foreground"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <>
                        <BackgroundGrid fade="radial" />
                        <BackgroundGlow />
                    </>
                    <span className="text-sm text-muted-foreground">glow + grid</span>
                </Background>
            </div>
        </PreviewWrapper>
    ),

    "background-blur": (
        <PreviewWrapper>
            <div className="grid w-full gap-4 sm:grid-cols-2">
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundBlur />
                    <span className="text-sm text-muted-foreground">padrão</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundBlur blur={60} opacity={40} />
                    <span className="text-sm text-muted-foreground">blur=60 · opacity=40</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundBlur tone="muted" />
                    <span className="text-sm text-muted-foreground">tone="muted"</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <>
                        <BackgroundBlur />
                        <BackgroundDots fade="radial" />
                    </>
                    <span className="text-sm text-muted-foreground">blur + dots</span>
                </Background>
            </div>
        </PreviewWrapper>
    ),

    "background-noise": (
        <PreviewWrapper>
            <div className="grid w-full gap-4 sm:grid-cols-2">
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundNoise />
                    <span className="text-sm text-muted-foreground">padrão</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <BackgroundNoise opacity={20} />
                    <span className="text-sm text-muted-foreground">opacity=20</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <>
                        <BackgroundGradient variant="radial" />
                        <BackgroundNoise opacity={14} />
                    </>
                    <span className="text-sm text-muted-foreground">gradient + noise</span>
                </Background>
                <Background className="grid h-44 place-items-center rounded-lg border">
                    <>
                        <BackgroundGlow />
                        <BackgroundNoise opacity={12} fade="bottom" />
                    </>
                    <span className="text-sm text-muted-foreground">glow + noise</span>
                </Background>
            </div>
        </PreviewWrapper>
    ),

    "error-page": (
        <PreviewWrapper>
            <div className="w-full overflow-hidden rounded-lg border">
                <ErrorPage
                    code="Offline"
                    title="Sem conexão"
                    description="Verifique sua internet e recarregue a página."
                    name="docs"
                    className="min-h-0 h-full py-8"
                    surfaceClassName="min-h-0 h-[28rem]"
                />
            </div>
        </PreviewWrapper>
    ),

    "not-found-page": (
        <PreviewWrapper>
            <div className="w-full overflow-hidden rounded-lg border">
                <NotFoundPage name="blog" className="min-h-0 h-full py-8" surfaceClassName="min-h-0 h-[28rem]" />
            </div>
        </PreviewWrapper>
    ),

    "server-error-page": (
        <PreviewWrapper>
            <div className="w-full overflow-hidden rounded-lg border">
                <ServerErrorPage
                    digest="2f9a41c7"
                    onRetry={() => undefined}
                    className="min-h-0 h-full py-8"
                    surfaceClassName="min-h-0 h-[28rem]"
                />
            </div>
        </PreviewWrapper>
    ),

    "access-error-pages": (
        <PreviewWrapper>
            <div className="grid w-full gap-4 lg:grid-cols-2">
                <div className="w-full overflow-hidden rounded-lg border">
                    <UnauthorizedPage className="min-h-0 h-full py-8" surfaceClassName="min-h-0 h-[28rem]" />
                </div>
                <div className="w-full overflow-hidden rounded-lg border">
                    <ForbiddenPage className="min-h-0 h-full py-8" surfaceClassName="min-h-0 h-[28rem]" />
                </div>
                <div className="w-full overflow-hidden rounded-lg border">
                    <TooManyRequestsPage className="min-h-0 h-full py-8" surfaceClassName="min-h-0 h-[28rem]" />
                </div>
                <div className="w-full overflow-hidden rounded-lg border">
                    <MaintenancePage className="min-h-0 h-full py-8" surfaceClassName="min-h-0 h-[28rem]" />
                </div>
            </div>
        </PreviewWrapper>
    ),

    direction: (
        <PreviewWrapper>
            <div className="grid w-full gap-4 sm:grid-cols-2">
                <DirectionProvider dir="ltr">
                    <div dir="ltr" className="flex flex-col gap-3 rounded-lg border p-4">
                        <span className="text-xs text-muted-foreground">direction="ltr"</span>
                        <Tabs defaultValue="a">
                            <TabsList>
                                <TabsTrigger value="a">Conta</TabsTrigger>
                                <TabsTrigger value="b">Senha</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </DirectionProvider>
                <DirectionProvider dir="rtl">
                    <div dir="rtl" className="flex flex-col gap-3 rounded-lg border p-4">
                        <span className="text-xs text-muted-foreground">direction="rtl"</span>
                        <Tabs defaultValue="a">
                            <TabsList>
                                <TabsTrigger value="a">الحساب</TabsTrigger>
                                <TabsTrigger value="b">كلمة المرور</TabsTrigger>
                            </TabsList>
                        </Tabs>
                    </div>
                </DirectionProvider>
            </div>
        </PreviewWrapper>
    ),

    field: (
        <PreviewWrapper>
            <FieldSet className="w-full max-w-sm">
                <FieldLegend>Perfil</FieldLegend>
                <FieldGroup>
                    <Field>
                        <FieldLabel htmlFor="field-name">Nome</FieldLabel>
                        <Input id="field-name" placeholder="Marcuth" />
                        <FieldDescription>Aparece no seu perfil público.</FieldDescription>
                    </Field>
                    <Field data-invalid>
                        <FieldLabel htmlFor="field-email">E-mail</FieldLabel>
                        <Input id="field-email" aria-invalid defaultValue="isso-nao-e-email" />
                        <FieldError>Informe um e-mail válido.</FieldError>
                    </Field>
                    <Field orientation="horizontal">
                        <Checkbox id="field-terms" />
                        <FieldContent>
                            <FieldLabel htmlFor="field-terms">Aceito os termos</FieldLabel>
                            <FieldDescription>Você pode cancelar quando quiser.</FieldDescription>
                        </FieldContent>
                    </Field>
                </FieldGroup>
            </FieldSet>
        </PreviewWrapper>
    ),

    link: (
        <PreviewWrapper>
            <Text>
                Leia a <Link href="/components">documentação</Link> ou veja o{" "}
                <Link href="https://github.com/marcuth">GitHub</Link>.
            </Text>
            <div className="flex gap-4">
                <Link variant="subtle" href="/components">
                    subtle
                </Link>
                <Link variant="brand" href="/components">
                    brand
                </Link>
                <Link variant="inline" href="/components">
                    inline
                </Link>
            </div>
        </PreviewWrapper>
    ),

    sidebar: (
        <PreviewWrapper>
            <div className="h-72 w-full overflow-hidden rounded-lg border">
                <SidebarProvider className="min-h-0 h-full">
                    <Sidebar collapsible="none" className="border-r">
                        <SidebarHeader className="px-4 py-3 text-sm font-semibold">marcuth.dev</SidebarHeader>
                        <SidebarContent>
                            <SidebarGroup>
                                <SidebarGroupLabel>Navegação</SidebarGroupLabel>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {["Início", "Projetos", "Blog"].map((item, index) => (
                                            <SidebarMenuItem key={item}>
                                                <SidebarMenuButton isActive={index === 0}>{item}</SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </SidebarGroup>
                        </SidebarContent>
                    </Sidebar>
                    <SidebarInset className="grid place-items-center text-sm text-muted-foreground">
                        Conteúdo
                    </SidebarInset>
                </SidebarProvider>
            </div>
        </PreviewWrapper>
    ),

    attachment: (
        <PreviewWrapper>
            <Attachment>
                <AttachmentMedia>
                    <LuFileText />
                </AttachmentMedia>
                <AttachmentContent>
                    <AttachmentTitle>curriculo.pdf</AttachmentTitle>
                    <AttachmentDescription>248 KB</AttachmentDescription>
                </AttachmentContent>
            </Attachment>
        </PreviewWrapper>
    ),

    avatar: (
        <PreviewWrapper>
            <div className="flex gap-3">
                <Avatar>
                    <AvatarFallback>M</AvatarFallback>
                </Avatar>
                <Avatar>
                    <AvatarFallback>UI</AvatarFallback>
                </Avatar>
            </div>
        </PreviewWrapper>
    ),

    badge: (
        <PreviewWrapper>
            <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="brand">Brand</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="success">Online</Badge>
                <Badge variant="warning">Beta</Badge>
                <Badge variant="destructive">Offline</Badge>
            </div>
        </PreviewWrapper>
    ),

    breadcrumb: (
        <PreviewWrapper>
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Início</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/componentes">Componentes</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </PreviewWrapper>
    ),

    bubble: (
        <PreviewWrapper>
            <BubbleGroup>
                <Bubble variant="secondary">
                    <BubbleContent>Oi! Viu o novo tema?</BubbleContent>
                </Bubble>
            </BubbleGroup>
            <BubbleGroup>
                <Bubble variant="brand" align="end">
                    <BubbleContent>Vi sim, ficou ótimo.</BubbleContent>
                </Bubble>
            </BubbleGroup>
        </PreviewWrapper>
    ),

    button: (
        <PreviewWrapper>
            <div className="flex flex-wrap gap-2">
                <Button>Default</Button>
                <Button variant="brand">Brand</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
                <Button disabled>Disabled</Button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
                <Button size="xs">Extra small</Button>
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">Large</Button>
            </div>
        </PreviewWrapper>
    ),

    "button-group": (
        <PreviewWrapper>
            <ButtonGroup>
                <Button variant="outline">Anterior</Button>
                <Button variant="outline">Hoje</Button>
                <Button variant="outline">Próximo</Button>
            </ButtonGroup>
        </PreviewWrapper>
    ),

    calendar: (
        <PreviewWrapper>
            <Calendar mode="single" className="rounded-lg border" />
        </PreviewWrapper>
    ),

    card: (
        <PreviewWrapper>
            <div className="grid w-full max-w-lg gap-4 sm:grid-cols-2">
                {["Portfólio", "Blog"].map((name, i) => (
                    <Card key={name}>
                        <CardHeader>
                            <CardTitle>{name}</CardTitle>
                            <CardDescription>Design system aplicado.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Badge variant={i === 0 ? "brand" : "secondary"}>2026</Badge>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </PreviewWrapper>
    ),

    carousel: (
        <PreviewWrapper>
            <Carousel className="mx-10 w-full max-w-sm">
                <CarouselContent>
                    {[1, 2, 3].map((slide) => (
                        <CarouselItem key={slide}>
                            <AspectRatio ratio={16 / 9}>
                                <div className="grid size-full place-items-center rounded-lg bg-brand-subtle text-2xl font-semibold text-brand-ink">
                                    {slide}
                                </div>
                            </AspectRatio>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </PreviewWrapper>
    ),

    chart: (
        <PreviewWrapper>
            <ChartContainer config={chartConfig} className="h-48 w-full">
                <BarChart data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} axisLine={false} />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="visitas" fill="var(--color-visitas)" radius={6} />
                </BarChart>
            </ChartContainer>
        </PreviewWrapper>
    ),

    checkbox: (
        <PreviewWrapper>
            <div className="flex flex-col gap-3">
                <Label className="gap-2">
                    <Checkbox defaultChecked /> Aceito os termos
                </Label>
                <Label className="gap-2">
                    <Checkbox /> Receber newsletter
                </Label>
            </div>
        </PreviewWrapper>
    ),

    "code-block": (
        <PreviewWrapper>
            <CodeBlock className="w-full max-w-md">
                <CodeBlockHeader>
                    <CodeBlockTitle>layout.tsx</CodeBlockTitle>
                    <CodeBlockCopyButton value={'const theme = defineTheme({ brand: "#00bc7d" })'} />
                </CodeBlockHeader>
                <CodeBlockContent language="ts">{'const theme = defineTheme({ brand: "#00bc7d" })'}</CodeBlockContent>
            </CodeBlock>
        </PreviewWrapper>
    ),

    collapsible: (
        <PreviewWrapper>
            <Collapsible>
                <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm">
                        Mostrar detalhes
                    </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="text-sm text-muted-foreground">
                    Conteúdo recolhível que aparece ao expandir.
                </CollapsibleContent>
            </Collapsible>
        </PreviewWrapper>
    ),

    combobox: (
        <PreviewWrapper>
            <Combobox items={frameworks}>
                <ComboboxInput placeholder="Selecione um framework…" />
                <ComboboxContent>
                    <ComboboxEmpty>Nada encontrado.</ComboboxEmpty>
                    <ComboboxList>
                        {(item: string) => (
                            <ComboboxItem key={item} value={item}>
                                {item}
                            </ComboboxItem>
                        )}
                    </ComboboxList>
                </ComboboxContent>
            </Combobox>
        </PreviewWrapper>
    ),

    command: (
        <PreviewWrapper>
            <Command className="w-full max-w-sm rounded-lg border">
                <CommandInput placeholder="Digite um comando…" />
                <CommandList>
                    <CommandEmpty>Nada encontrado.</CommandEmpty>
                    <CommandGroup heading="Sugestões">
                        <CommandItem>
                            Projetos <CommandShortcut>⌘P</CommandShortcut>
                        </CommandItem>
                        <CommandItem>
                            Blog <CommandShortcut>⌘B</CommandShortcut>
                        </CommandItem>
                    </CommandGroup>
                </CommandList>
            </Command>
        </PreviewWrapper>
    ),

    "context-menu": (
        <PreviewWrapper>
            <ContextMenu>
                <ContextMenuTrigger className="grid h-20 w-full max-w-sm place-items-center rounded-lg border border-dashed text-sm text-muted-foreground">
                    Clique com o botão direito
                </ContextMenuTrigger>
                <ContextMenuContent>
                    <ContextMenuItem>Copiar</ContextMenuItem>
                    <ContextMenuItem>Colar</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
        </PreviewWrapper>
    ),

    "data-table": (
        <PreviewWrapper>
            <div className="w-full">
                <DataTable columns={projectColumns} data={projects} filterColumn="name" pageSize={3} />
            </div>
        </PreviewWrapper>
    ),

    "date-picker": (
        <PreviewWrapper>
            <DatePicker />
        </PreviewWrapper>
    ),

    dialog: (
        <PreviewWrapper>
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline">Abrir dialog</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Editar perfil</DialogTitle>
                        <DialogDescription>Modais escalam a partir do centro.</DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button variant="brand">Salvar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </PreviewWrapper>
    ),

    drawer: (
        <PreviewWrapper>
            <Drawer>
                <DrawerTrigger asChild>
                    <Button variant="outline">Abrir drawer</Button>
                </DrawerTrigger>
                <DrawerContent>
                    <DrawerHeader>
                        <DrawerTitle>Drawer</DrawerTitle>
                        <DrawerDescription>Arraste para fechar.</DrawerDescription>
                    </DrawerHeader>
                </DrawerContent>
            </Drawer>
        </PreviewWrapper>
    ),

    "dropdown-menu": (
        <PreviewWrapper>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline">Abrir menu</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Conta</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Perfil</DropdownMenuItem>
                    <DropdownMenuItem>Configurações</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Sair</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </PreviewWrapper>
    ),

    empty: (
        <PreviewWrapper>
            <Empty className="w-full border border-dashed">
                <EmptyHeader>
                    <EmptyMedia variant="icon">
                        <LuInbox />
                    </EmptyMedia>
                    <EmptyTitle>Nenhuma mensagem</EmptyTitle>
                    <EmptyDescription>Quando chegar algo, aparece aqui.</EmptyDescription>
                </EmptyHeader>
            </Empty>
        </PreviewWrapper>
    ),

    "hover-card": (
        <PreviewWrapper>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <Button variant="link">@marcuth</Button>
                </HoverCardTrigger>
                <HoverCardContent>Desenvolvedor full-stack. Passe o cursor para ver.</HoverCardContent>
            </HoverCard>
        </PreviewWrapper>
    ),

    input: (
        <PreviewWrapper>
            <div className="flex w-full max-w-sm flex-col gap-2">
                <Label htmlFor="demo-input">Nome</Label>
                <input
                    id="demo-input"
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-control w-full rounded-control border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    placeholder="Seu nome"
                />
            </div>
        </PreviewWrapper>
    ),

    "input-group": (
        <PreviewWrapper>
            <InputGroup className="w-full max-w-sm">
                <InputGroupAddon>
                    <LuSearch />
                </InputGroupAddon>
                <InputGroupInput placeholder="Buscar…" />
            </InputGroup>
        </PreviewWrapper>
    ),

    "input-otp": (
        <PreviewWrapper>
            <InputOTP maxLength={6}>
                <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPSeparator />
                <InputOTPGroup>
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                </InputOTPGroup>
            </InputOTP>
        </PreviewWrapper>
    ),

    item: (
        <PreviewWrapper>
            <Item variant="outline" className="w-full max-w-md">
                <ItemContent>
                    <ItemTitle>blog.marcuth.dev</ItemTitle>
                    <ItemDescription>Publicado há 2 dias</ItemDescription>
                </ItemContent>
                <ItemActions>
                    <Badge variant="success">Online</Badge>
                </ItemActions>
            </Item>
        </PreviewWrapper>
    ),

    kbd: (
        <PreviewWrapper>
            <div className="flex flex-wrap gap-4">
                <KbdGroup>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>K</Kbd>
                </KbdGroup>
                <KbdGroup>
                    <Kbd>⌘</Kbd>
                    <Kbd>Shift</Kbd>
                    <Kbd>P</Kbd>
                </KbdGroup>
            </div>
        </PreviewWrapper>
    ),

    label: (
        <PreviewWrapper>
            <div className="flex flex-col gap-2">
                <Label htmlFor="label-demo">Email</Label>
                <input
                    id="label-demo"
                    type="email"
                    className="border-input bg-background flex h-control w-full max-w-xs rounded-control border px-3 py-2 text-sm"
                    placeholder="voce@exemplo.com"
                />
            </div>
        </PreviewWrapper>
    ),

    marker: (
        <PreviewWrapper>
            <div className="w-full max-w-sm">
                <Marker variant="separator">
                    <MarkerContent>Hoje</MarkerContent>
                </Marker>
            </div>
        </PreviewWrapper>
    ),

    menubar: (
        <PreviewWrapper>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger>Arquivo</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Novo</MenubarItem>
                        <MenubarItem>Abrir</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
                <MenubarMenu>
                    <MenubarTrigger>Editar</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>Desfazer</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </PreviewWrapper>
    ),

    message: (
        <PreviewWrapper>
            <Message>
                <MessageAvatar>
                    <Avatar>
                        <AvatarFallback>M</AvatarFallback>
                    </Avatar>
                </MessageAvatar>
                <MessageContent>
                    <BubbleGroup>
                        <Bubble variant="secondary">
                            <BubbleContent>Oi! Viu o novo tema?</BubbleContent>
                        </Bubble>
                    </BubbleGroup>
                </MessageContent>
            </Message>
        </PreviewWrapper>
    ),

    "message-scroller": (
        <PreviewWrapper>
            <p className="text-sm text-muted-foreground">
                MessageScroller — use-o para encapsular uma lista de mensagens com auto-scroll para o final.
            </p>
        </PreviewWrapper>
    ),

    "native-select": (
        <PreviewWrapper>
            <NativeSelect defaultValue="br" className="w-full max-w-xs">
                <NativeSelectOption value="br">Brasil</NativeSelectOption>
                <NativeSelectOption value="pt">Portugal</NativeSelectOption>
                <NativeSelectOption value="us">Estados Unidos</NativeSelectOption>
            </NativeSelect>
        </PreviewWrapper>
    ),

    "navigation-menu": (
        <PreviewWrapper>
            <p className="text-sm text-muted-foreground">
                NavigationMenu — componente de mega-menu para barras de navegação horizontais.
            </p>
        </PreviewWrapper>
    ),

    pagination: (
        <PreviewWrapper>
            <Pagination>
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#" isActive>
                            1
                        </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext href="#" />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </PreviewWrapper>
    ),

    popover: (
        <PreviewWrapper>
            <Popover>
                <PopoverTrigger asChild>
                    <Button variant="outline">Abrir popover</Button>
                </PopoverTrigger>
                <PopoverContent>Popovers escalam a partir do gatilho.</PopoverContent>
            </Popover>
        </PreviewWrapper>
    ),

    progress: (
        <PreviewWrapper>
            <div className="w-full max-w-sm space-y-3">
                <Progress value={33} />
                <Progress value={66} />
                <Progress value={100} />
            </div>
        </PreviewWrapper>
    ),

    questionnaire: (
        <PreviewWrapper>
            <div className="w-full max-w-md">
                <Questionnaire
                    shortcuts="numbers"
                    items={[
                        {
                            name: "role",
                            required: true,
                            choices: [{ value: "dev" }, { value: "design" }, { value: "other" }],
                        },
                        { name: "stack", choices: [{ value: "react" }, { value: "node" }, { value: "rust" }] },
                        { name: "goal", required: true },
                    ]}
                    onSubmit={(event) => event.preventDefault()}
                >
                    <QuestionnaireProgress />

                    <QuestionnaireItem name="role" required>
                        <QuestionnaireTitle>Qual é a sua função?</QuestionnaireTitle>
                        <QuestionnaireChoices>
                            <QuestionnaireChoice value="dev">Desenvolvimento</QuestionnaireChoice>
                            <QuestionnaireChoice value="design">Design</QuestionnaireChoice>
                            <QuestionnaireChoice value="other">Outra</QuestionnaireChoice>
                        </QuestionnaireChoices>
                        <QuestionnaireError>Escolha uma opção para continuar.</QuestionnaireError>
                    </QuestionnaireItem>

                    <QuestionnaireItem name="stack" multiple>
                        <QuestionnaireTitle>Quais tecnologias você usa?</QuestionnaireTitle>
                        <QuestionnaireDescription>Pode marcar mais de uma.</QuestionnaireDescription>
                        <QuestionnaireChoices>
                            <QuestionnaireChoice value="react">React</QuestionnaireChoice>
                            <QuestionnaireChoice value="node">Node.js</QuestionnaireChoice>
                            <QuestionnaireChoice value="rust">Rust</QuestionnaireChoice>
                        </QuestionnaireChoices>
                    </QuestionnaireItem>

                    <QuestionnaireItem name="goal" required>
                        <QuestionnaireTitle>O que você quer construir?</QuestionnaireTitle>
                        <QuestionnaireInput placeholder="Uma ideia, em uma frase" />
                        <QuestionnaireError>Conte um pouco para continuar.</QuestionnaireError>
                    </QuestionnaireItem>

                    <QuestionnaireActions>
                        <QuestionnairePrevious>Voltar</QuestionnairePrevious>
                        <QuestionnaireSkip>Pular</QuestionnaireSkip>
                        <QuestionnaireNext variant="brand">Próxima</QuestionnaireNext>
                        <QuestionnaireSubmit variant="brand">Enviar</QuestionnaireSubmit>
                    </QuestionnaireActions>
                </Questionnaire>
            </div>
        </PreviewWrapper>
    ),

    "radio-group": (
        <PreviewWrapper>
            <RadioGroup defaultValue="mensal" className="flex gap-4">
                <Label className="gap-2">
                    <RadioGroupItem value="mensal" /> Mensal
                </Label>
                <Label className="gap-2">
                    <RadioGroupItem value="anual" /> Anual
                </Label>
            </RadioGroup>
        </PreviewWrapper>
    ),

    resizable: (
        <PreviewWrapper>
            <ResizablePanelGroup orientation="horizontal" className="min-h-32 w-full max-w-md rounded-lg border">
                <ResizablePanel defaultSize="50%">
                    <div className="grid h-full place-items-center text-sm">Esquerda</div>
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel defaultSize="50%">
                    <div className="grid h-full place-items-center text-sm">Direita</div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </PreviewWrapper>
    ),

    "scroll-area": (
        <PreviewWrapper>
            <ScrollArea className="h-36 w-full max-w-xs rounded-lg border p-3">
                {Array.from({ length: 15 }, (_, i) => (
                    <p key={i} className="text-sm">
                        Linha {i + 1}
                    </p>
                ))}
            </ScrollArea>
        </PreviewWrapper>
    ),

    select: (
        <PreviewWrapper>
            <Select>
                <SelectTrigger className="w-full max-w-xs">
                    <SelectValue placeholder="Selecione uma stack" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="nest">NestJS</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                </SelectContent>
            </Select>
        </PreviewWrapper>
    ),

    separator: (
        <PreviewWrapper>
            <div className="w-full max-w-sm space-y-4">
                <p className="text-sm">Conteúdo acima</p>
                <Separator />
                <p className="text-sm">Conteúdo abaixo</p>
            </div>
        </PreviewWrapper>
    ),

    sheet: (
        <PreviewWrapper>
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="outline">Abrir sheet</Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>Configurações</SheetTitle>
                        <SheetDescription>Painel lateral deslizante.</SheetDescription>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </PreviewWrapper>
    ),

    skeleton: (
        <PreviewWrapper>
            <div className="flex items-center gap-3">
                <Skeleton className="size-10 rounded-full" />
                <div className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-4 w-28" />
                </div>
            </div>
        </PreviewWrapper>
    ),

    slider: (
        <PreviewWrapper>
            <div className="w-full max-w-sm space-y-4">
                <Slider defaultValue={[40]} max={100} />
                <Slider defaultValue={[20, 70]} max={100} />
            </div>
        </PreviewWrapper>
    ),

    sonner: (
        <PreviewWrapper>
            <div className="flex flex-wrap gap-2">
                <Button
                    variant="outline"
                    onClick={() => toast.success("Tema salvo", { description: "brand: #00bc7d" })}
                >
                    Success toast
                </Button>
                <Button variant="outline" onClick={() => toast.error("Erro ao salvar")}>
                    Error toast
                </Button>
                <Button variant="outline" onClick={() => toast("Notificação padrão")}>
                    Default toast
                </Button>
            </div>
        </PreviewWrapper>
    ),

    spinner: (
        <PreviewWrapper>
            <div className="flex items-center gap-4">
                <Spinner />
                <Spinner className="size-6" />
                <Spinner className="size-8" />
            </div>
        </PreviewWrapper>
    ),

    switch: (
        <PreviewWrapper>
            <div className="flex flex-col gap-3">
                <Label className="gap-2">
                    <Switch defaultChecked /> Notificações ativas
                </Label>
                <Label className="gap-2">
                    <Switch /> Modo escuro
                </Label>
            </div>
        </PreviewWrapper>
    ),

    table: (
        <PreviewWrapper>
            <Table className="w-full max-w-sm">
                <TableHeader>
                    <TableRow>
                        <TableHead>Site</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>marcuth.dev</TableCell>
                        <TableCell>
                            <Badge variant="success">Online</Badge>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>blog.marcuth.dev</TableCell>
                        <TableCell>
                            <Badge variant="warning">Manutenção</Badge>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </PreviewWrapper>
    ),

    tabs: (
        <PreviewWrapper>
            <Tabs defaultValue="visao" className="w-full max-w-sm">
                <TabsList>
                    <TabsTrigger value="visao">Visão geral</TabsTrigger>
                    <TabsTrigger value="metricas">Métricas</TabsTrigger>
                    <TabsTrigger value="config">Config</TabsTrigger>
                </TabsList>
                <TabsContent value="visao" className="text-sm text-muted-foreground">
                    Conteúdo da visão geral.
                </TabsContent>
                <TabsContent value="metricas" className="text-sm text-muted-foreground">
                    Conteúdo das métricas.
                </TabsContent>
                <TabsContent value="config" className="text-sm text-muted-foreground">
                    Configurações do projeto.
                </TabsContent>
            </Tabs>
        </PreviewWrapper>
    ),

    textarea: (
        <PreviewWrapper>
            <div className="flex w-full max-w-sm flex-col gap-2">
                <Label htmlFor="textarea-demo">Mensagem</Label>
                <textarea
                    id="textarea-demo"
                    rows={4}
                    className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex w-full rounded-control border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
                    placeholder="Conte sobre o projeto…"
                />
            </div>
        </PreviewWrapper>
    ),

    toggle: (
        <PreviewWrapper>
            <div className="flex items-center gap-2">
                <Toggle aria-label="Negrito">
                    <LuBold />
                </Toggle>
                <Toggle aria-label="Itálico">
                    <LuItalic />
                </Toggle>
                <Toggle aria-label="Sublinhado">
                    <LuUnderline />
                </Toggle>
            </div>
        </PreviewWrapper>
    ),

    "toggle-group": (
        <PreviewWrapper>
            <ToggleGroup type="multiple" variant="outline">
                <ToggleGroupItem value="b" aria-label="Negrito">
                    <LuBold />
                </ToggleGroupItem>
                <ToggleGroupItem value="i" aria-label="Itálico">
                    <LuItalic />
                </ToggleGroupItem>
                <ToggleGroupItem value="u" aria-label="Sublinhado">
                    <LuUnderline />
                </ToggleGroupItem>
            </ToggleGroup>
        </PreviewWrapper>
    ),

    tooltip: (
        <PreviewWrapper>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button variant="ghost" size="icon" aria-label="Dica">
                        <LuSparkles />
                    </Button>
                </TooltipTrigger>
                <TooltipContent>Tooltip aqui</TooltipContent>
            </Tooltip>
        </PreviewWrapper>
    ),

    trace: (
        <PreviewWrapper>
            <Trace>
                <TraceLine>
                    <TraceTitle>Build concluído</TraceTitle>
                    <TraceDescription>12s</TraceDescription>
                </TraceLine>
                <TraceLine status="running">
                    <TraceTitle>Publicando no npm</TraceTitle>
                </TraceLine>
                <TraceLine status="pending">
                    <TraceTitle>Notificar CI</TraceTitle>
                </TraceLine>
            </Trace>
        </PreviewWrapper>
    ),

    typography: (
        <PreviewWrapper>
            <Typography.H1>Título H1</Typography.H1>
            <Typography.Lead>Lead: uma introdução maior, em tom suave.</Typography.Lead>
            <Typography.P>
                Parágrafo com <Typography.InlineCode>código</Typography.InlineCode> inline.
            </Typography.P>
            <Typography.Blockquote>Detalhes invisíveis se acumulam.</Typography.Blockquote>
            <Typography.Muted>Texto secundário.</Typography.Muted>
        </PreviewWrapper>
    ),
}

/**
 * Renders the preview of a slug. `previews` lives in a client module, so Server Components can't
 * index it (they'd only get an opaque reference); they render this instead.
 */
export function ComponentPreview({ slug, fallback = null }: { slug: string; fallback?: ReactNode }) {
    return previews[slug] ?? fallback
}
