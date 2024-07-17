import profile from '../assets/innovate_120.jpeg'
import {useEffect, useRef} from 'react'
import { motion,useInView,useAnimation} from "framer-motion"

export default function Experiences() {
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
    
    <div className='min-h-screen pt-32'>
      <motion.div className='max-w-5xl mx-auto border rounded-lg p-7' style={{background:'rgba(241, 241, 245, 0.2)'}} ref={imgRef}
        animate = {modify}
        initial = 'hidden'
        variants={{
          hidden: {opacity: 0, transform: "translateY(-75%)", filter: "blur(25px)"} ,
          visible: {opacity: 1, transform: "translateY(0%)", filter: "blur(0px)"} ,
        }}
        transition={{ delay: 0.1 }}
      
      >
        <h1 className='text-3xl text-slate-400 text-center font-semibold underline underline-offset-8 mb-7'>Experience</h1>
        <div className='flex flex-row justify-between bg-white p-2 rounded-md items-center mb-5'>
            <div>
                <h1 className='font-semibold text-xl'>UI/UX Intern</h1>
                <p>June 2023 - July 2023</p>
                <motion.p
                className='InnovateHeading'>
                    <motion.a whileHover={{fontWeight: 'bold'}} href="https://innovate120.org" target="_blank" rel="noopener noreferrer"> Innovate 120</motion.a>
                </motion.p>
                
            </div>

            <div>
                <img className='h-full object-cover size-20 border border-slate-400 rounded-lg' src={profile} alt="" />
            </div>
        </div>
        <ul className='gap-2 flex flex-col p-2 text-white'>
                <motion.li
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
                
                >➤ Worked with <motion.a whileHover={{fontWeight: 'bold'}} href="https://www.gaf.com" target="_blank" className='font-bold text-blue-300' rel="noopener noreferrer">GAF</motion.a> to improve roofers safety by using AI.</motion.li>
                <motion.li
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
                
                
                
                >➤ Developed a project with a team of 3 students to provide real-time hazard alerts and monitored workers' health metrics.</motion.li>
                <motion.li
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
                
                >➤ Utilized Figma and Adobe to build a professional mobile app and wearable solution mock-up.</motion.li>
                <motion.li
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
                
                >➤ Gained confidence in strategic thinking, collaborative work, and interpersonal communication skills.</motion.li>
                <motion.li
                animate = {modify}
                initial = "hidden"
                variants={
                  {
                    hidden: {opacity: 0, y: 100},
                    visible: {opacity: 1, y: 0},
                  }
                }
                transition={
                  {delay: 0.9}}
                
                >➤ Demonstrated collaborative effort and innovative thinking in tackling industry-specific safety challenges.</motion.li>
        </ul>
        </motion.div>
    </div>

  )
}