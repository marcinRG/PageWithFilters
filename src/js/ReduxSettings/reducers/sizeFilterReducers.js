import { AppData } from '../../data/AppData';
import { actionNames } from '../constants';

export function sizeFilterReducers(state = AppData.filters.sizes, action) {
    switch (action.type) {
        case actionNames.CHANGE_SELECTED_SIZE: {
            return Object.assign({}, state, { values: [...action.value] });
        }

        case actionNames.RESET_SELECTED_SIZES: {
            return Object.assign({}, state, { values: [...action.value] });
        }

        default: {
            return state;
        }
    }
}
