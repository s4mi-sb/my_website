import React from 'react'
import {motion} from 'framer-motion'
import profile from '../assets/iowa-state-logo.png'
import nodepic from '../assets/nodejs.png'
import javapic from '../assets/java.png'
import pypic from '../assets/python.png'
import cpluspic from '../assets/c-.png'
import cpic from '../assets/c.png'
import mBD from '../assets/mongodb.jpg'
import js from '../assets/js.png'
import reactpic from '../assets/react.png'
import awspic from '../assets/aws.png'
import ijpic from '../assets/ij.png'
import vscodepic from '../assets/vscode.png'
import tailwindpic from '../assets/tailwind.webp'
import expresspic from '../assets/express.png'
import spring from '../assets/spring-boot.png'
import nodeMailer from '../assets/nodeMailer.png'

export default function Home() {
  return (
    <section>
    <div className='flex flex-col h-screen justify-center'>
      <div className='pt-32 max-w-4xl mx-auto text-white flex flex-col md:flex-row justify-center gap-10 items-center'>
          <div className='flex flex-col gap-3 text-white border border-white p-3 "delay-[300ms] duration-[600ms] taos:translate-x-[100%] taos:invisible" data-taos-offset="400" text-xl lg:text-4xl rounded-lg'>
              <p className=''> Hello!👋</p>
              <h1>I'm Samuel Barnabase</h1>
              <p><span>Computer Engineering Student</span></p>
          </div>
          <motion.img src={profile} alt="" className='size-44 object-contain' animate={{ rotate: 360 }}
            transition={{ duration: 2 }}/>
          
      </div>

  <div class="relative font-inter antialiased">

    <main className="relative flex flex-col justify-center overflow-hidden">
        <div className="w-full max-w-5xl mx-auto px-4 md:px-6 my-14">
            <div className="text-center">
                <div
                    
                    className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
                >
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
                        <li className='flex flex-col items-center'>
                            <img className='size-16' src={nodepic} alt="nodepic" />
                            <p className='text-white'>NodeJS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16' src={javapic} alt="javapic" />
                            <p className='text-white'>Java</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16' src={pypic} alt="pypic" />
                            <p className='text-white'>Python</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16' src={cpluspic} alt="c+pic" />
                            <p className='text-white'>C++</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={cpic} alt="cpic" />
                            <p className='text-white'>C</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={mBD} alt="mongoDBpic" />
                            <p className='text-white'>MongoDB</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16' src={js} alt="jspic" />
                            <p className='text-white'>JavaScript</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={reactpic} alt="reactpic" />
                            <p className='text-white'>ReactJS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={awspic} alt="awspic" />
                            <p className='text-white'>AWS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={vscodepic} alt="vspic" />
                            <p className='text-white'>VSCode</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={ijpic} alt="ijpic" />
                            <p className='text-white'>Intellij</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={expresspic} alt="exppic" />
                            <p className='text-white'>ExpressJS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={tailwindpic} alt="tailpic" />
                            <p className='text-white'>TailwindCSS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={spring} alt="springpic" />
                            <p className='text-white'>SpringBoot</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={nodeMailer} alt="nodeMailpic" />
                            <p className='text-white'>NodeMailer</p>
                        </li>
                    </ul> 
                    <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
                    <li className='flex flex-col items-center'>
                            <img className='size-16' src={nodepic} alt="nodepic" />
                            <p className='text-white'>NodeJS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16' src={javapic} alt="javapic" />
                            <p className='text-white'>Java</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16' src={pypic} alt="pypic" />
                            <p className='text-white'>Python</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16' src={cpluspic} alt="c+pic" />
                            <p className='text-white'>C++</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={cpic} alt="cpic" />
                            <p className='text-white'>C</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={mBD} alt="mongoDBpic" />
                            <p className='text-white'>MongoDB</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16' src={js} alt="jspic" />
                            <p className='text-white'>JavaScript</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={reactpic} alt="reactpic" />
                            <p className='text-white'>ReactJS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={awspic} alt="awspic" />
                            <p className='text-white'>AWS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={vscodepic} alt="vspic" />
                            <p className='text-white'>VSCode</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={ijpic} alt="ijpic" />
                            <p className='text-white'>Intellij</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={expresspic} alt="exppic" />
                            <p className='text-white'>ExpressJS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={tailwindpic} alt="tailpic" />
                            <p className='text-white'>TailwindCSS</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={spring} alt="springpic" />
                            <p className='text-white'>SpringBoot</p>
                        </li>
                        <li className='flex flex-col items-center'>
                            <img className='size-16 object-contain' src={nodeMailer} alt="nodeMailpic" />
                            <p className='text-white'>NodeMailer</p>
                        </li>
                    </ul>               
                </div>
               
            </div>

        </div>
    </main>
</div>
      
    </div>
    
    </section>
  )
}
