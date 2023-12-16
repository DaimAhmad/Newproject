import '../Assessts/Login.css';
import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { addLogindata } from '../Services/api';
 

function Regestration() {
  const [login, setLogin] = useState({
    Name: "",
    Email: "",
    Password: "",
    Confirmpass: "",
  });

  const { Name, Email, Password, Confirmpass } = login;

  const handleInputChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
    //   const loginData = new FormData();
    //   loginData.append("Name", Name);
    //   loginData.append("Email", Email);
    //   loginData.append("Password", Password);
    //   loginData.append("Confirmpass", Confirmpass);
      
      console.log(login);
      await addLogindata(login);
      alert("Data is saved");
    } catch (error) {
      console.log("Not saved...", error);
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

          <button onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Regestration;