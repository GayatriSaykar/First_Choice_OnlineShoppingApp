import { useReducer, useState, useEffect } from "react";    

const init={
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

export default function UpdatePassword(){
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
            method:"PUT",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({
                cust_email:customer.cust_email,
                cust_password:customer.cust_password
            })
        }

    fetch("http://localhost:9000/edit",reqOptions)
        .then(resp => resp.text())
        .then(data => setInsertMsg(data))

    }
   
    return (
        <div>
            <form className="form-control">

                 Enter EmailId :
                <input type="cust_email" name="cust_email" className="form-control" onChange={(e)=>{
                dispatch({type:'update',field:'cust_email',value:e.target.value})}}
                 />
                 <br />

                Enter New Password :
                <input type="password" name="cust_password" className="form-control"  onChange={(e)=>{
                dispatch({type:'update',field:'cust_password',value:e.target.value})}} />
                <br/>
               
                <button type="submit"  onClick={(e)=>{submitData(e)}}>Change</button>
            </form>
            <p> {JSON.stringify(customer)} </p>
        <p> {insertMsg} </p>
        </div>
    )
}



