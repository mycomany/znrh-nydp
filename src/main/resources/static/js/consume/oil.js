$(document).ready(function(){
    getdata('/consume/oil/chart1.json',chart1);
    getdata('/consume/oil/chart2.json',chart2);
    getdata('/consume/oil/chart3.json',chart3);
    getdata('/consume/oil/chart4.json',chart4);
    getdata('/consume/oil/chart5.json',chart5);
    getdata('/consume/oil/chart6.json',chart6);
    getdata('/consume/oil/chart7.json',chart7);
    main();

});

function chart1(datas){
	var sourceBar = {
		    "itemData": datas[1],
		    "seriesData": datas[2]
		}
		var itemData = sourceBar.itemData;
		var seriesData = sourceBar.seriesData;
		var tooltip = sourceBar.tooltip
		// var backgroundList = ['#0068b7', '#8c97cb', '#aa89bd', '#f6b37f', '#e27e34'];
		var color = ['#00bfff', '#38a97d']
		
		var data = {};
		for (var k in itemData) {
		    data[itemData[k]] = seriesData[k];
		}

		var xAxisData = [];
		var dataArr = [];
		for (var i in data) {
		    xAxisData.push(i);
		    dataArr.push(data[i]);
		}

		option = {
		    grid: {
		        top: '7%',
		        left: '4%',
		        right: '4%',
		        bottom: '16%',
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
		        formatter: function(params) {
		            var unit = params[0].name.substring(params[0].name.indexOf('(') + 1, params[0].name.indexOf(')'));
		            return params[0].name + '<br/>消费量： ' + params[0].value + ''+ '<br/>增长率： ' + params[1].value + ' %';
		        },
		        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
		        padding: [8, 10], //内边距
		        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
		    },
		    color:['#00bfff', '#38a97d'],
		    legend: { //图例组件，颜色和名字
		        itemGap: 12, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'0%',
		        data: data[0],
		        textStyle: {
		            color: '#fff',
		            fontSize: 10,
		        }
		    },    
		    xAxis: [{
		        show: true,
		        /*name: '来源',
		        nameTextStyle: {
		            fontSize: 14,
		            fontFamily: 'Microsoft YaHei',
		            color: '#fff'
		        },*/
		        type: 'category',
		        nameLocation: 'end',
		        nameGap: 8,
		        axisLabel: {
		            fontSize: 10,
		            fontFamily: 'Microsoft YaHei',
		            color: "#fff",
		            //interval: 0,
		            //margin: 16,
		            formatter: function(params) {
		                if (params.length > 6) {
		                    params = params.substr(0, 6) + "...";
		                } else {
		                    params = params;

		                }
		                return params;
		            }
		        },
		        axisLine: {
		            show: true,
		            //symbol: ['none', 'arrow'],
		            lineStyle: {
		                color: '#05edfc'
		            }
		        },
		        data: xAxisData
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
		        data: xAxisData
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
		        data: xAxisData
		    }],
		    yAxis: [{
		        type: 'value',
		        name:'           百万吨油当量',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,45],
			    	align:'center',
			    	color:'#fff',
				},
		        splitLine: {
		            show: false
		        },
		        axisLabel: {
		            show: true,
		            fontSize: 10,
		            fontFamily: 'Arial',
		            color: "#fff"
		        },
		        axisLine: {
		            show: true,
		            //symbol: ['none', 'arrow'],
		            lineStyle: {
		                color: '#05edfc'
		            }
		        }
		    },{
		    	 type: 'value',
		         axisTick: {
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
		                 fontWeight: 'normal',
		                 fontSize: 10
		             },
		             formatter: '{value}%'
		         }
		        }],
		    series: [{
		    		name:'消费量',
		            type: 'bar',
		            stack: 1,
		            xAxisIndex: 0,
		            barWidth: '34%',
		            barGap: 5,
		            z: 2,
		            data: function() {
		                var itemArr = [];
		                for (var i = 1; i < (dataArr.length + 1); i++) {
		                    var item = {
		                        value: dataArr[i - 1],
		                        itemStyle: {
		                            normal: {
		                                barBorderRadius: 50,
		                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                                    offset: 0,
		                                    color: '#91dcf4'
		                                }, {
		                                    offset: 1,
		                                    color: '#00bfff'
		                                }]),
		                            }
		                        }
		                    };
		                    itemArr.push(item);
		                }
		                return itemArr;
		            }()
		        },
		        {
		        	name:'消费量',
		            type: 'bar',
		            xAxisIndex: 1,
		            barGap: '140%',
		            data: dataArr,
		            barWidth: '40%',
		            itemStyle: {
		                normal: {
		                    barBorderRadius: 50,
		                    color: '#0e2147'
		                }
		            },
		            z: 1
		        },
		        {
		            type: 'bar',
		            xAxisIndex: 2,
		            barWidth: '40%',
		            barGap: 1,
		            z: 0,
		            data: function() {
		                var itemArr = [];
		                for (var i = 1; i < (dataArr.length + 1); i++) {
		                    var item = {
		                        value: dataArr[i - 1],
		                        itemStyle: {
		                            normal: {
		                                barBorderRadius: 50,
		                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                                    offset: 0,
		                                    color: '#91dcf4'
		                                }, {
		                                    offset: 1,
		                                    color: '#00bfff'
		                                }]),
		                            }
		                        }
		                    };
		                    itemArr.push(item);
		                }
		                return itemArr;
		            }()
		        },
		        {
		            type: 'scatter',
		            hoverAnimation: false,
		            xAxisIndex: 2,
		            symbolOffset: [0, 0], //相对于原本位置的偏移量
		            symbolSize: 8,
		            z: 2,
		            data: function() {
		                var itemArr = [];
		                for (var i = 1; i < (dataArr.length + 1); i++) {
		                    var item = {
		                        value: 0,
		                        itemStyle: {
		                            normal: {
		                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                                    offset: 0,
		                                    color: '#00bfff'
		                                }, {
		                                    offset: 1,
		                                    color: '#035af6'
		                                }]),
		                            }
		                        }
		                    };
		                    itemArr.push(item);
		                }
		                return itemArr;
		            }()
		        },
				{
					name: "增长率",
					type: "line",
					barWidth: '30%',
					yAxisIndex: 1,
					itemStyle: {
						normal: {
							color: '#ff5600',
							//barBorderRadius: 50,
						},
					},
					data: datas[3],

				}
		    ]
		};

		function translateColor(index) {
		    if (index > 5) {
		        return translateColor(index - 5)
		    }
		    return index
		}
		var myChart = echarts.init($('#chart1')[0]);
		 myChart.setOption(option);	
}

function chart2(data){
	var xData = data[2];
	var lineData = data[4];
	var barData = data[3];
	var option =  {
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
					color: '#0177d4'
				}
			},
			data: xData,
		}],
		yAxis: [{
			 type: 'value',
		        name:'万吨',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,45],
			    	align:'center',
			    	color:'#fff',
				},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontSize:10
				}
			},
			axisLine: {
				lineStyle:{
					color: '#0177d4'
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
			name: data[0][0],
			type: "line",
			itemStyle: {
				normal: {
					color: '#E9DC37'
				},
			},
			data: data[2]

		}, {
			name: data[0][1],
			type: "line",
			itemStyle: {
				normal: {
					color: '#0089ff'
				},
			},
			data: data[3]

		}, {
			name: data[0][2],
			type: "line",
			itemStyle: {
				normal: {
					color: '#a800ff'
				},
			},
			data: data[4]

		}, {
			name: data[0][3],
			type: "line",
			itemStyle: {
				normal: {
					color: '#03a306'
				},
			},
			data: data[5]

		}]
	};
	var myChart = echarts.init($('#chart2')[0]);
	 myChart.setOption(option);	
}

function chart3(data){
	 var option = {
		    	tooltip: {
				   trigger: "axis"
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
			        type:'scroll',
			        data: data[0],
			        textStyle: {
			            color: '#fff',
			            fontSize: 10,
			        }
			    }, 
		        xAxis: {
		        	axisLine: {
			            lineStyle: {
			                color: '#38b8ff'
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
		            data:data[1]
		        },
		        yAxis: [{
		        	name:' 元/升',
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
			            inside: false,
			            textStyle: {
			                color: '#fff',
			                fontWeight: 'normal',
			                fontSize: 10
			            },
			        },
		            splitLine:{
		                show:false
		            },
		            type: 'value'
		        },{
		        	axisLine: {
			            lineStyle: {
			                color: '#38b8ff'
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
		            type: 'value'
		        }],
		        series: [
		            {
		                name:data[0][0],
		                type: 'bar',
		                yAxisIndex:0,
		                barWidth: "30%",
		                itemStyle: {
		                    normal: {
		                        color: '#61ffff'
		                    },
		                },
		                zlevel:1,
		                data: data[2]
		            },
		            {
		                name:data[0][2],
		                type: 'bar',
		                barWidth: "30%",
		                yAxisIndex:0,
		                itemStyle: {
		                    normal: {
		                        color: '#2874ff'
		                    },
		                },
		                zlevel:1,
		                data: data[4]
		            },
		            {
		                name:data[0][1],
		                yAxisIndex:1,
		                type:'line',
		                smooth: true,
			            symbol: 'circle',
			            symbolSize:5,
			            itemStyle: {
		                    normal: {
		                        color: '#ffaa00'
		                    }
		                },
		                /*areaStyle:{
		                    normal:{
		                        color:'#ffa24c'
		                    }
		                },*/
		                data: data[3]
		            },
		            {
		                name:data[0][3],
		                yAxisIndex:1,
		                type:'line',
		                smooth: true,
			            symbol: 'circle',
			            symbolSize:5,
			            itemStyle: {
		                    normal: {
		                        color: '#3f9b0a'
		                    },
		                },
		                data: data[5]
		            }
		        ]
		    };
	var myChart = echarts.init($('#chart3')[0]);
	 myChart.setOption(option);	
}

function chart4(data){
	var xData = data[1];
	var lineData1 = data[2];
	var lineData2 = data[3];
	var option =  {
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
					color: '#0177d4'
				}
			},
			data: xData,
		}],
		yAxis: [{
			name: '',
			type: 'value',
			min:6,
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
					color: '#0177d4'
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
			name: data[0][0],
			type: "line",
			smooth: true,
            symbol: 'circle',
            symbolSize:5,
			//yAxisIndex: 1,
			itemStyle: {
				normal: {
					color: '#E9DC37'
				},
			},
			data: lineData1,

		},{
			name: data[0][1],
			type: "line",
			smooth: true,
            symbol: 'circle',
            symbolSize:5,
			//yAxisIndex: 1,
			itemStyle: {
				normal: {
					color: '#00FFFF'
				},
			},
			data: lineData2,
		}]
	};
	var myChart = echarts.init($('#chart4')[0]);
	 myChart.setOption(option);	
}

function chart5(data){
    var option = {
    		tooltip: {
    			trigger: "axis"
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
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
	        axisLabel: {
	            inside: false,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10
	            }
	        },
            splitLine: {
                show: false
            },
            type: 'category',
            data:data[1]
        },
        yAxis: [{
        	name:'百万吨',
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
	            inside: false,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10
	            }
	        },
            splitLine:{
                show:false
            },
            type: 'value'
        },{
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
	        axisLabel: {
	            inside: false,
	            formatter: '{value}%',
	            textStyle: {
	                color: '#fff',
	                fontSize: 10
	            }
	        },
            splitLine:{
                show:false
            },
            type: 'value'
        }],
        series: [
            {
                name:data[0][0],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: '#61ffff'
                    },
                },
                data: data[2]
            },
            {
                name:data[0][1],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: '#2874ff'
                    },
                },
                data: data[3]
            },
            {
                name:data[0][2],
                yAxisIndex:1,
                type:'line',
                itemStyle:{
                    normal:{
                        color:'#ff0'
                    }
                },
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(data){
	option = 
	{
		textStyle: {
	        color: '#38b8ff'
	    },
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
	            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
	            color: '#fafafa'
	        }

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
	        type:'scroll',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },  
	    calculable: true,
	    yAxis: [{
	        type: 'category',
	        data:data[1],
	        axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                }
            },
            //去掉辅助线
		    splitLine: {
	            show: false
	        },
	    }],
	    xAxis: [{
	        //name: '量化评定主体数',
	        type: 'value',
	        max: 100,
	        axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                },
                formatter: '{value}%'
            },
            //单位
            //去掉辅助线
		    splitLine: {
	            show: false
	        },
	    }],

	    series: [
	        {
	            name: '采掘业',
	            type: 'bar',
	            stack: '总量',
	            barWidth: '60%',
	            itemStyle: {
	                normal: {
	                    color: '#3A6DFD'
	                }
	            },
	            data: data[2]
	        },
	        {
	            name: '制造业',
	            type: 'bar',
	            stack: '总量',
	            barWidth: '60%',
	            itemStyle: {
	                normal: {
	                    color: '#FFD844'
	                }
	            },
	            data: data[3]
	        },
	        {
	            name: '电力生产',
	            type: 'bar',
	            barWidth: '60%',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    color: '#20AEFE'
	                }
	            },
	            data: data[4]
	        },
	        {
	            name: '交运仓储',
	            type: 'bar',
	            barWidth: '60%',
	            stack: '总量',
	            itemStyle: {
	                normal: {
	                    color: '#0FFDD1'
	                }
	            },
	            data: data[5]
	        },
	        {
	            name: '其他行业',
	            type: 'bar',
	            stack: '总量',
	            barWidth: '60%',
	            itemStyle: {
	                normal: {
	                    color: '#FFA33F'
	                }
	            },
	            data: data[6]
	        },
	        {
	            name: '生活消费',
	            type: 'bar',
	            stack: '总量',
	            barWidth: '60%',
	            itemStyle: {
	                normal: {
	                    color: '#69D5FF'
	                }
	            },
	            data: data[7]
	        },
	        {
	            name: '批发零售业',
	            type: 'bar',
	            stack: '总量',
	            barWidth: '60%',
	            itemStyle: {
	                normal: {
	                    color: '#3693FD'
	                }
	            },
	            data: data[8]
	        }
	    ]    

	};

	var myChart = echarts.init($('#chart6')[0]);
	 myChart.setOption(option);	
}

function chart7(data){
	var option =  {
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
			    grid: {
					 left: '5%',
			   		 right:'5%',
		   			  top:'10%',
		   			  bottom:'14%',
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
		   		            return params[0].name + '<br />石油' + params[0].seriesName + ' ：' + params[0].data +  ' 百万吨<br />' + params[1].seriesName + ' ：' + params[1].data+' %' ;
		   		        },
		   		        backgroundColor: 'rgba(0,0,0,0.7)', // 背景
		   		        padding: [8, 10], //内边距
		   		        extraCssText: 'box-shadow: 0 0 3px rgba(255, 255, 255, 0.4);', //添加阴影
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
		            data: data[2],
		        }],
		        yAxis: [{
		        	name:'百万吨',
		        	nameGap:-5,
		    		nameTextStyle:{
				    	padding:[0,0,0,45],
				    	align:'center',
				    	color:'#fff',
					},
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
				},{
		            name: '',
		            type: 'value',
		            position: 'right',
		            axisLabel: {
		            	formatter:'{value}%',
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
		        	name:'消费量',
		            "type": "pictorialBar",
		            "symbol": "rect",
		            "symbolRepeat": "fixed",
		            symbolMargin: 1,
		            "symbolClip": true,
		            "symbolSize": [12,4],
		            "symbolPosition": "start",
		            "symbolOffset": [12,4],
		            //"symbolBoundingData": 300,
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1,
		                        [
		                            {offset: 0, color: 'rgba(0,245,255,1)'},
		                            {offset: 0.4, color: 'rgba(0,245,255,0.7)'},
		                            {offset: 1, color: 'rgba(0,245,255,0.1)'}
		                        ]
		                    )
		                }
		            },
		            "data": data[3],
		            "z": 10
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
		  			z:'11',
		  			data: data[4]

		  		}]
		    }
	var myChart = echarts.init($('#chart7')[0]);
	 myChart.setOption(option);
}

function chart8(data){
	var scaleData = [{
        'name': '中国',
        'value': 22.44
    },
    {
        'name': '美国',
        'value': 20.39
    },
    {
        'name': '俄罗斯',
        'value': 14.23
    },
    {
        'name': '英国',
        'value': 11.20
    },
    {
        'name': '日本',
        'value': 10.88
    },
    {
        'name': '其他国家',
        'value': 20.86
    },
  
];
var rich = {
    white: {
        color: '#ddd',
        align: 'center',
        padding: [3, 0]
    }
};
var placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var data = [];
var color=['#00ffff','#00cfff','#006ced','#ffe000','#ffa800','#ff5b00','#ff3000']
for (var i = 0; i < scaleData.length; i++) {
    data.push({
        value: scaleData[i].value,
        name: scaleData[i].name,
        itemStyle: {
            normal: {
                borderWidth: 4,
                shadowBlur: 200,
                borderColor:color[i],
                //shadowColor: color[i]
            }
        }
    }, {
        value: 2,
        name: '',
        itemStyle: placeHolderStyle
    });
}
var seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: ['40%', '70%'],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'outside',
                color: '#ddd',
                formatter: function(params) {
                    var percent = 0;
                    percent = params.value.toFixed(2);
                    if(params.name !== '') {
                        return params.name + '\n{white|' + '占比' + percent + '%}';
                    }else {
                        return '';
                    }
                },
                rich: rich
            },
            labelLine: {
                length:10,
                length2:10,
                show: true,
                color:'#00ffff'
            }
        }
    },
    data: data
}];
option = {
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: seriesObj
}
	var myChart = echarts.init($('#chart8')[0]);
	 myChart.setOption(option);
}


function main(){
    getdata('/consume/oil//main.json', function(data){
        var province = data.province, db = data.pie;
        var typeIndex = 1;
        var option = null;
        var pieData = [];
        var geoCoordMap = { //为了保证饼图不互相重叠，我对经纬坐标进行了调整
            '上海':  [121.472644,  31.231706],
            '云南':  [102.712251,  24.040609],
            '内蒙古':  [111.670801,  40.818311],
            '北京':  [116.405285,  39.904989],
            // '台湾': [121.509062, 25.044332],
            '吉林':  [125.3245,  43.886841],
            '四川':  [103.065735,  30.659462],
            '天津':  [119.190182,  39.125596],
            '宁夏':  [106.278179,  38.46637],
            '安徽':  [117.283042,  31.86119],
            '山东':  [118.000923,  36.675807],
            '山西':  [112.049248,  37.057014],
            '广东':  [113.280637,  23.125178],
            '广西':  [108.320004,  22.82402],
            '新疆':  [87.617733,  43.792818],
            '江苏':  [119.467413,  33.741544],
            '江西':  [115.892151,  28.676493],
            '河北':  [114.802461,  37.745474],
            '河南':  [113.665412,  33.757975],
            '浙江':  [120.153576,  29.287459],
            '海南':  [110.33119,  20.031971],
            '湖北':  [113.298572,  30.984355],
            '湖南':  [112.12279,  28.19409],
            // '澳门': [113.54909, 22.198951],
            '甘肃':  [103.823557,  36.058039],
            '福建':  [119.306239,  26.075302],
            '西藏':  [91.132212,  29.660361],
            '贵州':  [106.713478,  26.578343],
            '辽宁':  [123.029096,  41.396767],
            '重庆':  [106.504962,  29.933155],
            '陕西':  [108.948024,  34.263161],
            '青海':  [100.578916,  36.623178],
            // '香港': [114.173355, 22.320048],
            '黑龙江':  [126.642464,  46.756967],
        };
        
        var s = ["山东","辽宁","广东","江苏","浙江","上海","新疆","河北","福建","黑龙江","重庆"];
        var xData = ["原油","汽油","柴油"];
        for (var i = 0; i < province.length; i++) {
        	if ($.inArray(province[i], s)!= -1) {
        		pieData.push({
                    "name": province[i],
                    "value": [{
                        "name": "原油",
                        value: db[i][0],
                        itemStyle:{
                            color:'#ffd700'
                        }
                    }, {
                            "name": "汽油",
                            value: db[i][1],
                            itemStyle:{
                                color:'#61ffff'
                            }
                        },
                        {
                            "name": "柴油",
                            value: db[i][2],
                            itemStyle:{
                                color:'#2e8b57'
                            }
                        }
                    ]
                })
			}
        }
        function convertMapDta(type, data) {
            var mapData = [];
            for (var i = 0; i < data.length; i++) {
                mapData.push({
                    'name': province[i],
                    "value": data[i][3]
                })
            }
            return mapData;
        }
        
        function addBar(chart, data) {
            var sd = option.series;
            var prodb = data.province, bardb = data.pie, max = 10;
            for (var i = 0; i < prodb.length; i++) {
                var val0 = bardb[i][0], val1 = bardb[i][1], name = prodb[i];
                var geoCoord = geoCoordMap[name];
                if(s.indexOf(name)==-1){
                    continue;
                }
                if (geoCoord && (val0>0 || val1 > 0)) {
                    var coord = chart.convertToPixel('geo', geoCoord);
                    var idx = i + '';
                    var val = [
                        {value:bardb[i][0], itemStyle:{color:'#ffd700'},visualMap: false},
                        {value:bardb[i][1], itemStyle:{color:'#61ffff'},visualMap: false},
                        {value:bardb[i][2], itemStyle:{color:'#2e8b57'},visualMap: false}
                    ];
                    option.xAxis.push({
                        id: idx,
                        gridId: idx,
                        type: 'category',
                        name: name,
                        show:true,
                        nameStyle: {
                            color: '#fff',
                            fontSize: 10
                        },
                        nameLocation: 'middle',
                        nameGap: 3,
                        splitLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {show: false},
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        data: xData,
                        z: 9
                    });
                    option.yAxis.push({
                        id: idx,
                        gridId: idx,
                        show:false,
                        splitLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {show: false},
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        z: 9
                    });
                    option.grid.push({
                        id: idx,
                        width: 30,
                        height: 30,
                        left: coord[0] - 15,
                        top: coord[1] - 15,
                        z: 9
                    });
                    option.series.push({
                        id: idx,
                        name:prodb[i],
                        type: 'bar',
                        xAxisId: idx,
                        yAxisId: idx,
                        barGap: 0,
                        tooltip: {
                            formatter: function(params) {
                                var str = params.seriesName + "<br/>";
                                for(var i = 0; i < prodb.length; i++){
                                    if(prodb[i] == params.seriesName){
                                        str += xData[0] + "：" + bardb[i][0] + ' 万吨<br />';
                                        str += xData[1] + "：" + bardb[i][1] + ' 万吨<br />';
                                        str += xData[2] + "：" + bardb[i][2] + ' 万吨<br />';
                                    }
                                }
                                return str;
                            }
                        },
                        data: val,
                        z: 9
                    });
                }
            }
            return sd;
        }

        /* 指定图表的配置项和数据:pie*/
        option = {
            xAxis: [], yAxis: [], grid: [],
            geo: {
                map: 'china',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                zoom:1.2,
                aspectScale:0.9,  
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            title:[{
                text:'石油消费分布   (2016)',
                subtext:'单位：万吨',
                top:'3%',
                left:'center',
                textStyle: {
                    color: '#59EBE8',
                    fontSize:16,
                },
                subtextStyle: {
                    color: '#fff',
                    fontSize:10,
                }
            }],
            legend: {
                show:true,
                data: ["原油","汽油","柴油"],
                itemWidth: 16, //图例宽度
                itemHeight: 8, //图例高度
                bottom:'2%',
                textStyle:{
                    color:'#fff'
                },
                z: 9
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (params.value) {
                        return params.name + "<br/>" + "总消费量: " + params.value + "万吨";
                    }
                }
            },
            visualMap: {
                type: 'continuous',
                show: true,
                min: 0,
                max: 10000,
                itemHeight:100,
                itemWidth:15,
                left: 'left',
                top: 'bottom',
                text: ['高    (万吨)', '低    (万吨)'], // 文本，默认为数值文本
                calculable: true,
                // seriesIndex: [0],
                inRange: {
                    color: ["#aeb2f7","#3c68f3","#061ae1" ]
                },
                textStyle:{
                    color:'#fff'
                },
            },
            series: [{
                name: 'total',
                type: 'map',
                mapType: 'china',
                roam: false,
                zoom:1.2,
                aspectScale:0.9,  
                showLegendSymbol:false,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: convertMapDta(province[typeIndex], db),
                z: 3
            }]
        };
        var myChart = echarts.init($('#main')[0]);
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
        /*pie*/
        setTimeout(function(){addBar(myChart, data);myChart.setOption(option);}, 10);
        //addPie(myChart, pieData);
        //myChart.setOption(option);
    });
}