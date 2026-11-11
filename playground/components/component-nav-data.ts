export type NavItem = {
    slug: string
    label: string
    description: string
    badge?: string
}

export type NavGroup = {
    title: string
    columns?: 1 | 2 | 3
    items: NavItem[]
}

export const navGroups: NavGroup[] = [
    {
        title: "Layout",
        items: [
            { slug: "direction", label: "Direction", description: "Sets reading direction (LTR/RTL) for a subtree." },
            { slug: "sidebar", label: "Sidebar", description: "Composable, themeable side navigation." },
            { slug: "aspect-ratio", label: "Aspect Ratio", description: "Displays content within a desired ratio." },
            { slug: "resizable", label: "Resizable", description: "Accessible resizable panel groups and layouts." },
            {
                slug: "scroll-area",
                label: "Scroll Area",
                description: "Augments native scroll functionality with custom cross-browser styling.",
            },
            { slug: "separator", label: "Separator", description: "Visually or semantically separates content." },
        ],
    },
    {
        title: "Backgrounds",
        columns: 1,
        items: [
            { slug: "background-blur", label: "Background Blur", description: "Blurred blobs for an aurora look." },
            { slug: "background-dots", label: "Background Dots", description: "Dot matrix with optional edge fade." },
            { slug: "background-glow", label: "Background Glow", description: "Blurred glow hanging from the top." },
            {
                slug: "background-gradient",
                label: "Background Gradient",
                description: "Linear, radial and conic gradient washes.",
            },
            { slug: "background-grid", label: "Background Grid", description: "Thin-line grid with optional fade." },
            { slug: "background-lines", label: "Background Lines", description: "Stripes at any angle." },
            { slug: "background-noise", label: "Background Noise", description: "Film grain texture." },
        ],
    },
    {
        title: "Error Pages",
        columns: 1,
        items: [
            {
                slug: "error-page",
                label: "Error Page",
                description: "Base layout for custom errors, with overridable copy.",
            },
            {
                slug: "not-found-page",
                label: "Not Found (404)",
                description: "Default 404 for marcuth.dev and subdomains.",
            },
            {
                slug: "server-error-page",
                label: "Server Error (500)",
                description: "Unexpected failure with retry and error digest.",
            },
            {
                slug: "access-error-pages",
                label: "401 / 403 / 429 / 503",
                description: "Unauthorized, forbidden, rate limited and maintenance.",
            },
        ],
    },
    {
        title: "Theme",
        items: [
            {
                slug: "theme-toggle",
                label: "Theme Toggle",
                description: "Light/dark switch with an expanding circular reveal, persisted in a cookie.",
                badge: "New",
            },
            {
                slug: "theme-scope",
                label: "Theme Scope",
                description:
                    "The `theme` and `inverse` props on AppHeader, AppFooter, Section, Background and error pages.",
                badge: "New",
            },
        ],
    },
    {
        title: "Typography & Icons",
        items: [
            {
                slug: "emoji",
                label: "Emoji",
                description: "Emoji icon component rendered with Noto Color Emoji font.",
                badge: "New",
            },
            {
                slug: "typography",
                label: "Typography",
                description: "Styles for headings, paragraphs, blockquotes, lists, and inline code.",
            },
            {
                slug: "code-block",
                label: "Code Block",
                description: "Formatted code display with syntax highlighting and copy button.",
            },
            { slug: "kbd", label: "Kbd", description: "Displays keyboard keys and shortcuts." },
        ],
    },
    {
        title: "Feedback",
        items: [
            { slug: "alert", label: "Alert", description: "Displays a callout for user attention." },
            {
                slug: "progress",
                label: "Progress",
                description: "Displays an indicator showing the completion progress of a task.",
            },
            {
                slug: "skeleton",
                label: "Skeleton",
                description: "Used to show a placeholder while content is loading.",
            },
            { slug: "sonner", label: "Toast (Sonner)", description: "An opinionated toast component for React." },
            { slug: "spinner", label: "Spinner", description: "Animated loading spinner indicator." },
            { slug: "trace", label: "Trace", description: "Multi-step process and status tracking timeline." },
        ],
    },
    {
        title: "Data Display",
        items: [
            {
                slug: "avatar",
                label: "Avatar",
                description: "An image element with a fallback for representing the user.",
            },
            { slug: "badge", label: "Badge", description: "Displays a badge or a component that looks like a badge." },
            {
                slug: "breadcrumb",
                label: "Breadcrumb",
                description: "Displays the path to the current resource using a hierarchy of links.",
            },
            { slug: "card", label: "Card", description: "Displays a card with header, content, and footer." },
            { slug: "carousel", label: "Carousel", description: "A carousel with motion and swipe gestures." },
            { slug: "chart", label: "Chart", description: "Beautiful charts built with Recharts and theme tokens." },
            {
                slug: "data-table",
                label: "Data Table",
                description: "Powerful table with sorting, filtering, and pagination.",
            },
            {
                slug: "pagination",
                label: "Pagination",
                description: "Pagination with page navigation, next and previous links.",
            },
            { slug: "table", label: "Table", description: "A responsive table component." },
        ],
    },
    {
        title: "Forms",
        items: [
            {
                slug: "field",
                label: "Field",
                description: "Label, control, description and error in one accessible group.",
            },
            {
                slug: "button",
                label: "Button",
                description: "Displays a button or a component that looks like a button.",
            },
            { slug: "button-group", label: "Button Group", description: "A segmented set of related buttons." },
            {
                slug: "calendar",
                label: "Calendar",
                description: "A date field component that allows users to enter and edit dates.",
            },
            {
                slug: "checkbox",
                label: "Checkbox",
                description: "A control that allows the user to toggle between checked and not checked.",
            },
            {
                slug: "combobox",
                label: "Combobox",
                description: "Autocomplete input and command palette with a list of suggestions.",
            },
            {
                slug: "date-picker",
                label: "Date Picker",
                description: "A date picker component with range and single-date selection.",
            },
            {
                slug: "input",
                label: "Input",
                description: "Displays a form input field or a component that looks like an input field.",
            },
            {
                slug: "input-group",
                label: "Input Group",
                description: "An input paired with decorative icons or addon controls.",
            },
            {
                slug: "input-otp",
                label: "Input OTP",
                description: "A accessible one-time password component with copy paste functionality.",
            },
            { slug: "label", label: "Label", description: "Renders an accessible label associated with controls." },
            { slug: "native-select", label: "Native Select", description: "Styled native HTML select input." },
            {
                slug: "radio-group",
                label: "Radio Group",
                description: "A set of checkable buttons—known as radio buttons—where no more than one can be checked.",
            },
            {
                slug: "select",
                label: "Select",
                description: "Displays a list of options for the user to pick from—triggered by a button.",
            },
            {
                slug: "slider",
                label: "Slider",
                description: "An input where the user selects a value from within a given range.",
            },
            {
                slug: "switch",
                label: "Switch",
                description: "A control that allows the user to toggle between checked and not checked.",
            },
            {
                slug: "textarea",
                label: "Textarea",
                description: "Displays a form textarea or a component that looks like a textarea.",
            },
            { slug: "toggle", label: "Toggle", description: "A two-state button that can be either on or off." },
            {
                slug: "toggle-group",
                label: "Toggle Group",
                description: "A set of two-state buttons that can be toggled on or off.",
            },
        ],
    },
    {
        title: "Overlays",
        items: [
            {
                slug: "alert-dialog",
                label: "Alert Dialog",
                description: "A modal dialog that interrupts the user with important content and expects a response.",
            },
            {
                slug: "context-menu",
                label: "Context Menu",
                description: "Displays a menu to the user — triggered by a right-click or long-press.",
            },
            {
                slug: "dialog",
                label: "Dialog",
                description: "A window overlaid on either the primary window or another dialog window.",
            },
            {
                slug: "drawer",
                label: "Drawer",
                description: "A drawer component for React that slides up from the bottom of the screen.",
            },
            {
                slug: "dropdown-menu",
                label: "Dropdown Menu",
                description: "Displays a menu to the user — such as a set of actions or functions.",
            },
            {
                slug: "hover-card",
                label: "Hover Card",
                description: "For sighted users to preview content available behind a link.",
            },
            {
                slug: "popover",
                label: "Popover",
                description: "Displays rich content in a portal, triggered by a button.",
            },
            {
                slug: "sheet",
                label: "Sheet",
                description: "Extends the Dialog component to display content that complements the main screen.",
            },
            {
                slug: "tooltip",
                label: "Tooltip",
                description:
                    "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
            },
        ],
    },
    {
        title: "Navigation",
        items: [
            { slug: "link", label: "Link", description: "Styled link that picks Next Link or <a> from the href." },
            {
                slug: "accordion",
                label: "Accordion",
                description: "A vertically stacked set of interactive headings that each reveal a section of content.",
            },
            {
                slug: "collapsible",
                label: "Collapsible",
                description: "An interactive component which expands/collapses a panel.",
            },
            { slug: "command", label: "Command", description: "Fast, composable, unstyled command menu for React." },
            {
                slug: "menubar",
                label: "Menubar",
                description: "A visually persistent menu common in desktop applications.",
            },
            {
                slug: "navigation-menu",
                label: "Navigation Menu",
                description: "A collection of links for navigating websites with animated dropdown indicators.",
            },
            {
                slug: "tabs",
                label: "Tabs",
                description:
                    "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
            },
        ],
    },
    {
        title: "Chat & Media",
        items: [
            {
                slug: "attachment",
                label: "Attachment",
                description: "Displays an attached file with icon, name, and size.",
            },
            {
                slug: "bubble",
                label: "Bubble",
                description: "Chat message bubble with multiple alignment and variant styles.",
            },
            {
                slug: "message",
                label: "Message",
                description: "Chat thread message line with avatar and sender context.",
            },
            {
                slug: "message-scroller",
                label: "Message Scroller",
                description: "Auto-scrolling container for real-time chat histories.",
            },
        ],
    },
    {
        title: "Utilities",
        items: [
            {
                slug: "empty",
                label: "Empty",
                description: "Empty state placeholder with icon, title, and action trigger.",
            },
            { slug: "item", label: "Item", description: "Card row element with title, description, and slot actions." },
            { slug: "marker", label: "Marker", description: "Date or section milestone separator." },
            {
                slug: "questionnaire",
                label: "Questionnaire",
                description: "Step-by-step multi-question interactive flow.",
            },
        ],
    },
]

export const allItems: NavItem[] = navGroups.flatMap((g) => g.items)

export function findItem(slug: string): NavItem | undefined {
    return allItems.find((item) => item.slug === slug)
}
