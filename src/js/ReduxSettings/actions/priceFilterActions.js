import { actionNames } from '../constants';

export function addMaxPriceRange(value) {
    return {
        type: actionNames.SET_MAX_PRICE_RANGE,
        max: value,
    }
}

export function addMinPriceRange(value) {
    return {
        type: actionNames.SET_MIN_PRICE_RANGE,
        min: value,
    }
}
