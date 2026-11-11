import {
    Anchor,
    AppHeader,
    AppHeaderActions,
    AppHeaderBrand,
    AppHeaderNav,
    BrandMark,
    NavLink,
    ThemeToggle,
} from "@marcuth/ui"
import { ComponentNav } from "@playground/components/component-nav"
import type { ReactNode } from "react"

export default function ComponentsLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <AppHeader>
                <AppHeaderBrand>
                    <Anchor href="/">
                        <BrandMark name="ui" />
                    </Anchor>
                </AppHeaderBrand>
                <AppHeaderNav>
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/components" active>
                        Components
                    </NavLink>
                    <NavLink href="/projects">Projects</NavLink>
                </AppHeaderNav>
                <AppHeaderActions>
                    <ThemeToggle />
                </AppHeaderActions>
            </AppHeader>

            <div className="container mx-auto flex max-w-screen-xl gap-0 px-4 md:px-6 lg:px-8">
                {/* Sidebar */}
                <aside className="hidden w-56 shrink-0 lg:sticky lg:top-16 lg:block lg:h-[calc(100vh-4rem)] xl:w-64">
                    <ComponentNav />
                </aside>

                {/* Main content */}
                <main className="min-w-0 flex-1 py-8 lg:pl-8 xl:pl-12">{children}</main>
            </div>
        </>
    )
}
