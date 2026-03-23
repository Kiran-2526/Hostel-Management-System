import React from 'react'
import "../../styles/auth.css";
import { Link } from 'react-router-dom';

export const StudentRegister = () => {
  return (
    <div className='stdlogin'>
      <div className="blur-layer"></div>

      <div className='login-box'>
        <h2>Student Register</h2>

        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="text" placeholder="Roll Number" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Room Number" />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />

          <button type="submit">Register</button>
        </form>

        <p style={{marginTop:'10px'}}>
          Already have account? 
          <Link to='/login'><span> Login</span></Link>
        </p>
      </div>
    </div>
  )
}

export default StudentRegister;