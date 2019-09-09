import { AppData } from '../../data/AppData';
import { actionNames } from '../constants';

export function categoryFilterReducers(state = AppData.filters.categories, action) {
    switch (action.type) {
        case actionNames.CHANGE_SELECTED_CATEGORY: {
            return Object.assign({}, state, { values: [...action.value] });
        }

        case actionNames.RESET_SELECTED_CATEGORIES: {
            return Object.assign({}, state, { values: [...action.value] });
        }

        default: {
            return state;
        }
    }
}
