var utils = {};
utils.getDomain = function (url) {
    var regx = /^http(s)?:\/\/(.*?)\//;
    return regx.exec(url)[2]
};


module.exports = utils;