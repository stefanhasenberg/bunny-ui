import React, { useContext, useEffect, useState } from 'react';
import { FormContext } from '../form/Form';
import { CheckboxProps } from './Checkbox.types';
import styles from './Checkbox.module.css';
import MarginWrapperDiv from '../wrapper/MarginWrapperDiv';

const Checkbox:React.FC<CheckboxProps> = ({id, checked, onChange, name, disabled, marginBottom, label, checkRequired, requiredMessage, aria}) => {
    const {updateField} = useContext(FormContext);
    const [currentValue, setCurrentValue] = useState(checked);

    const onChangeHandler:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setCurrentValue(event?.currentTarget?.checked);
        onChange && onChange(event);
    }

    useEffect(() => {
        updateField && updateField({
            fieldName: name,
            fieldValue: currentValue,
            valid: currentValue !== undefined && (checkRequired ? currentValue : true)
        });
    }, [currentValue]);

    return <MarginWrapperDiv marginBottom={marginBottom}>
        <label id={`label_${id}`} htmlFor={name} className={styles.checkboxLabel}>
            {label}
            <span className={`${styles.checkboxMark} ${currentValue ? styles.checked : ''}`} />
        </label>
        <input
            className={`${styles.checkboxInput}`}
            type="checkbox"
            id={id}
            name={name}
            checked={currentValue}
            aria-checked={currentValue}
            onChange={onChangeHandler}
            disabled={disabled??false}
            aria-label={aria?.label}
            aria-labelledby={aria?.labelledby??`label_${id}`}
            aria-description={aria?.description}
            aria-describedby={aria?.describedby} />
        {checkRequired && !currentValue && <div className={styles.checkboxError}>{requiredMessage}</div> }
    </MarginWrapperDiv>
};

export default Checkbox;