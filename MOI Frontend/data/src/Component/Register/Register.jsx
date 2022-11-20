import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { ToastContainer, toast,  Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [role, setrole] = useState('')
    const [err, seterror] = useState('')

    let data = {
        username: username,
        password: password,
        name: name,
        email: email,
        role: role

    }
    const postData = () => {
        const token = sessionStorage.getItem('token')
        axios.post(`http://localhost:3000/api/register`, data, {
            headers: {
                "token": `${token}`

            }

        })
            .then((res) => {
                console.log(res)
                seterror(toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))

            }).catch((error) => {
                console.log(error)
                seterror(toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))
            })

    };

    useEffect(() => {
        postData()
    }, [])
    return (
        <div>
          
            <div className=" bg-gray-100  flex  justify-center sm:py-12">
                <div className="relative  sm:max-w-xl sm:mx-auto">
                    <div className="absolute  shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4  bg-white shadow-lg sm:rounded-3xl sm:py-8 sm:px-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Register Here</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input autoComplete="off" id="name" name="name" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Name " onChange={(e) => { setname(e.target.value) }} />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Name</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="email" name="email" type="email" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Email " onChange={(e) => { setemail(e.target.value) }} />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Email</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="username " onChange={(e) => { setusername(e.target.value) }} />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>
                                    <div className="col-span-6 sm:col-span-3 py-2">
                                        <label htmlFor="role" className="block text-sm font-medium text-gray-600">Role </label>
                                        <select id="role" name="role" autoComplete="role" className="mt-1 block w-full py-1.5 px-3 border pl-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
                                            onChange={(e) => { setrole(e.target.value) }}>
                                            <option value="">Select Role</option>
                                            <option value="1">Admin</option>
                                            <option value="2">Field Oficer</option>


                                        </select>
                                    </div>

                                    <div className="relative">
                                        <button className="bg-blue-500 text-white rounded-md px-2 py-1"
                                            onClick={postData}
                                        >Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer className='h-2' />
        </div>
    )
}

export default Register
