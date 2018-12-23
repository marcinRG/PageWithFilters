import {NextObserver} from 'rxjs/Observer';
import {EventPropetyChange} from '../../model/events/EventPropetyChange';
import {TagElement} from './TagElement';

export class TagSelector implements NextObserver<EventPropetyChange> {

    private htmlElement: HTMLElement;
    private htmlList: HTMLElement;

    constructor(htmlElemSelector: string, title: string = '', private hasTitle: boolean = false, private elements: Array<TagElement> = []) {
        this.htmlList = this.createHTMLElem(htmlElemSelector, title);
    }

    createHTMLElem(selector, titleStr) {
        this.htmlElement = document.querySelector(selector);
        if (this.hasTitle) {
            let title = document.createElement('h4');
            title.classList.add('small-title');
            title.textContent = titleStr;
            this.htmlElement.appendChild(title);
        }

        let ul = document.createElement('ul');
        ul.classList.add('tags-list');
        this.htmlElement.appendChild(ul);
        return ul;
    }

    addElement(elem: TagElement) {
        this.elements.push(elem);
        if (this.htmlList) {
            this.htmlList.appendChild(elem.getElem());
        }
    }

    next(value: any) {
        console.log(value);
    }

    error(err) {
        console.log(`Error occured: ColorSelector element, err: ${err}`);
    }
}