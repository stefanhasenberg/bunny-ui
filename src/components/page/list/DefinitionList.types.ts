export interface DefinitionListProps {
    editable?: boolean,
    title?: string,
    content?: Array<string>,
    onSave?: (newArray: Array<string>) => void,
    canAdd?: boolean,
    addPlaceholder?: string,
    canDelete?: boolean
}