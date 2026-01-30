import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Issue reported successfully!");
    setFormData({ title: "", description: "", location: "", category: "" });
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
        <h2>Report an Issue</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label>Issue Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
              placeholder="Brief title of the issue"
            />
          </div>
          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              placeholder="Detailed description of the issue"
              rows="5"
            />
          </div>
          <div className="form-group">
            <label>Location:</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Location of the issue"
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select a category</option>
              <option value="pothole">Pothole</option>
              <option value="streetlight">Streetlight</option>
              <option value="garbage">Garbage</option>
              <option value="water">Water Issue</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className="btn-primary">Submit Report</button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
