export const getMarginClasses = (marginTop?: ("small" | "medium" | "large"), marginBottom?: ("small" | "medium" | "large"), marginLeft?: ("small" | "medium" | "large"), marginRight?: ("small" | "medium" | "large")) => {
    let classes = '';
    if(marginTop) {
        classes += ` ${getSpacingClass(marginTop, 'margin', 'top')}`;
    }
    if(marginBottom) {
        classes += ` ${getSpacingClass(marginBottom, 'margin', 'bottom')}`;
    }
    if(marginLeft) {
        classes += ` ${getSpacingClass(marginLeft, 'margin', 'left')}`;
    }
    if(marginRight) {
        classes += ` ${getSpacingClass(marginRight, 'margin', 'right')}`;
    }
    return classes;
}

export const getPaddingClasses = (paddingTop?: ("small" | "medium" | "large"), paddingBottom?: ("small" | "medium" | "large"), paddingLeft?: ("small" | "medium" | "large"), paddingRight?: ("small" | "medium" | "large")) => {
    let classes = '';
    if(paddingTop) {
        classes += ` ${getSpacingClass(paddingTop, 'padding', 'top')}`;
    }
    if(paddingBottom) {
        classes += ` ${getSpacingClass(paddingBottom, 'padding', 'bottom')}`;
    }
    if(paddingLeft) {
        classes += ` ${getSpacingClass(paddingLeft, 'padding', 'left')}`;
    }
    if(paddingRight) {
        classes += ` ${getSpacingClass(paddingRight, 'padding', 'right')}`;
    }
    return classes;
}

export const getSpacingClass = (spacing: ("small" | "medium" | "large"), type: ("margin" | "padding"), applyTo: ("top" | "bottom" | "left" | "right")) => {
    return `${type}-${applyTo}-${spacing}`;
}