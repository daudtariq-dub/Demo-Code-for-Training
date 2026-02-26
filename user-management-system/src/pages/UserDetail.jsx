import {useParams,Link} from "react-router-dom";
function UserDetail({users}){
    const {id}=useParams();
    const user=users.find(u=>u.id===Number(id));
    if(!user)
    {
        return <p>User not found</p>
    }
    return (
        <div>
            <h1 className="text-2xl font-bold">
                User Detail
            </h1>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <Link   
                to="/users"
                className="text-blue-500">
            </Link>
        </div>
    );
}

export default UserDetail;