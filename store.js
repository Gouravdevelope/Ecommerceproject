import { configureStore,combineReducers } from "@reduxjs/toolkit";
import cartReducer from './todoslice'
import themeReducer from './themeSlice'
import cartitemReducer from './cartslice'

const rootreducer=combineReducers({
    theme:themeReducer,
    cart:cartReducer,
    itemscart:cartitemReducer
})

const store=configureStore({
    reducer:rootreducer

})

export default store;














// import { configureStore } from "@reduxjs/toolkit";
// import todoReducer from './todoslice'


// const savedata=(state)=>{
//     try{
//         const data=JSON.stringify(state);
//         localStorage.setItem('state',data)
//     }
//     catch(e) {
//         console.log("errrrrrr")
//     }
// };
//  const getdata=()=>{
//     try{
//         const data=localStorage.getItem('state');
//         if(data===null) return undefined;
//         return JSON.parse(data);
//     }
//     catch (e){
//         console.log("error")
//     }
//  }

//  const persistedstate=getdata();

//  const store=configureStore({
//    reducer:todoReducer,
//     preloadedState: persistedstate
//  })
//  store.subscribe(()=>savedata(store.getState()));

//  export default store;