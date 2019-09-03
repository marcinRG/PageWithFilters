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

export function getFilteredProducts(products, sizes, brands, categories, colors, tags) {
    const sizesArray = getSelectedValuesAsArray(sizes);
    const brandsArray = getSelectedValuesAsArray(brands);
    const colorsArray = getSelectedValuesAsArray(colors);
    const categoriesArray = getSelectedValuesAsArray(categories);
    const tagsArray = getSelectedValuesAsArray(tags);
    const productsAsArray = Object.values(products.items);
    const productsSizeFiltered = filterSelectedSizes(productsAsArray, sizesArray);
    const productsBrandsFiltered = filterSelectedBrands(productsSizeFiltered, brandsArray);
    const productsCategoriesFiltered = filterSelectedCategories(productsBrandsFiltered, categoriesArray);
    const productsColorsFiltered = filterSelectedColors(productsCategoriesFiltered, colorsArray);
    const productsTagsFiltered = filterSelectedTags(productsColorsFiltered, tagsArray);
    const sortMethod = products.settings.sortMethodList[products.settings.sortMethod];
    return getSortedList(productsTagsFiltered, sortMethod);
}

function getSortedList(array, sortMethod) {
    return array.sort(getSortMethod(sortMethod));
}

function filterItemsArray(itemsArray,selectedArray, propertyName) {
    return itemsArray.filter(item=>{
        return (selectedArray.includes(item[propertyName]) || !selectedArray.length);
    });
}

function filterSelectedSizes(itemsArray,selectedSizesArray) {
    return filterItemsArray(itemsArray,selectedSizesArray, 'size');
}

function filterSelectedBrands(itemsArray,selectedBrandsArray) {
    return filterItemsArray(itemsArray,selectedBrandsArray, 'brand');
}

function filterSelectedCategories(itemsArray,selectedCategoriesArray) {
    return filterItemsArray(itemsArray,selectedCategoriesArray, 'category');
}

function filterSelectedColors(itemsArray,selectedColorsArray) {
    return itemsArray.filter(item=>{
        return (selectedColorsArray.includes(item.color.name) || !selectedColorsArray.length);
    });
}

function filterSelectedTags(itemsArray,selectedTagsArray) {
    return itemsArray.filter(item=>{
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
