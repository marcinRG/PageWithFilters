import { AppData } from '../../data/AppData';
import { actionNames } from '../constants';

export function brandsFilterReducers(state = AppData.filters.brands, action) {
    switch (action.type) {
        case actionNames.CHANGE_SELECTED_BRAND: {
            return Object.assign({}, state, { values: [...action.value] });
        }
        case actionNames.RESET_SELECTED_BRANDS: {
            return Object.assign({}, state, { values: [...action.value] });
        }
        default: {
            return state;
        }
    }
}
