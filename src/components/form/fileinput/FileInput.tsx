import React, { useContext, useEffect, useState } from 'react';
import {FileInputProps} from "./FileInput.types";
import { FormContext} from '../form/Form';
import styles from './FileInput.module.css';
import MarginWrapperDiv from '../wrapper/MarginWrapperDiv';


const FileInput:React.FC<FileInputProps> = ({id, name, onChange, onBlur, disabled, placeholder, borders, marginBottom, errorMessage, aria}) => {
    const {updateField} = useContext(FormContext);
    const [val, setVal] = useState({} as FileList | null);

    const triggerUpdateInForm = (currentTarget: (EventTarget & HTMLInputElement) | undefined) => {
        if(currentTarget) {
            const {files} = currentTarget;
            setVal(files);
        }
    }

    useEffect(() => {
        updateField && updateField({
            fieldName: name,
            fieldValue: val,
            valid: val !== undefined
        });
    }, [val]);

    return <MarginWrapperDiv marginBottom={marginBottom}>
                <label className={`${styles.inputFileLabel} ${val !== undefined && val.length > 0 ? styles.fadeInBottom : styles.fadeOutBottom}`}>{placeholder}</label>
                <input
                    className={`${styles.inputFile} ${(borders??true) ? styles.borderBottom : '' } ${disabled ? styles.disabled : '' }`}
                    type='file'
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
                    aria-labelledby={aria?.labelledby??`label_${id}`}
                    aria-label={aria?.label}
                    aria-description={aria?.description}
                    aria-describedby={aria?.describedby} />
                    {errorMessage && <div className={styles.inputFileError}>{errorMessage}</div>}
            </MarginWrapperDiv>;
}


export default FileInput;