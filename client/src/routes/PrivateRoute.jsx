import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Navigate } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to={"/auth/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
