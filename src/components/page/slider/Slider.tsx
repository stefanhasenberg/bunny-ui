import {SliderProps} from "./Slider.types";
import {Svg} from "../../images";
import styles from './Slider.module.css';
import {useLayoutEffect, useRef, useState} from "react";

const Slider = ({children}:SliderProps) : React.JSX.Element => {
    const [positionX, setPositionX] = useState(0);
    const sliderItemsRef = useRef(undefined as HTMLDivElement | undefined);
    const sliderBackRef = useRef(undefined as HTMLDivElement | undefined);
    const sliderNextRef = useRef(undefined as HTMLDivElement | undefined);

    useLayoutEffect(() => {
        const updateSliderButtons = () => {
            const slider = sliderItemsRef.current;
            let isOverflowing = slider.clientWidth < slider.scrollWidth;
            if(!isOverflowing) {
                sliderBackRef.current.className = `${styles.disabled}`;
                sliderNextRef.current.className = `${styles.disabled}`;
            }
            else {
                sliderBackRef.current.className = `${styles.sliderButton} color-primary hover-primary`;
                sliderNextRef.current.className = `${styles.sliderButton} color-primary hover-primary`;
            }
        }
        window.addEventListener('resize', updateSliderButtons);
        updateSliderButtons();
    }, []);

    const moveSlider = (direction: ("forward" | "back")) => {
        const slider = sliderItemsRef.current;
        if(direction === "forward") {
            let newPosX = positionX + slider.clientWidth;
            if(newPosX > slider.scrollWidth) {
                newPosX = positionX;
            }

            slider.scrollTo({left: newPosX, top: 0, behavior: 'smooth'});
            setPositionX(newPosX);
        }
        else if(direction === "back") {
            let newPosX = positionX - slider.clientWidth;
            if(newPosX < 0) {
                newPosX = 0;
            }
            slider.scrollTo({left: newPosX, top: 0, behavior: 'smooth'});
            setPositionX(newPosX);
        }
    }

    return <div className={styles.slider}>
        <div ref={sliderBackRef} className={`${styles.sliderButton} color-primary hover-primary`}>
            <Svg svgRef={"arrowLeft"} onClick={() => moveSlider("back")} />
        </div>
        <div ref={sliderItemsRef} className={styles.sliderItems}>
            <div></div>
            {children?.map(child => <div>{child}</div>)}
            <div></div>
        </div>
        <div ref={sliderNextRef} className={`${styles.sliderButton} color-primary hover-primary`}>
            <Svg svgRef={"arrowRight"} onClick={() => moveSlider("forward")} />
        </div>
    </div>
}

export default Slider;