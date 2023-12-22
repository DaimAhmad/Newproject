import '../Assessts/Login.css';
import React, { useState } from 'react';
import { addLogindata } from '../Services/api';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function Regestration() {
  const [login, setLogin] = useState({
    Name: '',
    Email: '',
    Password: '',
    Confirmpass: '',
  });

  const { Name, Email, Password, Confirmpass } = login;
  const navigate = useNavigate(); // Add this line

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(login);
      await addLogindata(login);
      alert('Data is saved');
    } catch (error) {
      console.log('Not saved...', error);
    }
  };

  return (
    <div>
      <div className="login-box">
        <p>Login</p>
        <form>
          <div className="user-box">
            <input required="" name="Name" value={Name} onChange={handleInputChange} type="text" />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input required="" name="Email" value={Email} onChange={handleInputChange} type="text" />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input required="" name="Password" value={Password} onChange={handleInputChange} type="password" />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input required="" name="Confirmpass" value={Confirmpass} onChange={handleInputChange} type="password" />
            <label>Confirm Password</label>
          </div>

          <button onClick={handleSubmit}style={{width:"10px"}} >Submit</button>
          <p>
          <GoogleLogin
              onSuccess={async (credentialResponse) => {
                console.log(credentialResponse);
                const decoded = jwtDecode(credentialResponse.credential);
                console.log(decoded);
                navigate('/home');
                // Update the login state with Google credentials
                setLogin({
                  Name: decoded.name,
                  Email: decoded.email,
                });
                

                // Call addLogindata with the updated login state
                try {
                  await addLogindata(login);
                  alert('Google auth data is saved');
                } catch (error) {
                  console.log('Google auth data not saved...', error);
                }

                navigate('/home');
              }}
              
              onError={() => {
                console.log('Login Failed');
              }}
            />  
          </p>
        </form>
      </div>
    </div>
  );
}

export default Regestration;
