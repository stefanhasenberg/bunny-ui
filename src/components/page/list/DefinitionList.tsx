import React, { useState } from "react";
import Addable from "../../form/addable/Addable";
import Deletable from "../../form/deletable/Deletable";
import Input from "../../form/input/Input";
import Svg from "../../images/svg/Svg";
import { DefinitionListProps } from "./DefinitionList.types";
import styles from './DefinitionList.module.css';

const DefinitionList : React.FC<DefinitionListProps> = ({editable, title, content, onSave, canAdd, canDelete, addPlaceholder}) => {
    const [editMode, setEditMode] = useState(false);
    const [ddItems, setDDItems] = useState(content);
    const [newItem, setNewItem] = useState("");

    const onChange = (value:string | undefined, index:number) => {
        setDDItems(ddItems?.map((ddItem, i) => index === i ? value??"" : ddItem));
    }

    const onAdd = () => {
        if(newItem) {
            if(ddItems) {
                setDDItems([
                    ...ddItems,
                    newItem
                ]);
            }
            else {
                setDDItems([newItem]);
            }
            setNewItem("");
        }
    }

    const onCancel = () => {
        setDDItems(content);
    }

    const onDelete = (index:number) => {
        setDDItems(ddItems?.filter((val, i) => i !== index));
    }

    return <dl className={styles.definitionList}>
        <dt className={styles.definitionListTitle}><div>{title}</div> 
            {editable && <div className={styles.definitionListTitleIcon}>
                <Svg 
                svgRef={editMode ? "close" : "edit"}
                colorRef={{default: "grey", hover: "primary"}}
                onClick={() => {
                    if(editMode) {
                        onCancel();
                    }
                    setEditMode(!editMode);
                }} /></div>} 
            {editMode && <div className={styles.definitionListTitleIcon}><Svg svgRef={"check"}
                colorRef={{default: "grey", hover: "primary"}}
                onClick={() => {
                    if(editMode && onSave && ddItems) {
                        onSave(ddItems);
                    }
                    setEditMode(!editMode);
                }}/></div>}</dt>
        <dd className={styles.definitionListContent}>{
            ddItems?.map((ddItem, i) => editMode ? (canDelete ? <Deletable onClick={(e) => onDelete(i)} >
                <Input name={`dd_edit_${ddItem}`} value={ddItem} onChange={(e) => {
                    onChange(e?.currentTarget?.value, i);
                }}/>
            </Deletable> : <Input name={`dd_edit_${ddItem}`} value={ddItem} onChange={(e) => {
                    onChange(e?.currentTarget?.value, i);
                }}/>)
                : <div>{ddItem}</div>)}
                {editMode && canAdd && <Addable onClick={() => onAdd()}><Input name={`dd_edit_${ddItems?.length}`} placeholder={addPlaceholder} value={newItem} onChange={(e) => {
                    setNewItem(e?.currentTarget?.value);
                }}/>
                </Addable>}
                </dd>
        </dl>;
}

export default DefinitionList;