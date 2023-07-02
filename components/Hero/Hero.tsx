"use client";

import React from "react";
import "./Hero.scss";
import { AiOutlineReddit } from "react-icons/ai";
import { BsDiscord } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import Image from "next/image";
import Stamp from "../../public/stamp.png";
import Link from "next/link";
import Heading from "../Heading/Heading";
import {  motion } from 'framer-motion';




const Hero = () => {
  return (
    
    <motion.section className="hero__section" 
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    transition = {{
      duration: 0.5, // Animation duration in seconds
      delay: 1, // Delay before the animation starts in seconds
    }}>
      <div className="hero-gradient"></div>
      <div className="gradient-02"></div>
      <div className="hero__section__one  max-desktop:flex-col max-desktop:gap-[2rem]">
        <div className="hero__one__home  pl-1">
          <Heading head={"home"}/>
        </div>

        <div className="hero__sec__content" >
          <h2 className="text-white text-[6rem] max-laptop:text-[3.5rem]  font-bold leading-[8rem] text__gradient">METAVERSE</h2>
          <h2 className="dark:text-white   text-[6rem]  max-laptop:text-[3.5rem] font-bold leading-[7rem]  tracking-tighter  hero__lead  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">MA  <span className="hero__d "></span> NESS</h2>
          
          </div>

        <div className="hero__one__logo flex flex-col gap-6  max-desktop:flex-row">
          <Link href="" > <AiOutlineReddit  className="dark:text-white " size={27}/></Link>
          <Link href="" ><BsDiscord   size={27} /></Link>
          <Link href="" > <AiOutlineTwitter   size={27}/></Link>
          <Link href="" > <AiOutlineInstagram   size={27} /></Link>
         
          
         

         
        </div>
      </div>
      <motion.div className="hero__section__two max-desktop:w-[100%]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition = {{
        duration: 1, // Animation duration in seconds
        delay: 1.2, // Delay before the animation starts in seconds
      }}>
          <Image  className="w-[200px]  object-contain h-[200px] absolute bottom-[-100px] right-[20%]  hover:rotate-12"  src={Stamp} alt="image stamp" />

      </motion.div>
    </motion.section>

  );
};

export default Hero;
