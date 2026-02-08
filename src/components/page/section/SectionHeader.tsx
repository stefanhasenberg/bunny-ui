import {SectionHeaderProps} from "./SectionHeader.types";
import styles from './SectionHeader.module.css';

const SectionHeader = ({children}:SectionHeaderProps) : React.JSX.Element => {
    return <div className={styles.sectionHeader}>
        <div className={styles.sectionHeaderContent}>{children}</div>
        <div className={styles.sectionHeaderLine}>
        </div>
    </div>
}

export default SectionHeader;