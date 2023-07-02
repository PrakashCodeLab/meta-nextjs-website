"use client"

import React from 'react';
import "./Explore.scss";
import Link from 'next/link';
import planet1 from "../../public/planet-01.png";
import planet2 from "../../public/planet-02.png";
import planet3 from "../../public/planet-03.png";
import planet4 from "../../public/planet-04.png";
import planet5 from "../../public/planet-05.png";
import planet6 from "../../public/planet-06.png";
import planet7 from "../../public/planet-07.png";
import planet8 from "../../public/planet-08.png";
import planet9 from "../../public/planet-09.png";
import Image from 'next/image';
import Heading from '../Heading/Heading';
import {spring ,motion } from "framer-motion"


const ImageItems=[
     {title:"The Hogwarts",image:planet1, id:1,},
     {title:"The Upside Down",image:planet2, id:2,},
     {title:"Kadirojo Permai",image:planet3, id:3,},
     {title:" Paradise Island",image:planet4, id:4,},
     {title:"Hawkins Labs",image:planet5, id:5,},
     {title:"Hawkins Labs",image:planet6, id:6,},
     {title:"Hawkins Labs",image:planet7, id:7,},
     {title:"Hawkins Labs",image:planet8, id:8,},
     {title:"Hawkins Labs",image:planet9, id:9,},

];


const animation1={
  hidden:{
    opacity: 0,
    y:60,
    transition: {type:spring,stiffness:120,damping:80}
  },
  show:{
    opacity:1,
    y:0,
    transition: {type:spring,stiffness:120,delay:0.7}
  }
  
}



const Explore = () => {
  return (
    <motion.section className='relative pt-[9rem] flex flex-col justify-center items-center '
    variants={animation1}
    initial="hidden"
    whileInView='show'>
        <div className='gradient-03 absolute '/>
      <div className="explore__content flex flex-col justify-center items-center ">
       <Heading head={"the world"}/>
        <p className="w-[885px] max-laptop:w-[400px] text-center  text-white max-laptop:text-[2.5rem]  text-[64px] font-bold text__gradient">Choose the world you want to explore</p>
      </div>

      <div  className='mt-[2rem] explore__image max-laptop:grid-flow-col'>{
         ImageItems.map((Items)=>(
             <div  className='explore__container ' key={Items.id}>
               
               <Image className='image__explore__container' src={Items.image} alt="image"/>
               <p className='absolute   leading text-white text-base capitalize font-medium '>{Items.title}</p>
             </div>
              
             
         ))
        
        }
       
      </div>
    </motion.section>
  );
}

export default Explore;
