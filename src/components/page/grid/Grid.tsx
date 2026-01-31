import * as React from 'react';
import { GridProps } from "./Grid.types";
import styles from './Grid.module.css';

const Grid : React.FC<GridProps> = ({gridGap, gridType, children}) => {
    return <div className={`${gridType ? styles[`grid-${gridType}`] : `${styles.grid}`} ${gridGap ? styles[`grid-gap-${gridGap}`] : ''}`}>{children}</div>
}

export default Grid;