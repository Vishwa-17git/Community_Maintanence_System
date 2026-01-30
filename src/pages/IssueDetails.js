import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles.css";

const IssueDetails = () => {
  const { id } = useParams();
  
  const issue = {
    id: id,
    title: "Pothole on Main Street",
    description: "Large pothole affecting traffic and safety",
    location: "Main Street, Block 5",
    status: "In Progress",
    category: "Pothole",
    reportedBy: "John Doe",
    reportedDate: "2026-01-28",
    assignedTo: "Mike Johnson"
  };

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
        <h2>Issue Details</h2>
        <div className="details-card">
          <div className="detail-row">
            <strong>Issue ID:</strong>
            <span>{issue.id}</span>
          </div>
          <div className="detail-row">
            <strong>Title:</strong>
            <span>{issue.title}</span>
          </div>
          <div className="detail-row">
            <strong>Description:</strong>
            <span>{issue.description}</span>
          </div>
          <div className="detail-row">
            <strong>Location:</strong>
            <span>{issue.location}</span>
          </div>
          <div className="detail-row">
            <strong>Category:</strong>
            <span>{issue.category}</span>
          </div>
          <div className="detail-row">
            <strong>Status:</strong>
            <span className="status-badge">{issue.status}</span>
          </div>
          <div className="detail-row">
            <strong>Reported By:</strong>
            <span>{issue.reportedBy}</span>
          </div>
          <div className="detail-row">
            <strong>Reported Date:</strong>
            <span>{issue.reportedDate}</span>
          </div>
          <div className="detail-row">
            <strong>Assigned To:</strong>
            <span>{issue.assignedTo}</span>
          </div>
        </div>
        <Link to="/dashboard" className="btn-secondary">Back to Dashboard</Link>
      </div>
    </div>
  );
};

export default IssueDetails;
