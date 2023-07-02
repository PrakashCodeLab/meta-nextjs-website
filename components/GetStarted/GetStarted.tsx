"use client";

import React from 'react';
import "./GettStarted.scss";
import Image from 'next/image';
import Started from "../../public/get-started.png";
import Heading from '../Heading/Heading';
import { spring ,motion } from 'framer-motion';



const getItems=[
      {id:1,para:"Find a world that suits you and you want to enter"},
      {id:2,para:"Enter the world by reading basmalah to be safe"},
      {id:3,para:"No need to beat around the bush,just stay on the gas and have fun"}

]


const GetStarted = () => {

  const animation = {
    hidden: { opacity: 0, x: -60, transition: { type: spring, stiffness: 200, damping: 70 }},
    show: { opacity: 1, x: 0, transition: { type: spring, stiffness: 200, delay: 0.5 }},
  };

  const animation2 = {
    hidden: { opacity: 0, x: 60, transition: { type: spring, stiffness: 200, damping: 70 }},
    show: { opacity: 1, x: 0, transition: { type: spring, stiffness: 200, delay: 0.5 }},
  };



  return (
    <section className='getStarted__container w-full  max-desktop:flex-col  relative flex flex-row justify-center items-center gap-[3rem] mt-[8rem] '>
      <div className='gradient4 ' />
       <motion.div className='getStarted__image__container flex-1   flex justify-center items-center'
       variants={animation}
       initial="hidden"
       whileInView="show">
        <Image src={Started} className='getStarted__image__frame w-[400px] h-[400px] max-laptop:w-[300px] object-contain'  alt="image" />
       </motion.div>
       <motion.div className='getStarted__content__container flex-1 flex justify-start items-start flex-col max-laptop:w-[300px]'
       variants={animation2}
       initial="hidden"
       whileInView="show"
       >
        <Heading head={"How Metaverus Works"}/>
        <p className='w-[471px] max-tablet:w-[300px] max-tablet:text-[2.5rem]  text-[3rem] capitalize  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500   font-bold leading-[4rem] mt-3 pb-8'>Get started with just a few clicks</p>
         <ul className='flex flex-col justify-start items-start '>{getItems.map((items)=>(
           <li className='flex justify-center items-center gap-4 py-2 px-8' key={items.id}><span className='border-none w-[50px] h-[50px] rounded-lg  flex justify-center items-center bg-slate-400 '>{items.id}</span> <p className='dark:text-zinc-400  text-slate-900 text-sm'>{items.para}</p> </li>
         ))}</ul>
       </motion.div>
    </section>
  );
}

export default GetStarted;
