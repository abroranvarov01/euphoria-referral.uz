import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const MainLayout = () => {
  const token = localStorage.getItem("@token");

  if (!token) {
    Navigate("/");
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default MainLayout;
