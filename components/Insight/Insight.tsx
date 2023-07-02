"use client";

import React from 'react';
import imgPlanet1 from "../../public/planet-03.png";
import imgPlanet2 from "../../public/planet-04.png";
import imgPlanet3 from "../../public/planet-05.png";
import Image from 'next/image';
import { BsArrowUpRightCircle } from 'react-icons/bs';
import "./Insight.scss"
import Heading from '../Heading/Heading';
import { motion, spring } from 'framer-motion';
const InsightItems=[
    {id:1, heading:"The launch of the Metaverse makes Elon musk ketar-ketir", img:imgPlanet1, para:"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique."},

    {id:2, heading:"7 tips to easily master the madness of the Metaverse", img:imgPlanet2, para:"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum"},

    {id:3, heading:"With one platform you can explore the whole world virtually", img:imgPlanet3, para:"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem"},

]


const Insight = () => {

  
 const animation1={
  hidden:{
    opacity: 0,
    x:-100,
    transition: {type:spring,stiffness:120,damping:80, duration:1}
  },
  show:{
    opacity: 1,
    x:0,
    transition: {type:spring,stiffness:120, delay:0.4 , duration:1.3}
  },
 }



  return (
    <section className='insight__container w-full flex flex-col justify-center  items-center mt-[8rem] relative'>
      <div className='absolute gradient-insight' />
      <Heading head={"insight"}/>
       <h2 className='w-[962px] text-center max-desktop:w-[400px] text-[64px] font-bold mb-5 capitalize  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500'>Insight about metaverse</h2>
       <div className="insight__content__containe w-full flex flex-col gap-[2rem] justify-center items-center">
          {
            InsightItems.map((item=>(
              
              <motion.div key={item.id} className="insight__section flex w-full max-desktop:flex-col max-desktop:gap-[2rem] justify-around items-center mt-6"
              initial='hidden' 
              variants={animation1}
              whileInView='show' >
                     <div className="img w-[180px] h-[150px] ">
                          <Image className='w-full h-full object-cover brightness-100 rounded-lg' src={item.img} alt=""/>
                      </div> 
                      <div className="content flex flex-col justify-center items-center">
                          <h4 className='w-[646px] max-desktop:w-[400px] dark:text-white text-gray-950 text-[2rem] font-normal leading-[2rem]'>{item.heading}</h4>
                          <p className='w-[646px] max-desktop:w-[400px]  dark:text-white text-blue-900 text-[1rem] pt-5 font-normal leading-[2rem] tracking-wide'>{item.para}</p>
                      </div>
                      <div className="logo w-[60px] h-[60px]   flex justify-center items-center">
                        <BsArrowUpRightCircle size={60}  />
                      </div>
              </motion.div>
            )))
          }

       </div>
    </section>
  );
}

export default Insight;
