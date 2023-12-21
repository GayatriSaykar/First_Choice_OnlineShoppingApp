import React, { useReducer,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const init = {
  cust_name: { value: '', valid: false, touched: false, error: 'Name is required' },
  contact_num: { value: '', valid: false, touched: false, error: 'Contact is required' },
  cust_email: { value: '', valid: false, touched: false, error: 'Email is required' },
  cust_password: { value: '', valid: false, touched: false, error: 'Password is required' },
  formValid: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      const { key, value, touched, valid, error, formValid } = action.data;
      return { ...state, [key]: { value, touched, valid, error }, formValid };
    case 'reset':
      return init;
    default:
      return state;
  }
};

export default function Register() {


  const [customer, dispatch] = useReducer(reducer, init);
  const [msg,setMsg]=useState("");
  const [insertmsg,setInsertmsg]=useState("");


  const validateData = (key, val) => {
    let valid = true;
    let error = '';

    switch (key) {
      case 'cust_name':
        const cust_namePattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
        valid = cust_namePattern.test(val);
        error = 'Name is required';
        break;
      case 'contact_num':
        const contact_numPattern=/^\d{10}$/;
        valid = contact_numPattern.test(val);
        error = 'Contact is required';
        break;
      case 'cust_email':
        const cust_emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        valid = cust_emailPattern.test(val);
        error = 'Invalid email address';
        break;
      case 'cust_password':
        const cust_passwordPattern= /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\S]{8,20}$/;
        valid = cust_passwordPattern.test(val);
        error = 'Password is required';
        break;
      default:
        break;
    }

    return { valid, error };
  };

  const handleChange = (key, value) => {
    const { valid, error } = validateData(key, value);

    let formValid = true;
    for (let k in customer) {
      if (customer[k].valid === false || customer[k].touched === false) {
        formValid = false;
        break;
      }
    }

    dispatch({ type: 'update', data: { key, value, touched: true, valid, error, formValid } });
  };

  const submitData = (e) => {
    e.preventDefault();
    // Add your server-side API call or form submission logic here

    console.log(JSON.stringify(customer));
        const reqOptions = {
            method:"POST",
            headers: {'content-type':'application/json'},
            body: JSON.stringify({
                cust_name: customer.cust_name.value,
                contact_num: customer.contact_num.value,
                cust_email: customer.cust_email.value,
                cust_password: customer.cust_password.value
            })
        }
        fetch("http://localhost:9000/CustInsert", reqOptions)
        .then(resp => resp.text())
        .then(data => setInsertmsg(data) )
  };

  return (
    <div className="container mt-5">
      <h1>{msg}</h1>
      <h1 className="h4 mb-4">Registration</h1>
      <div className="col md-4">
      <form>
        <div className="mb-2">
          <label className="form-label ">Name:</label>
          <input
            type="text"
            className={`form-control form-control-sm ${customer.cust_name.touched && !customer.cust_name.valid ? 'is-invalid' : ''}`}
            value={customer.cust_name.value}
            onChange={(e) => handleChange('cust_name', e.target.value)}
            onBlur={(e) => handleChange('cust_name', e.target.value)}
          />
          {
            customer.cust_name.touched && !customer.cust_name.valid && (
            <div className="invalid-feedback">{customer.cust_name.error}</div>
          )}
        </div>

        <div className="mb-2">
          <label className="form-label">Contact:</label>
          <input
            type="text"
            className={`form-control form-control-sm ${customer.contact_num.touched && !customer.contact_num.valid ? 'is-invalid' : ''}`}
            value={customer.contact_num.value}
            onChange={(e) => handleChange('contact_num', e.target.value)}
            onBlur={(e) => handleChange('contact_num', e.target.value)}
          />
          {customer.contact_num.touched && !customer.contact_num.valid && (
            <div className="invalid-feedback">{customer.contact_num.error}</div>
          )}
        </div>

        <div className="mb-2">
          <label className="form-label">Email:</label>
          <input
            type="text"
            className={`form-control form-control-sm ${customer.cust_email.touched && !customer.cust_email.valid ? 'is-invalid' : ''}`}
            value={customer.cust_email.value}
            onChange={(e) => handleChange('cust_email', e.target.value)}
            onBlur={(e) => handleChange('cust_email', e.target.value)}
          />
          {customer.cust_email.touched && !customer.cust_email.valid && (
            <div className="invalid-feedback">{customer.cust_email.error}</div>
          )}
        </div>

        <div className="mb-2">
          <label className="form-label">Password:</label>
          <input
            type="password"
            className={`form-control form-control-sm ${
              customer.cust_password.touched && !customer.cust_password.valid ? 'is-invalid' : ''
            }`}
            value={customer.cust_password.value}
            onChange={(e) => handleChange('cust_password', e.target.value)}
            onBlur={(e) => handleChange('cust_password', e.target.value)}
          />
          {customer.cust_password.touched && !customer.cust_password.valid && (
            <div className="invalid-feedback">{customer.cust_password.error}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary btn-sm" disabled={!customer.formValid} onClick={submitData}>
          Submit
        </button>

        <button type="reset" className="btn btn-secondary btn-sm ms-2" onClick={() => dispatch({ type: 'reset' })}>
          Clear
        </button>
      </form>
      </div>
      <p className="mt-3">{JSON.stringify(customer)}</p>
      <p>{insertmsg}</p>
    </div>
  );
}
