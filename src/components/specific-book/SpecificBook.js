import "./styles.css";

import { useContext, useState } from "react";

import CurrentBookContext from "../../context/CurrentBookContext";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import imageNotFound from "../../images/specific-book/imageNotFoundVertical.png";

export default function SpecificBook(props) {
  const {currentBook} = useContext(CurrentBookContext);

  const {selectedBooks} = useContext(SelectedBooksContext);

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    if (newQuantity > 0 && newQuantity <= 42) {
      setQuantity(newQuantity);
    }
  };

  const addToCart = () => {
    if (quantity >= 1 && quantity <= 42) {
      let book = { ...currentBook, quantity, totalPrice };
      selectedBooks.push(book);
    }
  };

  const totalPrice = parseFloat((currentBook.price * quantity).toFixed(2));

  const onErrorHandler = (e) => {
    e.currentTarget.src = imageNotFound;
    e.currentTarget.classList.add("image__not_found");
  };
  return (
    <div>
      <div className="wrapper">
        <main>
          <div className="specific-book">
            <div className="specific-book__container">
              <div className="bookinfo">
                <div className="specific-book__column specific-book__image">
                  <img
                    src={currentBook.image}
                    alt="Book"
                    onError={onErrorHandler}
                  />
                </div>
                <div className="specific-book__column specific-book__info">
                  <p>
                    <strong>Book name: </strong>
                    {currentBook.title}
                  </p>
                  <p>
                    <strong>Book author: </strong>
                    {currentBook.author}
                  </p>
                  <p>
                    <strong>Book level: </strong>
                    {currentBook.level}
                  </p>
                  <p>
                    <strong>Book tags: </strong>
                    {currentBook.tags}
                  </p>
                </div>
                <div className="specific-book__column specific-book__calculation">
                  <div className="price">
                    <p>Price</p>
                    <p id="pricePerBook">${currentBook.price}</p>
                  </div>
                  <form action="/">
                    <div className="choice">
                      <label htmlFor="quantity">Count</label>
                      <input
                        type="number"
                        id="quantity"
                        min="1"
                        max="42"
                        value={quantity}
                        onChange={handleQuantityChange}
                      />
                    </div>
                  </form>
                  <div className="totalPrice">
                    <p>Total price</p>
                    <p id="totalPrice">${totalPrice}</p>
                  </div>
                  <div className="specific-book__button">
                    <button
                      className="specific-book__add_button"
                      onClick={addToCart}
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
              <div className="bookview">
                <div className="specific-book__column specific-book__description">
                  <p>
                    <strong>Description: </strong>
                    {currentBook.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
