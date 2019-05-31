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
	var main = document.querySelector(".main");
	var ul = document.querySelector("#list");
	var li = document.querySelectorAll("li");
	var image = document.querySelectorAll(".image");
	var size = image.length;
	var index = 0;
	var timer = null;
	// 切换图片
	function rotationChart() {
		for(var i=0; i<li.length; i++) {
			li[i].style.backgroundColor = "#FFF";
			image[i].style.display = "none";
			}
		li[index].style.backgroundColor = "#FFCC00";
		image[index].style.display = "block";
	}
	// 自动播放
	function startAutoPlay() {
		timer = setInterval(function() {
			index++;
			if (index >= size) {
				index = 0;
			}
			rotationChart();
		}, 1000);
	}
	// 停止自动播放
	function stopAutoPlay() {
		if (timer) {
			clearInterval(timer);
		}
	}
	// 添加鼠标点击事件
	for (var i=0; i<li.length; i++) {
		li[i].id = i;
		EventUntil.addHandler(li[i], "click", function() {
			index = this.id;
			rotationChart();
		})
	}
	// 添加鼠标移动事件
	EventUntil.addHandler(main, "mouseover", stopAutoPlay);
	EventUntil.addHandler(main, "mouseout", startAutoPlay);
	// 开始自动播放
	startAutoPlay();
}



















