import {useEffect, useRef} from 'react'
import profile from '../assets/aboutImg.jpg'
import { motion,useInView,useAnimation} from "framer-motion"
import {Popover} from 'flowbite-react';
import Tigrai from '../assets/Tigai-Map.jpg'

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
      <motion.div className='max-w-5xl mx-auto border rounded-lg p-7'  style={{background:'rgba(241, 241, 245, 0.1)'}} ref={imgRef}
      
      animate = {modify}
      initial = 'hidden'
      variants={{
        hidden: {opacity: 0, transform: "translateY(-75%)", filter: "blur(25px)"} ,
        visible: {opacity: 1, transform: "translateY(0%)", filter: "blur(0px)"} ,
      }}
      transition={{ delay: 0.1 }}

      >
        <motion.h1 className='text-3xl text-green-300 text-center font-extrabold underline underline-offset-8 mb-7'>About Me</motion.h1>

            <div>
                <p className='sm:text-center mb-7 text-white'>
                Hi, there! I'm Samuel Barnabase, currently a sophmore studying  
                Computer Engineering at <motion.span whileHover={{fontWeight: "bold"}}> <a className='text-blue-200' href="https://www.iastate.edu/" target="_blank" rel="noopener noreferrer">Iowa State University</a></motion.span>.
                </p>
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
                    <p className='leading-8 sm:bg-white sm:p-2 sm:text-black rounded-md'>
                      I was born and raised in {" "} 
                      <Popover
                        trigger='hover'
                        content = {
                          <div className="w-96 text-sm text-gray-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
                          <div className="grid grid-cols-5">
                            <div className="col-span-3 p-3">
                              <div className="space-y-2">
                                <h3 className="font-semibold text-gray-900 dark:text-white">About Tigray</h3>
                                <p>
                                  Tigray is located in the northern region of the Horn of Africa. It is renowned for its ancient history, dating back thousands of years.
                                  The region boasts a rich cultural heritage, with distinctive traditions and languages that have evolved over centuries. 
                                  
                                </p>
                                <a
                                  href="https://www.google.com/search?q=Mekelle,Tigray" target='_blank' rel="noopener noreferrer"
                                  className="flex items-center font-medium text-blue-600 hover:text-blue-700 hover:underline dark:text-blue-500 dark:hover:text-blue-600"
                                >
                                  Learn more{' '}
                                  <svg
                                    className="ms-1.5 h-2 w-2 rtl:rotate-180"
                                    aria-hidden="true"
                                    xmlns="https://www.google.com/search?q=Mekelle,Tigray"
                                    fill="none"
                                    viewBox="0 0 6 10"
                                  >
                                    <path
                                      stroke="currentColor"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="m1 9 4-4-4-4"
                                    />
                                  </svg>
                                </a>
                              </div>
                            </div>
                            <img
                              src={Tigrai}
                              className="col-span-2 h-full object-contain"
                              alt="Tigrai map"
                            />
                          </div>
                        </div>
                        }
                      >
                      <a className='text-blue-200 underline hover:no-underline sm:text-blue-700'> 
                        Mekelle, Tigray
                      </a>
                      </Popover>
                      , where my curiosity and passion for computers first emerged. Growing up there,
                      I developed a great interest in technology and innovation. Throughout my high school years,
                       I was involved in different coursework and projects that fueled my interest in computers, maths, and technology. 
                       This fascination drove me to constantly explore new opportunities and stay updated with new tech trends. 
                      To explore my dream even further, I decided to attend Iowa State University to study Computer Engineering. 
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
// "https://www.google.com/search?q=Mekelle,Tigray"