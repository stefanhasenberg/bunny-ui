import * as React from 'react';
import Svg from "../../images/svg/Svg";
import Text from "../text/Text";
import { RatingProps } from "./Rating.types";
import styles from './Rating.module.css';

const Rating : React.FC<RatingProps> = ({name, percentage, editable, onDelete}) => {
    return <div className={styles.rating} data-testid="rating-container">
        <div className={styles.ratingHeadContainer}>
            {name && <Text type="span" content={name} /> }
            {editable && <div className={styles.ratingEdit}><Svg svgRef="delete" onClick={() => name && onDelete && onDelete(name)} /></div>}
        </div>
        {percentage && <div className={styles.ratingPercentageWrapper}>
                <div className={styles.ratingPercentageWrapperPercentage} style={{width: `${percentage??0}%;`}} />
            </div>}
    </div>;
}

export default Rating;