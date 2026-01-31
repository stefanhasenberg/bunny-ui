import { ReactNode } from "react"
import { ColorStates } from "../../page/types/Color.types"

export interface SvgProps {
    svgRef: ("home" | "qualifications" | "profile" | "instagram" | "facebook" | "linkedIn" | "youTube" | "xing" | "menu" | "settings" | "info" | "help" | "warning" | "close" | "arrowUp" | "arrowDown" | "check" | "checkboxUnchecked" | "checkboxChecked" | "contact" | "add" | "delete" | "edit" | "bunnyUiLogo"),
    colorRef?: ColorStates,
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined
}

export interface SvgItem {
    name: ("home" | "qualifications" | "profile" | "instagram" | "facebook" | "linkedIn" | "youTube" | "xing" | "menu" | "settings" | "info" | "help" | "warning" | "close" | "arrowUp" | "arrowDown" | "check" | "checkboxUnchecked" | "checkboxChecked" | "contact" | "add" | "delete" | "edit" | "bunnyUiLogo"),
    value: ReactNode
}