import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { ToastContainer, toast, Flip, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../Home/Navbar';
import Sidebar from '../Home/Sidebar';


const Beneficiry = () => {
    const to = JSON.parse(sessionStorage.getItem('paylode'));

    let token = sessionStorage.getItem('token')
    const [states, setstates] = useState([]);
    const [districts, setdistrict] = useState([]);
    const [block, setblock] = useState([]);
    const [village, setvillage] = useState([]);
    const [villageId, setvillageId] = useState('');
    const [stateId, setstateId] = useState([]);
    const [districtId, setdistrictId] = useState([]);
    const [blockId, setblockId] = useState([])

    const [name, setname] = useState('');
    const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');
    const [address, setaddress] = useState('');
    const [gender, setgender] = useState('');
    const [education, seteducation] = useState('');
    const [err, seterror] = useState('')





    // All get Api


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
            setdistrict(res.data)
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
        }).then((res) => {
            // console.log(res.data)
            setblock(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };
    const getVillage = () => {
        axios.get(`http://localhost:3000/api/village/all`, {
            headers: {
                "token": `${token}`,
                "block_id": `${blockId}`
            }
        }).then((res) => {
            // console.log(res.data)
            setvillage(res.data)
        }).catch((err) => {
            console.log(err)
        })
    };

    const createBeneficiry = () => {
        let dataa = {
            name: name,
            username: username,
            email: email,
            mobile: mobile,
            address: address,
            state: stateId,
            district: districtId,
            village: villageId,
            block: blockId,
            gender: gender,
            education: education
        }
        console.log(dataa)
        return (
            axios.post(`http://localhost:3000/api//beneficiry/add`, dataa, {
                headers: {
                    "token": `${token}`
                }

            }).then((res) => {

                seterror(toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))


            }).catch((error) => {
                console.log(error)
                seterror(toast.error(error.response.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))
            })



        )
    }






    useEffect(() => {




        getState();
        getBlock();
        getDistrict();
        getVillage();

        createBeneficiry()



    }, [districtId, blockId, stateId, villageId])




    return (
        <div className=''>
            <Sidebar>
                <Navbar />


                <div className="mt-10 sm:mt-0   p-2  flex justify-center items-center">
                    <div className="items-center max-h-screen overflow-scroll ">
                        <div className="mt-5 md:mt-0 md:col-span-2 ">

                            <div className="shadow overflow-hidden sm:rounded-md">
                                <div className="px-4  py-5  shadow-lg sm:p-2 w-[700px]">
                                    <h1 className='flex justify-center items-center text-gray-700 px-2 font-bold text-xl'>Create New Beneficiry</h1>
                                    <div className="py-2 ml-24 w-[500px]">
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2 py-2">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                            <input type="text" name="name" id="name" placeholder=" Name" className="mt-1 focus:ring-indigo-500 pl-2 focus:border-indigo-500  block w-full shadow-sm h-8 sm:text-sm border-gray-800 rounded-md" onChange={(e) => { setname(e.target.value) }} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2 py-2">
                                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                            <input type="text" name="username" id="username" placeholder="Username" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm h-8 pl-2 sm:text-sm border-gray-300 rounded-md" onChange={(e) => { setusername(e.target.value) }} />
                                        </div>
                                        {/* <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                                        <input type="password" name="password" placeholder="Password" id="postal_code" className="mt-1 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm h-8 sm:text-sm border-gray-300 rounded-md" />
                                    </div> */}
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2 py-2">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                            <input type="email" name="email" id="email" placeholder="Email" className="mt-1 focus:ring-indigo-500 pl-2 focus:border-indigo-500 block w-full shadow-sm h-8 sm:text-sm border-gray-300 rounded-md" onChange={(e) => { setemail(e.target.value) }} />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 lg:col-span-2 py-2">
                                            <label htmlFor="text" className="block text-sm font-medium text-gray-700">Mobile No</label>
                                            <input type="text" placeholder="Mobile" name="mobile" id="mobile" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm h-8 pl-2 sm:text-sm border-gray-300 rounded-md" onChange={(e) => { setmobile(e.target.value) }} />
                                        </div>

                                        <div className="col-span-6 sm:col-span-3 py-2 ">
                                            <label htmlFor="education" className="block text-sm font-medium text-gray-700">Education </label>
                                            <select id="education" name="education" autoComplete="education" className="mt-1 block w-full py-1.5 px-3 border pl-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
                                                onChange={(e) => { seteducation(e.target.value) }}>
                                                <option value="" className='font-mono text-gray-200'>Select Education</option>
                                                <option value="0">8th</option>
                                                <option value="1">9th</option>
                                                <option value="2">10th</option>
                                                <option value="3">11th</option>
                                                <option value="4">12th</option>
                                                <option value="5">Graducation</option>
                                                <option value="6">Postgraducation</option>

                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 py-2">
                                            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender </label>
                                            <select id="gender" name="gender" autoComplete="gender" className="mt-1 block w-full py-1.5 px-3 border pl-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  "
                                                onChange={(e) => { setgender(e.target.value) }}>
                                                <option value="">Select Gender</option>
                                                <option value="0">Male</option>
                                                <option value="1">Female</option>
                                                <option value="2">Other</option>


                                            </select>
                                        </div>
                                        <div className="col-span-6 sm:col-span-3 py-2">
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
                                        <div className="col-span-6 sm:col-span-3 py-2">
                                            <label htmlFor="district" className="block text-sm font-medium text-gray-700">District </label>
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
                                        <div className="col-span-6 sm:col-span-3 py-2">
                                            <label htmlFor="block" className="block text-sm font-medium text-gray-700">Block </label>
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
                                        <div className="col-span-6 sm:col-span-3 py-2">
                                            <label htmlFor="village" className="block text-sm font-medium text-gray-700">Village</label>
                                            <select id="village" name="village" autoComplete="village" className="mt-1 block w-full py-1.5 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  " onChange={(e) => { setvillageId(e.target.value) }}>
                                                <option>Select Village</option>
                                                {village.map((v) => {
                                                    return (
                                                        <option value={v.id} key={v.id}> {v.name}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className="col-span-6 py-2">
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700"> Address</label>
                                            <input type="text" name="address" id="address" autoComplete="address" placeholder="Address" className="mt-1 pl-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-8 border-gray-300 rounded-md" onChange={(e) => { setaddress(e.target.value) }} />
                                        </div>
                                        <div className="col-span-6 ">
                                            <label htmlFor="photo" className="block text-sm font-medium text-gray-700"> Photo</label>
                                            <input type="file" name="photo" id="photo" autoComplete="photo" className="mt-1   bg-white pl-2 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-8 border-gray-300 rounded-md" />
                                        </div>



                                    </div>
                                </div>
                                <div className="px-6 py-3 bg-gray-50 text-right sm:px-6 ">
                                    <button type="button" className="inline-flex justify-center py-1.5 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        onClick={createBeneficiry}
                                    >
                                        Create Beneficiry
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <ToastContainer />
            </Sidebar>
        </div>

    )
}

export default Beneficiry
