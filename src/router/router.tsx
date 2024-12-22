import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/login";
import Registration from "../components/Registration/registration";
import { Box, Stack } from "@mui/material";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/app" element={<h1>Home</h1>} />
      </Routes>
    </div>
  );
};

export default Router;
