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
    console.log(this.props.allProducts);
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar cart={this.props.cart} />
          <Routes>
            <Route path="/" element={<TopProducts />}></Route>
            <Route path="/product" element={<SingleProduct />}>
              <Route path=":id" element={<SingleProduct />}></Route>
            </Route>
            <Route path="checkout" element={<Checkout />}></Route>
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
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ addItem, delItem }, dispatch);
// };

export default connect(mapStateToProps)(App);
