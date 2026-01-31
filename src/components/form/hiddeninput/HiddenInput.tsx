import React, { useContext, useEffect, useState } from 'react';
import {HiddenInputProps} from "./HiddenInput.types";
import { FormContext } from '../form/Form';
import { isValid } from '../validation/Validator';
import styles from './HiddenInput.module.css';

const HiddenInput:React.FC<HiddenInputProps> = ({value, id, name, validationRules, onChange, onBlur, disabled, aria}) => {
    const {updateField} = useContext(FormContext);
    const [val, setVal] = useState(value);

    const triggerUpdateInForm = (currentTarget: (EventTarget & HTMLInputElement) | undefined) => {
        if(currentTarget) {
            const {value} = currentTarget;
            setVal(value);
        }
    }

    useEffect(() => {
        const validateValue = (value?: string) => {
            if(validationRules) {
                let valid = true;
                validationRules.forEach(rule => {
                    const isRuleValid = isValid(value, rule.ruleName);
                    console.log(rule.ruleName, isRuleValid+"");
                    valid = valid && isRuleValid;
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

    return <input
                type='hidden'
                className={styles.inputHidden}
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
                value={value}
                aria-labelledby={aria?.labelledby}
                aria-label={aria?.label}
                aria-description={aria?.description}
                aria-describedby={aria?.describedby} />;
}


export default HiddenInput;