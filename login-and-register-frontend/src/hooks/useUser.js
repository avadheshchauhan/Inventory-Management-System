import React, { useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
const useUser = () => {
  const [userinfo, setUserinfo] = useState();
  let navigate = useNavigate();
  const registeruser = (newuser) => {
    try {
      const register = async () => {
        const user = await axios.post(
          "http://localhost:5000/register",
          newuser
        );
        if (user.status === 201) {
          setUserinfo(user.data);
          navigate("/dashboard");
        }
      };
      register();
    } catch (error) {
      console.error("Error: ", error.message);
      // setError(error.message)
      // setLoading(false)
    }
  };

  const authUser = (user) => {
    try {
      const loginuser = async () => {
        const auth = await axios.post("http://localhost:5000/login", user);
        if (auth.status === 201) {
          localStorage.setItem("token", auth.data.token);
          setUserinfo(auth.data);
          console.log(auth.data);
          navigate("/dashboard");
        }
      };
      loginuser();
    } catch (error) {
      console.error("Error: ", error.message);
      // setError(error.message)
      // setLoading(false)
    }
  };
  return { registeruser, userinfo, authUser };
};

export default useUser;
