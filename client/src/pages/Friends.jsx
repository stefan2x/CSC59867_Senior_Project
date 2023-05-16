import React from "react";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import Navbar from "../components/Navbar";



const Friends = () =>{
    const [users,setUsers] = useState([])

    //get all users
    useEffect(() => {
        const getUsers = async () => {
            try{
                const res = await publicRequest.get("/users" );
                setUsers(res.data);
            } catch(err) {
                console.log(err)
            }};

        getUsers();
    } , []);

    console.log(users)
    return (
        <>
            <Navbar/>
            {users.map(user => (
                <div>{user.firstname}</div>
            ))}
        </>
    )


    


}

export default Friends;