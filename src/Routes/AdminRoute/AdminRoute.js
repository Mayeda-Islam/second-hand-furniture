import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/Auth/AuthProvider";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  // const [isAdmin] = useAdmin(user?.email);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user.role !== "admin") {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
export default AdminRoute;
