import React, { useState } from "react";
import axios from "axios";
import { TailSpin } from "react-loader-spinner";

export default function Admin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    await axios
      .post("http://sw-403g.onrender.com/form/Admin-login", {
        name: name,
        password: password,
      })
      .then((res) => {
        setName("");
        setPassword("");
        setLoader(false);
        alert("Login Successfull");
        window.location.href = "/Admin-view";
        localStorage.setItem("token", "Admin");
      })
      .catch((err) => alert(err.message));
  };
  return (
    <div className="container2" style={{ marginLeft: 425, marginTop: 75 }}>
      <div className="myform">
        <form onSubmit={handleSubmit}>
          <h2>ADMIN LOGIN</h2>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Admin Name"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button type="submit" style={{ cursor: "pointer" }}>
            {!loader ? (
              "Login"
            ) : (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TailSpin width={20} height={20} />
              </div>
            )}
          </button>
          <div
            style={{
              marginTop: 20,
            }}
          >
            <a
              href="/"
              style={{
                marginLeft: 80,
              }}
            >
              Return Home Page
            </a>
          </div>
        </form>
      </div>
      <div className="image">
        <img
          src="https://res.cloudinary.com/dapajcd1d/image/upload/fl_preserve_transparency/v1725809079/img_cx8mw2.jpg?_s=public-apps"
          width="300px"
          alt="pic"
        />
      </div>
    </div>
  );
}
