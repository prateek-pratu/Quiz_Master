import { createSlice } from "@reduxjs/toolkit";

const initialState={
    category:[
        {
            name:"Matehmetics",
            questions:0,
            answered:0,
            notanswered:0,
            questionstatusarray:[]
        },
        {
            name:"Sports",
            questions:0,
            answered:0,
            notanswered:0,
            questionstatusarray:[]
        },
        {
            name:"GK",
            questions:0,
            answered:0,
            notanswered:0,
            questionstatusarray:[]
        },
        {
            name:"Science",
            questions:0,
            answered:0,
            notanswered:0,
            questionstatusarray:[]
        }
    ]
}

const categorySlice=createSlice({
    name:"category",
    initialState,
    reducers:{
        updatetotalquestions:(state,action)=>{state.category.map((cat)=>{
            if(cat.name===action.payload.name){
                cat.questions=action.payload.questions
            }
        })}
    }
})

export default categorySlice.reducer
export const {updatetotalquestions}=categorySlice.actions