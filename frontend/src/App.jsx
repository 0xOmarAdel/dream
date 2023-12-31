import { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/footer";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import OrderOnline from "./pages/OrderOnline";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, setUser } from "./store/slices/userAuthSlice";
import axios from "axios";
import { getCartItems } from "./store/slices/cartSlice";
import Contact from "./pages/Contact";
import AdminLayout from "./pages/Admin/AdminLayout";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import AdminMeals from "./pages/Admin/AdminMeals";
import AdminOrders from "./pages/Admin/AdminOrders";
import AdminReservations from "./pages/Admin/AdminReservations";

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
        dispatch(getCartItems());
        console.log(response.data.userData);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };
    fetchToken();
  }, [dispatch, localToken]);

  const location = useLocation();
  const pathArray = location.pathname.split("/");

  const isAdminPage = pathArray[1] === "admin";

  if (isLoading) return;

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" index element={<AdminDashboard />} />
          <Route path="meals" element={<AdminMeals />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="reservations" element={<AdminReservations />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
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
          path="/cart"
          element={user ? <Cart /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/orders"
          element={user ? <Orders /> : <Navigate to="/login" />}
        />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
};

export default App;
