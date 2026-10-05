import React, { useEffect, useState } from "react";
import "../styles/Nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  let [username, setuserName] = useState("");

let getname = () => {
  let data = localStorage.getItem("user");

  if (data) {
    let user = JSON.parse(data);
    console.log("firstname", user.FirstName);
    setuserName(user.FirstName);
  }
};

  const logout = () => {
    localStorage.clear();
  };

  useEffect(() => {
    getname();
  }, []);
  return (
    <nav className="nav-container">
      <div className="nav-logo">
        <h1>user :{username}</h1>
      </div>
      <div className="nav-link">
        <Link to={"/"}> HOME </Link>
        <Link to={"/MENS"}>MENS</Link>
        <Link to={"/WOMENS"}>WOMENS</Link>
        <Link to={"/KIDS"}>KIDS</Link>
      </div>
      <div className="nav-btn">
        <Link to={"/CART"}>
          <button> cart </button>
        </Link>
        <Link to={"/Reg"}>
          <button> Register </button>
        </Link>
        <Link to={"/Login"}>
          <button> Login </button>
        </Link>
        <button onClick={logout}> Logout </button>
      </div>
    </nav>
  );
};

export default Nav;
