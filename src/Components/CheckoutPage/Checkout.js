import React, { Component } from "react";
import "./checkout.css";
export class Checkout extends Component {
  render() {
    return (
      <div className="container mt-4 d-flex flex-row justify-content-between mb-3">
        <div className="checkout mb-3">
          <div className="contents d-flex flex-row mb-4 mt-3 justify-content-between align-items-center">
            <img
              className="checkImg"
              src="https://m.media-amazon.com/images/I/61smwbhzBML._AC_SY550_.jpg"
              alt=""
            ></img>
            <h4>IPhone</h4>
            <p>
              <button>-</button>
              <span className="checkqty">2</span>
              <button>+</button>
            </p>
            <h4>$400</h4>
          </div>

          <div className="contents d-flex flex-row mb-3 mt-3 justify-content-between align-items-center">
            <img
              className="checkImg"
              src="https://m.media-amazon.com/images/I/61smwbhzBML._AC_SY550_.jpg"
              alt=""
            ></img>
            <h4>IPhone</h4>
            <p>
              <button>-</button>
              <span className="checkqty">2</span>
              <button>+</button>
            </p>
            <h4>$400</h4>
          </div>
        </div>

        <div className="billContainer">
          <div className="billContent">
            <h4>Total Items </h4>
            <div className="items d-flex justify-content-between">
              <h4>IPhone</h4>
              <h4>
                x<span>3</span>
              </h4>
              <h4>$999</h4>
            </div>
            <hr />
            <div className="TotalPrice d-flex justify-content-between">
              <h4>Amount to Pay</h4>
              <h4>$500</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
