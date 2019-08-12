import { actionNames } from '../constants';

export function changeSelectedColor(value) {
    return {
        type: actionNames.CHANGE_SELECTED_COLOR,
        value
    }
}

export function resetSelectedColors(value) {
    return {
        type: actionNames.RESET_SELECTED_COLORS,
        value
    }
}
