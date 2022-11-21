import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { ToastContainer, toast, Flip, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Home/Navbar';
import Sidebar from '../Home/Sidebar';



const State = () => {

    const [name, setname] = useState('');
    const [err, seterror] = useState('')

    const data = {
        name: name
    }

    let token = sessionStorage.getItem('token')
    const postData = () => {
        axios.post(`http://localhost:3000/api/state/add`, data, {
            headers: {
                "token": `${token}`
            }
        }).then((res) => {

            seterror(toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))


        }).catch((error) => {
            console.log(error)
            seterror(toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))
        })
    }


    useEffect(() => {

        postData()


    }, [])
    return (
        <div>
            <Sidebar>
                <Navbar />


                <div className="w-full flex items-center justify-center   mt-16  ">
                    <div className=" shadow-lg w-96 rounded px-8 pt-6 pb-8 mb-4">
                        <h1 className='block text-gray-700  font-bold text-xl'>Create New State</h1>
                        <div className="mb-6 mt-1">
                            <label className="block text-gray-700 text-sm font-sans mb-2" htmlFor="name">
                                State Name
                            </label>
                            <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="State Name" onChange={(e) => { setname(e.target.value) }} />


                        </div>
                        <div className="flex items-center justify-center">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded focus:outline-none focus:shadow-outline" type="button" onClick={postData}>
                                Create
                            </button>

                        </div>
                    </div>

                </div>
                <ToastContainer />
            </Sidebar>
        </div>
    )
}

export default State
