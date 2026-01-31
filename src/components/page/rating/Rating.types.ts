export interface RatingProps {
    name?: string,
    percentage?: number,
    editable?: boolean,
    onDelete?: (name: string) => void
}