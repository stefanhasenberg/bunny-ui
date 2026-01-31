import * as React from 'react'
import Svg from "../../images/svg/Svg";
import { AddableProps } from "./Addable.types";
import styles from './Addable.module.css';

const Addable : React.FC<AddableProps> = ({children, onClick}) => {
    return <>
        <div className={styles.addable}>
        <div className={styles.addableContent}>{children}</div>
        <div className={styles.addableAction}>
            <Svg svgRef="add" colorRef={{default: "grey", hover: "grey-light"}} onClick={onClick} />
        </div>
    </div></>
}

export default Addable;