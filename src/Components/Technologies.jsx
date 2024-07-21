import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { IoLogoJavascript } from "react-icons/io";
import { SiMongodb } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { FaJava } from "react-icons/fa";
import {motion} from 'framer-motion'
function Technologies() {
  const container =(duration)=>({
    hidden:{y:-10},
    visible:{
     y:[10,-10],
      transition:{duration:duration, ease:"linear",repeat:Infinity,repeatType:"reverse"},
    }
  })
  return (
   <div className=' border-b border-neutral-900 pb-24'>
    <motion.h1 initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1.5}} className='my-20 text-4xl text-center' >Technologies</motion.h1>
    <motion.div 
    
    whileInView={{x:0,opacity:1}}
    initial={{x:-100,opacity:0}}
     transition={{duration:1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>
     
     <motion.div  variants={container(2)} initial="hidden" animate="visible" className='rounded-2xl border-4 border-neutral-400 p-4'>
        <RiReactjsLine className='text-7xl text-cyan-400 roudned-2xl'></RiReactjsLine>
    </motion.div>
    <motion.div variants={container(6)} initial="hidden" animate="visible" className='rounded-2xl border-4 border-neutral-400 p-4'>
    <IoLogoJavascript  className='text-7xl text-yellow-400 roudned-2xl'/>
    </motion.div>
    <motion.div variants={container(2.5)} initial="hidden" animate="visible" className='rounded-2xl border-4 border-neutral-400 p-4'>
    <SiMongodb className='text-7xl text-green-400 roudned-2xl'/>
    </motion.div>
    <motion.div variants={container(7)} initial="hidden" animate="visible" className='rounded-2xl border-4 border-neutral-400 p-4'>
    <DiNodejs className='text-7xl text-green-400 roudned-2xl' />
    </motion.div>
    <motion.div variants={container(3)} initial="hidden" animate="visible" className='rounded-2xl border-4 border-neutral-400 p-4'>
    <FaJava className='text-7xl text-red-400 roudned-2xl' />
    </motion.div> 

    </motion.div>
   
   </div>

  )
}

export default Technologies