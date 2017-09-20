var mongoose = require('../db')

var tagSchema = mongoose.Schema({
    idLegacy: Number,
    tagSlug: String,
    tagName: String
})

exports.Tag = mongoose.model('Tag', tagSchema)