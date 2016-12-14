var express = require('express');
var router = express.Router();

var ctrlZoos = require('../controllers/zoos.controller.js');
var ctrlPublications = require('../controllers/publications.controller.js');

// Zoos routes

router
  .route('/')
  .get(ctrlZoos.zooGetAll);

// Publications routes

router
  .route('/ressources')
  .get(ctrlPublications.publicationGetAll);

module.exports = router;
