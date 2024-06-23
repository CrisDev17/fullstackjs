const jwt = require('jsonwebtoken');
const User = require('../models/Users');

class GetUsernameController {
    index(req,res){
        try{
            // var token = req.cookies.token;
            // var ketqua = jwt.verify(token, 'secret');
            User.find({username : 'trandien17'})
            .then( data => {
                res.json({data})
            })
            .catch( err => {
                return err;
            })
        } catch(error){
            console.log('Error')
        }
    }
}


module.exports = new GetUsernameController