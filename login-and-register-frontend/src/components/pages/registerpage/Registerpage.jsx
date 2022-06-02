import { Button, TextField, Typography } from '@mui/material';
import styles from './Registerpage.module.css';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import useUser from '../../../hooks/useUser';

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
      <form
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
          {/* <p className={styles.errorMsg}>{error}</p> */}
        </div>
      </form>
      <Outlet />
    </>
  );
};
export default RegisterPage;
