const express = require('express');
const router = express.Router();
const yourCartController = require('../app/controllers/YourCartController');

router.get('/', yourCartController.index);


module.exports = router;
