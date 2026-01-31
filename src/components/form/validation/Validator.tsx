
const EXPRESSIONS = {
    eMail: new RegExp( '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'),
    phone: new RegExp(''),
    password: new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,50}$'), // Minimum eight and maximum 50 characters, at least one uppercase letter, one lowercase letter, one number and one special character
    numeric: new RegExp('^(0|[1-9][0-9]*)$'),
    alphanumeric: new RegExp('^[a-zA-Z0-9öüßÄÖÜ]*$'),
    alphabetic: new RegExp('^[a-zA-ZäöüßÄÖÜ]+$')
}

export const isValid = (value:string | undefined, expression: ("required" | "larger" | "smaller" | "phone" | "eMail" | "password" | "numeric" | "alphanumeric" | "alphabetic"), refValue: (string | undefined) = undefined, refType: ('string' | 'date' | 'int') = 'string') : boolean => {
    if(expression === "required") {
        return !!(value && value.length > 0);
    }
    else if(expression === "larger") {
        if(!(!!(value && value.length > 0) && !!(refValue && refValue.length > 0))) {
            return false;
        }

        const parsedValue = refType === 'date' ? new Date(value).getTime() : (refType === 'int' ? Number.parseInt(value) : value);
        const parsedRefValue = refType === 'date' ? new Date(refValue).getTime() : (refType === 'int' ? Number.parseInt(refValue) : refValue);
        
        return parsedValue > parsedRefValue;
    }
    else if(expression === "smaller") {
        if(!(!!(value && value.length > 0) && !!(refValue && refValue.length > 0))) {
            return false;
        }

        const parsedValue = refType === 'date' ? new Date(value).getTime() : (refType === 'int' ? Number.parseInt(value) : value);
        const parsedRefValue = refType === 'date' ? new Date(refValue).getTime() : (refType === 'int' ? Number.parseInt(refValue) : refValue);
        
        return parsedValue < parsedRefValue;
    }
    else {
        const regex = EXPRESSIONS[expression] as RegExp;
        return regex.test(value??'');
    }
};