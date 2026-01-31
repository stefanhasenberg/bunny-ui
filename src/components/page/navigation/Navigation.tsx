import * as React from 'react';
import { NavigationProps } from "./Navigation.types";
import NavigationItem from "./NavigationItem";
import styles from './Navigation.module.scss';

const Navigation : React.FC<NavigationProps> = ({show, items}) => {
    return <nav className={`${styles.navigation} ${!show ? styles.hide : ''}`} >
            <ul className={styles.navigationList}>
                {items && items.map(item => <NavigationItem {...item} />)}
            </ul>
        </nav>;
}

export default Navigation;