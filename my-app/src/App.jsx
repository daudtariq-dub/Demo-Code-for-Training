import { BrowserRouter,Routes,Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Users from "./pages/Users";

function App()
{
  return (
    <BrowserRouter>
    <navBar></navBar>
    <Routes>
        <Route path="/" element ={<Home></Home>}></Route>
        <Route path ="/users" element = {<Users></Users>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;