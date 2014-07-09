'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var EventSchema = new Schema({
  title: String,
  location: String,
  category: String,
  position: {
    lat: Number,
    lng: Number
  },
  description: String,
  date: String,
  startTime: String,
  endTime: String,
  target: Number,
  imgId: String,
  pledged: { type: Number, default: 0 },
  creator: { type: Schema.Types.ObjectId, ref: 'User' }, 
  status: { type: String, default: 'Approved' }
});

module.exports = mongoose.model('Event', EventSchema);