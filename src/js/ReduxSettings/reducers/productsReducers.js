import { AppData } from '../../data/AppData';
import { actionNames } from '../constants';
export function productsReducers(state=AppData.products, action) {
    switch (action.type) {
        case actionNames.CHANGE_SORT_METHOD: {
            const settings = Object.assign({}, state.settings, {sortMethod:action.value});
            return Object.assign({}, state, {settings: settings});
        }

        case actionNames.CHANGE_CURRENT_PAGE: {
            const settings = Object.assign({}, state.settings, {currentPage:action.value});
            return Object.assign({}, state, {settings: settings});
        }

        case actionNames.CHANGE_FAVORITE_PROPERTY: {
            const updatedItems = Object.assign({}, state.items, {[action.value.id]: action.value});
            return Object.assign({}, state, {items: updatedItems});
        }

        default: {
            return state;
        }
    }
}
