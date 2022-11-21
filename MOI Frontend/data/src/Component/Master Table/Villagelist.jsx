import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from '../Home/Sidebar';
import { ToastContainer, toast, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Villagelist = () => {
    const [states, setstates] = useState([]);
    const [stateId, setstateId] = useState([]);
    const [districts, setdistrict] = useState([]);
    const [districtId, setdistrictId] = useState([]);
    const [block, setblock] = useState([]);
    const [blockId, setblockId] = useState([]);
    const [data, setdata] = useState([])
    const [err, seterror] = useState("");



    let token = sessionStorage.getItem('token')

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
    const getVillage = () => {
        axios.get(`http://localhost:3000/api/village/all`, {
            headers: {
                "token": `${token}`,
                'block_id': `${blockId}`
            }
        }).then(async (res) => {
            console.log(res.data)
            setdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }


    const postData = (id) => {


        axios
            .delete(`http://localhost:3000/api/Village/${id}`, {
                headers: {
                    token: `${token}`,
                },
            })
            .then((res) => {
                // console.log(res);
                seterror(toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))
                getVillage()
            })
            .catch((error) => {
                console.log(error);
                seterror(
                    toast.error(error.response.data.message, {
                        position: toast.POSITION.TOP_CENTER,
                        theme: "colored",
                        transition: Flip,
                        autoClose: 1000,
                    })
                );
            });


    };




    useEffect(() => {

        getDistrict();
        getState()
        getBlock()
        getVillage()

    }, [stateId, blockId, districtId])
    return (
        <div>
            <Sidebar>

                <h1 className=' flex  text-lg font-bold py-2 items-center, justify-center'>VILLAGE DETAILS</h1>
                <div className='flex mt-2 '>
                    <div className="col-span-6 sm:col-span-3 px-6  ">
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

                    <div className="col-span-6 sm:col-span-3 px-6">
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

                    <div className="col-span-6 sm:col-span-3 px-6">
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
                </div>

                <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-h-screen overflow-scroll scrollbar-hide ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Id
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Village  Name
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Edit
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    Delete
                                </th>


                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {e.id}
                                        </th>
                                        <td className="py-4 px-6">
                                            {e.name}
                                        </td>



                                        <td className="py-4  px-2  ">

                                            <button class="h-8 px-4  text-sm text-white transition-colors duration-150 bg-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-600">Edit</button>

                                        </td>
                                        <td className="py-4   ">

                                            <button class="h-8 px-4  text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700" onClick={() => {
                                                postData(e.id)
                                            }}>Delete</button>

                                        </td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
                <ToastContainer />
            </Sidebar >
        </div>
    )
}

export default Villagelist
