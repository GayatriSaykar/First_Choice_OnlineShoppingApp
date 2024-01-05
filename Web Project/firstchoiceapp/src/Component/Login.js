import { useReducer, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { login } from "../loggedSlice";
import { useSelector } from "react-redux";

export default function Login(){    

    const init={
        cust_email:"",
        cust_password:""
    }

    const reducer= (state,action) => {
        switch(action.type){
            case 'update':
                return {...state,[action.field]:action.value}
            case 'reset':
                return init;
        }
    }

    const[customer,dispatch]=useReducer(reducer,init);
    const[msg,setMsg] = useState("abc")
    const[insertMsg, setInsertMsg] = useState("")
    const mystate = useSelector((state) => state.logged)
    let navigate = useNavigate();


    const submitData = (e) => {
        console.log(JSON.stringify(customer));
        e.preventDefault();
        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                cust_email:customer.cust_email,
                cust_password:customer.cust_password
            })
        }

    fetch("http://localhost:9000/login",reqOptions)
        .then(resp => resp.text())
.then(data => {
            if(data=="Login Successfully!!!"){
                dispatch(login());
                navigate('/home');
            }else{
                setInsertMsg(data);
            }
        })        
       // dispatch(login());
    }


    return(
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 ">
            <form>
            <h2 style={{textAlign:'center'}}>Login</h2>
            <div className="mb-3">
            <label htmlFor="cust_email" className="form-label">Enter Email:</label>
            <input type="email" className="form-control" name="cust_email" value={customer.cust_email} required onChange={(e)=>{
                dispatch({type:'update',field:'cust_email',value:e.target.value})
            }} />
            </div>
            <div className="mb-3">
            <label htmlFor="cust_password" className="form-label">Enter Password:</label>
            <input type="password" className="form-control" name="cust_password" value={customer.cust_password} required onChange={(e)=>{
                dispatch({type:'update',field:'cust_password',value:e.target.value})
            }} />
            </div>
            <div>
            <div style={{marginLeft:'250px'}}>
           
            <Link to="/updatepassword" className="nav-link" style={{color:"blue"}}>Forget Password?</Link>
            </div>
            <br />
        
            <div className="d-grid">
            <input type="submit" value="Login" className="btn btn-primary" onClick={(e)=>{submitData(e)}} />&nbsp;
            {/* <input type="reset" value="Clear" className="btn btn-secondary" onClick={()=>{dispatch({type:"reset"})}} /> */}
            </div>
            <Link to ="/register" className="nav-link" style={{color:"blue"}}>Create New Account?</Link> 
            </div>
            </form>
            {/* <p> {JSON.stringify(customer)} </p>*/}
            <br/>
            <p style={{color:"red"}}> {insertMsg} </p>  
            </div>
            </div>
            </div>
    )

}
