$(document).ready(function(){
	 var d = ["全国","国电投","国能投","华能","大唐","华电","中核","中广核","三峡","国投电力","华润电力"];
	 var d2 = ["2018-02","2018-03","2018-04","2018-05","2018-06","2018-07","2018-08","2018-09","2018-10","2018-11"];
	    creatSelect(d,'select_chart1','全国',"change1");
	    creatSelect(d,'select_chart5','全国',"change5");
	    creatSelect(d2,'select_chart2','2018-11',"change2");
	    creatSelect(d2,'select_chart3','2018-11',"change3");
	    creatSelect(d2,'select_chart4','2018-11',"change4");
    var __time = "?__time=" + new Date();
    getdata('/energy/elec/security/main.json' + __time, main);
    getdata('/energy/elec/security/chart1.json', getChart1);
    getdata('/energy/elec/security/chart2.json', getChart2);
    getdata('/energy/elec/security/chart3.json', getChart3);
    //getdata('/energy/elec/security/chart2.json' + __time, chart2);
//    getdata('/energy/elec/security/chart3.json' + __time, chart3);
    getdata('/energy/elec/security/chart4.json', getChart4);
    getdata('/energy/elec/security/chart5.json', getChart5);
});

//判断是否为整数
function pdInteger(value){
    return value % 1 === 0;
}

function setH(id){
    var ids ='#'+ id+' div';
    $(ids).css('height','100%');
    $(ids).css('width','100%');
    $('canvas').css('height','100%');
    $('canvas').css('width','100%');
}

function changeMap(param){
    var id ="#"+param;
    $(".c"). removeClass("check_btn_option_checked");
    $(id). addClass("check_btn_option_checked");
    main(param);
}



var data1 = [];
function getChart1(data){
	data1 = data;
	chart1(data,"全国");
}
function change1(name){
	chart1(data1,name);
}

function chart1(data,name){
	var xData = data.xData;
//	var barData1 = data[4].map(function(v){
//		if(v<0){
//			return {value:v, itemStyle:{color:'#fed312'}};
//		}
//		return v;
//	});
	var val = data[name];
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
			data: data.legend,
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
				name:'起',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,15],
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
			}],
		series: [
			{
				name: "一般人身事故",
				type: "line",
				//barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2b88ff',
						// barBorderRadius: 50,
					},
				},
				data: val[0]
			},
			{
				name: "较大人身事故",
				type: "line",
				//barWidth: '30%',
				//yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#4df3f3',
						//barBorderRadius: 50,
					},
				},
				data: val[1]

			}
		]
	};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


var data2 = [];
function getChart2(data){
	data2 = data;
	chart2(data,"2018-11");
}
function change2(date){
	chart2(data2,date);
}
function chart2(data,date){
	var xData = data.xData;
	var val = data[date];
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
			bottom:'2%',
			data: data.legend,
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
				type: 'value',
				splitNumber:3,
				//max:5,
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontStyle: 'normal',
						fontSize:10
					},
					formatter: '{value}%'
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
				name: "设备可用率",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2b88ff',
						// barBorderRadius: 50,
					},
				},
				data: val[0]
			},
			{
				name: "同比上月",
				type: "bar",
				barWidth: '30%',
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#4df3f3',
						//barBorderRadius: 50,
					},
				},
				data: val[1]

			}
		]
	};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

var data3 = [];
function getChart3(data){
	data3 = data;
	chart3(data,"2018-11");
}
function change3(date){
	chart3(data3,date);
}
function chart3(data,date){
	var xData = data.xData;
	var val = data[date];
	//排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<val.length; i++){
        dataArray.push({"name": xData[i], "value": val[i]})
    }
    dataArray.sort(function(a,b){
        return b.value - a.value
    });
    for(var i=0; i<dataArray.length; i++){
    	xData[i] = dataArray[i].name;
        val[i] = dataArray[i].value;
    }
	var option =  {
		grid: {
			left: '3%',
			right:'3%',
			top:'10%',
			bottom:'4%',
			containLabel: true
		},
		legend: { //图例组件，颜色和名字
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			bottom:'2%',
			data: data.legend,
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
			}],
		series: [
			{
				//name: "设备利用率",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2b88ff',
						// barBorderRadius: 50,
					},
				},
				data: val			}
		]
	};
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

var data4 = [];
function getChart4(data){
	data4 = data;
	chart4(data,"2018-11");
}
function change4(date){
	chart4(data4,date);
}
function chart4(data,date){

    var val = data[date];
    var xData = data.xData;

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<val.length; i++){
        dataArray.push({"name": xData[i], "value": val[i]})
    }
    dataArray.sort(function(a,b){
        return b.value - a.value
    });
    for(var i=0; i<dataArray.length; i++){
    	xData[i] = dataArray[i].name;
        val[i] = dataArray[i].value;
    }

    option = {
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
        },
        "xAxis": [
            {
                "type": "category",
                "data": xData,
                "axisPointer": {
                    "type": "shadow"
                },
                boundaryGap: true,
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
                "splitLine": {
                    "show": false
                },
            }
        ],
        "yAxis": [
            {
                type: 'value',
                // name:data[1][0],
                nameGap:-5,
                nameTextStyle:{
                    padding:[0,0,0,25],
                    align:'center',
                    color:'#fff',
                },
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
                    formatter: function(value){
                        if(pdInteger(value)){
                            return value;
                        }else{
                            return "";
                        }
                    }
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
            }
        ],
        tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
        series: [
            {
                name: data.legend[0],
                symbolSize: function (data) {
                    return 10;
                },
                type: 'scatter',
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#5acbff'
                }, {
                    offset: 1,
                    color: '#5acbff'
                }]),
                "yAxisIndex": 0,
                data:val
            }
        ]
    };

    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}


var data5 = [];
function getChart5(data){
	data5 = data;
	chart5(data,"全国");
}
function change5(name){
	chart5(data5,name);
}

function chart5(data,name){
	var xData = data.xData;
	var val = data[name];
	var option =  {
		grid: {
			left: '3%',
			right:'3%',
			top:'10%',
			bottom:'4%',
			containLabel: true
		},
		legend: { //图例组件，颜色和名字
			show:false,
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			bottom:'2%',
			data: data.legend,
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
			}],
		series: [
			{
				name: "设备较大事故起数",
				type: "line",
				barWidth: '18%',
				itemStyle: {
					normal: {
						color: '#2b88ff',
						// barBorderRadius: 50,
					},
				},
				data: val[0]
			},{
				name: "核电厂INES三级及以上事件数",
				type: "line",
				barWidth: '18%',
				itemStyle: {
					normal: {
						color: '#5ed7ee',
						// barBorderRadius: 50,
					},
				},
				data: val[1]
			},{
				name: "水库、灰库和尾矿库大坝溃坝事故起数",
				type: "line",
				barWidth: '18%',
				itemStyle: {
					normal: {
						color: '#00ffc4',
						// barBorderRadius: 50,
					},
				},
				data: val[2]
			},{
				name: "较大及以上电力安全事故起数",
				type: "line",
				barWidth: '18%',
				itemStyle: {
					normal: {
						color: '#f6cf57',
						// barBorderRadius: 50,
					},
				},
				data: val[3]
			}
		]
	};
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}


function main(data){

	var geoCoordMap = {
    '欧盟': [17.522823,49.608619],
    '日本': [140.711122,39.889252],
    '美国': [-101.838839,40.002538],
    '中国': [103.033458,34.354405]
	};
	// 获取地图中起点和终点的坐标，以数组形式保存下来
	var convertData = function(data) {
	    var res = [];
	    for (var i = 0; i < data.length; i++) {
	        var dataItem = data[i];
	        var fromCoord = geoCoordMap[dataItem[1].name];
	        var toCoord = geoCoordMap[dataItem[0].name];
	        if (fromCoord && toCoord) {
	            res.push([{
	                coord: fromCoord // 起点坐标
	            }, {
	                coord: toCoord // 终点坐标
	            }])
	        }
	    }
	    return res;
	}
	
	// 广州
	var GZData = [
	    [{
	        name: '中国'
	    }, {
	        name: "欧盟",
	        value: 30
	    }],
	    [{
	        name: '中国'
	    }, {
	        name: "日本",
	        value: 30
	    }],
	    [{
	        name: '中国'
	    }, {
	        name: "美国",
	        value: 30
	    }]
	];
	var color = ['#9ae5fc', '#dcbf71']; // 自定义图中要用到的颜色
	var series = []; // 用来存储地图数据

	[
	    ['中国', GZData]
	].forEach(function(item, i) {
	// 显示终点位置,类似于上面最后一个效果，放在外面写，是为了防止被循环执行多次
	series.push({
        // 白色航线特效图
        type: 'lines',
        zlevel: 1, // 用于分层，z-index的效果
        effect: {
            show: true, // 动效是否显示
            period: 6, // 特效动画时间
            trailLength: 0.7, // 特效尾迹的长度
            color: '#00fcff', // 特效颜色
            symbolSize: 3 // 特效大小
        },
        lineStyle: {
            normal: { // 正常情况下的线条样式
                color: color[0],
                width: 0, // 因为是叠加效果，要是有宽度，线条会变粗，白色航线特效不明显
                curveness: -0.2 // 线条曲度
            }
        },
        data: convertData(item[1]) // 特效的起始、终点位置
    }, { // 小飞机航线效果
        type: 'lines',
        zlevel: 2,
        //symbol: ['none', 'arrow'],   // 用于设置箭头
        symbolSize: 10,
        effect: {
            show: true,
            period: 6,
            trailLength: 0,
            color:'#ff3000',
            symbol: 'pin', // 特效形状，可以用其他svg pathdata路径代替
            symbolSize: 18
        },
        lineStyle: {
            normal: {
                color: color[0],
                width: 3,
                opacity: 0.6,
                curveness: -0.2
            }
        },
        data: convertData(item[1]) // 特效的起始、终点位置，一个二维数组，相当于coords: convertData(item[1])
    },{
	    type: 'effectScatter',
	    coordinateSystem: 'geo',
	    zlevel: 4,
	    rippleEffect: {
	        brushType: 'stroke'
	    },
	    label: {
	        normal: {
	            show: true,
	            //position: 'center',
	            color:'#fff',
	            formatter: function(v){
	            	//alert(JSON.stringify(v));
	            	return v.name
	            }
	        }
	    },
	    symbolSize:function(val) {
	    	if (val[3]*2>50) {
	    		return 50;
			}
	        return val[3]*2;
	    },
	    itemStyle: {
	        normal: {
	            color: function(v) {
	            	if (v.name == '中国') {
						return 'rgba(248,202,78,0.6)';
					}else{
						return 'rgba(79,178,244,0.6)';
					}
	    	    }
	        }
	    },
	    data: data
	},{
	    type: 'effectScatter',
	    coordinateSystem: 'geo',
	    zlevel: 3,
	    rippleEffect: {
            period: 3,
            brushType: 'stroke',
            scale: 3
        },
	    label: {
	        normal: {
	            show: true,
	            position: 'bottom',
	            color:'#fff',
	            fontSize:14,
	            formatter: function(v){
	            	//alert(JSON.stringify(v));
	            	return v.data.value[2]+": "+v.data.value[3]+'%';
	            }
	        }
	    },
	    symbolSize: function(val) {
	    	if (val[3]*1.5>50) {
	    		return 50;
			}
	        return val[3]*1.2;
	    },
	    itemStyle: {
	        normal: {
	            color: color[1]
	        }
	    },
	    data: data
	},{
        name: 'total',
        type: 'map',
        mapType: 'world',
        top:'20%',
        left:'7%',
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
        		 borderColor:'rgba(13,247,249,1)',
        		 areaColor: 'rgba(13,247,249,0)'
            },
        	 emphasis: {
            	 borderColor:'#55e6fc',
                 areaColor: '#4c70f7'
            }
        }
    });
	});

	// 最后初始化世界地图中的相关数据
	var option = ({
		title : {
	        text: '核心设备自给率和采购率',
	        left: 'center',
	        top:'4%',
	        textStyle : {
	            color: '#a4d6fe',
	            fontSize: 18
	        }
	    },
	    geo: {
	        map: 'world', // 与引用进来的地图js名字一致
	        roam: false, // 禁止缩放平移
	        zoom:1.2,
	        top:'20%',
	        left:'7%',
	        aspectScale:0.9,  
	        itemStyle: { // 每个区域的样式 
	            normal: {
	            	borderColor:'rgba(13,247,249,1)',
	        		areaColor: 'rgba(13,247,249,0)'
	            },
	            emphasis: {
	            	borderColor:'#55e6fc',
	                 areaColor: '#4c70f7'
	            }
	        },
	        regions: [{ // 选中的区域
	            name: 'China',
	            selected: true,
	            itemStyle: { // 高亮时候的样式
	                emphasis: {
	                    areaColor: 'rgba(68,99,239,0.3)'
	                }
	            },
	            label: { // 高亮的时候不显示标签
	                emphasis: {
	                    show: false
	                }
	            }
	        }]
	    },
	    series: series, // 将之前处理的数据放到这里
	    textStyle: {
	        fontSize: 12
	    }
	});
    var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

