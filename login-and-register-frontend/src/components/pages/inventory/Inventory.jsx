import { Button, Grid, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import useFetchInventory from '../../../hooks/useFetchInventory';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const Inventory = () => {
  const [product, setProduct] = useState({
    productname: '',
    quantity: '',
    price: '',
  });

  const { loading, data, error, addProduct, deleteProduct } =
    useFetchInventory();

  const productHandler = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  console.log(data, '💕💕💕');
  //adding the stockHandler
  const addProductHandler = (e) => {
    console.log(product);
    e.preventDefault();
    addProduct(product);
    setProduct({
      productname: '',
      quantity: '',
      price: '',
    });
  };

  const deleteProductHandler = (index) => {
    deleteProduct(index);
  };

  return (
    <div>
      <Typography>Add Product</Typography>

      <form onSubmit={addProductHandler}>
        <Grid container spacing={1}>
          <Grid xs={12} sm={6} item>
            <TextField
              placeholder="Enter Product name"
              label="Product Name"
              name="productname"
              value={product.productname}
              variant="outlined"
              onChange={productHandler}
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              type="number"
              placeholder="Enter Quantity of product"
              name="quantity"
              value={product.quantity}
              label="Quantity"
              variant="outlined"
              onChange={productHandler}
              fullWidth
              required
            />
          </Grid>
          <Grid xs={12} sm={6} item>
            <TextField
              type="number"
              name="price"
              value={product.price}
              placeholder="Enter Price of product"
              label="Price"
              variant="outlined"
              onChange={productHandler}
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
      <Typography>Inventory Stock</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Sr.No</StyledTableCell>
              <StyledTableCell align="left">Product Id</StyledTableCell>
              <StyledTableCell align="left">Product Name</StyledTableCell>
              <StyledTableCell align="left">Product Price</StyledTableCell>
              <StyledTableCell align="left"> Qty</StyledTableCell>
              <StyledTableCell align="left">Total Price</StyledTableCell>
              <StyledTableCell align="left">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          {false ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <TableBody>
              {data.map((stock, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell component="th" scope="row">
                    {index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    SKU000{index + 1}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {stock.productname}
                  </StyledTableCell>
                  <StyledTableCell align="left">{stock.price}</StyledTableCell>

                  <StyledTableCell align="left">
                    {stock.totalQuantity}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {stock.totalprice}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Tooltip title="Delete">
                      <IconButton>
                        <DeleteIcon
                          onClick={() => deleteProductHandler(index)}
                        />
                      </IconButton>
                    </Tooltip>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
    </div>
  );
};

export default Inventory;
