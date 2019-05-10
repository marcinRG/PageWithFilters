import {ColorItem} from './ColorItem';
import {NextObserver} from 'rxjs/Observer';
import {EventPropetyChange} from '../../model/events/EventPropetyChange';
import {Observable} from "rxjs";
import {EventMultiPropertyChange} from "../../model/events/EventMultiPropertyChange";

export class ColorSelector implements NextObserver<EventPropetyChange> {

    private htmlElement: HTMLElement;
    private htmlList: HTMLElement;
    private test:HTMLElement;
    private observable: Observable<any>;

    constructor(htmlElemSelector: string, title: string, private colors: Array<ColorItem> = []) {
        this.htmlList = this.createHTMLElem(htmlElemSelector, title);
        this.test = document.getElementById('experiments');
        console.log(this.test);
        this.observable = Observable.fromEvent(this.test, 'click')
            .map(() => {
                console.log('event fired');
                return new EventMultiPropertyChange('multi-color',[],['something']);
            });
    }

    createHTMLElem(selector, titleStr) {
        this.htmlElement = document.querySelector(selector);
        let title = document.createElement('h4');
        title.classList.add('small-title');
        title.textContent = titleStr;
        let ul = document.createElement('ul');
        this.htmlElement.appendChild(title);
        this.htmlElement.appendChild(ul);
        return ul;
    }

    addColor(color: ColorItem) {
        this.colors.push(color);
        this.observable.subscribe(color);
        if (this.htmlList) {
            this.htmlList.appendChild(color.getElem());
        }
    }

    next(value: any) {

        console.log(value);
    }

    error(err) {
        console.log(`Error occured: ColorSelector element, err: ${err}`);
    }
}