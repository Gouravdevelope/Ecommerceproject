import { createSlice } from "@reduxjs/toolkit";

const initialState=[]
    

const cartslice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter(items=>items.id!==action.payload)
        },
        
    }
})

export const {add,remove}=cartslice.actions;
export default cartslice.reducer;