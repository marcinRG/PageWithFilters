import { actionNames } from '../constants';

export function changeSelectedSizes(value) {
    return {
        type: actionNames.CHANGE_SELECTED_SIZE,
        value
    }
}

export function resetSelectedSizes(value) {
    return {
        type: actionNames.RESET_SELECTED_SIZES,
        value
    }
}
