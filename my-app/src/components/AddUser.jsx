import {userState} from "react";

function AddUser({onAddUser})
{
    const [name,setName]=useState("");
    const submitHandler=()=>{
        onAddUser(name);
        setName("");
    };

    return (
        <div>
            <input value = {name}
            onChange={(e)=>setName(e.target.value)}
            placeHolder="enter name">
            </input>
            <button onClick ={submitHandler}>
                Add user
            </button>
        </div>
    );

}

export default AddUser;