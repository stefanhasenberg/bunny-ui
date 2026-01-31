import * as React from 'react';
import Image from "../../images/image/Image";
import Collection from "../collection/Collection";
import Text from "../text/Text";
import TeaserBlogProps from "./TeaserBlog.types";
import styles from './TeaserBlog.module.css';

const TeaserBlog:React.FC<TeaserBlogProps> = ({image, headline, text, href}) => {
    return <>
        <a className={styles.teaserLinkBlog} href={href}>
            <div className={styles.teaserBlogImage}>
                {image ? <Image {...image} /> : <Image ratio="widescreen" /> }
            </div>
            <div>
                <Collection paddingTop="medium" paddingBottom="medium" paddingLeft="medium" paddingRight="medium">
                    {headline && <Text {...headline} /> }
                    {text && <Text {...text} /> }
                </Collection>
            </div>
        </a>
    </>
}

export default TeaserBlog;