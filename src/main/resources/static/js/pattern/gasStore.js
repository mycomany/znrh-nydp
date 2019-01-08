$(document).ready(function(){
    getdata('/pattern/gasStore/chart1.json',chart1);
    getdata('/pattern/gasStore/chart2.json',chart2);
    chart3();
    getdata('/pattern/gasStore/chart4.json',chart4);
    getdata('/pattern/gasStore/main.json',main);
});

function chart1(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	option = {
			tooltip : {
		        trigger: 'axis'
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
		    grid: {
		        left: '4%',
		        right:'3%',
		        top:'10%',
		        bottom:'18%',
		        containLabel: true
		    },
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: '#59ebe8',
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
		                fontSize: 10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
				 name: '十亿立方英尺',
				 nameGap:-1,
				 nameTextStyle:{
					padding:[0,0,0,85],
					align:'center',
					color:'#fff',
				},
		    	 min:20,
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: '#59ebe8',
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
		                 fontSize: 10
		             },
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: '最低库存',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        z:10,
		        stack:'a',
		        itemStyle: {
	                normal: {
	                    color: '#FFD700'
	                },
	            },
	            areaStyle : {
	                normal:{
	                    opacity: 0
	                }
	            },
		        data: lineData3
		    },{
		        name: '平均库存',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        stack:'a',
		        itemStyle: {
	                normal: {
	                    color: '#2ce610',
	                    type: 'dashed'
	                },
	            },
	            areaStyle : {
	                normal:{
	                    color:'#2f75b5'
	                }
	            },
		        data: lineData2
		    },{
		        name: '最高库存',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        stack:'a',
		        itemStyle: {
	                normal: {
	                    color: '#1d6fd3'
	                },
	            },
	            areaStyle : {
	                normal:{
	                    color:'#2f75b5'
	                }
	            },
		        data: lineData1
		    }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xData = data[2];
	var barData = data[3];
	    var option =  {
	    		tooltip : {
			        trigger: 'axis'
			    },
			    legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        x:'center',
			        bottom:'2%',
			        type:'scroll',
			        data: data[0],
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        }
			    },    
			    grid: {
			        left: '4%',
			        right:'3%',
			        top:'10%',
			        bottom:'18%',
			        containLabel: true
			    },
	        xAxis: [{
	            position: "bottom",
	            type: "category",
	            axisLabel: {
	                //interval: 0,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:10
	                },
	                rotate: 30,
	            },
	            axisLine:{
	                lineStyle:{
	                    color: '#59ebe8'
	                }
	            },
	            data: xData,
	        }],
	        yAxis: [{
	            type: 'value',
	            position: 'left',
	            max:300,
	            axisLabel: {
	            	formatter: '{value}%',
	                textStyle: {
	                    color: '#fff',
	                    fontStyle: 'normal',
	                    fontSize:10
	                }
	            },
	            axisLine: {
	            	lineStyle:{
	                    color: '#59ebe8'
	                }
	            },
	            axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
	            splitLine: {
	                show: false
	            }
	        },{
	        	name:'         十亿立方英尺',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,-110],
			    	align:'center',
			    	color:'#fff',
				},
	            type: 'value',
	            position: 'right',
	            axisLabel: {
	                textStyle: {
	                    color: '#fff',
	                    fontStyle: 'normal',
	                    fontSize:10
	                }
	            },
	            axisLine: {
	            	lineStyle:{
	                    color: '#59ebe8'
	                }
	            },
	            axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
	            splitLine: {
	                show: false
	            }
	        }],
	        series: [{
	            name: "偏离度",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: function (param){
	                		 if (param.value>0) {
	                			 return '#79D9F1';
							}else{
		                		 return '#ffe800';
							}
	                	 },
	                	 barBorderRadius: 50,
	                },
	            },
	            data: data[5],

	        },{
		        name: '库存水平',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        z:10,
		        yAxisIndex:1,
		        itemStyle: {
	                normal: {
	                	 color: '#28B639'
	                	 }
	            },
	            areaStyle : {
	                normal:{
	                    opacity: 0
	                }
	            },
		        data: data[3]
		    },{
		        name: '库存均值',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        z:10,
		        yAxisIndex:1,
		        itemStyle: {
	                normal: {
	                	 color: '#FFD200'
	                },
	            },
	            areaStyle : {
	                normal:{
	                    opacity: 0
	                }
	            },
		        data: data[4]
		    }]
	    }
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var option = {
		    title:{
				text:'十亿立方英尺',
				textStyle:{
					fontSize:10,
					color:'#fff'
				},
				top:10
			},
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: { //图例组件，颜色和名字
		        itemGap: 5, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'2%',
		        data: ["东部","中西部","中南部","洛基山","太平洋","阿拉斯加"],
		        textStyle: {
		            color: '#fff',
		            fontSize: 8,
		        }
		    },
		    series: [
				{
		        name: '美国天然气库存区域分布',
		        type: 'pie',
		        radius: '50%',
		        //roseType: 'radius',
		        center: ['50%', '43%'],
		        clockwise: false,
		        data: [
				{
		            value: 459,
		            name: "东部"
		        }, {
		            value: 456,
		            name: "中西部"
		        }, {
		            value: 850,
		            name: "中南部"
		        }, {
		            value: 138,
		            name: "洛基山"
		        }, {
		            value: 256,
		            name: "太平洋"
		        }, {
		            value: 34,
		            name: "阿拉斯加"
		        }],
				label: {
					formatter:'{c} ',

		        },
		        labelLine: {
		            normal: {
		                show: true
		            }
		        },
		        itemStyle: {
		            normal: {
		                borderWidth: 2,
		                borderColor: '#ffffff',
		            },
		            emphasis: {
		                borderWidth: 0,
		                shadowBlur: 10,
		                shadowOffsetX: 0,
		                shadowColor: 'rgba(0, 0, 0, 0.5)'
		            }
		        }
		    }],
		    color: [
		        '#00acee',
		        '#52cdd5',
		        '#79d9f1',
		        '#a7e7ff',
		        '#c8efff'
		    ]
		};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var option = {
		tooltip : {
			trigger: 'axis'
		},
		legend: { //图例组件，颜色和名字
			itemGap: 8, //图例每项之间的间隔
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
		grid: {
			left: '3%',
			right:'3%',
			top:'10%',
			bottom:'25%',
			containLabel: true
		},
		color:["#FFFFFF","#FFD200","#15C0FF","#7C7DFF","#3729FF","#366DFF"],
		tooltip: {
			trigger: 'axis'
		},
		xAxis: {
			position: "bottom",
			type: "category",
			axisLabel: {
				//interval: 0,
				textStyle: {
					color: '#fff',
					fontSize:10
				},
				//rotate: 30,
			},
			axisLine:{
				lineStyle:{
					color: '#59ebe8'
				}
			},
			data: data[2]
		},
		yAxis: {
			name: '十亿立方英尺',
			nameGap:-5,
			nameTextStyle:{
				padding:[0,0,0,85],
				align:'center',
				color:'#fff',
			},
			type: 'value',
			position: 'left',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontSize:10
				}
			},
			axisLine: {
				lineStyle:{
					color: '#59ebe8'
				}
			},
			axisTick: {
				color: '#0177d4',
				show: true
			},
			splitLine: {
				show: false
			}
		},
		series: [{
			name: data[0][0],
			type: 'line',
			symbol:'circle',
			stack: '总量',
			itemStyle: {
				normal: {
					opacity:0
				}
			},
			lineStyle:{
				normal:{
					color:'#FFFFFF'
				}
			},
			areaStyle: {
				normal: {
					color: '#FFFFFF',
					opacity:1
				}
			},
			data: data[3]
		}, {
			name: data[0][1],
			type: 'line',
			symbol:'circle',
			stack: '总量',
			itemStyle: {
				normal: {
					opacity:0
				}
			},
			lineStyle:{
				normal:{
					color:'#FFD200'
				}
			},
			areaStyle: {
				normal: {
					color: '#FFD200',
					opacity:1
				}
			},
			data: data[4]
		},{
			name: data[0][2],
			type: 'line',
			symbol:'circle',
			stack: '总量',
			itemStyle: {
				normal: {
					opacity:0
				}
			},
			lineStyle:{
				normal:{
					color:'#15C0FF'
				}
			},
			areaStyle: {
				normal: {
					color: '#15C0FF',
					opacity:1
				}
			},
			data: data[5]
		},{
			name:data[0][3],
			type: 'line',
			symbol:'circle',
			stack: '总量',
			itemStyle: {
				normal: {
					opacity:0
				}
			},
			lineStyle:{
				normal:{
					color:'#7C7DFF'
				}
			},
			areaStyle: {
				normal: {
					color: '#7C7DFF',
					opacity:1
				}
			},
			data: data[6]
		},{
			name: data[0][4],
			type: 'line',
			symbol:'circle',
			stack: '总量',
			itemStyle: {
				normal: {
					opacity:0
				}
			},
			lineStyle:{
				normal:{
					color:'#3729FF'
				}
			},
			areaStyle: {
				normal: {
					color: '#3729FF',
					opacity:1
				}
			},
			data: data[7]
		},{
			name: data[0][5],
			type: 'line',
			symbol:'circle',
			stack: '总量',
			itemStyle: {
				normal: {
					opacity:0
				}
			},
			lineStyle:{
				normal:{
					color:'#366DFF'
				}
			},
			areaStyle: {
				normal: {
					color: '#366DFF',
					opacity:1
				}
			},
			data: data[8]
		}]
	};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function main(data){
	var option = {
		tooltip:{
			trigger:'item',
			formatter:function(o){
				return o.seriesName + "<br/>" + o.name + "：" + o.value[2] + '十亿立方英尺';
			}
		},
		visualMap: {
			min: 0,
			max: 1000,
			dimension:2,
			//text: ['高','低'],
			itemHeight:100,
			itemWidth:15,
			textGap:15,
			seriesIndex:0,
			calculable:true,
			left:100,
			bottom:5,
			textStyle:{
				color:'#fff',
				fontSize: 10
			},
			color: ['#ff0','#f0e88c',]
		},
		title:[{
			text:'美国天然气库存区域分布  (2018-6)',
			//subtext:'单位：十亿立方英尺\n\n2018年6月',
			textStyle:{
				fontSize:16,
				color:'#29B8FF'
			},
			subtextStyle:{
				color:'#fff'
			},
			top:'3%',
			left:'center'
		},{
            text:'单位：十亿立方英尺',
            textStyle:{
                fontSize:10,
                color:'#fff'
            },
            subtextStyle:{
                color:'#fff'
            },
            bottom:140,
            left:100
        },],
		geo: {
			show: true,
			map: 'world',
			left:0,
			right:0,
			top:'17%',
			center:[-91.350707,40.18],
			zoom:2.0,
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false,
				}
			},
			roam: true,
			regions:[
				{
					name:'United States',
					itemStyle:{
						areaColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
								offset: 0,
								color: 'rgba(21, 127, 237,1)'
							}, {
								offset: 0.4,
								color: 'rgba(21, 127, 237,0.5)'
							}, {
								offset: 1,
								color: 'rgba(21, 127, 237,0.1)'
							}]
						),//'rgba(21, 127, 237, 0.5)',//'transparent',
					}
				}
			],
			itemStyle: {
				normal: {
					areaColor:'transparent',
					borderColor: '#38b8ff',
					borderWidth: 1,
					shadowColor: 'rgba(63, 218, 255, 0.3)',
					shadowBlur: 10
				},
				emphasis: {
					areaColor: '#2B91B7',
				}
			}
		},
		series : [
			{
				name: '库存变动',
				type: 'effectScatter',
				coordinateSystem: 'geo',
				data: data,
				symbolSize: function (val) {
					if(val[2] < 100)
						return 15;
					else
						return 15 + val[2] / 100;
				},
				showEffectOn: 'render',
				rippleEffect: {
					brushType: 'stroke'
				},
				hoverAnimation: true,
				label: {
					normal: {
						formatter: function(o){ return o.name + ' ：' + o.value[2]},
						position: 'left',
						show: true
					}
				},
				itemStyle: {
					normal: {
						color: '#F4E925',
						shadowBlur: 10,
						shadowColor: '#05C3F9'
					}
				},
				zlevel: 1
			},
		]
	};
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}
function getValue (data,name){
	for (var i = 0; i < data.length; i++) {
		if (data[i].name == name) {
			return data[i].value;
		}
	}
}