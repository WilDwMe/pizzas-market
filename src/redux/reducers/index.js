import { combineReducers } from 'redux';
import filterReducers from './filters';
import pizzasReducers from './pizzas';

const rootReducer = combineReducers({
    filter: filterReducers,
    pizzas: pizzasReducers
});

export default rootReducer;