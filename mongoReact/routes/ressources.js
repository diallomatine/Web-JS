var express = require('express');
var router = express.Router();
// import controller for ressources
const controller = require('../controllers/ressourcesController');

// use different method to provide REST operations
router.get('/', controller.getAllRessources);
router.get( '/:ressourceId', controller.getRessource);
router.put( '/:ressourceId', controller.updateRessource);

module.exports = router;
