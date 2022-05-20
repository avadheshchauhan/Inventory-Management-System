import React, { useEffect, useState } from "react";
import axios from "axios";

const useFetchInventory = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [getproduct, setGetproduct] = useState(false);

  //getting the stock information
  useEffect(() => {
    setLoading(true);
    try {
      const fetchData = async () => {
        const res = await axios.get("http://localhost:5000/stockinfo");
        setData(res.data);
        setLoading(false);
      };
      fetchData();
    } catch (error) {
      console.error("Error: ", error.message);
      setError(error.message);
      setLoading(false);
    }
  }, [getproduct]);

  const addProduct = (product) => {
    //   setLoading(true)
    try {
      const fetchData = async (e) => {
        const res = await axios.post("http://localhost:5000/addstock", product);
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
