var mongoose = require('../db')
var Tag = require('./tag').Tag

var metaDataSchema = mongoose.Schema({
    itemSlug: String,
    itemSlugLegacy: [String],
    itemName: String,
    language: String,
    published: Boolean,
    publishedDate: Date,
    disabled:   Boolean,
    createdDate: Date,
    modifiedDate: Date,
    revisionId: Number,
    workflowState: Tag.schema
})

exports.MetaData = mongoose.model('MetaData', metaDataSchema)
