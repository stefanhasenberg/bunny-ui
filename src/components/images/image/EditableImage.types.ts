export interface EditableImageProps {
    name: string,
    src?: string,
    srcSet?: string,
    alt?: string,
    title?: string,
    ratio: ("square" | "widescreen")
    editable?: boolean,
    save?: (newValue?: File | undefined) => void
}