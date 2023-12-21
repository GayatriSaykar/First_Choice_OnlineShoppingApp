import { Link } from "react-router-dom";

export default function UserHome(){
    return(
        <div>
          <Link to="/logout" className="nav-link">Logout</Link>
        </div>
    )
 }