const newsRouter = require('./news');
const searchOrderRouter = require('./searchOrder');
const yourWishListRouter = require('./wishList');
const loginRouter = require('./login');
const signUpRouter = require('./signUp');
const yourCartRouter = require('./yourCart');
const getUserRouter = require('./getUser');
const getProducts = require('./products')

function route(app){
      app.get('/', (req, res) => {
        res.send('<h1>Welcome my website</h1>')
      });
      app.use('/news', newsRouter);
      app.use('/search-order', searchOrderRouter);
      app.use('/your-wishlist', yourWishListRouter);
      app.use('/login', loginRouter);
      app.use('/sign-up', signUpRouter);
      app.use('/your-cart', yourCartRouter, (req,res) => {
        res.send('Chuc mung ban da dang nhap thanh cong ' + res.data.username)
      });
      app.use('/getUser', getUserRouter);
      app.use('/getProducts', getProducts)
      app.post('/test', (req, res) => {
         const data = req.body
         res.status(200).send(data)
         console.log(data)
      })
}
module.exports = route;