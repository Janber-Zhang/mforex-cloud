var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var qs = require('querystring');
var config = require('../config/config.json');
var utils = require('../libs/utils.js')


/* 登出，强行置空session */
router.post('/logout', (req, res, next) => {
  req.session.user=null;
  res.send('{"code":"0","data":"true"}');
});

/* 登录，设置session */
router.post('/login', (req, res, next) => {
  var params = req.body;
  var referer = req.headers.referer || '';
  var isBackend = false;
  if(referer.indexOf('backend')>-1){
    isBackend = true;
  }
  var httpType = 'post';
  /* 获取请求源域名 */
  // params.domain = req.headers.host || '';
  params.domain = 'www.baidu.com'
  if (isBackend) {
    var serviceUrl = config.basicAPI + '/' + 'Login'
  } else {
    var serviceUrl = config.basicAPI + '/' + 'Login'
  }
  // utils.queryData(httpType, serviceUrl, params, function(result){
  //   res.send(result.data)
  // })

  req.session.user = req.session.user || {};
  if (!isBackend) {
    req.session.user.app = {
      name: '王二'
    }
  } else {
    req.session.user.backend = {
      name: '王二后台'
    }
  }
  res.send('{"code":"0","data":"true"}');
});



router.post('/queryData', (req, res, next) => {
  var params = req.body;
  if (!('httpType' in params)) {
    params.httpType = 'get';
  }

  /* 未传serviceURL */
  if (!('serviceUrl' in params)) {
    res.send('{"refresh":1}');
    return;
  }

  var serviceUrl = params.serviceUrl;
  var httpType = params.httpType;
  delete params["serviceUrl"];
  delete params["httpType"];

  /* 匹配接口地址 */
  var apiUrl = config.basicAPI;
  if (params.apiModule) {
    apiUrl = config[params.apiModule];
    delete params["apiModule"];
  }

  /* 判断登陆状态 */
  if (!(req.session && req.session.user)) {
    res.send({errno: '1111', errmsg: 'need login'});
    return
  }

  /* 获取请求源域名 */
  // params.domain = req.headers.host || '';
  params.domain = 'www.baidu.com'

  var serviceUrl = apiUrl + '/' + serviceUrl;         //拼装实际请求URL
  utils.queryData(httpType, serviceUrl, params, function(result){
    res.send(result.data)
  })
});

module.exports = router;
