import {
    Anchor,
    AppHeader,
    AppHeaderActions,
    AppHeaderBrand,
    AppHeaderNav,
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
export default function ProjectsPage() {
    return (
        <>
            <AppHeader>
                <AppHeaderBrand>
                    <Anchor href="/">
                        <BrandMark />
                    </Anchor>
                </AppHeaderBrand>
                <AppHeaderNav>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/components">Components</NavLink>
                    <NavLink href="/projects" active>
                        Projects
                    </NavLink>
                </AppHeaderNav>
                <AppHeaderActions>
                    <ThemeToggle />
                </AppHeaderActions>
            </AppHeader>
            <Container className="py-section">
                <Stack gap={6}>
                    <Heading level={1}>Projects</Heading>
                    <Text tone="muted">
                        Server-rendered page. <Link href="/">Back to home</Link> routes through <Code>next/link</Code>.
                    </Text>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>@marcuth/ui</CardTitle>
                                <CardDescription>Per-subdomain theme design system with Tailwind CSS.</CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Repository</CardTitle>
                                <CardDescription>
                                    <Link href="https://github.com/marcuth/ui">
                                        github.com/marcuth/ui <LuArrowUpRight className="inline size-3.5" />
                                    </Link>{" "}
                                    opens in a new tab.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </Stack>
            </Container>
        </>
    )
}
