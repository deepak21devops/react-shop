import Checkout from "./Components/CheckoutPage/Checkout";
import NavBar from "./Components/NavBar/NavBar";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import TopProducts from "./Components/TopProducts/TopProducts";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import { addItem, delItem } from "./Components/redux/Actions";
import { Component } from "react";
class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar cart={this.props.cart} />
          <Routes>
            <Route path="/" element={<TopProducts />}></Route>
            <Route path="/product" element={<SingleProduct />}>
              <Route path=":id" element={<SingleProduct />}></Route>
            </Route>
            <Route
              path="checkout"
              element={
                <Checkout
                  products={this.props.allProducts}
                  totalAmount={this.props.totalAmount}
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    allProducts: state.items.allProducts,
    cart: state.items.cart,
    totalAmount: state.items.totalAmount,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ addItem, delItem }, dispatch);
// };

export default connect(mapStateToProps)(App);
