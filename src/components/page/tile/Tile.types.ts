import { ReactNode } from "react";

export interface TileProps {
    info?: ReactNode,
    head?: ReactNode,
    editable?: boolean,
    content?: ReactNode,
    padding?: ("small" | "medium" | "large"),
    marginBottom?: ("small" | "medium" | "large"),
    onEdit?: (editMode: boolean, save?: boolean) => void
}


export interface HeadTileProps {
    info?: ReactNode,
    editable?: boolean,
    content?: ReactNode,
    contentOpen?:boolean
}

export interface ContentTileProps {
    editable?: boolean,
    content?: ReactNode,
    contentOpen?:boolean,
    padding?: ("small" | "medium" | "large")
}