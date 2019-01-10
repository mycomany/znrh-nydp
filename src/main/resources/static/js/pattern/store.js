$(document).ready(function(){
    main();
    getdata('/pattern/store/chart1.json',chart1);
    getdata('/pattern/store/chart2.json',chart2);
    getdata('/pattern/store/near10Order.json',chart3);
    getdata('/pattern/store/chart4.json',chart4);
    getdata('/pattern/store/chart5.json',chart5);
    getdata('/pattern/store/chart6.json',chart6);
});

function main(){
    getdata('/pattern/store/main.json', function(data) {
        var option = {
            tooltip:{trigger:'item'},
            visualMap: {
                min: -1000,
                max: 500,
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
                //calculable: true,
                color: ['#36c587','#ffa24c','#ff560c']
            },
            title:[{
                text:'世界库存变动  (2018-6)',
                //subtext:'单位：千吨2018年6月',
                textStyle:{
                    fontSize:16,
                    color:'#59EBE8'
                },
                top:'3%',
                left:'center'
            },{
                text:'单位：千吨',
                textStyle:{
                    fontSize:10,
                    color:'#fff'
                },
                subtextStyle:{
                    color:'#fff'
                },
                bottom:140,
                left:100
            },{
    			text:'0',
    			left:134,
    			bottom:76,
    			textStyle:{
    				color:'#fff',
    				fontSize:10,
    			},
    		}],
            geo: {
                show: true,
                map: 'world',
                zoom:1.1,
                top:'17%',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: true,
                itemStyle: {
                    normal: {
                        areaColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgba(97, 234, 250,1)'
                            }, {
                                offset: 0.4,
                                color: 'rgba(97, 234, 250,0.5)'
                            }, {
                                offset: 1,
                                color: 'rgba(97, 234, 250,0.1)'
                            }]
                        ),//'rgba(21, 127, 237, 0.5)',//'transparent',
                        //borderColor: '#3fdaff',
                        borderWidth: 0,
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
                    name: '世界库存变动',
                    type: 'effectScatter',
                    coordinateSystem: 'geo',
                    data: data,
                    symbolSize: function (val) {
                        if(val[2] < 1100)
                            return 15;
                        else if(val[2] < 10000)
                            return 15 + val[2] / 500;
                        return 25 + val[2] / 2000;
                    },
                    showEffectOn: 'render',
                    rippleEffect: {
                        brushType: 'stroke'
                    },
                    hoverAnimation: true,
                    label: {
                        normal: {
                            formatter: function(o){ return o.name + ' ： ' + o.value[2]},
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
                    tooltip:{
                        trigger:'item',
                        formatter: function(o) {
                            return o.name + '<br />当前库存（千吨）：' + o.value[2] + '（千吨）<br />2018年至今变动：' + o.value[3] + '（千吨）';
                        }
                    },
                    zlevel: 1
                },
            ]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}

function chart1(data){
    var option = {
        legend: { //图例组件，颜色和名字
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:5,
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
            bottom:'17%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
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
            data:$chart.xtime(data[1])
        },
        yAxis: {
            type: 'value',
            name:'千吨',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
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
            z: 10
        },
        series: [{
            name:'ARA汽油库存',
            type:'line',
            smooth: true,
            showAllSymbol: false,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: '#2874ff'
                }
            },
            data: data[2]
        }, {
            name:'ARA柴油库存',
            type:'line',
            smooth:true,
            showAllSymbol: false,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: '#61ffff'
                }
            },
            lineStyle:{
                normal:{
                    color:'#61ffff',
                    width:1,
                    opacity:0
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(97,255,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(97,255,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(97,255,255,0.1)'
                        }]
                    )
                }
            },
            data: data[3]
        }]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
    var option = {
        legend: { //图例组件，颜色和名字
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:'3%',
            data: data[0],
            textStyle: {
                color: '#fff',
                fontSize: 10,
            }
        },
        grid: {
            left: '5%',
            right:'3%',
            top:'15%',
            bottom:'18%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            //formatter: '{b} - {c}千吨'
        },
        xAxis: {
            type: 'category',
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
            data:$chart.xtime(data[1])
        },
        yAxis: {
            name:'百万桶',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            type: 'value',
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
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
            z: 10
        },
        series: [{
            name:'浮式油轮原油库存量（15天移动均值）',
            type:'line',
            smooth: true,
            showAllSymbol: false,
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: '#43f1a0'
                }
            },
            data: data[2]
        }]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var seriesData = [];
    for(var i = 2; i < data.length; i++){
        var o = {
            name: data[0][i-2],
            type: 'line',
            smooth: true,
            symbolSize: 1,
            symbol: 'circle',
            data: data[i]
        };
        if(i==2){
            o.lineStyle = {
                type:'dotted'
            };
        }
        else if(i == data.length - 1){
            o.areaStyle = {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(97, 230, 230,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(97, 230, 230,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(97, 230, 230,0.1)'
                        }]
                    ),
                }
            };
        }
        seriesData.push(o);
    }
    var option = {
        color: ['#ac9857','#ffa24c','#368e94','#2874ff','#61ffff'],
        legend: { //图例组件，颜色和名字
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:'3%',
            data: ["2014","2015","2016","2017","2018"],
            textStyle: {
                color: '#fff',
                fontSize: 10,
            }
        },
        grid: {
            left: '3%',
            right:'7%',
            top:'15%',
            bottom:'18%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            formatter: formatter1,
        },
        xAxis: {
            type: 'category',
            name:'周',
            nameGap:5,
            nameTextStyle:{
                align:'center',
                color:'#fff',
            },
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            data: data[1]
        },
        yAxis: {
            max:80,
            splitNumber:4,
            name:'百万桶',
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
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
    var option = {
        color: ["#ffa3ff","#ffa3ff", "#69df55", "#f034d", "#217346"],//["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        legend: { //图例组件，颜色和名字
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:'3%',
            data: ["2014","2015","2016","2017","2018"],
            textStyle: {
                color: '#fff',
                fontSize: 10,
            }
        },
        grid: {
            left: '3%',
            right:'7%',
            top:'15%',
            bottom:'18%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            formatter: formatter1,
        },
        xAxis: {
            type: 'category',
            name:'周',
            nameGap:5,
            nameTextStyle:{
                align:'center',
                color:'#fff',
            },
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            data: data[1]
        },
        yAxis: {
            max:200,
            splitNumber:4,
            name:'百万桶',
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
            min:80,
            max:200,
            type: 'value'
        },
        series: [{
            name: ' ',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    opacity: 0
                }
            },
            data: data[2]
        },{
            name: '2013-17年范围',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    color:'#61ffff'
                }
            },
            data: data[3]
        },{
            name: '5年平均值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#2874ff',
                    type: 'dashed'
                }
            },
            data: data[4]
        },{
            name: '2017',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#ffa24c'
                }
            },
            data: data[6]
        },{
            name: '2018',
            type: 'line',
            smooth: true,
            symbolSize: 5,
            lineStyle : {
                normal: {
                    color:'#ff3481',
                }
            },
            data: data[7]
        }]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
    var option = {
        color: ["#ffa3ff","#ffa3ff", "#69df55", "#f034d", "#217346"],//["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        legend: { //图例组件，颜色和名字
	        itemGap: 12, //图例每项之间的间隔
	        itemWidth: 16,
	        itemHeight: 8,
	        x:'center',
	        bottom:'3%',
	        data: ["2014","2015","2016","2017","2018"],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    },    
	    grid: {
	        left: '3%',
	        right:'7%',
	        top:'15%',
	        bottom:'18%',
	        containLabel: true
	    },
	    tooltip: {
       	 trigger: 'axis',
            formatter: formatter1,
       },
        xAxis: {
            type: 'category',
            name:'周',
            nameGap:5,
            nameTextStyle:{
                align:'center',
                color:'#fff',
            },
            boundaryGap: false,
            axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
	        axisLabel: {
	            color: '#fff',
	            fontSize: 10
	        },
            data: data[1]
        },
        yAxis: {
            max:270,
            splitNumber:4,
            name:'百万桶',
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
            min:170,
            max:270,
            type: 'value'
        },
        series: [{
            name: ' ',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    opacity: 0
                }
            },
            data: data[2]
        },{
            name: '2013-17年范围',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    color:'#61ffff'
                }
            },
            data: data[3]
        },{
            name: '5年平均值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#2874ff',
                    type: 'dashed'
                }
            },
            data: data[4]
        },{
            name: '2017',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#ffa24c'
                }
            },
            data: data[6]
        },{
            name: '2018',
            type: 'line',
            smooth: true,
            symbolSize: 5,
            lineStyle : {
                normal: {
                    color:'#ff3481',
                }
            },
            data: data[7]
        }]
    };
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(data){
    var option = {
        color: ["#ffa3ff","#ffa3ff", "#69df55", "#f034d", "#217346"],//["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        legend: { //图例组件，颜色和名字
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:'3%',
            data: ["2014","2015","2016","2017","2018"],
            textStyle: {
                color: '#fff',
                fontSize: 10,
            }
        },
        grid: {
            left: '3%',
            right:'7%',
            top:'15%',
            bottom:'18%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            formatter: formatter1,
        },
        xAxis: {
            type: 'category',
            name:'周',
            nameGap:5,
            nameTextStyle:{
                align:'center',
                color:'#fff',
            },
            boundaryGap: false,
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            data: data[1]
        },
        yAxis: {
            max:550,
            splitNumber:4,
            name:'百万桶',
            nameGap:-3,
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
            min:250,
            max:550,
            type: 'value'
        },
        series: [{
            name: ' ',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    opacity: 0
                }
            },
            data: data[2]
        },{
            name: '2013-17年范围',
            type: 'line',
            stack:'a',
            smooth: true,
            showSymbol: false,
            lineStyle:{
                width:1
            },
            areaStyle : {
                normal:{
                    color:'#61ffff'
                }
            },
            data: data[3]
        },{
            name: '5年平均值',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#2874ff',
                    type: 'dashed'
                }
            },
            data: data[4]
        },{
            name: '2017',
            type: 'line',
            smooth: true,
            showSymbol: false,
            lineStyle : {
                normal: {
                    color:'#ffa24c'
                }
            },
            data: data[6]
        },{
            name: '2018',
            type: 'line',
            smooth: true,
            symbolSize: 5,
            lineStyle : {
                normal: {
                    color:'#ff3481',
                }
            },
            data: data[7]
        }]
    };
    var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}

function formatter1(arr){
    if(!arr) return '无';
    var s = '第' + arr[0].name + '周<br />';
    arr.forEach(function(o){
        if(o.seriesName == '' || o.seriesName == ' ')
            return true;
        if(o.seriesName.length==4)
            s += o.seriesName + '年：';
        else
            s += o.seriesName+ '：';
        s += o.value + '(百万桶)<br />';
    });
    return s;
}