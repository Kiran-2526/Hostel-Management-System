import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/auth/StudentLogin.jsx";
import StudentRegister from "./components/auth/StudentRegister.jsx";
import Dashboard from "./components/Dashboard.jsx";
import WardenRegister from "./components/auth/WardenRegister.jsx";
import WardenLogin from "./components/auth/WardenLogin.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import WardenDashboard from "./components/WardenDashboard.jsx";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;