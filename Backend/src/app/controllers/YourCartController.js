const jwt = require('jsonwebtoken');
const User = require('../models/Users');

class YourCartController {
    index(req,res,next){
       try{
        var token = req.cookies.token;
        var ketqua = jwt.verify(token, 'secret');
        User.findById(ketqua._id)
        .then( data => {
            if(data){
                res.data = data;
                next()
            }
        })
        .catch( err => {
            return err;
        })
       } catch(err){
           res.json('ban chua dang nhap')
       }
    }
}

module.exports = new YourCartController