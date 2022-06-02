import { Button, TextField, Typography } from '@mui/material';
import styles from './Loginpage.module.css';
import { useState } from 'react';
import useUser from '../../../hooks/useUser';

const LoginPage = ({ setUser }) => {
  const { authUser } = useUser();
  const [error, setError] = useState();
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

  const loginHandler = (loginuser, e) => {
    e.preventDefault();

    if (loginuser.email && loginuser.password) {
      authUser(loginuser);
    }
  };

  return (
    <>
      <form
        className={styles.route}
        onSubmit={(e) => loginHandler(loginuser, e)}
      >
        <div className={styles.form}>
          <Typography variant="h3">Login</Typography>
          <br />
          <TextField
            id="outlined-basic"
            label="Email Id"
            type="email"
            color="secondary"
            name="email"
            value={loginuser.email}
            onChange={onchangeHandler}
            fullWidth
            variant="outlined"
            required
          />{' '}
          <br />
          <br />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            color="secondary"
            name="password"
            value={loginuser.password}
            onChange={onchangeHandler}
            fullWidth
            variant="outlined"
            required
          />{' '}
          <br />
          <Button
            size="large"
            sx={{ marginTop: '20px' }}
            type="submit"
            variant="contained"
            className={styles.loginBtn}
          >
            Login
          </Button>
          <p>{error}</p>
        </div>
      </form>
      {console.log(loginuser)}
    </>
  );
};
export default LoginPage;
