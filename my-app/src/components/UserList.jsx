function UserList({users})
{
    return (
        <ul>
            {users.map((users,index)=>(<li key={index}>{users}</li>))}
        </ul>
    );
}

export default UserList;