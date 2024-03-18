import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { remove } from './todoslice';
import { increaseQuantity } from './cartslice';

function Cart() {
  const dispatch=useDispatch();
  const mydata2=useSelector((state)=>state.itemscart)
  const[count,setcount]=useState(0)
    const mydata=useSelector((state)=>state.cart)
    console.log(mydata)
const deletehandle=(id)=>{
  dispatch(remove(id))
}

const increase=(productId)=>{
  dispatch(increaseQuantity({productId}))
}


  return (
    
    <div className='w-full flex flex-col bg-zinc-200 items-center h-[200vh] dark:bg-slate-900 dark:text-white '>
      {mydata.length===0 ?(
        <div className='w-full h-[80vh] mt-[20vh] flex items-center justify-center flex-col'>
          <h1 className=' font-bold text-[4vw] animate-pulse'>Nothing here... </h1>
          <img src='/cartimage.png' className='mt-[10vh] h-[60vh] rounded-xl'/>
        </div>

      ):(
      <ul className='mt-[20vh]'>{mydata.map((item)=>(
        <li key={item.id} className='mt-[5vh] bg-white flex  items-center gap-[8vw] w-[80vw] px-[5vw] h-[15vh] rounded-xl shadow-2xl dark:bg-slate-800 dark:text-slate-200'><img className='h-[12vh] w-[5vw]' src={item.image}/>
        <h1 className='bg-white w-[15vw] text-lg font-semibold h-[4vh] overflow-hidden dark:bg-slate-800 dark:text-slate-200'>{item.title}</h1>
        <h2 className='text-lg font-semibold bg-white w-[8vw] dark:bg-slate-800 dark:text-slate-200'>Price: $ {item.price}</h2>
        {item.id}-quantity:{item.quantity}
        <button onClick={()=>increase(item.id)}>+</button>
        <button className='rounded-xl text-white w-[8vw] h-[5vh] text-lg font-bold bg-emerald-500 dark:bg-sky-700 dark:border-blue-900'>Buy now</button>
        
        
        <button className='rounded-xl text-white w-[8vw] h-[5vh] text-lg font-bold bg-red-500' onClick={()=>deletehandle(item.id)}>Remove</button>
        </li>
    ))}</ul>)}</div>
  )
}

export default Cart