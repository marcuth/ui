"use client"

import { Anchor, Badge, ScrollArea } from "@marcuth/ui"
import { usePathname } from "next/navigation"

import { navGroups } from "./component-nav-data"

export function ComponentNav() {
    const pathname = usePathname()

    return (
        <ScrollArea className="h-full py-6 pr-4">
            <nav className="flex flex-col gap-6">
                <div>
                    <Anchor
                        href="/components"
                        className={[
                            "flex items-center justify-between rounded-md px-2 py-1.5 text-sm font-semibold transition-colors no-underline",
                            pathname === "/components"
                                ? "bg-accent text-accent-foreground"
                                : "text-foreground hover:bg-accent/50",
                        ].join(" ")}
                    >
                        <span>Overview</span>
                    </Anchor>
                </div>
                {navGroups.map((group) => (
                    <div key={group.title}>
                        <p className="mb-2 px-2 text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                            {group.title}
                        </p>
                        <ul className="flex flex-col gap-0.5">
                            {group.items.map((item) => {
                                const href = `/components/${item.slug}`
                                const isActive = pathname === href

                                return (
                                    <li key={item.slug}>
                                        <Anchor
                                            href={href}
                                            className={[
                                                "flex items-center justify-between rounded-md px-2 py-1.5 text-sm transition-colors no-underline",
                                                isActive
                                                    ? "bg-accent font-medium text-accent-foreground"
                                                    : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                                            ].join(" ")}
                                        >
                                            <span>{item.label}</span>
                                            {item.badge && (
                                                <Badge variant="brand" className="h-4 px-1.5 text-[10px]">
                                                    {item.badge}
                                                </Badge>
                                            )}
                                        </Anchor>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                ))}
            </nav>
        </ScrollArea>
    )
}
