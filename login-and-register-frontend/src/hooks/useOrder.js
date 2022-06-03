import { useEffect, useState } from 'react';
import axios from 'axios';

const useOrder = () => {
  const [customerDetails, setCustomerDetails] = useState([]);
  //const[status,setStatus]=useState(false)
  const token = localStorage.getItem('token');

  const order = (ordetails, price, quantity) => {
     try {
      const fetchData = async () => {
        const res = await axios.post(
          'http://localhost:5000/orderplaced',
          {
            ordetails: ordetails,
            price: price,
            quantity: quantity,
          },
          { headers: { authorization: `${token}` } }
        );
          if(res.status===201){
              //setStatus(true)
          }
         setCustomerDetails(res.data);
      };
      fetchData();
     // setStatus(false)
    } catch (error) {
      console.error('Error: ', error.message);
     //setError(error.message)
     //setLoading(false)
    } 
  };
  //
  useEffect(() => {
    //setLoading(true)
    try {
      const fetchData = async () => {
        const res = await axios.get('http://localhost:5000/orderlist', {
          headers: { authorization: `${token}` },
        });
        console.log(res, '........customer details');
        if (res.status === 201) {
          setCustomerDetails(res.data);
        }
        // setLoading(false)
      };
      fetchData();
    } catch (error) {
      console.error('Error: ', error.message);
      // setError(error.message)
      // setLoading(false)
    }
  }, [token]);
  console.log(customerDetails);
  return { order, customerDetails };
};

export default useOrder;
