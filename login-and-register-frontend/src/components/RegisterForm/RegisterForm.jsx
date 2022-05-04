import { Button, TextField, Typography } from '@mui/material';
import style from './RegisterForm.module.css';
import { useState } from 'react';
import axios from 'axios';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loading from '../Loading/Loading';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, SetConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Password Do Not Match!!!');
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            'Context-type': 'application/json',
          },
        };

        setLoading(true);
        const { data } = await axios.post(
          'http://localhost:5000/register',
          { name, email, password },
          config
        );
        setLoading(false);
        localStorage.setItem('userInfo', JSON.stringify(data));
        navigate('/user');
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <form className={style.form} onSubmit={submitHandler}>
        {error && <ErrorMessage severity="error">{error}</ErrorMessage>}
        {message && <ErrorMessage severity="error">{message}</ErrorMessage>}
        {loading && <Loading />}
        <div className={style.body}>
          <Typography variant="h3" sx={{ margin: '20px' }}>
            {' '}
            Register
          </Typography>

          <TextField
            id="outlined-basic"
            label="Full Name"
            onChange={(e) => setName(e.target.value)}
            name="fullname"
            value={name}
            type="text"
            color="secondary"
            required
            sx={{ marginBottom: '10px' }}
            fullWidth
            placeholder="Enter your Full Name"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label="Email Id"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
            type="email"
            color="secondary"
            required
            sx={{ marginBottom: '10px' }}
            fullWidth
            placeholder="Enter your Emailid"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label=" Password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            value={password}
            color="secondary"
            required
            sx={{ marginBottom: '10px' }}
            fullWidth
            placeholder="Enter your password"
            variant="outlined"
          />

          <TextField
            id="outlined-basic"
            label=" Confirm Password"
            onChange={(e) => SetConfirmPassword(e.target.value)}
            name="Confirm Password"
            type="password"
            value={confirmPassword}
            color="secondary"
            required
            sx={{ marginBottom: '10px' }}
            fullWidth
            placeholder="Confirm Password"
            variant="outlined"
          />

          <Button
            size="large"
            type="submit"
            // onClick={RegisterHandler}
            sx={{ marginTop: '20px' }}
            variant="contained"
          >
            Register
          </Button>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
