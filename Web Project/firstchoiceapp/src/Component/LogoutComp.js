import { useDispatch, useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom";
import { logout } from "../loggedSlice";

export default function LogoutComp() {
    const dispatch = useDispatch();
    const navigate=useNavigate('/')
    dispatch(logout());
    const mystate = useSelector(state=>state.logged)
    navigate("/")
    
}