var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.session)
  if (req.session.user && req.session.user.app) {
    var userInfo = JSON.stringify(req.session.user.app)
    res.render('web/app/index', {
      layout: '../public/web/layout.ejs',
      userinfo: userInfo,
      title: 'mforex-cloud'
    });
  } else {
    res.render('web/login/app_login');
  }
});
/* backend */
router.get('/backend', function(req, res, next) {
  if (req.session.user && req.session.user.backend) {
    var userInfo = JSON.stringify(req.session.user.backend)
    res.render('web/backend/index', {
      layout: '../public/web/layout.ejs',
      userinfo: userInfo,
      title: 'mforex-cloud'
    });
  } else {
    res.render('web/login/backend_login');
  }
});
router.get('/test', function(req, res, next) {
  res.render('web/test/test', {
    title: '11'
  });
});
module.exports = router;
