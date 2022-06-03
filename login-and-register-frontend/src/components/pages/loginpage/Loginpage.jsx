import { Button,Box, TextField, Typography } from '@mui/material';
import styles from './Loginpage.module.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import useUser from '../../../hooks/useUser';

const LoginPage = ({ setUser }) => {
  const { authUser,loading,errorresponse, } = useUser();
  const [loginuser, setLoginuser] = useState({
    email: '',
    password: '',
  });

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginuser({
      ...loginuser,
      [name]: value,
    });
  };
console.log(errorresponse,"err...............")
  const loginHandler = (loginuser, e) => {
    e.preventDefault();

    if (loginuser.email && loginuser.password) {
      authUser(loginuser);
    }
  };

  return (
    <>
     <Box
        sx={{
          width: "544px",
          height: "474px",
          mt: "100px",
          justifyContent: "center",
          margin: "auto",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            color: "#000000",
            fontFamily: "Josefin Sans",
            fontSize: "32px",
          }}
        >
          Login
        </Typography>
        <Typography
          sx={{
            color: "#9096B2",
            fontFamily: "Lato",
            fontWeight: "400px",
            size: "17px",
            mt: "20px",
            mb: "30px",
          }}
        >
          Please login using account details below
        </Typography>
        <TextField
          sx={{ width: "432px", height: "52px" }}
          placeholder="Email"
          name="email"
            value={loginuser.email}
            onChange={onchangeHandler}
            required
        />
        <TextField
          sx={{ width: "432px", height: "52px", mt: "20px", mb: "20px" }}
          placeholder="Password"
          name="password"
          required
          value={loginuser.password}
          onChange={onchangeHandler}
        />
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "400px",
            fontSize: "17px",
            color: "#9096B2",
          }}
        >
          Forget Your password?
        </Typography>
        <Button
          variant="contained"
          onClick={(e) => loginHandler(loginuser, e)}

          sx={{
            width: "432px",
            height: "47px",
            bgcolor: "#FB2E86",
            color: "white",
            mt: "20px",
            mb: "20px",
          }}
        >
          Sign In
        </Button>
        {}
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "400px",
            fontSize: "17px",
            color: "#9096B2",
          }}
        >
          Dont have account?<Link to="/register">Create account</Link>
        </Typography>

        {errorresponse && <>
         <p>error found</p>
        </>}
      </Box>
     
    </>
  );
};
export default LoginPage;
