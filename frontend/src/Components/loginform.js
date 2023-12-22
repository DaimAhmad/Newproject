// Login.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Assessts/Login.css';
import { Link } from 'react-router-dom';
import { login } from '../Services/api';
import { Context } from './Context'; 


function Login() {
  const [details, setDetails] = useState({
    Email: '',
    Password: '',
  });

  const { Email, Password } = details;
  const navigate = useNavigate();
  const { handleLogin } = useContext(Context); // Access the handleLogin function from the context

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await login(details);
      const res = response.data;
      if (res.message === true) {
        // Successful login, handle the response accordingly
        console.log('Login successful');
        
        // Pass the user's information to the context
        if(res.email) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('adminEmail', res.email);
          navigate('/Dashboard');
        } else {
          localStorage.setItem('token', res.token);
          localStorage.setItem('userEmail', res.user.Email);
          handleLogin({
            name: response.data.user.Name,
            email: response.data.user.Email,
          });
          navigate('/home');
        }
      } else {
        alert('Invalid Email');
      }
    } catch (error) {
      alert('Data Not found');
    }
  };

  return (
    <div>
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input
              required=""
              name="Email"
              type="text"
              value={Email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input
              required=""
              name="Password"
              type="Password"
              value={Password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>
          <button type="submit" onClick={handleSubmit}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
        </form>
        <p>
          Don't have an account?{' '}
          <Link to="/regestrationform" className="a2">
            Sign up!
          </Link>
        </p>
     
      </div>
    </div>
  );
}

export default Login;
