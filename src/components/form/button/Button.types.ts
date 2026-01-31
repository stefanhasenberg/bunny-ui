import React from 'react';

import { AriaTagProps } from '../Aria.types';

export interface DefaultButtonProps {
    id?: string,
    name: string,
    buttonType?: "primary" | "secondary",
    textAlign?: "left" | "center" | "right",
    disabled?: boolean,
    dedicatedRow?: boolean,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined,
    children?: React.ReactNode,
    marginBottom?: ("small" | "medium" | "large"),
    aria?: AriaTagProps
}

export interface ButtonRowProps {
    buttons: Array<DefaultButtonProps>,
    textAlign?: "left" | "center" | "right",
    marginBottom?: ("small" | "medium" | "large")
}