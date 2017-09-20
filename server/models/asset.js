var mongoose = require('./db')
var MetaData = require('./base-content-attributes/meta-data').MetaData
var Media = require('./base-content-attributes/media').Media

var assetSchema = mongoose.Schema({
  idLegacy: Number,
  metaData: MetaData.schema,
  assetMedia: Media.schema
})
 
exports.Asset = mongoose.model('Asset', assetSchema)
