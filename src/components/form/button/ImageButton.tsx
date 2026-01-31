import * as React from 'react';
import { ImageButtonProps } from './ImageButton.types';
import Svg from '../../images/svg/Svg';
import styles from './ImageButton.module.css';

const ImageButton:React.FC<ImageButtonProps> = ({id, name, label, textAlign, svg, onClick, disabled, dedicatedRow, marginBottom, aria}) => {
    const renderDiv = dedicatedRow??true;

    return <>
            {renderDiv ? <div className={marginBottom ? `margin-bottom-${marginBottom}` : ''} style={{ textAlign: textAlign??'left' }}>
            {<button
                            name={name}
                            id={id}
                            disabled={disabled??false}
                            className={styles.buttonImage}
                            aria-label={aria?.label}
                            aria-labelledby={aria?.labelledby}
                            onClick={onClick}  >{<Svg {...svg} />} {label}</button>}
        </div> : <button
                            name={name}
                            id={id}
                            disabled={disabled??false}
                            className={styles.buttonImage}
                            aria-label={aria?.label}
                            aria-labelledby={aria?.labelledby}
                            onClick={onClick}  >{<Svg {...svg} />} {label}</button>}</>;
}


export default ImageButton;
