const express = require('express');
const router = express.Router();
const signUpController = require('../app/controllers/SignUpController');
const { authSchema , validateBody } = require('../app/helper/validation_schema');

router.get('/', signUpController.index);
router.post('/', validateBody(authSchema) ,signUpController.store);


module.exports = router;
