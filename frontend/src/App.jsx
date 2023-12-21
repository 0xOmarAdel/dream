import { Fragment } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import OrderOnline from "./pages/OrderOnline";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/OrderOnline" element={<OrderOnline />} />
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
