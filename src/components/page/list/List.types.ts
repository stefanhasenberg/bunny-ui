import { SvgProps } from "../../images/svg/Svg.types";
import { LinkProps } from "../text/Text.types";

export interface ListItemProps {
    svg?: SvgProps,
    text?: string,
    border?: boolean,
    link?: LinkProps,
    className?: string
}

export interface ListProps {
    items?: Array<ListItemProps>
}