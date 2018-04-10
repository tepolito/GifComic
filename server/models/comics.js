const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComicSchema = new Schema({
    date: String,
    userId: String,
    cards: Array
});

module.exports = mongoose.model('Comic', ComicSchema);
