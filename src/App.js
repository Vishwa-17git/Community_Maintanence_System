import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";
import Volunteers from "./pages/Volunteers";
import Rewards from "./pages/Rewards";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import IssueDetails from "./pages/IssueDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/rewards" element={<Rewards />} />
        <Route path="/issue/:id" element={<IssueDetails />} />
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
