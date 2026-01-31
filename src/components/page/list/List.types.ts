import { SvgProps } from "../../images/svg/Svg.types";
import { LinkProps } from "../text/Text.types";
import { ColorStates } from "../types/Color.types";

export interface ListItemProps {
    svg?: SvgProps,
    text?: string,
    border?: boolean,
    link?: LinkProps,
    colorRef?: ColorStates,
    borderColorRef?: ColorStates
}

export interface ListProps {
    items?: Array<ListItemProps>,
    colorRef?: ColorStates,
    borderColorRef?: ColorStates
}