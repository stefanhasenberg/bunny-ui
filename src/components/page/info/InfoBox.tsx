import * as React from 'react';
import Svg from "../../images/svg/Svg";
import { InfoBoxProps } from "./InfoBox.types";
import styles from './InfoBox.module.css';
import { getPaddingClasses } from '../utils/PageUtils';

const InfoBox : React.FC<InfoBoxProps> = ({text}) => {
    return <div className={styles.infoBox}>
            <div className={`${styles.infoBoxIcon} color-secondary hover-secondary ${getPaddingClasses("small","small","small","small")}`}>
                <Svg svgRef="info" />
            </div>
            <div className={`${styles.infoBoxText} ${getPaddingClasses(undefined,undefined,"small","small")}`}>
                {text}
            </div>
        </div>;
}

export default InfoBox;