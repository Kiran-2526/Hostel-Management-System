import React, { useState } from 'react'
import "../../styles/auth.css";
import { Link, useNavigate } from 'react-router-dom';

const StudentLogin = () => {

  const navigate = useNavigate();

  const[rollNumber,setRollNumber] = useState("");
  const[password,setPassword] = useState("");

  const handleSubmit = async (e) =>{
    e.preventDefault();

    const res = await fetch("http://localhost:8080/student/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        rollNumber:rollNumber,
        password:password
      })
    })
    const data = await res.text();

    if(data == "Login Success"){
      alert("Login Success")
    }
    else{
      alert(data);
    }
  }

  return (
    <div className='stdlogin'>
      <div className="blur-layer"></div>

      <div className='login-box'>
        <h2>Student Login</h2>

        <form onSubmit={handleSubmit}>
          <input type="text" name="rollNumber" placeholder="Enter Roll Number" required onChange={(e)=>setRollNumber(e.target.value)}/>
          <input type="password" name="password" placeholder="Enter Password" required onChange={(e)=>setPassword(e.target.value)}/>

          <button type="submit">Login</button>

          <button
            type="button"
            style={{ marginLeft: '4%' }}
            onClick={() => navigate("/")}
          >
            Back
          </button>
        </form>

        <Link
          to='/registerstudent'
          style={{ marginTop: '5%', display: 'inline-block', color: 'white' }}
        >
          New student? <span>Register</span>
        </Link>
      </div>
    </div>
  )
}

export default StudentLogin;