import { createStore, combineReducers } from 'redux';
import filterReducers from './reducers/filters';
import pizzasReducers from './reducers/pizzas';


const rootReducer = combineReducers({
    filterReducers,
    pizzasReducers
})

const store = createStore(rootReducer);

export default store;