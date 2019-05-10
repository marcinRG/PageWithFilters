import {EventPropetyChange} from "./EventPropetyChange";

export class EventMultiPropertyChange extends EventPropetyChange{
    constructor(public propertyName: string, public oldValue: any[], newValue: any[]) {
        super(propertyName,oldValue,newValue);
    }
}