import { useAuthContext } from '../context/AuthContext';
import { Outlet, Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { user } = useAuthContext();
  const prevRoute = useLocation();

  //console.log( prevRoute.pathname );

  return user ? <Outlet /> : <Navigate to='/login' state={{from: prevRoute.pathname}} />;  
};

export default ProtectedRoute;