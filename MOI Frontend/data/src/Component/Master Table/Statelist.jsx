import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../Home/Sidebar";
import Navbar from "../Home/Navbar";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Statelist = () => {
    let token = sessionStorage.getItem("token");
    const to = JSON.parse(sessionStorage.getItem('paylode'));

    const [err, seterror] = useState("");
    const [data, setdata] = useState([]);

    const getState = () => {
        axios
            .get(`http://localhost:3000/api/state/all`, {
                headers: {
                    token: `${token}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const postData = (id) => {


        axios
            .delete(`http://localhost:3000/api/state/${id}`, {
                headers: {
                    token: `${token}`,
                },
            })
            .then((res) => {
                console.log(res);
                seterror(toast.success(res.data.message, { position: toast.POSITION.TOP_CENTER, theme: "colored", transition: Flip, autoClose: 1000 }))
                getState()
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
        getState()

    }, []);

    return (
        <div>
            <Sidebar>
                <Navbar />
                <h1 className=" flex  text-lg font-bold py-2 items-center, justify-center">
                    STATE DETAILS
                </h1>
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg max-h-screen overflow-scroll scrollbar-hide  ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 px-6">
                                    Id
                                </th>
                                <th scope="col" className="py-3 px-6">
                                    State Name
                                </th>
                                {
                                    to.role === '1' ?
                                        <> <th scope="col" className="py-3 px-6">
                                            Edit
                                        </th>
                                            <th scope="col" className="py-3 px-6">
                                                Delete
                                            </th>
                                        </>


                                        : <></>
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((e) => {
                                return (
                                    <tr className="bg-white border-b dark:bg-gray-800  dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                        <th
                                            scope="row"
                                            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                        >
                                            {e.id}
                                        </th>
                                        <td className="py-4 px-6">{e.name}</td>

                                        {
                                            to.role == "1" ? <>


                                                <td className="py-4  px-2  ">

                                                    <button class="h-8 px-4  text-sm text-white transition-colors duration-150 bg-yellow-400 rounded-lg focus:shadow-outline hover:bg-yellow-600">Edit</button>

                                                </td>
                                                <td className="py-4   ">


                                                    <button class="h-8 px-4  text-sm text-white transition-colors duration-150 bg-red-600 rounded-lg focus:shadow-outline hover:bg-red-700" onClick={() => { postData(e.id) }}>Delete</button>

                                                </td>
                                            </> : <></>

                                        }
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                <ToastContainer />
            </Sidebar>
        </div>
    );
};

export default Statelist;
