
import { AriaTagProps } from "../Aria.types"

export interface SelectProps {
    id?: string,
    name: string,
    disabled?: boolean,
    options?: Array<SelectItemProps>,
    value?: any,
    defaultUnselected?: string,
    onSelect?: React.ReactEventHandler<HTMLSelectElement>,
    validationRules?: Array<ValidationRule>,
    marginBottom?: ("small" | "medium" | "large"),
    aria?: AriaTagProps
}

export interface SelectItemProps {
    name: string,
    label?: string,
    value?: string,
    disabled?: boolean
}

export interface ValidationRule {
    ruleName: ("required"),
    errorMessage: string
}