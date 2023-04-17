let initialState = {
  itemsSort: [
    { name: "популярности", type: "popular" },
    { name: "цене", type: "price" },
    { name: "алфавит", type: "alphabet" },
  ],
  sortBy: "0",
};

const sortReduser = (state = initialState, action) => {
  return state;
};

export default sortReduser;
