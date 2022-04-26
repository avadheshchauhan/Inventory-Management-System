import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    passowrd: '',
    reEnterPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="register">
      <h1>Register page</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Your Name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Your Email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="passowrd"
        value={user.passowrd}
        placeholder="Your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Password"
        onChange={handleChange}
      />
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
};

export default Register;
