import * as React from 'react';
import Text from "../text/Text";
import { ToastNotificationProps } from "./ToastNotification.types";
import styles from './ToastNotification.module.css';
import { getMarginClasses } from '../utils/PageUtils';

const ToastNotification : React.FC<ToastNotificationProps> = ({title, message, type}) => {

    return <div className={`${styles.toast} ${getMarginClasses("small", "small", undefined, undefined)} ${type ? styles[type.toLocaleLowerCase()] : ''}`}>
            <div className={`${styles.toastContent} ${getMarginClasses("medium","medium","medium","medium")}`}>
                {title && <Text type="b" content={title} />}
                {message && <Text type="p" content={message} />}
        </div>
    </div>;
}

export default ToastNotification;