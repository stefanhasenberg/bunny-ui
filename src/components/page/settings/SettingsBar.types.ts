import React, { ReactNode } from "react";
import { SvgProps } from "../../images/svg/Svg.types";

export interface SettingsBarItemProps {
    svg?: SvgProps,
    children?: ReactNode,
    label?: string,
    hideOnMobile?: boolean,
    onClick?: React.MouseEventHandler<HTMLLIElement> | undefined
}

export interface SettingsBarProps {
    children?: ReactNode
    items?: Array<SettingsBarItemProps>,
    settings?: ReactNode,
    toggleMenu?: (open:boolean) => void
}

