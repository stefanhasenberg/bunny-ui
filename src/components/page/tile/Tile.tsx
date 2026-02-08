import React, { useState } from "react";
import Svg from "../../images/svg/Svg";
import { TileProps } from "./Tile.types";
import styles from './Tile.module.scss';

const Tile : React.FC<TileProps> = ({info, head, editable, content, padding, marginBottom, onEdit}) => {
    const [contentOpen, setContentOpen] = useState(false);
    const [editMode, setEditMode] = useState(false);

    return <>
        <div className={`${styles.tile} margin-bottom-${marginBottom??'none'}`}>
        <div className={`${styles.tileHead} ${info && !editable? styles.tileHeadInfo : ''} ${editable && !info ? styles.tileHeadEditable : ''} ${info && editable ? styles.tileHeadInfoEditable : ''} ${contentOpen ? styles.headOpen : ''}`}>
            {info && <div className={`${styles.tileHeadInfo} padding-top-${padding??'none'} padding-bottom-${padding??'none'} padding-left-${padding??'none'} padding-right-${padding??'none'}`}>{info}</div> }
            <div className={`${styles.tileHeadMain} padding-top-${padding??'none'} padding-bottom-${padding??'none'} padding-left-${padding??'none'} padding-right-${padding??'none'}`}>{head}</div>
            {editable && <div className={`${styles.tileHeadToolbox} color-grey hover-grey-dark padding-top-${padding??'none'} padding-bottom-${padding??'none'} padding-left-${padding??'none'} padding-right-${padding??'none'}`}>
                <Svg svgRef={editMode ? "close" : "edit"}
                    onClick={() => {
                    onEdit && onEdit(!editMode);
                    setEditMode(!editMode);
                }
                } />
                {editMode && <Svg svgRef="check"
                    onClick={() => {
                    onEdit && onEdit(!editMode, true);
                    setEditMode(!editMode);
                }
                } />}
                </div>}
        </div>
        <div className={`${styles.tileContent} ${contentOpen ? styles.contentOpen : ''} padding-top-${padding??'none'} padding-bottom-${padding??'none'} padding-left-${padding??'none'} padding-right-${padding??'none'}`}>
            {contentOpen && <div className={styles.tileContentInner}>{content}</div>}
            {content && <div className={`${styles.tileContentToggle} color-secondary hover-secondary`}
                onClick={() => setContentOpen(!contentOpen)}>
                    <Svg svgRef={contentOpen ? "arrowUp" : "arrowDown"} />
                </div>
            }
        </div>
    </div>
    </>
}

export default Tile;