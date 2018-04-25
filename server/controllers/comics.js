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

exports.updateComic = function(req, res, next) {
    console.log('updating comic', req.body, req.params);

    Comic.updateOne({_id: req.params.id}, {$set: {cards: req.body.cards}}, (doc,err)=>(console.log(doc, err)));
    return res.json({
       data: 'updated'
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
