import { sortMethods } from '../data/sortMethods';

export function getFilteredProducts(products, sizes, brands, categories, colors, tags, prices) {
    const sizesArray = getSelectedValuesAsArray(sizes);
    const brandsArray = getSelectedValuesAsArray(brands);
    const colorsArray = getSelectedValuesAsArray(colors);
    const categoriesArray = getSelectedValuesAsArray(categories);
    const tagsArray = getSelectedValuesAsArray(tags);
    const itemsAsArray = Object.values(products.items);
    const itemsWithSizeFilter = filterSelectedSizes(itemsAsArray, sizesArray);
    const itemsWithBrandsFilter = filterSelectedBrands(itemsWithSizeFilter, brandsArray);
    const itemsWithCategoriesFilter = filterSelectedCategories(itemsWithBrandsFilter, categoriesArray);
    const itemsWithColorsFilter = filterSelectedColors(itemsWithCategoriesFilter, colorsArray);
    const itemsWithTagsFilter = filterSelectedTags(itemsWithColorsFilter, tagsArray);
    const itemsWithPricesFilter = filterSelectedPrices(itemsWithTagsFilter, prices);
    const sortMethod = products.settings.sortMethodList[products.settings.sortMethod];
    return getSortedList(itemsWithPricesFilter, sortMethod);
}

export function sliceResultsArray(itemsArray, settings) {
    return itemsArray.slice((settings.currentPage - 1) * settings.itemsPerPage,
        (settings.currentPage) * settings.itemsPerPage);
}

function getSortedList(array, sortMethod) {
    return array.sort(getSortMethod(sortMethod));
}

function filterItemsArray(itemsArray, selectedArray, propertyName) {
    return itemsArray.filter(item => {
        return (selectedArray.includes(item[propertyName]) || !selectedArray.length);
    });
}

function filterSelectedSizes(itemsArray, selectedSizesArray) {
    return filterItemsArray(itemsArray, selectedSizesArray, 'size');
}

function filterSelectedBrands(itemsArray, selectedBrandsArray) {
    return filterItemsArray(itemsArray, selectedBrandsArray, 'brand');
}

function filterSelectedCategories(itemsArray, selectedCategoriesArray) {
    return filterItemsArray(itemsArray, selectedCategoriesArray, 'category');
}

function filterSelectedPrices(itemsArray, pricesSettings) {
    return itemsArray.filter(item => {
        const price = item.price - 0;
        return (price >= pricesSettings.min && price <= pricesSettings.max);
    });
}

function filterSelectedColors(itemsArray, selectedColorsArray) {
    return itemsArray.filter(item => {
        return (selectedColorsArray.includes(item.color.name) || !selectedColorsArray.length);
    });
}

function filterSelectedTags(itemsArray, selectedTagsArray) {
    return itemsArray.filter(item => {
        const tag = selectedTagsArray[0] || '';
        return (item.tags.includes(tag) || !selectedTagsArray.length);
    });
}

function getSelectedValuesAsArray(obj) {
    return Object.values(obj.values).filter(elem => {
        return elem.selected;
    }).map(elem => {
        return elem.name;
    });
}

function getSortMethod(sortName) {
    switch (sortName) {
        case sortMethods.SORT_BY_NAME_ASC: {
            return function compare(a, b) {
                if (a.name >= b.name) {
                    return 1
                } else {
                    return -1;
                }
            }
        }
        case sortMethods.SORT_BY_NAME_DESC: {
            return function compare(a, b) {
                if (a.name <= b.name) {
                    return 1
                } else {
                    return -1;
                }
            }
        }
        case sortMethods.SORT_BY_PRICE_ASC: {
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
        case sortMethods.SORT_BY_PRICE_DESC: {
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
