import {NextObserver} from 'rxjs/Observer';
import {EventPropetyChange} from '../../model/events/EventPropetyChange';
import {Observable} from 'rxjs';


export class ListElement implements NextObserver<EventPropetyChange> {
    private elem: HTMLElement;
    private observable: Observable<any>;
    private isSelected: boolean = false;

    constructor(public name: string, private count: number, private propertyName: string, private allowMultipleSelections: boolean = false) {
        this.createHTML(name, count);
        this.setupEvents();
    }

    createHTML(name, count) {
        this.elem = document.createElement('li');
        let sup = document.createElement('sup');
        sup.textContent = count;
        this.elem.textContent = name;
        this.elem.appendChild(sup);
    }

    uncheckHTML() {
        this.elem.classList.remove('selected');
    }

    checkHTML() {
        this.elem.classList.add('selected');
    }

    setupEvents() {
        this.observable = Observable.fromEvent(this.elem, 'click')
            .map(() => {
                return this.changeProperty();
            });
        this.subscribe(this);
    }

    next(value: any) {
        this.handleEventPropertyChange(value);
    }

    changeProperty(): EventPropetyChange {

        const none: string = 'none';
        this.isSelected = !this.isSelected;
        if (this.isSelected) {
            return new EventPropetyChange(this.propertyName, none, this.name);
        }
        else {
            return new EventPropetyChange(this.propertyName, this.name, none);
        }
    }

    handleEventPropertyChange(event: EventPropetyChange) {
        if ((event) && (event instanceof EventPropetyChange)) {
            if ((event.propertyName === this.propertyName) &&
                (event.currentValue === this.name)) {
                this.checkHTML();
                return;
            }
            this.uncheckHTML();
        }
    }

    error(err) {
        console.log(`Error occured ColorItem, err: ${err}`);
    }

    getElem() {
        return this.elem;
    }

    subscribe(observer) {
        this.observable.subscribe(observer);
    }

}