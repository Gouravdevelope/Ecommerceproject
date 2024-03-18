import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from './todoslice';


function Womenclothing() {
 
    const [getdata,setdata]=useState([]);
    const products=async()=>{
        const api= await fetch("https://fakestoreapi.com/products/category/women's clothing");
        const data=await api.json();
        setdata(data);
    }
    useEffect(()=>{
        products()
},[]);

const settheme=useSelector(state=>state.theme.mode)
  useEffect(()=>{
    if(settheme==='dark'){
      document.querySelector('html').classList.add("dark")
    }else{
      document.querySelector('html').classList.remove("dark")
    }
  })
const dispatch=useDispatch();
 const addhandle=(getdata)=>{
  dispatch(add(getdata))
 }

 
  return (
    <div className='w-full bg-zinc-200 dark:bg-slate-900  dark:text-slate-200'>
      <div   className=' mt-[8vh] w-full h-[60vh] border-b-2 border-zinc-400 flex items-center justify-center relative overflow-hidden'>
      <div className='w-full flex items-center justify-around h-[60vh]'>
      <div className='w-[110vw] h-[60vh] bg-gradient-to-r from-[#FF0075] to-[#FC8CAF] flex items-center flex-col justify-center '>
        <h1 className='text-[4vw] font-semibold'>50% off on all</h1>
        <h1 className='text-[4vw] font-semibold'>Women's Wear</h1>
        <button className='text-[1.9vw] bg-[#FC8EAC] w-[12vw] rounded-2xl text-white shadow-2xl'>Order Now</button>
        </div>
      <img src='https://i.pinimg.com/564x/ea/34/82/ea34826aa14dfdaa7840ee0a59bfcfc6.jpg

' className=' h-[65vh] w-[50vw]'/>
      </div>
       </div>
       <div className='bg-white w-[6vw] h-[12vh] rounded-full ml-[46vw] rotate-90 animate-bounce flex items-center justify-center dark:bg-slate-400'>
       <img src='https://cdn-icons-png.freepik.com/512/54/54572.png' className='h-[10vh]'/></div>
      {getdata.length===0 ?(
        <div className='w-full h-[60vh] text-lg flex items-center justify-center'>
          <h1>Loading...</h1>
        </div>
      ):(
        <ul className='mt-[15vh] w-full flex justify-evenly flex-wrap gap-[4vh]'>{getdata.map((get)=>(
        <li key={get.id} className='bg-zinc-100 h-[45vh] w-[25vw] flex flex-col items-center shadow-xl justify-evenly p-2 rounded-xl dark:bg-slate-800 dark:text-slate-200'>
          <img src={get.image} className='h-[20vh] w-[9vw]'/><h1 className='font-semibold text-lg h-[4vh] w-[12vw] text-ellipsis overflow-hidden '>{get.title}</h1>
          <h2 className='font-bold'> $ {get.price}</h2> <h2> rating {get.rating.rate}/5</h2>
          <button className='border-2 bg-[#FF0075] w-[8vw] h-[5vh] rounded-lg text-white hover:bg-pink-500 dark:bg-sky-700 dark:border-blue-900' onClick={()=>addhandle(get)}>Add to cart </button></li>
        
    ))}</ul>)}</div>
  )
}

export default Womenclothing