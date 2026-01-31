
import { AriaTagProps } from "../Aria.types";

export interface TextInputProps {
    id?: string,
    name: string,
    type?: "text" | "password";
    disabled?: boolean,
    borders?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>| undefined,
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined,
    validationRules?: Array<ValidationRule>,
    placeholder?: string,
    value?:string,
    marginBottom?: ("small" | "medium" | "large"),
    aria?: AriaTagProps
}

export interface ValidationRule {
    ruleName: ("required" | "eMail" | "password" | "numeric" | "alphanumeric" | "alphabetic"),
    errorMessage: string
}