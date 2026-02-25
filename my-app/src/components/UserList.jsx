function UserList({users})
{
    return (
        <ul>
            {users.map((users,index)=>(<li key={index}>{user}</li>))}
        </ul>
    );
}

export default UserList;