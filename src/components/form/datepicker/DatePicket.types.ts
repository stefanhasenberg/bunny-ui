import { AriaTagProps } from "../Aria.types";

export interface DatePickerProps {
    id?: string,
    name: string,
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
    ruleName: ("required" | "larger" | "smaller"),
    refValue?: string,
    errorMessage: string
}