"use client";

import React from "react";
import "./Navbar.scss";
import { Bars3BottomRightIcon  ,MagnifyingGlassIcon} from "@heroicons/react/24/solid";
import {Roboto_Slab} from "next/font/google"
import { motion } from "framer-motion";
import Togglebar from "../Togglebar/Togglebar";
const RobotoSlab =  Roboto_Slab({subsets:['latin']});


const item = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: { type: "spring", stiffness: 80, damping: 200 },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 80, delay: 0.5 },
  },
};


const Navbar = () => { 
  return (
    <motion.nav 
    className="navbar__container  max-laptop:justify-around  "
    variants={item}
    initial="hidden"
    whileInView="show"
    >
      <div className="absolute w-[40%] h-[40%] inset-x-0.5 gradient-01 max-laptop:hidden" />
      <div className="navbar__search__section max-laptop:hidden">
      <MagnifyingGlassIcon className="h-6 w-6  text-slate-800 dark:text-white  " />
      </div>

      <div className={`navbar__logo ${RobotoSlab.className} text-slate-800 dark:text-white uppercase font-extrabold text-[1.5rem]`}>METAVERSUS</div>

      <div className="hamburger__navbar flex justify-center items-center">
     
           <Togglebar/>
         <Bars3BottomRightIcon className="h-6 w-6 ml-4 dark:text-white  text-slate-800 font-semibold"   />

      </div>
    </motion.nav>
  );
};

export default Navbar;
