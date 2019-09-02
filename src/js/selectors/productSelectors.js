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

//getFilteredProducts(state.products, state.sizeFilters, state.brandsFilters,
//    state.categoriesFilters, state.colorFilters, state.tagFilters),

export function getFilteredProducts(products, sizes, brands, categories, colors, tags) {
    const sizesArray = getSelectedValuesAsArray(sizes);
    // const brandsArray = getSelectedValuesAsArray(brands);
    // const categoriesArray = getSelectedValuesAsArray(categories);
    // const colorsArray = getSelectedValuesAsArray(colors);
    // const tagsArray = getSelectedValuesAsArray(tags);
    // console.log('---@@@@@@@---');
    // console.log('---XXXXXXXX---');

    const productsAsArray = Object.values(products.items);
    console.log(filterSelectedSizes(productsAsArray,sizesArray));
    const sortMethod = products.settings.sortMethodList[products.settings.sortMethod];
    return getSortedList(productsAsArray, sortMethod);
}

function getSortedList(array, sortMethod) {
    return array.sort(getSortMethod(sortMethod));
}

function filterSelectedSizes(itemsArray,selectedSizesArray) {
    return itemsArray.filter(item=>{
        console.log(selectedSizesArray);
        console.log(item.size);
        console.log(selectedSizesArray.includes(item.size));
        return selectedSizesArray.includes(item.size);
    });
}

function getSelectedValuesAsArray(obj) {
    return Object.values(obj.values).filter(elem => {
        return elem.selected;
    }).map(elem => {
        return elem.name;
    });
}
