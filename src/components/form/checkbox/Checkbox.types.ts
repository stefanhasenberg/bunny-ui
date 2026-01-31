
import { AriaTagProps } from "../Aria.types"

export interface CheckboxProps {
    id?:string,
    checked?:boolean,
    name: string,
    disabled?: boolean,
    onChange?: (React.ChangeEventHandler<HTMLInputElement> ),
    marginBottom?: ("small" | "medium" | "large"),
    label?: string,
    checkRequired?: boolean,
    requiredMessage?: string,
    aria?: AriaTagProps
}

export interface CheckboxLabelProps {
    name: string,
    htmlFor: string
}