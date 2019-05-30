window.onload = function() {
	// 事件兼容所有浏览器
	var EventUntil = {
		// 添加事件
		addHandler: function(element, type, handler) {
			if (element.addEventListener) {
				element.addEventListener(type, handler, false);
			}else if (element.attachEvent) {
				element.attachEvent("no" + type, handler);
			}else {
				element["no" + type] = null;
			}
		},
		// 移除事件
		removeHandler: function(element, type, handler) {
			if (element.removeEventListener) {
				element.removeEventListener(type, handler, false);
			}else if (element.detachEvent) {
				element.detachEvent("on" + type, handler);
			}else {
				element["on" + type] = null;
			}
		},
		// 得到event目标
		getTarget: function(event) {
			return event.target || event.srcElement;
		},
		// 阻止默认行为
		preventDefault: function(event) {
			if (event.preventDefault) {
				evet.preventDefault();
			}else {
				event.returnValue = false;
			}
		},
		// 停止冒泡或委托
		stopPropagation: function(event) {
			if (event.stopPropagation) {
				event.stopPropagation();
			}else {
				event.cancelBubble = true;
			}
		}
	}
	// 获取目标元素
	var ul = document.querySelector("#list");
	var li = document.querySelectorAll("li");
	var image = document.querySelectorAll(".image");
	// 轮播图脚本
	function rotationChart() {
		var i;
		for(i=0; i<4; i++) {
			li[i].style.backgroundColor = "#FFCC00";
			image[i].style.display = "block";
			if (li[i-1] || image[i-1]) {
				li[i-1].style.backgroundColor = "#FFF";
				image[i-1].style.display = "none";
			}
		}
		if (i === 3) {
			i = 0;
		}
		// var timer = setInterval("rotationChart()", 1000);
	}
	// 选项卡脚本
	// EventUntil.addHandler(ul, "click", function(e) {

	// })
}