import React from "react";

export default function Navbar() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  return (
    <div className="navbar" >
      <a href="/" style={{ borderRadius: 100 }}>
        <img
          src="https://res.cloudinary.com/dapajcd1d/image/upload/fl_preserve_transparency/v1725782876/logo_ajrfbj.jpg?_s=public-apps"
          alt="Logo"
          className="logo"
        />
      </a>
      <div className="center-text">
        <div style={{ fontSize: 40, fontWeight: "bold" }}>
          B.K.Birla College, Kalyan
        </div>
        <div>Empowered Autonomous Status</div>
        <div>Conducted by Kalyan Citizen's Education Society</div>
        <div>Affiliated to University of Mumbai</div>
        <div>Reaccredited by NAAC (4th Cycle) with 'A++' Grade (CGPA=3.51)</div>
      </div>
      <div className="nav-links">
        {localStorage.getItem("token") ? (
          <a href="/Admin-view">View Forms</a>
        ) : (
          <a href="/Admin-login">Admin</a>
        )}
        {localStorage.getItem("token") ? (
          <a href="/" onClick={logout}>
            Logout
          </a>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
