

import React, { useState } from 'react';
import axios from 'axios';



const Userdata = () => {

  const [data, setdata] = useState([])

  const token = sessionStorage.getItem('token')
  useState(() => {
    const getBenificiry = () => {
      axios.get(`http://localhost:3000/api/user/all`, {
        headers: {
          "token": `${token}`

        }
      }).then((res) => {
        console.log(res.data)
        setdata(res.data)
      }).catch((err) => {
        console.log(err)
      })
    };
    getBenificiry()

  }, [])
  return (
    <div>
     

          <div className="overflow-x-auto relative shadow-md sm:rounded-lg  ">
              <h1 className=' flex  text-lg font-bold py-2 items-center, justify-center'>USER DETAILS</h1>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                id
              </th>
              <th scope="col" className="py-3 px-6">
                Name
              </th>
              <th scope="col" className="py-3 px-6">
                Username
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              
              <th scope="col" className="py-3 px-6">
                role
              </th>
             
              <th scope="col" className="py-3 px-6">
                <span className="">Edit</span>
              </th>
              <th scope="col" className="py-3 px-6">
                <span className="">Delet</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => {
              return (
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {e.id}
                  </th>
                  <td className="py-4 px-6">
                    {e.name}
                  </td>
                  <td className="py-4 px-6">
                    {e.username}
                  </td>
                  <td className="py-4 px-6">
                    {e.email}
                  </td>
                  <td className="py-4 px-6">
                    {
                      e.role === "1" ? <p>Admin</p> : <><p>Field Officer</p></>
                    }
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






    </div>)
}

export default Userdata