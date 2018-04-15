const Comic  = require('../models/comics');

exports.addComic = function(req, res, next) {
    console.log('sweet potato', req.body);
    let comic = new Comic(req.body);
    comic['userId'] = req.user.id;
    comic.save();
    return res.json({
       data: 'rosebud'
    });
};

exports.getComics = function(req, res, next)
{
  Comic.find({}).exec().then(comics =>{
   console.log(comics);
   return res.json({
      data: comics
   });
    }).catch(err=> {throw err})
}

exports.getComic = function(req, res, next)
{
  Comic.findById(req.params.id).exec().then(comic =>{
   console.log(comic);
   return res.json({
      data: comic
   });
    }).catch(err=> {throw err})
}
