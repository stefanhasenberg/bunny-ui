
import { AriaTagProps } from "../Aria.types"

export interface HiddenInputProps {
    id?: string,
    name: string,
    disabled?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>| undefined,
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined,
    validationRules?: Array<ValidationRule>,
    value?:string,
    marginBottom?: ("small" | "medium" | "large"),
    aria?: AriaTagProps
}

export interface ValidationRule {
    ruleName: ("required" | "eMail" | "password" | "numeric" | "alphanumeric" | "alphabetic"),
    errorMessage: string
}