import { ReactNode } from "react";

export interface SectionProps {
    maxWidth?: ("breakpoint1" | "breakpoint2" | "breakpoint3"),
    textColor?: ("black" | "white"),
    backgroundColor?: ("default" | "primary" | "secondary")
    children?: ReactNode
}