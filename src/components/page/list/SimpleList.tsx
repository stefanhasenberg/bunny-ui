import * as React from 'react';
import { SimpleListProps } from "./SimpleList.types";
import styles from './SimpleList.module.css';
import { getMarginClasses } from '../utils/PageUtils';

const SimpleList : React.FC<SimpleListProps> = ({items, inline}) => {
    return <ul className={`${styles.listSimple}`}>
        {items && items.map(item => <li className={`${styles.listSimpleItem} ${inline ? styles.inline : ''} ${getMarginClasses(item?.margin??'small', item?.margin??'small', item?.margin??'small', item?.margin??'small')}`}>{item.children}</li>)}
    </ul>;
}

export default SimpleList;