import * as React from 'react';
import { TextPlacerholderProps } from "./TextPlaceholder.types";
import styles from './TextPlaceholder.module.css';

const TextPlaceholder : React.FC<TextPlacerholderProps> = ({text}) => {
    return <div className={`${styles.placeholderText}`}>{text??'Loem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum pretium dignissim arcu, in bibendum enim. Duis tincidunt molestie risus, at laoreet velit bibendum ut. Mauris est enim, fermentum nec ligula id, suscipit faucibus massa. Maecenas sed purus a ex tempor gravida. Phasellus porta tortor posuere leo faucibus, non malesuada est lacinia.'}</div>;
}

export default TextPlaceholder;