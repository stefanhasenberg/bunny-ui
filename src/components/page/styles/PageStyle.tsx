import { PageStyleProps } from "./PageStyle.types";
import styles from './PageStyle.module.scss';

const PageStyle : React.FC<PageStyleProps> = ({ children, theme }) => {
    return <div className={`${styles.pageStyle}`} data-theme={theme??"nature"}>
        {children}
    </div>
}

export default PageStyle;