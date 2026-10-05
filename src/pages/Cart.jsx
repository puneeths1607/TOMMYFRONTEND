import React, {  useState } from "react";
import "../styles/cart.css";
import { useSelector } from "react-redux";
import { remove } from "../redux/cartSlice";
import axios from "axios";
import { useEffect } from "react";

const Cart = () => {
  // let products = useSelector((state) => state.cart.cartItems);


  // get the data and remove  from tn url

  let [products , setProducts] = useState([]);

  let cart_url = "http://localhost:5000/cart"; 

  const getdata =()=>{
    axios.get(cart_url)
    .then((res)=>{
      setProducts(res.data);
    })
    .catch((err)=>{
      alert("network error")
    })
  }

  const removefromcart =(id)=>{
    axios.delete(`${cart_url}/${id} `)
    .then((res)=>{
      alert("Product removed from cart");
      getdata();
    })
    .catch((err)=>{
      alert("network error")
    })
  }

useEffect(()=>{
  getdata();
},[])

  return (
    <div className="cart-container">
      {products.map((x) => {
        return (
          <article className="cart-item" key={x.id}>
            <img src={x.img} alt="" height={"100px"} width={"100px"} />
            <h1>Product Name :{x.name} </h1>

            <button onClick={ ()=> removefromcart(x.id)}>Remove</button>
          </article>
        );
      })}
    </div>
  );
};

export default Cart;
