import { ImageProps } from "../../images/image/Image.types";
import { TextProps } from "../text/Text.types";

export default interface TeaserBlogProps {
    image?: ImageProps,
    headline?: TextProps,
    text?: TextProps,
    href?: string
}