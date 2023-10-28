import React from "react";
import { Fragment } from "react";
import Nav from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import OrderOnline from "./pages/OrderOnline";
const App = () => {
  return (
    <Fragment>
      <Nav />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/OrderOnline" element={<OrderOnline />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
