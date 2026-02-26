import {useNavigate} from "react-router-dom";
function UserCard({user,deleteUser}){
    const navigate = useNavigate();
    return(
        <div className="bg-white p-4 shadow rounded">
            <h3 className="font-bold">
                {user.name}
            </h3>
            <p>{user.email}</p>
            <div className="flex gap-2 mt-2">
                <button 
                    onClick={()=>navigate(`/users/${user.id}`)}
                    className="bg-blue-500 text-white px-3 py-1 rounded">
                    View
                </button>
                <button
                    onClick={()=>deleteUser(user.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded">
                    Delete
                </button> 
            </div>
        </div>
    );
}

export default UserCard;