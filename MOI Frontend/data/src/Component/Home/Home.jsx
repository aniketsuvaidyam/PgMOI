import React, { useState } from 'react';
import axios from 'axios';
import Benficiirydata from '../Beneficiry/Benficiirydata';
import Userdata from '../User/Userdata';




const Home = () => {
    const to = JSON.parse(sessionStorage.getItem('paylode'));
    const [data, setdata] = useState([])

    const token = sessionStorage.getItem('token')
    useState(() => {
        const getBenificiry = () => {
            axios.get(`http://localhost:3000/api/beneficiry/all`, {
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
        <div >
            
              {   to.role == "1" ?<Userdata/>   : <> <Benficiirydata /> </>  } 
                    
                 
        </div>
    )
}

export default Home
