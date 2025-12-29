import { addToCart ,   removeFromCart} from "./cart";
const cartInitialState = { cartCount: 0 };

function cartReducer(state = cartInitialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return { cartCount: state.cartCount + 1 };

    case "REMOVE_FROM_CART":
      return {
        cartCount: state.cartCount > 0
          ? state.cartCount - 1
          : ()=>{alert("You have no items in your cart")}
      };

    default:
      return state;
  }
}

export default cartReducer;