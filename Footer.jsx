import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-orange-700 text-white flex flex-col items-center justify-center mt-[2vh]'>
        <h1 className='w-full h-[8vh] bg-orange-500 flex items-center justify-center shadow-xl'>Please login to continue</h1>
       <div className='w-full h-[50vh] flex justify-around mt-[6vh] text-slate-200'>
<ul>
    <li className='text-lg font-semibold'>Get to know Us </li>
    <li className='mt-[1vh]'>About Us</li>
    <li>Careers</li>
    <li>Press Releases</li>
    <li>Our services</li>
</ul>
<ul>
    <li className='text-lg font-semibold'>Connect with Us </li>
    <li className='mt-[1vh]'>Facebook</li>
    <li>Twitter</li>
    <li>Instagram</li>
    
</ul>
<ul>
    <li className='text-lg font-semibold'>Make Money with Us</li>
    <li className='mt-[1vh]'>Sell on Shopify</li>
    <li>sell under Shopify Accelerator</li>
    <li>Protect and Build Your Brand</li>
    <li>Become an Affliate</li>
    <li>Fulfilment by Shopify</li>
    <li>Advertise Your Product</li>
    <li>Shopify Pay on Merchants</li>
</ul>
<ul>
    <li className='text-lg font-semibold'>Let Us Help you</li>
    <li className='mt-[1vh]'>COVID-19 and Ourmart</li>
    <li>Your Account</li>
    <li>Return Centre</li>
    <li>100% Purchase Protection</li>
    <li>Help</li>
</ul>
       </div>
       <div className='w-[18vw] h-[12vh] mb-[7vh] flex items-center justify-around text-xl font-bold font-mono'>
<img src='https://i.pinimg.com/474x/3d/59/d8/3d59d8f82ca91378d6108c5fa33805f4.jpg' className='w-[8vw] h-[8vh] rounded-full'/>
<h1>Shopify</h1>
</div>
    </div>
  )
}

export default Footer