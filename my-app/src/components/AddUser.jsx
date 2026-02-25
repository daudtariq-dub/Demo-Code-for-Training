import {useState} from "react";

function AddUser({addUserHandler})
{
    const [name,setName]=useState("");
    const submitHandler=()=>{
        addUserHandler(name);
        setName("");
    };

    return (
        <div>
            <input value = {name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="enter name">
            </input>
            <button onClick ={submitHandler}>
                Add user
            </button>
        </div>
    );

}

export default AddUser;