import { actionNames } from '../constants';

export function changeSelectedTag(value) {
    return {
        type: actionNames.CHANGE_SELECTED_COLOR,
        value
    }
}

export function resetSelectedTags(value) {
    return {
        type: actionNames.RESET_SELECTED_COLORS,
        value
    }
}
