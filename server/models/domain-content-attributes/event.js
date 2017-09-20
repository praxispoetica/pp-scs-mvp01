var mongoose = require('../db')
var Media = require('..base-content-attribute/media').Media
var Location = require('..base-content-attribute/location').Location
var Person = require('..base-content-attribute/person').Person
var Link = require('..base-content-attribute/link').Link

var eventSchema = mongoose.Schema({
  eventName: String,
  eventImage: Media.schema,
  eventDateStart: Date,
  eventDateEnd: Date,
  location: Location.schema,
  eventContact: Person.schema,
  eventWebsite: Link.schema

})

exports.Event = mongoose.model('Event', eventSchema)