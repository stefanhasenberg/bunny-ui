import React, { useContext, useEffect, useState } from 'react';
import { FormContext} from '../form/Form';
import { isValid } from '../validation/Validator';
import { SelectProps } from './Select.types';
import MarginWrapperDiv from '../wrapper/MarginWrapperDiv';
import styles from './Select.module.css';

const Select:React.FC<SelectProps> = ({id, name, options, defaultUnselected, onSelect, disabled, value, validationRules, marginBottom, aria}) => {
    const {updateField} = useContext(FormContext);
    const [errorMessage, setErrorMessage] = useState(undefined as string | undefined);
    const [val, setVal] = useState(value);

    const onSelectHandler : React.ReactEventHandler<HTMLSelectElement> = (event) => {
        triggerUpdateInForm(event?.currentTarget);
        onSelect && onSelect(event);
    }

    const triggerUpdateInForm = (currentTarget: (EventTarget & HTMLSelectElement) | undefined) => {
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
            <label className={`${styles.inputSelectLabel} ${val !== undefined && val.length > 0 ? styles.fadeInBottom : styles.fadeOutBottom}`}>{defaultUnselected}</label>
            <select
                className={`${styles.inputSelect} ${styles.borderBottom} ${disabled ? styles.disabled : '' }`}
                id={id}
                name={name}
                onChange={onSelectHandler}
                value={val}
                disabled={disabled??false}
                aria-labelledby={aria?.labelledby??`label_${id}`}
                aria-label={aria?.label}
                aria-description={aria?.description}
                aria-describedby={aria?.describedby}
                >
                {defaultUnselected && <option value={""}>{defaultUnselected}</option>}
                {options && options.map(option => <option key={`${option.name}_${name}`} value={option.value} aria-selected={option.value === val} disabled={option.disabled??false}>{option.label??option.name}</option>)}
            </select>
            <div className={styles.inputSelectError}>{errorMessage}</div>
        </MarginWrapperDiv>;
};

export default Select;