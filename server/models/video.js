var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Tag = require('./base-content-attributes/tag').Tag
var TextLong = require('./base-content-attributes/text-long').TextLong

var videoSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  video: Media.schema,
  videoImage: Media.schema,
  aboutThisVideo: TextLong.schema,
  tags: [Tag.schema],
  videoWriter: [{type: mongoose.Schema.Types.ObjectId, ref: 'Writer'}],
})
 
exports.Video = mongoose.model('Video', videoSchema)
