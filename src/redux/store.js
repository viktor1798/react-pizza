import {combineReducers, legacy_createStore as createStore} from "redux"; 
import pizzasReduser from "./reducers/pizzas-reducer";

let reduser = combineReducers({
    pizzas:pizzasReduser
})

let store = createStore(reduser)


export default store;