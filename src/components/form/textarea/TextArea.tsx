import React, { useContext, useEffect, useState } from "react";
import { FormContext} from "../form/Form";
import { isValid } from "../validation/Validator";
import { TextAreaProps } from "./TextArea.types";
import styles from './TextArea.module.css';
import MarginWrapperDiv from "../wrapper/MarginWrapperDiv";


const TextArea : React.FC<TextAreaProps> = ({id, name, onChange, onBlur, disabled, borders, placeholder, validationRules, children, marginBottom, aria}) => {
    const {updateField} = useContext(FormContext);
    const [errorMessage, setErrorMessage] = useState(undefined as string | undefined);
    const [val, setVal] = useState(children);

    const triggerUpdateInForm = (currentTarget: (EventTarget & HTMLTextAreaElement) | undefined) => {
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

    return <>
        <MarginWrapperDiv marginBottom={marginBottom} >
            <label className={`${styles.inputTextareaLabel} ${val !== undefined && val.length > 0 ? 'fadeInBottom' : 'fadeOutBottom'}`}>{placeholder}</label>
            <textarea
                className={`${styles.inputTextarea} ${(borders??true) ? styles.borderBottom : '' } ${disabled ? styles.disabled : '' }`}
                id={id}
                name={name}
                onChange={(event : React.ChangeEvent<HTMLTextAreaElement>) => {
                    triggerUpdateInForm(event?.currentTarget);
                    onChange && onChange(event);
                }}
                onBlur={(event: React.FocusEvent<HTMLTextAreaElement>) => {
                    triggerUpdateInForm(event?.currentTarget);
                    onBlur && onBlur(event);
                }}
                disabled={disabled??false}
                placeholder={placeholder}
                aria-labelledby={aria?.labelledby??`label_${id}`}
                aria-label={aria?.label}
                aria-description={aria?.description}
                aria-describedby={aria?.describedby}
                >{val}</textarea>
            <div className={styles.inputTextareaError}>{errorMessage}</div>
        </MarginWrapperDiv>
    </>
};

export default TextArea;