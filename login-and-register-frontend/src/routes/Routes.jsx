import { Routes, Route } from "react-router-dom";
import Customer from "../components/pages/customer/Customer";
import DashBoard from "../components/pages/dashboard/Dashboard";
import Homepage from "../components/pages/homepage/Homepage";
import Inventory from "../components/pages/inventory/Inventory";
import LoginPage from "../components/pages/loginpage/Loginpage";
import Order from "../components/pages/order/Order";
import RegisterPage from "../components/pages/registerpage/Registerpage";
import User from "../components/pages/user/user";
import style from "./Routes.module.css"

const RouterPage = () => {
    return (
        <div className={style.body}>
            <Routes>
               
                <Route path="/" element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="user" element={<User />} />
                <Route path="customer" element={<Customer />} />
                <Route path="order" element={<Order />} />
                <Route path="inventory" element={<Inventory />} />
                <Route path="dashboard" element={<DashBoard />} />

            </Routes>
        </div>
    )
}
export default RouterPage;