import { Routes, Route } from "react-router-dom";
import HeaderPage from "../header/Header";
import Homepage from "../pages/homepage/Homepage";
import LoginPage from "../pages/loginpage/Loginpage";
import RegisterPage from "../pages/registerpage/Registerpage";
import User from "../pages/user/user";
import style from "./Routes.module.css"

const RouterPage = () => {
    return (
        <div className={style.body}>
            <Routes>
               
                <Route path="/" element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="user" element={<User />} />
               
            </Routes>
        </div>
    )
}
export default RouterPage;