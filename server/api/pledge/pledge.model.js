'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PledgeSchema = new Schema({
  eventId: { type: Schema.Types.ObjectId, ref: 'Event' },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Pledge', PledgeSchema);