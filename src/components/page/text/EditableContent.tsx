import React, { useState } from "react";
import Svg from "../../images/svg/Svg";
import { EditableContentProps } from "./EditableContent.types";
import EditableText from "./EditableText";
import styles from './EditableContent.module.css';

const EditableContent : React.FC<EditableContentProps> = ({name, title, text, editable, richText, save, saveButtonText}) => {
    const [editMode, setEditMode] = useState(false);
    const [val, setVal] = useState(text);

    const onSave = (newValue?: string | undefined) : void => {
        setVal(newValue);
        if(save) {
            save(newValue);
        }

        setEditMode(false);
    }

    return <>
        <dl className={styles.editable} >
                    <dt className={styles.editableTitle}>
                        <div>{title}</div> <div className={styles.editableTitleIcon}>{editable
                            && <Svg
                                svgRef={editMode ? "close" : "edit"}
                                colorRef={{default: "grey", hover: "primary"}}
                                onClick={() => setEditMode(!editMode)} />} </div>
                    </dt>
                    <dd className={styles.editableContent}>
                        <EditableText
                            key={`${name}_${editMode}`}
                            name={name}
                            text={val}
                            editMode={editMode}
                            richText={richText}
                            save={onSave}
                            saveButtonText={saveButtonText} />
                    </dd>

            </dl>
            </>
}

export default EditableContent;