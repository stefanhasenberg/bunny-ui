import { ReactNode } from "react";

export interface CollectionProps {
    marginBottom?: ("small" | "medium" | "large"),
    marginTop?: ("small" | "medium" | "large"),
    marginLeft?: ("small" | "medium" | "large"),
    marginRight?: ("small" | "medium" | "large"),
    paddingBottom?: ("small" | "medium" | "large"),
    paddingTop?: ("small" | "medium" | "large"),
    paddingLeft?: ("small" | "medium" | "large"),
    paddingRight?: ("small" | "medium" | "large"),
    wrapper?: CollectionWrapperProps,
    timeline?: boolean,
    children?: ReactNode
}

export interface CollectionWrapperProps {
    roundedBorder?: boolean
}