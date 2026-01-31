import * as React from 'react';
import { SectionProps } from "./Section.types";
import styles from './Section.module.scss';

const Section: React.FC<SectionProps> = ({children, maxWidth, textColor, backgroundColor}) => {
    return <div className={`${styles.section} ${textColor} ${backgroundColor} ${maxWidth}`} >{children}</div>;
}

export default Section;