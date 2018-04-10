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
