import { Typography } from "@mui/material"
//import Image from 'material-ui-image'
//import Header from "../../header/Header"
import logo from './inventory.png'

const Homepage = () => {
    return (
        <div>
            
            <Typography variant="h1">
                Homepage
            </Typography>;<br />
            <img
                src={logo}
                alt="inventory "
                width="200" height="150"
            />
        </div>
    )
}
export default Homepage