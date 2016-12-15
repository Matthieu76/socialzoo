var express = require('express');
var router = express.Router();

var ctrlZoos = require('../controllers/zoos.controller.js');
var ctrlArticles = require('../controllers/articles.controller.js');

// Zoos routes

router
  .route('/zoo')
  .get(ctrlZoos.zooGetAll);

router
	.route('/articles')
	.get(ctrlArticles.articleGetAll);

router
  .route('/newzoo')
  .post(ctrlZoos.zooAddOne);

router
  .route('/zoos/:zooId')
  .get(ctrlZoos.zooGetOne)
  .delete(ctrlZoos.zooDelete);

router
  .route('/newarticle')
  .post(ctrlArticles.articleAddOne);

module.exports = router;
