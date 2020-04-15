const mongoose = require('mongoose');

/* definition of schema for ressources*/
const ressourcesSchema = new mongoose.Schema({
  ressource : {type : String, required : true },
  price : {type : Number, required : true}
});

// export the schema
const dbConnection = require('../controllers/db');
const Ressources = dbConnection.model('Ressource',ressourcesSchema,'ressources');

// Ressources.createIndex({ressource: 1}, {unique:true});
module.exports.schema = ressourcesSchema;
// export the model
module.exports.model = Ressources;


// {
//   "name": "projet_mongoReact",
//   "version": "0.0.1",
//   "private": true,
//   "scripts": {
//     "start": "node ./bin/www"
//   },
//   "dependencies": {
//     "cookie-parser": "~1.4.4",
//     "debug": "~2.6.9",
//     "ejs": "^3.0.1",
//     "express": "~4.16.1",
//     "http-errors": "~1.6.3",
//     "mongoose": "^5.9.3",
//     "morgan": "~1.9.1",
//     "pug": "2.0.0-beta11"
//   },
//   "main": "app.js",
//   "author": "\"diallo_diallo\"",
//   "license": "ISC",
//   "description": ""
// }
