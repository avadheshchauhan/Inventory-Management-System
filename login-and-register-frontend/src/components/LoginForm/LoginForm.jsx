import { Button, TextField, Typography } from '@mui/material';
import style from './LoginForm.module.css';
import { useState } from 'react';
import axios from 'axios';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState('');

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(email, password);

    try {
      const config = {
        headers: {
          'Content-type': 'application/json',
        },
      };

      setLoading(true);

      const { data } = await axios.post(
        'http://localhost:5000/login',
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      navigate('/user');
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
      {loading && <Loading />}
      <form className={style.route} onSubmit={submitHandler}>
        <div className={style.form}>
          <Typography variant="h3">Login</Typography>
          <br />
          <TextField
            id="outlined-basic"
            label="Email Id"
            type="email"
            color="secondary"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your EmailId"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            fullWidth
            variant="outlined"
            required
          />{' '}
          <br />
          <Button
            size="large"
            sx={{ marginTop: '20px' }}
            variant="contained"
            type="submit"
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
