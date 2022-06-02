import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InventoryIcon from '@mui/icons-material/Inventory';
import { Typography } from '@mui/material';
import useUser from '../../hooks/useUser';
import styles from './Header.module.css';

const HeaderPage = () => {
  const location = useLocation();
  const { user } = useUser();
  console.log(user);
  console.log(location.pathname);
  return (
    <AppBar className={styles.header}>
      <Toolbar>
        <InventoryIcon className={styles.icon} />
        <Typography className={styles.iconText}>INVENTORY</Typography>
        {location.pathname === '/user' ||
        location.pathname === '/dashboard' ||
        location.pathname === '/order' ||
        location.pathname === '/customer' ||
        location.pathname === '/inventory' ? (
          <>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={styles.links} to="dashboard">
                DashBoard
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={styles.links} to="inventory">
                Inventory
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={styles.links} to="order">
                Order
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={styles.links} to="customer">
                Customer
              </Link>
            </Typography>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link className={styles.links} to="/user">
                User
              </Link>
            </Typography>
            <Button variant="contained" className={styles.logoutBtn}>
              <Link className={styles.links} to="/">
                Logout
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Button className={styles.loginBtn} variant="contained">
              <Link className={styles.links} to="login">
                Login
              </Link>
            </Button>

            <Button className={styles.registerBtn} variant="contained">
              <Link className={styles.links} to="register">
                SIGN UP
              </Link>
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default HeaderPage;
