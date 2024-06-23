const express = require('express');
const router = express.Router();
const searchOrderController = require('../app/controllers/SearchOrderController');

router.use('/', searchOrderController.index);


module.exports = router;
