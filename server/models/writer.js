var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Link = require('./base-content-attributes/link').Link
var TextLong = require('./base-content-attributes/text-long').TextLong
var Person = require('./domain-content-attributes/person').Person

var writerSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  writerPersonalInfo: Person.schema,
  writerBio: TextLong.schema, 
  writerBanner: Media.schema,
  writerLogo: Media.schema,
  writerProfileMedia: Media.schema,
  writerGallery: [Media.schema],
  writerFacebook: Link.schema,
  writerTwitter: Link.schema,
  writerWebsite: Link.schema,
  writerWebsiteMedia: Media.schema,
  writerYouTube: Link.schema,
})
 
exports.Writer = mongoose.model('Writer', writerSchema)
