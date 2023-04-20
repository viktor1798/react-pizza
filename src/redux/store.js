import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"; 
import pizzasReduser from "./reducers/pizzas-reducer";
import sortReduser from "./reducers/sort-reducer";
import thunk from "redux-thunk";
import filterReduser from './reducers/filter-reduser'
let reduser = combineReducers({
    pizzas:pizzasReduser,
    sort:sortReduser,
    filter: filterReduser,
})

let store = createStore(reduser,applyMiddleware(thunk))


export default store;