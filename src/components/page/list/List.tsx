import * as React from 'react'
import Svg from '../../images/svg/Svg';
import { ListProps } from './List.types';
import styles from './List.module.css';

const List : React.FC<ListProps> = ({items}) => {
    return <ul className={`${styles.list}`}>{items && items.map((item, _index) => <li
            {...item}
            className={`${styles.listItem} ${item?.border ? styles.listBorder : ''}`}
        >
        {item.link ? <a className={`${styles.linkedList} ${item?.className??''}`} {...item.link}>
            <div className={`${styles.listItemContent} ${item?.className??''}`}>
                    {item.svg && <span className={`${styles.listItemIcon}`}>
                        <Svg {...item.svg} />
                    </span> }
                    <span className={`${styles.listItemText}`}>
                        {item.text}
                    </span>
            </div>
        </a> : <div className={`${styles.listItemContent} ${item?.className??''}`}>
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