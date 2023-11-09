import React from 'react'
import { motion } from 'framer-motion'

function Skills() {
  return (
    <motion.div 
    initial={{opacity:0}} animate={{opacity:1, transition:{duration:.5}}}
    className='w-full flex gap-20'>
    <div className='w-1/2'>
    <div className='py-12 font-titleFont flex flex-col gap-4'>
    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
    <h2 className='text-4xl font-bold'>Design Skills</h2>
  </div>
<div className=' mt-30 w-full flex flex-col gap-4'>
  <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>Photoshop</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
        className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
        to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>100%</span>
       </motion.span>
    </span>
    </div>
    <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>FIGMA</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span 
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
      className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
       to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>90%</span>
       </motion.span>
    </span>
    </div> 
    <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>ADOBE XD</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span 
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
      className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-pink-500
       to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>60%</span>
       </motion.span>
    </span>
    </div>
    <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>ADOBE ILLUSTRATOR</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span 
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
      className='w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500
       to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>70%</span>
       </motion.span>
    </span>
    </div>
    <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>DESIGN</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span 
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
      className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500
       to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>95%</span>
       </motion.span>
    </span>
    </div>      
  </div>
</div>

{/* Development Skills div start here*/} 

    <div className='w-1/2'>
    <div className='py-12 font-titleFont flex flex-col gap-4'>
    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
    <h2 className='text-4xl font-bold'>Development Skills</h2>
</div>
  <div className=' mt-30 w-full flex flex-col gap-4'>
  <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>REACT</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
        className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500
        to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>100%</span>
       </motion.span>
    </span>
    </div>
    <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>HTML 5</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span 
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
      className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500
       to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>95%</span>
       </motion.span>
    </span>
    </div> 
    <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>CSS 3</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span 
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
      className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-pink-500
       to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>80%</span>
       </motion.span>
    </span>
    </div>
    <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>JavaScript</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span 
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
      className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500
       to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>75%</span>
       </motion.span>
    </span>
    </div>
    <div className='overflow-x-hidden'>
    <p className='text-sm uppercase font-medium'>Software</p>
    <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
      <motion.span 
        initial={{x: '-100%', opacity: 0}}
        animate={{x: 0, opacity: 1 }}
        transition={{duration: 0.5, delay: 0.5}}
      className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500
       to-red-500 rounded-sm relative'>
        <span className='absolute -top-7 right-0'>90%</span>
       </motion.span>
    </span>
    </div>      
  
    </div>
    </div>
    </motion.div>

  )
}

export default Skills
