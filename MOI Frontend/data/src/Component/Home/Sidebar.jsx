import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaBars, FaHome } from 'react-icons/fa'
import { BiSearch} from 'react-icons/bi'
import { AiOutlineUserAdd,AiOutlineUsergroupAdd} from 'react-icons/ai'
import { VscGitPullRequestCreate} from 'react-icons/vsc'
import { BsListCheck} from 'react-icons/bs'
import { NavLink } from 'react-router-dom'


const Sidebar = ({ children }) => {
     const to = JSON.parse(sessionStorage.getItem('paylode'));
    const [isopen, setisopen] = useState(false)
    const Togel = () => {
    setisopen(!isopen)
  
    }
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            opacity: 0,
            transition: {
                duration:0.5
            }
        },
        show: {
             width: '150px',
            padding: '4px,15px',
            opacity: 1,
          transition: {
                duration:0.2
            }
        }
    }
    const showAnamation = {
        hidden: {
            width: 0,
            opacity: 0,
             opacity: 1,
               transition: {
                duration:0.5
            }
        },
        show: {
             width: 'auto',
            opacity: 1,
             
               transition: {
                duration:0.2
            }
        }
    }

    return (
        <div className='flex min-h-screen '>
            <motion.div animate={{
                width: isopen ? "220px" : "45px",transition: {
                    duration: 0.5,
                    type: "spring",
                    damping:11
            }}} className="bg-[rgb(0,7,61)] ">
                <div className='flex items-center justify-between px-4 text-white py-2'>
                  
                    {isopen && <motion.h1
                         variants={showAnamation}
                            initial="hidden"
                            animate="show"
                            exit="hidden" 
                        className='text-lg'> MapOfIndia</motion.h1>}                    <div ><FaBars className='text-xl' onClick={Togel} /></div>
                </div>
                <div className='flex items-center px-4 justify-between py-2'>
                    <div className='text-white'><BiSearch className='text-xl'/></div>
                    <AnimatePresence>
                        <div>   {isopen && <motion.input
                            variants={inputAnimation}
                            initial="hidden"
                            animate="show"
                            // exit="hidden"
                            className='border-none ml-4   rounded ' placeholder='Search...' />}  
                        </div>
                        </AnimatePresence>
                </div>

                <section>
                  
                       
                    <NavLink to="/home"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><FaHome className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Home</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    {to.role=="1"?<>
                    <NavLink to="/register"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><AiOutlineUserAdd className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>User</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/beneficiry"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><AiOutlineUsergroupAdd className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Benficiry</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/state"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><VscGitPullRequestCreate className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>state</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/district"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><VscGitPullRequestCreate className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>District</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/block"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><VscGitPullRequestCreate className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Block</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/village"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><VscGitPullRequestCreate className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Village</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/beneficirydata"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Benificiry List</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/state/list"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>State List</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/district/list"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>District List</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/block/list"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Block List</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/village/list"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Village</motion.div>}
                         </AnimatePresence>
                             
                                
                        </NavLink></> :
                        <>
                              <NavLink to="/beneficiry"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><AiOutlineUsergroupAdd className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Benficiry</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                        
                         <NavLink to="/beneficirydata"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Benificiry List</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/state/list"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>State List</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/district/list"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>District List</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/block/list"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Block List</motion.div>}
                         </AnimatePresence>
                             
                                
                            </NavLink>
                 
                    <NavLink to="/village/list"   className='flex items-center px-4 text-white py-2 hover:border-r-2 whitespace-nowrap hover:border-r-white hover:bg-[rgb(45,51,89)] hover:animate-pulse '>
                        <motion.div className='whitespace-pre-wrap'><BsListCheck className='text-xl' /></motion.div>
                        <AnimatePresence>
                            {isopen&&
                                <motion.div
                                variants={showAnamation}
                            initial="hidden"
                            animate="show"
                                    // exit="hidden"
                                    className='px-4 
                                items-center  '>Village</motion.div>}
                         </AnimatePresence>
                             
                                
                        </NavLink>
                        </>}


                            
                 
                       
                          
                           

                  
                    
                </section>
            </motion.div>


            <div className='w-full '>{children}</div>
        </div>
    )
}

export default Sidebar
