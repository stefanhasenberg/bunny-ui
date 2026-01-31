import React, { useState } from "react";
import Svg from "../../images/svg/Svg";
import { PopupProps } from "./Popup.types";
import styles from './Popup.module.css';

const Popup : React.FC<PopupProps> = ({isOpen, children}) => {
    const [open, setOpen] = useState(isOpen);

    const closeOverlay = () => {
        setOpen(false);
    }

    return <>
        { open && <div className={`${styles.overlay}`} data-testid="popup-container">
            <div className={`${styles.overlayWindow}`}>
                <div className={`${styles.overlayWindowContent}`}>
                    <div className={`${styles.overlayWindowNav}`}>
                        <Svg svgRef="close" colorRef={{default: "primary", hover: "primary-light"}} onClick={closeOverlay} />
                    </div>
                    <div className={`${styles.overlayWindowContentWrapper}`}>
                        {children}
                    </div>
                </div>
            </div>
    </div>}
    </>
};

export default Popup;