import React, { useContext, useEffect, useState } from 'react';
import {DatePickerProps} from "./DatePicket.types";
import { FormContext } from '../form/Form';
import { isValid } from '../validation/Validator';
import styles from './DatePicker.module.css';
import MarginWrapperDiv from '../wrapper/MarginWrapperDiv';



const DatePicker:React.FC<DatePickerProps> = ({value, id, name, validationRules, onChange, onBlur, disabled, placeholder, borders, marginBottom, aria}) => {
    const {updateField} = useContext(FormContext);
    const [errorMessage, setErrorMessage] = useState(undefined as string | undefined);
    const [val, setVal] = useState(value);

    const triggerUpdateInForm = (currentTarget: (EventTarget & HTMLInputElement) | undefined) => {
        if(currentTarget) {
            const {value} = currentTarget;
            setVal(value);
        }
    }

    useEffect(() => {
        const validateValue = (value?: string) => {
            setErrorMessage(undefined);
            if(validationRules) {
                let valid = true;
                validationRules.forEach(rule => {
                    const isRuleValid = isValid(value, rule.ruleName, rule.refValue);
                    console.log(rule.ruleName, isRuleValid+"");
                    valid = valid && isRuleValid;
                    if(!isRuleValid) {
                        setErrorMessage(rule.errorMessage);
                    }
                });
                return valid;
            }

            return true;
        }

        updateField && updateField({
            fieldName: name,
            fieldValue: val,
            valid: validateValue(val)
        });
    }, [val]);

    return <MarginWrapperDiv marginBottom={marginBottom}>
                {placeholder && <label id={`label_${id}`} htmlFor={name} className={`${styles.inputLabel} ${val !== undefined && val.length > 0 ? styles.fadeInBottom : styles.fadeOutBottom}`}>{placeholder}</label> }
                <input
                    className={`${styles.input} ${(borders??true) ? styles.borderBottom : '' } ${disabled ? styles.disabled : '' } c-input--default`}
                    type={'date'}
                    id={id}
                    name={name}
                    onChange={(event : React.ChangeEvent<HTMLInputElement>) => {
                        triggerUpdateInForm(event?.currentTarget);
                        onChange && onChange(event);
                    }}
                    onBlur={(event: React.FocusEvent<HTMLInputElement>) => {
                        triggerUpdateInForm(event?.currentTarget);
                        onBlur && onBlur(event);
                    }}
                    disabled={disabled??false}
                    placeholder={placeholder}
                    aria-label={aria?.label}
                    aria-labelledby={aria?.labelledby??`label_${id}`}
                    aria-description={aria?.description}
                    aria-describedby={aria?.describedby}
                    value={value} />
                    <div className={styles.inputError}>{errorMessage}</div>
            </MarginWrapperDiv>;
}


export default DatePicker;