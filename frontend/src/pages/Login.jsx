// Login.js
import React, { useState } from 'react';
import './css/login.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
    console.log('Email:', email);
    console.log('Password:', password);
    alert(`Logged in with Email: ${email}`);
  };

  return (
    <div className='hero'>
    <div className="login-container">
      <div className="login-form">
        <h1>Login</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className='logbutton' type="submit">Login</button>
        </form>
        <div className="login-footer">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
