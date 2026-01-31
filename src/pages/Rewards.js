import React from "react";
import "../styles.css";

const Rewards = () => {
  const rewards = [
    { id: 1, name: "☕ Coffee Voucher", points: 100, available: 5, icon: "☕" },
    { id: 2, name: "🎬 Movie Ticket", points: 200, available: 3, icon: "🎬" },
    { id: 3, name: "🍽️ Restaurant Card", points: 300, available: 2, icon: "🍽️" },
    { id: 4, name: "📚 Bestseller Book", points: 150, available: 8, icon: "📚" },
    { id: 5, name: "🏅 Community Badge", points: 250, available: 10, icon: "🏅" },
    { id: 6, name: "🎁 Mystery Gift", points: 500, available: 1, icon: "🎁" }
  ];

  const userPoints = 450;

  const redeemableRewards = rewards.filter(r => userPoints >= r.points).length;
  const totalRewards = rewards.length;

  return (
    <div style={{ padding: "40px 20px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div className="content">
          <h2>🏆 Rewards & Recognition</h2>

          {/* Points Card */}
          <div className="user-points">
            <p style={{ fontSize: "14px", opacity: 0.9, marginBottom: "12px" }}>Your Current Points</p>
            <div className="points-value">{userPoints} pts</div>
            <p style={{ fontSize: "14px", opacity: 0.85, marginTop: "12px" }}>
              {redeemableRewards} of {totalRewards} rewards available for redemption
            </p>
          </div>

          {/* Progress Bar */}
          <div style={{
            background: "linear-gradient(135deg, rgba(240, 147, 251, 0.1), rgba(102, 126, 234, 0.1))",
            borderRadius: "var(--radius-lg)",
            padding: "24px",
            marginBottom: "40px",
            marginTop: "-20px"
          }}>
            <div style={{ marginBottom: "12px" }}>
              <p style={{ fontSize: "14px", color: "var(--text-light)", fontWeight: "600" }}>
                Progress to Next Tier (500 pts)
              </p>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.5)",
              borderRadius: "20px",
              height: "12px",
              overflow: "hidden"
            }}>
              <div style={{
                background: "linear-gradient(90deg, var(--primary-color), var(--accent-color))",
                height: "100%",
                width: `${(userPoints / 500) * 100}%`,
                transition: "width 0.5s ease"
              }}></div>
            </div>
            <p style={{ fontSize: "12px", color: "var(--text-light)", marginTop: "12px" }}>
              {500 - userPoints} points to unlock the next tier
            </p>
          </div>

          {/* Rewards Grid */}
          <h3 style={{ marginBottom: "24px", fontSize: "24px", color: "var(--text-dark)", fontWeight: "700" }}>
            Available Rewards
          </h3>
          
          <div className="rewards-grid">
            {rewards.map((reward) => {
              const canRedeem = userPoints >= reward.points;
              return (
                <div
                  key={reward.id}
                  className="reward-card"
                  style={{
                    opacity: canRedeem ? 1 : 0.7,
                    border: canRedeem ? "2px solid var(--primary-color)" : "2px solid var(--border-color)",
                    position: "relative"
                  }}
                >
                  {reward.available === 0 && (
                    <div style={{
                      position: "absolute",
                      top: "12px",
                      right: "12px",
                      background: "var(--danger)",
                      color: "white",
                      padding: "4px 8px",
                      borderRadius: "20px",
                      fontSize: "11px",
                      fontWeight: "700"
                    }}>
                      SOLD OUT
                    </div>
                  )}
                  
                  <div style={{ fontSize: "48px", marginBottom: "12px" }}>
                    {reward.icon}
                  </div>
                  
                  <h3>{reward.name}</h3>
                  <p className="points">{reward.points} points</p>
                  <p className="available">
                    {reward.available === 0 ? "Out of stock" : `${reward.available} available`}
                  </p>
                  
                  <button
                    style={{
                      background: canRedeem && reward.available > 0 
                        ? "linear-gradient(135deg, var(--primary-color), var(--secondary-color))" 
                        : "var(--border-color)",
                      color: canRedeem && reward.available > 0 ? "white" : "var(--text-light)",
                      border: "none",
                      padding: "12px 20px",
                      borderRadius: "var(--radius-md)",
                      cursor: canRedeem && reward.available > 0 ? "pointer" : "not-allowed",
                      fontWeight: "700",
                      fontSize: "14px",
                      transition: "all 0.3s ease",
                      width: "100%",
                      marginTop: "12px"
                    }}
                    disabled={!canRedeem || reward.available === 0}
                    onMouseOver={(e) => {
                      if (canRedeem && reward.available > 0) {
                        e.target.style.transform = "translateY(-2px)";
                        e.target.style.boxShadow = "0 8px 16px rgba(102, 126, 234, 0.3)";
                      }
                    }}
                    onMouseOut={(e) => {
                      e.target.style.transform = "translateY(0)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    {reward.available === 0
                      ? "Out of Stock"
                      : canRedeem
                      ? "Redeem Now"
                      : "Not Enough Points"
                    }
                  </button>
                </div>
              );
            })}
          </div>

          {/* Rewards FAQ */}
          <div style={{
            background: "linear-gradient(135deg, rgba(102, 126, 234, 0.05), rgba(118, 75, 162, 0.05))",
            borderRadius: "var(--radius-lg)",
            padding: "32px",
            marginTop: "40px"
          }}>
            <h3 style={{ color: "var(--text-dark)", marginBottom: "20px", fontWeight: "700" }}>
              How to Earn Points?
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "16px"
            }}>
              <div>
                <p style={{ fontWeight: "700", color: "var(--primary-color)", marginBottom: "6px" }}>🔧 Resolve Issues</p>
                <p style={{ fontSize: "14px", color: "var(--text-light)" }}>20 points per resolved issue</p>
              </div>
              <div>
                <p style={{ fontWeight: "700", color: "var(--primary-color)", marginBottom: "6px" }}>👥 Refer Volunteers</p>
                <p style={{ fontSize: "14px", color: "var(--text-light)" }}>50 points per successful referral</p>
              </div>
              <div>
                <p style={{ fontWeight: "700", color: "var(--primary-color)", marginBottom: "6px" }}>📣 Community Engagement</p>
                <p style={{ fontSize: "14px", color: "var(--text-light)" }}>10 points for sharing feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
