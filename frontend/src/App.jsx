import { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./components/footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Reservations from "./pages/Reservations";
import About from "./pages/About";
import OrderOnline from "./pages/OrderOnline";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./store/slices/userAuthSlice";
import axios from "axios";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(selectUser);
  const isAdmin = user?.role === "admin";

  const dispatch = useDispatch();
  const localToken = localStorage.getItem("token");
  useEffect(() => {
    if (!localToken) {
      setIsLoading(false);
      return;
    }
    const fetchToken = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/validateToken",
          {
            token: localToken,
          }
        );
        dispatch(setUser(response.data.userData));
        console.log(response.data.userData);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchToken();
  }, [dispatch, localToken]);

  if (isLoading) return;

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/OrderOnline" element={<OrderOnline />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/register"
          element={!user ? <Register /> : <Navigate to="/" />}
        />
        <Route
          path="/login"
          element={!user ? <LogIn /> : <Navigate to="/" />}
        />
        <Route
          path="/Cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
