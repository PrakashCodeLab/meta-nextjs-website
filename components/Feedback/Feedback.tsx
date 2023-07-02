"use client"

import React from 'react';
import Image from 'next/image';
import BgFeedback from '../../public/planet-06.png';
import Stamp from '../../public/stamp.png';
import "./Feedback.scss";
import { spring,motion } from 'framer-motion';

const Feedback = () => {

  const sideAnimation1={
    hidden:{
      opacity:0,
      x:-100,
      transition: {type:spring, stiffness:120, damping:100  }
    },
    show:{
      opacity:1,
      x:0,
      transition: {type:spring, stiffness:120, delay:1 }
    }
  }

  const sideAnimation2={
    hidden:{
      opacity:0,
      x:100,
      transition: {type:spring, stiffness:50, damping:100 }
    },
    show:{
      opacity:1,
      x:0,
      transition: {type:spring, stiffness:50, delay:1 }
    }
  }

  return (
    <section className="flex justify-center items-center mt-[8rem] mb-[10rem] relative">
      <div  className='gradientfeedback absolute'/>
      <div className="flex items-center max-desktop:flex-col justify-center gap-10 w-full p-8">
        <motion.div className="flex flex-col justify-center items-center w-[400px] max-tablet:w-[300px] h-[400px] rounded-lg p-4 glassmorphism  "
        variants={sideAnimation1}
        initial='hidden'
        whileInView='show'>
          {/* Left Section */}
          <h4 className=" text-xl font-bold mb-2 text-amber-800 capitalize dark:text-white">Samantha</h4>
          <p className="dark:text-slate-300 text-gray-950 mb-4 ">Founder Metaverus</p>
          <p className="dark:text-white text-gray-900 text-center">
            &#34;With the development of today&apos;s technology, metaverse is very useful for today&apos;ls work, or can be called web 3.0. By using metaverse, you can use it for anything.&#34;
          </p>
        </motion.div>
        <motion.div  className="w-[400px] h-[400px] max-tablet:w-[300px] "
        variants={sideAnimation2}
        initial='hidden'
        whileInView='show'>
          {/* Image */}
          <Image src={BgFeedback} alt="" className="rounded-lg object-cover w-full h-full" />
          {/* Stamp */}
          <div className="absolute top-[30%] max-desktop:top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={Stamp} alt="" className="w-[6rem] h-[6rem]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Feedback;
