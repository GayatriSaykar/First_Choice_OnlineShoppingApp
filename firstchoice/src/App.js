import { Route } from "react-router-dom";
import Register from "./components/Register";
import UpdatePassword from "./components/UpdatePassword";
import UserHome from "./components/UserHome";
import Home from "./components/Home";
import Login from "./components/Login";
import { Link,Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <marquee style={{color:"Green"}}>First Choice</marquee>

    <nav className="navbar text-white bg-info">
    <Link to="/login" className="nav-link">Login</Link>
    <Link to="/register" className="nav-link">Register</Link>
    <Link to="/updatepassword" className="nav-link">Forget Password?</Link>
    </nav>

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/updatepassword" element={<UpdatePassword />} />
      <Route path="/userhome" element={<UserHome />} />
     </Routes>
    </div>
  );
}

export default App;
