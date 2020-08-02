mui('.loginBtn').on("tap", '.Btn1', function(e) {
	mui.openWindow({
		url: "login.html",
		id: "login",
		style: {},
		show: {
			autoShow: true,
			aniShow: "pop-in",
			duration: 500
		},
		waiting: {
			autoShow: true,
			title: "加载中...",
			options: {}
		}
	})
})
mui.back = function() {};//让返回键失效
mui.plusReady(function() {
	mui('body').on("tap", '.skip', function(e) {
		plus.webview.currentWebview().close();
	})
})
