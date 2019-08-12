import { combineReducers } from 'redux';
import { priceFilterReducers } from './reducers/priceFilterReducers';
import { sizeFilterReducers } from './reducers/sizeFilterReducers';
import { slidersReducers } from './reducers/sliderReducers';
import { colorFilterReducers } from './reducers/colorFilterReducers';
import { tagFilterReducers } from './reducers/tagFilterReducers';
import { categoryFilterReducers } from './reducers/categoryFilterReducers';
import { brandsFilterReducers } from './reducers/brandsFilterReducers';
import { basketReducers } from './reducers/basketReducers';

const mainReducer = combineReducers({
    priceFilters: priceFilterReducers,
    sizeFilters: sizeFilterReducers,
    colorFilters: colorFilterReducers,
    tagFilters: tagFilterReducers,
    categoriesFilters: categoryFilterReducers,
    brandsFilters: brandsFilterReducers,
    slider: slidersReducers,
    basket: basketReducers
});

//const mainReducer = initReducer;
//const mainReducer = filterReducers;

export default mainReducer;

