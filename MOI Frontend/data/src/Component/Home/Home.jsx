import React from 'react';
import Benficiirydata from '../Beneficiry/Benficiirydata';
import Userdata from '../User/Userdata';




const Home = () => {
    const to = JSON.parse(sessionStorage.getItem('paylode'));

    return (
        <div >

            {to.role == "1" ?
                <Userdata />
                : <>
                    <Benficiirydata />
                </>}




        </div>
    )
}

export default Home
