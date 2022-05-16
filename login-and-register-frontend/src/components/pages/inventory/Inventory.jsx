import { Grid, Typography } from "@mui/material";

const Inventory = () => {
  return (
    <div>
      <Typography>Add Product</Typography>

      <form>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField
              placeholder="Enter Product name"
              label="Product Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              type="number"
              placeholder="Enter Quantity of product"
              label="Quantity"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              type="number"
              placeholder="Enter Price of product"
              label="Price"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Add Product
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography>List Of Inventory Product</Typography>
      <table>
        <th>Sr.No</th>
        <th>Product Id</th>
        <th>Item Name</th>
        <th>Quantity</th>
        <th>Price</th>
      </table>
    </div>
  );
};

export default Inventory;
