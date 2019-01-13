$(document).ready(function(){
	getdata('/clean/oilIndex/chart1.json',chart1);
	getdata('/clean/oilIndex/chart2.json',chart2);
	getdata('/clean/oilIndex/chart3.json',chart3);
	getdata('/clean/oilIndex/chart4.json',chart4);
	getdata('/clean/oilIndex/chart5.json',chart5);
	getdata('/clean/oilIndex/chart6.json',chart6);
	getdata('/clean/oilIndex/chart7.json',chart7);
	changeMain('c1');
});
//石油开采资源综合利用情况
function chart1(data){
	var option =  {
		legend: {
			data: data[0],
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
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data[1],
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
				name: "余热利用率",
				type: "line",
				itemStyle: {
					normal: {
						color: '#2c18f3',
					},
				},
				data: data[2],
			},
			{
				name: "油井伴生气回收利用率",
				type: "line",
				itemStyle: {
					normal: {
						color: '#00FFFF',
					},
				},
				data: data[3],
			},
			{
				name: "油泥资源化利用率",
				type: "line",
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data[4],
			},
		]
	};
	$chart.init('#chart1', option);
}
//石油开采其他污染物产生情况
function chart2(data){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data[0]
		},
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
			name: '采油废水回用率',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
					color: '#2c18f3'
				},
			},
			data: data[2]
		},
		{
			name: '采出废水达标排放率',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
					color: '#00FFFF'
				},
			},
			data: data[3]
		}]
	};
	$chart.init('#chart2', option);
}
//石油开采其他污染物产生情况
function chart3(data){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data[0]
		},
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
			name: '落地原油率',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
					color: '#16abfe'
				},
			},
			data: data[2]
		},
			{
				name: '油井伴生气外排率',
				type: 'line',
				smooth: true,
				symbol:'circle',
				showSymbol: false,
				itemStyle: {
					normal: {
						color: '#ff7070'
					},
				},
				data: data[3]
			}]
	};
	$chart.init('#chart3', option);
}
//石油开采加工综合能耗企业排名
function chart4(data){
	var option = {
		tooltip: {
			trigger: 'item',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend:{
			data:data[0]
		},
		grid:{
			top:'10%',
			bottom:'20%',
			left:'2%',
			right:'2%',
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
			name:'单位能耗量',
			nameGap:-1,
			nameTextStyle:{
				padding:[0,0,0,65],
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
			name: '开采重油',
			type:'bar',
			barWidth:15,
			//stack:'g',
			itemStyle: {
				normal: {
					color: '#2c18f3'
				},
			},
			data: data[2]
		},
		{
			name: '开采轻油',
			type:'bar',
			barWidth:15,
			//stack:'g',
			itemStyle: {
				normal: {
					color: '#00FFFF'
				},
			},
			data: data[3]
		},
		{
			name: '石油加工',
			type:'bar',
			barWidth:15,
			//stack:'g',
			itemStyle: {
				normal: {
					color: '#FFD743'
				},
			},
			data: data[4]
		}]
	};
	$chart.init('#chart4', option);
}
//石油加工资源消耗情况
function chart5(data){
	var option =  {
		legend: {
			data: data[0],
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
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data[1],
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
				name:'吨',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,25],
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
					fontSize: 10,
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
				name: "油取水量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
					},
				},
				data: data[2],
			},
			{
				name: "原料加工损失率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#00FFFF',
					},
				},
				data: data[4],
			},
			{
				name: "循环水补水率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data[3],
			},
			{
				name: "化学水制水比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#e7572d'
					},
				},
				data: data[4],
			},
			{
				name: "原油储存损耗",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#fd3434'
					},
				},
				data: data[5],
			},
		]
	};
	$chart.init('#chart5', option);
}
//石油加工资源综合利用情况
function chart6(data){
	var option =  {
		legend: {
			data: data[0],
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
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data[1],
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
			}],
		series: [
			{
				name: "工业水重复利用率",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
						barBorderRadius: 10,
					},
				},
				data: data[2],
			},
			{
				name: "含硫污水回用率",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color: '#30fffe',
						barBorderRadius: 10,
					},
				},
				data: data[3],
			},
			{
				name: "蒸汽凝结水回收率",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color: '#E9DC37',
						barBorderRadius: 10,
					},
				},
				data: data[4],
			},
		]
	};
	$chart.init('#chart6', option);
}
//石油加工污染物产生情况
function chart7(data){
	var option =  {
		legend: {
			data: data[0],
		},
		color: ['#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
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
			data: data[1],
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
				name: "CODcr产生量",
				type: "bar",
				itemStyle: {
					normal: {
						barBorderRadius: 50,
					},
				},
				data: data[2],
			},
			{
				name: "挥发酚产生量",
				type: "bar",
				itemStyle: {
					normal: {
						barBorderRadius: 50,
					},
				},
				data: data[3],
			},
			{
				name: "石油类污染物产生量",
				type: "bar",
				itemStyle: {
					normal: {
						barBorderRadius: 50,
					},
				},
				data: data[4],
			},
			{
				name: "本月止累计同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#e7572d'
					},
				},
				data: data[5],
			},
		]
	};
	$chart.init('#chart7', option);
}
function changeMain(param){
	var id ="#"+param;
	$(".c"). removeClass("check_btn_option_checked");
	$(id). addClass("check_btn_option_checked");
	if(window.myChart != null){
		window.myChart.dispose();
	}
	if(param=='c1'){
		getdata('/clean/oilIndex/main1.json',main1);
	}else{
		getdata('/clean/oilIndex/main2.json',main2);
	}
}
function main1(data){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data[0]
		},
		grid:{
			top:'10%',
			bottom:'10%',
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
			name: '采油废水回用率',
			type: 'line',
			smooth: true,
			showSymbol: false,
			areaStyle: {
				normal: {type: 'default',
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(199, 37, 50,0.2)'
					}, {
						offset: 1,
						color: 'rgba(199, 37, 50,0.2)'
					}], false)
				}
			},
			itemStyle: {
				normal: {
					color:'#00F5FF',
					areaStyle: {type: 'default'}}
			},
			data: data[2]
		},
		{
			name: '采出废水达标排放率',
			type: 'line',
			smooth: true,
			showSymbol: false,
			areaStyle: {
				normal: {type: 'default',
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: 'rgba(19, 37, 250,0.2)'
					}, {
						offset: 1,
						color: 'rgba(19, 37, 250,0.2)'
					}], false)
				}
			},
			itemStyle: {
				normal: {
					color:'#0000FF',
					areaStyle: {type: 'default'}}},
			data: data[3]
		}]
	};
	window.myChart = $chart.init('#main', option);
}
function main2(data){
	var option =  {
		legend: {
			data: data[0],
		},
		color: ['#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'10%',
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
			data: data[1],
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
				name:'千克/吨原油',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,65],
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
				name: "CODcr产生量",
				type: "bar",
				itemStyle: {
					normal: {
						color: '#1E90FF',
						barBorderRadius: [20,20,0,0],
					},
				},
				data: data[2],
			},
			{
				name: "挥发酚产生量",
				type: "bar",
				itemStyle: {
					normal: {
						color: '#FFD200',
						barBorderRadius: [20,20,0,0],
					},
				},
				data: data[3],
			},
			{
				name: "石油类污染物产生量",
				type: "bar",
				itemStyle: {
					normal: {
						barBorderRadius: [20,20,0,0],
					},
				},
				data: data[4],
			},
			{
				name: "本月止累计同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#e7572d'
					},
				},
				data: data[5],
			},
		]
	};
	window.myChart = $chart.init('#main', option);
}