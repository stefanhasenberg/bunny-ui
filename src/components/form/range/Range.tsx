import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../form/Form';
import { RangeProps } from './Range.types';
import MarginWrapperDiv from '../wrapper/MarginWrapperDiv';
import styles from './Range.module.css';

const Range:React.FC<RangeProps> = ({id, value, min, max, onChange, name, disabled, marginBottom, label, aria}) => {
    const {updateField} = useContext(FormContext);
    const [currentValue, setCurrentValue] = useState(value);

    const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCurrentValue(Number.parseInt(event?.currentTarget?.value));
        onChange && onChange(event);
    }

    useEffect(() => {
        updateField && updateField({
            fieldName: name,
            fieldValue: currentValue,
            valid: true
        });
    }, [currentValue]);

    return <>
        <MarginWrapperDiv marginBottom={marginBottom}>
            <label id={`label_${id}`} className={styles.inputRangeLabel} htmlFor={name}>{label}</label>
            <input
                className={styles.inputRange}
                id={id}
                type='range'
                name={name}
                defaultValue={value??min??0}
                min={min??0}
                max={max??100}
                onChange={onChangeHandler}
                disabled={disabled??false}
                aria-labelledby={aria?.labelledby??`label_${id}`}
                aria-label={aria?.label}
                aria-description={aria?.description}
                aria-describedby={aria?.describedby}
            />
            <div className={styles.inputRangeIndicator}>{currentValue??0}</div>
        </MarginWrapperDiv>
    </>
};

export default Range;
