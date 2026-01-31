import { ReactNode } from "react";
import { NavigationItemProps } from "./NavigationItem.types";

export interface NavigationProps {
    show?:boolean,
    items?: Array<NavigationItemProps>
}

export interface NavigationListProps {
    children?: ReactNode
}