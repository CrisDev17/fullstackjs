const Product = require('../models/Products')

class ProductController{
  index(req,res,next){
    try{
        Product.find({})
        .then( data => {
            res.status(200).json({products : data})
        })
        .catch( err => {
            res.status(400).json({error : err})
        })
    }
    catch(err){
          console.log(err)
    } 
  }
}

module.exports = new ProductController