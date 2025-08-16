import {useEffect, useRef} from 'react'
import profile from '../assets/aboutImg.jpg'
import { motion,useInView,useAnimation} from "framer-motion"
import {Popover} from 'flowbite-react';

export default function AboutMe() {

  const imgRef = useRef(null);

  const isimgView = useInView(imgRef);
  const modify = useAnimation();

  useEffect(()=>{
    if(isimgView){
      modify.start('visible');
    }
    else{
      modify.start('hidden');
    }
  })
  return (
    <div className='pt-32 min-h-screen'>
      <motion.div className='max-w-5xl mx-auto border border-green-400 rounded-lg p-7'  style={{background:'rgba(241, 241, 245, 0.1)'}} ref={imgRef}
      
      animate = {modify}
      initial = 'hidden'
      variants={{
        hidden: {opacity: 0, transform: "translateY(-75%)", filter: "blur(25px)"} ,
        visible: {opacity: 1, transform: "translateY(0%)", filter: "blur(0px)"} ,
      }}
      transition={{ delay: 0.1 }}

      >
        <motion.h1 className='text-3xl text-green-400 text-center font-extrabold underline underline-offset-8 mb-7'>About Me</motion.h1>

            <div>
                <p className='sm:text-center mb-7 text-white'>
                Hi, there! I'm Samuel Barnabase, currently a sophmore studying  
                Electrical Engineering at 🟨 <motion.span whileHover={{fontWeight: "bold"}}> <a className='text-red-400' href="https://www.iastate.edu/" target="_blank" rel="noopener noreferrer">Iowa State University</a></motion.span> 🟥.</p>
            </div>
        
        <div className='flex flex-col sm:flex-row justify-between gap-5' >

            <motion.div className='' style={{flexBasis: '30%'}}

              animate = {modify}
              initial = 'hidden'
              variants={{
                hidden: {opacity: 0, transform: "translateX(-75%)", filter: "blur(25px)"} ,
                visible: {opacity: 1, transform: "translateX(0%)", filter: "blur(0px)"} ,
              }}
              transition={{ delay: 0.5 }}
            >
                <img className='size-96 h-full object-cover object-center rounded-xl' src={profile} alt="" />
            </motion.div>

            <motion.div className='text-white' style={{flexBasis: '70%'}}
                animate = {modify}
                initial = 'hidden'
                variants={{
                  hidden: {opacity: 0, transform: "translateY(75%)", filter: "blur(25px)"} ,
                  visible: {opacity: 1, transform: "translateY(0%)", filter: "blur(0px)"} ,
                }}
                transition={{ delay: 0.5 }}
            
            
            >
                <h1 className='text-center text-green-300 mb-4 font-semibold underline underline-offset-8'>Background</h1>
                <div className='relative'>
                    <p className='leading-8 sm:p-2 rounded-md'>
                      I was born and raised in {" "} 
                    <Popover content = {<div className="w-64 text-sm text-gray-500 dark:text-gray-400">
                          <div className="border-b border-gray-200 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
                            <h3 className="font-semibold text-gray-900 dark:text-white">About Tigrai</h3>
                          </div>
                          <div className="px-3 py-2">
                            <p className='text-black'>Tigrai is located in the northern region of the Horn of Africa. It is renowned for its beautiful landscape 
                                and ancient history, dating back thousands of years. The region boasts a rich cultural heritage, with distinctive 
                                traditions and languages that have evolved over centuries.</p>
                          </div>
                        </div>}
                    trigger="hover">
                      <a className='underline underline-offset-4 text-blue-400'>Tigrai</a>
                    </Popover>
                      , where my curiosity and passion for technology first emerged. Growing up there,
                      I developed a great interest in electronics, constantly messing around with old devices and trying to understand the mechanics behind them. Throughout my high school years,
                       I was involved in different coursework and projects that fueled my interest in computers and maths. 
                       This fascination drove me to constantly explore new opportunities and stay updated with new tech trends. 
                      To explore my dream even further, I decided to attend Iowa State University to study Electrical Engineering. 
                      I chose Iowa State because it offers great hands-on experience and several research opportunities. Upon graduating, 
                      I look forward to embarking on my journey in the tech world and using my skills and knowledge to create new solutions 
                      and make a positive impact in people's lives.
                    </p>
                  </div>
            </motion.div>
        </div>
      </motion.div>
    </div>
  )
}