$(document).ready(function(){
	getdata('/lc/elecIndex/chart1.json',chart1);
	getdata('/lc/elecIndex/chart2.json',chart2);
	getdata('/lc/elecIndex/chart3.json',chart3);
	getdatax('/lc/elecIndex/chart4.json',chart4);
	getdata('/lc/elecIndex/chart5.json',chart5);
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
//煤气联合循环发电量趋势
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
				name: "装机量",
				type: "line",
				itemStyle: {
					normal: {
						color: '#2c18f3',
					},
				},
				data: data[2],
			},
			{
				name: "发电量",
				type: "line",
				itemStyle: {
					normal: {
						color: '#00FFFF',
					},
				},
				data: data[4],
			},
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data[3],
			},
		]
	};
	$chart.init('#chart1', option);
}
//煤气联合循环发电量排名
function chart2(data){
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
				name: "装机量",
				type: "bar",
				itemStyle: {
					normal: {
						color: '#2c18f3',
					},
				},
				data: data[2],
			},
			{
				name: "发电量",
				type: "bar",
				itemStyle: {
					normal: {
						color: '#00FFFF',
					},
				},
				data: data[4],
			},
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data[3],
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
						color: '#2c18f3',
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
						color: '#E9DC37'
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
				itemStyle: {
					normal: {
						color: '#2c18f3',
					},
				},
				data: data.data[ix][2],
			},
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data.data[ix][3],
			},
		]
	};
	$chart.init('#chart4', option);
}
//单位发电CO2 排放量排名
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
				name: "排放量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
						barBorderRadius: 50,
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
						color: '#E9DC37'
					},
				},
				data: data[3],
			},
		]
	};
	$chart.init('#chart5', option);
}