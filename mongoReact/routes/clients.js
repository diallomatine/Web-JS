var express = require('express');
var router = express.Router();

const controller = require('../controllers/clientController');


// use different method to provide REST operations
router.get('/', controller.getAllClients);
router.get('/:clientId', controller.getClient)
router.post('/', controller.createClient)
router.delete('/:clientId', controller.deleteClient);

module.exports = router;
