import React, { useState } from 'react'
import "../../styles/complaints.css";
import { useNavigate } from 'react-router-dom';

const MyComplaints = () => {

  const navigate = useNavigate();

  const fullname = localStorage.getItem("fullName");
  const roomNumber = localStorage.getItem("roomNumber");

  const [data, setData] = useState({
    title: "",
    category: "",
    description: "",
    roomNumber: roomNumber || "",
    fullName: fullname || ""
  });

  const handleSubmit = async () => {
    try {
      const res = await fetch("http://localhost:8080/student/postcomplaints", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();

      if (res.ok) {
        alert("Complaint Posted Successfully");

        setData({
          title: "",
          category: "",
          description: "",
          roomNumber,
          fullName: fullname
        });

      } else {
        alert("Failed to post complaint");
      }

    } catch (error) {
      console.error(error);
      alert("Error posting complaint");
    }
  };

  return (
    <div className='complaints-page'>

      <h1>Raise Complaints</h1>

      <button
        className="profile-back-btn"
        onClick={() => navigate("/StudentDashboard")}
      >
        ← Back
      </button>

      <div className='post-complaints'>

        <div className='complaints-details'>

          <input 
            type="text" 
            placeholder='Post your Complaint Title'
            value={data.title}
            onChange={(e)=>setData({...data, title:e.target.value})}
          />

          <select 
            value={data.category}
            onChange={(e)=>setData({...data, category:e.target.value})}
          >
            <option value="">Select Complaint</option>
            <option value='plumbing'>Plumbing</option>
            <option value='furniture'>Furniture</option>
            <option value='electrical'>Electrical</option>
            <option value="others">Others</option>
          </select>

          <input type="text" value={data.roomNumber} readOnly />
          <input type="text" value={data.fullName} readOnly />

        </div>

        <textarea 
          placeholder='Description'
          value={data.description}
          onChange={(e)=>setData({...data, description:e.target.value})}
        />

        <button type='button' onClick={handleSubmit}>
          Post Complaint
        </button>

      </div>

      <div className='my-complaints'>
        <div className='search-complaints'>
          <input type="text" placeholder='Search for your complaint' />
          <select>
            <option>Select Complaint</option>
            <option value='plumbing'>Plumbing</option>
            <option value='furniture'>Furniture</option>
            <option value='electrical'>Electrical</option>
            <option value="others">Others</option>
          </select>
          <button className='search-btn'>Search</button>
        </div>
      </div>

    </div>
  )
}

export default MyComplaints;