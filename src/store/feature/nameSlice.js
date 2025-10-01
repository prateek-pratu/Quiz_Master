import { createSlice} from "@reduxjs/toolkit";

const initialState={
   name:""
}
const nameSlice=createSlice({
   name:"name",
     initialState,
     reducers:{
        addName: (state, action) => {
          state.name = action.payload;
        }
     }

})

export default nameSlice.reducer;
export const {addName}=nameSlice.actions 