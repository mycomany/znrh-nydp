$(document).ready(function(){
	getdata('/lc/elecIndex/chart1.json',chart1);
	getdatax('/lc/elecIndex/chart2.json',chart2);
	getdata('/lc/elecIndex/chart3.json',chart3);
	getdatax('/lc/elecIndex/chart4.json',chart4);
	getdatax('/lc/elecIndex/chart5.json',chart5,{sidx:2});
	getdata('/lc/elecIndex/main.json',main);
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
		depth:220,
		innerRadius: "10%",
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
				"strokeWidth":0,
				"cornerRadius":5,
			},
			"colors":{
				"step":3
			},
			"dataFields": {
				"value": "value",
				"depthValue":"value",
				"category": "name"
			}
		}]
	}, "main", "PieChart3D");
	$("#id-43-title").parent().hide();
}
//煤气联合循环发电量趋势
function chart1(data){
	var option =  {
		legend: {
			data: data[0],
		},
		color:['#2b88ff','#5acbff'],
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
				name:'MW',
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
			},
			{
				name:'亿千瓦时',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,-45],
					align:'center',
					color:'#fff',
				},
				max:100,
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
				name: "装机容量",
				type: "line",
				itemStyle: {
					normal: {
					},
				},
				data: data[2],
			},
			{
				name: "发电量",
				type: "line",
				smooth: true,
				yAxisIndex:1,
				itemStyle: {
					normal: {
					},
				},
				data: data[3],
			},
		]
	};
	$chart.init('#chart1', option);
}
//煤气联合循环发电量排名
function chart2(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color:['#4df3f3','#2b88ff'],
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
				name:'MW',
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
			},
			{
				name:'万千瓦时',
				nameGap:-5,
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
			}
		],
		series: [
			{
				name: "装机容量",
				type: "bar",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "发电量",
				type: "bar",
				yAxisIndex:1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},
		]
	};
	$chart.init('#chart2', option);
}
//CO2排放量趋势
function chart3(data){
	var option = {
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
		color:['#2b88ff','#4138e1'],
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
				name: "排放量",
				type: "line",
				itemStyle: {
					normal: {
					},
				},
				data: data[2],
			},
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data[3],
			},
		]
	};
	$chart.init('#chart3', option);
}
//CO2排放量排名
function chart4(data, ix){
	var option = {
		legend: {
			data: data.legend,
		},
		color:['#5acbff','#2b88ff'],
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
				name:'千克/千瓦时',
				nameGap:-1,
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
				name: "排放量",
				type: "bar",
				barWidth:"30%",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},
		]
	};
	$chart.init('#chart4', option);
}
//单位发电CO2排放量排名
function chart5(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color:['#2b88ff','#5acbff'],
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
				name:'千克/千瓦时',
				nameGap:-1,
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
					fontSize: 10,
					formatter: '{value}'
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
				name: "排放量",
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
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},
		]
	};
	$chart.init('#chart5', option);
}