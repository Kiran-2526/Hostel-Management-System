import React from 'react'
import "../../styles/auth.css";
import { Link, useNavigate } from 'react-router-dom';

const WardenRegister = () => {

  const navigate = useNavigate();

  return (
    <div className='stdlogin'>
      <div className="blur-layer"></div>

      <div className='login-box'>
        <h2>Warden Register</h2>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Warden ID" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Register</button>

          <button 
            type="button" 
            style={{marginLeft:'4%'}} 
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </form>

        <p style={{marginTop:'10px'}}>
          Already have account? 
          <Link to='/loginwarden'><span> Login</span></Link>
        </p>
      </div>
    </div>
  )
}

export default WardenRegister;