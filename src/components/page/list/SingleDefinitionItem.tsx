import * as React from 'react'
import DefinitionList from "./DefinitionList";
import { SingleDefinitionItemProps } from "./SingleDefinitionItem.types";

const SingleDefinitionItem : React.FC<SingleDefinitionItemProps> = ({title, content, onSave, editable}) => {
    return <DefinitionList title={title} content={[content??""]} editable={editable} onSave={(newArray: Array<string>) => {
        if(onSave && newArray && newArray.length === 1) {
            onSave(newArray[0])
        }
    }}  />
}

export default SingleDefinitionItem;