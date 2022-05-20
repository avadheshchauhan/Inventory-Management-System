import * as React from "react";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import useFetchInventory from "../../../hooks/useFetchInventory";
import { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import useOrder from "../../../hooks/useOrder";
import Barchart from "./barchart";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const DashBoard = () => {
  const { data } = useFetchInventory();
  const { customerDetails } = useOrder();
  const [products, setProducts] = useState([]);
  const [quantitys, setQuantitys] = useState([]);
  console.log(data);
  useEffect(() => {
    const product = [];
    const quantity = [];
    const getStockdata = async () => {
      for (let i = 0; i < data.length; i++) {
        product.push(data[i].productname);
        quantity.push(parseInt(data[i].totalQuantity));
      }
      setProducts(product);
      setQuantitys(quantity);
      console.log(product, quantity);
    };
    getStockdata();
  }, [data]);
  return (
    <div>
      <Typography variant="h2" component="h2">
        DashBoard
      </Typography>

      <Grid container spacing={1}>
        <Grid>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                maxWidth: 300,
                ml: 2,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>No Of Product</Box>
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                {data.length}
              </Box>
            </Box>
          </ThemeProvider>
        </Grid>
        <Grid>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 1,
                borderRadius: 2,
                p: 2,
                Width: 500,
                ml: 2,
              }}
            >
              <Box sx={{ color: "text.secondary" }}>Total order</Box>
              <Box
                sx={{
                  color: "text.primary",
                  fontSize: 34,
                  fontWeight: "medium",
                }}
              >
                {customerDetails.length}
              </Box>
            </Box>
          </ThemeProvider>
        </Grid>
      </Grid>

      <div>
        <Chart
          type="pie"
          width={1349}
          height={350}
          series={quantitys}
          options={{
            title: { text: "Stock PieChart" },
            noData: { text: "Empty Data" },
            // colors:["#f90000","#f0f"],
            labels: products,
          }}
        ></Chart>
      </div>
      <Barchart/>
    </div>
  );
};
export default DashBoard;
