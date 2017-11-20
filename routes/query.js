var express = require('express');
var router = express.Router();
var path = require('path');
var axios = require('axios');
var config = require('../config/config.json');
var utils = require('../libs/utils.js')
function checkSession(serviceUrl,session){
  if (config.apiWhitelist.indexOf(serviceUrl) == -1 && !session.user) {
    return false;
  } else {
    return true;
  }
};

function canSetSession(serviceUrl){
  var routerList = ["users/user/add", "users/user/login"];
  var result = false;
  for (var i = 0, len = routerList.length; i < len; i++) {
    var item = routerList[i];
    if (serviceUrl.indexOf(item) > -1){
      result = true;
    }
  }
  return result;
}

router.post('/queryData', (req, res, next) => {
  var params = req.body;
  if (!('httpType' in params)) {
    params.httpType = 'get';
  }
  if (!('serviceUrl' in params)) {     //未传serviceURL
    res.send('{"refresh":1}');
    return;
  }
  var serviceUrl = params.serviceUrl;
  var httpType = params.httpType;
  delete params["serviceUrl"];
  delete params["httpType"];
  var apiUrl = config.basicAPI;        //匹配接口地址
  if (params.apiModule) {
    apiUrl = config[params.apiModule];
    delete params["apiModule"];
  }
  if (!checkSession(serviceUrl,req.session)) {        //判断登录状态
    res.send({errno: '1111', errmsg: 'need login'});
    return
  }
  params['domain'] = 'www.baidu.com'; //暂时将domain放在params里面
  var headers = {
    'form-url':  utils.getDomain(req.headers.referer)
  };
  if (req.session && req.session.user && req.session.user_id) {
    headers['user-id'] = req.session.user.user_id;
  }
  var queryConfig = {
    headers: headers
  };

  var serviceUrl = apiUrl + '/' + serviceUrl;         //拼装实际请求URL
  if (httpType == 'get') {
    if (Object.keys(params).length){
      serviceUrl += '?';
      var i = 0;
      for (var key in params) {
        if (i) {
          serviceUrl += '&' + key + '=' + params[key];
        } else {
          serviceUrl += key + '=' + params[key];
        }
        i++
      }
    }
    console.log('----------------------------')
    console.log('GET-URL:' + serviceUrl);
    axios.get(serviceUrl, queryConfig)
    .then((res_) => {
      res.send(res_.data);
    })
    .catch(function(err){
      console.log(err);
    });
  }
  if (httpType == 'post') {
      queryConfig.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      axios.post(serviceUrl, params, queryConfig).then((res_) => {
        if(canSetSession(serviceUrl)) {               //登录或注册成功后写入session
          req.session.user = res_.data.data.user;
        }
        res.send(res_.data);
      })
      .catch(function(err){
        console.log(err);
      });
  }
});

module.exports = router;
