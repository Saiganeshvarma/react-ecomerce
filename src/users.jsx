import React, { useEffect, useState } from 'react'


function Users(){
    var [data,setData] = useState([])

    async function fetchData(){
        var result = await fetch("https://fakestoreapi.com/users")
        var myResult = await result.json()
        setData(myResult)
        console.log(data);
    }
    console.log(data);
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div>
            {
                data.map((item)=>{
                    return(
                        <div key={item.id}>
                            <h1>{item.id}</h1>
                            <h2>{item.email}</h2>
                            <h2>{item.username}</h2>
                            <h2>{item.password}</h2>
                            <h1>{item.name.firstname}</h1>
                            <h1>{item.name.lastname}</h1>

                        </div>
                    )
                })
            }

        </div>
    )
}


export default Users 