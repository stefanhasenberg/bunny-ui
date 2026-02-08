
export interface TextProps {
    type: ("default" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "small" | "span" | "quote" | "b"),
    link?: LinkProps,
    content: string
}

export interface LinkProps {
    href: string,
    title: string,
    className?: string
}