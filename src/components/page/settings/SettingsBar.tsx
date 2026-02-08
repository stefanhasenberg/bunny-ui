import React, { useState } from 'react';
import Svg from '../../images/svg/Svg';
import {SettingsBarProps} from './SettingsBar.types';
import styles from './SettingsBar.module.scss';

const SettingsBar : React.FC<SettingsBarProps> = ({settings, toggleMenu, items, children}) => {
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [settingsOpenFirstTime, setSettingsOpenFirstTime] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const onClickSettings : React.MouseEventHandler<HTMLLIElement> | undefined = () => {
        setSettingsOpen(!settingsOpen);
        setSettingsOpenFirstTime(true);
    };

    const onClickMenu : React.MouseEventHandler<HTMLLIElement> | undefined = () => {
        toggleMenu && toggleMenu(!menuOpen);
        setMenuOpen(!menuOpen);
    };

    return <>
        <ul className={styles.settingsBar} data-testid="settings-bar-container">
            {children}
            {items && items.map(item => <li {...item} className={`${styles.settingsBarItem} color-header hover-header ${item.hideOnMobile ? 'hide-on-mobile' : ''}`}>{item.svg && <Svg {...{
                ...item.svg
            }} />} {item.children}</li>) }
            {settings && <li className={`${styles.settingsBarItem} color-header hover-header`} onClick={onClickSettings}>{<Svg {...{svgRef: 'settings'}} />}</li>}
            <li className={`${styles.settingsBarItem} color-header hover-header hide-on-mobile`} onClick={onClickMenu}>{ <Svg {...{svgRef: 'menu'}} />}</li>
        </ul>
        {<div className={`${styles.settings} ${(!settingsOpen ? styles.aHideSettings : '')} ${(!settingsOpenFirstTime ? styles.aSettingsHidden : '')}`}>{settings}</div>}
    </>
}

export default SettingsBar;