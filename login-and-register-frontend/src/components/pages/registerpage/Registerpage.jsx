import { Button, TextField, Typography,Box } from '@mui/material';
import styles from './Registerpage.module.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useUser from '../../../hooks/useUser';
import { Link } from "react-router-dom";


const RegisterPage = () => {
  // const [error, setError] = useState();
  const { registeruser } = useUser();
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
  });

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const RegisterHandler = (user, e) => {
    e.preventDefault();
    if (user.email && user.fullname && user.password) {
      registeruser(user);
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
          Register
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
          Please register your account details below
        </Typography>
        <TextField
          sx={{ width: "432px", height: "52px", mb: "20px" }}
          placeholder="Full Name"
          onChange={onchangeHandler}
          name="fullname"
          value={user.fullname}
          required
        />
        <TextField
          required
          sx={{ width: "432px", height: "52px" }}
          placeholder="Email"
          onChange={onchangeHandler}
          name="email"
          value={user.email}
          
        />
        <TextField
          sx={{ width: "432px", height: "52px", mt: "20px", mb: "20px" }}
          placeholder="Password"
          onChange={onchangeHandler}
          name="password"
          type="password"
          value={user.password}
          required
        />

        <Button
          variant="contained"
          onClickonSubmit={(e) => {
            RegisterHandler(user, e);
          }}
          sx={{
            width: "432px",
            height: "47px",
            bgcolor: "#FB2E86",
            color: "white",
            mt: "20px",
            mb: "20px",
          }}
        >
          Register
        </Button>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: "400px",
            fontSize: "17px",
            color: "#9096B2",
          }}
        >
          Already have account? <Link to="/login">Login</Link>
        </Typography>
      </Box>
      {/* <form
        className={styles.form}
        onSubmit={(e) => {
          RegisterHandler(user, e);
        }}
      >
        <div className={styles.body}>
          <Typography variant="h3" sx={{ margin: '20px' }}>
            {' '}
            Register
          </Typography>
          <br />
          <br />
          <TextField
            id="outlined-fullname"
            label="Full Name"
            onChange={onchangeHandler}
            name="fullname"
            value={user.fullname}
            type="text"
            color="secondary"
            required
            className={styles.inputField}
            fullWidth
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            id="outlined-emailid"
            label="Email Id"
            onChange={onchangeHandler}
            name="email"
            value={user.email}
            type="email"
            color="secondary"
            required
            className={styles.inputField}
            fullWidth
            variant="outlined"
          />
          <br />
          <br />
          <TextField
            className={styles.inputField}
            id="outlined-password"
            label=" Password"
            onChange={onchangeHandler}
            name="password"
            type="password"
            value={user.password}
            color="secondary"
            required
            fullWidth
            variant="outlined"
          />
          <br />
          <Button
            size="large"
            type="submit"
            variant="contained"
            className={styles.registerBtn}
          >
            Register
          </Button>
        </div>
      </form> */}
      {/* <Outlet /> */}
    </>
  );
};
export default RegisterPage;
