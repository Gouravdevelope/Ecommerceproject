import React, { useState } from 'react'
import { useSelector ,useDispatch} from 'react-redux'
import { Link,NavLink } from 'react-router-dom'
import { themechange } from './themeSlice';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';




function Navbar() {

const {loginWithRedirect,isAuthenticated,logout,user} = useAuth0();
const[input,setinput]=useState("Dark mode ")
const [number,setnumber]=useState(0)
const cartitems=useSelector(state=>state.cart);

const itemcount=cartitems.length;
const dispatch=useDispatch()
const toggletheme=()=>{
  dispatch(themechange())
  if(number===0){
setinput("Light mode")
setnumber(1)}
else{
  setinput("Dark mode")
  setnumber(0)
}
}

const settheme=useSelector(state=>state.theme.mode);

  useEffect(()=>{
    if(settheme==='dark'){
      document.querySelector('html').classList.add("dark")
    }else{
      document.querySelector('html').classList.remove("dark")
    }
  })

  return (
    <div className='z-20 w-full h-[9vh] border-b-2 border-violet-300 shadow-xl flex items-center fixed font-semibold z-4 bg-zinc-100 text-semibold dark:bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 dark:text-slate-200'>
        <ul className='flex w-[45vw] justify-around'>
          <li><NavLink className={({isActive})=>`${isActive ? "border-b-2 border-[#F9A602]":" border-b-2 border-transparent"}`} to=''>HOME</NavLink></li>
            <li><NavLink to='men' className={({isActive})=>`${isActive ? "border-b-2 border-[#FDE64B]":" border-b-2 border-transparent"}`}>MEN</NavLink></li>
            <li> <NavLink to='women' className={({isActive})=>`${isActive ? "border-b-2 border-[#FF0075]":" border-b-2 border-transparent"}`}>WOMEN</NavLink></li>
            <li><NavLink to='electronic' className={({isActive})=>`${isActive ? "border-b-2 border-[#04BADE]":" border-b-2 border-transparent"}`}>ELECTRONICS</NavLink></li>
            
            
        </ul>
<div className='text-lg w-[15vw] ml-[6vw]'><h1 >Hello! </h1></div>
        <div className='w-[50vw] flex justify-around items-center ml-[15vw]'>
        <h1>Profile</h1>
        <h1>Whishlist</h1>
        <div> 
        <NavLink className= {({isActive})=>`${isActive ? "border-b-2 border-emerald-500":" border-b-2 border-transparent"}`} to='cart' > 
      
       <div className='h-[35h]'> {itemcount > 0 ? (<h1>Bag ({itemcount}) <sup className=' text-[3vw] h-[0.2] text-blue-600'>.</sup></h1>):(<h1>Bag ({itemcount})</h1>)} </div></NavLink>  </div>
       
         {isAuthenticated ? ( <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button>):(<button onClick={()=>loginWithRedirect()}>login</button>)}
        <button onClick={ toggletheme}>{input}</button>
        </div>  
    </div>
  )
}

export default Navbar