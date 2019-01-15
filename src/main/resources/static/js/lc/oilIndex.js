$(document).ready(function(){
	getdata('/lc/oilIndex/chart1.json',chart1);
	getdata('/lc/oilIndex/chart2.json',chart2);
	getdata('/lc/oilIndex/chart3.json',chart3);
	getdata('/lc/oilIndex/chart4.json',chart4);
	getdatax('/lc/oilIndex/chart5.json',chart5);
	getdatax('/lc/oilIndex/chart6.json',chart6);
	getdatax('/lc/oilIndex/chart7.json',chart7);
	getdatax('/lc/oilIndex/main.json',main);
});
function main(data, ix){
	var option = {
		tooltip:{
		},
		legend:{
			data:data.legend
		},
		grid:{
			top:'10%',
			bottom:'10%',
			left:'5%',
			right:'5%',
			containLabel:true,
		},
		xAxis: [{
			type: 'category',
			data: data.xData,
			axisLine: {
				lineStyle: {
					color: '#87CEFF'
				}
			},
			axisLabel: {
				rotate: 45,

				textStyle: {
					color: '#ffffff'
				}
			}
		}],
		yAxis: [{
			splitLine: {
				show: false
			},
			type: 'value',
			splitNumber:3,
			splitLine: {
				show: false
			},
			axisLine: {
				lineStyle: {
					color: '#87CEFF'
				}
			},
			axisLabel: {
				formatter:'{value}%',

				textStyle: {
					color: '#ffffff',
				}
			}
		}],
		series: [
			{
			name: '排放量',
			type: 'bar',
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(40,161,255,1)'
						}, {
							offset: 0.4,
							color: 'rgba(40,161,255,0.5)'
						}, {
							offset: 1,
							color: 'rgba(40,161,255,0.1)'
						}]
					),
					barBorderRadius: [3, 3, 0, 0]
				}
			},
			data: data.data[ix][0]
		},
		{
			name: '人均排放量 ',
			type: 'bar',
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(5,255,211,1)'
						}, {
							offset: 0.4,
							color: 'rgba(5,255,211,0.5)'
						}, {
							offset: 1,
							color: 'rgba(5,255,211,0.1)'
						}]
					),
					barBorderRadius: [3, 3, 0, 0]
				}
			},
			data: data.data[ix][1]
		}]
	};
	$chart.init('#main',option);
}
//石油开采资源综合利用情况
function chart1(data){
	var option = {
		tooltip: {
			trigger: 'axis',
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
			name:'吨CO2每吨标准煤',
			nameGap:-5,
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
				name: '石油',
				type:'bar',
				barWidth:15,
				//stack:'g',
				itemStyle: {
					normal: {
						color: '#00FFFF'
					},
				},
				data: data[2]
			},
		]
	};
	$chart.init('#chart1', option);
}
//石油开采其他污染物产生情况
function chart2(data){
	var option = {
		tooltip: {
			trigger: 'axis',
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
				name: '排放系数',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
						color: '#8a00ec'
					},
				},
				data: data[2]
			},
		]
	};
	$chart.init('#chart2', option);
}
//石油开采其他污染物产生情况
function chart3(data){
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend:{
			data:data[0]
		},
		color:['#8a00ec','#4335d2','#00FFFF','#FFD743','#ff6e72','#ff0', '#24e743','#1324fd','#ff1213'],
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
				name: '煤炭',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[2]
			},
			{
				name: '焦炭',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[3]
			},
			{
				name: '焦炉煤气',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[4]
			},
			{
				name: '高炉煤气',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[5]
			},
			{
				name: '转炉煤气',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[6]
			},
			{
				name: '石油制品',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[7]
			},
			{
				name: '天然气',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[8]
			},
			{
				name: '总用电量',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[9]
			},
			{
				name: '火电',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[10]
			}
		]
	};
	$chart.init('#chart3', option);
}
//石油开采加工综合能耗企业排名
function chart4(data){
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
			axisTick:{
				interval:0
			},
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
				name:'',
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
			}],
		series: [
			{
				name: "t-CO2",
				type: "line",
				itemStyle: {
					normal: {
						color: '#00FFFF',
					},
				},
				data: data[2],
			},
			{
				name: "t-C/toe",
				type: "line",
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data[3],
			},
		]
	};
	$chart.init('#chart4', option);
}
//石油加工资源消耗情况
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
				name:'',
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
				name: "总排放量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "排放系数",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#00FFFF',
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "单位CO2增长率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data.data[ix][2],
			},
			{
				name: "排放系数增长率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#f1f163'
					},
				},
				data: data.data[ix][3],
			},
		]
	};
	$chart.init('#chart5', option);
}
//石油加工资源综合利用情况
function chart6(data, ix){
	var option =  {
		legend: {
			show:false,
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
				name:'',
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
				name: "研发人员与产业人员占比",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][0],
			},
		]
	};
	$chart.init('#chart6', option);
}
//石油加工污染物产生情况
function chart7(data, ix){
	var option =  {
		legend: {
			show:false,
			data: data.legend,
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
				name: "技术经费投入占比",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][0],
			},
		]
	};
	$chart.init('#chart7', option);
}