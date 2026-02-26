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

function Users({users,addUser})
{
    return(
        <div>
            <h2>Users</h2>
            <AddUsers addUser={addUser}></AddUsers>
            <UserList users={users}></UserList>
        </div>
    )
}

function AddUsers({addUser})
{
    const inputRef=useRef();
    const formik =useFormik({
        initialValues:{
            name:"",
            email:""
        },
        validationSchema:Yup.object({
            name: Yup.string().required("Name req"),

            email: Yup.string().email("Invalid email").required("Email Required")
        }),
        onSubmit:values =>{
            addUser(values);

            formik.resetForm();

            inputRef.current.focus();
        }

    });

    return (
        <form onSubmit = {formik.handleSubmit}>
            <input
            ref={inputRef}
            name="name"
            placeholder="Name"
            onChange={formik.handleChange}
            value={formik.values.name}></input>

            <p>{formik.errors.name}</p>

            <input
                name="email"
                placeholder="email"
                onChange ={formik.handleChange}
                value={formik.values.email}>
            </input>

            <p>{formik.errors.email}</p>

            <button type ="submit">
                Add user
            </button>
        </form>
    );
}

function UserList({users})
{
    const navigate = useNavigate();
    return (
        <div>
            <h3>UserList</h3>
            {users.map(user=>(
                <div key = {user.id}>
                    {user.name} - {user.email}
                    <button onClick={()=>navigate(`/users/${user.id}`)}>View</button>
                </div>))}
        </div>
    );
}

function UserDetail({users})
{
    const {id} = useParams();
    const user = users.find(u=>u.id===Number(id));
    if(!user) return <p>User not found</p>

    return (
        <div>
            <h2>User Detail</h2>
            <p>Name: {user.name}</p>
            <p>Email:{user.email}</p>
            <Link to="/users">Back</Link>
        </div>
    );
}

