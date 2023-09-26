import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './slice/filterSlice'
import cardSlice from './slice/cardSlice'

export const store = configureStore({
  reducer: {
    filter:filterSlice,
    card: cardSlice,
      
  },
})