import React from 'react'
import "../../styles/auth.css";
import { StudentRegister } from './StudentRegister';
import { Link } from 'react-router-dom';

const StudentLogin = () => {
  return (
    <div className='stdlogin'>
        <div className="blur-layer"></div>

        <div className='login-box'>
            <h2>Student Login</h2>
            <form>
                <input type="text" placeholder="Enter Roll Number" required />
                <input type="password" placeholder="Enter Password" required />

                <button type="submit">Login</button>
            </form>
            <Link to='/register'>New student? <span>Register</span></Link>
        </div>
    </div>
  )
}

export default StudentLogin