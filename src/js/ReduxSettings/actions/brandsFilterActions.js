import { actionNames } from '../constants';

export function changeSelectedBrand(value) {
    return {
        type: actionNames.CHANGE_SELECTED_BRAND,
        value
    }
}

export function resetSelectedBrands(value) {
    return {
        type: actionNames.RESET_SELECTED_BRANDS,
        value
    }
}
