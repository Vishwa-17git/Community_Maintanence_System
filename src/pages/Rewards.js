import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Rewards = () => {
  const rewards = [
    { id: 1, name: "Coffee Voucher", points: 100, available: 5 },
    { id: 2, name: "Movie Ticket", points: 200, available: 3 },
    { id: 3, name: "Restaurant Gift Card", points: 300, available: 2 },
    { id: 4, name: "Book", points: 150, available: 8 },
    { id: 5, name: "Community Badge", points: 250, available: 10 }
  ];

  const userPoints = 450;

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
        <h2>Rewards Program</h2>
        <div className="user-points">
          <h3>Your Points: <span className="points-value">{userPoints}</span></h3>
        </div>
        <div className="rewards-grid">
          {rewards.map((reward) => (
            <div key={reward.id} className="reward-card">
              <h3>{reward.name}</h3>
              <p className="points">{reward.points} points</p>
              <p className="available">Available: {reward.available}</p>
              <button
                className={userPoints >= reward.points ? "btn-primary" : "btn-disabled"}
                disabled={userPoints < reward.points}
              >
                {userPoints >= reward.points ? "Redeem" : "Not Enough Points"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
