const mongoose = require('mongoose');
const ressource = require('./ressources')

/* definition of schema for clients*/
var Schema = mongoose.Schema;
let  ObjectId = Schema.ObjectId;

const clientSchema = new mongoose.Schema({
  clientname :  {type : String, required : true},
  gaz : {type : Array, default : new Array(12).fill(0), required : true},
  eau : {type : Array, default : new Array(12).fill(0), required : true},
  electricite : {type : Array, default : new Array(12).fill(0), required : true}
});
// export the schema
const dbConnection = require('../controllers/db');
const Clients = dbConnection.model('Clients',clientSchema,'clients');

module.exports.schema = clientSchema;
// export the model
module.exports.model = Clients;
