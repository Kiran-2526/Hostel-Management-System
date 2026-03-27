import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const student = localStorage.getItem("rollNumber");
  const warden = localStorage.getItem("wardenId");

  if (!student && !warden) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;