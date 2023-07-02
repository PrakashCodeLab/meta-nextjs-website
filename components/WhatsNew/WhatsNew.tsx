'use client';
import React from 'react';
import './WhatsNew.scss';
import Image from 'next/image';
import newImage from '../../public/whats-new.png'
import { BanknotesIcon }  from "@heroicons/react/24/outline";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
import Heading from '../Heading/Heading';
import { Spring , motion, spring } from 'framer-motion';



const WhatsNew = () => {
 

  const animation1 ={
    hidden:{opacity: 0,
             x:-60,
            transition: {type:spring,stiffness:80,damping:100 ,duration:1},
          },
    show:{
      opacity: 1,
      x:0,
     transition: {type:spring,stiffness:80,damping:100,delay:0.7}
    }
  };

  const animation2 ={
    hidden:{opacity: 0,
             x:60,
            transition: {type:spring,stiffness:80,damping:100,duration:1},
          },
    show:{
      opacity: 1,
      x:0,
     transition: {type:spring,stiffness:80,damping:100,delay:1}
    }
  };
 
  



  return (
    <section className='whatsnew__container mt-[8rem] max-desktop:flex-col  flex justify-center items-center gap-[3rem] w-[full] relative'>
      <div className='gradientwhatnew absolute'  />
       <motion.div className="whatsnew__content__container flex-1 flex flex-col justify-center max-laptop:w-[350px]"
       variants={animation1}
       initial='hidden'
       whileInView='show'>
          <div className="whatsnew__content__heading ">
           <Heading head={"what's new "}/>
            <h4 className='text-[3rem] leading-[3.5rem] pt-4  font-bold w-[500px] max-laptop:w-[300px] pb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500'>What&apos;s new about Metaversus?</h4>
          </div>
          <div className="whatsnew__content__list flex justify-start items-start gap-[2rem] mt-8 ml-4 max-laptop:flex-col">
              <div className="whatsnew__list__one flex flex-col justify-start items-start  w-[300px] gap-4 ">
                <p className='bg-zinc-600 rounded-xl w-[50px] h-[50px] flex justify-center items-center '><BanknotesIcon className="h-6 w-6 text-white " /></p>
                <h4 className='dark:text-white text-gray-900 text-[24px] font-bold'>A new world</h4>
                <p  className='w-[213px] dark:text-zinc-400 text-gray-950 text-[16px] font-normal leading-7'>we have the latest update with new world for you to try never mind</p>
              </div>
              <div className="whatsnew__list__one flex flex-col justify-start items-start gap-4">
           <p className='bg-zinc-600  rounded-xl w-[50px] h-[50px] flex justify-center items-center'>
            <RocketLaunchIcon className="h-6 w-6 text-white" /></p>
                <h4 className='dark:text-white text-slate-900 text-[24px] font-bold'>More realistic</h4>
                <p className='w-[213px] dark:text-zinc-400 text-slate-900 text-[16px] font-normal leading-7'>In the latest update, your eyes are narrow, making the world more realistic than ever</p>
              </div>
          </div>
       </motion.div>
       <motion.div className="whatsnew__image__container flex-1 justify-center flex "
       variants={animation2}
       initial='hidden'
       whileInView='show'> 
          <Image src={newImage} className='w-full h-[400px] object-contain' alt="whats new image "/>
        </motion.div>
    </section>
  );
}

export default WhatsNew;
