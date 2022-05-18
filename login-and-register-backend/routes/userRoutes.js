const express = require('express');
const { registerUser, authUser } = require('../controllers/user.controller');
const { addStock, stocklist, deleteProduct } = require('../controllers/stockInfocontroller.js')
const router = express.Router();

router.post('/register', registerUser)
router.post('/login', authUser)
router.post('/addstock', addStock)
router.get('/stockinfo', stocklist)
router.delete('/deletestock/:id', deleteProduct)

module.exports = router;
