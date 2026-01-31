import * as React from 'react';
import { ToastNotificationWrapperProps } from "./ToastNotificationWrapper.types";
import styles from './ToastNotificationWrapper.module.css';

const ToastNotificationWrapper : React.FC<ToastNotificationWrapperProps> = ({children}) => {
    return <>
        <div className={`${styles.toastNotificationWrapper}`}>
        {children}
    </div>
    </>
}

export default ToastNotificationWrapper;