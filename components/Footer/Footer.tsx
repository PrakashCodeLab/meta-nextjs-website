"use client";

import React from 'react';
import './Footer.scss'
import Link from 'next/link';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';
import { Spring, motion, spring } from 'framer-motion';

const Footer = () => {

 const upAnimation ={
  hidden:{
    opacity: 0,
    y:40,
    transition: {type:spring,stiffness:120, damping:80, duration:1}
  },
  show:{
    opacity: 1,
    y:0,
    transition: {type:spring,stiffness:120, damping:80, duration:1}
  },

 }

  return (
    <footer className="footer__container mt-[3rem] mb-[3rem] flex flex-col justify-center items-center relative">
      <div className='absolute gradientfooter'/>
       <motion.div className="footer__section__metaverse flex justify-around max-desktop:flex-col max-desktop:gap-9 items-center w-full pb-[3rem] border-slate-600  border-b-2"
       variants={upAnimation}
       initial='hidden'
       whileInView='show'>
        <h2 className='text-[2rem]  font-extrabold leading-10 capitalize  text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500'>Enter the Metaverse </h2>
        <Link className='btn__footer rounded-full bg-sky-500 text-zinc-100 capitalize  z-10 p-4' href={"/"}>Enter Metaverse </Link>
       </motion.div>

       <div className="footer__meta__section  max-desktop:flex-col max-desktop:gap-5  flex justify-between items-center w-full pt-10 text-white">
        <h2 className='text-lg font-semibold tracking-wide text-slate-950 dark:text-white'>METAVERUS</h2>
        <p className='dark:text-zinc-400 text-slate-900 font-normal text-sm '>Copyright © 2021 - 2022 Metaversus. All rights reserved.</p>
        <ul className="footer__logo__section flex  items-center justify-center gap-5 ">
            <li>
              <Link href={""}><BsTwitter className='text-slate-950 text-base dark:text-white'/></Link>
            </li>
            <li>
              <Link href={""}><BsLinkedin className='text-slate-950 text-base dark:text-white'/></Link>
            </li>
            <li>
              <Link href={""}><BsInstagram className='text-slate-950 text-base dark:text-white'/></Link>
            </li>
            <li>
              <Link href={""}><BsFacebook className='text-slate-950 text-base dark:text-white'/></Link>
            </li>
        </ul>
       </div>
    </footer>
  );
}

export default Footer;
