import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import thunk from "redux-thunk";
import pizzas from "./reducers/pizzas-reducer";
import sort from "./reducers/sort-reducer";
import filter from './reducers/filter-reduser'
import card from './reducers/card-reduser'


let reduser = combineReducers({
    pizzas,
    sort,
    filter,
    card
})

let store = createStore(reduser,applyMiddleware(thunk))


export default store;