import {Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";

import {useState,useEffect} from "react";

function App(){

  //global state
  const [users, setUsers]=useState(()=>{
    const saved = localStorage.getItem("users");
    return saved ? JSON.parse(saved):[];
  });
  //Persist users
  useEffect(()=>{
    localStorage.setItem("users",JSON.stringify(users));
  },[users]);
  //callback from child
  function addUser(newUser){
    setUsers(prev=>prev.filter(u=>u.id!==id));
  }

  function deleteUser(id){
    setUsers(prev=>prev.filter(u=>u.id!==id));
  }

  return(
    <div className="min-h-screen bg-gray-100">
      <Navbar></Navbar>
      <div className="p-6">
        <Routes>
          <Route
            path="/"
            element={<Dashboard></Dashboard>}>
          </Route>
          <Route
            path="/users"
            element ={
              <Users
                users={users}
                addUser={addUser}
                deleteUser={deleteUser}></Users>
            }>
            </Route>
            <Route
              path ="users/:id"
              element ={<UserDetail users={users}></UserDetail>}>
            </Route>
            <Route path="*" element ={<NotFound></NotFound>}>
            </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;