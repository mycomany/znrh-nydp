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
		            	color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(37,228,163,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(37,228,163,0.2)'
	                            }
	                        ]
	                    )
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
						color: '#2b88ff',
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
        color:['#2b88ff','#25e4a3','#3fe5f4','#faf13f'],
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
            itemStyle: {
				normal: {
					color: '#25e4a3'
				},
			},
            data: data[2]
        }, {
            name: data[0][1],
            type: 'bar',
            stack:'one',
            itemStyle: {
				normal: {
					color: '#2b88ff'
				},
			},
            data: data[3]
        }, {
            name: data[0][2],
            yAxisIndex:0,
            type: 'line',
            showSymbol:false,
            itemStyle: {
				normal: {
					color: '#3fe5f4'
				},
			},
            data: data[4]
        }, {
            name: data[0][3],
            itemStyle: {
				normal: {
					color: '#faf13f'
				},
			},
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
        color:['#25e4a3','#3ee4f3','#2b88ff','#4138e1','#faf13f','#8121dd'],
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
   	     boundaryGap: false,
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
	        name: '消费量',
	        type: 'bar',
	        xAxisIndex: 1,
	        barGap: '140%',
	        data: data[2],
	        barWidth: '30%',
	        itemStyle: {
	            normal: {
	            	color:new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(0,206,255,1)'
                            },
                            {
                                offset: 1,
                                color: 'rgba(0,206,255,0.2)'
                            }
                        ]
                    )
	            }
	        },
	        z: 1
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
					color: '#2b88ff',
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
        color:['#25e4a3','#3ee4f3','#2b88ff','#4138e1','#faf13f', '#5c54ea'],
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
        color:['#25e4a3','#3ee4f3','#2b88ff'],
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
    getdata('/consume/gas/main.json', function(datas){
        var data = [{"name":"安徽","value":40},
                    {"name":"陕西","value":96},
                    {"name":"河南","value":100},
                    {"name":"江西","value":20},
                    {"name":"山东","value":120},
                    {"name":"湖南","value":31},
                    {"name":"四川","value":200},
                    {"name":"宁夏","value":26},
                    {"name":"河北","value":100},
                    {"name":"内蒙古","value":59},
                    {"name":"湖北","value":53},
                    {"name":"吉林","value":26},
                    {"name":"山西","value":55},
                    {"name":"贵州","value":12},
                    {"name":"重庆","value":90},
                    {"name":"江苏","value":220},
                    {"name":"甘肃","value":28},
                    {"name":"云南","value":9},
                    {"name":"青海","value":32},
                    {"name":"新疆","value":164},
                    {"name":"辽宁","value":55},
                    {"name":"广西","value":15},
                    {"name":"上海","value":85},
                    {"name":"黑龙江","value":39},
                    {"name":"北京","value":175},
                    {"name":"浙江","value":103},
                    {"name":"天津","value":68},
                    {"name":"海南","value":43},
                    {"name":"广东","value":190}]
    var geoCoordMap = {
    		 '上海':  [121.472644,  31.231706],
             '云南':  [100.034699,25.91455],
             '内蒙古':  [110.263596,42.220711],
             '北京':  [116.405285,  39.904989],
             // '台湾': [121.509062, 25.044332],
             '吉林':  [126.581998,43.097396],
             '四川':  [100.660207,30.890097],
             '天津':  [119.190182,  39.125596],
             '宁夏':  [106.01382,37.378751],
             '安徽':  [117.283042,  31.86119],
             '山东':  [118.000923,  36.675807],
             '山西':  [112.049248,  37.057014],
             '广东':  [113.547514,24.466547],
             '广西':  [109.058573,24.027946],
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
             '福建':  [117.043,26.602996],
             '西藏':  [86.935824,31.680109],
             '贵州':  [105.839046,27.328367],
             '辽宁':  [123.029096,  41.396767],
             '重庆':  [107.65118,30.794847],
             '陕西':  [108.948024,  34.263161],
             '青海':  [94.809867,37.046749],
             // '香港': [114.173355, 22.320048],
             '黑龙江':  [126.425621,49.042686]
         };

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
                res.push({
                    name: data[i].name,
                    value: geoCoord.concat(data[i].value)
                });
            }
        }
        return res;
    };
    
var mapdata={"江苏":[220 ,27.47],
		"四川":[200 ,47.83],
		"广东":[190 ,0.00],
		"北京":[175 ,10.46],
		"新疆":[164 ,27.96],
		"山东":[120 ,29.73],
		"浙江":[103 ,20.79],
		"河南":[100 ,38.98],
		"河北":[100 ,30.43],
		"陕西":[96 ,47.24],
		"重庆":[90 ,43.21],
		"上海":[85 ,21.71],
		"天津":[68 ,14.35],
		"内蒙古":[59 ,39.63],
		"山西":[55 ,39.47],
		"辽宁":[55 ,24.89],
		"湖北":[53 ,25.39],
		"海南":[43 ,50.00],
		"安徽":[40 ,37.37],
		"黑龙江":[39 ,25.31],
		"青海":[32 ,25.16],
		"湖南":[31 ,30.86],
		"甘肃":[28 ,20.52],
		"吉林":[26 ,34.27],
		"宁夏":[26 ,35.82],
		"江西":[20 ,34.27],
		"广西":[15 ,37.84],
		"贵州":[12 ,31.98],
		"云南":[9 ,39.90]};
    
var max = 0;
for (var i = 0; i < data.length; i++) {
    if (data[i].value >= max) {
        max = data[i].value;
    }
}
var col = ['#fff700','#00ffbc','#0026ff'];
option = {
    title: {
        text: '',
        subtext: '',
        x: 'center'
    },
    tooltip: { //提示框组件。
        //trigger: 'item', //数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用。
        formatter: function (v){ 
        	//alert(JSON.stringify(v));
        	if (v.name != '') {
        		return v.name+'<br/>总消费量： '+mapdata[v.name][0]+' 亿立方米<br/>居民消费占比： '+mapdata[v.name][1]+'%';
			}
        },
        textStyle: {
            fontSize: '24px'
        }
    },
    legend: {
        show: false,
        orient: 'horizontal', //图例的排列方向
        x: 'left', //图例的位置
        data: ['']
    },
    geo: [{
        show: true,
        map: 'china',
        top:'18%',
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false,
            }
        },
        roam: false,//地图设置不可拖拽，固定的
        zoom:1.2,
        aspectScale:0.9,
        itemStyle: {
            normal: {
                areaColor: 'rgba(39,52,96,0.4)',//'#273460',
                borderWidth: 1,
                borderColor: '#6cf5fb',
            },
       	 emphasis: {
        	 borderColor:'#55e6fc',
             areaColor: '#4c70f7'
        }
        }
    }],
    series: [
       {
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data.sort(function (a, b) {
                return b.value - a.value;
            }).slice(0, data.length)),
            symbolSize: function (val) {
            	if (val[2] / 5<10) {
					return 10;
				}
                return val[2] / 5;
            },
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                	color: '#fff',
                	fontSize: 14,
                    formatter: function (val) {
                    	//alert(JSON.stringify(val));
                    	if (mapdata[val.name][0]>100) {
                    		return val.name;
						}
                    	return '';
                    },
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: function (val) {
                    	//alert(mapdata[val.name]);
                    	var  i = 0;
                    	if (mapdata[val.name][0]<50) {
                           i = 2;
						}else if (mapdata[val.name][0]>100) {
							i = 1;
						}
                    	return new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
    	                    offset: 0,
    	                    color: col[i]
    	                }, {
    	                    offset: 0.5,
    	                    color: 'rgba(1,1,1,0)'
    	                }, {
    	                    offset: 1,
    	                    color: col[i]
    	                }]);
                    },
                    shadowBlur: 10,
                    shadowColor: '#333'
                },
                emphasis: {
                    color:'#ffc100'
                }
            },
            zlevel: 1
        },{
            name: 'total',
            type: 'map',
            mapType: 'china',
            top:'18%',
            zoom:1.2,
            aspectScale:0.9,  
            roam: false,
            showLegendSymbol:false,
            label: {
                normal: {
                    show: false,
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: 'rgba(39,52,96,0.4)',//'#273460',
                    borderWidth: 1,
                    borderColor: '#6cf5fb',
                },
           	 emphasis: {
            	 borderColor:'#55e6fc',
                 areaColor: '#4c70f7'
           	 	}
            },     
            data: data
        }
    ]
};
// myChart.setOption(option);
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}


function main1(){
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