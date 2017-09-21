var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Tag = require('./base-content-attributes/tag').Tag
var TextLong = require('./base-content-attributes/text-long').TextLong

var textSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  textAuthor: [{type: mongoose.Schema.Types.ObjectId, ref: 'Writer'}],
  textBody: TextLong.schema,
  textFootnote: TextLong.schema,
  tags: [Tag.schema],
})
 
exports.Text = mongoose.model('Text', textSchema)
