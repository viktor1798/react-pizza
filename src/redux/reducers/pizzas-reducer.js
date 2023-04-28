import { pizzasApi } from "../../api/api";

const SET_PIZZAS = "SET_PIZZAS";

let initialState = {
  items: [],
  isLoaded: false,
};

const pizzasReduser = (state = initialState, action) => {

  switch (action.type) {
    case "SET_PIZZAS":
      return {
        ...state,
        items: action.items,
      };

    default:
      break;
  }
  return state;
};

export const setPizzas = (items) => {
  return {
    type: SET_PIZZAS,
    items,
  };
};

export const getDataPizzas = (category, sortBy) => {
  return (dispatch) => {
    pizzasApi
      .getPizzas(category,sortBy).then(({ data }) => dispatch(setPizzas(data)));
      
  };
};

export default pizzasReduser;
