import { useReducer, useState } from "react";
import { Link } from "react-router-dom";

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
        .then(data => setInsertMsg(data))

    }


    return(
        <div className="container">
            <form>
            <div>
                <h1>Login</h1>
            </div>
            <div>
            <label htmlFor="cust_email" className="form-label">Enter UserId:</label>
            <input type="email" className="form-control" name="cust_email" value={customer.cust_email} onChange={(e)=>{
                dispatch({type:'update',field:'cust_email',value:e.target.value})
            }} />
            </div>
            <label htmlFor="cust_password" className="form-label">Enter Pwd:</label>
            <input type="password" className="form-control" name="cust_password" value={customer.cust_password} onChange={(e)=>{
                dispatch({type:'update',field:'cust_password',value:e.target.value})
            }} />
            <div>
            <div className="form-label">
            <Link to="/updatepassword" className="nav-link" style={{color:"blue"}}>Forget Password?</Link>
            </div>
            <div>
            <input type="submit" value="Login" className="btn btn-primary" onClick={(e)=>{submitData(e)}} />&nbsp;
            <input type="reset" value="Clear" className="btn btn-primary" onClick={()=>{dispatch({type:"reset"})}} />
            </div>
            </div>
            </form>
            {/* <p> {JSON.stringify(customer)} </p>
            <p> {insertMsg} </p> */}
            </div>
    )

}