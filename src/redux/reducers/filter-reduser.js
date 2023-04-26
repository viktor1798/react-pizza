const SET_CATEGORY = "SET_CATEGORY";

let initialState = {
  category: 0,
};

const sortReduser = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.catCategory,
      };

    default:
      break;
  }
  return state;
};

export const setCategory = (catCategory) => {
  return {
    type: SET_CATEGORY,
    catCategory,
  };
};


export const setStateCategory= (index)=>{
    return (dispatch)=>{
        dispatch(setCategory(index))
    }
}



export default sortReduser;
