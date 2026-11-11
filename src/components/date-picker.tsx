"use client"

import { format as formatDate, type Locale } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useState } from "react"
import { LuCalendar } from "react-icons/lu"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

export type DatePickerProps = {
    /** Controlled value. Omit for uncontrolled use with `defaultValue`. */
    value?: Date
    defaultValue?: Date
    onValueChange?: (date: Date | undefined) => void
    placeholder?: string
    /** date-fns format string for the trigger label. Defaults to "PPP" (e.g. "10 de novembro de 2026"). */
    format?: string
    /** date-fns locale for the label and the calendar. Defaults to pt-BR. */
    locale?: Locale
    disabled?: boolean
    className?: string
    id?: string
}

/** shadcn's date picker recipe: an outline button that opens a Calendar in a Popover. */
export function DatePicker({
    value,
    defaultValue,
    onValueChange,
    placeholder = "Escolha uma data",
    format = "PPP",
    locale = ptBR,
    disabled,
    className,
    id,
}: DatePickerProps) {
    const [internal, setInternal] = useState<Date | undefined>(defaultValue)
    const [open, setOpen] = useState(false)
    const selected = value ?? internal

    function select(date: Date | undefined) {
        if (value === undefined) setInternal(date)
        onValueChange?.(date)
        setOpen(false)
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    id={id}
                    variant="outline"
                    disabled={disabled}
                    data-empty={!selected || undefined}
                    className={cn("w-60 justify-start font-normal data-empty:text-muted-foreground", className)}
                >
                    <LuCalendar data-icon="inline-start" />
                    {selected ? formatDate(selected, format, { locale }) : placeholder}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" selected={selected} onSelect={select} locale={locale} autoFocus />
            </PopoverContent>
        </Popover>
    )
}
