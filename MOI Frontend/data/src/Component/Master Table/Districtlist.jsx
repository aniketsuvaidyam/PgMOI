import React, { useState, useEffect } from 'react'
import Navbar from '../Home/Navbar'
import { Link } from 'react-router-dom'
import { AiFillDelete } from "react-icons/ai";
import axios from 'axios'

const Districtlist = () => {
    let token = sessionStorage.getItem('token')
    const [states, setstates] = useState([]);
    const [stateId, setstateId] = useState([]);
    const [data, setdata] = useState([]);

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
    const getDistrict = () => {
        axios.get(`http://localhost:3000/api/district/all`, {
            headers: {
                "token": `${token}`,
                'State_id': `${stateId}`
            }
        }).then((res) => {
            // console.log(res.data)
            setdata(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getDistrict()
        getState()

    }, [stateId])
    return (
        <div>
            <Navbar />

            <div className="col-span-6 sm:col-span-3 py-2 px-6">
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">State </label>
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
            <div className="overflow-x-auto relative shadow-md sm:rounded-lg  ">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Id
                            </th>
                            <th scope="col" className="py-3 px-6">
                                District  Name
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

                                        <button class="h-8 px-4  text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700">Delete</button>

                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>






        </div>



    )
}

export default Districtlist
