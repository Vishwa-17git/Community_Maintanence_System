import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    
    if (email && password) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div style={{ marginBottom: "32px", textAlign: "center" }}>
          <div style={{ fontSize: "48px", marginBottom: "12px" }}>🏘️</div>
          <h1 style={{ fontSize: "28px", fontWeight: "700", color: "var(--text-dark)", marginBottom: "8px" }}>
            Community Maintenance
          </h1>
          <p style={{ color: "var(--text-light)", fontSize: "14px" }}>
            Building Better Communities Together
          </p>
        </div>

        <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "28px", color: "var(--text-dark)", textAlign: "center" }}>
          Welcome Back
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
        
        <form onSubmit={handleSignIn} style={{ display: "grid", gap: "20px" }}>
          <div className="form-group">
            <label style={{
              fontWeight: "700",
              marginBottom: "8px",
              display: "block",
              color: "var(--text-dark)",
              fontSize: "14px"
            }}>
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
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

          <div className="form-group">
            <label style={{
              fontWeight: "700",
              marginBottom: "8px",
              display: "block",
              color: "var(--text-dark)",
              fontSize: "14px"
            }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
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
              marginTop: "8px"
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
            Sign In
          </button>
        </form>

        <div style={{
          marginTop: "24px",
          paddingTop: "24px",
          borderTop: "1px solid var(--border-color)",
          textAlign: "center"
        }}>
          <p style={{ color: "var(--text-light)", fontSize: "14px", marginBottom: "8px" }}>
            Don't have an account?
          </p>
          <Link
            to="/signup"
            style={{
              color: "var(--primary-color)",
              textDecoration: "none",
              fontWeight: "700",
              transition: "all 0.3s ease"
            }}
            onMouseOver={(e) => e.target.style.opacity = "0.8"}
            onMouseOut={(e) => e.target.style.opacity = "1"}
          >
            Create an account →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
