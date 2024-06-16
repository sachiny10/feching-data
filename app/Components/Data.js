"use client"

import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Data = () => {
   const [Users, setUsers]  = useState([]);

    const getUsers = async () => {
       try {
           const res = await axios.get('https://jsonplaceholder.typicode.com/users');
           const data = res.data;
          //  console.log(data);
           setUsers(data);
       } catch (error) {
           console.error(error);
       }
    }

    // it is calling the function automatically.


    useEffect(()=>{
      getUsers()
    },)
    

    return (
        <>
            <button className='bg-green-500 px-6 py-3 m-5 text-white rounded-xl' onClick={getUsers}>GetData</button>
            <div className="p-8 m-5 bg-slate-200 rounded-xl">
               <ul> {Users.map((elem) => {
                    return <li key={elem.id}>{elem.name}</li>
                })}</ul>
            </div>
        </>
    )
}

export default Data;
