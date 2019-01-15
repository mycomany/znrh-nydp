$(document).ready(function(){
	getdatax('/clean/gasIndex/chart1.json',chart1);
	getdatax('/clean/gasIndex/chart2.json',chart2);
	getdatax('/clean/gasIndex/chart3.json',chart3);
	getdatax('/clean/gasIndex/chart4.json',chart4);
	getdatax('/clean/gasIndex/chart5.json',chart5);
	getdatax('/clean/gasIndex/chart6.json',chart6);
	getdatax('/clean/gasIndex/chart7.json',chart7);
	getdata('/clean/gasIndex/main.json',main);
});
function main(data){
	var chart = am4core.createFromConfig({
		data: data[3],
		legend: {
			labels:{
				text:'{category}',
				fill:'none',
				stroke:'#fff',
				fontSize:12,
				fontFamily: 'sans-serif',
				fontWeight:100,
			}
		},
		angle:32,
		innerRadius: "30%",
		series: [{
			"type": "PieSeries3D",
			"legendSettings": {
				"valueText": "{valueY.close}"
			},
			"labels":{
				stroke:'#fff',
				fontSize:12,
				fontFamily: 'sans-serif',
				fontWeight:100,
				//"disabled":true
			},
			"ticks":{
				"disabled":true
			},
			"slices":{
				"strokeWidth":0
			},
			"dataFields": {
				"value": "value",
				"category": "name"
			}
		}]
	}, "main", "PieChart3D");
	$("#id-43-title").parent().hide();
}
//天然气开采资源综合利用情况
function chart1(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color:['#25e4a3','#3fe5f4','#2b88ff'],
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
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "油井伴生气回收利用率",
				type: "line",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "油泥资源化利用率",
				type: "line",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][2],
			},
		]
	};
	$chart.init('#chart1', option);
}
//天然气开采废水排放情况
function chart2(data, ix){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data.legend
		},
		color:['#3fe5f4','#2b88ff','#2b88ff'],
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
				},
			},
			data: data.data[ix][0]
		},
		{
			name: '采出废水达标排放率',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
				},
			},
			data: data.data[ix][1]
		}]
	};
	$chart.init('#chart2', option);
}
//天然气开采其他污染物产生情况
function chart3(data, ix){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		color:['#3ee4f3','#e45698','#2b88ff'],
		legend:{
			data:data.legend
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
			data:data.xData,
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
				},
			},
			data: data.data[ix][0]
		},
			{
				name: '油井伴生气外排率',
				type: 'line',
				smooth: true,
				symbol:'circle',
				showSymbol: false,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1]
			}]
	};
	$chart.init('#chart3', option);
}
//全球天然气消费占比排名
function chart4(data, ix){
	var option = {
		tooltip: {
			trigger: 'item',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend:{
			data:data.legend
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
			data:data.xData,
		}],
		yAxis: [{
			name:'百万吨石油当量',
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
			name: '消费总量',
			type:'bar',
			barWidth:15,
			itemStyle: {
				normal: {
					color: '#3ee4f3'
				},
			},
			data: data.data[ix][0]
		},
		]
	};
	$chart.init('#chart4', option);
}
//天然气净化工艺情况
function chart5(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color:['#3ee4f3','#2b88ff','#4138e1'],
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
				name: "硫回收率",
				type: "line",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "净化器合格率",
				type: "line",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "尾气达标排放率",
				type: "line",
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
//天然气净化资源综合利用情况
function chart6(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color:['#2b88ff','#40eaf9','#25e4a3'],
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
				name:'ug/m3',
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
					fontSize: 10,
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},
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
				name: "单位潜硫量综合能耗",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "单位潜硫量脱硫剂消耗",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "中水回用率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][2],
			},
		]
	};
	$chart.init('#chart6', option);
}
//天然气净化污染物产生情况
function chart7(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color: ['#6ed5ff','#4138e1','#2874ff','#25e4a3','#af59ff'],
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
				name:'mg/L',
				nameGap:-1,
				nameTextStyle:{
					padding:[0,0,0,-45],
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
					formatter: '{value}'
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
				name: "S02排放速率",
				type: "line",
				smooth: true,
				showSymbol:false,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "废水达标排放率",
				type: "line",
				smooth: true,
				showSymbol:false,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "COD排放浓度",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						lineStyle: {
							type: 'dashed',
						}
					},
				},
				data:data.data[ix][2],
			},
			{
				name: "氨氮排放浓度",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#e7572d',
						lineStyle: {
							type: 'dashed',
						}
					},
				},
				data: data.data[ix][3],
			},
		]
	};
	$chart.init('#chart7', option);
}