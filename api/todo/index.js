var express = require('express');
var router = express.Router();
var controller = require('./todo.controller');

// GET, POST, PUT, DELETE, OPTIONS
router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/status/:id', controller.updateStatus);
router.put('/:id', controller.update);
router.delete('/:id', controller.destroy);

module.exports = router;