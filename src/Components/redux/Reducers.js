import { ADD_ITEMS, DEL_ITEMS, INC_ITEMS, REM_ITEMS } from "./ActionTypes";

const initialState = {
  allProducts: [],
  cart: 0,
  totalAmount: 0,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      let newProd = [...state.allProducts];
      let samp = newProd.filter((ele) => ele.id === action.payload.id);
      // console.log(samp);

      if (samp.length === 0) {
        state.allProducts = [...state.allProducts, action.payload.data];
        // console.log(index);
        const index = state.allProducts.findIndex(
          (ele) => ele.id === action.payload.id
        );
        if (index !== -1) {
          state.allProducts[index].prodquant += 1;
        }
        let amt = 0;
        let tot = state.allProducts.reduce(
          (prev, cur) => prev + cur.prodPrice * cur.prodquant,
          amt
        );

        return {
          allProducts: [...state.allProducts],
          cart: state.cart + 1,
          totalAmount: tot,
        };
      } else {
        const index = state.allProducts.findIndex(
          (ele) => ele.id === action.payload.id
        );
        if (index !== -1) {
          state.allProducts[index].prodquant += 1;
        }
        let amt = 0;
        let tot = state.allProducts.reduce(
          (prev, cur) => prev + cur.prodPrice * cur.prodquant,
          amt
        );
        return {
          allProducts: [...state.allProducts],
          cart: state.cart,
          totalAmount: tot,
        };
      }

    case DEL_ITEMS:
      return {
        allProducts: state.allProducts.filter(
          (prod) => prod.id !== action.payload.id
        ),
        cart: state.cart - 1,
      };

    case INC_ITEMS:
      if (state.allProducts.length === 0) {
        state.allProducts = [...state.allProducts, action.payload.data];
      }

      const index = state.allProducts.findIndex(
        (ele) => ele.id === action.payload.id
      );
      if (index !== -1) {
        state.allProducts[index].prodquant += 1;
      }
      let amts = 0;
      let tots = state.allProducts.reduce(
        (prev, cur) => prev + cur.prodPrice * cur.prodquant,
        amts
      );
      return {
        allProducts: [...state.allProducts],
        cart: state.cart,
        totalAmount: tots,
      };

    case REM_ITEMS:
      if (state.allProducts.length === 0) {
        state.allProducts = [...state.allProducts, action.payload.data];
      }
      const index_2 = state.allProducts.findIndex(
        (ele) => ele.id === action.payload.id
      );
      if (index_2 !== -1) {
        state.allProducts[index_2].prodquant -= 1;
      }
      let amt = 0;
      let tot = state.allProducts.reduce(
        (prev, cur) => prev + cur.prodPrice * cur.prodquant,
        amt
      );
      return {
        allProducts: [...state.allProducts],
        cart: state.cart,
        totalAmount: tot,
      };
    default:
      return state;
  }
};
