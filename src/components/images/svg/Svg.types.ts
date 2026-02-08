import { ReactNode } from "react"

export interface SvgProps {
    svgRef: ("home" | "qualifications" | "profile" | "instagram" | "facebook" | "linkedIn" | "youTube" | "xing" | "menu" | "settings" | "info" | "help" | "warning" | "close" | "arrowUp" | "arrowDown" | "arrowLeft" | "arrowRight" | "check" | "checkboxUnchecked" | "checkboxChecked" | "contact" | "add" | "delete" | "edit" | "bunnyUiLogo"),
    className?: String,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

export interface SvgItem {
    name: ("home" | "qualifications" | "profile" | "instagram" | "facebook" | "linkedIn" | "youTube" | "xing" | "menu" | "settings" | "info" | "help" | "warning" | "close" | "arrowUp" | "arrowDown" | "arrowLeft" | "arrowRight" | "check" | "checkboxUnchecked" | "checkboxChecked" | "contact" | "add" | "delete" | "edit" | "bunnyUiLogo"),
    value: ReactNode
}