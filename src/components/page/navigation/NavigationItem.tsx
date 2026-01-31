import * as React from 'react';
import { NavigationItemProps } from "./NavigationItem.types";
import styles from './NavigationItem.module.scss';

const NavigationItem : React.FC<NavigationItemProps> = ({href, text, active}) => {
    return <>
        <li className={styles.navigationListItem}>
            <a href={href} className={active ? styles.active : ''} >
                <span>
                    {text}
                </span>
            </a>
        </li>
    </>
}

export default NavigationItem;