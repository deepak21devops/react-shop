import { ADD_ITEMS, DEL_ITEMS, INC_ITEMS, REM_ITEMS } from "./ActionTypes";

const initialState = {
  allProducts: [],
  cart: 0,
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
        return {
          allProducts: [...state.allProducts],
          cart: state.cart + 1,
        };
      } else {
        const index = state.allProducts.findIndex(
          (ele) => ele.id === action.payload.id
        );
        if (index !== -1) {
          state.allProducts[index].prodquant += 1;
        }
        return {
          allProducts: [...state.allProducts],
          cart: state.cart,
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
      const index = state.allProducts.findIndex(
        (ele) => ele.id === action.payload.id
      );
      if (index !== -1) {
        state.allProducts[index].prodquant += 1;
      }
      return {
        allProducts: [...state.allProducts],
        cart: state.cart,
      };

    case REM_ITEMS:
      const index_2 = state.allProducts.findIndex(
        (ele) => ele.id === action.payload.id
      );
      if (index_2 !== -1) {
        state.allProducts[index_2].prodquant -= 1;
      }
      return {
        allProducts: [...state.allProducts],
        cart: state.cart,
      };
    default:
      return state;
  }
};
