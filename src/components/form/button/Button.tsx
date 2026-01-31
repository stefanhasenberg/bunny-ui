import * as React from 'react';
import {DefaultButtonProps} from "./Button.types";
import styles from './Button.module.css';


const Button:React.FC<DefaultButtonProps> = ({children, id, name, textAlign, buttonType, onClick, disabled, dedicatedRow, marginBottom, aria}) => {
    const renderDiv = dedicatedRow??true;
    const button = <button
                name={name}
                className={`${styles.button} ${styles[buttonType]}`}
                id={id}
                disabled={disabled??false}
                aria-label={aria?.label}
                aria-labelledby={aria?.labelledby}
                onClick={onClick}  >{children}</button>;

    return renderDiv ? <div className={marginBottom ? `margin-bottom-${marginBottom}` : ''} style={{ textAlign: textAlign??'left' }}>{button}</div> : button;
}


export default Button;