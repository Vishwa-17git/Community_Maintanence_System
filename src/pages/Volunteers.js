import React from "react";
import "../styles.css";

const Volunteers = () => {
  const volunteers = [
    { id: 1, name: "John Doe", issues: 5, status: "Active", joinDate: "Jan 2025" },
    { id: 2, name: "Jane Smith", issues: 8, status: "Active", joinDate: "Dec 2024" },
    { id: 3, name: "Mike Johnson", issues: 12, status: "Active", joinDate: "Nov 2024" },
    { id: 4, name: "Sarah Williams", issues: 3, status: "Inactive", joinDate: "Oct 2024" },
    { id: 5, name: "Tom Brown", issues: 7, status: "Active", joinDate: "Dec 2024" }
  ];

  const stats = [
    { label: "Total Volunteers", value: volunteers.length, icon: "👥" },
    { label: "Active Volunteers", value: volunteers.filter(v => v.status === "Active").length, icon: "✅" },
    { label: "Issues Resolved", value: volunteers.reduce((sum, v) => sum + v.issues, 0), icon: "✔️" },
    { label: "Avg Issues/Volunteer", value: Math.round(volunteers.reduce((sum, v) => sum + v.issues, 0) / volunteers.length), icon: "📊" }
  ];

  return (
    <div style={{ padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="content">
          <h2>👥 Community Volunteers</h2>

          {/* Stats Section */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "40px"
          }}>
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div style={{ fontSize: "32px", marginBottom: "8px" }}>{stat.icon}</div>
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Volunteers Table */}
          <h3 style={{ marginBottom: "20px", fontSize: "24px", color: "var(--text-dark)", fontWeight: "700" }}>
            Active Volunteers
          </h3>
          
          <div style={{ overflowX: "auto", borderRadius: "var(--radius-lg)", boxShadow: "var(--shadow-sm)" }}>
            <table className="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Issues Resolved</th>
                  <th>Join Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {volunteers.map((volunteer) => (
                  <tr key={volunteer.id}>
                    <td style={{ fontWeight: "600" }}>
                      👤 {volunteer.name}
                    </td>
                    <td>
                      <span style={{
                        background: "linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(102, 126, 234, 0.05))",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontWeight: "600",
                        color: "var(--primary-color)"
                      }}>
                        {volunteer.issues} issues
                      </span>
                    </td>
                    <td>{volunteer.joinDate}</td>
                    <td>
                      <span className={volunteer.status === "Active" ? "status-active" : "status-inactive"}>
                        {volunteer.status}
                      </span>
                    </td>
                    <td>
                      <button style={{
                        background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
                        color: "white",
                        border: "none",
                        padding: "8px 16px",
                        borderRadius: "var(--radius-md)",
                        cursor: "pointer",
                        fontSize: "13px",
                        fontWeight: "600",
                        transition: "all 0.3s ease"
                      }}
                      onMouseOver={(e) => e.target.style.transform = "translateY(-2px)"}
                      onMouseOut={(e) => e.target.style.transform = "translateY(0)"}
                      >
                        View Profile
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Call to Action */}
          <div style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",
            border: "2px dashed var(--primary-color)",
            borderRadius: "var(--radius-lg)",
            padding: "32px",
            marginTop: "40px",
            textAlign: "center"
          }}>
            <h3 style={{ color: "var(--text-dark)", marginBottom: "12px", fontWeight: "700" }}>
              Want to Help Your Community?
            </h3>
            <p style={{ color: "var(--text-light)", marginBottom: "20px" }}>
              Join our volunteer program and make a difference in your neighborhood
            </p>
            <button style={{
              background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
              color: "white",
              border: "none",
              padding: "14px 32px",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              fontSize: "15px",
              fontWeight: "700",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)"
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 8px 20px rgba(102, 126, 234, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 12px rgba(102, 126, 234, 0.3)";
            }}
            >
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
