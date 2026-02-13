import { PageStyleProps } from "./PageStyle.types";
import styles from './PageStyle.module.scss';
import {useEffect} from "react";

const PageStyle : React.FC<PageStyleProps> = ({ children, theme }) => {
    useEffect(() => {
        document.body.setAttribute("data-theme", theme??'nature');
    }, [theme]);

    return <div className={`${styles.pageStyle}`} data-theme={theme??"nature"}>
        {children}
    </div>
}

export default PageStyle;