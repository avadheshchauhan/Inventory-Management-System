import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage/Homepage';
import Loginpage from '../pages/Loginpage/Loginpage';
import Registerpage from '../pages/Registerpage/Registerpage';
import User from '../pages/UserPage/user';
import style from './Routes.module.css';

const RouterPage = () => {
  return (
    <div className={style.body}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
};
export default RouterPage;
