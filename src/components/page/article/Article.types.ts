import {ReactNode} from "react";

export interface ArticleProps {
    textMargin?: ("small" | "medium" | "large");
    children?: ReactNode;
}