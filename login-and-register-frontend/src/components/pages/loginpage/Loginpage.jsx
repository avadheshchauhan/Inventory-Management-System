import { Button, TextField, Typography } from "@mui/material"
import style from "./Loginpage.module.css"
import { useState } from "react"
import axios from "axios"
import { Outlet, useNavigate } from "react-router-dom";


const LoginPage = ({setUser}) => {
    let navigate = useNavigate();
    const[error,setError]=useState()
    const [loginuser, setLoginuser] = useState({
        email: "",
        password: ""
    })

    const onchangeHandler = (e) => {
        const { name, value } = e.target
        setLoginuser({
            ...loginuser,
            [name]: value
        })
    }

    const loginHandler = () => {
        const { email, password } = loginuser
        
        if (email && password) {
            axios.post("http://localhost:5000/login", loginuser)
    
               .then((res)=>{
               // console.log(JSON.parse(localStorage.getItem("userInfo")));        
                console.log("user login succesfully",res.data)
                    // setUser(res.data)
                    if(res.status===201){
                        localStorage.setItem('userInfo', JSON.stringify(res.data.email))
                        navigate("/dashboard")
                    }
                    
                }).catch((err)=>{
                    setError("User not found")
                    console.log("error msg",err)
                })
        }
    }

    return (
        <>
                    <form className={style.route}>
                <div className={style.form}>
                    <Typography variant="h3">Login</Typography><br />

                    <TextField id="outlined-basic"
                        label="Email Id"
                        type="email"
                        color="secondary"
                        name="email"
                        value={loginuser.email}
                        onChange={onchangeHandler}
                        placeholder="Enter your EmailId"
                        fullWidth
                        variant="outlined"
                        required /> <br /><br />

                    <TextField id="outlined-basic"
                        label="Password"
                        type="password"
                        color="secondary"
                        name="password"
                        value={loginuser.password}
                        onChange={onchangeHandler}
                        placeholder="Enter your password"
                        fullWidth variant="outlined"
                        required /> <br />

                    <Button size="large" sx={{ marginTop: "20px" }} onClick={loginHandler} variant="contained">Login</Button>
                    <p>{error}</p>
                </div>

            </form>
            {console.log(loginuser)}
            
        </>


    )
}
export default LoginPage;