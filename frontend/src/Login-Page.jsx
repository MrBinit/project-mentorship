import React, { useState } from "react"; // Import useState from 'react'
import './Login-Page.css';
import login from './Images/login.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login_Page() {
  // Define state variables for form input values
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  // Handle form input changes
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/login', values)
      .then((res) => {
        if (res.data.Status === "Success") {
          navigate('/dashboard'); // Change the route to your dashboard page
        } else {
          alert("Error");
        }
      })
      .catch(err => console.error(err)); // Use .catch to handle errors
  };

  return (
    <div className="Login_Page"> {/* Removed the extra enclosing <> */}
      <div className="Canteen">
        <div className="Kings_Canteen">
          <h1> King's</h1>
          <h1>Canteen</h1>
        </div>

        <div className="Grab_a_bite">
          <h1> <i>grab a</i></h1>
          <h1> <i>bite!</i></h1>
        </div>
      </div>

      <div className="Input_Container">
        <div className="Homepage_link">
          <ul>
            <li>
              <Link to="/"> <h2>Home</h2></Link>
            </li>
          </ul>
        </div>
        <img src={login} alt="Login" />
        <input
          className="Input"
          placeholder="Email" // Changed placeholder text to "Email"
          value={values.email} // Use values.email for input value
          onChange={(e) => setValues({ ...values, email: e.target.value })} // Update email value
        />
        <input
          className="Input"
          placeholder="Password" // Changed placeholder text to "Password"
          type="password" // Set the input type to password
          value={values.password} // Use values.password for input value
          onChange={(e) => setValues({ ...values, password: e.target.value })} // Update password value
        />
        <button className="Login-button" onClick={handleSubmit}>Login</button>
        <Link to="/register">
          <button className="Register-button">Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Login_Page;




