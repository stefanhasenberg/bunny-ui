
import { AriaTagProps } from "../Aria.types";

export interface FileInputProps {
    id?: string,
    name: string,
    disabled?: boolean,
    borders?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>| undefined,
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined,
    placeholder?: string,
    value?:string,
    marginBottom?: ("small" | "medium" | "large"),
    errorMessage?: string,
    aria?: AriaTagProps
}