const express = require('express');
const router = express.Router();
const orderController = require('./orderController');

router.post('/', orderController.createOrder);
router.get('/:id', orderController.getOrderById);

module.exports = router;
