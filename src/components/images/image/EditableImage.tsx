import * as React from 'react';
import { FileInput } from "../../form";
import { EditableImageProps } from "./EditableImage.types";
import Image from "./Image";


const EditableImage : React.FC<EditableImageProps> = ({name, title, alt, editable, ratio, save, src, srcSet}) => {
    const onSave = (newValue?: FileList | null) : void => {
        if(newValue && newValue.length > 0 && save) {
            save(newValue[0]);
        }
    }

    return <>
                <Image alt={alt} title={title} ratio={ratio} src={src} srcSet={srcSet}  />
                {editable && <FileInput name={name} onChange={(e) => onSave(e?.currentTarget?.files)}  /> }
            </>
}

export default EditableImage;