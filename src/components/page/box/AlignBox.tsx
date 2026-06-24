import {AlignBoxProps} from "./AlignBox.types";
import styles from './AlignBox.module.css';

const AlignBox = ({children, margin, align}:AlignBoxProps) : React.JSX.Element => {
    return <div className={`${styles.alignBox} ${align ? styles[align] : ''} ${margin ? styles[`margin-${margin}`] : ''}`}>{children}</div>
}

export default AlignBox;