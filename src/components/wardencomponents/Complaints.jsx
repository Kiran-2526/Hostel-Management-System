import React, { useEffect, useState } from "react";
import "../../styles/complaints.css";

const WardenComplaints = () => {

  const [complaints, setComplaints] = useState([]);

  // 🔥 fetch all complaints
  useEffect(() => {
    fetch("http://localhost:8080/student/getcomplaints")
      .then(res => res.json())
      .then(data => setComplaints(data))
      .catch(err => console.error(err));
  }, []);

  // 🔥 DELETE FUNCTION
  // const handleDelete = async (id) => {
  //   try {
  //     const res = await fetch(
  //       `http://localhost:8080/student/deletecomplaint/${id}`,
  //       { method: "DELETE" }
  //     );

  //     const result = await res.text();

  //     if (res.ok) {
  //       alert("Deleted Successfully");

  //       setComplaints(prev =>
  //         prev.filter(c => c.cid !== id)
  //       );
  //     } else {
  //       alert(result);
  //     }

  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // 🔥 STATUS UPDATE FUNCTION
  const handleStatusChange = async (id) => {
    try {
      const res = await fetch(
        `http://localhost:8080/student/updateStatus/${id}`,
        { method: "POST" }
      );

      const updated = await res.json();

      if (res.ok) {
        setComplaints(prev =>
          prev.map(c =>
            c.cid === id ? { ...c, status: "Resolved" } : c
          )
        );
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="complaints-page">

      <h1>All Complaints</h1>

      {/* 🔍 SAME SEARCH BAR */}
      <div className="my-complaints">

        <div className="search-complaints">
          <input type="text" placeholder="Search complaints" />
          <select>
            <option>Select Complaint</option>
            <option value="plumbing">Plumbing</option>
            <option value="furniture">Furniture</option>
            <option value="electrical">Electrical</option>
            <option value="others">Others</option>
          </select>
          <button className="search-btn">Search</button>
        </div>

        {/* 🔥 COMPLAINT CARDS */}
        {complaints.length === 0 ? (
          <p>No complaints found</p>
        ) : (
          complaints.map((c) => (
            <div key={c.cid} className="complaint-card">

              {/* LEFT SIDE */}
              <div className="complaint-info">
                <div className="complaint-title">{c.title}</div>
                <div className="complaint-type">{c.category}</div>
                <div className="complaint-description">{c.description}</div>

                <small>
                  👤 {c.fullName} | 🏠 Room {c.roomNumber}
                </small>

                {/* 🔥 STATUS TEXT */}
                <span className="status">
                  Status: {c.status || "Pending"}
                </span>
              </div>

              {/* RIGHT SIDE BUTTONS */}
              <div style={{ display: "flex", gap: "10px" }}>

                {/* 🔥 STATUS BUTTON */}
                <button
                  className={c.status === "Resolved" ? "resolved-btn" : "pending-btn"}
                  onClick={() => handleStatusChange(c.cid)}
                  disabled={c.status === "Resolved"}
                >
                  {c.status || "Pending"}
                </button>

                {/* 🔥 DELETE BUTTON
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(c.cid)}
                >
                  Delete
                </button> */}

              </div>

            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default WardenComplaints;