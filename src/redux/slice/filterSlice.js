import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoryId:0,
  sort:{
    name: "популярности", sortProperty: "rating"
  },
  searchValue:'',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state, action){
        state.categoryId = action.payload;
    },
    setSort(state,action){
        state.sort = action.payload;
    },
    setSearchValue(state,action){
        state.searchValue = action.payload;
    },
    setFilters(state,action){
      state.categoryId = Number(action.payload.categoryId)
      state.sort = action.payload.sort
    }
  },
})

export const {setCategory,setSort,setSearchValue,setFilters} = filterSlice.actions

export default filterSlice.reducer