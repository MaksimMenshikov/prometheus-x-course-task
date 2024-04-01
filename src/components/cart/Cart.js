import "./styles.css";

import EmptyCart from "../empty-cart/EmptyCart";
import PurchasedBooks from "../purchasedBooks/purchasedBooks";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import { useContext } from "react";

export default function Cart(props) {
  const {selectedBooks,setSelectedBooks} = useContext(SelectedBooksContext);

  const purchaseBooks = () => {
    setSelectedBooks([]);
  };

  if (selectedBooks.length === 0) {
    return (
      <div className="cart__empty_purchase">
        <div className="cart__purchase_button_container">
          <button
            className="cart__purchase_button"
            disabled={selectedBooks.length === 0}
            onClick={() =>setSelectedBooks([])}
          >
            Purchase
          </button>
        </div>
        <EmptyCart />
      </div>
    );
  } else {
    return (
      <div className="cart__empty_purchase">
        <div className="cart__purchase_button_container">
          <button className="cart__purchase_button" onClick={purchaseBooks}>
            Purchase
          </button>
        </div>
        <PurchasedBooks  />
      </div>
    );
  }
}
