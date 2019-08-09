import { combineReducers } from 'redux';
import { priceFilterReducers } from './reducers/filterReducers';
import { slidersReducers } from './reducers/sliderReducers';

const mainReducer = combineReducers({
    priceFilters: priceFilterReducers,
    slider: slidersReducers
});

//const mainReducer = initReducer;
//const mainReducer = filterReducers;

export default mainReducer;

