import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Zoom, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const navigate = useNavigate()
    const [username, setusername] = useState('');
    const [Password, setpassword] = useState('');
    const [err, seterror] = useState('')

    // console.log(username, Password)
    const postData = () => {
        axios.post(`http://localhost:3000/api/login`, {
            username: username,
            password: Password
        })
            .then((res) => {
                console.log(res)
                seterror(toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Zoom, autoClose: 1000 }))
                sessionStorage.setItem('token', (res.data.token))

                if (res.data.token) {

                    const timer = setTimeout(() => {
                        navigate('/home');
                        let token = res.data.token
                        let paylosd = token.split(".")
                        let data = atob(paylosd[1])
                        sessionStorage.setItem('paylode', data)

                    }, 1000);
                    return () => clearTimeout(timer);

                } else {
                    console.log("unauthorized")

                }
            }).catch((error) => {
                console.log(error)
                seterror(toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Zoom, autoClose: 1000 }))
            })

    };


    useEffect(() => {
        // postData()

    }, [])
    return (
        <div>


            <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
                <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                    </div>
                    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
                        <div className="max-w-md mx-auto">
                            <div>
                                <h1 className="text-2xl font-semibold">Login Here</h1>
                            </div>
                            <div className="divide-y divide-gray-200">
                                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                                    <div className="relative">
                                        <input autoComplete="off" id="username" name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="username " onChange={(e) => { setusername(e.target.value) }} />
                                        <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Username</label>
                                    </div>
                                    <div className="relative">
                                        <input autoComplete="off" id="password" name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" placeholder="Password" onChange={(e) => { setpassword(e.target.value) }} />
                                        <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    </div>

                                    <div className="relative">
                                        <button className="bg-blue-500 text-white rounded-md px-2 py-1" onClick={postData}>Sign In</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>



    )
}

export default Login
