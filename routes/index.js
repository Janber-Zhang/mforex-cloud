var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (!req.session.user) {
    res.redirect('/login');
  }
  res.render('web/app/index', {
  	layout: '../public/web/layout.ejs',
  	title: 'index'
  });
});
router.get('/login', function(req, res, next) {
  res.render('web/login/login', { 
  	title: 'login' 
  });
});
router.get('/test', function(req, res, next) {
  res.render('web/test/test', {
    title: '11'
  });
});
module.exports = router;
