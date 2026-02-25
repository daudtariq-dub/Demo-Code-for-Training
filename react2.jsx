import React, {useRef,useState,useEffect} from "react";
import {BrowserRouter,Route,Routes,Link,useParams,useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function App()
{
    const [users,setUsers]=useState("");
    useEffect (() =>
    {
        console.log ("App rendered or users updated")

    },[users]);

    function addUser (addUser)
    {
        setUsers(prevUsers=>[...prevUsers,{id:Date.now(...users)}]);
    }
    return (
        <BrowserRouter>
        <NavBar>
        <Routes>
            <Route
                path ="/"
                element ={<Home users={users}></Home>}>
            </Route>
            <Route path="/users" element ={<Users user={users}
            addUser={addUser}></Users>
            }>
            </Route>
            <Route path="/users/:id" element ={<UserDetails users={users}></UserDetails>}>
            </Route>
            </Routes></NavBar></BrowserRouter>
    )
}

function NavBar()
{
    return (
        <nav style ={{marginBottom:20}}>
            <Link to ="/">Home</Link>
            <Link to="/users">Users</Link>
        </nav>
    )
}

function Home({users}) //recieved props
{
    return (
        <div>
            <h2>Home</h2>
            <p>Total Users = {users.length}</p>
        </div>
    )

}
