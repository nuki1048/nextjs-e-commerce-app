import { HYDRATE } from "next-redux-wrapper";

const { default: CartItem } = require("@/components/checkout-page/cart-item");
const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cartItems: [],
  cartTotal: 0,
  cartTax: 10,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCartTotal(state, action) {
      state.cartTotal = action.payload;
    },
    updateCartTax(state, action) {
      state.cartTax = action.payload;
    },
    clearCart(state) {
      state.cartItems = [];
    },
    addItemToCart(state, action) {
      const cartItem = state.cartItems?.find(
        (state) => state.id === action.payload.id
      );
      if (cartItem) {
        console.log(cartItem);
        const index = state.cartItems.indexOf(cartItem);
        state.cartItems[index].count++;
      } else {
        const newCartItem = action.payload;
        newCartItem.count = 1;
        state.cartItems.push(newCartItem);
      }
    },
    deleteItemFromCart(state, action) {
      const cartItem = state.cartItems?.find(
        (state) => state.id === action.payload.id
      );
      if (cartItem && cartItem.count > 1) {
        const index = state.cartItems.indexOf(cartItem);
        state.cartItems[index].count--;
      } else if (cartItem.count <= 1) {
        state.cartItems = state.cartItems.filter(
          (state) => state.id !== action.payload.id
        );
      }
    },
  },
});

const { reducer, actions } = cartSlice;
export default reducer;
export const {
  deleteItemFromCart,
  addItemToCart,
  clearCart,
  updateCartTax,
  updateCartTotal,
} = actions;
// cartItem = {
//     id: 2,
//     name: "222 MK II",
//     image: "image.cart....",
//     price: "item.price",
//     category: "item.category",
//     slug: "item.slug",
//     count: 1
//   };
