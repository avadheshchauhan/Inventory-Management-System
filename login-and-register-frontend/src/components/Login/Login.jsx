import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    passowrd: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div className="login">
      <h1>Login page</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter your Email"
        onChange={handleChange}
      />
      <input
        type="text"
        name="password"
        value={user.passowrd}
        placeholder="Enter your Password"
        onChange={handleChange}
      />
      <div className="button">Login</div>
      <div>or</div>
      <div className="button">Register</div>
    </div>
  );
};

export default Login;
