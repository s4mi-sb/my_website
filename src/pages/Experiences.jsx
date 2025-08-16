import profile from '../assets/innovate_120.jpeg'
import arconicProfile from '../assets/arconic.jpg'
import boeinglogo from '../assets/boeing.jpeg'
import ARA_logo from '../assets/ARA_logo.png'
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
      <motion.div className='max-w-5xl mx-auto border border-blue-500 rounded-lg p-7' style={{background:'rgba(241, 241, 245, 0.2)'}} ref={imgRef}
        animate = {modify}
        initial = 'hidden'
        variants={{
          hidden: {opacity: 0, transform: "translateY(-75%)", filter: "blur(25px)"} ,
          visible: {opacity: 1, transform: "translateY(0%)", filter: "blur(0px)"} ,
        }}
        transition={{ delay: 0.1 }}
      
      >
        <h1 className='text-3xl text-blue-200 text-center font-semibold underline underline-offset-8 mb-7'>Experience</h1>


        {/* Boeing research fellowship */}
        <div className='flex flex-row justify-between bg-white p-2 rounded-md items-center mb-5'>
            <div>
                <h1 className='font-semibold text-xl'>Boeing Research Fellow</h1>
                <p>August 2025 - Present</p>
                <motion.p
                className='InnovateHeading'>
                  
                    <motion.a whileHover={{fontWeight: 'bold'}} href="https://www.iastate.edu/" target="_blank" rel="noopener noreferrer"> Iowa State University</motion.a>
                </motion.p>
                
            </div>

            <div>
                <img className='h-full object-cover size-20 border border-slate-400 rounded-lg' src={boeinglogo} alt="" />
            </div>
        </div>
        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white'>
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
                
                >➤ Awarded a year-long Boeing-sponsored research fellowship with mentorship from industry engineers.</motion.li>
        </motion.ul>

        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white'>
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

                >➤ Conducting research under <motion.a whileHover={{fontWeight: 'bold'}} href="https://www.engineering.iastate.edu/people/profile/djchen/" target="_blank" className='font-bold text-blue-400' rel="noopener noreferrer">Dr. Degang Chen</motion.a>, working on the design of low-cost ultra-small DACs (Digital to Analog Converters).</motion.li>
        </motion.ul>

        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white mb-10'>
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
                
                >➤ Using Cadence Virtuoso for DAC circuit simulation, designing PCBs, and performing lab testing to validate research prototypes.</motion.li>
        </motion.ul>

        {/* Arconic */}
        <div className='flex flex-row justify-between bg-blue-400 p-2 rounded-md items-center mb-5'>
            <div>
                <h1 className='font-semibold text-xl'>Electrical Engineering Intern</h1>
                <p>June 2025 - Present</p>
                <motion.p
                className='InnovateHeading'>
                  
                    <motion.a whileHover={{fontWeight: 'bold'}} href="https://www.arconic.com/" target="_blank" rel="noopener noreferrer"> Arconic</motion.a>
                </motion.p>
                
            </div>

            <div>
                <img className='h-full object-cover size-20 border border-slate-400 rounded-lg' src={arconicProfile} alt="" />
            </div>
        </div>
        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white'>
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
                
                >➤ Programmed and updated Rockwell Logix 5000 PLCs and HMI systems to improve automation and process efficiency.</motion.li>
        </motion.ul>

        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white'>
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
                
                >➤ Diagnosed and fixed a critical stitcher issue, eliminating downtime and preventing future failures.</motion.li>
        </motion.ul>

        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white'>
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
                  {delay: 1.0}}
                
                >➤ Integrated an AI tool for slip detection, improving accuracy and speed by 90%.</motion.li>
        </motion.ul>

        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white mb-10'>
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
                  {delay: 1.1}}
                
                >➤ Contributed remotely to ongoing process improvements and automation projects.</motion.li>
        </motion.ul>
    
                
        {/* Undergrad Research */}
                <div className='flex flex-row justify-between bg-slate-400 p-2 rounded-md items-center mb-5'>
            <div>
                <h1 className='font-semibold text-xl'>Undergraduate Research Assistant</h1>
                <p>January 2025 - Present</p>
                <motion.p
                className='IsuresearchHeading'>
                  
                    <motion.a whileHover={{fontWeight: 'bold'}} href="https://arawireless.org/" target="_blank" rel="noopener noreferrer">Iowa State University</motion.a>
                </motion.p>
                
            </div>

            <div>
                <img className='h-full object-cover size-20 border-slate-400 rounded-lg' src={ARA_logo} alt="" />
            </div>
        </div>
        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white'>
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
                
                >➤ Set up a new monitoring system to track device performance and health using Linux in the <motion.a whileHover={{fontWeight: 'bold'}} href="https://arawireless.org/" target="_blank" className='font-bold text-blue-400' rel="noopener noreferrer">ARA</motion.a> wireless lab.</motion.li>
        </motion.ul> 

        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white'>
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
                
                >➤ Used LibreNMS and Graylog for real-time monitoring and historical data analysis across multiple platforms.</motion.li>
        </motion.ul>

        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.3}}
        
        className='gap-2 flex flex-col p-2 text-white mb-10'>
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
                
                >➤ Containerized the system with Docker on Linux to streamline deployment and improve scalability.</motion.li>
        </motion.ul>      

        {/* Innovate 120 */}
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
        <motion.ul 
          animate = {modify}
          initial = "hidden"
          variants={
            {
              hidden: {opacity: 0, y: -100},
              visible: {opacity: 1, y: 0},
            }
          }
          transition={
            {delay: 0.4}}
        
        className='gap-2 flex flex-col p-2 text-white'>
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
                
                >➤ Worked with <motion.a whileHover={{fontWeight: 'bold'}} href="https://www.gaf.com" target="_blank" className='font-bold text-blue-400' rel="noopener noreferrer">GAF</motion.a> to improve roofers safety by using AI.</motion.li>
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
                  {delay: 0.8}}
                
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
                  {delay: 0.9}}
                
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
                  {delay: 1.0}}
                
                >➤ Demonstrated collaborative effort and innovative thinking in tackling industry-specific safety challenges.</motion.li>
        </motion.ul>
        </motion.div>
    </div>

  )
}
