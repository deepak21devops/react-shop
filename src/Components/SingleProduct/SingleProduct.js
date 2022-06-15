import React, { Component } from "react";
import "./singleproduct.css";
import { Link, useParams } from "react-router-dom";
import { BestSelling, TopProds } from "../../topProd";
import { store } from "../redux/Store";
const SingleProduct = () => {
  const { id } = useParams();
  let prod = (TopProds || BestSelling).find((ele) => ele.id === Number(id));
  // console.log(prod);

  return (
    <div className="container mt-4">
      <div className="product d-flex flex-row justify-content-between  mb-3">
        <img className="singleProdImg" src={prod.prodImg} alt=""></img>
        <div className="rightContainer">
          <div className="prodContent">
            <h4>Product Name : {prod.prodName}</h4>
            <h4>Product Price : ${prod.prodPrice}</h4>
            <h4>
              Quantity :{" "}
              <button
                className="left"
                onClick={() =>
                  store.dispatch({
                    type: "REM_ITEMS",
                    payload: { id: prod.id, data: prod },
                  })
                }
              >
                -
              </button>
              {prod.prodquant}
              <button
                className="right"
                onClick={() =>
                  store.dispatch({
                    type: "INC_ITEMS",
                    payload: { id: prod.id, data: prod },
                  })
                }
              >
                +
              </button>
            </h4>
          </div>
          <div className="prodButtons mt-4">
            <button className="cart">Add to Cart</button>
            <Link to="/checkout">
              <button className="checkoutbtn">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
