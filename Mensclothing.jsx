import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { add } from './todoslice';

function Mensclothing() {
  const dispatch=useDispatch()
    const [getdata,setgetdata]=useState([])
const products= async()=>{
const data= await fetch("https://fakestoreapi.com/products/category/men's clothing");
const realdata= await data.json();
setgetdata(realdata)
}

useEffect(()=>{
    products()
},[])
console.log(getdata)
const addhandle=(getdata)=>{
  dispatch(add(getdata))
}
const settheme=useSelector(state=>state.theme.mode)
useEffect(()=>{
  if(settheme==='dark'){
    document.querySelector('html').classList.add("dark")
  }else{
    document.querySelector('html').classList.remove("dark")
  }
})
  return (
    <div className='w-full bg-zinc-200 dark:bg-slate-900 dark:text-zinc-900'>
      <div   className=' mt-[8vh] w-full h-[60vh] border-b-2 border-zinc-400 flex items-center justify-center relative overflow-hidden '>
      <div className='w-full flex items-center justify-around h-[60vh]'>
      <div className='w-[100vw] h-[60vh] bg-gradient-to-r from-[#FFFF00] to-[#FDE64B] flex items-center flex-col justify-center '>
        <h1 className='text-[4vw] font-semibold'>50% off on all</h1>
        <h1 className='text-[4vw] font-semibold'>Men's Wear</h1>
        <button className='text-[1.9vw] bg-[#F9A602] w-[12vw] rounded-2xl text-white shadow-2xl'>Order Now</button>
        </div>
      <img src='https://img.freepik.com/free-photo/concept-mobile-banking-cashback-surprised-man-holding-shopping-bags-smartphone-standing-yellow-background_1258-40983.jpg?w=996&t=st=1710476726~exp=1710477326~hmac=9c73dd2fc798df061cd5d34c6d6cb4ae53bcd9bfe29a2e1d49d092194cbc1c5a

' className=' h-[60vh] w-[50vw]'/>
      </div>
       </div>
       <div className='bg-white w-[6vw] h-[12vh] rounded-full ml-[46vw] rotate-90 animate-bounce flex items-center justify-center dark:bg-slate-400'>
       <img src='https://cdn-icons-png.freepik.com/512/54/54572.png' className='h-[10vh]'/></div>
      {getdata.length===0 ? (
        <div className='w-full h-[60vh] flex items-center justify-center text-lg'>
          <h1>Loading...</h1>
        </div>
      ):(
<ul className='mt-[15vh] w-full flex justify-evenly flex-wrap gap-[4vh]'>{getdata.map((get)=>(
     <li key={get.id} className='bg-zinc-100  h-[45vh] w-[25vw] flex flex-col items-center shadow-xl justify-evenly p-2 rounded-xl dark:bg-slate-800 dark:text-slate-200'><img src={get.image} className='h-[20vh] w-[9vw]'/><h1 className='font-semibold text-lg h-[4vh] w-[12vw] text-ellipsis overflow-hidden '>{get.title}</h1>
     <h2 className='font-bold'> $ {get.price}</h2> 
     <h2> rating {get.rating.rate}/5</h2><button className='border-2 bg-[#FDA50F] w-[8vw] h-[5vh] rounded-lg text-white hover:bg-orange-600 dark:bg-sky-700 dark:border-blue-900' onClick={()=>addhandle(get)}>Add to cart </button></li>
))}</ul>)}
    </div>
  )
}

export default Mensclothing