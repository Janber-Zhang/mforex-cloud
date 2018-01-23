var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request');
var qs = require('querystring');
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
  var routerList = ["Login"];
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

  /* 未传serviceURL */
  if (!('serviceUrl' in params)) {
    res.send('{"refresh":1}');
    return;
  }

  /* 退出登录，强行置空session */
  if (params.serviceUrl === 'Logout' ) {
    req.session.user=null;
    res.send('{"code":"0","data":"true"}');
  }

  /* 超时时间 */
  var timeout = 50000;                
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
  if (!checkSession(serviceUrl,req.session)) {
    res.send({errno: '1111', errmsg: 'need login'});
    return
  }

  /* 获取请求源域名 */
  // params.domain = req.headers.host || '';
  params.domain = 'www.baidu.com'


  var headers = {                              //header配置
    'custom-version': 50000,
    'custom-os': 'web'
  };
  if (req.session && req.session.user && req.session.user_id) {
    // headers['user-id'] = req.session.user.user_id;
  }

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
    console.log('GET-URL:' + serviceUrl);
    request({
      headers: headers,
      uri: encodeURI(serviceUrl),
      method: "GET",
      timeout: timeout
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      }
      else {
        res.send('{"result":"ServerError"}')
        console.log(error);
      }
    });
  }
  if (httpType == 'post') {
    var postData = '';
    postData = qs.stringify(params);
    headers['content-type'] = 'application/x-www-form-urlencoded';
    console.log(serviceUrl + '?' + postData)
    request.post({
      headers: headers,
      uri: encodeURI(serviceUrl),
      body: postData,
      timeout: timeout
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        if (canSetSession(serviceUrl)) {
          req.session.user = JSON.parse(body).data;
          console.log(JSON.parse(body).data);
        }
        res.send(body)
      }
      else {
        res.send('{"result":"ServerError"}')
        console.log(error);
      }
    });
  }
});

module.exports = router;
