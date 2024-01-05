import logo from './logo.svg';
import './App.css';
import {Link ,Route , Routes} from 'react-router-dom';
import Register from './Component/Register';
// import LoginPage from './Component/LoginComp';
import HomeComp from './Component/HomeComp';
import Product from './Component/Product';
import UpdatePassword from './Component/UpdatePassword';
import { useSelector } from 'react-redux';
import Login from './Component/Login';
import ContactDetails from './Component/Contact';
import AboutUs from './Component/About';





function App() {
 const mystate=useSelector(state=>state.logged)
  return (
    <div style={{display: mystate.loggedIn?"none":"block"}}>
  
  
    
      <div>
    <Routes>

      < Route path='/register' element={<Register/>}> </Route>
      {/* <Route path='/LoginComp' element={<LoginPage/>}></Route> */}
      <Route path='/home' element={<HomeComp/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>
      <Route path='/Updatepassword' element={<UpdatePassword/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/contact' element={<ContactDetails/>}></Route>
      <Route path='/About' element={<AboutUs/>}></Route>
      

      
    </Routes>
    </div>
    </div>
  );
}

export default App;
