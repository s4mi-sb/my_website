import React, { useState, useEffect } from 'react'
import {CiMenuBurger} from 'react-icons/ci'
import { VscClose } from "react-icons/vsc";
import { FaGithub, FaLinkedin, FaPlay,FaPause } from "react-icons/fa";
import { Link} from 'react-router-dom';
import { motion } from 'framer-motion';


export default function NavigationBar() {

    const [isOpen,setOpen] = useState(false);
    const [sticky,setSticky] = useState(false);
    const [action,setAction] = useState('');

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 30 ? setSticky(true) : setSticky(false);
      })
      const handleSize = ()=>{
        if (window.innerWidth > 768) {
            setOpen(false);
        }
      }
      handleSize();


      window.addEventListener('resize', handleSize);

      return () => window.removeEventListener('resize', handleSize);
    },[]);
    
    
  return (
    <section className='fixed z-30 w-full flex flex-col sm:flex-row sm:justify-between sm:items-center'>
            <div className={`${!isOpen ? `flex m-3 flex-row max-w-7xl items-center sm:mx-auto sm:justify-center gap-16 lg:gap-24 p-5 rounded-lg ${sticky ? 'sm:bg-black' : ''}` 
                  : `border w-full rounded-md p-3 shadow-xl flex flex-col gap-6 bg-black` }`}>

                    {!isOpen ? <CiMenuBurger color='white' size={56} className={`cursor-pointer p-3 sm:hidden rounded-lg ${sticky ? 'bg-black' : ''}`} onClick={()=>setOpen(!isOpen)}/>
                    
                    :<VscClose color='white' size={56} className={`cursor-pointer p-3 sm:hidden rounded-lg ${sticky ? 'bg-black' : ''}`} onClick={()=>setOpen(!isOpen)}/>}
                    
                    
                    <Link to='/' className={`${isOpen ? 'border border-white' : 'hidden text-white'} sm:inline-flex text-white  p-3 text-center rounded-md ${action==='Home' ? 'border' : ''} cursor-pointer`} 
                    onClick={()=>{setOpen(false); setAction('Home')}} >
                      
                      <motion.p whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} >Home</motion.p>
                      
                      </Link>

                    <Link to='/about' className={`${isOpen ? 'border border-white' : 'hidden text-white'} sm:inline-flex text-white  p-3 text-center rounded-md ${action==='About' ? 'border' : ''} cursor-pointer`} 
                    onClick={()=>{setOpen(false); setAction('About')}} >

                      <motion.p whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} >About</motion.p>
                      
                      </Link>
                    
                    <Link to='/experience' className={`${isOpen ? 'border border-white' : 'hidden text-white'} sm:inline-flex text-white  p-3 text-center rounded-md ${action==='Experience' ? 'border' : ''} cursor-pointer`} 
                    onClick={()=>{setOpen(false); setAction('Experience')}} >
                      
                      <motion.p whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} >Experience</motion.p>
                      
                      </Link>
                    
                    <Link to='/projects' className={`${isOpen ? 'border border-white' : 'hidden text-white'} sm:inline-flex text-white p-3 text-center rounded-md ${action==='Projects' ? 'border' : ''} cursor-pointer`} 
                    onClick={()=>{setOpen(false); setAction('Projects')}} >
                      
                      <motion.p whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} >Projects</motion.p>
                      
                      </Link>
                      {}
                    
                    <div className={`flex flex-row gap-10 justify-center`}>
                      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} ><a href="https://github.com/s4mi-sb" target="_blank" rel="noopener noreferrer"><FaGithub size={28} color='white' className={`${isOpen ? '' : 'hidden'} animate-pulse cursor-pointer sm:inline-flex`}/></a></motion.div>
                      <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.95 }} ><a href="https://www.linkedin.com/in/samuelbarnabase/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={28} color='white' className={`${isOpen ? '' : 'hidden'} animate-pulse cursor-pointer sm:inline-flex`}/></a></motion.div>
                    </div>
            </div>
      </section>
  )
}
