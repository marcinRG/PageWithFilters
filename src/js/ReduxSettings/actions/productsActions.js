import { actionNames } from '../constants';

export function changeSortMethod(value) {
    return {
        type: actionNames.CHANGE_SORT_METHOD,
        value
    }
}
export function changeCurrentPage(value) {
    return {
        type: actionNames.CHANGE_CURRENT_PAGE,
        value
    }
}

export function changeFavoriteProperty(value) {
    return {
        type: actionNames.CHANGE_FAVORITE_PROPERTY,
        value
    }
}
