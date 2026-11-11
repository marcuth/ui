import {
    Anchor,
    AppHeader,
    BrandMark,
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
    Code,
    Container,
    Heading,
    Link,
    NavLink,
    Stack,
    Text,
    ThemeToggle,
} from "@marcuth/ui"
import { LuArrowUpRight } from "@marcuth/ui/icons/lucide"

/** Server Component page: proves the library renders in RSC and internal links route client-side. */
export default function ProjetosPage() {
    return (
        <>
            <AppHeader
                brand={
                    <Anchor href="/">
                        <BrandMark />
                    </Anchor>
                }
                actions={<ThemeToggle />}
            >
                <NavLink href="/">Início</NavLink>
                <NavLink href="/projetos" active>
                    Projetos
                </NavLink>
            </AppHeader>
            <Container className="py-section">
                <Stack gap={6}>
                    <Heading level={1}>Projetos</Heading>
                    <Text tone="muted">
                        Página renderizada no servidor. <Link href="/">Voltar ao início</Link> navega pelo{" "}
                        <Code>next/link</Code>.
                    </Text>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>@marcuth/ui</CardTitle>
                                <CardDescription>Design system com tema por subdomínio.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Repositório</CardTitle>
                                <CardDescription>
                                    <Link href="https://github.com/marcuth/ui">
                                        github.com/marcuth/ui <LuArrowUpRight className="inline size-3.5" />
                                    </Link>{" "}
                                    abre em nova aba.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </Stack>
            </Container>
        </>
    )
}
