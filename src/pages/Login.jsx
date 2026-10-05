import React, { useState } from "react";
import "../styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let user_url = "http://localhost:5000/user";


   let navigate=useNavigate();

  let [Email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let regEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,10}$/;
  let regPassword = /^[a-zA-Z0-9@]{8,20}$/;

  let validation = () => {
    if (Email == "" || Password == "") {
      alert("All fields are required");
      return false;
    }

    if (!regEmail.test(Email)) {
      alert("Invalid Email");
      return false;
    }

    if (!regPassword.test(Password)) {
      alert("Invalid Password");
      return false;
    }

    return true;
  };

  const Login = (x) => {
    x.preventDefault();
    if (!validation()) {
      return;
    }

    axios
      .get(user_url)
      .then((res) => {
        console.log("start");
        console.log(res.data);
        let user = res.data.find(
          (x) => x.Email == Email && x.Password == Password,
        );
        console.log(user);
        if (user) {
          alert("Login Successfully");
          localStorage.setItem("user", JSON.stringify(user));
    navigate("/")
        } else {
          alert("Invalid Email or Password");
        }
      })
      .catch((err) => {
        alert("network error");
      });
  };

  return (
    <div className="login-container">
      <form action="" className="login-form" onSubmit={Login}>
        <h1> Login Form </h1>

        <div>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label> Password </label>
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
