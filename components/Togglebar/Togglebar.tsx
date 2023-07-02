"use client";

import { useTheme } from 'next-themes';
import React from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';

const Togglebar = () => {


    const {theme , setTheme}=useTheme();


  return (
    <div className='w-[100px] mr-5 flex justify-around items-center h-[30px] rounded-md bg-green-900 gap-[10px]'>
       <BsFillSunFill role='button' onClick={()=>setTheme("light")} className='cursor-pointer text-gray-300 hover:bg-teal-700'/>
       <BsFillMoonStarsFill role='button' onClick={()=>setTheme("dark")} className='cursor-pointer text-gray-900  hover:bg-teal-700 z-20'/>
      
    </div>
  );
}

export default Togglebar;
