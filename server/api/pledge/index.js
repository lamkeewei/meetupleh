'use strict';

var express = require('express');
var controller = require('./pledge.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);
router.delete('/event/:eventId', controller.destroyEvent);
router.get('/user/:userId', controller.getUserPledge);

module.exports = router;