import { ReactNode } from "react";

import { SvgProps } from "../../images/svg/Svg.types";
import { AriaTagProps } from "../Aria.types";

export interface ImageButtonProps {
    id?: string,
    name: string,
    label?: string,
    svg: SvgProps,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    textAlign?: "left" | "center" | "right",
    disabled?: boolean,
    dedicatedRow?: boolean,
    marginBottom?: ("small" | "medium" | "large"),
    aria?: AriaTagProps
}