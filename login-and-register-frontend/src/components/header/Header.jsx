import { Link, Outlet, useLocation } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import InventoryIcon from '@mui/icons-material/Inventory';
import { useEffect, useState } from "react";

const HeaderPage = () => {
    const location = useLocation()
    console.log(location.pathname);
    return (
        <>
            <div>
                <AppBar>
                    <Toolbar>
                        <InventoryIcon />
                        {location.pathname == "/user" ?
                            <>
                                {console.log("here")}
                                <Button variant="contained"

                                    size="large"
                                    sx={{ marginLeft:"auto", bgcolor: 'secondary.main' }}>
                                    <Link style={{ color: "white", textDecoration: "none" }} to="login">Logout</Link>
                                </Button>
                            </>
                            :
                            <>
                                {console.log("here i am ")}
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
                            </>
                        }
                    </Toolbar>
                </AppBar>
            </div>

        </>

    )
}

export default HeaderPage;