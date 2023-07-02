"use client"

import React from 'react';
import "./World.scss";
import Image from 'next/image';
import WorldImg from "../../public/map.png";
import peopleImg1 from "../../public/people-01.png";
import peopleImg2 from "../../public/people-02.png";
import peopleImg3 from "../../public/people-03.png";
import Heading from '../Heading/Heading';
import { spring ,motion } from 'framer-motion';

const World = ()=> {

  const items = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: { type: spring, stiffness: 40, damping: 10 },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: spring, stiffness: 40, delay: 0.4 },
    },
  };



  return (
    <motion.section className='world__container W-full flex flex-col justify-center items-center mt-[10rem]'
    variants={items}
    initial="hidden"
    whileInView="show">
      <div className='gradientwoorld absolute '/>   
      <div className="worlds__content__section flex flex-col justify-center items-center gap-5 ">
        <Heading head={"How Metaverus Works"}/>
         <h3 className='w-[962px] max-desktop:w-[400px] max-desktop:text-[2.5rem] text-center text-white text-[64px] font-bold text__gradient'>Track friends around you and invite them to play together in the same world</h3>
      </div>
      <div className="worlds__image__container relative mt-5 w-[962px] bg-gray-600 dark:bg-gray-900 max-laptop:w-[500px] max-tablet:w-[400px] h-[500px] ">
        <Image className='w-[100%] h-[100%] top-0 left-0 object-cover ' src={WorldImg} alt="img"/>
        <Image className='absolute z-10 top-[100px] max-laptop:top-[80%]  left-[200px] w-8 h-8 ' src={peopleImg1} alt="img"/>
        <Image className='absolute z-10 top-[200px] left-[600px] w-8 h-8 max-laptop:hidden' src={peopleImg2} alt="img"/>
        <Image className='absolute z-10 top-[300px] left-[120px] w-8 h-8 ' src={peopleImg3} alt="img"/>
      </div>
    </motion.section>
  );
}

export default World;
