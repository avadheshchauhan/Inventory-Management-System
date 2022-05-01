import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InventoryIcon from '@mui/icons-material/Inventory';



const HeaderPage = () => {
    return (
        <>
            <div>
                <AppBar>
                    <Toolbar>
                        <InventoryIcon />

                        <Button variant="contained"
                            size="large"
                            sx={{ marginLeft: "auto", bgcolor: 'secondary.main', }}>
                            <Link style={{ color: "white", textDecoration: "none" }} to="login">Login</Link>
                        </Button>

                        <Button variant="contained"
                            size="large"
                            sx={{ marginLeft: "10px", bgcolor: 'secondary.main' }}>
                            <Link style={{ color: "white", textDecoration: "none" }} to="register">Register</Link>
                        </Button>
                        
                        <Button variant="contained"
                            size="large"
                            sx={{ marginLeft: "10px", bgcolor: 'secondary.main' }}>
                            <Link style={{ color: "white", textDecoration: "none" }} to="/">Logout</Link>
                        </Button>

                    </Toolbar>
                </AppBar>
            </div>

        </>

    )
}

export default HeaderPage;