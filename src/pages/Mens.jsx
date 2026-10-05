import React, { useEffect, useState } from "react";
import "../styles/mens.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Mens = () => {
  // let mens = []

  // hooks

  const [mens, setMens] = useState([]);

  console.log(mens);
  let url = "http://localhost:5000/CoverIMG";

  const getMensdata = () => {
    axios
      .get(url)
      .then((res) => {
        setMens(res.data);
      })
      .catch((err) => {
        alert("network error");
      });
  };



useEffect(() => {
  getMensdata();
}, []);

  return (
    <div className="mens-container">
      {mens.filter((x) => x.category === "Mens").map((x) => {
        return (
            <article className="mens-card" key={x.id}>
           
           <Link to={"/MensPro"}>
           
              <img src={x.img} alt="" height={"100%"} width={"100%"} />
            </Link>
            </article>
        );
      })}

      {/* <button onClick={getMensdata}> click </button> */}
    </div>
  );
};

export default Mens;
