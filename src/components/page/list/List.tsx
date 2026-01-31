import * as React from 'react'
import Svg from '../../images/svg/Svg';
import { ListProps } from './List.types';
import styles from './List.module.css';

const List : React.FC<ListProps> = ({items, colorRef, borderColorRef}) => {
    return <ul className={`${styles.list}`}>{items && items.map((item, _index) => <li
            className={`${styles.listItem}`}
            style={item?.border ? {borderBottom: `1px solid ${`color-${(item?.borderColorRef?.default??borderColorRef?.default)??'grey'}`}`} : {}}
            {...item} >
        {item.link ? <a className={`${styles.linkedList} ${`color-${(item?.colorRef?.default??colorRef?.default)??'primary'}`} ${`hover-${(item?.colorRef?.hover??colorRef?.hover)??'primary-light'}`}`} {...item.link}>
            <div className={`${styles.listItemContent} ${`color-${(item?.colorRef?.default??colorRef?.default)??'primary'}`} ${`hover-${(item?.colorRef?.hover??colorRef?.hover)??'primar-light'}`}`}>
                    {item.svg && <span className={`${styles.listItemIcon}`}>
                        <Svg {...item.svg} />
                    </span> }
                    <span className={`${styles.listItemText}`}>
                        {item.text}
                    </span>
            </div>
        </a> : <div className={`${styles.listItemContent}`}>
                {item.svg && <span className={`${styles.listItemIcon}`}>
                  <Svg {...item.svg} />
                </span> }
                <span className={`${styles.listItemText}`}>
                  {item.text}
                </span>
        </div> }
    </li>)}</ul>;
}

export default List;