import {combineReducers, legacy_createStore as createStore} from "redux"; 
import pizzasReduser from "./reducers/pizzas-reducer";
import sortReduser from "./reducers/sort-reducer";

let reduser = combineReducers({
    pizzas:pizzasReduser,
    sort:sortReduser
})

let store = createStore(reduser)


export default store;