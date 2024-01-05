import { useSelector } from "react-redux"
import { Link, Outlet} from "react-router-dom"
import imgs from '../image/14.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../image/img1.jpg'

export default function HomeComp(){

    const mystate = useSelector(state=>state.logged)
    return (
        <div >
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="nav navbar">
                <li className="nav-item">
                    <Link to="/Product" className="nav-link">PRODUCT</Link>
                </li>
                <li className="nav-item">
                    <Link to="/About" className="nav-link">ABOUT US</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">CONTACT</Link>
                </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link">LOGOUT</Link>
                </li>
            </ul>
            </nav>
        {/* <p> Login status: {mystate.loggedIn.toString()}</p> */}
        <div style={{backgroundColor:"CornflowerBlue", height:"1400px", width:"1600px"}}>
            <h1 style={{textAlign:"center",color:"white",paddingTop:"150px"}}>WELCOME TO FIRST CHOICE APP</h1>
           
                <img className="img-fluid" src={img} style={{height:"200px" ,width:"300px",marginLeft:'600px'}}/>
          
            
      
        </div>
        <Outlet />
       </div> 
    )

}