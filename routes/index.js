var express = require('express');
var router = express.Router();
var controllers = require('../app/controllers/index');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/api/create', controllers.creatShortUrl);
router.get('/api/all', controllers.fetchShortUrl);
router.get('/*', controllers.getLongURL);

module.exports = router;
