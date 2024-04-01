import { Link } from "react-router-dom";
import SelectedBooksContext from "../../context/SelectedBooksContext";
import UserContext from "../../context/UserContext";
import avatar from "../../images/signin/cropped.png";
import cart from "../../images/header/cart.svg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const {user,setUser} = useContext(UserContext);
  const {setSelectedBooks} = useContext(SelectedBooksContext);
  const navigate = useNavigate();

  const navigateCart = () => {
    navigate("/cart");
  };

  const handleLogout = () => {
    setUser(null);
    setSelectedBooks([]);
  };

  return (
    <header>
      <div className="authorization__container">
        <div className="authorization">
          <nav>
            <Link to="/booklist" className="main-header">
              JS BAND STORE | Menshykov Maksym
            </Link>
          </nav>
        </div>
        <div>
          {user && (
            <div className="headerActions__container">
              <button
                className="headerActions__cart"
                href=""
                onClick={navigateCart}
              >
                <img src={cart} alt="cart" />
              </button>
              <button className="headerActions__button" onClick={handleLogout}>
                Sign-Out
              </button>
             
              <img
                className="headerActions__avatar"
                src={avatar}
                alt="avatar"
                width="40px"
              />
              <p className="headerActions__user">{user}</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
