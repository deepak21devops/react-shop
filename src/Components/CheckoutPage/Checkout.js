import React, { Component } from "react";
import "./checkout.css";
import { store } from "../redux/Store";
export class Checkout extends Component {
  render() {
    return (
      <div className="container mt-4 d-flex flex-row justify-content-between mb-3">
        <div className="checkout mb-3">
          {this.props.products.map((ele) => (
            <div
              className="contents d-flex flex-row mb-4 mt-3 justify-content-between align-items-center"
              key={ele.id}
            >
              <img className="checkImg" src={ele.prodImg} alt=""></img>
              <h4>{ele.prodName}</h4>
              <p>
                <button
                  onClick={() =>
                    store.dispatch({
                      type: "REM_ITEMS",
                      payload: { id: ele.id, data: ele },
                    })
                  }
                >
                  -
                </button>
                <span className="checkqty">{ele.prodquant}</span>
                <button
                  onClick={() =>
                    store.dispatch({
                      type: "INC_ITEMS",
                      payload: { id: ele.id, data: ele },
                    })
                  }
                >
                  +
                </button>
              </p>
              <h4>${(ele.prodquant * ele.prodPrice).toFixed(2)}</h4>
            </div>
          ))}
        </div>

        <div className="billContainer">
          <div className="billContent">
            <h4>Total Items </h4>
            {this.props.products.map((ele) => (
              <div className="items d-flex justify-content-between">
                <p>{ele.prodName}</p>
                <p>
                  x<span>{ele.prodquant}</span>
                </p>
                <p>${(ele.prodquant * ele.prodPrice).toFixed(2)}</p>
              </div>
            ))}
            <hr />
            <div className="TotalPrice d-flex justify-content-between">
              <h4>Amount to Pay</h4>

              <h4>${this.props.totalAmount.toFixed(2)}</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Checkout;
