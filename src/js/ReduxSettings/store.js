import {createStore} from 'redux';
import { exampleReducer } from './reducers';

export const store = createStore(exampleReducer);
