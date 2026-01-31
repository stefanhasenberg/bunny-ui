
import { AriaTagProps } from "../Aria.types"

export interface TextAreaProps {
    id?: string,
    name: string,
    disabled?: boolean,
    borders?: boolean,
    onChange?: (React.ChangeEventHandler<HTMLTextAreaElement>) | undefined,
    onBlur?: (React.FocusEventHandler<HTMLTextAreaElement> )| undefined,
    validationRules?: Array<ValidationRule>,
    placeholder?: string,
    children?:any,
    marginBottom?: ("small" | "medium" | "large"),
    aria?: AriaTagProps
}

export interface ValidationRule {
    ruleName: ("required" | "numeric" | "alphanumeric" | "alphabetic"),
    errorMessage: string
}