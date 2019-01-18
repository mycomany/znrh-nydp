$(document).ready(function(){
	getdatax('/clean/elecIndex/chart1.json',chart1);
	getdata('/clean/elecIndex/chart2.json',chart2);
	getdata('/clean/elecIndex/chart3.json',chart3);
	getdatax('/clean/elecIndex/chart4.json',chart4);
	getdatax('/clean/elecIndex/chart5.json',chart5);
	getdatax('/clean/elecIndex/chart6.json',chart6);
	getdatax('/clean/elecIndex/chart7.json',chart7);
});
var fontsize = 9;
//非化石能源发电量趋势
function chart1(data, ix){
	var option =  {
		legend: {
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
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
				color: '#c2c8cf',
				fontSize: fontsize  //ty
			}
		}],
		yAxis: [
			{
				name:'万千瓦时',
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
					fontSize: fontsize  //ty
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
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(90,203,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(90,203,255,0.2)'
	                            }
	                        ]
	                    ),
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][1],
			}
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
			data:data[0],
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
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
					color: '#c2c8cf ',
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
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: fontsize
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
					color: '#c2c8cf',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: fontsize
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
	series: [{
        type: 'liquidFill',
        color:['#0082ff','#00d6ff'],
        data:  [0.25,  0.19],
        radius: '47%',
        label: {
            formatter: data[2].name+'\n\n\n'+data[2].value.toFixed(2)+'%',
            textStyle: {
                fontSize: 14,
                fontFamily: 'Lobster Two'
            }
        },
        center:['16%','50%'],
        outline: {
            show: false
        }
    },{
        type: 'liquidFill',
        data:[0.45,  0.42,0.35,0.30],
        radius: '70%',
        label: {
            formatter: data[0].name+'\n\n\n\n'+data[0].value.toFixed(2)+'%',
            textStyle: {
                fontSize: 16,
                fontFamily: 'Lobster Two'
            }
        },
        center:['50%','50%'],
        outline: {
            show: true
        }
    },{
        type: 'liquidFill',
        data: [0.3711,  0.33,0.30,0.28],
        radius: '47%',
        label: {
            formatter: data[1].name+'\n\n\n'+data[1].value.toFixed(2)+'%',
            textStyle: {
                fontSize: 14,
                fontFamily: 'Lobster Two'
            }
        },
        center:['84%','50%'],
        outline: {
            show: false
        }
    }]
	}
	$chart.init('#chart3', option,'pie');
}
//污染物排放趋势
function chart4(data, ix){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
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
					color: '#c2c8cf ',
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
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: fontsize
				},
			},
			data:data.xData,
		}],
		yAxis: [{
			name:'吨',
			nameGap:-5,
			nameTextStyle:{
				padding:[0,0,0,15],
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
					fontSize: fontsize
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
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
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
				name: "脱硫效率",
				type: "bar",
				barWidth: '30%',
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
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][0],
			}
		]
	};
	$chart.init('#chart5', option);
}
//脱硝效率排名
function chart6(data, ix){
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
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
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
				name: "脱硝效率",
				type: "bar",
				barWidth: '30%',
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
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][0],
			}
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
				color:'#c2c8cf',
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
								color:'#c2c8cf',
								fontSize: fontsize
							},
						}
					}
				},
			labelLine: {
                normal: {
                    show: true,
                    length: 10,
                    length2: 7
                }
            },
			}
		]
	};
	$chart.init('#chart7', option);
}