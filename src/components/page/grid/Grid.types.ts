import { ReactNode } from "react";

export interface GridProps {
    gridGap?: ("small" | "medium" | "large"),
    gridType?: ("one" | "one-one" | "one-one-one" | "one-one-one-one"),
    children?: ReactNode
}