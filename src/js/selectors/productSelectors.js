import { sortMethodsNames } from '../data/sortMethodsNames';

function getSortMethod(sortName) {
    switch (sortName) {
        case sortMethodsNames.SORT_BY_NAME_ASC: {
            return function compare(a, b) {
                if (a.name >= b.name) {
                    return 1
                } else {
                    return -1;
                }
            }
        }
        case sortMethodsNames.SORT_BY_NAME_DESC: {
            return function compare(a, b) {
                if (a.name <= b.name) {
                    return 1
                } else {
                    return -1;
                }
            }
        }
        case sortMethodsNames.SORT_BY_PRICE_ASC: {
            return function compare(a, b) {
                const price1 = a.price - 0;
                const price2 = b.price - 0;
                if (price1 >= price2) {
                    return 1
                } else {
                    return -1;
                }
            }
        }
        case sortMethodsNames.SORT_BY_PRICE_DESC: {
            return function compare(a, b) {
                const price1 = a.price - 0;
                const price2 = b.price - 0;
                if (price1 <= price2) {
                    return 1
                } else {
                    return -1;
                }
            }
        }
    }
}

export function getFilteredProducts(products) {
    const productsAsArray = Object.values(products.items);
    const sortMethod = products.settings.sortMethodList[products.settings.sortMethod];
    return getSortedList(productsAsArray,sortMethod);
}

function getSortedList(array, sortMethod) {
    return array.sort(getSortMethod(sortMethod));
}
