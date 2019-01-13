let _data_cache = {}

$(document).ready(function(){
    main("c1");
    chart1();
    getdata('/produce/oilIndex/near10Order.json',near10Order);
    getdata('/produce/oilIndex/cnTop10Order.json',cnTop10Order);
    getdata('/produce/oilIndex/worldTop10Order.json',worldTop10Order);
    getdata('/produce/oilIndex/cnOilMachining.json',machiningTop10Order);
    getdata('/produce/oilIndex/machiningCount.json',machiningCount);

    chart2();
    getdata('/produce/oilIndex/worldTop10Machining.json',worldTop10Machining);

    // getdata('/pattern/supply/near10Order.json',chart3);
    // chart4();
    // chart5();
});

function isSelect(jsonData){
    if(jsonData!=null&&jsonData==='select'){
        return true
    }else
        return false
}

function checkInitDate(checkedSelected){
    return $("#"+checkedSelected).val()
}

function compare(property){
    return function(obj1,obj2){
        var value1 = obj1[property];
        var value2 = obj2[property];
        return value1 - value2;     // 降
    }
}

function chart1(){
    var option = {
        textStyle: {
            color: '#38b8ff'
        },
        tooltip: {
            trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            z:100
        },
        legend: {
            show:true,
            bottom : '2%',
            itemGap: 5, //图例每项之间的间隔
            itemWidth: 10, //图例宽度
            itemHeight: 8, //图例高度
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: ['产量（10亿桶）', '储量（10亿桶）', '储采比（年）'],
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'5%',
            bottom:'18%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
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
            data: ['1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年']
        }],
        yAxis: [{
            type: 'value',
            /*name:'10亿桶',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },*/
            axisTick: {
                show: true //是否显示坐标轴刻度
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
                }
            },
            //去掉辅助线
            splitLine: {
                show: false
            },
            /*splitLine: {
             lineStyle: {
             color: '#57617B' //分隔线颜色设置
             }
             }*/
        },
            {
                type: 'value',
                nameGap:-5,
                nameTextStyle:{
                    padding:[0,0,0,45],
                    align:'center',
                    color:'#fff',
                },
                axisTick: {
                    show: true //是否显示坐标轴刻度
                },
                axisLine: {
                    lineStyle: {
                        color: '#38b8ff'
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 10
                    }
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
                /*splitLine: {
                 lineStyle: {
                 color: '#57617B' //分隔线颜色设置
                 }
                 }*/
            }],
        series: [{
            name: '产量（10亿桶）', //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
            yAxisIndex: 0,
            type: 'line',
            smooth: true, //是否平滑曲线显示
            symbol: 'circle', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
            symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
            showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
            lineStyle: { //线条样式
                normal: {
                    width: 1 //线宽。[ default: 2 ]
                }
            },
            areaStyle: { //区域填充样式
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                        offset: 0, // 0% 处的颜色
                        color: 'rgba(137, 189, 27, 0.3)'
                    }, {
                        offset: 0.8, // 80% 处的颜色
                        color: 'rgba(137, 189, 27, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                    shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                }
            },
            itemStyle: { //折线拐点标志的样式
                normal: {
                    color: 'rgb(137,189,27)',
                    borderColor: 'rgba(137,189,2,0.27)', //图形的描边颜色。支持的格式同 color
                    borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                }
            },
            data: [1.0,1.0,1.0,1.1,1.1,1.1,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.2,1.3,1.3,1.4,1.4,1.4,1.4,1.5,1.5,1.5,1.5,1.5,1.6,1.5,1.4]
        }, {
            name: '储量（10亿桶）',
            yAxisIndex: 0,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(0, 136, 212, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(0, 136, 212, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {
                    color: 'rgb(0,136,212)',
                    borderColor: 'rgba(0,136,212,0.2)',
                    borderWidth: 12

                }
            },
            data: [16.0,15.5,15.2,16.4,16.3,16.4,16.4,17.0,17.4,15.1,15.2,15.4,15.5,15.5,18.3,18.2,20.2,20.8,21.2,21.6,23.3,23.7,24.4,24.7,25.2,25.6,25.7,25.7]
        }, {
            name: '储采比（年）',
            yAxisIndex: 1,
            type: 'line',
            smooth: true,
            symbol: 'circle',
            symbolSize: 5,
            showSymbol: false,
            lineStyle: {
                normal: {
                    width: 1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(219, 50, 51, 0.3)'
                    }, {
                        offset: 0.8,
                        color: 'rgba(219, 50, 51, 0)'
                    }], false),
                    shadowColor: 'rgba(0, 0, 0, 0.1)',
                    shadowBlur: 10
                }
            },
            itemStyle: {
                normal: {

                    color: 'rgb(219,50,51)',
                    borderColor: 'rgba(219,50,51,0.2)',
                    borderWidth: 12
                }
            },
            data: [15.80,15.01,14.63,15.57,15.18,14.97,14.19,14.50,14.84,12.87,12.78,12.76,12.68,12.45,14.35,13.73,14.93,15.20,15.22,15.56,15.64,15.97,16.11,16.04,16.24,16.29,17.58,18.28]
        }, ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
    setH('chart1');
}


function chart2(){
    const option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            }
        },
        grid: {
            left: '1%',
            right:'1%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        "legend": {
            show:true,
            bottom : '2%',
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: ['产量','消费量','PI'],
        },
        "xAxis": [
            {
                "type": "category",
                "data": ['1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'
                ],
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
                name:'  千桶/日',
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
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 10
                    }
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                },
                /*
                "splitLine": {
                  "lineStyle": {
                    "color": "#7d838b"
                  }
                }
                */
            },
            {
                "type": "value",
                //"name": "完成率",
                "show": true,
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
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": "产量",
                "type": "bar",
                "data": [2778,2831,2845,2892,2934,2993,3175,3216,3217,3218,3257,3310,3351,3406,3486,3642,3711,3742,3814,3805,4077,4074,4155,4216,4246,4309,3999,3846],
                "barWidth": "auto",
                itemStyle: {
                    normal: {
                        barBorderRadius: [30, 30, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: '#37a705'
                            },
                                {
                                    offset: 1,
                                    color: '#00ffcb'
                                }
                            ]
                        )
                    }
                }
            },
            {
                "name": "消费量",
                "type": "bar",
                "data": [2297,2491,2705,3013,3069,3342,3660,4007,4139,4387,4697,4810,5205,5795,6755,6900,7432,7808,7941,8278,9436,9796,10230,10734,11209,11986,12302,12799],
                "barWidth": "auto",
                itemStyle: {
                    normal: {
                        barBorderRadius: [30, 30, 0, 0],
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1, [{
                                offset: 0,
                                color: '#00feff'
                            },
                                {
                                    offset: 0.5,
                                    color: '#027eff'
                                },
                                {
                                    offset: 1,
                                    color: '#0286ff'
                                }
                            ]
                        )
                    }
                }
            },
            {
                "name": "PI",
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": [120.9,113.7,105.2,96.0,95.6,89.5,86.7,80.2,77.7,73.3,69.3,68.8,64.4,58.8,51.6,52.8,49.9,47.9,48.0,46.0,43.2,41.6,40.6,39.3,37.9,35.9,32.5,30.0],
                "itemStyle": {
                    "normal": {
                        "color": "#ffaa00"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
    setH('chart2');
}

function chart3(data){
    var xData = data[1];
    var lineData1 = data[2];
    var lineData2 = data[3];
    var barData = data[4];
    option = {
        textStyle: {
            color: '#38b8ff'
        },
        color: ["#67E0E3", "#37A2DA", "#FFDB5C", "#fb7293", "#E690D1", "#9d96f5", "#96BFFF"],
        tooltip : {
            trigger: 'axis'
        },
        legend: {
            show:true,
            bottom : '2%',
            itemGap: 8, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data:['石油','天然气','煤炭','核能','水电','其他可再生能源'],
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
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
                }
            }
        ],
        yAxis : [
            {
                type: 'value',
                name:'           百万吨油当量',
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
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 10
                    }
                },
                //单位
                //去掉辅助线
                splitLine: {
                    show: false
                }
            }
        ],
        series : [
            {
                name:'石油',
                type:'line',
                symbol:'circle',
                showSymbol: false,
                stack: '总量',
                areaStyle: {normal: {}},
                data:[148.8,150.8,163.4,179.1,195.5,200.8,213.7,228.8,234.0,252.8,281.7,329.0,334.9,359.9,377.7,385.5,400.0,455.2,472.1,494.9,516.8,538.1,573.5,587.2,608.4]
            },
            {
                name:'天然气',
                type:'line',
                symbol:'circle',
                showSymbol: false,
                stack: '总量',
                areaStyle: {normal: {}},
                data:[14.5,15.2,15.4,16.1,17.0,17.6,18.6,21.2,23.8,25.3,29.4,34.4,40.4,49.7,61.1,70.4,77.6,93.6,116.2,129.7,147.8,162.0,167.4,180.1,206.7]
            },
            {
                name:'煤炭',
                type:'line',
                symbol:'circle',
                showSymbol: false,
                stack: '总量',
                areaStyle: {normal: {}},
                data:[616.5,657.1,665.2,696.1,682.0,676.8,696.4,706.1,742.5,814.1,970.2,1131.2,1324.6,1454.7,1584.2,1609.3,1685.8,1748.9,1903.9,1927.8,1969.1,1954.5,1914.0,1889.1,1892.6]
            },
            {
                name:'核能',
                type:'line',
                symbol:'circle',
                showSymbol: false,
                stack: '总量',
                areaStyle: {normal: {}},
                data:[0.4,3.3,2.9,3.2,3.3,3.2,3.4,3.8,4.0,5.7,9.8,11.4,12.0,12.4,14.1,15.5,15.9,16.7,19.5,22.0,25.3,30.0,38.6,48.3,56.2]
            },
            {
                name:'水电',
                type:'line',
                symbol:'circle',
                showSymbol: false,
                stack: '总量',
                label: {
                    normal: {
                        //show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[34.4,37.9,43.1,42.5,44.3,45.0,44.5,50.3,62.8,65.2,64.2,80.0,89.8,98.6,109.8,144.1,139.3,161.0,155.7,195.2,205.8,237.8,252.2,261.0,261.5]
            },
            {
                name:'其他可再生能源',
                type:'line',
                symbol:'circle',
                showSymbol: false,
                stack: '总量',
                label: {
                    normal: {
                        //show: true,
                        position: 'top'
                    }
                },
                areaStyle: {normal: {}},
                data:[0.1,0.2,0.8,0.4,0.7,0.6,0.7,0.7,0.7,0.8,0.8,0.9,1.7,2.5,3.5,6.4,11.0,15.9,22.8,29.4,42.3,51.1,64.1,81.7,106.7]
            }
        ]
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
    setH('chart3');
}

function main(param){
    var c2 = [{"name":"北京","value":0.00},
        {"name":"天津","value":3102.40},
        {"name":"河北","value":539.10},
        {"name":"山西","value":0.00},
        {"name":"内蒙古","value":12.20},
        {"name":"辽宁","value":1044.20},
        {"name":"吉林","value":420.90},
        {"name":"黑龙江","value":3420.30},
        {"name":"上海","value":6.80},
        {"name":"江苏","value":156.10},
        {"name":"浙江","value":0.00},
        {"name":"安徽","value":0.00},
        {"name":"福建","value":0.00},
        {"name":"江西","value":0.00},
        {"name":"山东","value":2234.90},
        {"name":"河南","value":282.90},
        {"name":"湖北","value":55.50},
        {"name":"湖南","value":0.00},
        {"name":"广东","value":1435.20},
        {"name":"广西","value":44.10},
        {"name":"海南","value":30.00},
        {"name":"重庆","value":0.00},
        {"name":"四川","value":8.70},
        {"name":"贵州","value":0.00},
        {"name":"云南","value":0.00},
        {"name":"西藏","value":0.00},
        {"name":"陕西","value":3489.80},
        {"name":"甘肃","value":47.00},
        {"name":"青海","value":228.00},
        {"name":"宁夏","value":0.70},
        {"name":"新疆","value":2591.80}];
    var c1 = [{"name":"北京","value":0.00},
        {"name":"天津","value":3349.90},
        {"name":"河北","value":26576.40},
        {"name":"山西","value":0.00},
        {"name":"内蒙古","value":8381.30},
        {"name":"辽宁","value":14351.60},
        {"name":"吉林","value":17500.60},
        {"name":"黑龙江","value":42665.80},
        {"name":"上海","value":0.00},
        {"name":"江苏","value":2729.50},
        {"name":"浙江","value":0.00},
        {"name":"安徽","value":238.50},
        {"name":"福建","value":0.00},
        {"name":"江西","value":0.00},
        {"name":"山东","value":29412.20},
        {"name":"河南","value":4427.00},
        {"name":"湖北","value":1185.90},
        {"name":"湖南","value":0.00},
        {"name":"广东","value":16.40},
        {"name":"广西","value":154.00},
        {"name":"海南","value":452.30},
        {"name":"重庆","value":266.90},
        {"name":"四川","value":623.40},
        {"name":"贵州","value":0.00},
        {"name":"云南","value":12.20},
        {"name":"西藏","value":0.00},
        {"name":"陕西","value":38375.60},
        {"name":"甘肃","value":28261.70},
        {"name":"青海","value":8252.30},
        {"name":"宁夏","value":2432.40},
        {"name":"新疆","value":59576.30}];
    var c3 = [{"name":"北京","value":821.00},
        {"name":"天津","value":1433.60},
        {"name":"河北","value":1761.93},
        {"name":"山西","value":0.00},
        {"name":"内蒙古","value":419.55},
        {"name":"辽宁","value":7057.00},
        {"name":"吉林","value":1051.29},
        {"name":"黑龙江","value":2210.42},
        {"name":"上海","value":2474.23},
        {"name":"江苏","value":4092.04},
        {"name":"浙江","value":2667.35},
        {"name":"安徽","value":539.21},
        {"name":"福建","value":2089.38},
        {"name":"江西","value":725.75},
        {"name":"山东","value":10203.42},
        {"name":"河南","value":707.28},
        {"name":"湖北","value":1239.61},
        {"name":"湖南","value":841.60},
        {"name":"广东","value":5044.45},
        {"name":"广西","value":1340.43},
        {"name":"海南","value":1118.66},
        {"name":"重庆","value":0.00},
        {"name":"四川","value":902.77},
        {"name":"贵州","value":0.02},
        {"name":"云南","value":0.04},
        {"name":"西藏","value":0.00},
        {"name":"陕西","value":1823.86},
        {"name":"甘肃","value":1367.29},
        {"name":"青海","value":149.45},
        {"name":"宁夏","value":576.35},
        {"name":"新疆","value":2452.80}];
    var mapData = c1;
    var name = '储量';
    var max = 60000;
    if (param  == "c2") {
        mapData = c2;
        name = '产量';
        max = 3500;
    }else if (param  == "c3") {
        mapData = c3;
        name = '消费量';
        max = 11000;
    }else{
        mapData = c1;
        name = '储量';
        max = 60000;
    }
    option = {
        title:[{
            text:'中国石油'+name+'分布   (2016)',
            top:'3%',
            left:'center',
            textStyle: {
                color: '#59EBE8',
                fontSize:16,
            }
        }],
        tooltip: {
            trigger: 'item',
            formatter: function (v){
                //alert(JSON.stringify(v));
                var cl = '<br/>'+name+':'+v.data.value+'(万吨)';
                return v.name +cl;
            }
        },
        visualMap: {
            min: 0,
            max: max,
            text: [name+': (百万吨)',' '],
            itemHeight:100,
            itemWidth:15,
            textGap:15,
            seriesIndex:0,
            calculable:true,
            left:5,
            bottom:5,
            textStyle:{
                color:'#fff',
                fontSize: 10
            },
            //calculable: true,
            color: ['#041af7','#6875f3','#8b95f9']
        },
        series: [{
            name: 'Number',
            type: 'map',
            mapType: 'china',
            showLegendSymbol: false,
            aspectScale:0.9,
            roam: true,
            zoom:1.2,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    }
                },
                emphasis: {
                    label: {
                        show: true,
                        textStyle: {
                            color: '#ffffff',
                            fontSize: 10
                        }
                    }
                }
            },
            data: mapData
        }, ]
    };
    var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
    setH('main');
}

function chart5(){
    //json数据
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
                data: ["采掘业","制造业","电力生产","交运仓储","其他行业","生活消费","批发零售业"],
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                }
            },
            calculable: true,
            yAxis: [{
                type: 'category',
                data: ['2003年', '2007年', '2012年', '2016年'],
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
                    data: [24.03,12.94,9.55,7.40]
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
                    data: [51.72,43.96,39.20,37.14]
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
                    data: [3.40,11.32,16.05,19.97]
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
                    data: [2.02,6.67,10.57,12.28]
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
                    data: [0.00,2.29,2.25,2.32]
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
                    data: [16.81,20.39,19.73,18.30]
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
                    data: [2.03,2.43,2.65,2.59]
                }
            ]

        };
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
    setH('chart5');
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


//近10年新增探明储量贡献
function near10Order(jsonData){
    let groupDataObj = {}

    let legendArray = []
    jsonData.forEach((eachData,i)=>{
        const group = eachData['group']
        legendArray.push(group)
        const groupDatas = eachData['groupDatas']
        // groupDatas.sort(compare('value'))
        groupDatas.forEach(eachGroupData=>{
            const eachGroupDataName = eachGroupData['name']
            const eachGroupDataValue = eachGroupData['value']
            if(groupDataObj[eachGroupDataName]!=null){}else{
                groupDataObj[eachGroupDataName] = [0,0]
            }
            groupDataObj[eachGroupDataName][i] = eachGroupDataValue
        })
    })

    const xArray = Object.keys(groupDataObj)
    let barArray = []

    Object.values(groupDataObj).forEach(groupData=>{
        groupData.forEach((eachGroupData,i)=>{
            if(barArray[i]!=null){
                barArray[i].data.push(eachGroupData)
            }else{
                barArray[i] = {
                    "name": legendArray[i],
                    "type": "bar",
                    "data": [eachGroupData],
                    "barWidth": "auto"
                }
            }
        })
    })

    const option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            }
        },
        grid: {
            left: '1%',
            right:'1%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        "legend": {
            show:true,
            bottom : '2%',
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: legendArray,
        },
        "xAxis": [
            {
                "type": "category",
                "data": xArray,
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
                name:'  千桶/日',
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
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 10
                    }
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                },
                /*
                "splitLine": {
                  "lineStyle": {
                    "color": "#7d838b"
                  }
                }
                */
            }
        ],
        "series": barArray
    };
    var myChart = echarts.init($('#near10Order')[0]);
    myChart.setOption(option);

    // var option = {
    //     color: ['#2078d1', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b', '#ac9857'],
    //     tooltip: {
    //         show: true,
    //         formatter: function(param){
    //             if (param.name.length>0) {
    //                 return param.name+'<br/>'+Math.round(param.value*10,2)+' 亿吨';
    //             }
    //         }
    //     },
    //     angleAxis: {
    //         type: 'category',
    //         z: 10,
    //         axisLine: {
    //             color: '#fff',
    //             lineStyle: {
    //                 width: 3,
    //                 color: '#fff',
    //             }
    //         },
    //     },
    //     radiusAxis: {
    //         axisTick: {
    //             show: false
    //         },
    //         axisLabel: {
    //             show: false,
    //             color: '#fff'
    //         },
    //         axisLine: {
    //             show: false,
    //             color: '#fff',
    //             lineStyle: {
    //                 color: '#fff',
    //             }
    //         },
    //         splitLine: {
    //             color: '#000',
    //             lineStyle: {
    //                 type: 'dotted',
    //                 color: 'rgba(170,170,170,.5)',
    //             }
    //         },
    //
    //     },
    //     polar: {
    //         center: ['50%', '50%'],
    //         radius: 64,
    //     },
    //     legend: {
    //         show:false
    //     },
    //     series: seriesData
    // };
    // var myChart = echarts.init($('#near10Order')[0]);
    // myChart.setOption(option);
}

function cnTop10Order(jsonData){
    jsonData.sort(compare('value'))

    let data = {}
    jsonData.forEach(oldData=>{
        data[oldData['name']] = oldData['value']
    })
    var option = {
        tooltip:{
            formatter:'{b}: {c}',
        },
        grid:{
            top:'10%',
            bottom:'10%',
            left:'5%',
            right:'5%',
            containLabel:true,
        },
        xAxis: [{
            type: 'category',
            data: Object.keys(data),
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {

                textStyle: {
                    color: '#ffffff'
                }
            }
        }],
        yAxis: [{
            splitLine: {
                show: false
            },
            type: 'value',
            splitNumber:3,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                formatter:'{value}',

                textStyle: {
                    color: '#ffffff',
                }
            }
        }],
        series: [{
            name: '探明储量',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(40,161,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(40,161,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(40,161,255,0.1)'
                        }]
                    ),
                    barBorderRadius: [3, 3, 0, 0]
                }
            },
            z: -12,
            data: Object.values(data)
        }]
    };
    var myChart = echarts.init($('#cnTop10Order')[0]);
    myChart.setOption(option);
}

function worldTop10Order(jsonData){
    jsonData.sort(compare('value'))

    let data = {}
    jsonData.forEach(oldData=>{
        data[oldData['name']] = oldData['value']
    })
    var option = {
        tooltip:{
            formatter:'{b}: {c}',
        },
        grid:{
            top:'10%',
            bottom:'10%',
            left:'5%',
            right:'5%',
            containLabel:true,
        },
        xAxis: [{
            type: 'category',
            data: Object.keys(data),
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {

                textStyle: {
                    color: '#ffffff'
                }
            }
        }],
        yAxis: [{
            splitLine: {
                show: false
            },
            type: 'value',
            splitNumber:3,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                formatter:'{value}',

                textStyle: {
                    color: '#ffffff',
                }
            }
        }],
        series: [{
            name: '探明储量',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(40,161,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(40,161,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(40,161,255,0.1)'
                        }]
                    ),
                    barBorderRadius: [3, 3, 0, 0]
                }
            },
            z: -12,
            data: Object.values(data)
        }]
    };
    var myChart = echarts.init($('#worldTop10Order')[0]);
    myChart.setOption(option);
}

function machiningTop10Order(jsonData){
    jsonData.sort(compare('value'))

    let data = {}
    jsonData.forEach(oldData=>{
        data[oldData['name']] = oldData['value']
    })
    var option = {
        tooltip:{
            formatter:'{b}: {c}',
        },
        grid:{
            top:'10%',
            bottom:'10%',
            left:'5%',
            right:'5%',
            containLabel:true,
        },
        xAxis: [{
            type: 'category',
            data: Object.keys(data),
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {

                textStyle: {
                    color: '#ffffff'
                }
            }
        }],
        yAxis: [{
            splitLine: {
                show: false
            },
            type: 'value',
            splitNumber:3,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                formatter:'{value}',

                textStyle: {
                    color: '#ffffff',
                }
            }
        }],
        series: [{
            name: '探明储量',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(40,161,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(40,161,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(40,161,255,0.1)'
                        }]
                    ),
                    barBorderRadius: [3, 3, 0, 0]
                }
            },
            z: -12,
            data: Object.values(data)
        }]
    };
    var myChart = echarts.init($('#machiningTop10Order')[0]);
    myChart.setOption(option);
}

function worldTop10Machining(jsonData){
    jsonData.sort(compare('value'))

    let data = {}
    jsonData.forEach(oldData=>{
        data[oldData['name']] = oldData['value']
    })
    var option = {
        tooltip:{
            formatter:'{b}: {c}',
        },
        grid:{
            top:'10%',
            bottom:'10%',
            left:'5%',
            right:'5%',
            containLabel:true,
        },
        xAxis: [{
            type: 'category',
            data: Object.keys(data),
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {

                textStyle: {
                    color: '#ffffff'
                }
            }
        }],
        yAxis: [{
            splitLine: {
                show: false
            },
            type: 'value',
            splitNumber:3,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                formatter:'{value}',

                textStyle: {
                    color: '#ffffff',
                }
            }
        }],
        series: [{
            name: '探明储量',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(40,161,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(40,161,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(40,161,255,0.1)'
                        }]
                    ),
                    barBorderRadius: [3, 3, 0, 0]
                }
            },
            z: -12,
            data: Object.values(data)
        }]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function machiningCount(jsonData,selectObj){
    let selectPoint = ""
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.machiningCount = jsonData
        selectPoint = checkInitDate("machiningCountSelected")

    }

    // data.sort(compare('value'))

    let data = {}
    _data_cache.machiningCount.forEach(machiningCountData=>{
        const year = machiningCountData['year']
        if(year===selectPoint) {
            data[machiningCountData['name']] = machiningCountData['value']
        }
    })

    var option = {
        tooltip:{
            formatter:'{b}: {c}',
        },
        grid:{
            top:'10%',
            bottom:'10%',
            left:'5%',
            right:'5%',
            containLabel:true,
        },
        xAxis: [{
            type: 'category',
            data: Object.keys(data),
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {

                textStyle: {
                    color: '#ffffff'
                }
            }
        }],
        yAxis: [{
            splitLine: {
                show: false
            },
            type: 'value',
            splitNumber:3,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                formatter:'{value}',

                textStyle: {
                    color: '#ffffff',
                }
            }
        }],
        series: [{
            name: '探明储量',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(40,161,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(40,161,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(40,161,255,0.1)'
                        }]
                    ),
                    barBorderRadius: [3, 3, 0, 0]
                }
            },
            z: -12,
            data: Object.values(data)
        }]
    };
    var myChart = echarts.init($('#machiningCount')[0]);
    myChart.setOption(option);
}

function cnTop10OrderBak(jsonData){
    let data = []
    jsonData.forEach(oldData=>{
        data.push({'name':oldData['name'],'value':oldData['value']/200})
    })

    var dataStyle = {
        normal: {
            label: {
                show: true,
                color: '#fff',
                fontSize: 9,
            },
            labelLine: {
                length: 12,
                length2: 12
            },
        }
    };
    var labelShow = {
        show: true,
        color: '#fff',
        fontSize: 10,
        formatter: [
            '{b| {b} }',
            '{d| {d}% }'
        ].join('\n'),
        rich: {
            d: {
                fontSize: 10,
                color: '#fff'
            },
            b: {
                fontSize: 12,
                color: '#fff'
            },
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var seriesData = [], x0 = 360, x1 = 0,
        rs = [[45,47],[30,47],[47,57],[37,47],[15,40],[15,40],[50,57],[50,57],[30,47],[50,57]],
        sa = [121,59.33,19.94,341.25,307.08, 276.60,420.60,200,240,480];
    data.forEach(function(d, i){
        var x = 3.6 * d.value;
        x0 = sa[i];
        x1 = 360 - x - x0;
        var arr = [{
            value: x0,
            name: '',
            itemStyle: placeHolderStyle
        }, {
            value: x,
            name: d.name,
            label: labelShow,
        }, {
            value:x1,
            name: '',
            itemStyle: placeHolderStyle
        }];
        var o = {
            name: 'Line '+(i+1),
            type: 'pie',
            clockWise: false,
            radius: rs[i],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data:arr
        };
        seriesData.push(o);
    });
    seriesData.push({
        type: 'bar',
        data: [0],
        coordinateSystem: 'polar',
        name: '06a',
        stack: 'a'
    });
    var option = {
        color: ['#2078d1', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b', '#ac9857'],
        tooltip: {
            show: true,
            formatter: function(param){
                if (param.name.length>0) {
                    return param.name+'<br/>'+Math.round(param.value*10,2)+' 亿吨';
                }
            }
        },
        angleAxis: {
            type: 'category',
            z: 10,
            axisLine: {
                color: '#fff',
                lineStyle: {
                    width: 3,
                    color: '#fff',
                }
            },
        },
        radiusAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: '#fff'
            },
            axisLine: {
                show: false,
                color: '#fff',
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                color: '#000',
                lineStyle: {
                    type: 'dotted',
                    color: 'rgba(170,170,170,.5)',
                }
            },

        },
        polar: {
            center: ['50%', '50%'],
            radius: 64,
        },
        legend: {
            show:false
        },
        series: seriesData
    };
    var myChart = echarts.init($('#cnTop10Order')[0]);
    myChart.setOption(option);
}

function worldTop10OrderBak(jsonData){
    let data = []
    jsonData.forEach(oldData=>{
        data.push({'name':oldData['name'],'value':oldData['value']/10})
    })

    var dataStyle = {
        normal: {
            label: {
                show: true,
                color: '#fff',
                fontSize: 9,
            },
            labelLine: {
                length: 12,
                length2: 12
            },
        }
    };
    var labelShow = {
        show: true,
        color: '#fff',
        fontSize: 10,
        formatter: [
            '{b| {b} }',
            '{d| {d}% }'
        ].join('\n'),
        rich: {
            d: {
                fontSize: 10,
                color: '#fff'
            },
            b: {
                fontSize: 12,
                color: '#fff'
            },
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var seriesData = [], x0 = 360, x1 = 0,
        rs = [[45,47],[30,47],[47,57],[37,47],[15,40],[15,40],[50,57],[50,57],[30,47],[50,57]],
        sa = [121,59.33,19.94,341.25,307.08, 276.60,420.60,200,240,480];
    data.forEach(function(d, i){
        var x = 3.6 * d.value;
        x0 = sa[i];
        x1 = 360 - x - x0;
        var arr = [{
            value: x0,
            name: '',
            itemStyle: placeHolderStyle
        }, {
            value: x,
            name: d.name,
            label: labelShow,
        }, {
            value:x1,
            name: '',
            itemStyle: placeHolderStyle
        }];
        var o = {
            name: 'Line '+(i+1),
            type: 'pie',
            clockWise: false,
            radius: rs[i],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data:arr
        };
        seriesData.push(o);
    });
    seriesData.push({
        type: 'bar',
        data: [0],
        coordinateSystem: 'polar',
        name: '06a',
        stack: 'a'
    });
    var option = {
        color: ['#2078d1', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b', '#ac9857'],
        tooltip: {
            show: true,
            formatter: function(param){
                if (param.name.length>0) {
                    return param.name+'<br/>'+Math.round(param.value*10,2)+' 亿吨';
                }
            }
        },
        angleAxis: {
            type: 'category',
            z: 10,
            axisLine: {
                color: '#fff',
                lineStyle: {
                    width: 3,
                    color: '#fff',
                }
            },
        },
        radiusAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: '#fff'
            },
            axisLine: {
                show: false,
                color: '#fff',
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                color: '#000',
                lineStyle: {
                    type: 'dotted',
                    color: 'rgba(170,170,170,.5)',
                }
            },

        },
        polar: {
            center: ['50%', '50%'],
            radius: 64,
        },
        legend: {
            show:false
        },
        series: seriesData
    };
    var myChart = echarts.init($('#worldTop10Order')[0]);
    myChart.setOption(option);
}

function machiningTop10OrderBak(jsonData){
    let data = []
    jsonData.forEach(oldData=>{
        data.push({'name':oldData['name'],'value':oldData['value']/30})
    })

    var dataStyle = {
        normal: {
            label: {
                show: true,
                color: '#fff',
                fontSize: 9,
            },
            labelLine: {
                length: 12,
                length2: 12
            },
        }
    };
    var labelShow = {
        show: true,
        color: '#fff',
        fontSize: 10,
        formatter: [
            '{b| {b} }',
            '{d| {d}% }'
        ].join('\n'),
        rich: {
            d: {
                fontSize: 10,
                color: '#fff'
            },
            b: {
                fontSize: 12,
                color: '#fff'
            },
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var seriesData = [], x0 = 360, x1 = 0,
        rs = [[45,47],[30,47],[47,57],[37,47],[15,40],[15,40],[50,57],[50,57],[30,47],[50,57]],
        sa = [121,59.33,19.94,341.25,307.08, 276.60,420.60,200,240,480];
    data.forEach(function(d, i){
        var x = 3.6 * d.value;
        x0 = sa[i];
        x1 = 360 - x - x0;
        var arr = [{
            value: x0,
            name: '',
            itemStyle: placeHolderStyle
        }, {
            value: x,
            name: d.name,
            label: labelShow,
        }, {
            value:x1,
            name: '',
            itemStyle: placeHolderStyle
        }];
        var o = {
            name: 'Line '+(i+1),
            type: 'pie',
            clockWise: false,
            radius: rs[i],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data:arr
        };
        seriesData.push(o);
    });
    seriesData.push({
        type: 'bar',
        data: [0],
        coordinateSystem: 'polar',
        name: '06a',
        stack: 'a'
    });
    var option = {
        color: ['#2078d1', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b', '#ac9857'],
        tooltip: {
            show: true,
            formatter: function(param){
                if (param.name.length>0) {
                    return param.name+'<br/>'+Math.round(param.value*10,2)+' 亿吨';
                }
            }
        },
        angleAxis: {
            type: 'category',
            z: 10,
            axisLine: {
                color: '#fff',
                lineStyle: {
                    width: 3,
                    color: '#fff',
                }
            },
        },
        radiusAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: '#fff'
            },
            axisLine: {
                show: false,
                color: '#fff',
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                color: '#000',
                lineStyle: {
                    type: 'dotted',
                    color: 'rgba(170,170,170,.5)',
                }
            },

        },
        polar: {
            center: ['50%', '50%'],
            radius: 64,
        },
        legend: {
            show:false
        },
        series: seriesData
    };
    var myChart = echarts.init($('#machiningTop10Order')[0]);
    myChart.setOption(option);
}

function machiningCountBak(jsonData,selectObj){
    let selectPoint = ""
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.machiningCount = jsonData
        selectPoint = checkInitDate("machiningCountSelected")

    }

    let data = []
    _data_cache.machiningCount.forEach(machiningCountData=>{
        const year = machiningCountData['year']
        if(year===selectPoint) {
            data.push(machiningCountData)
        }
    })

    var dataStyle = {
        normal: {
            label: {
                show: true,
                color: '#fff',
                fontSize: 9,
            },
            labelLine: {
                length: 12,
                length2: 12
            },
        }
    };
    var labelShow = {
        show: true,
        color: '#fff',
        fontSize: 10,
        formatter: [
            '{b| {b} }',
            '{d| {d}% }'
        ].join('\n'),
        rich: {
            d: {
                fontSize: 10,
                color: '#fff'
            },
            b: {
                fontSize: 12,
                color: '#fff'
            },
        }
    };
    var placeHolderStyle = {
        normal: {
            color: 'rgba(0,0,0,0)',
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(0,0,0,0)'
        }
    };
    var seriesData = [], x0 = 360, x1 = 0, rs = [[53,55],[20,37],[37,47],[27,37],[15,40],[15,40]], sa = [121,59.33,400.94,341.25,307.08, 276.60];
    data.forEach(function(d, i){
        var x = 3.6 * d.value;
        x0 = sa[i];
        x1 = 360 - x - x0;
        var arr = [{
            value: x0,
            name: '',
            itemStyle: placeHolderStyle
        }, {
            value: x,
            name: d.name,
            label: labelShow,
        }, {
            value:x1,
            name: '',
            itemStyle: placeHolderStyle
        }];
        var o = {
            name: 'Line '+(i+1),
            type: 'pie',
            clockWise: false,
            radius: rs[i],
            itemStyle: dataStyle,
            hoverAnimation: false,
            data:arr
        };
        seriesData.push(o);
    });
    seriesData.push({
        type: 'bar',
        data: [0],
        coordinateSystem: 'polar',
        name: '06a',
        stack: 'a'
    });
    var option = {
        color: ['#2078d1', '#8a00ec', '#ff00f3', '#fb0065', '#ff941b', '#ac9857'],
        tooltip: {
            show: true,
            formatter: function(param){
                if (param.name.length>0) {
                    return param.name+'<br/>'+Math.round(param.value*10,2)+' 亿吨';
                }
            }
        },
        angleAxis: {
            type: 'category',
            z: 10,
            axisLine: {
                color: '#fff',
                lineStyle: {
                    width: 3,
                    color: '#fff',
                }
            },
        },
        radiusAxis: {
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                color: '#fff'
            },
            axisLine: {
                show: false,
                color: '#fff',
                lineStyle: {
                    color: '#fff',
                }
            },
            splitLine: {
                color: '#000',
                lineStyle: {
                    type: 'dotted',
                    color: 'rgba(170,170,170,.5)',
                }
            },

        },
        polar: {
            center: ['50%', '50%'],
            radius: 64,
        },
        legend: {
            show:false
        },
        series: seriesData
    };
    var myChart = echarts.init($('#machiningCount')[0]);
    myChart.setOption(option);
}

function worldTop10MachiningBak(data){
    var option = {
        tooltip:{
            formatter:'{b}: {c}',
        },
        grid:{
            top:'10%',
            bottom:'10%',
            left:'5%',
            right:'5%',
            containLabel:true,
        },
        xAxis: [{
            type: 'category',
            data: data[1],
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {

                textStyle: {
                    color: '#ffffff'
                }
            }
        }],
        yAxis: [{
            splitLine: {
                show: false
            },
            type: 'value',
            splitNumber:3,
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                formatter:'{value}',

                textStyle: {
                    color: '#ffffff',
                }
            }
        }],
        series: [{
            name: '探明储量',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(40,161,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(40,161,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(40,161,255,0.1)'
                        }]
                    ),
                    barBorderRadius: [3, 3, 0, 0]
                }
            },
            z: -12,
            data: data[2]
        }]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}
