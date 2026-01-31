
import { AriaTagProps } from "../Aria.types"

export interface RangeProps {
    id?:string,
    value?:number,
    min?: number,
    max?: number,
    name: string,
    disabled?: boolean,
    onChange?: (React.ChangeEventHandler<HTMLInputElement> ),
    marginBottom?: ("small" | "medium" | "large"),
    label?: string,
    aria?: AriaTagProps
}

export interface RangeLabelProps {
    name: string,
    htmlFor: string
}