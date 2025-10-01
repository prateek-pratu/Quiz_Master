import {configureStore} from '@reduxjs/toolkit'
import nameReducer from "./feature/nameSlice"

export const store=configureStore({
   reducer:{ 
      name:nameReducer
   },
})