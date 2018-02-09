var request = require('request');
var qs = require('querystring');

var utils = {};
utils.getDomain = function (url) {
    var regx = /^http(s)?:\/\/(.*?)\//;
    return regx.exec(url)[2]
};

utils.queryData = function (httpType, serviceUrl, params, cb) {
	/* 超时时间 */
  	var timeout = 50000;
  	/* header配置 */
  	var headers = {                              
	    'custom-version': 50000,
	    'custom-os': 'web'
	};
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
        cb({result: true, data: body})
      }
      else {
        cb({resut:false, data:'{"result":"ServerError"}'})
        console.log(error);
      }
    });
  }
  if (httpType == 'post') {
    var postData = '';
    postData = qs.stringify(params);
    headers['content-type'] = 'application/x-www-form-urlencoded';
    console.log('POST-URL:' + serviceUrl + '?' + postData)
    request.post({
      headers: headers,
      uri: encodeURI(serviceUrl),
      body: postData,
      timeout: timeout
    }, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        cb({result: true, data: body})
      }
      else {
        cb({resut:false, data:'{"result":"ServerError"}'})
        console.log(error);
      }
    });
  }
}

module.exports = utils;