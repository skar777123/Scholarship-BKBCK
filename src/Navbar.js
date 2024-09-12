import React from "react";
import "./Navbar2.css";
export default function Navbar() {
  return (
    <div className="navbar">
      <img
        onClick={() => (window.location.href = "/")}
        src="https://res.cloudinary.com/dapajcd1d/image/upload/fl_preserve_transparency/v1725782876/logo_ajrfbj.jpg?_s=public-apps"
        alt="Logo"
        className="logo"
        style={{
          width: "100px",
          height: "100px",
        }}
      />

      <div className="center-text">
        <div>
          <strong>B. K. Birla College, Kalyan</strong>
        </div>
        <div>Empowered Autonomous Status</div>
        <div>Conducted by Kalyan Citizen's Education Society</div>
        <div>Affiliated to University of Mumbai</div>
        <div>Reaccredited by NAAC (4th Cycle) with 'A++' Grade (CGPA 3.51)</div>
      </div>
      <div
        className="nav-links"
        style={{
          backgroundColor: "whitesmoke",
          color: "#1679AB",
          borderRadius: 10,
        }}
      >
        {localStorage.getItem("token") ? (
          <a href="/Admin-view">View Forms</a>
        ) : (
          <></>
        )}
        {localStorage.getItem("token") ? (
          <a href="/" onClick={() => localStorage.removeItem("token")} >Logout</a>
        ) : (
          <a href="/Admin-login">Admin</a>
        )}
      </div>
    </div>
  );
}
