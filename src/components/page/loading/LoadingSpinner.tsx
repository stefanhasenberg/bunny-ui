import * as React from 'react';
import Svg from "../../images/svg/Svg";
import Text from "../text/Text";
import { LoadingSpinnerProps } from "./LoadingSpinner.types";
import styles from './LoadingSpinner.module.css';

const LoadingSpinner : React.FC<LoadingSpinnerProps> = ({progress, text}) => {
    return <div className={styles.loadingSpinnerWrapper}>
            <div className={styles.loadingSpinner}>
                <Svg svgRef="bunnyUiLogo" colorRef={{default: 'primary', hover: 'primary'}} />
            </div>
            {progress && <div className={styles.progressBar}>
                <div className={styles.progressBarProgress} style={{width: `${progress??0}%`}} />
            </div>}
            {text && <div className={styles.loadingSpinnerText}>
                    <Text type="p" content={text} />
                </div>}
        </div>;
}

export default LoadingSpinner;