
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar';
import Products from './Products';
import Flash from './Flash';
import Mensclothing from './Mensclothing';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
  const settheme=useSelector(state=>state.theme.mode)
  useEffect(()=>{
    if(settheme==='dark'){
      document.querySelector('html').classList.add("dark")
    }else{
      document.querySelector('html').classList.remove("dark")
    }
  })
  return(
    <div className='w-full flex flex-col dark:bg-zinc-700 '>
      <Navbar/>
      
     <Outlet/>
     {/* <input type='text' className='border-2 border-zinc-400 absolute ml-[50vw] mt-[2.5vh]' value={input} onChange={(e)=>setinput(e.target.value)}/>
      <button className='mt-[50vh]' onClick={products}>click</button> 
      <ul className='w-full flex flex-wrap '>
    {data.map((item)=>(
        <li key={item.id}><h1 className='w-full'>{item.title}</h1><img src={item.image} className='h-[30vh] w-[15vw]'/><h2>${item.price}</h2></li>
      ))}</ul> */}
      

    </div>
  )}
//   const[data,sedata]=useState([]);
//   const[alldata,setalldata]=useState([])
//   const[input,setinput]=useState(" ")
// //   const products= async()=>{
// // const getdata=await fetch(`https://fakestoreapi.com/products/category/${input}`);
// // const result=await getdata.json()
// // console.log(result)
// // sedata(result)
// //   }
//   useEffect(()=>{
//     allproduct()
//   },[])

//   const allproduct= ()=>{
//   async()=>{
//   const getdata=await fetch('https://fakestoreapi.com/products');
//   const result=await getdata.json();
//    setalldata(result);
   
//     }
    
   
//   }
//   console.log(alldata)
//   console.log(input)
 
//   return (
//     <div className='w-full h-screen relative'>
//       <Navbar/>
//       {/* <input type='text' className='border-2 border-zinc-400 absolute ml-[50vw] mt-[2.5vh]' value={input} onChange={(e)=>setinput(e.target.value)}/>
//       <button className='mt-[50vh]' onClick={products}>click</button> */}
//       <ul className='w-full flex flex-wrap '>
//       {data.map((item)=>(
//         <li key={item.id}><h1 className='w-full'>{item.title}</h1><img src={item.image} className='h-[30vh] w-[15vw]'/><h2>${item.price}</h2></li>
//       ))}</ul>
//       {/* <ul>{alldata.map((data)=>(
//         <li key={item.id}><h1 className='w-full'>{item.title}</h1><img src={item.image} className='h-[30vh] w-[15vw]'/><h2>${item.price}</h2></li>
//       ))}</ul> */}
//     </div>
//   )
// }

export default App