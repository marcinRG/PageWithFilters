import { AppData } from '../../data/AppData';
import { actionNames } from '../constants';

export function basketReducers(state = AppData.basket, action) {
    switch (action.type) {
        case actionNames.ADD_TO_BASKET: {
            const updatedItems = Object.assign({}, state.items, {[action.value.id]:action.value});
            return Object.assign({}, state, {items: updatedItems});
        }
        case actionNames.UPDATE_ITEM_COUNT: {
            const obj = Object.assign({},state.items[action.value.id],{count: action.value.count});
            const updatedItems = Object.assign({}, state.items, {[action.value.id]: obj});
            return Object.assign({}, state, {items: updatedItems});

        }

        case actionNames.REMOVE_FROM_BASKET: {
            const updatedItems = Object.assign({}, state.items);
            delete updatedItems[action.value];
            return Object.assign({}, state, {items: updatedItems});
        }

        default: {
            return state;
        }
    }
}
