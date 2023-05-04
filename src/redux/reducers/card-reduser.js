const ADD_PIZZA_CARD = "ADD_PIZZA_CARD";

let initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice=(arr)=> arr.reduce((sum,obj)=> obj.price + sum, 0)

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split('.');
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  },0);
};


const cardReduser = (state = initialState, action) => {
  

  switch (action.type) {
    case ADD_PIZZA_CARD:{
    const currentPizzasItem =!state.items[action.objPizzas.id]
    ? [action.objPizzas]
    : [...state.items[action.objPizzas.id].items, action.objPizzas]  

    const newItem = {
        ...state.items,
        [action.objPizzas.id]:{
          items: currentPizzasItem,
          totalPrice: getTotalPrice(currentPizzasItem)
        }
      };

      
      const totalCount = getTotalSum(newItem, 'items.length');
      const totalPrice = getTotalSum(newItem, 'totalPrice');

      return {
        ...state,
        items: newItem,
        totalCount,
        totalPrice,
      };
    }

    default:
      return state;
  }
};

const addPizzaToCard = (objPizzas) => {
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
