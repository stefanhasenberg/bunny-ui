import { ReactNode } from "react";

export interface PlaceholderProps {
    roundedBorder?: boolean,
    ratio: ("widescreen" | "square"),
    children?: ReactNode
}