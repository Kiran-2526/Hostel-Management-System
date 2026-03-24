import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentLogin from "./components/auth/StudentLogin.jsx";
import StudentRegister from "./components/auth/StudentRegister.jsx";
import StudentDashboard from "./components/StudentDashboard.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentDashboard />}/>
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/register" element={<StudentRegister />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;