import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Volunteers = () => {
  const volunteers = [
    { id: 1, name: "John Doe", issues: 5, status: "Active" },
    { id: 2, name: "Jane Smith", issues: 8, status: "Active" },
    { id: 3, name: "Mike Johnson", issues: 12, status: "Active" },
    { id: 4, name: "Sarah Williams", issues: 3, status: "Inactive" },
    { id: 5, name: "Tom Brown", issues: 7, status: "Active" }
  ];

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
        <h2>Active Volunteers</h2>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Issues Resolved</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {volunteers.map((volunteer) => (
              <tr key={volunteer.id}>
                <td>{volunteer.name}</td>
                <td>{volunteer.issues}</td>
                <td className={volunteer.status === "Active" ? "status-active" : "status-inactive"}>
                  {volunteer.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Volunteers;
