$(document).ready(function(){
	getdatax('/clean/elecIndex/chart1.json',chart1);
	getdata('/clean/elecIndex/chart2.json',chart2);
	getdata('/clean/elecIndex/chart3.json',chart3);
	getdatax('/clean/elecIndex/chart4.json',chart4);
	getdatax('/clean/elecIndex/chart5.json',chart5);
	getdatax('/clean/elecIndex/chart6.json',chart6);
	getdatax('/clean/elecIndex/chart7.json',chart7);
});
//非化石能源发电量趋势
function chart1(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color:['#2b88ff','#5acbff','#4be698','#40eaf9'],
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data.xData,
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 10
			}
		}],
		yAxis: [
			{
				name:'万千瓦时',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,45],
					align:'center',
					color:'#fff',
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}],
		series: [
			{
				name: "发电量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "本月止累计发电量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "本月同比",
				type: "line",
				smooth:true,
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][2],
			},
			{
				name: "本月止累计同比",
				type: "line",
				smooth:true,
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][3],
			},
		]
	};
	$chart.init('#chart1', option);
}
//清洁能源增长率
function chart2(data){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data[0]
		},
		color:['#2b88ff','#4138e1','#4be698','#40eaf9'],
		grid:{
			top:'10%',
			bottom:'20%',
			left:'5%',
			right:'5%',
			containLabel:true,
		},
		xAxis: [{
			type: "category",
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff ',
				}
			},
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				color: '#0177d4',
				show: true
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 8
				},
			},
			data:data[1],
		}],
		yAxis: [{
			type: 'value',
			splitNumber:3,
			axisTick: {
				color: '#0177d4',
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 8
				},
				formatter: '{value}%'
			}
		}],
		series: [{
			name: '增长率',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
				},
			},
			data: data[2]
		},
		{
			name: '本月同比',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
				},
			},
			data: data[3]
		}]
	};
	$chart.init('#chart2', option);
}
//污染物排放完成率
function chart3(data){
	var option = {
		//title:[{
		//	text:'污染物排放完成率',
		//	top:'3%',
		//	left:'2%',
		//	textStyle: {
		//		color: '#59EBE8',
		//		fontSize:16,
		//	}
		//}],
		tooltip : {
			formatter: "{a} : {c}%"
		},
		legend: {
			show:true,
			bottom : '2%',
			//left:'5%',
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16, //图例宽度
			itemHeight: 8, //图例高度
			textStyle: {
				color:'#fff',
				fontFamily: '微软雅黑',
				fontSize: 10,
			},
			data: ['安全','基本安全','预警'],
		},
		series : [
			{
				name: 'SO2',
				type: 'gauge',
				z: 3,
				min: 0,
				max: 100,
				splitNumber: 10,
				//center: ['60%', '55%'],
				radius: '80%',
				axisLine: {            // 坐标轴线
					lineStyle: {
						color:  [[0.3, '#25e4a3'],[0.5, '#faf13f'],[1, '#f7355e']],// 属性lineStyle控制线条样式
						width: 10
					}
				},
				axisLabel: {
					formatter: function(e) {
						return e+'%';
					}
				},
				axisTick: {            // 坐标轴小标记
					length: 15,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				splitLine: {           // 分隔线
					length: 20,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				title : {
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						//fontWeight: 'bolder',
						fontSize: 16,
						color:'#fff'
					}
				},
				detail : {
					formatter:'{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder'
					}
				},
				data:[data[0]]
			},
			{
				name: '氮氧化物',
				type: 'gauge',
				center: ['20%', '55%'],    // 默认全局居中
				radius: '65%',
				min:0,
				max:100,
				endAngle:45,
				splitNumber:4,
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						color:  [[0.3, '#25e4a3'],[0.5, '#faf13f'],[1, '#f7355e']],
						width: 8
					}
				},
				axisTick: {            // 坐标轴小标记
					length:12,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {
					formatter: function(e) {
						return e+'%';
					}
				},
				splitLine: {           // 分隔线
					length:20,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				pointer: {
					width:5
				},
				title: {
					offsetCenter: [0, '-30%'],
					textStyle: {
						color:'#fff',
						fontSize: 16,
					}
				},
				detail: {
					formatter:'{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder'
					}
				},
				data:[data[1]]
			},
			{
				name: '粉尘',
				type: 'gauge',
				center: ['79%', '50%'],    // 默认全局居中
				radius: '55%',
				min: 0,
				max: 100,
				startAngle: 135,
				endAngle: 45,
				splitNumber: 2,
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						color:  [[0.475, '#25e4a3'],[0.525, '#faf13f'],[1, '#f7355e']],
						width: 8
					}
				},
				axisTick: {            // 坐标轴小标记
					splitNumber: 5,
					length: 10,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				splitLine: {           // 分隔线
					length: 15,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {
					formatter: function(e) {
						return e+'%';
					}
				},
				pointer: {
					width:2
				},
				title: {
					offsetCenter: [0, '-30%'],
					textStyle: {
						color:'#fff',
						fontSize: 16,
					}
				},
				detail: {
					formatter:'{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder'
					}
				},
				data:[data[2]]
			},
			{
				type:'pie',
				radius: 0,
				center: ['-30%', '-50%'],
				color: ["#25e4a3","#faf13f", "#f7355e"],
				itemStyle:{
					normal: {
						show:false,
					}
				},
				label: {
					normal: {
						show:false,
					}
				},
				labelLine: {
					normal: {
						show: false
					}
				},
				data:[{name:"安全",value:1},
					{name:"基本安全",value:1},
					{name:"预警",value:1}
				]
			}
		]
	};
	$chart.init('#chart3', option,'pie');
}
//污染物排放趋势
function chart4(data, ix){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data.legend
		},
		color:['#50ef9f','#2b88ff','#3ee4f3','#40eaf9'],
		grid:{
			top:'10%',
			bottom:'20%',
			left:'5%',
			right:'5%',
			containLabel:true,
		},
		xAxis: [{
			type: "category",
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff ',
				}
			},
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				color: '#0177d4',
				show: true
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 8
				},
			},
			data:data.xData,
		}],
		yAxis: [{
			name:'吨',
			nameGap:-5,
			nameTextStyle:{
				padding:[0,0,0,45],
				align:'center',
				color:'#fff',
			},
			type: 'value',
			splitNumber:3,
			axisTick: {
				color: '#0177d4',
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 8
				},
				formatter: '{value}'
			}
		}],
		series: [
			{
			name: 'SO2排放量',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			stack:'g',
			areaStyle:{},
			itemStyle: {
				normal: {
				},
			},
			data: data.data[ix][0]
		},
			{
				name: '氮氧化物排放量',
				type: 'line',
				smooth: true,
				symbol:'circle',
				showSymbol: false,
				stack:'g',
				areaStyle:{},
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1]
			},
			{
				name: '粉尘排放量',
				type: 'line',
				smooth: true,
				symbol:'circle',
				showSymbol: false,
				stack:'g',
				areaStyle:{},
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][2]
			},
		]
	};
	$chart.init('#chart4', option);
}
//脱硫效率排名
function chart5(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		color:['#2b88ff','#5acbff','#50ef9f','#e8e745'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data.xData,
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 10
			}
		}],
		yAxis: [
			{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}],
		series: [
			{
				name: "脱硫效率",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "本月同比",
				type: "line",
				smooth:true,
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][2],
			},

		]
	};
	$chart.init('#chart5', option);
}
//脱硝效率排名
function chart6(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		color:['#2b88ff','#52fcfc','#3ee4f3','#40eaf9'],
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data.xData,
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 10
			}
		}],
		yAxis: [
			{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}],
		series: [
			{
				name: "脱硝效率",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "本月同比",
				type: "line",
				smooth:true,
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},
		]
	};
	$chart.init('#chart6', option);
}
//淘汰落后产能结构
function chart7(data, ix){
	var option = {
		textStyle: {
			color: '#59ebe8'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c}千瓦 ({d}%)"
		},
		color: ['#2b88ff','#4138e1','#50ef9f','#3ee4f3','#5c54ea'  ,'#e8e745','#dca93c','#e45698','#8954ea','#549eea'],
		legend: {
			show:true,
			bottom : '2%',
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16, //图例宽度
			itemHeight: 8, //图例高度
			textStyle: {
				color:'#fff',
				fontFamily: '微软雅黑',
				fontSize: 10,
			},
			/*data: data.legend,*/
		},
		series : [
			{
				name: '淘汰落后产能',
				type: 'pie',
				radius : '60%',
				center: ['50%', '40%'],
				data:data.data[ix][0],
				itemStyle: {
					normal: {
						label:{
							show: true,
							//position:'inside',
							//formatter: '{b} : {c}%' ,
							textStyle:{
								color:'#fff',
								//fontSize: 10
							},
						}
					}
				}
			}
		]
	};
	$chart.init('#chart7', option);
}