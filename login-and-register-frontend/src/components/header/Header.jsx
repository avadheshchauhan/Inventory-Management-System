import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InventoryIcon from '@mui/icons-material/Inventory';

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <AppBar>
          <Toolbar>
            <InventoryIcon />

            <Button
              variant="contained"
              size="large"
              sx={{ marginLeft: 'auto', bgcolor: 'secondary.main' }}
            >
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="login"
              >
                Login
              </Link>
            </Button>

            <Button
              variant="contained"
              size="large"
              sx={{ marginLeft: '10px', bgcolor: 'secondary.main' }}
            >
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="register"
              >
                Register
              </Link>
            </Button>

            <Button
              variant="contained"
              size="large"
              sx={{ marginLeft: '10px', bgcolor: 'secondary.main' }}
            >
              <Link
                style={{ color: 'white', textDecoration: 'none' }}
                to="/"
                onClick={() => {
                  localStorage.removeItem('userInfo');
                  navigate('/');
                }}
              >
                Logout
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
};

export default Header;
