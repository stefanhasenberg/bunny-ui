import * as React from 'react';
import { TextProps } from './Text.types';
import styles from './Text.module.css';

const Text : React.FC<TextProps> = ({type, content, link}) => {
    let text;
    switch(type) {
        case 'h1':
            text = <h1 className={styles.text}>{content}</h1>
            break;
        case 'h2':
            text = <h2 className={styles.text}>{content}</h2>
            break;
        case 'h3':
            text = <h3 className={styles.text}>{content}</h3>
            break;
        case 'h4':
            text = <h4 className={styles.text}>{content}</h4>
            break;
        case 'h5':
            text = <h5 className={styles.text}>{content}</h5>
            break;
        case 'h6':
            text = <h6 className={styles.text}>{content}</h6>
            break;
        case 'p':
            text = <p className={styles.text}>{content}</p>
            break;
        case 'span':
            text = <span className={styles.text}>{content}</span>
            break;
        case 'small':
            text = <p className={`${styles.text} ${styles.small}`}>{content}</p>
            break;
        case 'quote':
            text = <p className={`${styles.text} ${styles.quote}`}>{content}</p>
            break;
        case 'b':
            text = <b className={styles.text}>{content}</b>
            break;
        default:
            text = content;
            break;
    }

    return <>
        {link ? <a className={`${styles.text} ${link?.className??''}`} {...link}>{text}</a> : text}
        </>;
}

export default Text;
