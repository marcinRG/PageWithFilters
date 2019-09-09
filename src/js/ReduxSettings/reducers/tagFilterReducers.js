import { AppData } from '../../data/AppData';
import { actionNames } from '../constants';

export function tagFilterReducers(state = AppData.filters.tags, action) {
    switch (action.type) {
        case actionNames.CHANGE_SELECTED_TAG: {
            return Object.assign({}, state, { values: [...action.value] });
        }
        case actionNames.RESET_SELECTED_TAGS: {
            return Object.assign({}, state, { values: [...action.value] });
        }
        default: {
            return state;
        }
    }
}
