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
    Empty,
    EmptyDescription,
    EmptyHeader,
    EmptyMedia,
    EmptyTitle,
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
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
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
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
    toast,
    Toggle,
    ToggleGroup,
    ToggleGroupItem,
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    Trace,
    TraceDescription,
    TraceLine,
    TraceTitle,
    Typography,
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
const columns: ColumnDef<Project>[] = [
    { accessorKey: "name", header: ({ column }) => <DataTableColumnHeader column={column} title="Projeto" /> },
    { accessorKey: "stack", header: "Stack" },
    { accessorKey: "stars", header: ({ column }) => <DataTableColumnHeader column={column} title="Estrelas" /> },
]

const frameworks = ["Next.js", "Remix", "Astro", "Vite", "TanStack Start"]

export function Gallery() {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            <Demo title="Typography" wide>
                <Typography.H1>Título</Typography.H1>
                <Typography.Lead>Lead: uma introdução maior, em tom suave.</Typography.Lead>
                <Typography.P>
                    Parágrafo com <Typography.InlineCode>código</Typography.InlineCode> inline.
                </Typography.P>
                <Typography.Blockquote>Detalhes invisíveis se acumulam.</Typography.Blockquote>
                <Typography.Muted>Texto secundário.</Typography.Muted>
            </Demo>

            <Demo title="Accordion">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="a">
                        <AccordionTrigger>O que é o @marcuth/ui?</AccordionTrigger>
                        <AccordionContent>Um design system para marcuth.dev e seus subdomínios.</AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="b">
                        <AccordionTrigger>Posso trocar a cor?</AccordionTrigger>
                        <AccordionContent>Sim: defineTheme({"{ brand }"}).</AccordionContent>
                    </AccordionItem>
                </Accordion>
            </Demo>

            <Demo title="Alert">
                <Alert>
                    <LuInfo />
                    <AlertTitle>Atualização disponível</AlertTitle>
                    <AlertDescription>Uma nova versão do tema foi publicada.</AlertDescription>
                </Alert>
                <Alert variant="destructive">
                    <LuInfo />
                    <AlertTitle>Falha no deploy</AlertTitle>
                    <AlertDescription>Verifique os logs do build.</AlertDescription>
                </Alert>
            </Demo>

            <Demo title="Dialog · Alert Dialog · Sheet · Drawer">
                <div className="flex flex-wrap gap-2">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="outline">Dialog</Button>
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
                    <AlertDialog>
                        <AlertDialogTrigger asChild>
                            <Button variant="destructive">Excluir</Button>
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
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline">Sheet</Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle>Configurações</SheetTitle>
                                <SheetDescription>Painel lateral.</SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>
                    <Drawer>
                        <DrawerTrigger asChild>
                            <Button variant="outline">Drawer</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Drawer</DrawerTitle>
                                <DrawerDescription>Arraste para fechar.</DrawerDescription>
                            </DrawerHeader>
                        </DrawerContent>
                    </Drawer>
                </div>
            </Demo>

            <Demo title="Dropdown · Context Menu · Menubar · Popover · Hover Card · Tooltip">
                <div className="flex flex-wrap items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Menu</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Conta</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Perfil</DropdownMenuItem>
                            <DropdownMenuItem>Sair</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Popover</Button>
                        </PopoverTrigger>
                        <PopoverContent>Popovers escalam a partir do gatilho.</PopoverContent>
                    </Popover>
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <Button variant="link">@marcuth</Button>
                        </HoverCardTrigger>
                        <HoverCardContent>Desenvolvedor full-stack.</HoverCardContent>
                    </HoverCard>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" aria-label="Dica">
                                <LuSparkles />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>Tooltip</TooltipContent>
                    </Tooltip>
                </div>
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
                <ContextMenu>
                    <ContextMenuTrigger className="grid h-20 place-items-center rounded-lg border border-dashed text-sm text-muted-foreground">
                        Clique com o botão direito
                    </ContextMenuTrigger>
                    <ContextMenuContent>
                        <ContextMenuItem>Copiar</ContextMenuItem>
                        <ContextMenuItem>Colar</ContextMenuItem>
                    </ContextMenuContent>
                </ContextMenu>
            </Demo>

            <Demo title="Form controls">
                <InputGroup>
                    <InputGroupAddon>
                        <LuSearch />
                    </InputGroupAddon>
                    <InputGroupInput placeholder="Buscar…" />
                </InputGroup>
                <Select>
                    <SelectTrigger className="w-full">
                        <SelectValue placeholder="Stack" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="next">Next.js</SelectItem>
                        <SelectItem value="nest">NestJS</SelectItem>
                    </SelectContent>
                </Select>
                <NativeSelect defaultValue="br">
                    <NativeSelectOption value="br">Brasil</NativeSelectOption>
                    <NativeSelectOption value="pt">Portugal</NativeSelectOption>
                </NativeSelect>
                <Combobox items={frameworks}>
                    <ComboboxInput placeholder="Framework" />
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
                <DatePicker />
                <div className="flex items-center gap-4">
                    <Label className="gap-2">
                        <Checkbox defaultChecked /> Aceito
                    </Label>
                    <Label className="gap-2">
                        <Switch defaultChecked /> Notificações
                    </Label>
                </div>
                <RadioGroup defaultValue="mensal" className="flex gap-4">
                    <Label className="gap-2">
                        <RadioGroupItem value="mensal" /> Mensal
                    </Label>
                    <Label className="gap-2">
                        <RadioGroupItem value="anual" /> Anual
                    </Label>
                </RadioGroup>
                <Slider defaultValue={[60]} max={100} />
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
            </Demo>

            <Demo title="Toggle · Toggle Group · Button Group · Kbd">
                <div className="flex flex-wrap items-center gap-2">
                    <Toggle aria-label="Negrito">
                        <LuBold />
                    </Toggle>
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
                </div>
                <ButtonGroup>
                    <Button variant="outline">Anterior</Button>
                    <Button variant="outline">Hoje</Button>
                    <Button variant="outline">Próximo</Button>
                </ButtonGroup>
                <KbdGroup>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>K</Kbd>
                </KbdGroup>
                <Button
                    variant="outline"
                    onClick={() => toast.success("Tema salvo", { description: "brand: #00bc7d" })}
                >
                    Disparar toast
                </Button>
            </Demo>

            <Demo title="Tabs">
                <Tabs defaultValue="visao">
                    <TabsList>
                        <TabsTrigger value="visao">Visão geral</TabsTrigger>
                        <TabsTrigger value="metricas">Métricas</TabsTrigger>
                    </TabsList>
                    <TabsContent value="visao" className="text-sm text-muted-foreground">
                        Conteúdo da visão geral.
                    </TabsContent>
                    <TabsContent value="metricas" className="text-sm text-muted-foreground">
                        Conteúdo das métricas.
                    </TabsContent>
                </Tabs>
            </Demo>

            <Demo title="Chart" wide>
                <ChartContainer config={chartConfig} className="h-48 w-full">
                    <BarChart data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis dataKey="month" tickLine={false} axisLine={false} />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <Bar dataKey="visitas" fill="var(--color-visitas)" radius={6} />
                    </BarChart>
                </ChartContainer>
            </Demo>

            <Demo title="Data Table" wide>
                <DataTable columns={columns} data={projects} filterColumn="name" pageSize={3} />
            </Demo>

            <Demo title="Calendar">
                <Calendar mode="single" className="rounded-lg border" />
            </Demo>

            <Demo title="Command">
                <Command className="rounded-lg border">
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
            </Demo>

            <Demo title="Carousel · Aspect Ratio">
                <Carousel className="mx-10">
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
            </Demo>

            <Demo title="Message · Bubble · Attachment">
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
                <BubbleGroup>
                    <Bubble variant="brand" align="end">
                        <BubbleContent>Vi sim, ficou ótimo.</BubbleContent>
                    </Bubble>
                </BubbleGroup>
                <Attachment>
                    <AttachmentMedia>
                        <LuFileText />
                    </AttachmentMedia>
                    <AttachmentContent>
                        <AttachmentTitle>curriculo.pdf</AttachmentTitle>
                        <AttachmentDescription>248 KB</AttachmentDescription>
                    </AttachmentContent>
                </Attachment>
            </Demo>

            <Demo title="Trace · Marker · Spinner · Progress · Skeleton">
                <Trace>
                    <TraceLine>
                        <TraceTitle>Build concluído</TraceTitle>
                        <TraceDescription>12s</TraceDescription>
                    </TraceLine>
                    <TraceLine status="running">
                        <TraceTitle>Publicando no npm</TraceTitle>
                    </TraceLine>
                </Trace>
                <Marker variant="separator">
                    <MarkerContent>Hoje</MarkerContent>
                </Marker>
                <div className="flex items-center gap-3">
                    <Spinner />
                    <Progress value={66} className="flex-1" />
                </div>
                <div className="flex items-center gap-3">
                    <Skeleton className="size-10 rounded-full" />
                    <div className="flex flex-1 flex-col gap-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                    </div>
                </div>
            </Demo>

            <Demo title="Code Block">
                <CodeBlock>
                    <CodeBlockHeader>
                        <CodeBlockTitle>layout.tsx</CodeBlockTitle>
                        <CodeBlockCopyButton value={'const theme = defineTheme({ brand: "#00bc7d" })'} />
                    </CodeBlockHeader>
                    <CodeBlockContent>{'const theme = defineTheme({ brand: "#00bc7d" })'}</CodeBlockContent>
                </CodeBlock>
            </Demo>

            <Demo title="Item · Empty">
                <Item variant="outline">
                    <ItemContent>
                        <ItemTitle>blog.marcuth.dev</ItemTitle>
                        <ItemDescription>Publicado há 2 dias</ItemDescription>
                    </ItemContent>
                    <ItemActions>
                        <Badge variant="success">Online</Badge>
                    </ItemActions>
                </Item>
                <Empty className="border border-dashed">
                    <EmptyHeader>
                        <EmptyMedia variant="icon">
                            <LuInbox />
                        </EmptyMedia>
                        <EmptyTitle>Nenhuma mensagem</EmptyTitle>
                        <EmptyDescription>Quando chegar algo, aparece aqui.</EmptyDescription>
                    </EmptyHeader>
                </Empty>
            </Demo>

            <Demo title="Breadcrumb · Pagination · Collapsible · Table">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/">Início</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Componentes</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
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
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
                <Collapsible>
                    <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                            Mostrar detalhes
                        </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="text-sm text-muted-foreground">
                        Conteúdo recolhível.
                    </CollapsibleContent>
                </Collapsible>
                <Table>
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
                    </TableBody>
                </Table>
            </Demo>

            <Demo title="Resizable · Scroll Area">
                <ResizablePanelGroup orientation="horizontal" className="min-h-28 rounded-lg border">
                    <ResizablePanel defaultSize="50%">
                        <div className="grid h-full place-items-center text-sm">Esquerda</div>
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize="50%">
                        <div className="grid h-full place-items-center text-sm">Direita</div>
                    </ResizablePanel>
                </ResizablePanelGroup>
                <ScrollArea className="h-28 rounded-lg border p-3">
                    {Array.from({ length: 12 }, (_, index) => (
                        <p key={index} className="text-sm">
                            Linha {index + 1}
                        </p>
                    ))}
                </ScrollArea>
            </Demo>
        </div>
    )
}

function Demo({ title, wide = false, children }: { title: string; wide?: boolean; children: ReactNode }) {
    return (
        <Card className={wide ? "md:col-span-2 xl:col-span-3" : undefined}>
            <CardContent className="flex flex-col gap-4">
                <p className="text-xs font-medium tracking-[0.08em] text-muted-foreground uppercase">{title}</p>
                {children}
            </CardContent>
        </Card>
    )
}
