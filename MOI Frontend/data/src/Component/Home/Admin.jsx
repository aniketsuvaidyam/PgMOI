import React from 'react'
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineAppstoreAdd, AiOutlineHome, AiOutlineUserAdd, AiOutlineUsergroupAdd } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
import { FcList } from "react-icons/fc";

const Admin = () => {
    const to = JSON.parse(sessionStorage.getItem('paylode'));
    return (
        <div className='flex'>

            <div className='w-[20%] bg-blue-900  min-h-screen'>



                <div className='h-14'> <h1 className=' bg-g px-8 py-2 text-3xl text-green-500'> MapOfIndia</h1> </div>

                <div className='shadow-inner cursor-pointer py-2 hover:bg-black hover:bg-opacity-25' >
                    <p className=' flex items-center  px-8'> <AiOutlineHome className='text-red-400 text-xl ' />
                        <span className='text-base   font-semibold text-opacity-70 hover:text-red-400 px-2'> Dashbord</span></p>
                </div>
                <NavLink to="/register">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20 hover:text-green-200' >
                        <p className=' flex items-center  px-8'> <AiOutlineUserAdd className=' text-black text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> Create User</span></p>
                    </div>
                </NavLink>
                <NavLink to="/beneficiry">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20 hover:text-green-200' >
                        <p className=' flex items-center px-8'> <AiOutlineUsergroupAdd className=' text-xl  text-black ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> Create Beneficiry</span></p>
                    </div>
                </NavLink>

                <NavLink to="/state">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20 hover:text-green-200' >
                        <p className=' flex items-center  px-8'> <AiOutlineAppstoreAdd className='text-sky-300 text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> Create State</span></p>
                    </div>
                </NavLink >
                <NavLink to="/district">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20  hover:text-green-200' >
                        <p className=' flex items-center  px-8'> <AiOutlineAppstoreAdd className='text-sky-300 text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> Create District</span></p>
                    </div>
                </NavLink>
                <NavLink to="/block">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20  hover:text-green-200' >
                        <p className=' flex items-center  px-8'> <AiOutlineAppstoreAdd className='text-sky-300 text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> Create Block</span></p>
                    </div>
                </NavLink>
                <NavLink to="/village">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20 hover:text-green-200' >
                        <p className=' flex items-center  hover:text-green-200  px-8'> <AiOutlineAppstoreAdd className='text-sky-300 text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> Create Village</span></p>
                    </div>
                </NavLink>
                <NavLink to="/beneficirydata">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20 hover:text-green-200' >
                        <p className=' flex items-center  hover:text-green-200  px-8'> <FcList className='text-sky-300 text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> Beneficiry List </span></p>
                    </div>
                </NavLink>
                <NavLink to="/state/list">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20 hover:text-green-200' >
                        <p className=' flex items-center  hover:text-green-200  px-8'> <FcList className='text-sky-300 text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> State List </span></p>
                    </div>
                </NavLink>
                <NavLink to="/district/list">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20 hover:text-green-200' >
                        <p className=' flex items-center  hover:text-green-200  px-8'> <FcList className='text-sky-300 text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> District List </span></p>
                    </div>
                </NavLink>
                <NavLink to="/block/list">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20 hover:text-green-200' >
                        <p className=' flex items-center  hover:text-green-200  px-8'> <FcList className='text-sky-300 text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> Block List </span></p>
                    </div>
                </NavLink>
                <NavLink to="/village/list">
                    <div className='shadow-inner py-2 hover:bg-black hover:bg-opacity-20 hover:text-green-200' >
                        <p className=' flex items-center  hover:text-green-200  px-8'> <FcList className='text-sky-300 text-xl ' />
                            <span className='text-base  font-semibold  text-white hover:text-red-400 px-2'> Village List </span></p>
                    </div>
                </NavLink>





            </div>

            <div className='w-[80%] '>
                <div className='h-14 items-center bg-gray-50 shadow  '>

                    <p className=' flex items-center justify-end px-8 py-4'> <MdAccountCircle className='text-blue-900 text-2xl' />
                        <span className='text-base  font-serif text-slate-800'> {to.username}</span></p>
                </div>

            </div>
        </div>
    )
}

export default Admin
