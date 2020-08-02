//解决主页面无法滚动
		mui('.mui-inner-wrap').scroll({
			deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});
		mui('.mui-scroll-wrapper').scroll();
		
		mui('.mui-table-view').on("tap", '.page-meichandise', function(e) {
			mui.openWindow({
				url: "Page2-1.html",
				id: "Page2-1.html",
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
		
		mui('.mui-table-view').on("tap", '.page-divice-manage', function(e) {
			mui.openWindow({
				url: "Page2-2.html",
				id: "Page2-2.html",
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
		
		mui('.gotologin').on("tap", '.login', function(e) {
			mui.openWindow({
				url: "login.html",
				id: "login",
				style: {},
				show: {
					autoShow: true,
					aniShow: "zoom-fade-out",
					duration: 300
				},
				waiting: {
					autoShow:false
				}
			})
		})
		
		
		var Box1 = document.getElementById('Chart1');
		var instant1 = echarts.init(Box1);
		var option1 = {
			title: {
				show: 'ture',
				text: "催化剂消耗",
				subtext: "剩余50kg",
				left: '3%',
				top: '5%',
				textStyle: {
					color: "#FFFFFF",
					fontSize: 15
				},
				subtextStyle: {
					color: "#FFFFFF"
				}
			},
			xAxis: {
				type: 'category',
				data: ['9h', '10h', '11h', '12h', '13h', '14h', '15h'],
				axisLabel: {
					show: true,
					textStyle: {
						color: '#FFFFFF'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			yAxis: {
				type: 'value',
				min: '-9',
				max: '9',
				axisLabel: {
					show: true,
					textStyle: {
						color: '#FFFFFF'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			grid: {
				width: '85%',
				height: '100px',
				bottom: '12%'
			},
			series: [{
				data: [1, -5, 2, -3, 1, 4, -2],
				type: 'line',
				smooth: true,
				color: "#FFFFFF"
			}]
		};
		instant1.setOption(option1);

		var Box2 = document.getElementById('Chart2')
		var instant2 = echarts.init(Box2)
		var option2 = {
			title: {
				show: 'ture',
				text: "能源消耗",
				subtext: "剩余40kw·h",
				left: '3%',
				top: '5%',
				textStyle: {
					color: "#FFFFFF",
					fontSize: 15
				},
				subtextStyle: {
					color: "#FFFFFF"
				}
			},
			legend: {
				orient: 'vertical',
				right: '3%',
				top: '5%',
				data: ['已消耗', '剩余能源'],
				textStyle: {
					color: "#FFFFFF"
				}
			},
			series: [{
				type: 'pie',
				top: '20%',
				radius: ['55%', '70%'],
				avoidLabelOverlap: false,
				label: {
					normal: {
						show: true,
						position: 'inner',
						formatter: '{b}({d}%)'
					}
				},
				emphasis: {
					label: {
						show: true,
						fontSize: '14'
					}
				},
				labelLine: {
					show: false
				},
				data: [{
						value: 28,
						name: '已消耗',
						itemStyle: {
							color: '#91C7AE'
						}
					},
					{
						value: 72,
						name: '剩余能源',
						itemStyle: {
							color: '#00f514'
						}
					},
				]
			}]
		};
		instant2.setOption(option2);

		var Box3 = document.getElementById('Chart3');
		var instant3 = echarts.init(Box3);
		var option3 = {
			title: {
				show: 'ture',
				text: "PH值",
				left: '3%',
				top: '6%',
				textStyle: {
					color: "#FFFFFF",
					fontSize: 15
				}
			},
			xAxis: {
				type: 'category',
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			yAxis: {
				type: 'value',
				scale: true,
				min: '10',
				max: '1',
				axisLabel: {
					show: true,
					textStyle: {
						color: '#FFFFFF'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
				splitLine: {
					show: false
				}
			},
			grid: {
				width: '90%',
				height: 100,
				left: '6%'
			},
			series: [{
				data: [7.1, 6.8, 7.2, 7.1, 6.7, 7, 6.85, 7.1, 7.2, 6.7, 7.1],
				type: 'line',
				smooth: true,
				color: "#FFFFFF",
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}'
					}
				}
			}]
		};
		instant3.setOption(option3);


		var Box4 = document.getElementById('Chart4');
		var instant4 = echarts.init(Box4);
		var option4 = {
			title: {
				show: 'ture',
				text: "浊度/NTU",
				left: '3%',
				top: '6%',
				textStyle: {
					color: "#FFFFFF",
					fontSize: 15
				}
			},
			xAxis: {
				type: 'category',
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				}
			},
			yAxis: {
				type: 'value',
				scale: true,
				min: '60',
				max: '0',
				axisLabel: {
					show: true,
					textStyle: {
						color: '#FFFFFF'
					}
				},
				axisLine: {
					lineStyle: {
						color: '#fff'
					}
				},
				splitLine: {
					show: false
				}
			},
			grid: {
				width: '90%',
				height: 100,
				left: '8%'
			},
			series: [{
				data: [48, 42, 44, 47, 49, 38, 42, 45, 47, 50, 54, 47],
				type: 'line',
				smooth: true,
				color: "#FFFFFF",
				label: {
					normal: {
						show: true,
						position: 'top',
						formatter: '{c}'
					}
				}
			}]
		};
		instant4.setOption(option4);




		// var arr = document.getElementById("p2-data").children;
		// for (var i = 0; i < arr.length; i++) {
		// 	arr[i].onclick = function() {
		// 		for (var j = 0; j < arr.length; j++) {
		// 			arr[j].className = '';
		// 		}
		// 		arr[i].className = 'data-active';
		// 	}
		// }
		//想要做点击日期栏变成绿色的效果（目前是Thu 11为绿色），通过改变class的方式实现，不过失败了