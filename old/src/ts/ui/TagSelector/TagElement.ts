import {NextObserver} from 'rxjs/Observer';
import {EventPropetyChange} from '../../model/events/EventPropetyChange';
import {Observable} from 'rxjs';


export class TagElement implements NextObserver<EventPropetyChange> {
    private elem: HTMLElement;
    private observable: Observable<any>;
    private isSelected: boolean = false;

    constructor(public name: string, private propertyName: string, private allowMultipleSelections: boolean = false) {
        this.createHTML(name);
        this.setupEvents();
    }

    createHTML(name) {
        this.elem = document.createElement('li');
        this.elem.textContent = name;
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
            console.log(event);
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