import * as React from 'react'
import Button from "./Button";
import { ButtonRowProps } from "./Button.types";
import styles from './ButtonRow.module.css';

const ButtonRow:React.FC<ButtonRowProps> = ({buttons, textAlign, marginBottom}) => {
    return <div 
                className={`${styles.buttonRow} ${marginBottom ? `margin-top-bottom-${marginBottom}` : ''} ${styles[`justfiy-${textAlign??'left'}`]}`}>
                {buttons.map(button => <Button {...button} dedicatedRow={false}/>)}
            </div>;
}


export default ButtonRow;