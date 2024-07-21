import React from 'react'
import {PROJECTS} from '../constants'
import {motion} from 'framer-motion'
function Projects() {
  return (
    <div className='border-b pb-4 border-neutral-900'>
        <motion.h1 className='text-4xl text-center my-20' initial={{y:-100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:1.5}}> Projects</motion.h1>
        {PROJECTS.map((project,index)=>(
            <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
               <motion.div className='w-full lg:w-1/4' initial={{x:-200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.5}}>
               <img src={project.image} alt={project.title} width={150} height={150} className='mb-6 rounded' />
               </motion.div>
                <motion.div className='w-full max-w-xl lg:w-3/4' initial={{x:200,opacity:0}} whileInView={{x:0,opacity:1}} transition={{duration:1.5}}>
                    <h6 className='mb-2 font-semibold'>{project.title}</h6>
                    <p className='mb-4 text-neutral-400'>{project.description}</p>
                    {project.technologies.map((tech,index)=>(
                        <span key={index} className='text-purple-800 bg-neutral-900 mr-2 mt-4 rounded text-sm font-medium px-2 py-1'>
                            {tech}
                        </span>
                    ))}
                </motion.div>
                
            </div>
        ))}
    </div>
  )
}

export default Projects