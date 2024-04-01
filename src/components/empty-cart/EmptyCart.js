import cart from "../../images/header/cart.svg";
import "./styles.css";

export default function EmptyCart() {
  return (
    <div className="cart__empty">
      <img className="cart__image" src={cart} alt="cart" />
      <p>Your cart is empty</p>
    </div>
  );
}
