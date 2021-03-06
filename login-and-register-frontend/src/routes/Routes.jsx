import { Routes, Route, Navigate } from "react-router-dom";
import Customer from "../components/pages/customer/Customer";
import DashBoard from "../components/pages/dashboard/Dashboard";
import Homepage from "../components/pages/homepage/Homepage";
import Inventory from "../components/pages/inventory/Inventory";
import LoginPage from "../components/pages/loginpage/Loginpage";
import Order from "../components/pages/order/Order";
import RegisterPage from "../components/pages/registerpage/Registerpage";
import User from "../components/pages/user/user";
import style from "./Routes.module.css";

const RouterPage = () => {
  const ProtectedRoute = ({ token, children }) => {
    if (!localStorage.getItem("token")) {
      return <Navigate to="/" replace />;
    }
    return children;
  };
  return (
    <div className={style.body}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route
          path="user"
          element={
            <ProtectedRoute token={localStorage.getItem("token")}>
              <User />
            </ProtectedRoute>
          }
        />
        <Route
          path="customer"
          element={
            <ProtectedRoute token={localStorage.getItem("token")}>
              <Customer />
            </ProtectedRoute>
          }
        />
        <Route
          path="order"
          element={
            <ProtectedRoute token={localStorage.getItem("token")}>
              <Order />
            </ProtectedRoute>
          }
        />
        <Route
          path="inventory"
          element={
            <ProtectedRoute token={localStorage.getItem("token")}>
              <Inventory />
            </ProtectedRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <ProtectedRoute token={localStorage.getItem("token")}>
              <DashBoard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};
export default RouterPage;
