/*
 * @name 全局插件
 * @auther Janber
 * @created 17-12-02
 */

var util = {
   /**
	* @func: ajaxQuery
	* @desc: 通用请求
	* @param url     {String}   请求路径
	* @param param   {Object}   请求参数(serviceUrl, httpType, apiModule, ...otherParams) 
	* @param cb      {Function} 请求成功回调函数
	* @returns promise
	* @author janber
	* @version 1.0.0
	*/
	ajaxQuery: function (url,param,cb) {
		$('#loading').show();
		url = url || '/query/queryData';
		console.log(url)
		var promise_ =  axios.post(url, param).then(function(res){
			$('#loading').hide();
			if (cb) {
				cb(res.data)
			}
		});
		return promise_
	},

	/**
	* @func: logout
	* @desc: 全局注销登录
	* @returns void
	* @author janber
	* @version 1.0.0
	*/
	logout: function() {
		var queryUserInfo = util.ajaxQuery('/query/logout',{}, function(){
			window.location.reload();
		});
	},

	/**
	* @func: uploadFile
	* @desc: 上传文件
	* @param cb 上传成功回调函数
	* @returns void
	* @author janber
	* @version 1.0.0
	*/
	uploadFile: function(cb) {
	    $('#uploadFileInput').click();
	    console.log($('#uploadFileInput'))
		$('#uploadFileInput').unbind().change(function (e) {
		    if(e.target.files.length == 0) {
                return
            }
            $('#loading').show();
            var file = e.target.files[0];
            var fd = new FormData();
            fd.append('file', file);
            // url = 'http://autot.mobimedical.cn/ProjectAdmin/File/upFile';
			// $.ajax({
			// 	type: 'post',
			// 	url: url,
			// 	data: fd,
			// 	processData : false,
			// 	contentType : false,
			// 	success:function(res){
			// 		if (cb && res.code === 10000) {
			// 			cb(res)
			// 		} else {
			// 			alert('操作失败');
			// 		}
			// 		$('#loading').hide();
			// 	},
			// 	error:function(err){
			// 		console.log(err)
			// 		$('#loading').hide();
			// 	}
			// })
	    });
	},

	/**
	* @func: getRandom
	* @desc: 获取随机数
	* @param max     {Number}   最大值
	* @param min     {Number}   最小值
	* @param count   {Number}   获取数量
	* @param diff    {Bollean}  是否互异
	* @param diff    {Bollean}  是否互异
	* @returns Array
	* @author janber
	* @version 1.0.0
	*/
	getRandom: function(min, max, count, diff) {
		count = count || 1;
		var number_arr = [];
		if (min >= max || (diff && count > (max-min+1))) {
			return 'Parameter Error'
		}
		var Range = max - min;
		for (var i = 1;;i++) {
			var Rand = Math.random();
			var num = min + Math.round(Rand * Range);
			if (!diff || number_arr.indexOf(num)==-1) {
				number_arr.push(num);
			}
			if (number_arr.length == count) {
				break
			}
		}
		return number_arr
	},

	/**
	* @func: arrayFlat
	* @desc: 数组扁平化
	* @param arr     {Array}   需要处理的多维数组
	* @returns {Array} 一维数组
	* @author janber
	* @version 1.0.0
	*/
	arrayFlat: function(arr) {          //数组扁平化处理
		var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            // 如果是数组，调用(递归)steamroller 将其扁平化
            // 然后再 push 到 newArr 中
            newArr.push.apply(newArr, this.arrayFlat(arr[i]));
        } else {
            // 不是数组直接 push 到 newArr 中
            newArr.push(arr[i]);
        }
    }
    return newArr;
	},

	/**
	* @func: isArr
	* @desc: 判断是否为数组
	* @param arr     {Array}   判断对象
	* @returns {Bollean} 返回值
	* @author janber
	* @version 1.0.0
	*/
	isArr: function(arr) {
		return Object.prototype.toString.call(arr) == '[object Array]'
    },
}