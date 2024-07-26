import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./dashboard/layout/MainLayout"; // Ensure correct import path
import AdminIndex from "./dashboard/pages/AdminIndex";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard/admin" />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="admin" element={<AdminIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
