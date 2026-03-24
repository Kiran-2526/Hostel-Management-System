import React from 'react'
import "../styles/dashboard.css";
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {

    const navigate = useNavigate();

    return (
        <div className="main">
            <section className="left" onClick={() => {navigate("/login");console.log("clicked")}}>
                <div className="content">
                    <img src="/neclogo.jpg" alt="Not Found" />
                    <h1>Smart Hostel Management</h1>
                    <p>A digital platform for smart hostel management with better communication and transparency.</p>
                    <h3>✔ Smart hostel management at your fingertips</h3>
                    <h3>✔ Raise and track complaints</h3>
                    <h3>✔ Easy communication with warden</h3>
                </div>
            </section>
            <section className="right">
                <div className="role">
                    <h1>Select Your Role</h1>
                    <p>Choose how you want to use SHM</p>
                    <div className="roles">
                        <div className="student">
                            <h1 id="headC">Student</h1>
                            <p>Raise petition,vote in pole</p>
                        </div>
                        <div className="warden">
                            <h1 id="headO">Warden</h1>
                            <p>Review petition & reports</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default StudentDashboard;