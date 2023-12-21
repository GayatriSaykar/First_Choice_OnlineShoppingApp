import logo from './logo.svg';
import './App.css';
import {Link ,Route , Routes} from 'react-router-dom';
import Register from './Component/Register';
import LoginPage from './Component/LoginComp';
import HomeComp from './Component/HomeComp';
import PasswordSetForm from './Component/Passwordsetform';
import Product from './Component/Product';





function App() {
 
  return (
    <div>
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav">
          <li class="nav-item active">
              <Link to ="/register" className="navbar-brand">Register</Link>
          </li>
          <li class="nav-item active">
              <Link to ="/LoginComp" className="navbar-brand">Login</Link>
          </li>
          
          </ul>
    </nav>
    
      <div>
    <Routes>
      < Route path='/register' element={<Register/>}> </Route>
      <Route path='/LoginComp' element={<LoginPage/>}></Route>
      <Route path='/home' element={<HomeComp/>}></Route>
      <Route path='/password' element={<PasswordSetForm/>}></Route>
      <Route path='/Product' element={<Product/>}></Route>



    </Routes>
    </div>
    </div>
  );
}

export default App;
