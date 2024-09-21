import {useEffect, useRef} from 'react'
import { motion,useInView,useAnimation} from "framer-motion"
import Box from '@mui/material/Box';
import {  } from 'react-icons/fa';
import { SiOpenai,SiNodedotjs, SiExpress,SiReact,SiTailwindcss,SiGooglemaps, SiMongodb } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import {Swiper,SwiperSlide} from 'swiper/react'
import SwiperCore from 'swiper'
import {Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Project() {
  SwiperCore.use([Navigation]);
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
    <div className='min-h-screen pt-32 -z-20'>
      <motion.div className='max-w-5xl mx-auto border border-blue-700 rounded-lg p-7' style={{background:'rgba(241, 241, 245, 0.2)'}} ref={imgRef}
        animate = {modify}
        initial = 'hidden'
        variants={{
          hidden: {opacity: 0, transform: "translateY(-75%)", filter: "blur(25px)"} ,
          visible: {opacity: 1, transform: "translateY(0%)", filter: "blur(0px)"} ,
        }}
        transition={{ delay: 0.1 }}
      >
        <h1 className='text-3xl text-blue-400 text-center font-semibold underline underline-offset-8 mb-7'>Projects</h1>
        <div className='flex flex-row justify-center'>
          <Swiper
          
          navigation
          
          >
            <SwiperSlide >
            <Box 
            className='rounded-lg max-w-xl mx-auto bg-cyan-50 shadow-md flex flex-col flex-wrap' 
            height={450}
            // width={350}
            my={4}
            gap={2}
            p={2}
            sx={{ border: '2px solid grey' }}>
              <div className='flex flex-row justify-between max-w-full items-center'>
                <h2 className='font-bold underline underline-offset-8'>CLI ChatBot</h2>
                <a href='https://github.com/s4mi-sb/chatbot' target='_blank' rel="noopener noreferrer"><motion.button className='border rounded-full p-3 border-blue-600'
                      whileTap={{scale: 0.95}}
                      whileHover={{scale: 1.3}}
                >View on Github</motion.button></a>
              </div>
               
               <motion.p
               animate = {modify}
               initial = "hidden"
               variants={
                 {
                   hidden: {opacity: 0, y: 100},
                   visible: {opacity: 1, y: 0},
                 }
               }
               transition={
                 {delay: 0.5}}
               
               >➤ Developed a terminal-based chatbot using openai's api 3.5 turbo model.</motion.p>
               <motion.p
               animate = {modify}
               initial = "hidden"
               variants={
                 {
                   hidden: {opacity: 0, y: 100},
                   visible: {opacity: 1, y: 0},
                 }
               }
               transition={
                 {delay: 0.6}}
               
               >➤ This is particularly useful when ChatGPT is at full capacity.</motion.p>
               <motion.p
               animate = {modify}
               initial = "hidden"
               variants={
                 {
                   hidden: {opacity: 0, y: 100},
                   visible: {opacity: 1, y: 0},
                 }
               }
               transition={
                 {delay: 0.7}}
               >➤ In addition to the chat feature, I integrated a code snippet saving feature, allowing users to store and retrieve code examples within the chat interface for future reference.</motion.p>
               <motion.div className='flex flex-row gap-4'
                animate = {modify}
                initial = "hidden"
                variants={
                  {
                    hidden: {opacity: 0, y: 100},
                    visible: {opacity: 1, y: 0},
                  }
                }
                transition={
                  {delay: 0.8}}
               >
                <SiNodedotjs size={36} color='green'/>
                <SiOpenai size={36}/>
               </motion.div>
               
            </Box>
            </SwiperSlide>


            <SwiperSlide >
            <Box 
            className='rounded-lg max-w-xl mx-auto bg-cyan-50 shadow-md flex flex-col flex-wrap' 
            height={450}
            // width={350}
            my={4}
            gap={2}
            p={2}
            sx={{ border: '2px solid grey' }}>
              <div className='flex flex-row flex-wrap justify-between max-w-full items-center'>
                <h2 className='font-bold underline underline-offset-8'>Carpooling Web App</h2>
                
              </div>
               
               <p>➤ Created a full stack web application to connect student riders with passengers seeking rides.</p>
               <p>➤ This website allows students to easily sign up, post rides, connect with riders, and effortlessly search for rides.</p>
               <p>➤ Developed with MERN, Tailwind CSS, Nodemailer, GoogleMaps API, AWS S3 Bucket, Redux, and JWT.</p>
               <div className='flex flex-row justify-between'>
               <a href='https://isucarpooling.onrender.com' target='_blank' rel="noopener noreferrer"><motion.button className='border rounded-full p-3 border-blue-600'
                      whileTap={{scale: 0.95}}
                      whileHover={{scale: 1.3}}
                >Visit Site</motion.button></a>
                <a href='https://github.com/s4mi-sb/ISUcarpooling' target='_blank' rel="noopener noreferrer"><motion.button className='border rounded-full p-3 border-blue-600'
                      whileTap={{scale: 0.95}}
                      whileHover={{scale: 1.3}}
                >View on Github</motion.button></a>
               </div>
               <div className='flex flex-row gap-3'>
                <SiNodedotjs size={36} color='green'/>
                <SiExpress size={36}/>
                <SiMongodb size={36} color='green'/>
                <SiGooglemaps size={36}/>
                <SiReact size={36} color='#61DAFB'/>
                <SiTailwindcss size={36} color='lightblue'/>
                <FaAws size={36}/>
               </div>
               
            </Box>
            </SwiperSlide>


            </Swiper>
            
        </div>
        </motion.div>
        
    </div>
  )
}
