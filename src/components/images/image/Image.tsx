import * as React from 'react';
import { ImageProps } from "./Image.types";
import styles from './Image.module.css';

const Image : React.FC<ImageProps> = ({src, srcSet, alt, title, ratio}) => {
    return <div className={styles.imageContainer} >
        <div className={`${styles.image} ${ratio}`} >
            {src && <picture className={styles.imagePicture}>
                <img className={styles.imageImg} src={src} srcSet={srcSet} alt={alt} title={title} loading='lazy'  />
            </picture>}
        </div>
    </div>
}

export default Image;