import React from 'react'
import { ABOUT_TEXT } from '../constants'
import {motion} from 'framer-motion'
import aboutImg from '../assets/about.jpg'
function About() {
    const container =(delay,xfrom,xto)=>({
        hidden:{x:xfrom,opacity:0},
        visible:{
          x:xto,
          opacity:1,
          transition:{duration:0.5, delay: delay},
        }
      })
    return (
        <div className='border-b  pb-4 border-neutral-900'>

            <h1 className='my-20 text-center text-4xl'>About
                <span className='mx-2 text-neutral-500'>
                    Me
                </span>
            </h1>
            <div className='flex flex-wrap'>
                <motion.div variants={container(.25,-100,0)} initial="hidden" whileInView="visible"  className=' w-full lg:w-1/2  lg:p-8'>
                    <div className='flex justify-center items-center'>
                        <img src={aboutImg} className="rounded-2xl" alt="" />
                    </div>

                </motion.div>
                <motion.div variants={container(.5,100,0)} initial="hidden" whileInView="visible" className=' w-full lg:w-1/2'>
                    <div className='flex justify-center lg:justify-start'>
                        <p className='my-2 max-w-xl py-6'>
                            {ABOUT_TEXT}
                        </p>

                    </div>
                </motion.div>

            </div>

        </div>
    )
}

export default About