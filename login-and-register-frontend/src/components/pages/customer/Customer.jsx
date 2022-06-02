import { Typography } from '@mui/material';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useOrder from '../../../hooks/useOrder';

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
const Customer = () => {
  const { customerDetails } = useOrder();
  return (
    <div>
      <Typography>Customer Order Details</Typography>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Sr.No</StyledTableCell>
              <StyledTableCell align="left">Customer Id</StyledTableCell>
              <StyledTableCell align="left">Customer Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Order Qty</StyledTableCell>
              <StyledTableCell align="left">Total Price</StyledTableCell>
              <StyledTableCell align="left">Mobile No</StyledTableCell>
              {/* // <StyledTableCell align="left">Delete Order</StyledTableCell> */}
            </TableRow>
          </TableHead>

          <TableBody>
            {customerDetails.map((details, index) => (
              <StyledTableRow>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="left">{details._id}</StyledTableCell>
                <StyledTableCell align="left">
                  {`${details.firstname} ${details.lastname} `}
                </StyledTableCell>
                <StyledTableCell align="left">{details.email}</StyledTableCell>
                <StyledTableCell align="left">
                  {details.address}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {details.quantity}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {details.totalprice}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {details.phoneno}
                </StyledTableCell>
                {/* <StyledTableCell align="left">
                  <Tooltip title="Delete">
                    <IconButton>
                      <DeleteIcon
                      // onClick={() => deleteProductHandler(index)}
                      />
                    </IconButton>
                  </Tooltip>
                </StyledTableCell> */}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
export default Customer;
