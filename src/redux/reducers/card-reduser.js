const ADD_PIZZA_CARD = "ADD_PIZZA_CARD";

let initialState = {
  items: [],
  totalPrice: 25.6,
  totalCount: 2,
};

const cardReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CARD:
      const newItem = {
        ...state.items,
        [action.objPizzas.id]: !state.items[action.objPizzas.id]
          ? [action.objPizzas]
          : [...state.items[action.objPizzas.id], action.objPizzas],
      };

      const allPizzas = [].concat.apply([],Object.values(newItem)) 
      const totalPrice = allPizzas.reduce((sum,obj)=>obj.price +sum, 0)

      return {
        ...state,
        items:newItem,
        totalCount: allPizzas.lenght,
        totalPrice
      };

    default:
        return state;
  }
};

export const addPizzaToCard = (objPizzas) => {
  return {
    type: ADD_PIZZA_CARD,
    objPizzas,
  };
};

export const addPizzaToCardState = (items) => {
  return (dispatch) => {
    dispatch(addPizzaToCard(items));
  };
};

export default cardReduser;
