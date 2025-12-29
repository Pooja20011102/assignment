import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./redux/cart";

function Cart() {
  const cartCount = useSelector((state) => state.cart.cartCount);
  const dispatch = useDispatch();

  const handleRemove = () => {
    if (cartCount === 0) {
      alert("You have no items in your cart");
    } else {
      dispatch(removeFromCart());
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Redux Cart</h2>
      <h1>Items in Cart: {cartCount}</h1>

      <button onClick={() => dispatch(addToCart())}>
        Add to Cart
      </button><br />

      <button onClick={handleRemove}>
        Remove from Cart
      </button>
    </div>
  );
}

export default Cart;
