$(document).ready(function(){
    main();
    getdata('/statecn/gasTrade/chart1.json',chart1);
    getdata('/statecn/gasTrade/chart2.json',chart2);
    getdata('/statecn/gasTrade/chart3.json',chart3);
    getdata('/statecn/gasTrade/chart4.json',chart4);
});

function main(){
    var cnMap = {};
    for(var n in _country){
        cnMap[_country[n]] = n;
    }
    getdata('/statecn/gasTrade/main.json', function(data){
        var color = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#b9e1f2", "#ffffff"];
        var regionCss = [{name:"China", itemStyle:{color:'#ffa24c'}}];
        
        var option = {
        		title: [{
                    text:'天然气贸易路线  (2017)',
                    textStyle:{
                        fontSize:16,
                        color:'#29B8FF'
                    },
                    top:'3%'
                },{
                    text:'进口量单位：十亿立方米',
                    left:'1%',
                    top:36,
                    textStyle:{
                        fontSize:10,
                        color:'#fff'
                    },
                    subtextStyle:{
                        color:'#fff'
                    },
                },{
                    text:'标普评级',
                    textStyle:{
                        fontSize:12,
                        color:'#fff'
                    },
                    subtextStyle:{
                        color:'#fff'
                    },
                    left:'14%',
                    bottom:100
                }],		
            geo: {
                show: true,
                map: 'world',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                regions: [
                    {
                        name: "China",
                        itemStyle: {
                            areaColor: "#003CAF"
                        }
                    }
                ],
                aspectScale:1.5,
                roam: false,
                itemStyle: {
                    // normal: {
                    //     areaColor: 'transparent',
                    //     borderColor: '#3fdaff',
                    //     borderWidth: 1,
                    //     shadowColor: 'rgba(63, 218, 255, 0.3)',
                    //     shadowBlur: 10
                    // },
                    normal:{
                        areaColor:"#4574FF"
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            legend: [{
		    	show:true,
	            bottom : '2%',
	            //left:'5%',
	            itemGap: 12, //图例每项之间的间隔
	            itemWidth: 16, //图例宽度
	            itemHeight: 2, //图例高度
	            textStyle: {
	                color:'#fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
		        data: ['管道方式','LNG方式'],
		    },{
		    	show:true,
		    	orient: 'vertical',
	            bottom : '2%',
	            left:'5%',
	            itemGap: 12, //图例每项之间的间隔
	            itemWidth: 16, //图例宽度
	            itemHeight: 8, //图例高度
	            textStyle: {
	                color:'#fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
		        data: ['安全                           AA至AAA','基本安全                    BBB-至AA-','存在风险                    BB-至BBB-','高风险                        BB-以下'],
		    }],
            tooltip:{
                formatter:function(params){
                    var showStr = params.name+"<br>进口量："+params.data.value[2].toFixed(2)+"(十亿立方米)<br>占比："+params.data.value[3].toFixed(2)+'%';
                        return showStr;
                }
            },
            series :[ 
                {
                    name: '进口量',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    zlevel: 2,
                    data: data.import,
                    symbolSize: function (val) {
                        return 10;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                     label: {
                         normal: {
                        	 position:'left',
                        	 formatter:function(param){
                        		 return param.name+':'+param.data.value[2].toFixed(2);
                        	 },
                             show: true
                         }
                     },
                    itemStyle: {
                        normal: {
                            color: function (v){
                            	var s = v.data.value[4];
                            	var cl = '';
                            	if (s == 'AA' || s == 'AA+' || s == 'AAA') {
                            		cl = '#079e13';
								}else if (s == 'BBB-' || s == 'BBB' || s == 'BBB+'|| s == 'A-' || s == 'A'|| s == 'A+' || s == 'AA-') {
									cl = '#c9ff00';
								}else if (s == 'BB-'|| s == 'BB'|| s == 'BB+'|| s == 'BBB'){
									cl = '#ff9b00';
								}else if (s == '-'){
									//cl = '#ff9b00';
								}else {
									cl = 'red';
								}
                            	return cl;
                            },//'#F4E925',
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    }
                },
                {
                    name:'进口',
                    type:'lines',
                    coordinateSystem: 'geo',
                    large: true,
                    zlevel: 1,
                    largeThreshold: 100,
                    effect: {
                        show: true,
                        constantSpeed: 30,
                        symbol: 'arrow',
                        symbolSize: 8,
                        trailLength: 0,
                    },
                    lineStyle: {
                        normal: {
                            color:function (v){
                            	if (v.dataIndex<4) {
									return '#ff2800';
								}else{
									return '#F4E925';
								}
                            },
                            width: 2,
                            curveness: 0.3
                        }
                    },
                    blendMode: 'lighter',
                    data:convertLines(data.import,false)
                }, {
    	        	type:'pie',
    	        	radius: 0,
    	        	center: ['-30%', '-50%'],
    	        	color: ["#ff2800", "#F4E925"],
    	        	 itemStyle:{
    	                 normal: {
    	                     show:false,
    	                }
    	            },
    	            label: {
    	                normal: {
    	                     show:false,
    	                }
    	            },
    	            labelLine: {
    	                normal: {
    	                    show: false
    	                }
    	            },
    	        	data:[{name:"管道方式",value:1},
    	        	      {name:"LNG方式",value:1}
    	        	      ]
    	        },{
    	        	type:'pie',
    	        	radius: 0,
    	        	center: ['-30%', '-50%'],
    	        	color:["#079e13","#c9ff00","#ff9b00","red"],
    	        	 itemStyle:{
    	                 normal: {
    	                     show:false,
    	                }
    	            },
    	            label: {
    	                normal: {
    	                     show:false,
    	                }
    	            },
    	            labelLine: {
    	                normal: {
    	                    show: false
    	                }
    	            },
    	            data:[{name:"安全                           AA至AAA",value:1},
    	        	      {name:"基本安全                    BBB-至AA-",value:1},
    	        	      {name:"存在风险                    BB-至BBB-",value:1},
    	        	      {name:"高风险                        BB-以下",value:1}
    	        	      ]
    	        }
            ]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}
function convertLines(d,fromCn){
    var o = [];
    for(var i = 0; i < d.length; i++){
        if(fromCn){
            o.push({
                fromName: "中国",
                toName: d[i].name,
                coords:[ [108.751592, 34.447119],[d[i].value[0],d[i].value[1]] ]
            });
        }else{
            o.push({
                fromName: "中国",
                toName: d[i].name,
                coords:[  [d[i].value[0],d[i].value[1]],[108.751592, 34.447119] ]
            });
        }

    }
    return o;
}
//中国LNG来源国结构
function chart1(data){
    var option = {
        color: ['#070093','#ffd312','#1c3fbf','#8121dd','#1482e5','#6ed5ff','#2874ff','#b9e1f2','#305496','#fff'],
        tooltip : {
            trigger: 'item',
            formatter:function(params){
                return params.data.name+"<br>进口量："+params.data.value+"(十亿立方米)<br>占比："+params.data.rate;
            }
        },
        legend: {
            x : 'center',
            y : 'bottom',
            type:'scroll',
            textStyle:{
                color:'#fff'
            },
            itemWidth: 12,
            itemHeight: 8,
            pageButtonItemGap:1,
            pageTextStyle:{
                color:'#fff',
            },
        },
        series : [
            {
                name:'其他国家',
                type:'pie',
                radius : [40, 65],
                center : ['50%', '45%'],
                label:{show:false},
                labelLine: {
                    show:false,
                    length: 5,
                    length2: 10
                },
                data:data.others
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}
//中国PNG来源国结构
function chart2(data){
    var pieSeries = [], max = 0;
    data.forEach(function(o){
        max += o.value;
    });
    data.map(function(dataObj,i){
        var pieRadius = 14*(i+1);
        var otherValue = max - dataObj.value;
        dataObj.itemStyle = {
            "normal": {
                "color": new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    "offset": 0,
                    "color": 'rgba(21,217,250,0.4)'
                }, {
                    "offset": 0.3,
                    "color": 'rgba(21,217,250,1)'
                }]),
            }
        };
        pieSeries.push({
            type:'pie',
            radius : [pieRadius, pieRadius+8],
            center : ['48%', '45%'],
            startAngle:90,
            label:{
                show:true,
                color:'#fff',
            },
            labelLine: {
                show:true,
                lineStyle:{
                    color:'#fff',
                },
                length: 4,
                length2: 4
            },
            hoverOffset:3,
            data:[dataObj,{
                value:otherValue,
                itemStyle:{
                    color:'#032f65',
                },
                label:{show:false},
                labelLine:{show:false, length:0, length2:0}
            }]
        });
    });

    var option = {
        tooltip : {
            trigger: 'item',
            formatter:function(params){
                if(params.data.name==null||typeof params.data.name == 'undefined')
                    return null;
                return params.data.name+"<br>进口量："+params.data.value+"<br>占比："+params.data.rate;
            }
        },
        series : pieSeries
    };

    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}
//管道进口输气能力
function chart3(data){
    var option = {
        tooltip:{
            formatter:function(params){
                var data = params.data;
                var val = data.value;
                var year = data.year;
                var n = '亿方/年<br/>预计投产年份: ';
                if (year=='2009/2010'||year=='2014'||year=='2013') {
                	n = '亿方/年<br/>投产年份: ';
				}
                return params.name + "<br />设计输气能力："+val+n+year;
            }
        },
        color:['#366DFF','#15C0FE','#FFD200','#FFFFFF'],
        grid:{
            top:'12%',
            bottom:'20%'
        },
        xAxis: {
            axisLabel: {
                textStyle: {
                    color: '#fff'
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
            data:data[0]
        },
        yAxis: [{
        	axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitNumber:4,
            name:'亿方/年',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            type: 'value'
        }],
        series: [
            {
                type: 'bar',
                stack:'bar-group',
                barWidth:20,
                data: data[1]
            }
        ]
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}
//2017天然气进出口数据
function chart4(data){
    var option = {
    		tooltip: {
    	        trigger: 'axis',
    	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
    	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    	        }
    	    }, 
        color:['#366DFF','#15C0FE','#FFD200','#FFFFFF'],
        grid:{
            top:'12%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
        legend:{
            show:true,
            bottom : 5,
            type:'scroll',
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data:data[0]
        },
        xAxis: {
            axisLabel: {
                textStyle: {
                    color: '#fff'
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
            data:data[5]
        },
        yAxis: [{
        	axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            max:1800,
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
            splitNumber:4,
            name:'亿方',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,35],
                align:'center',
                color:'#fff',
            },
            type: 'value'
        }],
        series: [
            {
                name:data[0][0],
                type: 'bar',
                stack:'bar-group',
                barWidth:30,
                data: data[1]
            },
            {
                name:data[0][1],
                type: 'bar',
                stack:'bar-group',
                data: data[2]
            },
            {
                name:data[0][2],
                type: 'bar',
                stack:'bar-group',
                data: data[3]
            },
            {
                name:data[0][3],
                type: 'bar',
                stack:'bar-group',
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}