$(document).ready(function(){
	getdata('/lc/gasIndex/chart1.json',chart1);
	getdata('/lc/gasIndex/chart2.json',chart2);
	getdata('/lc/gasIndex/chart3.json',chart3);
	getdata('/lc/gasIndex/chart4.json',chart4);
	getdata('/lc/gasIndex/chart5.json',chart5);
	getdata('/lc/gasIndex/main.json',main);
});
function main(data){
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
				name: "气代煤消费量",
				type: "line",
				smooth: true,
				showSymbol:false,
				itemStyle: {
					normal: {
					},
				},
				data: data[2],
			},
			{
				name: "增长趋率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						lineStyle: {
							type: 'dashed',
						}
					},
				},
				data: data[3],
			},
			{
				name: "气代油消费量",
				type: "line",
				smooth: true,
				showSymbol:false,
				itemStyle: {
					normal: {
					},
				},
				data: data[4],
			},
			{
				name: "增长率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						lineStyle: {
							type: 'dashed',
						}
					},
				},
				data: data[5],
			},
		]
	};
	$chart.init('#main',option);
}
//国内外天然气CO2排放系数对比
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
			name:'排放系数',
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
				name: '煤碳',
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
				name: '石油',
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
				name: '天然气',
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
	$chart.init('#chart1', option);
}
//天然气企业CO2排放量趋势
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
				data: data[2],
			},
			{
				name: "增长率",
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
				name: "单位CO2增长率",
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
//低碳科技支出与总支出占比
function chart3(data){
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
		color:['#FFD743','#2AB7FF','#30FFFE','#216FFF'],
		series: [
			{
				name: "低碳科技支出",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						barBorderRadius: 10,
					},
				},
				data: data[2],
			},
			{
				name: "总支出",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						barBorderRadius: 10,
					},
				},
				data: data[3],
			},
			{
				name: "占比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data[4],
			},
		]
	};
	$chart.init('#chart3', option);
}
//低碳技术研发人员与产业人员占比
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
				name: "低碳技术研发人员",
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
				name: "产业人员",
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
				name: "占比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37',
					},
				},
				data: data[4],
			},
		]
	};
	$chart.init('#chart4', option);
}
//低碳技术经费投入情况
function chart5(data){
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
				name: "VOC总量削减率",
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
	$chart.init('#chart5', option);
}