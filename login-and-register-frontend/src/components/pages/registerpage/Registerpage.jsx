import { Button, TextField, Typography } from "@mui/material"
import style from "./Registerpage.module.css"
import { useState } from "react"
import axios from "axios"


const RegisterPage = () => {
    const [user, setUser] = useState({
        fullname: '',
        email: "",
        password: ""
    })

    const onchangeHandler = (e) => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const RegisterHandler = () => {
        const { fullname ,email, password } = user
        if (email && fullname && password) {
            axios.post("", user)
                .then( )
        }
    }
    return (
        <form className={style.form}>
            <div className={style.body}>
                <Typography variant="h3" sx={{ margin: "20px" }}> Register</Typography>

                <TextField id="outlined-basic"
                    label="Full Name"
                    onChange={onchangeHandler}
                    name="fullname"
                    value={user.fullname}
                    type="text"
                    color="secondary"
                    required sx={{ marginBottom: "10px" }}
                    fullWidth placeholder="Enter your Full Name"
                    variant="outlined" />

                <TextField id="outlined-basic"
                    label="Email Id"
                    onChange={onchangeHandler}
                    name="email"
                    value={user.email}
                    type="email"
                    color="secondary"
                    required
                    sx={{ marginBottom: "10px" }}
                    fullWidth
                    placeholder="Enter your Emailid"
                    variant="outlined" />

                <TextField id="outlined-basic"
                    label=" Password"
                    onChange={onchangeHandler}
                    name="password"
                    type="password"
                    value={user.password}
                    color="secondary"
                    required
                    sx={{ marginBottom: "10px" }}
                    fullWidth
                    placeholder="Enter your password"
                    variant="outlined" />

                <Button size="large" onClick={RegisterHandler} sx={{ marginTop: "20px" }} variant="contained">Register</Button>

            </div>

        </form>


    )
}
export default RegisterPage;