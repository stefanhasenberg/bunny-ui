import React, { createContext, FormEvent, useEffect, useState } from "react";
import { DefaultButtonProps } from "../button/Button.types";
import ButtonRow from "../button/ButtonRow";
import {FormField, FormProps} from './Form.types';

export const FormContext = createContext({
    valid: false,
    updateField: (fieldValue: FormField) => {},
    fieldValues: [] as Array<FormField>
});

const Form: React.FC<FormProps> = ({children, submitButtonProps, cancelButtonProps, id, name, method, action, onSubmit}) => {
    const [valid, setValid] = useState(false);
    const [fieldValues, setFieldValues] = useState([] as Array<FormField>);
    const [submitButton, setSubmitButton] = useState(submitButtonProps);

    const checkIfValid = (fieldValues: Array<FormField>) => {
        let newValidValue = true;
        fieldValues.forEach(f => {
            if(f.fieldName) {
                newValidValue = !!(newValidValue && !!f.valid);
            }
        });
        setValid(newValidValue);
    }

    const updateField = (formField: FormField) => {
        const {fieldName} = formField;
        const index = fieldValues.findIndex(f => f.fieldName === fieldName);
        if(index >= 0) {
            fieldValues[index] = formField;
        } else {
            fieldValues.push(formField);
        }
        setFieldValues(fieldValues);
        checkIfValid(fieldValues);
    }

    const onSubmitForm: (React.FormEventHandler<HTMLFormElement> & ((event:FormEvent) => void)) = (event:FormEvent) => {
        event.preventDefault();
        onSubmit && onSubmit(event, fieldValues);
    }

    useEffect(() => {
        setSubmitButton({
            ...submitButton,
            disabled: valid === false
        } as DefaultButtonProps)
    }, [valid])

    const buttons = [] as Array<DefaultButtonProps>;
    cancelButtonProps && buttons.push(cancelButtonProps);
    submitButton && buttons.push(submitButton);

    return <FormContext.Provider value={{
        valid,
        updateField,
        fieldValues
    }}>
        <>
            <form id={id} name={name} method={method} action={action} onSubmit={onSubmitForm}>
                    {children}
                    <ButtonRow buttons={buttons} textAlign="right"></ButtonRow>
            </form>
        </>
    </FormContext.Provider>
};

export default Form;