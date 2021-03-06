const StockInfo = require("../models/stockInfo");
const user = require("../models/userModel");

//adding the stock

const addStock = async (req, res) => {
  try {
    const { productname, price, quantity } = req.body;
    const productExist = await StockInfo.findOne({ productname });

    if (productExist) {
      try {
        if (productExist.totalprice && productExist.totalQuantity) {
          const totPrice =
            parseInt(productExist.totalprice) +
            parseInt(parseInt(price) * parseInt(quantity));
          const totQuantity =
            parseInt(productExist.totalQuantity) + parseInt(quantity);
          await StockInfo.updateOne(
            { productname: productname },
            {
              $set: {
                productname: productname,
                quantity: quantity,
                price: price,
                user: req.user.id,
                totalprice: totPrice,
                totalQuantity: totQuantity,
              },
            }
          );
          // res.send(addexistProduct)
          res.send("added succesfully");
        }
      } catch (err) {
        console.log(err);
        res.send("");
      }
    } else {
      const addproduct = await StockInfo.create({
        productname: productname,
        quantity: quantity,
        price: price,
        user: req.user.id,
        totalQuantity: quantity,
        totalprice: parseInt(price) * parseInt(quantity),
      });
      if (addproduct) {
        res.status(201).send({
          productname: addproduct.productname,
          quantity: addproduct.quantity,
          price: addproduct.price,
          totalQuantity: addproduct.totalQuantity,
          totalprice: addproduct.totalprice,
          id: addproduct.id,
        });
      } else {
        res.status(400);
        throw new Error("Error Occured!!!");
      }
    }
  } catch (err) {
    res.status(400).send(err);
  }
};

//get the stocklist

const stocklist = async (req, res) => {
  try {
    const Stock = await StockInfo.find({ user: req.user.id });
    res.status(201).send(Stock);
  } catch (err) {
    res.send({ msg: err });
  }
};
//Delete the stock Prouduct
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  const findproduct= await StockInfo.findById({_id:id})
  try {
   
    if(req.user.id === findproduct.user.toString()){
      const stock = await StockInfo.deleteOne({ _id: id });
    res.status(201).send("deletee successfully");
    }
    
  } catch (err) {
    res.status(401).send(err);
  }
};
module.exports = { addStock, stocklist, deleteProduct };
