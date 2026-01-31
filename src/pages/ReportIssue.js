import React, { useState } from "react";

function ReportIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Infrastructure");
  const [priority, setPriority] = useState("Medium");
  const [location, setLocation] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !location) {
      alert("Please fill all required fields");
      return;
    }

    const newIssue = {
      id: Date.now(),
      title: title,
      description: description,
      category: category,
      priority: priority,
      location: location,
      status: "Pending",
      submittedAt: new Date().toLocaleDateString()
    };

    const existingIssues =
      JSON.parse(localStorage.getItem("issues")) || [];

    const updatedIssues = [...existingIssues, newIssue];

    localStorage.setItem("issues", JSON.stringify(updatedIssues));

    setSuccessMessage("✅ Issue submitted successfully! Thank you for helping improve our community.");

    setTitle("");
    setDescription("");
    setLocation("");
    setCategory("Infrastructure");
    setPriority("Medium");

    setTimeout(() => setSuccessMessage(""), 5000);
  };

  return (
    <div style={{ padding: "40px 20px" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div className="content">
          <h2>🚨 Report a Community Issue</h2>

          {successMessage && (
            <div style={{
              background: "linear-gradient(135deg, rgba(39, 174, 96, 0.1), rgba(39, 174, 96, 0.05))",
              border: "1px solid var(--success)",
              color: "var(--success)",
              padding: "16px 20px",
              borderRadius: "var(--radius-lg)",
              marginBottom: "24px",
              fontWeight: "600"
            }}>
              {successMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: "grid", gap: "28px" }}>
            {/* Title Field */}
            <div className="form-group">
              <label style={{ fontWeight: "700", marginBottom: "8px", display: "block", color: "var(--text-dark)" }}>
                Issue Title *
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Pothole on Main Street"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "2px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
              />
            </div>

            {/* Location Field */}
            <div className="form-group">
              <label style={{ fontWeight: "700", marginBottom: "8px", display: "block", color: "var(--text-dark)" }}>
                Location *
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., 123 Main Street, Building A"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "2px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
              />
            </div>

            {/* Category and Priority */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
              <div className="form-group">
                <label style={{ fontWeight: "700", marginBottom: "8px", display: "block", color: "var(--text-dark)" }}>
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "2px solid var(--border-color)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "16px",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontFamily: "inherit"
                  }}
                >
                  <option>Infrastructure</option>
                  <option>Sanitation</option>
                  <option>Safety</option>
                  <option>Lighting</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label style={{ fontWeight: "700", marginBottom: "8px", display: "block", color: "var(--text-dark)" }}>
                  Priority
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "14px 16px",
                    border: "2px solid var(--border-color)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "16px",
                    backgroundColor: "white",
                    cursor: "pointer",
                    fontFamily: "inherit"
                  }}
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Emergency</option>
                </select>
              </div>
            </div>

            {/* Description Field */}
            <div className="form-group">
              <label style={{ fontWeight: "700", marginBottom: "8px", display: "block", color: "var(--text-dark)" }}>
                Description *
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide detailed information about the issue..."
                rows="6"
                style={{
                  width: "100%",
                  padding: "14px 16px",
                  border: "2px solid var(--border-color)",
                  borderRadius: "var(--radius-md)",
                  fontSize: "16px",
                  fontFamily: "inherit",
                  resize: "vertical",
                  transition: "all 0.3s ease"
                }}
                onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              style={{
                background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
                color: "white",
                border: "none",
                padding: "16px 32px",
                fontSize: "16px",
                fontWeight: "700",
                borderRadius: "var(--radius-md)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
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
              Submit Issue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReportIssue;
