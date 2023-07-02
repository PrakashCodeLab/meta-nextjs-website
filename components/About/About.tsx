"use client";

import React, { useEffect } from 'react';
import "./About.scss";
import Link from 'next/link';
import Heading from '../Heading/Heading';
import { motion } from "framer-motion";





const About = () => {
  
  const item = {
    
    hidden: {
      opacity: 0,
      y: 50,
      transition: { type: "spring", stiffness: 300, damping: 140 },
    },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, delay: 0.5 },
    },
  }; 
  

  return (
    <motion.section className='pt-[15rem] flex flex-col justify-center items-center'
    variants={item}
    initial="hidden"
    whileInView="show">
      <div className='about__link '>
        <Heading head={"About Metaverus"}/>
      </div>
      
      <div className="about__content mt-6">
        <p
          className='w-[962px] max-desktop:w-[400px] text-[1.3rem] text-justify font-light leading-[3rem] text-slate-950 dark:text-white'
           // Add the data-aos attribute to trigger the fade-up animation
        >
          Metaverse is a new thing in the future, where you can enjoy the virtual world by feeling like it&apos;s really
          real, you can feel what you feel in this metaverse world, because this is really the madness of the metaverse
          of today, using only VR devices you can easily explore the metaverse world you want, turn your dreams into
          reality. Let&apos;s explore the madness of the metaverse by scrolling down
        </p>
      </div>
    </motion.section>
  );
}

export default About;
