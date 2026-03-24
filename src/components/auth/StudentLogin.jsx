import React from 'react'
import "../../styles/auth.css";
import { Link, useNavigate } from 'react-router-dom';

const StudentLogin = () => {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // 🔥 stop page refresh

    // later you can validate here (API call)

    navigate("/dashboardlayout "); // ✅ go to dashboard
  };

  return (
    <div className='stdlogin'>
        <div className="blur-layer"></div>

        <div className='login-box'>
            <h2>Student Login</h2>

            {/* ✅ ADD onSubmit */}
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Enter Roll Number" required />
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
              to='/registerstudent' 
              style={{marginTop:'5%',display:'inline-block',color:'white'}}
            >
              New student? <span>Register</span>
            </Link>
        </div>
    </div>
  )
}

export default StudentLogin;