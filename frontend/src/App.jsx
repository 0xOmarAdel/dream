import { Fragment } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import OrderOnline from "./pages/OrderOnline";
import SignIn from "./pages/SignIn";
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
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
