$(document).ready(function(){
	getdata('/lc/gasIndex/chart1.json',chart1);
	getdatax('/lc/gasIndex/chart2.json',chart2);
	getdatax('/lc/gasIndex/chart3.json',chart3);
	getdatax('/lc/gasIndex/chart4.json',chart4);
	getdatax('/lc/gasIndex/chart5.json',chart5);
	getdata('/lc/gasIndex/main.json',main);
});
var fontsize = 9;
function main(data){
	var option =  {
		legend: {
			data: data[0],
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 12,
	        }
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
				color: '#c2c8cf',
				fontSize: 10
			}
		}],
		yAxis: [
			{
				name:'亿立方米',
				nameGap:-1,
				nameTextStyle:{
					padding:[0,0,0,55],
					align:'center',
					color:'#c2c8cf',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: 11,
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
					color: '#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: 11,
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
				name: "气代煤增长",
				type: "line",
				smooth:true,
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
				name: "气代油增长",
				type: "line",
				smooth:true,
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
			data:data[0],
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
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
					color: '#c2c8cf ',
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
					color: '#c2c8cf',
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
				padding:[0,0,0,45],
				align:'center',
				color:'#c2c8cf',
				fontSize: fontsize
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
					color: '#c2c8cf',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: 8
				},
				formatter: '{value}'
			}
		}],
		series: [
			{
				name: '天然气',
				type:'bar',
				barWidth:15,
				//stack:'g',
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(46,255,183,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(46,255,183,0.2)'
	                            }
	                        ]
	                    )
					},
				},
				data: data[2]
			}]
	};
	$chart.init('#chart1', option);
}
//天然气企业CO2排放量趋势
function chart2(data, ix){
	var option =  {
		legend: {
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color:['#FFD743','#2AB7FF','#30FFFE','#216FFF'],
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
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
			{
				name:'',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,25],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
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
					color: '#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
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
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(42,183,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(42,183,255,0.2)'
	                            }
	                        ]
	                    )
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "增长率",
				type: "line",
				smooth:true,
				yAxisIndex:1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][2],
			},
			{
				name: "排放系数增长率",
				type: "line",
				smooth:true,
				yAxisIndex:1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][3],
			},
		]
	};
	$chart.init('#chart2', option);
}
//低碳科技支出与总支出占比
function chart3(data, ix){
	var option =  {
		legend: {
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
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
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
			{
				name:'',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,25],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
				nameTextStyle: {
					color: '#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
					formatter: '{value}%'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}],
		color:['#3fe5f4','#2AB7FF','#30FFFE','#216FFF'],
		series: [
			{
				name: "研发人员与产业人员占比",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(63,229,244,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(63,229,244,0.2)'
	                            }
	                        ]
	                    ),
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][0],
			},
		]
	};
	$chart.init('#chart3', option);
}
//低碳技术研发人员与产业人员占比
function chart4(data,ix){
	var option =  {
		legend: {
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color:['#2b88ff','#2AB7FF','#30FFFE','#216FFF'],
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
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
			{
				name:'',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,25],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
				nameTextStyle: {
					color: '#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
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
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(43,136,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(43,136,255,0.2)'
	                            }
	                        ]
	                    ),
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][0],
			},
		]
	};
	$chart.init('#chart4', option);
}
//低碳技术经费投入情况
function chart5(data, ix){
	var option =  {
		legend: {
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
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
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
			{
				name:'',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,45],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
				nameTextStyle: {
					color: '#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
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
				barWidth:"30%",
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(110,213,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(110,213,255,0.2)'
	                            }
	                        ]
	                    ),
					},
				},
				data: data.data[ix][0],
			},
		]
	};
	$chart.init('#chart5', option);
}
