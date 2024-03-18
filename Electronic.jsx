import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { add } from './todoslice';

function Electronic() {
    const [getdata,setdata]=useState([]);
    const dispatch=useDispatch()

    const Products= async()=>{
        const data= await fetch("https://fakestoreapi.com/products/category/electronics");
        const get=await data.json();
        setdata(get);
    }
    useEffect(()=>{
        Products()
    },[])
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
<div className='w-full bg-zinc-200 dark:bg-slate-900 dark:text-slate-200'>
<div   className=' mt-[8vh] w-full h-[60vh] border-b-2 border-zinc-400 flex items-center justify-center relative overflow-hidden dark:text-zinc-900'>
      <div className='w-full flex items-center justify-around h-[60vh]'>
      <div className='w-[60vw] h-[60vh] bg-gradient-to-r from-[#55E2E9] to-[#04BADE]  flex items-center flex-col justify-center '>
        <h1 className='text-[4vw] font-semibold'>70% off on all</h1>
        <h1 className='text-[4vw] font-semibold'>Family Wear</h1>
        <button className='text-[1.9vw] bg-[#006CA5] w-[12vw] rounded-2xl text-white shadow-2xl'>Order Now</button>
        </div>
      <img src='https://media.istockphoto.com/id/1328836875/vector/realistic-electronic-devices-and-gadgets-in-isometry-vector-isometric-illustration-of.jpg?s=2048x2048&w=is&k=20&c=vBEFVUpx9YUYNJTANZ_lC7EVMJPwIyKIq3vU2WkWu5s=
' className=' h-[100vh] w-[50vw] mt-[35vh] '/>
      </div>
       </div>
       <div className='bg-white w-[6vw] h-[12vh] rounded-full ml-[46vw] rotate-90 animate-bounce flex items-center justify-center dark:bg-slate-400'>
       <img src='https://cdn-icons-png.freepik.com/512/54/54572.png' className='h-[10vh]'/></div>
  {getdata.length === 0 ? (
     <div className='w-full h-[60vh] flex items-center justify-center text-lg '>
<h1>Loading...</h1>
    </div>
      ):(
<ul className='mt-[12vh] w-full flex justify-evenly flex-wrap gap-[4vh]'>{getdata.map((get)=>(
     <li key={get.id} className='bg-zinc-100 h-[45vh] w-[25vw] flex flex-col items-center shadow-xl justify-evenly p-2 rounded-xl dark:bg-slate-800 dark:text-slate-200'><img src={get.image} className='h-[20vh] w-[9vw]'/>
     <h1 className='font-semibold text-lg h-[4vh] w-[12vw] text-ellipsis overflow-hidden '>{get.title}</h1>
     <h2 className='font-bold'> $ {get.price}</h2> 
     <h2> rating {get.rating.rate}/5</h2>
     <button onClick={()=>addhandle(get)} className='border-2 bg-[#04BADE] w-[8vw] h-[5vh] rounded-lg text-white hover:bg-sky-700 dark:bg-sky-700 dark:border-blue-900'>Add to cart </button>
     </li>
))}</ul>)}
    </div>
  )
}

export default Electronic