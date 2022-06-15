import { Button } from "bootstrap";
import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./topproducts.css";
import { TopProds, BestSelling } from "../../topProd";
import { Link } from "react-router-dom";
import { store } from "../redux/Store";
export class TopProducts extends Component {
  render() {
    return (
      <div className="container mt-3 mb-3 ">
        <h3>Top Selling Products</h3>
        <div className="container Card d-flex flex-row mb-3 justify-content-center">
          {TopProds.map((ele) => (
            <Card
              key={ele.id}
              style={{
                width: "12rem",
                height: "22rem",
                padding: "10px",
                textAlign: "center",
                marginRight: "10px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to={`product/${ele.id}`}>
                <img className="prodImg" src={ele.prodImg} alt=""></img>
              </Link>
              <Card.Body>
                <Card.Title
                  style={{
                    fontSize: "15px",
                  }}
                >
                  {ele.prodName}
                </Card.Title>
                <div className="price">${ele.prodPrice}</div>

                <button
                  className="cartbtn"
                  onClick={() =>
                    store.dispatch({
                      type: "ADD_ITEMS",
                      payload: { id: ele.id, data: ele },
                    })
                  }
                >
                  Add to Cart
                </button>
              </Card.Body>
            </Card>
          ))}
        </div>
        <h3>New Deal Products</h3>
        <div className="container Card d-flex flex-row mb-3">
          {TopProds.map((ele) => (
            <Link to={`product/${ele.id}`}>
              <Card
                key={ele.id}
                style={{
                  width: "12rem",
                  height: "22rem",
                  padding: "10px",
                  textAlign: "center",
                  marginRight: "10px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img className="prodImg" src={ele.prodImg} alt=""></img>
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "15px",
                    }}
                  >
                    {ele.prodName}
                  </Card.Title>
                  <div className="price">${ele.prodPrice}</div>
                  <Link to="/hello">
                    <button className="cartbtn">Add to Cart</button>
                  </Link>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default TopProducts;
