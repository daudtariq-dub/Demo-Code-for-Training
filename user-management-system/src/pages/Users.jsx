import UserCard from "../components/UserCard";
import UserForm from "../components/UserForm";
function Users({users,addUser,deleteUser})
{
    return(
        <div>
            <h1 className="text-2xl font-bold mb-4">
                Users
            </h1>
            <UserForm addUser={addUser}>
            </UserForm>
            <div className="grid gap-2 mt-4">
                {users.map(user=>(
                    <UserCard
                        key={user.id}
                        user={user}
                        deleteUser={deleteUser}>
                    </UserCard>
                ))}
            </div>
        </div>
    );
}
export default Users;