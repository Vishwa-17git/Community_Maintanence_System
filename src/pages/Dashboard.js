import React, { useEffect, useState } from "react";

function Dashboard() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const savedIssues =
      JSON.parse(localStorage.getItem("issues")) || [];
    setIssues(savedIssues);
  }, []);

  return (
    <div style={{ padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="content">
          <h2>📊 Community Dashboard</h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "40px"
          }}>
            <div className="stat-card">
              <div className="stat-number">{issues.length}</div>
              <div className="stat-label">Total Issues</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{issues.filter(i => i.status === "Resolved").length}</div>
              <div className="stat-label">Resolved</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{issues.filter(i => i.status !== "Resolved").length}</div>
              <div className="stat-label">Pending</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{issues.length > 0 ? Math.round((issues.filter(i => i.status === "Resolved").length / issues.length) * 100) : 0}%</div>
              <div className="stat-label">Resolution Rate</div>
            </div>
          </div>

          {issues.length === 0 ? (
            <div className="empty-state">
              <div className="empty-state-icon">📋</div>
              <p>No issues reported yet. Help improve your community by <a href="/report" style={{ color: "var(--primary-color)", textDecoration: "none", fontWeight: "600" }}>reporting an issue</a>!</p>
            </div>
          ) : (
            <div>
              <h3 style={{ marginBottom: "24px", fontSize: "24px", color: "var(--text-dark)", fontWeight: "700" }}>
                Recent Issues
              </h3>
              <div style={{ display: "grid", gap: "16px" }}>
                {issues.map((issue) => (
                  <div key={issue.id} className="issue-card">
                    <h4>{issue.title}</h4>
                    <p>{issue.description}</p>
                    <div className="issue-meta">
                      <div className="issue-meta-item">
                        🕐 {new Date(issue.id).toLocaleDateString()}
                      </div>
                      <div className="issue-meta-item">
                        <span className={issue.status === "Resolved" ? "status-active" : "status-inactive"}>
                          {issue.status || "Pending"}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
