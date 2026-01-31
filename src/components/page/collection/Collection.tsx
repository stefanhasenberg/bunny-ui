import * as React from 'react'
import { CollectionProps } from "./Collection.types";
import styles from './Collection.module.css';
import { getMarginClasses, getPaddingClasses } from '../utils/PageUtils';

const Collection : React.FC<CollectionProps> = ({marginTop, marginBottom, marginLeft, marginRight, paddingTop, paddingBottom, paddingLeft, paddingRight, wrapper, timeline, children}) => {
    const isFragment = React.isValidElement(children) && children.type === React.Fragment;
    const actualChildren = isFragment ? (children as React.ReactElement<any>).props.children : children;
    const isArray = Array.isArray(actualChildren);
    const childArray = isArray ? actualChildren as Array<React.ReactNode> : [actualChildren];
    const innerDivs = childArray?.map((child) => <div 
        className={`${timeline ? styles.collectionTimeline : ''} ${getMarginClasses(marginTop, marginBottom, marginLeft, marginRight)} ${getPaddingClasses(paddingTop, paddingBottom, paddingLeft, paddingRight)}`}>
            {child}
    </div>);

    return <>
        {wrapper ? innerDivs.map((innerDiv) => <div className={`${styles.collectionWrapper} ${wrapper?.roundedBorder ? styles.borderRadius : ''}`}>
            {innerDiv}
        </div>) : innerDivs}
        </>;
}

export default Collection;