import React, { useContext, useEffect, useState } from 'react';
import {TextInputProps} from "./Input.types";
import { FormContext } from '../form/Form';
import { isValid } from '../validation/Validator';
import MarginWrapperDiv from '../wrapper/MarginWrapperDiv';
import styles from './Input.module.css';



const Input:React.FC<TextInputProps> = ({value, id, name, validationRules, onChange, onBlur, disabled, placeholder, borders, type, marginBottom, aria}) => {
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
                    const isRuleValid = isValid(value, rule.ruleName);
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
                {placeholder && <label id={`label_${id}`} className={`${styles.inputDefaultLabel} ${val !== undefined && val.length > 0 ? styles.fadeInBottom : styles.fadeOutBottom}`}>{placeholder}</label> }
                <input
                    className={`${styles.inputDefault} ${(borders??true) ? styles.borderBottom : '' } ${disabled ? styles.disabled : '' }`}
                    type={type??'text'}
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
                    value={value}
                    aria-labelledby={aria?.labelledby??`label_${id}`}
                    aria-label={aria?.label}
                    aria-description={aria?.description}
                    aria-describedby={aria?.describedby} />
                    <div className={styles.inputDefaultError}>{errorMessage}</div>
            </MarginWrapperDiv>;
}


export default Input;