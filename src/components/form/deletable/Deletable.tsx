import * as React from 'react';
import Svg from "../../images/svg/Svg";
import { DeletableProps } from "./Deletable.types";
import styles from './Deletable.module.css';

const Deletable : React.FC<DeletableProps> = ({children, onClick}) => {
    return <div className={styles.deletable}>
            <div className={styles.deletableContent}>{children}</div>
            <div className={styles.deletableAction}>
                <Svg svgRef="close" colorRef={{default: "grey", hover: "grey-light"}} onClick={onClick} />
            </div>
        </div>;
}

export default Deletable;