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
Common.getFormattedDate = function (date, formatStr) {
	var res = [];
	//使用正则表达式提取出分割符
	var pattern = /[^\d\w]/g;

	var strArr = formatStr.split(pattern);

	if (!!strArr[0]) {
		res.push(strArr[0].length == 4 ? date.getFullYear() : (date.getFullYear() + "").substr(2));
	}
	if (!!strArr[1]) {
		res.push(strArr[1].length == 2 ? preFixZero((date.getMonth() + 1) + "", 2) : (date.getMonth() + 1) + "");
	}
	if (!!strArr[2]) {
		res.push(strArr[2].length == 2 ? preFixZero((date.getDate()) + "", 2) : (date.getDate()) + "");
	}

	var seprator = formatStr.match(pattern);//获取分割符
	if (seprator == null) {
		return res.join("");
	} else {
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
function preFixZero(str, length) {
	console.log(str, length, length - str.length + 1);
	return new Array(length - str.length + 1).join("0") + str;
}
/**
 * 设置月份
 *
 * @param Date date 时间
 * @param int num 在当前月份上要增加的月数，正数为增加，负数为减少
 * @return Date 月份增减过得Date对象
 */
Common.setMonth = function (date, num) {
	return new Date(date.setMonth(date.getMonth() + num));
};

/**
 * 获取特定格式的时间
 *
 * @param Date date 时间
 * @param String formatStr 指定返回的时间格式的字符串 例如：‘hh-mm-ss’ 
 * @return String 时间 例如：'07-08-29'
 */
Common.getFormattedTime = function (date, formatStr) {
	var res = [];
	//使用正则表达式提取出分割符
	var pattern = /[^\d\w]/g;

	var strArr = formatStr.split(pattern);

	if (!!strArr[0]) {
		res.push(strArr[0].length == 2 ? preFixZero(date.getHours() + "", 2) : (date.getHours() + ""));
	}
	if (!!strArr[1]) {
		res.push(strArr[1].length == 2 ? preFixZero(date.getMinutes() + "", 2) : date.getMinutes() + "");
	}
	if (!!strArr[2]) {
		res.push(strArr[2].length == 2 ? preFixZero(date.getSeconds() + "", 2) : date.getSeconds() + "");
	}

	var seprator = formatStr.match(pattern);//获取分割符
	if (seprator == null) {
		return res.join("");
	} else {
		return res.join(seprator[0]);
	}
};

/**
 * 设置分钟
 *
 * @param Date date 时间
 * @param int n 要增减的分钟数 
 * @return Date 分钟被增减过得Date对象
 */
Common.setMinutes = function (date, n) {
	date.setMinutes(date.getMinutes() + n);
	return date;
};


/*
全屏函数
 * @param DOMObject element 要全屏显示的HTML元素
 * @return void

调用示例：launchFullscreen(document.getElementById("box"));
*/
Common.launchFullscreen = function(element) {
	if (element.requestFullscreen) {
		element.requestFullscreen();
	} else if (element.mozRequestFullScreen) {
		element.mozRequestFullScreen();
	} else if (element.webkitRequestFullscreen) {
		element.webkitRequestFullscreen();
	} else if (element.msRequestFullscreen) {
		element.msRequestFullscreen();
	}
}


/*
获取一个在特定范围之内()的的随机数
 * @param min 随机数最小值（下界）
 * @param max 随机数最大值（上界）
 * @return 整数
调用示例：randomInit(1,10);
辅助函数：Math.floor()向下取整 Math.random()随机返回[0,1)的随机数
*/
Common.randomInt = function(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * 共享onload事件 来自：JavaScript DOM编程艺术（第二版）P83
 * @param {Function} func 
 */
function addLoadEvent(func){
	var oldload = window.onload;//取出原有的事件处理函数
	if(typeof oldload != 'function'){//判断原有事件处理函数是否存在
		window.onload = func;
	} else {
		window.onload = function() {//添加新的事件处理函数 合并新旧事件处理函数
			oldload();
			func();
		}
	}
}

/**
 * 函数：向后加入节点
 * 注：JS DOM 实现了 insertBefore 却没有实现 insetAfter 
 * 来源：JavaScript DOM编程艺术（第二版）P110
 * @param {HTML Element Object} newElement 
 * @param {HTML Element Object} targetElement 
 */
function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);

	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}
