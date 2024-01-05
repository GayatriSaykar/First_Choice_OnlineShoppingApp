import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const init = {
  cust_email: "",
  cust_password: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.field]: action.value };
    case "reset":
      return init;
    default:
      return state;
  }
};

const validateInput = (field, val) => {
  let valid = true;
  let error = "";

  switch (field) {
    case "cust_password":
      const cust_passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,20}$/;
      valid = cust_passwordPattern.test(val);
      error = 'Password is required';
      break;
    default:
      break;
  }

  return { valid, error };
};



export default function UpdatePassword() {
  const [customer, dispatch] = useReducer(reducer, init);
  const [msg, setMsg] = useState("abc");
  const [insertMsg, setInsertMsg] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    setMsg(localStorage.getItem("msg"));
  }, []);
let navigate = useNavigate();

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
    .then(data => {
      console.log(data)
      if(data==="Password updated successfully!!!"){
        alert("Password changed successfully")
      navigate("/");
    }
    else{
      alert("Invalid email");
    }
    })
     

}

  return (
    <div>
      <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 ">
      <form>
      <h2 style={{textAlign:'center'}}>Set Password</h2>
      <div className="mb-3">
      <label htmlFor="email" className="form-label">
           Enter Email
          </label>
        <input
          type="email"
          name="cust_email"
          className="form-control"
          onChange={(e) => {
            dispatch({ type: "update", field: "cust_email", value: e.target.value });
          }}
        />
        
        </div>
        <div className="mb-3">
        <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
        <input
          type="password"
          name="cust_password"
          className="form-control"
          onChange={(e) => {
            dispatch({ type: "update", field: "cust_password", value: e.target.value });
          }}
        />
        </div>
        <div className="text-center d-grid">
        <button type="submit" className="btn btn-primary"   onClick={(e) => submitData(e)}>
          Set Password
        </button>
        </div>
      </form>
      {/* <p>{JSON.stringify(customer)}</p>
      <p>{insertMsg}</p> */}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </div>
  </div>
  </div>
  );
}
