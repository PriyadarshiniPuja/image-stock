import React from "react";
import { useSelector } from "react-redux";
import { Route, Navigate } from "react-router-dom";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  const userAuthData = useSelector((state) => state.auth);

  const { user, isLoggedIn } = userAuthData;

  return !isLoggedIn ? <Navigate to="/login" /> : <Component />;
};

export default PrivateRoutes;
