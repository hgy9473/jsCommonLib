/*
*
common js function library
* 
hgy - v0.0.0 (2017-08-29)
*
https://github.com/hgy9473/jsCommonLib
*/

//全局变量
var Common = {};

/**
 * 获取特定格式的当前时间
 *
 * @param Date date 时间
 * @param String formatStr 指定返回的时间格式的字符串 例如：‘yyyy-mm-dd’ 
 * @return String 日期字符串 例如：'2017-08-29'
 */
Common.getFormattedDate = function(date,formatStr){
	var res = [];
	//使用正则表达式提取出分割符
	var pattern = /[^\d\w]/g;

	var strArr = formatStr.split(pattern);
	
	if(!!strArr[0]){
		res.push( strArr[0].length == 4?date.getFullYear():(date.getFullYear()+"").substr(2));
	}
	if(!!strArr[1]){
		res.push( strArr[1].length == 2?preFixZero((date.getMonth()+1)+"",2):(date.getMonth()+1)+"");
	}
	if(!!strArr[2]){
		res.push( strArr[2].length == 2?preFixZero((date.getDate())+"",2):(date.getDate())+"");
	}
	
	var seprator = formatStr.match(pattern);//获取分割符
	if(seprator == null){
		return res.join("");	
	}else{
		return res.join(seprator[0]);
	}
};

/*
*补零操作
*@param String str 待处理字符串 
*@param int length 目标长度
*@return String 长度等于length的字符串
*/
//参考自https://www.oschina.net/code/snippet_87799_562
//利用了[undefined,undefined].join("0") == "0"
function preFixZero(str,length){
	console.log(str,length,length - str.length + 1);
	return new Array(length - str.length + 1).join("0")+str;
}


//获取n个月前的日期
Common.getMonth = function(date,num){
	return new Date(date.setMonth(date.getMonth()+num));
};

Common.getFormattedTime = function(date,formatStr){
	var res = [];
	//使用正则表达式提取出分割符
	var pattern = /[^\d\w]/g;

	var strArr = formatStr.split(pattern);
	
	if(!!strArr[0]){
		res.push( strArr[0].length == 2?preFixZero(date.getHours()+"",2):(date.getHours()+""));
	}
	if(!!strArr[1]){
		res.push( strArr[1].length == 2?preFixZero(date.getMinutes()+"",2):date.getMinutes()+"");
	}
	if(!!strArr[2]){
		res.push( strArr[2].length == 2?preFixZero(date.getSeconds()+"",2):date.getSeconds()+"");
	}
	
	var seprator = formatStr.match(pattern);//获取分割符
	if(seprator == null){
		return res.join("");	
	}else{
		return res.join(seprator[0]);
	}
};

/*
 * 获取n分钟之前的时间
 * 参数：n
 * 返回时间字符串，格式yy-mm-dd hh:MM
 */
Common.getNowMinutesBefore = function(n){
	var date = new date();
	date.setMinutes(date.getMinutes()+n);
	
	var month = date.getMonth() + 1;
	month=month<10?'0'+month:month;
	var year = date.getFullYear();
	var d = date.getdateO();
	d = d<10?'0'+d:d;
	var h = date.getHours();
	h = h<10?"0"+h:h;
	var m = date.getMinutes();
	m = m<10?"0"+m:m;
	
	return year+"-"+month+"-"+d+" "+h+":"+m;
};


/*
 * 获取指定时间的n分钟之前的时间
 * 参数：
 * 	1 时间字符串(格式yy-mm-dd hh:MM:ss)
 * 	2 n
 * 返回时间字符串，格式yy-mm-dd hh:MM
 */
Common.getdateOMinutesBefore = function(dt_str,n){
	
	var date = new date(dt_str.replace(/-/g,'/'));
	date.setMinutes(date.getMinutes()+n);
	
	var month = date.getMonth() + 1;
	month=month<10?'0'+month:month;
	var year = date.getFullYear();
	var d = date.getdateO();
	d = d<10?'0'+d:d;
	var h = date.getHours();
	h = h<10?"0"+h:h;
	var m = date.getMinutes();
	m = m<10?"0"+m:m;
	
	return year+"-"+month+"-"+d+" "+h+":"+m;
};


