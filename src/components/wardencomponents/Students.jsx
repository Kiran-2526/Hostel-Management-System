import React, { useEffect, useState } from "react";
import "../../styles/wardendashboard.css";
import { useNavigate } from "react-router-dom";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState("rollNumber"); // 🔥 NEW
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8080/student/all")
      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.log(err));
  }, []);

  // 🔍 Filter students (UPDATED)
  const filteredStudents = students.filter(s => {
    const value = search.toLowerCase();

    if (filterType === "rollNumber") {
      return s.rollNumber?.toLowerCase().includes(value);
    }

    if (filterType === "fullName") {
      return s.fullName?.toLowerCase().includes(value);
    }

    if (filterType === "year") {
      return s.year?.toString().includes(value);
    }

    return true;
  });

  // 🗑 Delete
  const handleDelete = (id) => {
    fetch(`http://localhost:8080/student/${id}`, {
      method: "DELETE"
    })
      .then(() => {
        setStudents(students.filter(s => s.id !== id));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="warden-students-container">

      {/* 🔙 Back */}
      <button 
        className="back-btn"
        onClick={() => navigate("/WardenDashboard")}
      >
        ← Back
      </button>

      <h2>All Students</h2>

      {/* 🔍 + 📂 Search + Filter */}
      <div className="search-filter-container">

        <input
          type="text"
          placeholder={`Search by ${filterType}...`}
          className="warden-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="warden-filter"
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
        >
          <option value="rollNumber">Roll Number</option>
          <option value="fullName">Name</option>
          <option value="year">Year</option>
        </select>

      </div>

      {/* 📊 Table */}
      <table className="warden-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Email</th>
            <th>Room</th>
            <th>Year</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredStudents.length > 0 ? (
            filteredStudents.map(s => (
              <tr key={s.id}>
                <td>{s.fullName}</td>
                <td>{s.rollNumber}</td>
                <td>{s.email}</td>
                <td>{s.roomNumber}</td>
                <td>{s.year}</td>
                <td>
                  <button 
                    className="delete-btn"
                    onClick={() => handleDelete(s.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: "center" }}>
                No students found
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
};

export default Students;