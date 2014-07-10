'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' },
  text: String
});

module.exports = mongoose.model('Comment', CommentSchema);