import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import useFetchInventory from "../../../hooks/useFetchInventory";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, prodName, theme) {
  return {
    fontWeight:
      prodName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}
const Order = () => {
  const theme = useTheme();
  const [prodName, setprodName] = React.useState();
  const [product, setProduct] = React.useState([]);
  const [price, setPrice] = React.useState();
  const [quantity, setQuantity] = React.useState();
  const [ordetails, setOrdetails] = React.useState({
    firstname: "",
    lastname: "",
    date: "",
    email: "",
    phoneno: "",
    address: "",
    product: "",
    quantity: "",
    totalPrice: "",
  });

  const { data } = useFetchInventory();

  const quantityHandleChange = (e) => {
    setQuantity(e.target.value);
    console.log(e.target.value);
    data.map((list) => {
      if (
        list.productname === prodName &&
        e.target.value < list.totalQuantity
      ) {
        setPrice(list.price * e.target.value);
      } else {
        console.log("out of stock");
      }
    });
  };

  //getting list of product

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setprodName(value);
  };

  const orderHandleChange = (e) => {
    const { name, value } = e.target;
    setOrdetails({
      ...ordetails,
      [value]: value,
    });
  };
  return (
    <div>
      <Grid>
        <Card style={{ padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Order Details
            </Typography>

            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter first name"
                    name="firstname"
                    value={ordetails.firstname}
                    label="First Name"
                    onChange={orderHandleChange}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField
                    placeholder="Enter last name"
                    name="lastname"
                    value={ordetails.lastname}
                    onChange={orderHandleChange}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="email"
                    name="email"
                    value={ordetails.email}
                    placeholder="Enter email"
                    onChange={orderHandleChange}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    type="number"
                    name=" phoneno"
                    value={ordetails.phoneno}
                    placeholder="Enter phone number"
                    onChange={orderHandleChange}
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="date"
                    name="date"
                    value={ordetails.date}
                    onChange={orderHandleChange}
                    label="Date"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    label="Delivery Address"
                    name="address"
                    value={ordetails.address}
                    onChange={orderHandleChange}
                    placeholder="Enter Your address"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl sx={{}} fullWidth required>
                    <InputLabel id="demo-multiple-name-label">
                      Product
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-name-label"
                      id="demo-multiple-name"
                      value={product.productname}
                      onChange={handleChange}
                      input={<OutlinedInput label="Name" />}
                      MenuProps={MenuProps}
                    >
                      {data.map((product) => (
                        <MenuItem
                          key={product._id}
                          value={product.productname}
                          //   style={getStyles(name, prodName, theme)}
                        >
                          {product.productname}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    type="number"
                    label="Quantity"
                    variant="outlined"
                    onChange={quantityHandleChange}
                    value={quantity}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Total Price"
                    variant="outlined"
                    value={price}
                    fullWidth
                    required
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Place Order
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Order;
