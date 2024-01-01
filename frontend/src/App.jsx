import { useEffect, useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/footer";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Register from "./pages/Register";
import LogIn from "./pages/LogIn";
import ProfileLayout from "./pages/Profile/ProfileLayout";
import UserInfo from "./pages/Profile/UserInfo";
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
import Reservations from "./pages/Reservations";
import OrderHistory from "./pages/Profile/OrderHistory";
import ReservationHistory from "./pages/Profile/ReservationHistory";
import Loading from "./ui/Loading";

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

  if (isLoading) return <Loading />;

  return (
    <>
      {!isAdminPage && <Navbar />}
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />

        <Route
          path="/admin"
          element={isAdmin ? <AdminLayout /> : <Navigate to="/" />}
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<AdminDashboard />} />
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
          element={user ? <ProfileLayout /> : <Navigate to="/login" />}
        >
          <Route path="UserInfo" index element={<UserInfo user={user} />} />
          <Route path="OrderHistory" element={<OrderHistory />} />
          <Route path="ReservationHistory" element={<ReservationHistory />} />
        </Route>
        <Route
          path="/orders"
          element={user ? <Orders /> : <Navigate to="/login" />}
        />
        <Route
          path="/reservations"
          element={user ? <Reservations /> : <Navigate to="/login" />}
        />
      </Routes>

      {!isAdminPage && <Footer />}
    </>
  );
};

export default App;
