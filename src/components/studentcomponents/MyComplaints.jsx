import React from 'react'
import Complaints from './../wardencomponents/Complaints';
import "../../styles/complaints.css";
import { useNavigate } from 'react-router-dom';

const MyComplaints = () => {
  const navigate = useNavigate();


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
            <input type="text"  placeholder='Post your Complaints' name='title'/>
            <select name='complaint-category'>
              <option>Select Complaint</option>
              <option value='plumbing'>Plumbing</option>
              <option value='furniture'>Furniture</option>
              <option value='electrical'>Electrical</option>
              <option value="others">Others</option>
            </select>
            <input type="text"  placeholder='Room Number' readOnly/>
            <input type="text"  placeholder='Name' readOnly/>
          </div>
          <textarea name="description" placeholder='Description'/>
          <button type='submit'>Post</button>
        </div>
        <div className='my-complaints'>
          <div className='search-complaints'>
            <input type="text" placeholder='Search for your complaint'/>
            <select name="filter">
              <option>Select Complaint</option>
              <option value='plumbing'>Plumbing</option>
              <option value='furniture'>Furniture</option>
              <option value='electrical'>Electrical</option>
              <option value="others">Others</option>
            </select>
            <button className='search-btn'>Search</button>
          </div>
          <h1 className='complaint-title'></h1>
          <p className='complaint-type'></p>
          <p className='complaint-description'></p>
        </div>
    </div>
  )
}

export default MyComplaints