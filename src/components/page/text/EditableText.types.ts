export interface EditableTextProps {
    name: string,
    text?: string,
    richText?: boolean,
    editMode?: boolean,
    saveButtonText?: string,
    save?: (newValue?: string | undefined) => void
}