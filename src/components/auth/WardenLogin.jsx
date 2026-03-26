import React, { useState } from 'react'
import "../../styles/auth.css";
import { Link, useNavigate } from 'react-router-dom';

const WardenLogin = () => {

  const navigate = useNavigate();

  const [wardenId, setWardenId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:8080/warden/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          wardenId,
          password
        })
      });

      const data = await res.text();

      if (data === "Login Success") {
        // alert("Warden Login Success");
        navigate("/WardenDashboard");
      } else {
        alert(data);
      }

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className='stdlogin'>
        <div className="blur-layer"></div>

        <div className='login-box'>
            <h2>Warden Login</h2>

            <form onSubmit={handleSubmit}>
                
                <input
                  type="text"
                  placeholder="Enter Warden ID"
                  required
                  value={wardenId}
                  onChange={(e) => setWardenId(e.target.value)}
                />

                <input
                  type="password"
                  placeholder="Enter Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

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