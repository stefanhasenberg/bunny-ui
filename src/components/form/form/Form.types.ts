import { FormEvent } from 'react';

import Button from '../button/Button';
import { DefaultButtonProps } from '../button/Button.types';

export interface FormProps {
    id?: string,
    name: string,
    method?: 'GET' | 'POST',
    action?: string,
    onSubmit?: ((event:FormEvent, fieldValues: Array<FormField> | undefined) => void) | undefined,
    validate?: boolean,
    children?: React.ReactNode,
    submitButtonProps?: DefaultButtonProps,
    cancelButtonProps?: DefaultButtonProps,
    
}

export interface FormField {
    fieldName: string, 
    fieldValue: any,
    valid: boolean,
    
}