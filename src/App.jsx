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
import WardenNotices from "./components/wardencomponents/WardenNotices.jsx";
import WardenProfile from "./components/wardencomponents/WardenProfile.jsx";
import Students from "./components/wardencomponents/Students.jsx";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/loginstudent" element={<StudentLogin />} />
        <Route path="/registerstudent" element={<StudentRegister />} />
        <Route path="/registerwarden" element={<WardenRegister />} />
        <Route path="/loginwarden" element={<WardenLogin />} />

        {/* Protected Routes */}
        <Route
          path="/StudentDashboard"
          element={
            <ProtectedRoute>
              <StudentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/WardenDashboard"
          element={
            <ProtectedRoute>
              <WardenDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/StudentDashboard/MyComplaints"
          element={
            <ProtectedRoute>
              <MyComplaints />
            </ProtectedRoute>
          }
        />

        <Route
          path="/StudentDashboard/Notices"
          element={
            <ProtectedRoute>
              <Notices />
            </ProtectedRoute>
          }
        />

        <Route
          path="/StudentDashboard/Profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/StudentDashboard/RaiseComplaint"
          element={
            <ProtectedRoute>
              <RaiseComplaint />
            </ProtectedRoute>
          }
        />

        <Route
          path="/WardenDashboard/Complaints"
          element={
            <ProtectedRoute>
              <Complaints />
            </ProtectedRoute>
          }
        />

        <Route
          path="/WardenDashboard/Notices"
          element={
            <ProtectedRoute>
              <WardenNotices />
            </ProtectedRoute>
          }
        />

        <Route
          path="/WardenDashboard/WardenProfile"
          element={
            <ProtectedRoute>
              <WardenProfile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/WardenDashboard/Students"
          element={
            <ProtectedRoute>
              <Students />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
