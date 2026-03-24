import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/auth/StudentLogin.jsx";
import StudentRegister from "./components/auth/StudentRegister.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";
import WardenRegister from "./components/auth/WardenRegister.jsx";
import WardenLogin from "./components/auth/WardenLogin.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDashboard />}/>
        <Route path="/loginstudent" element={<StudentLogin />} />
        <Route path="/registerstudent" element={<StudentRegister />} />
        <Route path="/registerwarden" element={<WardenRegister />} />
        <Route path="/loginwarden" element={<WardenLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;