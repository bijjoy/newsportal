import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar"; // Corrected the import path

const MainLayout = () => {
  return (
    <div className="min-w-screen min-h-screen bg-slate-100">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
