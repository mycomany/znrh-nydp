$(document).ready(function(){
	getdata('/consume/elec/main.json',getMain);
	getdata('/consume/elec/main1.json',getMain1)
	getdata('/consume/elec/chart1.json',chart1);
	getdata('/consume/elec/chart2.json',getChart2);
	getdata('/consume/elec/chart3.json',chart3);
	getdata('/consume/elec/chart4.json',getChart4);
	getdata('/consume/elec/chart5.json',getChart5);
	getdata('/consume/elec/chart6.json',chart6);
});



function getValue (data,name){
	for (var i = 0; i < data.length; i++) {
		if (data[i].name == name) {
			return data[i].value;
		}
	}
}

function chart1(data){
	var xData = data[1];
//	var barData1 = data[4].map(function(v){
//		if(v<0){
//			return {value:v, itemStyle:{color:'#fed312'}};
//		}
//		return v;
//	});
	var barData1 = data[2];
	var barData2 = data[3];
	var lineData1 = data[4];
	var lineData2 = data[5];
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
			bottom:'2%',
			data: data[0],
			textStyle: {
				color: '#fff',
				fontSize: 10
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
				rotate: 30,
			},
			axisLine:{
				lineStyle:{
					color: '#38b8ff'
				}
			},
			data: xData,
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
					},
					 formatter: '{value}%'
				}
			}],
		series: [
			{
				name: "供电量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#00FFFF',
						// barBorderRadius: 50,
					},
				},
				data: barData1,

			},{
				name: "售电量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#1E90FF',
						// barBorderRadius: 50,
					},
				},
				data: barData2,

			},
			{
				name: "供电量同比",
				type: "line",
				barWidth: '30%',
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#ff5600',
						//barBorderRadius: 50,
					},
				},
				data: lineData1,

			},
			{
				name: "售电量同比",
				type: "line",
				barWidth: '30%',
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#ffef00',
						//barBorderRadius: 50,
					},
				},
				data: lineData2,

			}
		]
	};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

var data2 = [];
var chartData2 = [];
function getChart2(data){
	data2 = data;
	chartData2 = data[['2018-11']];
	chart2(chartData2,1);
}
function change2(date){
	chartData2 = data2[date];
	chart2(chartData2,1);
}

function chart2(data,a){
	option = {
		    color: ['#2edfa3', '#bce672', '#ff4777', '#70f3ff', '#4b5cc4', '#f47983', '#8d4bbb', '#6635EF', '#FFAFDA'],
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c} ({d}%)"
		    },
		    series: [{
		            name: '访问来源',
		            type: 'pie',
		            selectedMode: 'single',
		            radius: [0, '60%'],
		            center:['50%','50%'],
		            label: {
		                normal: {
		                    show: false,
		                    position: 'inner',
		                    formatter: '{d}%',
		                    textStyle: {
		                        color: '#fff',
		                        fontWeight: 'normal',
		                        fontSize: 10
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            data: data
		        },
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius: ['65%', '68%'],
		            center:['50%','50%'],
		            label: {
		                normal: {
		                    formatter: '{b|{b}}\n{hr|}\n{c|{c}}{d|({d}%)}',
		                    rich: {
		                        b: {
		                            fontSize: 10,
		                            color: '#fff',
		                            align: 'left',
		                            padding: 4
		                        },
		                        hr: {
		                            borderColor: '#12EABE',
		                            width: '100%',
		                            borderWidth: 2,
		                            height: 0
		                        },
		                        d: {
		                            fontSize: 10,
		                            color: '#fff',
		                            align: 'left',
		                            padding: 4
		                        },
		                        c: {
		                            fontSize: 10,
		                            color: '#fff',
		                            align: 'center',
		                            padding: 4
		                        }
		                    }
		                }
		            },
		            labelLine: {
		                normal: {
		                    show: true,
		                    length: 3,
		                    length2: 2,
		                    lineStyle: {
		                        type: 'dashed',
		                        width: 1
		                    }
		                }
		            },
		            data:  data
		        }
		    ]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
    myChart.on('click', function rose(params) {
    	if (a == 1) {
    		for (var i = 0; i < data.length; i++) {
    			if (data[i].name == params.name&&data[i].data.length>0) {
    				 myChart.clear();
    				 //alert(JSON.stringify(data[i].data));
    				chart2(data[i].data,2);
    			}
    		}
		}else{
			myChart.clear();
			chart2(chartData2,1);
		}
    });
}

function chart3(data){
	var xData = data[1];
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
		yAxis: [
			{
			name: '',
			type: 'value',
			splitNumber:4,
			position: 'left',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontSize:8
				}
			},
			axisLine: {
				lineStyle:{
					color: '#0177d4'
				}
			},
	        axisLabel: {
	            color: '#fff',
	            fontSize: 10
	        },
			axisTick: {
				color: '#0177d4',
				show: true
			},
			splitLine: {
				show: false
			}
		}],
		series: [
			{
			name: "平均销售电价",
			type: "line",
			itemStyle: {
				normal: {
					color: '#00FFFF',
					barBorderRadius: 50,
				},
			},
			data:data[2]

		}, {
			name: "一般工商业电价",
			type: "line",
			itemStyle: {
				normal: {
					color: '#18cc0b',
					barBorderRadius: 50,
				},
			},
			data: data[3]
			//yAxisIndex: 1

		}, {
			name: "居民电价",
			type: "line",
			itemStyle: {
				normal: {
					color: '#ff5600',
					barBorderRadius: 50,
				},
			},
			data: data[4]
		}]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}
var data4 = [];
function getChart4(data){
	data4 = data;
	chart4(data.xData,data.data["2018-11"]);
}
function change4(date){
	chart4(data4.xData,data4.data[date]);
}
function chart4(xData,data){
	var option = {
		tooltip : {
		  trigger: 'axis'
		},
		grid: {
			  left: '3%',
			  right:'10%',
			  top:'10%',
			  bottom:'8%',
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
		xAxis : {
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
		            data : xData
		        },
		    yAxis : [{
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
		             formatter: '{value}',
		         }
		        }],
		    series : [
		        {
		            name:'获得电力指数',
		            type:'line',
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
		                	color:'#00F5FF',
		                	areaStyle: {type: 'default'}}    
		            },
		            data:data
		        }
		    ]
		};
	var myChart = echarts.init($('#chart4')[0]);
	myChart.clear();
    myChart.setOption(option);
}

var data5 = [];
function getChart5(data){
	data5 = data;
	chart5(data.xData,data.data["2015"][0],data.data["2015"][1],data.legend);
}
function change5(date){
	chart5(data5.xData,data5.data[date][0],data5.data[date][1],data5.legend);
}

function chart5(xData,barData,lineData,legend){
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
			data: legend,
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
			//min:-10,
			position: 'left',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontSize:8
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
	        axisLabel: {
	            color: '#fff',
	            fontSize: 10
	        },
			splitLine: {
				show: false
			}
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
				textStyle: {
					color: '#fff',
					fontSize:10
				},
				formatter: '{value}%'
			}
		}],
		series: [{
			name: "用电量",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#00FFFF',
					//barBorderRadius: 50,
				},
			},
			data: barData,
		}, {
			name: "增长率",
			type: "line",
			yAxisIndex: 1,
			itemStyle: {
				normal: {
					color: '#E9DC37'
				},
			},
			data: lineData,

		}]
	};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(data){
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
			name: '',
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
				textStyle: {
					color: '#fff',
					fontSize:10
				},
				formatter: '{value}%'	
			}
		}],
		series: [{
			name: "本月用电量",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#00FFFF',
					barBorderRadius: 50,
				},
			},
			data: data[3]
		},{
			name: "本年累计用电量",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#002dff',
					barBorderRadius: 50,
				},
			},
			data: data[4]
		}, {
			name: "本月同比",
			type: "line",
			yAxisIndex: 1,
			itemStyle: {
				normal: {
					color: '#ff9b00'
				},
			},
			data: data[5]

		}, {
			name: "本年同比",
			type: "line",
			yAxisIndex: 1,
			itemStyle: {
				normal: {
					color: '#4bac0a'
				},
			},
			data: data[6]

		}]
	};
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}


var main1Dta = [];
function getMain1(data){
		main1Dta =data;
}
function change12(param){
	if (param == '1') {
		$("#ch").val("main1");
		main1(main1Dta,'2018-11');
	}else{
		$("#ch").val("main");
		main(mainDta,1,'2018-11');
	}
}
function change11(){
	var date = $("#select").val();
	var type = $("#ch").val();
	if (type == 'main1') {
		main1(main1Dta,date);
	}else{
		main(mainDta,1,date);
	}
}

function main1(data,date){
	$(".c"). removeClass("check_btn_option_checked");
	$("#c2"). addClass("check_btn_option_checked");
        var province = data.province;
        var dd1 = data.pie[date][0];
        var dd2 = data.pie[date][1];
        var ss = data.code;
        var db = [];
        for (var i = 0; i < province.length; i++) {
			var f = [];
			f.push(dd1[i]);
			f.push(dd2[i]);
			f.push(province[i]);
			f.push(ss[i]);
			db.push(f);
		}
        var typeIndex = 1;
        var option = null;
        var pieData = [];
        var geoCoordMap = { //为了保证饼图不互相重叠，我对经纬坐标进行了调整
            '上海':  [121.472644,  31.231706],
            '云南':  [100.034699,25.91455],
            '内蒙古':  [110.263596,42.220711],
            '北京':  [116.405285,  39.904989],
            // '台湾': [121.509062, 25.044332],
            '吉林':  [126.5728,45.020069],
            '四川':  [100.660207,30.890097],
            '天津':  [119.190182,  39.125596],
            '宁夏':  [106.278179,  38.46637],
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
            '黑龙江':  [126.425621,49.042686],
        };
        
        var s = province;
        var xData = ["输入","输出"];
       
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
            var prodb = province, bardb = db, max = 10;
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
                        {value:bardb[i][0], itemStyle:{color:'#ff5e00'},visualMap: false},
                        {value:bardb[i][1], itemStyle:{color:'#27a809'},visualMap: false}
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
                        barWidth:'60%',
                        xAxisId: idx,
                        yAxisId: idx,
                        barGap: 0,
                        tooltip: {
                            formatter: function(params) {
                                var str = params.seriesName + "<br/>";
                                for(var i = 0; i < prodb.length; i++){
                                    if(prodb[i] == params.seriesName){
                                        str += xData[0] + "：" + bardb[i][0] + ' 万千瓦时<br />';
                                        str += xData[1] + "：" + bardb[i][1] + ' 万千瓦时<br />';
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
                text:'跨区域电量交换分析',
                subtext:'单位：万千瓦时',
                top:'1%',
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
                data: ["输入","输出"],
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
                	//alert(JSON.stringify(params));
                	for (var i = 0; i < db.length; i++) {
                		if (params.name == db[i][2]) {
                            return params.name + "<br/>" + "输入: " + db[i][0] + "万千瓦时"+ "<br/>" + "输出: " + db[i][1] + "万千瓦时";
                        }
					}
                }
            },
            visualMap: {
                type: 'piecewise',
                show: false,
                pieces: [{
                    min: 0,
                    max: 1,
                    color: '#c7cf72'
                }, {
                    min: 1,
                    max: 2,
                    color: '#03dcdf'
                }, {
                    min: 2,
                    max: 3,
                    color: '#b5cff4'
                }, {
                    min: 3,
                    max: 4,
                    color: '#b5a2bf'
                }, {
                    min: 4,
                    max: 5,
                    color: '#9cccd6'
                },{
                    min: 5,
                    max: 6,
                    color: '#798bf4'
                },{
                    min: 6,
                    max: 7,
                    color: '#cac8d8'
                }],
                itemHeight:10,
                itemWidth:15,
                left: 'left',
                top: 'bottom',
                //text: ['高    (万吨)', '低    (万吨)'], // 文本，默认为数值文本
                calculable: true,
                // seriesIndex: [0],
               /* inRange: {
                    color: ["#aeb2f7","#3c68f3","#061ae1" ]
                },*/
                textStyle:{
                    color:'#fff'
                },
            },
            series: [{
                name: 'total',
                type: 'map',
                mapType: 'china',
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
                data: convertMapDta(province[typeIndex], db),
                z: 3
            }]
        };
        var myChart = echarts.init($('#main')[0]);
        if (option && typeof option === "object") {
        	 myChart.clear();
            myChart.setOption(option, true);
        }
        /*pie*/
        setTimeout(function(){addBar(myChart, data);
        myChart.clear();
        myChart.setOption(option);}, 10);
}

var mainDta = [];
function getMain(data){
	mainDta =data;
	main(mainDta,1,'2018-11');
}

function main(data,type,date){
	$(".c"). removeClass("check_btn_option_checked");
	$("#c1"). addClass("check_btn_option_checked");
		 var province = data.province, db = data.pie;
	var geoCoordMap = {
		    '东北': [126.752173,46.827019],
		    '华东': [119.761201,30.894063],
		    '华中': [112.457474,29.358783],
		    '西北': [95.256001,38.191857],
		    '西南': [99.229817,29.873218],
		    '华南': [110.30499,21.825462],
		    '华北': [116.22892,40.757896],
		    '出口': [104.099352,46.390782],
		    '出口1': [100.487732,19.44585],
			'进口': [104.099352,46.390782],
		    '进口1': [100.487732,19.44585]
		};
	var pieces1 = [{
        max: -8,
        color: '#3ab62c'
    },{
    	min: -8,
        max: -7,
        color: '#cac8d8'
    }, {
        min: -7,
        max: -6,
        color: '#798bf4'
    }, {
        min: -6,
        max: -5,
        color: '#9cccd6'
    }, {
        min: -5,
        max: -4,
        color: '#b5a2bf'
    }, {
        min: -4,
        max: -3,
        color: '#b5cff4'
    },{
        min: -3,
        max: -2,
        color: '#03dcdf'
    },{
        min: -2,
        max: -1,
        color: '#c7cf72'
    },{
        min: -1,
        max: 0,
        color: '#1dc004'
    },{
        min: 0,
        max: 1000,
        color: '#078cda'
    },{
        min: 1000,
        max: 10000,
        color: '#afb506'
    },{
        min: 10000,
        max: 100000,
        color: '#bc7b06'
    },{
        min: 100000,
        max: 500000,
        color: '#a800ff'
    },{
        min: 500000,
        color: '#ff4f00'
    }];
	
	var pieces2 = [{
        max: -8,
        color: '#3ab62c'
    },{
    	min: -8,
        max: -7,
        color: '#cac8d8'
    }, {
        min: -7,
        max: -6,
        color: '#798bf4'
    }, {
        min: -6,
        max: -5,
        color: '#9cccd6'
    }, {
        min: -5,
        max: -4,
        color: '#b5a2bf'
    }, {
        min: -4,
        max: -3,
        color: '#b5cff4'
    },{
        min: -3,
        max: -2,
        color: '#03dcdf'
    },{
        min: -2,
        max: -1,
        color: '#c7cf72'
    },{
        min: -1,
        max: 10,
        color: '#035af6'
    },{
        min: 10,
        max: 1000,
        color: '#53bc0e'
    },{
        min: 1000,
        max: 10000,
        color: '#e0ff00'
    },{
        min: 10000,
        max: 100000,
        color: '#e0ff00'
    },{
        min: 100000,
        max: 1000000,
        color: '#ffba00'
    },{
        min: 1000000,
        max: 5000000,
        color: '#a800ff'
    },{
        min: 5000000,
        color: '#ff4f00'
    }];
	
	var das = [];
	if (type == "1") {
		das = data.valueOut[date][0];
	}else{
		das = data.valueIn[date][0];
	}
	var data1 = das[0];
	var data2 = das[1];;
	var data3 = das[2];;
	var data4 = das[3];;
	var data5 = das[4];;
	var data6 = das[5];;
	var data7 = das[6];;
	
	function convertMapDta(type, data) {
        var mapData = [];
        for (var i = 0; i < data.length; i++) {
            mapData.push({
                'name': province[i],
                "value": data[i][1]
            })
        }
        return mapData;
    }

		var convertData = function (data) {
		    //console.log(data);
		    var res = [];
		    for (var i = 0; i < data.length; i++) {
		        var dataItem = data[i];
		        var fromCoord = geoCoordMap[dataItem[0].name];
		        var toCoord = geoCoordMap[dataItem[1].name];
		        if (fromCoord && toCoord) {
		            res.push({
		                fromName: dataItem[0].name,
		                toName: dataItem[1].name,
		                coords: [fromCoord, toCoord],
		                value: dataItem[1].value
		            });
		        }
		    }
		    return res;
		};

		var color = ['#a6c84c', '#ffa022', '#46bee9'];
		var series = [];
		[['华北', data1], ['东北', data2], ['华东', data3], ['华中', data4], ['西北', data5], ['西南', data6], ['华南', data7]].forEach(function (item, i) {
		    //console.log(item,i);
		    series.push(
		    {
		        type: 'lines',
		        zlevel: 1,
		        symbol: ['none', 'arrow'],
		        symbolSize: 10,
		        visualMapIndex:9,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0,
		            color:'#ff3000',
		            symbol: 'pin',
		            symbolSize: 15
		            
		        },
		        itemStyle: {
		            normal: {
		                color: 'red'
		            }
		        },
		        lineStyle: {
		            normal: {
		                width: 3,
		                opacity: 0.6,
		                curveness: 0.2,
		               color: 'red'
		            }
		        },
		        data: convertData(item[1])
		    },
		    {
		        name: item[0] + ' Top10',
		        type: 'effectScatter',
		        coordinateSystem: 'geo',
		        zlevel: 2,
		      //波纹效果
		        rippleEffect: {
		            period: 2,
		            brushType: 'stroke',
		            scale: 3
		        },
		        label: {
		            normal: {
		                show: true,
		                position: 'right',
		                color: '#fff',
		                fontSize: 16,
		                formatter: function (val) {
		                	if(val.name == "出口1"){
		                		return "出口";
		                	}
		                	if(val.name == "进口1"){
		                		return "进口";
		                	}
				            return val.name;//val[2] / 8;
				        }
		            }
		        },
		        symbolSize: function (val) {
		            return 15;//val[2] / 8;
		        },
		        itemStyle: {
		            normal: {
		                color: 'red'
		            }
		        },
		        data: item[1].map(function (dataItem) {
		            return {
		                name: dataItem[1].name,
		                value: geoCoordMap[dataItem[1].name].concat([dataItem[1].data])
		            };
		        })
		    });
		});
		series.push({
            name: 'total',
            type: 'map',
            mapType: 'china',
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
            data: convertMapDta(province[1], db),
        });

		option = {
		    
		    title : {
		        text: '跨区域电量交换分析',
		        subtext: '单位: 万千瓦时',
		        left: 'center',
		        textStyle : {
		            color: '#fff'
		        }
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter:function(params, ticket, callback){
		        	//alert(JSON.stringify(params));
		        	
		        	 var data = [];
		                if (params.data.fromName == '华北'||params.data.name == '华北') {
		                	data = data1;
						}else if(params.data.fromName == '东北'||params.data.name == '东北') {
		                	data = data2;
						}else if(params.data.fromName == '华东'||params.data.name == '华东') {
		                	data = data3;
						}else if(params.data.fromName == '华中'||params.data.name == '华中') {
		                	data = data4;
						}else if(params.data.fromName == '西北'||params.data.name == '西北') {
		                	data = data5;
						}else if(params.data.fromName == '西南'||params.data.name == '西南') {
		                	data = data6;
						}else if(params.data.fromName == '华南'||params.data.name == '华南') {
		                	data = data7;
						}
		            if(params.seriesType=="effectScatter") {
		                var vs =  params.data.name+"地区"+(type==1?"输出":"输入")+"电量";//params.data.name+"地区";
		                for (var i = 0; i < data.length; i++) {
		                	if(data[i][0].name != data[i][1].name){
		                		var a = data[i][1].name;
		                		if (a == "出口1") {
									a = "出口";
								}
		                		if (a == "进口1") {
									a = "进口";
								}
		                		var name2 = data[i][0].name+' → '+a+' : '+data[i][1].value;
		                		if (a == "出口"||a == "进口") {
		                			 name2 = a+' : '+data[i][1].value;
								}	
		                		vs = vs+'<br/>'+name2+" 万千瓦时";
		                	}
						}
		                return vs;
		            }else if(params.seriesType=="lines"){
		                var va = '';
		                for (var i = 0; i < data.length; i++) {
							if (params.data.toName == data[i][1].name) {
								va = data[i][1].value;
							}
						}
		                var b = params.data.toName ;
		                if (b == "出口1") {
		                	b = "出口";
						}
		                if (b == "进口1") {
		                	b = "进口";
						}
		                return params.data.fromName+" → "+b+"<br />输电量： "+va+" 万千瓦时";
		            }else{
		                return params.name;
		            }
		        }
		    },
		    visualMap: [{
                type: 'piecewise',
                show: false,
                pieces: pieces1,
                itemHeight:10,
                itemWidth:15,
                left: 'left',
                top: 'bottom',
                //text: ['高    (万吨)', '低    (万吨)'], // 文本，默认为数值文本
                calculable: true,
                // seriesIndex: [0],
               /* inRange: {
                    color: ["#aeb2f7","#3c68f3","#061ae1" ]
                },*/
                textStyle:{
                    color:'#fff'
                },
            }],
		    geo: {
		        map: 'china',
		        label: {
		            emphasis: {
		                show: true,
		                color:'#fff'
		            }
		        },
		        zoom:1.2, 
		        aspectScale:0.9,  
		        roam: false,
		        itemStyle: {
		            normal: {
		                areaColor: '#323c48',
		                borderColor: '#404a59'
		            },
		            emphasis: {
		                areaColor: '#2a333d'
		            }
		        }
		    },
		    series: series
		};
			 var myChart = echarts.init($('#main')[0]);
			 myChart.clear();
			    myChart.setOption(option);
}