import React, { useEffect, useState } from "react";
import "../../styles/menspro.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartSlice";

const MensPro = () => {
  // let mens = []

  // hooks

  let dispatch = useDispatch();
  let Cart_url = "http://localhost:5000/cart";

  const [mensPro, setMensPro] = useState([]);

  console.log(mensPro);
  let url = "http://localhost:5000/products";

  const getMensdata = () => {
    axios
      .get(url)
      .then((res) => {
        setMensPro(res.data);
      })
      .catch((err) => {
        alert("network error");
      });
  };



  const addtocart = (product) => {
    // console.log("fcall")
    dispatch(add(product));
    axios.post(Cart_url, product)
      .then((res) => {
        alert("Product added to cart");
      }
      )
      .catch((err) => {
        alert("network error");
      });
  };

  useEffect(() => {
    getMensdata();
  }, []);

  return (
    <div className="menspro-container">
      {mensPro
        .filter((x) => x.category === "Mens")
        .map((x) => {
          return (
            <article className="menspro-card" key={x.id}>
              <img src={x.img} alt="" height={"60%"} width={"100%"} />

              <div className="menspro-card-content">
                <h5> Brand: {x.name}</h5>
                <p>Price: ${x.price.toFixed(2)}</p>
                {/* <p>Description: {x.description}</p> */}
                <b>Rating: {x.rating}</b>
                <br />
                <button style={{ backgroundColor: "yellow" }} onClick={()=>{addtocart(x)}}>
                  Add to Cart
                </button>
                <button style={{ backgroundColor: "pink" }}>Buy Now</button>
              </div>
            </article>
          );
        })}

      {/* <button onClick={getMensdata}> click </button> */}
    </div>
  );
};

export default MensPro;
