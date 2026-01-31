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
            {items && items.map(item => <li {...item} className={`${styles.settingsBarItem} ${item.hideOnMobile ? 'hide-on-mobile' : ''}`}>{item.svg && <Svg {...item.svg} />} {item.children}</li>) }
            {settings && <li className={styles.settingsBarItem} onClick={onClickSettings}>{<Svg {...{svgRef: 'settings', colorRef: { default: 'grey-light', hover: 'primary-light' }}} />}</li>}
            <li className={`${styles.settingsBarItem} hide-on-mobile`} onClick={onClickMenu}>{ <Svg {...{svgRef: 'menu', colorRef: { default: 'primary', hover: 'primary-light' }}} />}</li>
        </ul>
        {<div className={`${styles.settings} ${(!settingsOpen ? styles.aHideSettings : '')} ${(!settingsOpenFirstTime ? styles.aSettingsHidden : '')}`}>{settings}</div>}
    </>
}

export default SettingsBar;