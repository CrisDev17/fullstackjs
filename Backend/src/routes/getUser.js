const express = require('express');
const router = express.Router();
const GetUsernameController = require('../app/controllers/GetUsernameController');

router.get('/', GetUsernameController.index);


module.exports = router;