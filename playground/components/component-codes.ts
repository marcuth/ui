import { generatedCodes } from "./component-codes.generated"

export const previewCodes: Record<string, string> = {
    emoji: `import { Emoji, Button, Badge } from "@marcuth/ui"

export default function EmojiDemo() {
    return (
        <div className="flex flex-col gap-4">
            {/* Sizes rendered with Noto Color Emoji */}
            <div className="flex items-center gap-3">
                <Emoji emoji="🚀" size="xs" label="Rocket" />
                <Emoji emoji="🚀" size="sm" />
                <Emoji emoji="🚀" size="md" />
                <Emoji emoji="🚀" size="lg" />
                <Emoji emoji="🚀" size="xl" />
                <Emoji emoji="🚀" size="2xl" />
            </div>

            {/* As icon inside Buttons and Badges */}
            <div className="flex items-center gap-2">
                <Button variant="brand">
                    <Emoji emoji="✨" className="mr-1.5" />
                    Launch
                </Button>
                <Badge variant="success">
                    <Emoji emoji="🟢" className="mr-1" />
                    Online
                </Badge>
            </div>
        </div>
    )
}`,
    button: `import { Button } from "@marcuth/ui"

export default function ButtonDemo() {
    return (
        <div className="flex flex-wrap gap-2">
            <Button>Default</Button>
            <Button variant="brand">Brand</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
        </div>
    )
}`,
    badge: `import { Badge } from "@marcuth/ui"

export default function BadgeDemo() {
    return (
        <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="brand">Brand</Badge>
            <Badge variant="success">Online</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
        </div>
    )
}`,
    card: `import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
    Button
} from "@marcuth/ui"

export default function CardDemo() {
    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">Stay up to date with real-time updates.</p>
            </CardContent>
            <CardFooter>
                <Button variant="brand" className="w-full">Mark all as read</Button>
            </CardFooter>
        </Card>
    )
}`,
    alert: `import { Alert, AlertTitle, AlertDescription } from "@marcuth/ui"
import { LuInfo } from "@marcuth/ui/icons/lucide"

export default function AlertDemo() {
    return (
        <Alert>
            <LuInfo />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>You can add components to your app using the cli.</AlertDescription>
        </Alert>
    )
}`,
    dialog: `import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    Button
} from "@marcuth/ui"

export default function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>Make changes to your profile here.</DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="brand">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}`,
}

export function getComponentCode(slug: string, label: string): string {
    if (previewCodes[slug]) {
        return previewCodes[slug]
    }
    if (generatedCodes[slug]) {
        return generatedCodes[slug]
    }
    const componentName = label.replace(/\s+/g, "")
    return `import { ${componentName} } from "@marcuth/ui"

export default function ${componentName}Demo() {
    return (
        <${componentName} />
    )
}`
}
