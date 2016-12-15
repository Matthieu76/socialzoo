var express = require('express');
var router = express.Router();

var ctrlZoos = require('../controllers/zoos.controller.js');
var ctrlPublications = require('../controllers/publications.controller.js');

// Zoos routes

router
  .route('/')
  .get(ctrlZoos.zooGetAll);

router
  .route('/newzoo')
  .post(ctrlZoos.zooAddOne);

router
  .route('/zoos/:zooId')
  .get(ctrlZoos.zooGetOne)
  .delete(ctrlZoos.zooDelete);

// Publications routes

router
  .route('/')
  .get(ctrlPublications.publicationsGetAll);

router
  .route('/newpublication')
  .post(ctrlPublications.publicationAddOne);

module.exports = router;


