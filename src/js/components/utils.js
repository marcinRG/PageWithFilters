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

export function selectElementInArray(index, values, multipleSelection) {
    let array = [...values];
    if (!multipleSelection) {
        array = setAllElementsSelectedPropertyToFalse(array);
    }
    array[index] = setSelectedProperty(array[index]);
    return array;
}

export function getSelected(selected) {
    if (!selected) {
        return false;
    } else {
        return selected;
    }
}

export function setSelectedClass(isSelected) {
    if (isSelected) {
        return 'selected';
    }
}

export function getItemCount(items, ItemId) {
    return items[ItemId].count ? items[ItemId].count : 0;
}

//from https://www.jacklmoore.com/notes/rounding-in-javascript/
export function round(value, decimals) {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
}
