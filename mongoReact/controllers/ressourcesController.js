const Ressources = require('../models/ressources').model;

// .then(allRessources=> res.status(200).json(allRessources));
const getAllRessources = (req, res) =>{
  Ressources.find()
            .then(allRessources=> res.status(200).json(allRessources));
}
module.exports.getAllRessources = getAllRessources;

//controller for GET /: ressourceId
const getRessource =
  (req, res) =>
     Ressources.findById( req.params.ressourceId)
            .then(ressource => res.status(200).json(ressource));

module.exports.getRessource = getRessource;

// controller for PUT /: ressourceId
const updateRessource =
  (req, res) => {
    let updatedRessource = {...req.body};
    Ressources.findByIdAndUpdate(req.params.ressourceId,updatedRessource, { new : true } )
         .then(ressource => res.status(200).json(ressource))
         .catch(error => res.status(400).json(error) );
  }

module.exports.updateRessource = updateRessource;
