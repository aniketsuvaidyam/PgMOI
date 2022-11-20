import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../Home/Navbar';

import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const District = () => {
    const [name, setname] = useState('');
    // const [id, setid] = useState('')
    const [err, seterror] = useState('')
    const [states, setstates] = useState([]);
    const [stateId, setstateId] = useState([]);

    const data = {
        name: name,
        state_id: stateId
    }

    let token = sessionStorage.getItem('token')
    const postData = () => {
        axios.post(`http://localhost:3000/api/district/add`, data, {
            headers: {
                "token": `${token}`
            }
        }).then((res) => {
            // console.log(res.data)
            setname(toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))
            setname('')

        }).catch((error) => {
            console.log(error)
            seterror(toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))
        })

    }



    const getState = () => {
        axios.get(`http://localhost:3000/api/state/all`, {
            headers: {
                "token": `${token}`
            }
        }).then((res) => {

            // console.log(res.data)
            setstates(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    useEffect(() => {

        postData()
        getState()

    }, [stateId])
    return (
        <div>
            <Navbar />

            <div className="w-full flex items-center justify-center  mt-16 ">
                <div className="bg-gray-100 w-96 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className='block text-gray-700  font-bold text-xl'>Create New Distict</h1>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="state" className="block text-sm font-sans mb-2 text-gray-700">State </label>
                        <select id="state" name="state" autoComplete="state" className="mt-1 block w-full py-1.5 px-3 border pl-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
                            onChange={(e) => { setstateId(e.target.value) }}>
                            <option>Select Stete</option>
                            {
                                states.map((s) => {

                                    return (
                                        <>
                                            <option key={s.id} value={s.id}>{s.name}</option>
                                        </>
                                    )
                                })
                            }
                        </select>
                    </div>


                    <div className="mb-2 mt-1">
                        <label className="block text-gray-700 text-sm font-sans mb-2" htmlFor="name">
                            Distict Name
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Distict Name" onChange={(e) => { setname(e.target.value) }} />


                    </div>


                    <div className="flex items-center justify-center">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-14 rounded focus:outline-none focus:shadow-outline" type="button" onClick={postData}>
                            Create
                        </button>

                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}


export default District
