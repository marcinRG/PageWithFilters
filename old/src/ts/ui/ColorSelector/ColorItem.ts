import {NextObserver, Observer} from 'rxjs/Observer';
import {EventPropetyChange} from '../../model/events/EventPropetyChange';
import {EventMultiPropertyChange} from "../../model/events/EventMultiPropertyChange";
import {Observable} from 'rxjs';

export class ColorItem implements Observer<EventPropetyChange | EventMultiPropertyChange> {
    private elem: HTMLElement;
    private observable: Observable<EventPropetyChange | EventMultiPropertyChange>;
    private isSelected: boolean = false;

    constructor(public colorName: string, private allowMultipleSelections: boolean = false) {
        this.createHTML(colorName);
        this.setupEvents();
    }

    createHTML(colorName) {
        this.elem = document.createElement("li");
        this.elem.classList.add('c-picker', colorName);
    }

    uncheckHTML() {
        this.elem.innerHTML = '';
    }

    checkHTML() {
        let checkMark = document.createElement('i');
        checkMark.classList.add('icon', 'ion-checkmark');
        this.elem.appendChild(checkMark);
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
        this.handleEventMultiPropertyChange(value);
    }

    changeProperty(): EventPropetyChange {
        const color: string = 'color';
        const none: string = 'none';
        this.isSelected = !this.isSelected;
        if (this.isSelected) {
            return new EventPropetyChange(color, none, this.colorName);
        }
        else {
            return new EventPropetyChange(color, this.colorName, none);
        }
    }

    handleEventPropertyChange(event: EventPropetyChange) {
        if ((event) && (event instanceof EventPropetyChange)) {
            console.log('Normal event:'+event);
            if (event.currentValue === this.colorName) {
                this.checkHTML();
                return;
            }
            this.uncheckHTML();
        }
    }

    handleEventMultiPropertyChange(event: EventMultiPropertyChange) {
        if ((event) && (event instanceof EventMultiPropertyChange)) {
            console.log('Multi event:'+event);
        }
    }

    error(err) {
        console.log(`Error occured ColorItem, err: ${err}`);
    }

    complete() {
        console.log('complete');
    }

    getElem() {
        return this.elem;
    }

    subscribe(observer) {
        this.observable.subscribe(observer);
    }
}