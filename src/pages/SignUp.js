import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    address: ""
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.password || !formData.confirmPassword) {
      setError("Please fill in all required fields");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // If validation passes
    setSuccess("✅ Account created successfully! Redirecting to Sign In...");
    setTimeout(() => {
      navigate("/signin");
    }, 2000);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 14px",
    border: "2px solid var(--border-color)",
    borderRadius: "var(--radius-md)",
    fontSize: "15px",
    transition: "all 0.3s ease",
    fontFamily: "inherit"
  };

  const labelStyle = {
    fontWeight: "700",
    marginBottom: "6px",
    display: "block",
    color: "var(--text-dark)",
    fontSize: "14px"
  };

  return (
    <div className="auth-container">
      <div className="auth-box signup-box" style={{ maxWidth: "600px" }}>
        <div style={{ marginBottom: "28px", textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🏘️</div>
          <h1 style={{ fontSize: "28px", fontWeight: "700", color: "var(--text-dark)", marginBottom: "8px" }}>
            Community Maintenance
          </h1>
          <p style={{ color: "var(--text-light)", fontSize: "14px" }}>
            Join Our Community Today
          </p>
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "24px", color: "var(--text-dark)", textAlign: "center" }}>
          Create Your Account
        </h2>

        {error && (
          <div style={{
            background: "linear-gradient(135deg, rgba(231, 76, 60, 0.1), rgba(231, 76, 60, 0.05))",
            border: "1px solid var(--danger)",
            color: "var(--danger)",
            padding: "12px 16px",
            borderRadius: "var(--radius-md)",
            marginBottom: "20px",
            fontSize: "14px",
            fontWeight: "600"
          }}>
            ⚠️ {error}
          </div>
        )}

        {success && (
          <div style={{
            background: "linear-gradient(135deg, rgba(39, 174, 96, 0.1), rgba(39, 174, 96, 0.05))",
            border: "1px solid var(--success)",
            color: "var(--success)",
            padding: "12px 16px",
            borderRadius: "var(--radius-md)",
            marginBottom: "20px",
            fontSize: "14px",
            fontWeight: "600"
          }}>
            {success}
          </div>
        )}

        <form onSubmit={handleSignUp} style={{ display: "grid", gap: "18px" }}>
          {/* Name Fields */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
              />
            </div>
            <div>
              <label style={labelStyle}>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Doe"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label style={labelStyle}>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              style={inputStyle}
              onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
              onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
            />
          </div>

          {/* Phone & Address */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Phone (Optional)</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
              />
            </div>
            <div>
              <label style={labelStyle}>Address (Optional)</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Street address"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
              />
            </div>
          </div>

          {/* Passwords */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            <div>
              <label style={labelStyle}>Password *</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="At least 6 characters"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
              />
            </div>
            <div>
              <label style={labelStyle}>Confirm Password *</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Re-enter password"
                style={inputStyle}
                onFocus={(e) => e.target.style.borderColor = "var(--primary-color)"}
                onBlur={(e) => e.target.style.borderColor = "var(--border-color)"}
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            style={{
              background: "linear-gradient(135deg, var(--primary-color), var(--secondary-color))",
              color: "white",
              border: "none",
              padding: "14px 24px",
              fontSize: "16px",
              fontWeight: "700",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 12px rgba(102, 126, 234, 0.3)",
              marginTop: "12px"
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
            Create Account
          </button>
        </form>

        <div style={{
          marginTop: "24px",
          paddingTop: "24px",
          borderTop: "1px solid var(--border-color)",
          textAlign: "center"
        }}>
          <p style={{ color: "var(--text-light)", fontSize: "14px", marginBottom: "8px" }}>
            Already have an account?
          </p>
          <Link
            to="/signin"
            style={{
              color: "var(--primary-color)",
              textDecoration: "none",
              fontWeight: "700",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.opacity = "0.8"}
            onMouseOut={(e) => e.target.style.opacity = "1"}
          >
            Sign In →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
