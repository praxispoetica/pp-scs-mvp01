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
  aboutThisVideo: { 
               summary: TextLong.schema,
               body: TextLong.schema
  }, 
  videoAdvertCheck: Boolean,
  isFrontPage: Boolean,
  tags: [Tag.schema],
  musicGenre: [Tag.schema],
  relatedAlbum: [{type: mongoose.Schema.Types.ObjectId, ref: 'Album'}],
  videoArtist: [{type: mongoose.Schema.Types.ObjectId, ref: 'Artist'}],
})
 
exports.Video = mongoose.model('Video', videoSchema)
