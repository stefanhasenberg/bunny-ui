import * as React from 'react';
import {FooterProps} from "./Footer.types";
import styles from './Footer.module.css';

const Footer = ({children}:FooterProps): React.JSX.Element => {
    return <footer className={`${styles.footer}`}>{children}</footer>;
}

export default Footer;