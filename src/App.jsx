import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/auth/StudentLogin.jsx";
import StudentRegister from "./components/auth/StudentRegister.jsx";
import Dashboard from "./components/Dashboard.jsx";
import WardenRegister from "./components/auth/WardenRegister.jsx";
import WardenLogin from "./components/auth/WardenLogin.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import WardenDashboard from "./components/WardenDashboard.jsx";
import Notices from "./components/studentcomponents/Notices.jsx";
import MyComplaints from "./components/studentcomponents/MyComplaints.jsx";
import Profile from "./components/studentcomponents/Profile.jsx";
import RaiseComplaint from "./components/studentcomponents/RaiseComplaint.jsx";
import Complaints from "./components/wardencomponents/Complaints.jsx";
// import Notices from "./components/wardencomponents/Notices.jsx";
import Reports from "./components/wardencomponents/Reports.jsx";
import Students from "./components/wardencomponents/Students.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/loginstudent" element={<StudentLogin />} />
        <Route path="/registerstudent" element={<StudentRegister />} />
        <Route path="/registerwarden" element={<WardenRegister />} />
        <Route path="/loginwarden" element={<WardenLogin />} />
        <Route path="/StudentDashboard" element={<StudentDashboard />} />
        <Route path="/WardenDashboard" element={<WardenDashboard />} />
        <Route path="/StudentDashboard/MyComplaints" element={<MyComplaints />}/>
        <Route path="/StudentDashboard/Notices" element={<Notices />} />
        <Route path="/StudentDashboard/Profile" element={<Profile />} />
        <Route path="/StudentDashboard/RaiseComplaint" element={<RaiseComplaint />} />
        <Route path="/WardenDashboard/Complaints" element={<Complaints />} />
        {/* <Route path="/WardenDashboard/Notices" element={<Notices />} /> */}
        <Route path="/WardenDashboard/Reports" element={<Reports />} />
        <Route path="/WardenDashboard/Students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;