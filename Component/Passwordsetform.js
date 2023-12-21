import React, { useState } from 'react';
import axios from 'axios';

const PasswordSetForm = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleSetPassword = async () => {
    try {
      // Make a request to the Node.js backend to update the password
      const response = await axios.post('http://localhost:3000/update-password', {
        email,
        newPassword,
      });

      console.log(response.data);
    } catch (error) {
      console.error('Error updating password:', error);
    }
  };

  return (
    <div>
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-4 ">
      <h2>Password Set</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New Password
          </label>
          <input
            type="password"
            className="form-control"
            id="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSetPassword}>
          Set Password
        </button>
      </form>
    </div>
    </div>
</div>
</div>
  );
};

export default PasswordSetForm;
