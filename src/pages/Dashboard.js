import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Dashboard = () => {
  return (
    <div className="container">
      <nav className="navbar">
        <h1>Community Maintenance</h1>
        <ul className="nav-links">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/report">Report Issue</Link></li>
          <li><Link to="/volunteers">Volunteers</Link></li>
          <li><Link to="/rewards">Rewards</Link></li>
        </ul>
      </nav>
      <div className="content">
        <h2>Dashboard</h2>
        <div className="dashboard-grid">
          <div className="card">
            <h3>Total Issues</h3>
            <p className="stat">24</p>
          </div>
          <div className="card">
            <h3>Resolved Issues</h3>
            <p className="stat">18</p>
          </div>
          <div className="card">
            <h3>Active Volunteers</h3>
            <p className="stat">12</p>
          </div>
          <div className="card">
            <h3>Points Earned</h3>
            <p className="stat">450</p>
          </div>
        </div>
        <Link to="/report" className="btn-primary">Report New Issue</Link>
      </div>
    </div>
  );
};

export default Dashboard;
