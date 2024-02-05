import React from "react";
import "../assets/css/login.css";
import { Link } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div id="login-form">
      <h1>Login</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
        <button ><Link to='/home'>submit</Link></button> 
      </form>
    </div>
  );
};

export default LoginForm;