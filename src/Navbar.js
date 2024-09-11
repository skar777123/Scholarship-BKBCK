import React from "react";
import "./Navbar2.css";
export default function Navbar() {
  return (
    <div class="navbar">
      <img
        onClick={() => (window.location.href = "/")}
        src="https://res.cloudinary.com/dapajcd1d/image/upload/fl_preserve_transparency/v1725782876/logo_ajrfbj.jpg?_s=public-apps"
        alt="Logo"
        class="logo"
        style={{
          width: "100px",
          height: "100px",
        }}
      />

      <div class="center-text">
        <div>
          <strong>B.K.Birla College, Kalyan</strong>
        </div>
        <div>Empowered Autonomous Status</div>
        <div>Conducted by Kalyan Citizen's Education Society</div>
        <div>Affiliated to University of Mumbai</div>
        <div>Reaccredited by NAAC (4th Cycle) with 'A++' Grade (CGPA=3.51)</div>
      </div>
      <div
        class="nav-links"
        style={{
          backgroundColor: "whitesmoke",
          color: "#1679AB",
          borderRadius: 10,
        }}
      >
        <a href="/Admin-login">Admin</a>
      </div>
    </div>
  );
}
