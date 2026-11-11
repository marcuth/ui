import { Anchor, AppHeader, BrandMark, Container, Heading, NavLink, Stack, Text, ThemeToggle } from "@marcuth/ui"

import { Gallery } from "./gallery"

export default function ComponentesPage() {
    return (
        <>
            <AppHeader
                brand={
                    <Anchor href="/">
                        <BrandMark name="ui" />
                    </Anchor>
                }
                actions={<ThemeToggle />}
            >
                <NavLink href="/">Início</NavLink>
                <NavLink href="/componentes" active>
                    Componentes
                </NavLink>
                <NavLink href="/projetos">Projetos</NavLink>
            </AppHeader>
            <Container size="xl" className="py-12">
                <Stack gap={8}>
                    <Stack gap={2}>
                        <Heading level={1}>Componentes</Heading>
                        <Text tone="muted">Todos os componentes do shadcn/ui com o design system aplicado.</Text>
                    </Stack>
                    <Gallery />
                </Stack>
            </Container>
        </>
    )
}
