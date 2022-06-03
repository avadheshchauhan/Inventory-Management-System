import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useUser = () => {
  const [userinfo, setUserinfo] = useState();
  const [loading,setLoading]=useState(false)
  const [errorresponse,setErrorresponse]=useState(false)

  let navigate = useNavigate();

  const registeruser = (newuser) => {
    try {
      const register = async () => {
        const user = await axios.post(
          'http://localhost:5000/register',
          newuser
        );
        if (user.status === 201) {
          setUserinfo(user.data);
          navigate('/login');
        }
       
      };
      register();
    } catch (error) {
      console.error('Error: ', error.message);
      // setError(error.message)
      // setLoading(false)
    }
  };

  const authUser = (user) => {
    setLoading(false)
    setErrorresponse("")
    try {
      const loginuser = async () => {
        const auth = await axios.post('http://localhost:5000/login', user);
        console.log(auth)
        if (auth.status === 201) {
          localStorage.setItem('token', auth.data.token);
          setUserinfo(auth.data);
          console.log(auth.data);
          navigate('/dashboard');
          setLoading(true)
        }
  
      };
      loginuser();
    } catch (error) {
      if(error.response.status===500 & error.response.status===400){
        console.log("catch........")
        setErrorresponse(true,".................")
        setLoading(false)

      }
      // console.log('Errorstssffv: ', Response.error.status);
      // setError(error.message)
    }
  };
  return { registeruser, userinfo, authUser,loading,errorresponse };
};

export default useUser;
