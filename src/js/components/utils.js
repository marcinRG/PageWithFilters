export function setSelectedProperty(obj) {
    if (obj.hasOwnProperty('selected')) {
        obj['selected'] = !obj['selected'];
    } else {
        obj.selected = true;
    }
    return obj;
}

export function setAllElementsSelectedPropertyToFalse(array) {
    return array.map((element) => {
        if (element.selected) {
            delete element.selected;
        }
        return element;
    });
}

export function getSelected(selected) {
    if (!selected) {
        return false;
    }
    else {
        return selected;
    }
}

export function setSelectedClass(isSelected) {
    if (isSelected) {
        return 'selected';
    }
}
