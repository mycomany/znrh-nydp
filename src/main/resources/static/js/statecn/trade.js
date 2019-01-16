$(document).ready(function(){
    main();
    getdata('/statecn/trade/chart1.json',chart1);
    getdata('/statecn/trade/chart2.json',chart2);
    getdata('/statecn/trade/chart3.json',chart3);
});

function main(){
    var cnMap = {};
    for(var n in _country){
        cnMap[_country[n]] = n;
    }
    getdata('/statecn/trade/main.json', function(data){
        var color = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#b9e1f2", "#ffffff"];
        var regionCss = [];
        for(var i = 0; i < data.top.length; i++){
            var c = data.top[i].name, v = data.top[i].value;
            regionCss.push({
                name: _country[c],
                itemStyle: {
                    normal: {
                        areaColor: '#2874ff',
                    }
                }
            });
        }
        var data1 = data.top.map(function(o){
           return o;
        });
        var option = {
        		title:[{
                    text:'石油贸易路线  (2017)',
                    //subtext:'进口量单位：万吨',
                    textStyle:{
                        fontSize:16,
                        color:'#59EBE8'
                    },
                    top:'3%'
                },{
                    text:'进口量单位：万吨',
                    left:'1%',
                    top:36,
                    textStyle:{
                        fontSize:10,
                        color:'#fff'
                    }
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
            tooltip:{
                trigger: 'item',
                formatter:function(params){
                    var showStr = params.name+"<br>进口量："+params.data.value[2]+"(万吨)<br>占比："+params.data.value[3]+'%';
                        return showStr;
                }
            },
            legend: [{
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
            geo: {
                show: true,
                map: 'world',
                regions:regionCss,
                left: '20%', top: 5, right: '20%', bottom: 5,
                label: {
                    normal: {
                        show: false,
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
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: 'transparent',
                        borderColor: '#3fdaff',
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
                    name: '进口量',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: data1,
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
                            position: 'left',
                            show: true,
                            formatter: function(v){return v.value[2];}
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: function(v){
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
                            },
                            shadowBlur: 10,
                            shadowColor: '#05C3F9'
                        }
                    }
                },
                {
                    name:'航线',
                    type:'lines',
                    coordinateSystem: 'geo',
                    large: true,
                    polyline:true,
                    zlevel: 2,
                    largeThreshold: 100,
                    effect: {
                        show: true,
                        constantSpeed: 30,
                        symbol: 'circle',
                        symbolSize: 5,
                        trailLength: 0,
                    },
                    lineStyle: {
                        normal: {
                            width: 3,
                            curveness: 1
                        }
                    },
                    blendMode: 'lighter',
                    data:convertLines(data1, data.route)
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
function convertLines(d, m){
    var o = [];
    for(var i = 0; i < m.length; i++){
        o.push({
            fromName: m[i].name,
            toName: "中国",
            coords:m[i].value
        });
    }
    return o;
}
//10大石油进口来源国
function chart1(data){
    var option = {
        color: ['#ffd653','#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
        tooltip : {
            trigger: 'item'
        },
        legend: {
            show:false
        },
        series : [
            {
                name:'占进口总量比例',
                type:'pie',
                radius : [30, 80],
                center : ['50%', '60%'],
                roseType : 'area',
                labelLine: {
                    length: 5,
                    length2: 10
                },
                data:data
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}
//中国石油进口量总趋势
function chart2(data){
    var dataShadow = [], yMax = 12000;
    for(var i = 0; i < data[3].length; i++){
        dataShadow.push(yMax);
    }
    var option = {
        tooltip:{},
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
        legend:{
            show:true,
            bottom : 10,
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
            splitLine: {
                show: false
            },
            axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
            type: 'category',
            data:$chart.xtime(data[1])
        },
        yAxis: [{
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
            splitLine:{
                show:false
            },
            splitNumber:4,
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            name:'千桶/天',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            type: 'value',
            z:10,
        },{
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
            splitLine:{
                show:false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter:function(v){
                    return v + '%';
                }
            },
            splitNumber:4,
            type: 'value'
        }],
        series: [
            {
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {color: 'rgba(12,15,34,0.8)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: dataShadow,
                animation: false
            },
            {
                name:data[0][0],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#2874ff'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                },
                data: data[3]
            },
            {
                name:data[0][1],
                yAxisIndex:1,
                type:'line',
                itemStyle:{
                    normal:{
                        color:'#8121dd'
                    }
                },
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}
//中国石油进口新增需求
function chart3(data){
    var option = {
    		tooltip: {
    	        trigger: 'axis',
    	        axisPointer: { // 坐标轴指示器，坐标轴触发有效
    	            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    	        }
    	    }, 
        color:['#61ffff','#ff0'],
        legend:{
            show:true,
            bottom : 10,
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
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
        xAxis: {
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
            type: 'category',
            data:$chart.xtime(data[1])
        },
        yAxis: [{
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
            splitNumber:4,
            name:'千桶/天',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            type: 'value',
        },{
            axisLine: {
                show: false
            },
            splitLine:{
                show:false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
            },
            formatter:function(v){
                return v + '%';
            },
            min:-60,
            max:100,
            type: 'value'
        }],
        series: [
            {
                name:data[0][0],
                yAxisIndex:0,
                type: 'bar',
                data: data[3]
            },
            {
                name:data[0][1],
                yAxisIndex:1,
                type:'line',
                lineStyle:{
                    type:'dotted'
                },
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}