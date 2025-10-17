import {configureStore} from '@reduxjs/toolkit'
import nameReducer from "./feature/nameSlice"
import categoryReducer from "./feature/categorySlice"

export const store=configureStore({
   reducer:{ 
      name:nameReducer,
      category:categoryReducer
   },
})