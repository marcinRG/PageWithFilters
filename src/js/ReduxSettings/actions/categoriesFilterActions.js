import { actionNames } from '../constants';

export function changeSelectedCategory(value) {
    return {
        type: actionNames.CHANGE_SELECTED_CATEGORY,
        value
    }
}

export function resetSelectedCategories(value) {
    return {
        type: actionNames.RESET_SELECTED_CATEGORIES,
        value
    }
}
