"use client"

import {
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
    type Column,
    type ColumnDef,
    type ColumnFiltersState,
    type SortingState,
} from "@tanstack/react-table"
import { useState, type ReactNode } from "react"
import { LuArrowDown, LuArrowUp, LuChevronsUpDown } from "react-icons/lu"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { cn } from "@/lib/utils"

export type { ColumnDef } from "@tanstack/react-table"

export type DataTableProps<TData, TValue> = {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    /** Column id to filter with the search input. Omit to hide the input. */
    filterColumn?: string
    filterPlaceholder?: string
    /** Rows per page. Set 0 to disable pagination. Defaults to 10. */
    pageSize?: number
    emptyMessage?: ReactNode
    /** Labels for the pagination buttons and the page summary. */
    labels?: { previous?: string; next?: string; page?: (page: number, total: number) => string }
    className?: string
}

/**
 * shadcn's data table recipe as one component: TanStack Table over the shadcn Table, with
 * sorting (use `DataTableColumnHeader` in a column's `header`), an optional filter and pagination.
 */
export function DataTable<TData, TValue>({
    columns,
    data,
    filterColumn,
    filterPlaceholder = "Filtrar…",
    pageSize = 10,
    emptyMessage = "Nenhum resultado.",
    labels = {},
    className,
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const paginated = pageSize > 0

    // TanStack Table returns new functions each render by design; the React Compiler lint can't memoize it.
    // eslint-disable-next-line react-hooks/incompatible-library
    const table = useReactTable({
        data,
        columns,
        state: { sorting, columnFilters },
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        ...(paginated ? { getPaginationRowModel: getPaginationRowModel() } : {}),
        initialState: paginated ? { pagination: { pageSize, pageIndex: 0 } } : undefined,
    })

    const filter = filterColumn ? table.getColumn(filterColumn) : undefined
    const { previous = "Anterior", next = "Próxima", page = (p, t) => `Página ${p} de ${t}` } = labels

    return (
        <div data-slot="data-table" className={cn("flex flex-col gap-4", className)}>
            {filter ? (
                <Input
                    placeholder={filterPlaceholder}
                    value={(filter.getFilterValue() as string | undefined) ?? ""}
                    onChange={(event) => filter.setFilterValue(event.target.value)}
                    className="max-w-sm"
                />
            ) : null}
            <div className="overflow-hidden rounded-lg border">
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(header.column.columnDef.header, header.getContext())}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow key={row.id} data-state={row.getIsSelected() ? "selected" : undefined}>
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center text-muted-foreground">
                                    {emptyMessage}
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            {paginated && table.getPageCount() > 1 ? (
                <div className="flex items-center justify-end gap-2">
                    <span className="mr-auto text-sm text-muted-foreground">
                        {page(table.getState().pagination.pageIndex + 1, table.getPageCount())}
                    </span>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >
                        {previous}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >
                        {next}
                    </Button>
                </div>
            ) : null}
        </div>
    )
}

/** Sortable column header: `header: ({ column }) => <DataTableColumnHeader column={column} title="Nome" />`. */
export function DataTableColumnHeader<TData, TValue>({
    column,
    title,
    className,
}: {
    column: Column<TData, TValue>
    title: string
    className?: string
}) {
    if (!column.getCanSort()) return <span className={className}>{title}</span>
    const sorted = column.getIsSorted()
    const Icon = sorted === "asc" ? LuArrowUp : sorted === "desc" ? LuArrowDown : LuChevronsUpDown

    return (
        <Button
            variant="ghost"
            size="sm"
            className={cn("-ml-2.5 data-[sorted]:text-foreground", className)}
            data-sorted={sorted || undefined}
            onClick={() => column.toggleSorting(sorted === "asc")}
        >
            {title}
            <Icon data-icon="inline-end" className={cn(!sorted && "text-muted-foreground")} />
        </Button>
    )
}
