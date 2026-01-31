import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ReportIssue from "./pages/ReportIssue";
import Volunteers from "./pages/Volunteers";
import Rewards from "./pages/Rewards";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import IssueDetails from "./pages/IssueDetails";
import "./App.css";

function Navigation() {
  const location = useLocation();
  const isAuthPage = location.pathname === "/signin" || location.pathname === "/signup";

  if (isAuthPage) return null;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/dashboard" className="navbar-logo">
          Community Maintenance
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/dashboard" className={`nav-link ${location.pathname === "/dashboard" ? "active" : ""}`}>
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/report" className={`nav-link ${location.pathname === "/report" ? "active" : ""}`}>
              Report Issue
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/volunteers" className={`nav-link ${location.pathname === "/volunteers" ? "active" : ""}`}>
              Volunteers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rewards" className={`nav-link ${location.pathname === "/rewards" ? "active" : ""}`}>
              Rewards
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="nav-link logout">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navigation />
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
