import "./styles.css";

import React, { useState } from "react";

import UserContext from "../../context/UserContext";
import avatar from "../../images/signin/avatar.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin(props) {
  const [usernameValue, setUsernameValue] = useState("");
  const {setUser} = useContext(UserContext);

  const [isUserTyping, setIsUserTyping] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const trimmedUsername = e.target.value.trim();

    if (e.currentTarget.value.includes(" ")) {
      e.currentTarget.value = e.currentTarget.value.replace(/\s/g, "");
    }

    setUsernameValue(trimmedUsername);
    setIsUserTyping(true);
  };

  const handleInputBlur = (e) => {
    if (e.target.value === "") {
      setIsUserTyping(false);
    }
  };

  const navigateBooklist = () => {
    setUser(usernameValue);
    navigate("/booklist");
  };

  const availableUsername =
    usernameValue.length >= 4 && usernameValue.length <= 16;

  return (
    <div className="auth-form-container">
      <div className="container">
        <div className="sign-in">
          <img className="sign-in__image" src={avatar} alt="avatar" />
          <form action="/handling-form-page" method="post">
            <div className="sign-in__form">
              <label className="sign-in__label" htmlFor="username">
                Username
              </label>

              <input
                className="sign-in__input"
                type="text"
                id="username"
                name="user_name"
                placeholder="Username"
                onChange={handleChange}
                onBlur={handleInputBlur}
              />
              {!availableUsername && isUserTyping ? (
                <span className="input_error-message">
                  Username must have at least 4 characters but cannot exceed 16
                  characters
                </span>
              ) : null}
            </div>
            <button
              className="sign-in__button"
              type="submit"
              name="submit"
              disabled={!availableUsername}
              onClick={navigateBooklist}
            >
              Sign-In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
