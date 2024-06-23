const User = require('../models/Users')
const jwt = require('jsonwebtoken');

class LoginController{
    index(req,res){
        res.send("Day la trang dang nhap")
    }
    store(req,res,next){
        var username = req.body.username;
        var password = req.body.password;
        User.findOne({
            username: username,
            password: password
        })
        .then(data => {
            if(data){
                var token = jwt.sign({ _id: data._id},'secret');
                return res.json({
                    message: 'thanh cong',
                    token : token
                })
            } else {
                return res.json('that bai')
            }
        })
        .catch( error => {
            res.status(500).json('loi server')
        })
 
    }
}
module.exports = new LoginController;