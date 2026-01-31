import React, { useEffect, useState, useRef } from 'react';
import {PlaceholderProps} from './Placeholder.types';
import styles from './Placeholder.module.css';

const Placeholder: React.FC<PlaceholderProps> = ({ratio, roundedBorder, children}) => {
    const imageRatios = {
        "widescreen": 42.85,
        "square": 100
    };

    const currentRatio = ratio ? imageRatios[ratio] : imageRatios.widescreen;

    const [height, setHeight] = useState(`${currentRatio}vw`);

    const containerRef = useRef(null as null | HTMLDivElement);

    const applyHeight = () => {
        containerRef
            && containerRef.current
            && setHeight(`${Math.round(containerRef.current.clientWidth / 100 * currentRatio)}px`);
    };

    useEffect(() => {
        applyHeight();

        window.addEventListener('resize', applyHeight);
    });

    return <div className={`${styles.placeholder} ${roundedBorder ? styles.roundedBorder : ''} ${!children ? styles.empty : ''}`}
                ref={containerRef}
                style={{ height: height }} data-testid={`placeholder-${ratio}`}>{children}</div>;
};

export default Placeholder;