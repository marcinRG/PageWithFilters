import { actionNames } from '../constants';

export function addItemToBasket(value) {
    return {
        type: actionNames.ADD_TO_BASKET,
        value
    }
}

export function removeItemFromBasket(value) {
    return {
        type: actionNames.REMOVE_FROM_BASKET,
        value
    }
}

export function updateItemCount(value) {
    return {
        type: actionNames.UPDATE_ITEM_COUNT,
        value
    }
}
