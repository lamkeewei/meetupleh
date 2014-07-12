'use strict';

var _ = require('lodash');
var Pledge = require('./pledge.model');

// Get list of pledges
exports.index = function(req, res) {
  Pledge.find(function (err, pledges) {
    if(err) { return handleError(res, err); }
    return res.json(200, pledges);
  });
};

// Get a single pledge
exports.show = function(req, res) {
  Pledge.findById(req.params.id, function (err, pledge) {
    if(err) { return handleError(res, err); }
    if(!pledge) { return res.send(404); }
    return res.json(pledge);
  });
};

exports.getUserPledge = function(req, res){
  var userId = req.params.userId;  
  Pledge
    .find({userId: userId})
    .populate('userId eventId')
    .exec(function(err, pledges){
      if(err) { return handleError(res, err); }
      return res.json(200, pledges);
    });
};

// Creates a new pledge in the DB.
exports.create = function(req, res) {
  Pledge.create(req.body, function(err, pledge) {
    if(err) { return handleError(res, err); }
    return res.json(201, pledge);
  });
};

// Updates an existing pledge in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Pledge.findById(req.params.id, function (err, pledge) {
    if (err) { return handleError(err); }
    if(!pledge) { return res.send(404); }
    var updated = _.merge(pledge, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, pledge);
    });
  });
};

// Deletes a pledge from the DB.
exports.destroy = function(req, res) {
  Pledge.findById(req.params.id, function (err, pledge) {
    if(err) { return handleError(res, err); }
    if(!pledge) { return res.send(404); }
    pledge.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

exports.destroyEvent = function(req, res) {
  var eventId = req.params.eventId;
  Pledge.remove({eventId: eventId}, function (err) {
    if(err) { return handleError(res, err); }
    return res.send(204);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}