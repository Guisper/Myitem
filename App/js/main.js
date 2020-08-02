mui.plusReady(function() {
	mui.openWindow({
		id: 'logo',
		url: 'Pages/logo.html',
		styles: {
			popGesture: "none"
		},
		show: {
			aniShow: 'none'
		},
		waiting: {
			autoShow: false
		}
	});

	setTimeout(function() {
		var subPages = [
			'Pages/Page1.html',
			'Pages/Page2.html',
			'Pages/Page3.html',
			'Pages/Page4.html'
		];
		var subheight = (plus.display.resolutionHeight - 50) + "px"
		var subPageStyle = {
			top: '0',
			bottom: '44px', //子页面距离底部高度
			height: subheight //固定子页面高度，解决唤起输入法时底部上浮的问题
		};
		//设置bottom绝对位置
		document.getElementById('bottomBtn').style.top = (plus.display.resolutionHeight - 50) + "px";
		var self = plus.webview.currentWebview();
		for (var i = 0; i < subPages.length; i++) {
			var sub = plus.webview.create(subPages[i], subPages[i], subPageStyle);
			sub.hide();
			self.append(sub);
		}
		plus.webview.show(subPages[0]);
	}, 2000);

})
mui(".mui-bar-tab").on("tap", "a", function(e) {
	var tagPage = this.getAttribute("href");
	plus.webview.show(tagPage, "fade-in", 10);
})
