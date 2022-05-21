import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchInventory = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [getproduct, setGetproduct] = useState(false);

  const token = localStorage.getItem("token");

  //getting the stock information
  useEffect(() => {
    setLoading(true);
    try {
      console.log(token);
      const fetchData = async () => {
        const res = await axios.get("http://localhost:5000/stockinfo", {
          headers: { Authorization: `${token}` },
        });
        console.log(res);
        setData(res.data);
        console.log(data, "......");
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error("Error: ", error.message);
      setError(error.message);
      setLoading(false);
    }
  }, [getproduct]);

  //adding the inventory

  const addProduct = (product) => {
    console.log(product);
    //   setLoading(true)
    try {
      const fetchData = async () => {
        axios.post("http://localhost:5000/addstock", product, {
          headers: { authorization: `${token}` },
        });
        //   if(res.success){
        const newData = [...data];
        setGetproduct((prev) => !prev);
        newData.push(product);
        setData(newData);
        //   }
        //   setLoading(false)
      };
      fetchData();
    } catch (error) {
      console.error("Error: ", error.message);
      setError(error.message);
      // setLoading(false)
    }
  };

  //Delete the inventory
  const deleteProduct = (index) => {
    try {
      const fetchData = async (e) => {
        const id = data[index]._id;
        const res = await axios.delete(
          `http://localhost:5000/deletestock/${id}`
        );
        const filter = [...data];
        filter.splice(index, 1);
        setData(filter);
      };
      fetchData();
    } catch (error) {
      console.error("Error: ", error.message);
      setError(error.message);
    }
  };

  return { loading, data, error, addProduct, deleteProduct };
};

export default useFetchInventory;
