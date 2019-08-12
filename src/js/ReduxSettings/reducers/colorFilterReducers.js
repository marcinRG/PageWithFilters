import { AppData } from '../../data/AppData';
import { actionNames } from '../constants';

export function colorFilterReducers(state = AppData.filters.colors, action) {
    switch (action.type) {
        case actionNames.CHANGE_SELECTED_COLOR: {
            return Object.assign({}, state, { values: [...action.value] });
        }
        default: {
            return state;
        }
    }
}
