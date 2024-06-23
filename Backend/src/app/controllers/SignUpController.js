const User = require('../models/Users');

class SignUpController{
    index(req,res,next){
        User.find({username: 'crisdev'})
        .then( user => res.json({users: user}))
        .catch(error => next(error))
    }
    register(req,res){
        res.json({ information: req.body });
    }
    store(req,res,next){
        if(res.data.error){
            return res.status(400).json(res.data.error.details)
        }
        else {
            const user = new User(res.data.value);
            user.save();  
        }
        // res.json({data : res.data})
    }
}

module.exports = new SignUpController;
