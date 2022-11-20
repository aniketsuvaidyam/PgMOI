import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Village = () => {
    const [name, setname] = useState('');
    // const [id, setid] = useState('')
    const [err, seterror] = useState('');
    const [states, setstates] = useState([]);
    const [stateId, setstateId] = useState([]);
    const [districts, setdistrict] = useState([]);
    const [districtId, setdistrictId] = useState([]);
    const [block, setblock] = useState([]);
    const [blockId, setblockId] = useState([])

    const data = {
        name: name,
        block_id: blockId
    }

    let token = sessionStorage.getItem('token')
    const postData = () => {
        axios.post(`http://localhost:3000/api/village/add`, data, {
            headers: {
                "token": `${token}`
            }
        }).then((res) => {
            console.log(res.data)
            setname(toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))
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
        }).then(async (res) => {

            // console.log(res.data)
            await setstates(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }
    const getBlock = () => {
        axios.get(`http://localhost:3000/api/block/all`, {
            headers: {
                "token": `${token}`,
                "district_id": `${districtId}`
            }
        }).then(async (res) => {
            // console.log(res.data)
            await setblock(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };

    const getDistrict = () => {
        axios.get(`http://localhost:3000/api/district/all`, {
            headers: {
                "token": `${token}`,
                'state_id': `${stateId}`
            }
        }).then(async (res) => {
            // console.log(res.data)
            await setdistrict(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }



    useEffect(() => {
        postData();
        getDistrict();
        getState()
        getBlock()

    }, [districtId, stateId, blockId])
    return (
        <div>
         
            <div className="w-full flex items-center justify-center  mt-16  ">
                <div className=" w-96 shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className='block text-gray-700  font-bold text-xl'>Create New Village</h2>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="state" className="block text-sm font-sans text-gray-700">State </label>
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

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="district" className="block text-sm font-sans text-gray-700">District </label>
                        <select id="district" name="district" autoComplete="district" className="mt-1 block w-full py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
                            onChange={(e) => { setdistrictId(e.target.value) }}>
                            <option>Select District</option>
                            {districts.map((d) => {

                                return (
                                    <>
                                        <option key={d.id} value={d.id} >{d.name}</option></>
                                )
                            })}
                        </select>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="block" className="block text-sm font-sans text-gray-700">Block </label>
                        <select id="block" name="block" autoComplete="block" className="mt-1 block w-full py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
                            onChange={(e) => { setblockId(e.target.value) }}>

                            <option>Select Block</option>
                            {block.map((b) => {

                                return (
                                    <>
                                        <option key={b.id} value={b.id} >{b.name}</option>
                                    </>


                                )
                            })}
                        </select>
                    </div>

                    <div className="mb-2 mt-1">
                        <label className="block text-gray-700 text-sm font-sans mb-2" htmlFor="name">
                            Vallage Name
                        </label>
                        <input className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="Name" type="text" placeholder="Village Name" onChange={(e) => { setname(e.target.value) }} />


                    </div>

                    <div className="flex items-center justify-center">
                        <button className="bg-blue-600 px-14 hover:bg-blue-700 text-white font-bold py-2  rounded focus:outline-none focus:shadow-outline" type="button" onClick={postData}>
                            Create
                        </button>

                    </div>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default Village
