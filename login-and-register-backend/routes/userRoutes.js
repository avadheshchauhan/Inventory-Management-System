const express = require("express");
const { registerUser, authUser,updateUser } = require("../controllers/user.controller");
const {
  addStock,
  stocklist,
  deleteProduct,
} = require("../controllers/stockInfocontroller.js");
const {
  receivedorder,
  customerinfo,
} = require("../controllers/ordercontroller");
const router = express.Router();
const protect = require("../middlewares/protectMiddleware");
router.post("/register", registerUser);
router.post("/login", authUser);
router.post("/addstock", protect, addStock);
router.get("/stockinfo", protect, stocklist);
router.delete("/deletestock/:id", protect,deleteProduct);
router.post("/orderplaced",protect, receivedorder);
router.get("/orderlist", protect,customerinfo);
router.get("/updateuser", protect,updateUser);


module.exports = router;
