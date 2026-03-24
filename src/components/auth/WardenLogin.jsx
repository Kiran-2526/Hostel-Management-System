import React from 'react'
import "../../styles/auth.css";
import { Link, useNavigate } from 'react-router-dom';

const WardenLogin = () => {

  const navigate = useNavigate();

  return (
    <div className='stdlogin'>
        <div className="blur-layer"></div>

        <div className='login-box'>
            <h2>Warden Login</h2>

            <form>
                <input type="text" placeholder="Enter Warden ID" required />
                <input type="password" placeholder="Enter Password" required />

                <button type="submit">Login</button>

                <button 
                  type="button" 
                  style={{marginLeft:'4%'}} 
                  onClick={() => navigate("/")}
                >
                  Back
                </button>
            </form>

            <Link 
              to='/registerwarden' 
              style={{marginTop:'5%',display:'inline-block',color:'white'}}
            >
              New warden? <span>Register</span>
            </Link>
        </div>
    </div>
  )
}

export default WardenLogin;