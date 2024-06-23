const express = require('express');
const router = express.Router();
const wishListController = require('../app/controllers/WishListController');

router.use('/', wishListController.index);


module.exports = router;
