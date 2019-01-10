$(document).ready(function(){
	getdata('/market/finance/chart1.json',chart1);
	getdata('/market/finance/chart2.json',chart2);
	getdata('/market/finance/near10Order.json',chart3);
	getdata('/market/finance/chart4.json',chart4);
	getdata('/market/finance/chart5.json',chart5);
	getdata('/market/finance/chart6.json',chart6);
	getdata('/market/finance/chart7.json',chart7);
	getdata('/market/finance/chart8.json',chart8);
	getdata('/market/finance/chart9.json',chart9);
});

function chart1(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var option =  {
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		legend: { //图例组件，颜色和名字
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			x:'center',
			bottom:'2%',
			data: data[0],
			textStyle: {
				color: '#fff',
				fontSize: 10,
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			type: "category",
			axisLine: {
				lineStyle: {
					color: '#38b8ff',
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
				color: '#38b8ff',
				show: true
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontSize: 10
				},
			},
			data: xData,
		}],
		yAxis: [
			{
			name: '',
			position: 'left',
			axisLabel: {
				formatter: function (v) {
					return v/10000+'万';
				},
				textStyle: {
					color: '#fff',
					fontSize:10
				}
			},
			axisLine: {
				lineStyle:{
					color: '#38b8ff'
				}
			},
			axisTick: {
				color: '#38b8ff',
				show: true
			},
			splitLine: {
				show: false
			}
		},{
			type: "value",
			min:390,
			position: 'right',
			axisTick: {
				show: true
			},
			axisLine: {
				lineStyle:{
					color: '#38b8ff'
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize:10
				}
			}
		}],
		series: [{
			name: "SC首行成交量(手)",
			type: "line",
			//smooth: true,//值为true折线平滑    值为false折线曲折
			symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
			showSymbol: false,//true 为拐点处有点  false 为没有
			//symbolSize:7,//拐点  点的大小
			lineStyle:{
				width:2
			},
			itemStyle: {
				normal: {
					color: '#00FFFF'
				},
			},
			data: lineData1,

		}, {
			name: "SC首行合约结算价(元/桶)",
			type: "line",
			symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
			showSymbol: false,//true 为拐点处有点  false 为没有
			yAxisIndex: 1,
			lineStyle:{
				width:2
			},
			itemStyle: {
				normal: {
					color: '#E9DC37'
				},
			},
			data: lineData2,

		}]
	};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		    	left: '5%',
	   			  right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
		    },
	        legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'2%',
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },  
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: '#38b8ff',
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
	            	color: '#38b8ff',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontSize: 10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 min:410,
		    	 axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: '#38b8ff',
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
		                 fontSize: 10
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: '2018/6/22(元/桶)',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#54FF9F'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '2018/6/15(元/桶)',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#FFD700'
	                },
	            },
		        data: lineData2
		    }]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	 var option =  {
			 grid: {
				 left: '5%',
	   			  right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
		    },
		        legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        x:'center',
			        bottom:'2%',
			        data: data[0],
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        }
			    },
		        tooltip: {
		            trigger: 'axis',
		            axisPointer: { // 坐标轴指示器，坐标轴触发有效
		                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		            }
		        },
		        xAxis: [{
		        	type: "category",
		            axisLine: {
		                lineStyle: {
		                	 color: '#38b8ff',
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
		            	color: '#38b8ff',
		                show: true
		            },
		            splitArea: {
		                show: false
		            },
		            axisLabel: {
		                inside: false,
		                textStyle: {
		                    color: '#fff',
		                    fontSize: 10
		                },
		            },
		            data: xData,
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            axisLabel: {
		            	 formatter: function (v) {
		            		 return v/10000+'万';
		            	 },
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                }
		            },
		            axisLine: {
		            	lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		            splitLine: {
		                show: false
		            }
		        },{
		            type: "value",
		            position: 'right',
		            axisLine: {
		            	lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            axisTick: {
		                show: true
		            },
		            splitLine: {
		                show: false
		            },
		            axisLabel: {
		                show: true,
		                formatter: function(param) {
		                    return param + '%';
		                },
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                }
		            }
		        }],
		        series: [{
		            name: "期货持仓总量(手)",
		            type: "line",
		            //smooth: true,
			        symbol:'circle',
			        showSymbol: false,
		            itemStyle: {
		                normal: {
		                    color: '#4876FF'
		                },
		            },
		            data: lineData1,

		        }, {
		            name: "非商业净多仓占比(%)",
		            type: "line",
		            //smooth: true,
			        symbol:'circle',
			        showSymbol: false,
		            yAxisIndex: 1,
		            itemStyle: {
		                normal: {
		                    color: '#E9DC37'
		                },
		            },
		            data: lineData2,

		        }]
		    }
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		    	left: '5%',
	   			  right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
		    },
	        legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'2%',
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: '#38b8ff',
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
	            	color: '#38b8ff',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontSize: 10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: '#38b8ff',
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
		                 fontSize: 10
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: 'CL1-CL3(美元/桶)',
		        type: 'line',
		        symbol:'circle',
		        showSymbol: false,
		        smooth: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#97FFFF'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: 'CL1-CL6(美元/桶)',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:1.5
		        },
		        itemStyle: {
	                normal: {
	                    color: '#8A2BE2'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: 'CL1-CLl2(美元/桶)',
		        type: 'line',
		        symbol:'circle',
		        showSymbol: false,
		        //smooth: true,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#EEC900'
	                },
	            },
		        data: lineData3
		    }]
		};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		    	left: '5%',
	   			  right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
		    },
	        legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'2%',
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: '#38b8ff',
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
	            	color: '#38b8ff',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontSize: 10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: '#38b8ff',
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
		                 fontSize: 10
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: 'CO1-CO3(美元/桶)',
		        type: 'line',
		        smooth: false,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#97FFFF'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: 'CO1-CO6(美元/桶)',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#8A2BE2'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: 'CO1-CO12(美元/桶)',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#EEC900'
	                },
	            },
		        data: lineData3
		    }]
		};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
		    	left: '5%',
	   			  right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
		    },
	        legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
				type:'scroll',
				pageButtonItemGap:1,
				pageTextStyle:{
					color:'#fff',
				},
		        bottom:'2%',
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: '#38b8ff',
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
	            	color: '#38b8ff',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontSize:10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: '#38b8ff',
		             }
		         },
		         splitLine: {
		        	 show: false
		         },
		         axisLabel: {
		             textStyle: {
		                 color: '#fff',
		                 fontSize: 10
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: 'Brent-WTI(美元/桶)',
		        type: 'line',
		        smooth: false,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#97FFFF'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: 'Brent-Dubai(美元/桶)',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#8A2BE2'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: 'LLS-WTI(美元/桶)',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#EEC900'
	                },
	            },
		        data: lineData3
		    }]
		};
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}

function chart7(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	 var option =  {
			 grid: {
				 left: '5%',
	   			  right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
		    },
		        legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        x:'center',
			        bottom:'2%',
			        data: data[0],
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        }
			    },
		        tooltip: {
		            trigger: 'axis',
		            axisPointer: { // 坐标轴指示器，坐标轴触发有效
		                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		            }
		        },
		        xAxis: [{
		        	type: "category",
		            axisLine: {
		                lineStyle: {
		                	 color: '#38b8ff',
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
		            	color: '#38b8ff',
		                show: true
		            },
		            splitArea: {
		                show: false
		            },
		            axisLabel: {
		                inside: false,
		                textStyle: {
		                    color: '#fff',
		                    fontSize: 10
		                },
		            },
		            data: xData,
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            axisLabel: {
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                }
		            },
		            axisLine: {
		            	lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		            splitLine: {
		                show: false
		            }
		        }],
		        series: [{
		            name: "柴油-WTI裂解价差(美分/加仑)",
		            type: "line",
		            symbol:'circle',
			        showSymbol: false,
			        lineStyle:{
			        	width:2
			        },
		            itemStyle: {
		                normal: {
		                    color: '#00FFFF'
		                },
		            },
		            data: lineData1,

		        }, {
		            name: "汽油-WTI裂解价差(美分/加仑)",
		            type: "line",
		            symbol:'circle',
			        showSymbol: false,
			        lineStyle:{
			        	width:2
			        },
		            itemStyle: {
		                normal: {
		                    color: '#E9DC37'
		                },
		            },
		            data: lineData2,

		        }]
		    }
	var myChart = echarts.init($('#chart7')[0]);
    myChart.setOption(option);
}

function chart8(data){
	var xData = data[2];
	var lineData1 = data[3];
	 var option =  {
			 grid: {
				 left: '5%',
	   			  right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
		    },
		        legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        type:'scroll',
					pageButtonItemGap:1,
					pageTextStyle:{
						color:'#fff',
					},
			        bottom:'2%',
			        data: data[0],
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        }
			    },
		        tooltip: {
		            trigger: 'axis',
		            axisPointer: { // 坐标轴指示器，坐标轴触发有效
		                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
		            }
		        },
		        xAxis: [{
		        	type: "category",
		            axisLine: {
		                lineStyle: {
		                	 color: '#38b8ff',
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
		            	color: '#38b8ff',
		                show: true
		            },
		            splitArea: {
		                show: false
		            },
		            axisLabel: {
		                inside: false,
		                textStyle: {
		                    color: '#fff',
		                    fontSize: 10
		                },
		            },
		            data: xData,
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            axisLabel: {
		                textStyle: {
		                    color: '#fff',
		                    fontSize:10
		                }
		            },
		            axisLine: {
		            	lineStyle:{
		                    color: '#38b8ff'
		                }
		            },
		            axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		            splitLine: {
		                show: false
		            }
		        }],
		        series: [{
		            name: "ICE柴油-Brent(美元/桶)",
		            type: "line",
		            symbol:'circle',
			        showSymbol: false,
			        lineStyle:{
			        	width:2
			        },
		            itemStyle: {
		                normal: {
		                    color: '#00FFFF'
		                },
		            },
		            data: lineData1,

		        }]
		    }
	var myChart = echarts.init($('#chart8')[0]);
    myChart.setOption(option);
}

function chart9(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
	   			  left: '5%',
	   			  right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
		    },
	        legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        bottom:'2%',
				type:'scroll',
				pageButtonItemGap:1,
				pageTextStyle:{
					color:'#fff',
				},
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: '#38b8ff',
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
	            	color: '#38b8ff',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontSize: 10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#38b8ff',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: '#38b8ff',
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
		                 fontSize: 10
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: 'LLS GULF COAST 321(美元/桶)',
		        type: 'line',
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#97FFFF'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: 'Brent-NWE 321(美元/桶)',
		        type: 'line',
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#8A2BE2'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: 'WTI Cushing-USGC 321(美元/桶)',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        lineStyle:{
		        	width:2
		        },
		        itemStyle: {
	                normal: {
	                    color: '#EEC900'
	                },
	            },
		        data: lineData3
		    }]
		};
	var myChart = echarts.init($('#chart9')[0]);
    myChart.setOption(option);
}