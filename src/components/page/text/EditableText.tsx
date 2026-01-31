import React, { useState } from "react";
import { Button, Input, TextArea } from "../../form";
import { EditableTextProps } from "./EditableText.types";
import styles from './EditableText.module.css';

const EditableText : React.FC<EditableTextProps> = ({name, text, editMode, richText, save, saveButtonText}) => {
    const [editModeActive, setEditModeActive] = useState(editMode??false);

    const createMarkup = (input?: string | undefined) => {
        console.log(input)
        return { __html: input??"" };
      }

    const convertToRichtext = (inputText?: string | undefined) : string | undefined => {
        if(!inputText) {
            return inputText;
        }
        var richText: string = inputText;
        richText = richText.replace(/(\n)/g, "<br/>");
        const linkRegex = /((http:\/\/|https:\/\/)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gm;
        richText = richText.replace(linkRegex, "<a href=\"$1\">$1</a>");
        return richText;
    }

    const convertRichtextToInputFieldText = (richtext?: string | undefined) : string | undefined => {
        if(!richtext) {
            return richtext;
        }

        let plainText: string = richtext;
        if (plainText) {
            plainText = plainText.replace(/(<br\/>)/g, "\n");
            plainText = plainText.replace(/<\/?a[^>]*>?/gm, "");
        }
        return plainText;
    }

    const [val, setVal] = useState(richText ? convertRichtextToInputFieldText(text) : text);

    const onClickSave = () => {
        if(save) {
            save(richText ? convertToRichtext(val) : val);
            setEditModeActive(false);
        }
    }

    return <>{editModeActive ?
            <div className={styles.editableTextContainer}>{richText ?
                <TextArea name={name} onChange={(e) => setVal(e?.currentTarget?.value)}>{val}</TextArea>
                : <Input name={name} type="text" value={val} onChange={(e) => setVal(e?.currentTarget?.value)} /> }
                <Button name={`${name}_button`} textAlign="right" onClick={onClickSave}>{saveButtonText}</Button>
            </div>
        : (richText ? <div dangerouslySetInnerHTML={createMarkup(convertToRichtext(val))}></div> : val)}
        </>
}

export default EditableText;