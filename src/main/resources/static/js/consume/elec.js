$(document).ready(function(){
	var d = ["2018-02","2018-03","2018-04","2018-05","2018-06","2018-07","2018-08","2018-09","2018-10","2018-11"];
    creatSelect(d,'change','2018-11',"change11");
	getdata('/consume/elec/main.json',getMain);
	getdata('/consume/elec/main1.json',getMain1)
	getdata('/consume/elec/chart1.json',chart1);
	//getdata('/consume/elec/chart2.json',getChart2);
	getdatax('/consume/elec/chart2.json',chart2);
	getdata('/consume/elec/chart3.json',chart3);
	getdata('/consume/elec/chart4.json',chart4);
	//getdata('/consume/elec/chart5.json',getChart5);
	getdatax('/consume/elec/chart5.json',chart5);
	getdatax('/consume/elec/chart6.json',chart6);
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
			position:['50%','50%'],  
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
				name:'     亿千瓦时',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,45],
			    	align:'center',
			    	color:'#fff',
				},
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
						color: '#2b88ff',
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
						color: '#4138e1',
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
						color: '#eeac53',
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
						color: '#4df3f3',
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

function chart2(data,date,a,name){
	//alert(JSON.stringify(data));
	data2 = data;
	var val = data.data[date];
	var color = [['#2b88ff', '#4df3f3', '#dedd4f'],['#4df3f3','#2b88ff','#dedd4f']]
	if (a != '2') {
		a = 1;
	}
	if (a == '2') {
		for (var i = 0; i < data.data[date].length; i++) {
			if (data.data[date][i].name == name&&data.data[date][i].data.length>0) {
				val = data.data[date][i].data;
			}
		}
	}
	//alert(JSON.stringify(val));
	option = {
		    color: color[a-1],
		    tooltip: {
		        trigger: 'item',
		        position:'right',
		        formatter: function (v){
		        	//alert(JSON.stringify(v));
		        	var va = v.name+' : '+v.data.value+' 万千瓦时<br/> 占比 ： '+v.percent +' %';
		        	return va;
		        }
		    },
		    series: [{
		            //name: '访问来源',
		            type: 'pie',
		            //selectedMode: 'single',
		            radius: [0, '60%'],
		            center:['50%','54%'],
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
		            data: val
		        },
		        {
		            type: 'pie',
		            radius: ['65%', '68%'],
		            center:['50%','54%'],
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
		            data:  val
		        }
		    ]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
    myChart.on('click', function rose(params) {
    	if (a == 1) {
    		myChart.clear();
    		chart2(data2,date,2,params.name);
		}else{
			myChart.clear();
			chart2(data2,date,1,'');
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
			position:['30%', '50%'], 
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
				name:'元/千瓦时',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,60],
			    	align:'center',
			    	color:'#fff',
				},
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
					color: 'rgb(77,243,243)',
					barBorderRadius: 50,
				},
			},
			areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(77,243,243,0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(77,243,243,0.4)'
                    }], false)
                }
            },
			data:data[2]

		}, {
			name: "一般工商业电价",
			type: "line",
			itemStyle: {
				normal: {
					color: 'rgb(43,136,255)',
					barBorderRadius: 50,
				},
			},
			areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(65, 56, 225,0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(65, 56, 225,0.4)'
                    }], false)
                }
            },
			data: data[3]
			//yAxisIndex: 1

		}, {
			name: "居民电价",
			type: "line",
			itemStyle: {
				normal: {
					color: 'rgb(222,221,79)',
					barBorderRadius: 50,
				},
			},
			areaStyle: {
                normal: {type: 'default',
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(222,221,79,0.4)'
                    }, {
                        offset: 1,
                        color: 'rgba(222,221,79,0.4)'
                    }], false)
                }
            },
			data: data[4]
		}]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var option = {
		tooltip : {
		  trigger: 'axis'
		},
		grid: {
			  left: '3%',
			  right:'3%',
			  top:'10%',
			  bottom:'18%',
			 containLabel: true
			 },
		legend: { //图例组件，颜色和名字
			show:true,
		   itemGap: 12, //图例每项之间的间隔
		   itemWidth: 16,
		   itemHeight: 8,
		   x:'center',
		   bottom:'2%',
		   data: data.legend,
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
		 data : data.xData
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
			             formatter: '{value}',
			         }
			        }],
		    series : [
		        {
		            name:'排名',
		            type:'line',
		            yAxisIndex: 1,
		            areaStyle: {
		                normal: {type: 'default',
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(43, 136, 255,0.4)'
		                    }, {
		                        offset: 1,
		                        color: 'rgba(43, 136, 255,0.4)'
		                    }], false)
		                }
		            },
		            smooth:true,
		            itemStyle: {
		                normal: {
		                	color:'#2b88ff',
		                	areaStyle: {type: 'default'}}    
		            },
		            data:data.data[0]
		        },{
		            name:'获得电力指数',
		            type:'line',
		            areaStyle: {
		                normal: {type: 'default',
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(43, 136, 255,0.4)'
		                    }, {
		                        offset: 1,
		                        color: 'rgba(43, 136, 255,0.4)'
		                    }], false)
		                }
		            },
		            smooth:true,
		            itemStyle: {
						normal: {
							color: 'rgb(77,243,243)',
							barBorderRadius: 50,
						},
					},
					areaStyle: {
		                normal: {type: 'default',
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(77,243,243,0.4)'
		                    }, {
		                        offset: 1,
		                        color: 'rgba(77,243,243,0.4)'
		                    }], false)
		                }
		            },
		            data:data.data[1]
		        }
		    ]
		};
	var myChart = echarts.init($('#chart4')[0]);
	myChart.clear();
    myChart.setOption(option);
}


function chart5(data,name){
	var val = data.data[name];
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
				data: data.legend,
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
				data: data.xData,
			}],
			yAxis: [{
				name:'     万千瓦时',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,45],
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
				name: "用电量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2b88ff'
					},
				},
				data: val[0]
			},{
				name: "增长率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#4df3f3'
					},
				},
				data: val[1]
			}]
		};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}



function chart6(data,date){
	var xData = data.xData;
	var value = data.data[date];
	
	var val = value;
	//排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<val[0].length; i++){
        dataArray.push({"name": xData[i], "value": val[1][i],"value1":val[0][i]})
    }
    dataArray.sort(function(a,b){
        return b.value - a.value
    });
    for(var i=0; i<dataArray.length; i++){
    	xData[i] = dataArray[i].name;
        val[0][i] = dataArray[i].value1;
        val[1][i] = dataArray[i].value;
    }
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
			data: data.xData,
		}],
		yAxis: [{
			name:' 千瓦时',
    		nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,45],
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
			name: "本月用电量",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#00FFFF',
					barBorderRadius: 50,
				},
			},
			data: value[0]
		},{
			name: "本年累计用电量",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#2b88ff',
					barBorderRadius: 50,
				},
			},
			data: value[1]
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
		$("#ch").val("main");
		$(".main_order_type").css('display','')
		elecMode(1)
	}else{
		$("#ch").val("main1");
		$(".main_order_type").css('display','none');
		main1(main1Dta,'2018-11');
	}
}
function change11(date){
	//var date = $("#select").val();
	var type = $("#ch").val();
	if (type == 'main1') {
		main1(main1Dta,date);
	}else{
		main(mainDta,1,date);
	}
}

function elecMode(d){
     $(".main_show_type").removeClass("main_show_power_checked")
     $(".main_show_type").removeClass("main_show_installed_checked")
     $(".main_show_type").removeClass("main_show_installed")

     if(d=='1'){
    	 $("#elec_in").addClass("main_show_power main_show_power_checked");
    	 $("#elec_out").addClass("main_show_installed");
    	 main(mainDta,d,'2018-11');
     }else{
    	 $("#elec_in").addClass("main_show_installed");
    	 $("#elec_out").addClass("main_show_power main_show_power_checked");
    	 main(mainDta,d,'2018-11');
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
                text:'跨省域电量交换分析',
                subtext:'单位：万千瓦时',
                left:'center',
                textStyle: {
                    color: '#a4d6fe',
                    fontSize:16,
                },
                subtextStyle: {
                    color: '#a4d6fe',
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
                    color: '#8391fc'
                }, {
                    min: 1,
                    max: 2,
                    color: '#d0d3e9'
                }, {
                    min: 2,
                    max: 3,
                    color: '#b5cff4'
                }, {
                    min: 3,
                    max: 4,
                    color: '#b0b7ee'
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
	$("#main canvas").empty();
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
        color: '#b0b7ee'
    }, {
        min: -4,
        max: -3,
        color: '#b5cff4'
    },{
        min: -3,
        max: -2,
        color: '#d0d3e9'
    },{
        min: -2,
        max: -1,
        color: '#8391fc'
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
        color: '#7483f0'
    }, {
        min: -7,
        max: -6,
        color: '#62c4d7'
    }, {
        min: -6,
        max: -5,
        color: ''
    }, {
        min: -5,
        max: -4,
        color: ''
    }, {
        min: -4,
        max: -3,
        color: ''
    },{
        min: -3,
        max: -2,
        color: ''
    },{
        min: -2,
        max: -1,
        color: ''
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
	var das = [];
	if (type == "1") {
		das = data.valueIn[date][0];
		das[0].push(
				[{
					"name": "进口"
				}, {
					"name": "进口",
					"data": 0,
					"value": 0
				}],
				[{
					"name": "进口1"
				}, {
					"name": "进口1",
					"data": 0,
					"value": 0
				}]);
	}else{
		das = data.valueOut[date][0];
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
		        zlevel: 2,
		        symbol: ['none', 'arrow'],
		        symbolSize: 10,
		        visualMapIndex:9,
		        effect: {
		            show: true,
		            period: 6,
		            trailLength: 0,
		            color:'#ff3000',
		            symbol: 'pin',
		            symbolSize: 12
		            
		        },
		        lineStyle: {
		            normal: {
		                width: 2,
		                opacity: 0.6,
		                curveness: 0.2,
		               color: 'red'
		            }
		        },
		        data: convertData(item[1])
		    },
		   /*{
		        type: 'lines',
		        zlevel: 1,
		        symbol: ['none', 'arrow'],
		        symbolSize: 10,
		        visualMapIndex:9,
		        effect: {
		        	show: true, // 动效是否显示
		            period: 6, // 特效动画时间
		            trailLength: 0.7, // 特效尾迹的长度
		            color: '#ffef00', // 特效颜色
		            symbol: 'pin',
		            symbolSize: 11 // 特效大小
		            
		        },
		        lineStyle: {
		            normal: {
		                width: 2,
		                opacity: 0.6,
		                curveness: 0.2,
		               color: 'red'
		            }
		        },
		        data: convertData(item[1])
		    },*/
		    {
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
		            return 25;//val[2] / 8;
		        },
		        itemStyle: {
		            emphasis:{
	                	color:'#00ff7f'
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
            itemStyle:{
            	normal: {
            		 borderColor:'#fff',
	                 areaColor: '#4c70f7'
                },
            	 emphasis: {
	            	 borderColor:'#55e6fc',
	                 areaColor: '#4c70f7'
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
		            color: '#a4d6fe',
		            fontSize:16,
		        },
		        subtextStyle : {
		            color: '#a4d6fe',
		            fontSize:10,
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
		                var vs = ''; 
		                var vd =	params.data.name+"地区"+(type==1?"输出":"输入")+"电量";
		                if ((params.data.name == '进口'||params.data.name == '进口1')||(params.data.name == '出口'||params.data.name == '出口1')) {
		                	vs =  "";//params.data.name+"电量";
		                	vd =  "";
						}
		                var num = 0;
		                for (var i = 0; i < data.length; i++) {
		                	num = num +data[i][1].value;
		                	if(data[i][0].name != data[i][1].name){
		                		var a = data[i][1].name;
		                		var b = data[i][0].name;
		                		if (a == "出口1"||b == "出口1") {
									a = "出口";
									b = "出口";
								}
		                		if (a == "进口1"||b == "进口1") {
									a = "进口";
									b = "进口";
								}
		                		var name2 = b+' → '+a+' : '+data[i][1].value;
		                		if (a == "出口"||a == "进口") {
		                			 name2 = a+' : '+data[i][1].value;
								}	
		                		vs = vs+'<br/>'+name2+" 万千瓦时";
		                	}
						}
		                if (num<1) {
							num = "";
						}else{
							num =": "+num+' 万千瓦时';
						}
		                return vd +num+vs;
		            }else if(params.seriesType=="lines"){
		                var va = '';
		                for (var i = 0; i < data.length; i++) {
							if (params.data.toName == data[i][1].name) {
								va = data[i][1].value;
							}
						}
		                var b = params.data.toName ;
		                var c = params.data.fromName;
		                if (b == "出口1"||c == "出口1") {
		                	b = "出口";
		                	c = "出口";
						}
		                if (b == "进口1"||c == "进口1") {
		                	b = "进口";
		                	c = "进口";
						}
		                if (b==c) {
		                	return b+"<br />电量： "+va+" 万千瓦时";
						}
		                return c+" → "+b+"<br />输电量： "+va+" 万千瓦时";
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
                //seriesIndex: [1,],
                itemWidth:15,
                left: 'left',
                top: 'bottom',
                //text: ['高    (万吨)', '低    (万吨)'], // 文本，默认为数值文本
                calculable: true,
                // seriesIndex: [0],
               /* inRange: {
                    color: ["#aeb2f7","#3c68f3","#061ae1" ]
                },*/
                itemStyle:{
                	normal: {
                		 borderColor:'rgba(1,11,1,0)',
                		 areaColor: 'rgba(1,11,1,0)'
                    },
                	 emphasis: {
    	            	 borderColor:'rgba(1,11,1,0)',
    	                 areaColor: 'rgba(1,11,1,0)'
    	            }
                },
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
		        itemStyle:{
	            	normal: {
	            		 borderColor:'grba(1,1,1,0)',
		                 areaColor: 'grba(1,1,1,0)'
	                },
	            	 emphasis: {
		            	 borderColor:'grba(1,1,1,0)',
		                 areaColor: 'grba(1,1,1,0)'
		            }
	            }
		    },
		    series: series
		};
			 var myChart = echarts.init($('#main')[0]);
			 myChart.clear();
			    myChart.setOption(option);
}