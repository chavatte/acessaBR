import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.scss";
import { UserProvider } from "./contexts/UserContext";
import Footer from "./components/Footer";
import Routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="main__wrapper">
    <div className="main__container">
      <BrowserRouter>
        <UserProvider>
          <Routes />
        </UserProvider>
      </BrowserRouter>
    </div>
    <Footer />
  </div>
);
