const SET_SORT_BY = "SET_SORT_BY"

let initialState = {
  itemsSort: [
    { name: "популярности", type: "popular",order: "desc" },
    { name: "цене", type: "price", order: "desc" },
    { name: "алфавит", type: "alphabet" ,order: "desc"},
  ],
  sortBy: { type: "popular", order: "desc" },
};

const sortReduser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SORT_BY":
      return {
        ...state,
        sortBy: action.obj,
      };
  
    default:
      break;
  }
  return state;
};

export const setSortBy = ({type,order}) => {
  return {
    type: SET_SORT_BY,
    obj:{type,order},
  };
};
export const setStateSortBy= ({type,order})=>{
  return (dispatch)=>{
      dispatch(setSortBy({type,order}))
    }
}

export default sortReduser;
