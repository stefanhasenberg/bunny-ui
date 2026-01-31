export interface SingleDefinitionItemProps {
    editable?: boolean,
    title?: string,
    content?: string,
    onSave?: (newValue: string) => void
}