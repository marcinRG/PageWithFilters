import { actionNames } from '../constants';
import { AppData } from '../../data/AppData';

export function priceFilterReducers(state = AppData.filters.prices, action) {
    switch (action.type) {
        case actionNames.SET_MIN_PRICE_RANGE: {
            return Object.assign({}, state, { min: action.min });
        }
        case actionNames.SET_MAX_PRICE_RANGE: {
            return Object.assign({}, state, { max: action.max });
        }
        case actionNames.RESET_PRICES_RANGES: {
            return Object.assign({}, state, { min: action.value.min }, { max: action.value.max });
        }
        default: {
            return state;
        }
    }
}
