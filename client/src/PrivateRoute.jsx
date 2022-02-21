import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth, children }) => {
  return <div>{auth?.auth ? children : <Navigate to="/" />}</div>;
};

export default PrivateRoute;
