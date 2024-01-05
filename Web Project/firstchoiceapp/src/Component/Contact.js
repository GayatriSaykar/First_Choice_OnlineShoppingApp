
import React from 'react';
import { Link } from 'react-router-dom';

const contactDetails = [
  
  { name: 'Gayatri Sayakar', email: 'gayatri@gmail.com', phone: '8938875865' },
  { name: 'Avantika Bhalerao', email: 'avantika@gmail.com', phone: '6438718865' },
  { name: 'Bhushan Jadhav', email: 'bhushan@gmail.com', phone: '7038713865' },
  { name: 'Krishna Tulaskar', email: 'krishna@gmail.com', phone: '9038718365' },
];

const ContactDetails = () => {
  return (
    <div className="container mt-4">
    <h2>Contact Details</h2>
    <Link to="/home" className="nav-link" style={{color:"white",marginLeft:"95%",backgroundColor:"blue",padding:"5px 10px"}}>BACK</Link>
    <hr/>
    <div className="row">
      {contactDetails.map((contact, index) => (
        <div key={index} className="col-md-6 col-lg-3 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{contact.name}</h5>
              <p className="card-text">Email: {contact.email}</p>
              <p className="card-text">Phone: {contact.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default ContactDetails;
