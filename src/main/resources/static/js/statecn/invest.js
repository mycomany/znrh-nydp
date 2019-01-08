$(document).ready(function(){
    // main();
    getdata('/statecn/invest/main.json',mapChart);
    getdata('/statecn/invest/chart1.json',chart1);
    getdata('/statecn/invest/chart2.json',chart2);
    getdata('/statecn/invest/chart3.json',chart3);
    getdata('/statecn/invest/chart4.json',chart4);
    getdata('/statecn/invest/chart5.json',chart5);
});

function mapChart(data){
    var color = ["#3FBBFA", "#309FFC", "#1154FF", "#2C2D57"];
    var regionCss = [{name:"China", itemStyle:{color:'#ffa24c'}}];
    
    var dd = [{"name":"北京","value":["15.4","0","0","0"]},
              {"name":"河北","value":["67.4","112.8","650","3250"]},
              {"name":"河南","value":["5.6","125.08","0","0"]},
              {"name":"黑龙江","value":["5.77","108.4","0","0"]},
              {"name":"湖北","value":["0","19.97","0","0"]},
              {"name":"吉林","value":["0","11","0","0"]},
              {"name":"江苏","value":["31","85.6","1060","12360"]},
              {"name":"辽宁","value":["41.3","57.5","600","600"]},
              {"name":"内蒙古","value":["0","103","0","0"]},
              {"name":"陕西","value":["10.4","30.8","0","0"]},
              {"name":"四川","value":["42.6","0","0","0"]},
              {"name":"天津","value":["79.7","85.4","220","9310"]},
              {"name":"新疆","value":["117","107","0","0"]},
              {"name":"浙江","value":["0","13.7","300","4700"]},
              {"name":"重庆","value":["42.6","0","0","0"]},
              {"name":"福建","value":["0","0","630","3130"]},
              {"name":"广东","value":["0","0","1380","7480"]},
              {"name":"广西","value":["0","0","300","3420"]},
              {"name":"海南","value":["0","0","300","500"]},
              {"name":"山东","value":["0","0","300","6400"]},
              {"name":"上海","value":["0","0","300","900"]}];
    var option = {
    		title: [{
    	        right: "9%",
    	        top: '38%',
    	        text: '油气管网建设与规划',
    	        textStyle: {
    	            fontWeight: 'normal',
    	            fontSize: 14,
    	            color: "#59EBE8"
    	        },
    	    },{
    	        right: "11%",
    	        top: '2%',
    	        text: '单位：亿立方米',
    	        textStyle: {
    	            fontWeight: 'normal',
    	            fontSize: 10,
    	            color: "#fff"
    	        },
    	    },{
                text:'天然气投资项目分布  (2017)',
                //subtext:'单位：万吨',
                textStyle:{
                    fontSize:16,
                    color:'#59EBE8'
                },
                top:'3%',
                left:'center'
            },],
    	    legend: [{
		    	show:true,
	            bottom : '0%',
	            right:'5%',
	            itemGap: 12, //图例每项之间的间隔
	            itemWidth: 16, //图例宽度
	            itemHeight: 8, //图例高度
	            orient: 'vertical',
	            textStyle: {
	                color:'#fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
		        data: ['管长（万公里）'],
		    },{
		    	show:true,
		    	orient: 'vertical',
	            top : '8%',
	            right:'8%',
	            itemGap: 12, //图例每项之间的间隔
	            itemWidth: 16, //图例宽度
	            itemHeight: 8, //图例高度
	            textStyle: {
	                color:'#fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
		        data: ['接收站2018年容量','接收站规划新增容量','储气库2018年容量','储气库规划新增容量'],
		    }],
        geo: {
            show: true,
            map: 'china',
            roam: 'move',
	        zoom:1.1,
	        aspectScale:0.9,
	        top:'15%',
	        roam: true,
	        left:'10%',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: false,
                }
            },
            emphasis:{
                label:{
                    position:'left',
                    show:false,
                    formatter:'{c}'
                }
            },
            roam: true,
            //regions: regions,
            itemStyle: {
                normal: {
                    areaColor: '#00b7ff',
                    borderColor: 'white',
                    borderWidth:1
                }
            }
        },
        visualMap: {
            show: false,
            min: 0,
            max: 200,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            seriesIndex: [4],
            color: ["#5DF1F9"]
        },
        tooltip:{
        	trigger: "item",
            formatter:function(params){
            	//alert(JSON.stringify(params));
            	if (params.seriesType == 'bar') {
					return '管长:'+data[5][params.dataIndex]+'(万公里)';
				}else{
					var nam = "";
					if (params.seriesType == 'map') {
						nam = params.name;
					}else {
						nam = params.value[3];
					}
					var na = nam;
					for (var i = 0; i < dd.length; i++) {
						if (dd[i].name ==  nam) {
							if (dd[i].value[0]*1>0) {
								na = na+ '<br>储气库2018年容量：'+dd[i].value[0]+'(亿立方米)';
							}
							if (dd[i].value[1]*1>0) {
								na = na+ '<br>储气库规划新增容量：'+dd[i].value[1]+'(亿立方米)';
							}
							if (dd[i].value[2]*1>0) {
								na = na+ '<br>接收站2018年容量：'+dd[i].value[2]+'(亿立方米)';
							}
							if (dd[i].value[3]*1>0) {
								na = na+ '<br>接收站规划新增容量：'+dd[i].value[3]+'(亿立方米)';
							}
						}
					}
					return na;
				}
            	//alert(JSON.stringify(params.value[3]));
            }
        },
        grid: {
            // left:'2%',
            right: '5%',
            bottom: '13%',
            width: '20%',
            height: '40%',
            containLabel: true
        },
        xAxis: [{
        	//inverse: true,
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			splitLine: {
				show:false,
				lineStyle: {
					color: '#0177d4'
				}
			},
			axisLabel: {
				color: '#fff',
				fontSize: 10,
				formatter: '{value}'
			},
		}],
		yAxis: [{
			type: 'category',
			//position:'right',
	        //inverse: true,
			data: ["2016年","2020年","2025年"],
			axisLine: {
				//position:'right',
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
		}],
        series : [
            {
                name: '接收站2018年容量',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showLegendSymbol: false,
                left: '10%',
                top:'15%',
                data: data[1],
                symbolSize: function (val) {
                    return 10;
                },
                //showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                //hoverAnimation: true,
                label: {normal: { position: 'left', show: false }},
                itemStyle: {
                    normal: {
                        color: '#ffba00',
                        shadowBlur: 10,
                        shadowColor: '#ff9b00'
                    }
                }
            },{
                name: '接收站规划新增容量',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showLegendSymbol: false,
                left: '10%',
                top:'15%',
                data: data[2],
                symbol:'path://m43.75,145.74l0,0c0,-51.64 41.86,-93.5 93.5,-93.5l0,0c24.8,0 48.58,9.85 66.11,27.38c17.53,17.53 27.38,41.32 27.38,66.11l0,0c0,51.64 -41.86,93.5 -93.5,93.5l0,0c-51.64,0 -93.5,-41.86 -93.5,-93.5zm46.75,0l0,0c0,25.82 20.93,46.75 46.75,46.75c25.82,0 46.75,-20.93 46.75,-46.75c0,-25.82 -20.93,-46.75 -46.75,-46.75l0,0c-25.82,0 -46.75,20.93 -46.75,46.75z',//圆环
                symbolSize: function (val) {
                    return 10;
                },
                //showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                //hoverAnimation: true,
                label: {normal: { position: 'left', show: false }},
                itemStyle: {
                    normal: {
                        color: '#ff9b00',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                }
            },{
                name: '储气库2018年容量',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showLegendSymbol: false,
                left: '10%',
                top:'15%',
                data: data[3],
                symbolSize: function (val) {
                    return 10;
                },
                //showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                //hoverAnimation: true,
                label: {normal: { position: 'left', show: false }},
                itemStyle: {
                    normal: {
                        color: '#11cc03',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                }
            },{
                name: '储气库规划新增容量',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                showLegendSymbol: false,
                left: '10%',
                top:'15%',
                data: data[4],
                symbol:'path://m43.75,145.74l0,0c0,-51.64 41.86,-93.5 93.5,-93.5l0,0c24.8,0 48.58,9.85 66.11,27.38c17.53,17.53 27.38,41.32 27.38,66.11l0,0c0,51.64 -41.86,93.5 -93.5,93.5l0,0c-51.64,0 -93.5,-41.86 -93.5,-93.5zm46.75,0l0,0c0,25.82 20.93,46.75 46.75,46.75c25.82,0 46.75,-20.93 46.75,-46.75c0,-25.82 -20.93,-46.75 -46.75,-46.75l0,0c-25.82,0 -46.75,20.93 -46.75,46.75z',//圆环
                symbolSize: function (val) {
                    return 10;
                },
                //showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                //hoverAnimation: true,
                label: {normal: { position: 'left', show: false }},
                itemStyle: {
                    normal: {
                        color: '#40a504',
                        shadowBlur: 10,
                        shadowColor: '#05C3F9'
                    }
                }
            }, {
                type: 'map',
                map: 'china',
                geoIndex: 0,
                aspectScale: 0.75, //长宽比
                top:'15%',
                showLegendSymbol: false, // 存在legend时显示
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: false,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7'
                    }
                },
                animation: false,
                data: data[7]
            },{
    			name:'管长（万公里）',
    			type:'bar',
    			 barWidth: "60%",
    			areaStyle: {
    				normal: {type: 'default',
    					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    						offset: 0,
    						color: 'rgba(199, 37, 50,0.2)'
    					}, {
    						offset: 1,
    						color: 'rgba(199, 37, 50,0.2)'
    					}], false)
    				}
    			},
    			smooth:true,
    			itemStyle: {
    				normal: {
    					color:'#216FFF',
    					areaStyle: {type: 'default'}}
    			},
    			data:data[5]
    		}
        ]
    };
    var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function chart1(data){
	var l1 = [];
	var l2 = [];
	var l3 = [];
	var xData = [];
	for (var i = data[1].length-1; i >-1; i--) {
		xData.push(data[1][i]);
		l1.push(data[2][i]);
		l2.push(data[3][i]);
		l3.push(data[4][i]);
	}
    var option = {
    		tooltip: {
    	        trigger: 'axis',
    	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
    	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    	        }
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
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
        color:['#69D5FF','#216EFF','#FFA33E'],
        xAxis: {
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data:xData
            },
        yAxis: {
        	name:'亿元',
        	nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,35],
		    	align:'center',
		    	color:'#fff',
			},
			max:30000,
            axisLabel: {
                textStyle: {
                    color: '#fff',
                    fontSize: 10
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            splitLine: {
                show: false
            },
            type: 'value'
        },
        series: [
            {
                name:data[0][0],
                type:'line',
                symbolSize:0,
                data: l1
            },
            {
                name:data[0][1],
                type:'line',
                symbolSize:0,
                data: l2
            },
            {
                name:data[0][2],
                type:'line',
                symbolSize:0,
                data: l3
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
    var seriesData = [];
    for(var i = 0; i < data[0].length; i++){
        var o = {
            name:data[0][i],
            type:'bar',
            stack: 'barGroup',
            barWidth:15,
            areaStyle:{},
            data:data[i+2]
        };
        seriesData.push(o);
    }
    var option = {
    		tooltip: {
    	        trigger: 'axis',
    	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
    	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    	        }
    	    },  
        color:['#FFD743','#2AB7FF','#30FFFE','#216FFF'],
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
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
        xAxis: {
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
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'category',
            data:data[1]
        },
        yAxis: {
        	name:'  万吨/年',
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
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var seriesData = [];
    for(var i = 0; i < data[0].length; i++){
        var o = {
            name:data[0][i],
            type:'bar',
            stack: 'barGroup',
            barWidth:15,
            areaStyle:{},
            data:data[i+2]
        };
        seriesData.push(o);
    }
    var option = {
    		tooltip: {
    	        trigger: 'axis',
    	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
    	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    	        }
    	    },   		
        color:['#28B7FF','#FFA33F','#FFD844'],
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
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
        xAxis: {
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
                show: false
            },
            axisTick:{
                show:true
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
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            splitLine: {
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
var option =  {
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
			data: data[2],
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
		}],
		series: [
			{
			name: "新增接收能力(万吨/年)",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#FFA33F',
					barBorderRadius: 50,
				},
			},
			data: data[3],

		},
			{
			name: "累计接收能力(万吨/年)",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#216FFF',
					barBorderRadius: 50,
				},
			},
			data: data[4],

		},
		]
	};
var myChart = echarts.init($('#chart4')[0]);
myChart.setOption(option);
}

function chart5(data){
	var option =  {
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
				data: data[2],
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
			}],
			series: [
				{
				name: "新增工作气量(亿立方)",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color: '#FFA33F',
						barBorderRadius: 50,
					},
				},
				data: data[3],

			},
				{
				name: "累计工作气量(亿立方)",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color: '#216FFF',
						barBorderRadius: 50,
					},
				},
				data: data[4],

			},
			]
		};
	var myChart = echarts.init($('#chart5')[0]);
	myChart.setOption(option);
	}