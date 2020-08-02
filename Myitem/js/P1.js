mui.init({
	pullRefresh: {
		container: '#square', //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
		up: {
			height: 100, //可选.默认50.触发上拉加载拖动距离
			auto: true, //可选,默认false.自动上拉加载一次
			contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
			contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
			callback: pullupRefresh //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
		}
	}
});

var count = 0;

function pullupRefresh() {
	setTimeout(function() {
		var table = document.querySelector(".mui-table-view");
		for (var i = 0; i < 2; i++) {
			var li = document.createElement("li");
			li.className = "mui-table-view-cell mui-media";

			var str = ""; //加载的内容采用字符串拼接，方便更改
			str += "<div class='information mui-table-view-cell'>"
			str += "<a href='javascript:;'>"
			str += "<img class='mui-media-object mui-pull-left' src='img/hwx.png'>"
			str += "<div class='mui-media-body'>"
			str += "海王星"
			str += "</div>"
			str += "</a>"
			str += "<button type='button' class='mui-btn mui-btn-outlined attention'>+关注</button>"
			str += "</div>"
			str += "<div class='comments'>"
			str += "<span class='cmt-text'>"
			str += "智能水质测控设备——浮标式无线水质监测站，支持手机APP远程控制<br>"
			str += "设备自行安装、常用功能介绍，APP安装使用教程"
			str += "</span>"
			str += "<div class='cmt-img'>"
			str += "<img src='img/p1%20(6).png'>"
			str += "<div class='cmtBtn'>"
			str += "<div class='cmtBtn-left'>"
			str += "<a class='mui-tab-item'>"
			str += "<span class='mui-icon iconfont icon-bofang1'></span>"
			str += "</a>"
			str += "<span>3000</span>"
			str += "</div>"
			str += "<div class='cmtBtn-right'>"
			str += "<a class='mui-tab-item'>"
			str += "<span class='mui-icon iconfont icon-pl'></span>"
			str += "</a>"
			str += "<span></span>"
			str += "</div></div></div></div>"

			li.innerHTML = str;
			table.appendChild(li);
		}
		count++;
		mui("#square").pullRefresh().endPullupToRefresh(count >= 3);
	}, 1000)
}

mui('.prod-content').on("tap", '.prod-1', function(e) {
	mui.openWindow({
		url: "Page1-1.html",
		id: "Page1-1.html",
		style: {},
		show: {
			autoShow: true,
			aniShow: "zoom-fade-out",
			duration: 200
		},
		waiting: {
			autoShow: true,
			title: "加载中...",
			options: {},
		}
	})
})


mui('.prod-content').on("tap", '.prod-2', function(e) {
	mui.openWindow({
		url: "Page1-2.html",
		id: "Page1-2.html",
		style: {},
		show: {
			autoShow: true,
			aniShow: "zoom-fade-out",
			duration: 200
		},
		waiting: {
			autoShow: true,
			title: "加载中...",
			options: {},
		}
	})
})
