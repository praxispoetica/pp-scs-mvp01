var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media
var Link = require('./base-content-attributes/link').Link
var TextLong = require('./base-content-attributes/text-long').TextLong
var Person = require('./domain-content-attributes/person').Person

var authorSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  authorPersonalInfo: Person.schema,
  authorBio: { 
               summary: TextLong.schema,
               body: TextLong.schema
  }, 
  authorBanner: Media.schema,
  authorLogo: Media.schema,
  authorProfileMedia: Media.schema,
  authorGallery: [Media.schema],
  authorFacebook: Link.schema,
  authorTwitter: Link.schema,
  authorWebsite: Link.schema,
  authorWebsiteMedia: Media.schema,
  authorYouTube: Link.schema,
  authorPublications: [{type: mongoose.Schema.Types.ObjectId, ref: 'Link'}],
})
 
exports.Author = mongoose.model('Author', authorSchema)
