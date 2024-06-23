// viet theo class
class NewsController {

    //[Get] /news
    index(req,res){
        res.send('news');
    }
    show(req,res){
        res.send('slug');
    }
}
module.exports = new NewsController;