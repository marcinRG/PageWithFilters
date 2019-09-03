import { actionNames } from '../constants';

export function changeSelectedTag(value) {
    return {
        type: actionNames.CHANGE_SELECTED_TAG,
        value
    }
}

export function resetSelectedTags(value) {
    return {
        type: actionNames.RESET_SELECTED_TAGS,
        value
    }
}
