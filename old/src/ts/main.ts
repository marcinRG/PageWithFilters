import {ColorItem} from './ui/ColorSelector/ColorItem';
import {ColorSelector} from './ui/ColorSelector/ColorSelector';
import {Observer} from 'rxjs/Observer';
// import {ListSelector} from './ui/ListSelector/ListSelector';
// import {ListElement} from './ui/ListSelector/ListElement';
// import {TagSelector} from "./ui/TagSelector/TagSelector";
// import {TagElement} from "./ui/TagSelector/TagElement";


//let elem: HTMLElement = document.getElementById('experiments');
let colorSelector = new ColorSelector('.color-filter', 'Colors');
colorSelector.addColor(new ColorItem('red'));
colorSelector.addColor(new ColorItem('grey'));
colorSelector.addColor(new ColorItem('green'));
colorSelector.addColor(new ColorItem('white'));
colorSelector.addColor(new ColorItem('blue'));

class ObTest implements Observer<any> {
    next(value) {
        console.log(value);
    }

    error(error) {
        console.log('Error');
        console.log(error);
    }

    complete() {
        console.log('complete');
    }
}

let ob = new ObTest();





// let sizeSelector = new ListSelector('.size-filter', 'Size', true);
// sizeSelector.addElement(new ListElement('Small', 12, 'size'));
// sizeSelector.addElement(new ListElement('Medium', 5, 'size'));
// sizeSelector.addElement(new ListElement('Large', 9, 'size'));
//
// let brandSelector = new ListSelector('.brands-filter', 'Brand', true);
// brandSelector.addElement(new ListElement('Banshu Hamono', 8, 'brand'));
// brandSelector.addElement(new ListElement('Bower', 5, 'brand'));
// brandSelector.addElement(new ListElement('Braun',3,'brand'));
// brandSelector.addElement(new ListElement('ElevenPlus',4,'brand'));
// brandSelector.addElement(new ListElement('Field',1,'brand'));
// brandSelector.addElement(new ListElement('Henry Wilson',5,'brand'));
// brandSelector.addElement(new ListElement('Menu',1,'brand'));
//
// let categorySelector = new ListSelector('.category-selector');
//
// categorySelector.addElement(new ListElement('All products',27,'category'));
// categorySelector.addElement(new ListElement('Living',10,'category'));
// categorySelector.addElement(new ListElement('Dining',5,'category'));
// categorySelector.addElement(new ListElement('Furniture',4,'category'));
// categorySelector.addElement(new ListElement('Lighting',2,'category'));
// categorySelector.addElement(new ListElement('Technics',1,'category'));
// categorySelector.addElement(new ListElement('Accessories',5,'category'));
//
//
// let tagSelector = new TagSelector('.tag-selector');
// tagSelector.addElement(new TagElement('Simple','tag'));
// tagSelector.addElement(new TagElement('Minimalism','tag'));
// tagSelector.addElement(new TagElement('Furniture','tag'));
// tagSelector.addElement(new TagElement('White','tag'));
// tagSelector.addElement(new TagElement('Black','tag'));
// tagSelector.addElement(new TagElement('Accessories','tag'));