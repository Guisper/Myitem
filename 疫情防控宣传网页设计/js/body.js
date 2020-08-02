//返回顶部函数
var obtn = document.getElementById("totop");
var clientHeight = document.documentElement.clientHeight || ocument.body.clientHeight;
var isTop = true;
var timer = null;
window.onscroll = function() {
	var topH = document.documentElement.scrollTop || document.body.scrollTop;
	if (topH > clientHeight) {
		obtn.style.display = "block";
	} else {
		obtn.style.display = "none";
	}
}
obtn.onclick = function() {
	timer = setInterval(function() {
		var topH = document.documentElement.scrollTop || document.body.scrollTop;
		var stepLength = Math.ceil(topH / 8); //返回顶部的速度
		document.documentElement.scrollTop = document.body.scrollTop = topH - stepLength;
		if (topH == 0) {
			clearInterval(timer);
		}
	}, 25); //执行时间间隔
}

//轮播图
let pics = document.getElementsByClassName('pic');
let btnL = document.getElementById('btnLeft');
let btnR = document.getElementById('btnRight');
let points = document.getElementsByClassName('pot');
let swiper = document.getElementsByClassName('newspics');

let index = 0; //index表示第几张图片在展示

let time = null; //存储时间
let clearPics = () => {
	//全部去掉active类名
	for (let i = 0; i < pics.length; i++) {
		pics[i].className = "pic"
	}
	for (let i = 0; i < points.length; i++) {
		points[i].className = "pot"
	}
};

let update = () => {
	clearPics();
	//，第index张图片有active类名
	pics[index].className = "pic active";
	points[index].className = "pot active";
};

//声明一个变量，每当执行一次btnNext函数变切换下一张图片并且添加active类名，当图片是最后一张时，下次切换回到初始图片
let btnNext = () => {
	index++;
	if (index == pics.length) {
		index = 0;
	}
	//执行update()方法给图片添加active类名
	update();
};

//声明一个变量，每当执行一次btnText函数变切换上一张图片并且添加active类名，当图片是最后一张时，下次切换回到初始图片
let btnText = () => {
	if (index == 0) {
		index = pics.length - 1;
	} else {
		index--;
	}
	//执行update()方法给图片添加active类名
	update();
};

//默认开启定时器每一秒钟切换下一张图片
time = setInterval(() => {
	btnNext();
}, 2500);

//给左键按钮添加点击事件，每点击调用一次btnText()函数
btnL.addEventListener('click', () => {
	btnText();
});

//给右键按钮添加点击事件，每点击调用一次btnNext()函数
btnR.addEventListener('click', () => {
	btnNext();
});

//先遍历所有的点给一个点添加点击事件
for (let i = 0; i < points.length; i++) {
	points[i].addEventListener('click', function() {
		//声明一个变量用来存储当前的点是哪一位(在html里面给标签存入了数据)
		let opt = this.getAttribute('arr');
		//让把当前点击的点值跟index相等，这样就是保证当点击点的时候跳转到对应的图片
		index = opt;
		update();
	})
}

function removetimer() {
	clearInterval(time);
}

function restarttimer() {
	time = setInterval(() => {
		btnNext();
	}, 2500);
}
