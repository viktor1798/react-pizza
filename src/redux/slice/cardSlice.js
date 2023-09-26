import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  totalPrice:0,
  items:[]
}

export const cardSlice = createSlice({
  name: 'card',
  initialState,
  reducers: {

    addPizzasInCard(state, action){
      // сравниваем добавлен ли объект в массив с id или нет
      const findItem = state.items.find((obj=> obj.id === action.payload.id))
      // если да, то считаем количество одинаковых пицц, если нет, то добавляем первую пиццу
      if (findItem){
        findItem.count++
      }else{
        state.items.push({
          ...action.payload,
          count:1,
        })
      }
      // считает сумму всех пицц
      state.totalPrice = state.items.reduce((sum, obj)=>{
        return obj.price*obj.count + sum
      },0)
    },
    removePizzasInCard(state, action){
      state.items.filter(obj=> obj.id != action.payload)
    },
    clearPizzasInCard(state){
      state.items = []
      state.totalPrice = 0
    }
  },
})

export const {addPizzasInCard, removePizzasInCard, clearPizzasInCard} = cardSlice.actions
export const selectCardItemById = (id)=>(state)=> state.card.items.find(obj=> obj.id === id)

export default cardSlice.reducer