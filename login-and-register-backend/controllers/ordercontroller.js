const StockInfo = require("../models/stockInfo");
const OrderDetails = require("../models/ordermodel");

//received order info

const receivedorder = async (req, res) => {
  try {
    const productExist = await StockInfo.findOne({
      productname: req.body.ordetails.productName,
    });
    if (productExist) {
      try {
        const orderreceived = await OrderDetails.create({
          productName: req.body.ordetails.productName,
          quantity: req.body.quantity,
          totalprice: req.body.price,
          phoneno: req.body.ordetails.phoneno,
          email: req.body.ordetails.email,
          firstname: req.body.ordetails.firstname,
          lastname: req.body.ordetails.lastname,
          date: req.body.ordetails.date,
          user:req.user.id,
          address: req.body.ordetails.address,
        });

        if (orderreceived) {
          res.status(201).send({
            productName: orderreceived.productName,
            quantity: orderreceived.quantity,
            totalprice: orderreceived.totalprice,
            phoneno: orderreceived.phoneno,
            email: orderreceived.email,
            firstname: orderreceived.firstname,
            lastname: orderreceived.lastname,
            date: orderreceived.date,
            address: orderreceived.address,
          });
          const newQuantity =
            parseInt(productExist.totalQuantity) -
            parseInt(orderreceived.quantity);
            await StockInfo.updateOne(
            { productname: req.body.ordetails.productName },
            { $set: { totalQuantity: newQuantity } }
          );
        } else {
          res.status(400);
          throw new Error("Error Occured!!!");
        }
      } catch (err) {
        res.send(err);
      }
    }
  } catch (err) {
    res.send(err);
  }
};

//all order received 
const customerinfo = async (req, res) => {
    try {
        const orderlist = await OrderDetails.find({user:req.user.id})
        res.satus(201).send(orderlist)
    }
    catch (err) {
        res.send({ msg: err })
    }
}
module.exports = { receivedorder,customerinfo };
