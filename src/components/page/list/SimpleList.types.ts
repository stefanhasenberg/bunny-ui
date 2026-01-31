import { ReactNode } from "react"

export interface SimpleListItemProps {
    children?: ReactNode,
    inline?: boolean,
    margin?: ("small" | "medium" | "large")
}

export interface SimpleListProps {
    items?: Array<SimpleListItemProps>,
    inline?: boolean
}