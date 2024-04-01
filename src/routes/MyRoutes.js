import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import BookList from "../components/book-list/BookList";
import BooksContext from "../context/BooksContext";
import Cart from "../components/cart/Cart";
import CurrentBookContext from "../context/CurrentBookContext";
import Layout from "../components/layout/Layout";
import PageNotFound from "../components/page-not-found/PageNotFound";
import SelectedBooksContext from "../context/SelectedBooksContext";
import Signin from "../components/signin/Signin";
import SpecificBook from "../components/specific-book/SpecificBook";
import UserContext from "../context/UserContext";

export default function MyRoutes() {
  const [user, setUser] = useState(null);

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("/prometheus-x-course-task/books.json")
      .then((response) => response.json())
      .then((result) => setBooks(result.books));
  }, []);

  const [selectedBooks, setSelectedBooks] = useState([]);
  const [currentBook, setCurrentBook] = useState(null);

  const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }

    return children;
  };

  return (
    <UserContext.Provider value={{user,setUser}}>
      <BooksContext.Provider value={books}>
        <CurrentBookContext.Provider value={{currentBook,setCurrentBook}}>
          <SelectedBooksContext.Provider value={{selectedBooks,setSelectedBooks}}>
            <BrowserRouter basename={"/prometheus-x-course-task"}>
              <Routes>
                <Route
                  path="/"
                  element={<Layout/>}
                >
                  <Route path="/" element={<Signin  />} />
                  <Route
                    path="/specificbook"
                    element={
                      <ProtectedRoute user={user}>
                        <SpecificBook  />
                      </ProtectedRoute>
                    }
                  ></Route>
                  <Route
                    path="/booklist"
                    element={
                      <ProtectedRoute user={user}>
                        <BookList  />
                      </ProtectedRoute>
                    }
                  ></Route>
                  <Route
                    path="/cart"
                    element={
                      <ProtectedRoute user={user}>
                        <Cart/>
                      </ProtectedRoute>
                    }
                  ></Route>
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              </Routes>
            </BrowserRouter>
          </SelectedBooksContext.Provider>
        </CurrentBookContext.Provider>
      </BooksContext.Provider>
    </UserContext.Provider>
  );
}
