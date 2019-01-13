$(document).ready(function(){
   getdata('/consume/gas/chart1.json',chart1);
   getdata('/consume/gas/chart2.json',chart2);
   getdata('/consume/gas/chart3.json',chart3);
   getdata('/consume/gas/chart4.json',chart4);
   getdata('/consume/gas/chart5.json',chart5);
   getdata('/consume/gas/chart6.json',chart6);
   main();
});

function chart1(data){
	option = {
			grid: {
				left: '3%',
				right:'3%',
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
			        type:'scroll',
			        data: data[0],
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        }
			    },  
			calculable: true,
			tooltip: {
				trigger: 'axis',
				axisPointer: { // 坐标轴指示器，坐标轴触发有效
					type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
				}
			},
		    xAxis: {
		        data: data[1],
		        axisLine: {
		            lineStyle: {
		                color: '#0177d4'
		            }
		        },
		        axisLabel: {
		            color: '#fff',
		            fontSize: 10
		        }
		    },
		    yAxis: [{
		        /*name: "（人）",
		        nameTextStyle: {
		            color: '#fff',
		            fontSize: 16
		        },*/
		        axisLine: {
		            lineStyle: {
		                color: '#0177d4'
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
		        //interval:500,
		        //max:5000

		    },{
				type: "value",
				position: 'right',
				axisLine: {
					lineStyle:{
						color: '#fff'
					}
				},
				axisTick: {
					show: true
				},
				axisLine: {
					lineStyle:{
						color: '#0177d4'
					}
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					show: true,
					formatter: '{value}%',
					textStyle: {
						color: '#fff',
						fontSize:8
					}
				}
			}],
		    series: [{
		    	name:'消费量(10亿立方米)',
		        type: 'bar',
		        barWidth: '30%',
		        itemStyle:{
		            normal:{
		                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                    offset: 0,
		                    color: '#00b0ff'
		                }, {
		                    offset: 0.8,
		                    color: '#7052f4'
		                }], false)
		            }
		        },
		        data: data[2]
		    },
			{
				name: "消费量增长率",
				type: "line",
				smooth: true,
	            symbol: 'circle',
	            symbolSize:5,
				barWidth: '30%',
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#ff5600',
						//barBorderRadius: 50,
					},
				},
				data: data[3],

			}]
		};
	var myChart = echarts.init($('#chart1')[0]);
	 myChart.setOption(option);	
}

function chart2(data){
    var itemStyle = {
        normal: {},
        emphasis: {
            barBorderWidth: 1,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    };
    for(var i = 0; i < data[3].length; i++)
        data[3][i] = -1*data[3][i];
    var option = {
        color:['#36b8ff','#61ffff','#e1e1e2','#ffa24c'],
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
	        bottom:'1%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },
	    tooltip: {
			trigger: "axis"
		}, 
        xAxis: {
        	 axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            },
   	        },
            splitLine: {
                show: false
            },
            type: 'category',
            silent: false,
            splitArea: {show: false},
            data:data[1]
        },
        yAxis: [{
        	name:'    亿立方米',
        	nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,45],
		    	align:'center',
		    	color:'#fff',
			},
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
  	            lineStyle: {
  	                color: '#59ebe8'
  	            }
  	        },
  	       axisLabel: {
  	            inside: false,
  	            textStyle: {
  	                color: '#fff',
  	                fontWeight: 'normal',
  	                fontSize: 10
  	            },
  	        }
        }, {
            invese:true,
            position: 'left',
            nameLocation: 'start',
            splitArea: {
                show: false
            },
            splitLine: {
                show: false
            },
            axisLine: {
  	            lineStyle: {
  	                color: '#59ebe8'
  	            }
  	        },
  	       axisLabel: {
  	            inside: false,
  	            textStyle: {
  	                color: '#fff',
  	                fontWeight: 'normal',
  	                fontSize: 10
  	            },
  	        },
        },{
        	 axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            },
   	         formatter:function(v){
                 return v + '%';
             }
   	        },
            splitLine:{
                show:false
            },
        }],
        series: [{
            name: data[0][0],
            type: 'bar',
            stack:'one',
            itemStyle: itemStyle,
            data: data[2]
        }, {
            name: data[0][1],
            type: 'bar',
            stack:'one',
            itemStyle: itemStyle,
            data: data[3]
        }, {
            name: data[0][2],
            yAxisIndex:0,
            type: 'line',
            showSymbol:false,
            data: data[4]
        }, {
            name: data[0][3],

            yAxisIndex:2,
            type: 'line',
            data: data[5]
        }]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var seriesData = [];
    for(var i = 2; i < data.length; i++){
        var o = {
            name:data[0][i-2],
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize:5,
            data: data[i]
        };
        seriesData.push(o);
    }
    var option = {
    		tooltip: {
    			trigger: "axis"
    		}, 
        color:['#ff3481','#ffa24c','#61ffff','#2874ff','#ac9857','#8121dd'],
        grid: {
			 left: '5%',
	   		 right:'5%',
  			  top:'10%',
  			  bottom:'18%',
  			 containLabel: true
  			 },
	    legend: { //图例组件，颜色和名字
	        itemGap: 2, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'1%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },
        xAxis: {
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	     axisLabel: {
	            color: '#fff',
	            fontSize: 10
	        },
            splitLine: {
                show: false
            },
            type: 'category',
            data:data[1]
        },
        yAxis: {
        	name:'    亿立方米',
			nameGap:-5,
			nameTextStyle:{
				padding:[0,0,0,45],
				align:'center',
				color:'#fff',
			},
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                //fontWeight: 'normal',
   	                fontSize: 10
   	            },
   	         //formatter:function(val){ return val; },
   	        },
            splitLine:{
                show:false
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var color = ['#fb734e', '#e32f46', '#94d96c', '#0bbcb7', '#1a9bfc', '#7049f0'];

	var label = {
	    normal: {
	        show: false,
	        position: 'right',
	        distance: 10,
	        formatter: function(param) {
	            return param.value + '%';
	        },
	        textStyle: {
	            color: '#ffffff',
	            fontSize: '16',
	        }
	    }
	};
	var ds = [];
	for (var i = 0; i < data[2].length; i++) {
		ds.push(data[2][i]+10);
	}


	var series = [];
	
	    series.push( {
	        name: '消费量11',
	        type: 'bar',
	        xAxisIndex: 1,
	        barGap: '140%',
	        data: data[2],
	        barWidth: '30%',
	        itemStyle: {
	            normal: {
	                color: '#00ceff',
	                barBorderRadius: [5,5,0,0],
	            }
	        },
	        z: 1
	    }, {
	        name: '消费量',
	        type: 'bar',
	        xAxisIndex: 2,
	        data: ds,
	        barWidth: '40%',
	        barGap: 1,
	        itemStyle: {
	            normal: {
	                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	                    offset: 0,
	                    color: '#ffff00'
	                }, {
	                    offset: 1,
	                    color: '#ffb200'
	                }]),
	                barBorderRadius: [5,5,0,0],
	            }
	        },
	        z: 0
	    },
		{
			name: "占一次能源消费比重",
			type: "line",
			smooth: true,
			symbol: 'circle',
			symbolSize:5,
			barWidth: '30%',
			yAxisIndex: 1,
			itemStyle: {
				normal: {
					color: '#ff5600',
					//barBorderRadius: 50,
				},
			},
			data: data[3]

		});
	var option = {
	    grid: {
	        left: '3%',
	        right: '3%',
	        bottom: '15%',
	        top: '10%',
	        containLabel: true
	    },
	    tooltip: {
	        show: "true",
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
	            shadowStyle: {
	                color: 'rgba(112,112,112,0)',
	            },
	        },
	        // formatter: '{b}<br />{a0}: {c0}%<br />{a1}: {c1}%<br />{a2}: {c2}%',
	        formatter: function(params) {
	        	//alert(JSON.stringify(params));
	            return params[0].name + '<br />天然气' + params[2].seriesName + ' ：' + params[2].data +  ' 百万吨石油当量<br />' + params[0].seriesName + ' ：' + params[0].data+' %' ;
	        },
	        //backgroundColor: 'rgba(0,0,0,0.7)', // 背景
	        padding: [8, 10], //内边距
	        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
	    },
	    legend: { //图例组件，颜色和名字
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			bottom:'1%',
			data: data[0],
			textStyle: {
				color: '#fff',
				fontSize: 10
			}
		},
	    xAxis: [{
	    	position: "bottom",
			type: "category",
			axisLabel: {
				interval: 0,
				textStyle: {
					color: '#fff',
					fontSize:10
				},
				rotate: 30,
			},
			axisLine:{
				lineStyle:{
					color: '#38b8ff'
				}
			},
	        data:data[1]
	    }, {
	        type: 'category',
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        },
	        splitArea: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        data: data[1]
	    }, {
	        type: 'category',
	        axisLine: {
	            show: false
	        },
	        axisTick: {
	            show: false
	        },
	        axisLabel: {
	            show: false
	        },
	        splitArea: {
	            show: false
	        },
	        splitLine: {
	            show: false
	        },
	        data: data[1]
	    }],
	    yAxis: [
				{
					name: '',
					type: 'value',
					splitNumber:3,
					//max:5,
					axisLabel: {
						textStyle: {
							color: '#fff',
							fontStyle: 'normal',
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
					splitNumber:3,
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
	    series: series
	   
	};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}


function chart5(data){
    var seriesData = [];
    for(var i = 2; i < data.length; i++){
        var o = {
            name:data[0][i-2],
            type:'line',
            data:data[i]
        };
        seriesData.push(o);
    }
    var option = {
    		tooltip: {
    			trigger: "axis"
    		}, 
        color:['#e1e1e2','#ffd300','#7b7cff','#463ffe','#386efe','#ff3481'],
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
	        left:'4%',
	        right:'4%',
	        bottom:'1%',
	        data: data[0],
	        type:'scroll',
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },
        xAxis: {
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            }
   	        },
            splitLine: {
                show: false
            },
            type: 'category',
            data:$chart.xtime(data[1])
        },
        yAxis: {
        	name:'           美元/MMBtu',
        	nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,45],
		    	align:'center',
		    	color:'#fff',
			},
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            }
   	        },
            axisTick:{
                show:true
            },
            splitLine: {
                show: false
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(data){
    var option = {
        tooltip:{
            trigger: 'axis',
            axisPointer : {
                type : 'shadow'
            }
        },
        color:['#36b8ff','#61ffff','#ff0'],
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
	        bottom:'1%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },
        xAxis: {
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            }
   	        },
            splitLine: {
                show: false
            },
            type: 'category',
            data:data[1]
        },
        yAxis: {
        	name:'      元/立方米',
        	nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,45],
		    	align:'center',
		    	color:'#fff',
			},
        	axisLine: {
   	            lineStyle: {
   	                color: '#59ebe8'
   	            }
   	        },
   	       axisLabel: {
   	            inside: false,
   	            textStyle: {
   	                color: '#fff',
   	                fontWeight: 'normal',
   	                fontSize: 10
   	            }
   	        },
            splitLine:{
                show:false
            },
            type: 'value'
        },
        series: [
            {
                name:data[0][0],
                type: 'bar',
                data: data[2]
            },
            {
                name:data[0][1],
                type: 'bar',
                data: data[3]
            },
            {
                name:data[0][2],
                type: 'bar',
                data: data[4]
            },
        ]
    };
    var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
    /*myChart.on('click', function (params) {
        gourl('gasMarketDetail5');
    });*/
}

function main(){
    getdata('/consume/gas/main.json', function(data){
        var data1 = data.map(function(o){
            return [o.value[0], o.value[5], o.name];
        });
        var option = {
            legend: {
                show:false,
                data: ['天然气消费'],
                bottom: 10
            },
            visualMap: {
                type: 'piecewise',
                splitNumber: 3,
                inverse: true,
                seriesIndex:0,
                itemWidth: 20,
    	        itemHeight: 12,
                dimension:1,
                pieces: [{
                    max: 11.9,
                    label:'≤12%',
                    color: '#ffffff'
                }, {
                    min: 12,
                    max: 21.9,
                    label:'12%-22%',
                    color: '#4e83c4'
                }, {
                    min: 22,
                    label:'≥22%',
                    color: '#0035ff'
                }],
                right: 20,
                top: 40,
                textStyle: {
                    color: '#fff'
                }
            },
            title: [{
                text: '中国省域天然气消费分布图   (2016)',
                left: 'center',
                top:'3%',
                textStyle:{
                    color:'#29B8FF',
                    fontSize: 16
                }
            }],
            tooltip: {
                trigger: 'axis',
                axisPointer:{
                    type:'cross',
                    axis:'y'
                },
                formatter: function (v){
                	return v[0].value[2]+'<br/>消费总量：'+v[0].value[0]+' (亿立方米)<br/>居民消费占比：'+v[0].value[1]+'%';
                	//alert(JSON.stringify(v));
                }
            },
            grid: {
                top: 60,
                bottom: 40
            },
            xAxis: {
            	name:'消费总量\n\n(亿立方米)',
            	nameTextStyle:{
			    	align:'center',
			    	color:'#4cedf9',
				},
                type: 'value',
                splitLine: {
                    show:false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            yAxis: {
            	name:'居民消费占比',
            	nameTextStyle:{
			    	align:'center',
			    	color:'#4cedf9',
				},
                type: 'value',
                splitLine: {
                    show:false,
                    lineStyle: {
                        type: 'dashed'
                    }
                },
                axisLabel: {
                	formatter: '{value}%',
                    textStyle: {
                        color: '#fff'
                    }
                },
            },
            series: [{
                name: '天然气消费',
                type: 'scatter',
                symbolSize: function(data) {
                    return data[0] / 6;//Math.sqrt(data[0]);
                },
                label: {
                    normal: {
                        show: true,
                        formatter: function(param) {
                            return param.data[2];
                        },
                        color:'#fff',
                        position: 'top'
                    }
                },
                itemStyle: {
                    normal: {
                        shadowBlur: 10,
                        shadowColor: 'rgba(25, 100, 150, 0.5)',
                        shadowOffsetY: 5,
                        color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                            offset: 0,
                            color: 'rgb(129, 227, 238)'
                        }, {
                            offset: 1,
                            color: 'rgb(25, 183, 207)'
                        }])
                    }
                },
                data: data1
            }]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}