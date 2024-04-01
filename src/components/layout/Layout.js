import "./styles.css";

import Footer from "../footer/Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      <Header/>
        <Outlet />
      <Footer />
    </div>
  );
}
