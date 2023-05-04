const ADD_PIZZA_CARD = "ADD_PIZZA_CARD";
const REMOVE_CARD = "REMOVE_CARD";
const CLEAN_CARD = "CLEAN_CARD";
const PLUS_CARD_ITEM = "PLUS_CARD_ITEM";
const MINUS_CARD_ITEM = "MINUS_CARD_ITEM";

let initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
  const [firstKey, ...keys] = path.split(".");
  return keys.reduce((val, key) => {
    return val[key];
  }, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
  return Object.values(obj).reduce((sum, obj) => {
    const value = _get(obj, path);
    return sum + value;
  }, 0);
};

const cardReduser = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PIZZA_CARD: {
      const currentPizzasItem = !state.items[action.objPizzas.id]
        ? [action.objPizzas]
        : [...state.items[action.objPizzas.id].items, action.objPizzas];

      const newItem = {
        ...state.items,
        [action.objPizzas.id]: {
          items: currentPizzasItem,
          totalPrice: getTotalPrice(currentPizzasItem),
        },
      };

      const totalCount = getTotalSum(newItem, "items.length");
      const totalPrice = getTotalSum(newItem, "totalPrice");

      return {
        ...state,
        items: newItem,
        totalCount,
        totalPrice,
      };
    }
    case CLEAN_CARD: {
      return {
        items: {},
        totalPrice: 0,
        totalCount: 0,
      };
    }
    case REMOVE_CARD: {
      const newItem={
        ...state.items
      }
      const currentTotalPrice = newItem[action.id].totalPrice;
      const currentTotalCount = newItem[action.id].items.length;
      delete newItem[action.id]
      return {
        ...state,
        items: newItem,
        totalPrice: state.totalPrice - currentTotalPrice,
        totalCount: state.totalCount - currentTotalCount,
      };
    }
    case PLUS_CARD_ITEM:{
      const newObjItem=[
        ...state.items[action.id].items,
        state.items[action.id].items[0],
      ];
      const newItem={
        ...state.items,
        [action.id]:{
          items:newObjItem,
          totalPrice:getTotalPrice(newObjItem)
        },
      };

      const totalCount = getTotalSum(newItem, "items.length");
      const totalPrice = getTotalSum(newItem, "totalPrice");

      return {
        ...state,
        items: newItem,
        totalCount,
        totalPrice,
      };
    }
    case MINUS_CARD_ITEM:{
      const oldItem = state.items[action.id].items
      const newObjItem= oldItem.length > 1? state.items[action.id].items.slice(1):oldItem;
      
      const newItem={
        ...state.items,
        [action.id]:{
          items:newObjItem,
          totalPrice:getTotalPrice(newObjItem)
        },
      };

      const totalCount = getTotalSum(newItem, "items.length");
      const totalPrice = getTotalSum(newItem, "totalPrice");

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

export const cleanCard = () => {
  return {
    type: CLEAN_CARD,
  };
};
export const removeCard = (id) => {
  return {
    type: REMOVE_CARD,
    id,
  };
};
export const plusCardItem = (id) => {
  return {
    type: PLUS_CARD_ITEM,
    id,
  };
};
export const minusCardItem = (id) => {
  return {
    type: MINUS_CARD_ITEM,
    id,
  };
};

export const addPizzaToCardState = (items) => {
  return (dispatch) => {
    dispatch(addPizzaToCard(items));
  };
};

export default cardReduser;
