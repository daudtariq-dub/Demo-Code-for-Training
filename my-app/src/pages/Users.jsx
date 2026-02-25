import { useState } from "react";
import UserList from "../components/UserList";
import AddUser from "../components/AddUser";

function Users()
{
    const [users,setUsers]=useState(["Daud","Ali"]);
    const addUserHandler = (newUser)=>{
        setUsers(...prev,newUser);
    };

    return (
        <div>
            <h2>
                Users Page
                <AddUser addUser={addUserHandler}></AddUser>
                <UserList users={users}></UserList>
            </h2>
        </div>
    );
}

export default Users;