export interface EditableContentProps {
    name: string,
    title?: string,
    text?: string,
    richText?: boolean,
    editable?: boolean,
    saveButtonText?: string,
    save?: (newValue?: string | undefined) => void
}