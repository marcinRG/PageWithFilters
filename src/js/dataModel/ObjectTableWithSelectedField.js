export class ObjectTableWithSelectedField {
    constructor(initArray, multipleSelection) {
        this.multipleSelection = multipleSelection;
        this.values = addSelectedField(initArray);
    }

    changeSelected(i) {
        if ((!this.values[i].selected) && (!this.multipleSelection)) {
            uncheckAll(this.values);
        }
        this.values[i].selected = !this.values[i].selected;
    }

    getSelected() {
        return getSelected(this.values);
    }
}

function uncheckAll(array) {
        array.forEach(elem => {
            elem.selected = false;
        });
}

function getSelected(array) {
    return array.filter((elem) => {
        return elem.selected;
    });
}

function addSelectedField(array) {
    if (Array.isArray(array)) {
        return array.map(value => {
            value.selected = false;
            return value;
        });
    }
}
