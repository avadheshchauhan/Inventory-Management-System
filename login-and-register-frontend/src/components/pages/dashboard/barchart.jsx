import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import useOrder from "../../../hooks/useOrder";

const Barchart = () => {
  const [productName, setproductName] = useState([]);
  const [quantity, setQuantity] = useState([]);
  {
  }
  const { customerDetails } = useOrder();
  useEffect(() => {
    const productname = [];
    const productquantity = [];

    const getOrderDetails = async () => {
      for (let i = 0; i < customerDetails.length; i++) {
        productname.push(customerDetails[i].productName);
        productquantity.push(parseInt(customerDetails[i].quantity));
      }
      setproductName(productname);
      setQuantity(productquantity);
    };
    getOrderDetails();
  }, [customerDetails]);

  return (
    <div>
      <Chart
        type="bar"
        width={600}
        height={300}
        series={[
          {
            name: "Customer Order ",
            data: quantity,
          },
        ]}
        options={{
          title: {
            text: "BarChart",
            style: { fontSize: 20 },
          },

          subtitle: {
            text: "This is BarChart Graph",
            style: { fontSize: 18 },
          },

          colors: ["#f90000"],
          theme: { mode: "light" },

          xaxis: {
            //  tickPlacement: "on",
            categories: productName,
            title: {
              text: "Product Name",
              style: { color: "#f90000", fontSize: 20 },
            },
          },

          yaxis: {
            // labels: {
            //   formatter: (val) => {
            //     return `${val}`;
            //   },
            //   style: { fontSize: "15", colors: ["#f90000"] },
            // },
            title: {
              text: "Order Quantity",
              style: { color: "#f90000", fontSize: 15 },
            },
          },

          legend: {
            show: true,
            position: "right",
          },

          dataLabels: {
            formatter: (val) => {
              return `${val}`;
            },
            style: {
              colors: ["#f4f4f4"],
              fontSize: 15,
            },
          },
        }}
      ></Chart>
    </div>
  );
};
export default Barchart;
