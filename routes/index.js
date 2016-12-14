var express = require('express');
var router = express.Router();

var ctrlZoos = require('../controllers/zoos.controller.js');
var ctrlPublications = require('../controllers/publications.controller.js');

// Zoos routes

router
  .route('/formations')
  .get(ctrlFormations.formationGetAll)
  .post(ctrlFormations.formationAddOne);

router
  .route('/formations/:formId')
  .get(ctrlFormations.formationGetOne)
  .put(ctrlUsers.authentificate, ctrlFormations.updateFormation)
  .delete(ctrlUsers.authentificate, ctrlFormations.formationDelete);

router
  .route('/formations/:formId/chapters')
  .post(ctrlFormations.chapterAddOne)
  .get(ctrlFormations.chaptersGetAll);

router
  .route('/formations/:formId/chapters/:chapterId')
  .put(ctrlFormations.chapterUpdateOne)
  .get(ctrlFormations.chapterGetOne)
  .delete(ctrlFormations.chapterDeleteOne);

// Publications routes

router
  .route('/ressources')
  .get(ctrlRessource.ressourceGetAll)
  .post(ctrlUsers.authentificate, ctrlRessource.ressourceAddOne);

router
  .route('/ressources/:ressourceId')
  .get(ctrlRessource.ressourceGetOne)
  .put(ctrlUsers.authentificate, ctrlRessource.ressourceUpdateOne)
  .delete(ctrlUsers.authentificate, ctrlRessource.ressourceDeleteOne);


module.exports = router;
