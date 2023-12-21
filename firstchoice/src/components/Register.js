import { useReducer, useState, useEffect } from "react"

const init={
    cust_name:" ",
    contact_num:0,
    cust_address:" ",
    cust_email:" ",
    cust_password:" ",
}

const reducer=(state,action) => {
    switch(action.type) {
        case 'update':
            return {...state,[action.field]:action.value}
        case 'reset':
            return init;
    }
}

export default function Register(){
    const[customer,dispatch]=useReducer(reducer,init);
    const[msg,setMsg] = useState("abc")
    const[insertMsg, setInsertMsg] = useState("")

    useEffect(()=>{
        setMsg(localStorage.getItem("msg"))
    },[]);

    const submitData = (e) => {
        console.log(JSON.stringify(customer));
        e.preventDefault();
        const reqOptions={
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                cust_name:customer.cust_name,
                contact_num:customer.contact_num,
                cust_address:customer.cust_address,
                cust_email:customer.cust_email,
                cust_password:customer.cust_password
            })
        }

    fetch("http://localhost:9000/insertcustomer",reqOptions)
        .then(resp => resp.text())
        .then(data => setInsertMsg(data))

    }

    return(
        <div className="container">
        <form className="form-control">
        <h1>Register</h1>
      
        <label htmlFor="cust_name" className="form-label">Enter Customer Name:</label>
            <input type="text" name="cust_name" id="cust_name" value={customer.cust_name} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'cust_name',value:e.target.value})
            }} />
        
      
             <label htmlFor="contact_num" className="form-label">Enter Contact :</label>
            <input type="number" name="contact_num" id="contact_num" value={customer.contact_num} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'contact_num',value:e.target.value})
            }} />
       
            <label htmlFor="cust_address" className="form-label">Enter Address:</label>
            <input type="text" name="cust_address" id="cust_address" value={customer.cust_address} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'cust_address',value:e.target.value})
            }} />
      
            <label htmlFor="cust_email" className="form-label">Enter Email:</label>
            <input type="email" name="cust_email" id="cust_email" value={customer.cust_email} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'cust_email',value:e.target.value})
            }} />
        
            <label htmlFor="cust_password" className="form-label">Enter Password:</label>
            <input type="password" name="cust_password" id="cust_password" value={customer.cust_password} className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'cust_password',value:e.target.value})
            }} />
       
            <input type="submit" value="Insert" className="btn btn-primary" onClick={(e)=>{submitData(e)}} />&nbsp;
            <input type="reset" value="Clear" className="btn btn-primary" onClick={()=>{dispatch({type:"reset"})}} />

     
        </form>
        <p> {JSON.stringify(customer)} </p>
        <p> {insertMsg} </p>
       
        </div>
    )
}