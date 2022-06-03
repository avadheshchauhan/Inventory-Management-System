const StockInfo = require("../models/stockInfo");
const OrderDetails = require("../models/ordermodel");
const nodemailer = require('nodemailer');
require('dotenv').config();

//received order info

const receivedorder = async (req, res) => {
  try {
    const productExist = await StockInfo.findOne({
      productname: req.body.ordetails.productName,
    });
    console.log(req.body)
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
          user: req.user.id,
          address: req.body.ordetails.address,
        });

        if (orderreceived) {
          let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
              user: process.env.EMAIL_USERNAME,
              pass: process.env.EMAIL_PASSWORD
            }
          });
          const mailOptions = {
            from: 'piyusheng1996g@gmail.com', // Sender address
            to: orderreceived.email, // List of recipients
            subject: 'Your Order', // Subject line
            text: 'Your Order is Succesfully placed', // Plain text body
          };

          transport.sendMail(mailOptions, function (err, info) {
            if (err) {
              console.log(err)
            } else {
              console.log(info,"email info.........................................");
            }
          });
          console.log(orderreceived.email)

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
          const newPrice = parseInt(productExist.totalprice) -
            parseInt(orderreceived.totalprice);
          await StockInfo.updateOne(
            { productname: req.body.ordetails.productName },
            { $set: { totalQuantity: newQuantity, totalprice: newPrice } }
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
    const orderlist = await OrderDetails.find({ user: req.user.id })
   
    res.status(201).send(orderlist)
  }
  catch (err) {
    res.send({ msg: err })
  }
}
module.exports = { receivedorder, customerinfo };
