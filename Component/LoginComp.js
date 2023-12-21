import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link} from "react-router-dom"
import { login } from "../loggedSlice";
import { useEffect, useReducer, useState } from "react";


export default function LoginPage() 
{
    const init = {
    cust_email: { value: '', valid: false, touched: false, error: 'Email is required' },
    cust_password: { value: '', valid: false, touched: false, error: 'Password is required' },
     formValid: false
    }

    const reducer = (state,action) => {
        switch(action.type)
        {
            case 'update':
                //object destructuring
                const {key,value,touched,valid,error,formValid} = action.data;
                return {...state,[key]:{value,touched,valid,error},formValid}
            case 'reset':
                return init;        
        }
    }

    const[customer,dispatch1] = useReducer(reducer,init);
    const[msg,setMsg] = useState("xx");
    const[flag,setFlag]=useState(false);
    const[flag1,setFlag1]=useState(false);
    const[insertMsg, setInsertMsg] = useState("")

    const dispatch = useDispatch()
    const mystate = useSelector((state) => state.logged)
    let navigate = useNavigate();

    useEffect(()=>{
        setMsg(localStorage.getItem("msg"))
    },[]);


    const handleClick = (e) => {
        e.preventDefault();
        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'},
            body: JSON.stringify({
                cust_email: customer.cust_email,
                cust_password: customer.cust_password
        })
    }
        fetch("http://localhost:9000/login", reqOptions)
    .then(resp => resp.text())
    .then(data => setInsertMsg(data) )   
        dispatch(login());
        navigate('/home');
    }


    const validateData = (key,val) => {
        let valid = true;
        let error = ""
        switch(key)
        {
            case 'cust_email':
               var pattern1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ 
               valid = pattern1.test(val);
               error = 'Invalid email address';

               break;
            case 'cust_password': 
                var pattern2 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,20}$/ 
                valid = pattern2.test(val);
                error = 'Invalid Password';
                break;
        }
        return { valid, error};
    }

    
    const handleChange = (key,value) => {
        //1. call validateData function
        const {valid, error} = validateData(key,value);

        //2. check the validity status of the form
        let formValid = true;
        for(let k in customer)
        {
            
            if(customer[k].valid === false)
            {
                formValid = false;
                break;
            }
        }
        console.log(formValid);

        //3. call to dispatch - updating the state
        dispatch1({type: "update",data:{key,value,touched:true,valid,error,formValid}})
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 ">
            <form>
                    <h2 style={{textAlign:'center'}}>Login</h2>
                        <div className="mb-3">
                            <label htmlFor="cust_email" className="form-label">Enter Email:</label>
                            <input type="text" name="cust_email" className="form-control" onChange={handleChange} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cust_password" className="form-label">Enter Password:</label>
                            <input type="password" name="cust_password" className="form-control" onChange={handleChange} />
                        </div>
                        <br />
                        <div class="nav-item active">
                        <button type="button" className="btn btn-primary" onClick={handleClick}>Login</button>
                        <Link to ="/password" className="navbar-brand"style={{color:"blue",textAlign:"left"}}>Forgot Password</Link>
              
          </div>
                        
                    </form>
            <p> {JSON.stringify(customer)} </p>
            <p> Logged in : {mystate.loggedIn.toString()} </p>
        </div>
        </div>
        </div>
    )
}
