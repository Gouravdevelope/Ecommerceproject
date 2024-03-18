import { createSlice } from "@reduxjs/toolkit";

const initialState={
    mode:'light',
}

const theme=createSlice({
    name:'mode',
    initialState,
    reducers:{
        themechange:(state)=>{
            state.mode=state.mode==='light' ? 'dark':'light'
        }
    }
})

export const{themechange}=theme.actions;
export default theme.reducer