let _data_cache = {}

$(document).ready(function(){
    main("c1");
    chart1();
    getdata('/produce/gasIndex/near10Order.json',near10Order);
    // chart3();
    chart4();
    getdata('/produce/gasIndex/areaRatioOrder.json',chart5);
    getdata('/produce/gasIndex/wordTop10Machining.json',chart6);
    getdata('/produce/gasIndex/cnTop10Machining.json',chart7);
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
        return value2 - value1;     // 降
    }
}

function main(param){
    var c2 = [{"name":"北京","value":15.4},
        {"name":"天津","value":21.5},
        {"name":"河北","value":7.4},
        {"name":"山西","value":46.8},
        {"name":"内蒙古","value":0.2},
        {"name":"辽宁","value":5.1},
        {"name":"吉林","value":18.6},
        {"name":"黑龙江","value":40.5},
        {"name":"上海","value":1.7},
        {"name":"江苏","value":2.9},
        {"name":"浙江","value":0},
        {"name":"安徽","value":2.6},
        {"name":"福建","value":0},
        {"name":"江西","value":0.2},
        {"name":"山东","value":4.1},
        {"name":"河南","value":3},
        {"name":"湖北","value":1.3},
        {"name":"湖南","value":0},
        {"name":"广东","value":89.2},
        {"name":"广西","value":0.2},
        {"name":"海南","value":1.1},
        {"name":"重庆","value":60.7},
        {"name":"四川","value":356.4},
        {"name":"贵州","value":4.1},
        {"name":"云南","value":0},
        {"name":"西藏","value":0},
        {"name":"陕西","value":419.4},
        {"name":"甘肃","value":0.6},
        {"name":"青海","value":64},
        {"name":"宁夏","value":0},
        {"name":"新疆","value":307}];
    var c1 = [{"name":"北京","value":0},
        {"name":"天津","value":274.91},
        {"name":"河北","value":338.03},
        {"name":"山西","value":413.75},
        {"name":"内蒙古","value":9630.49},
        {"name":"辽宁","value":154.54},
        {"name":"吉林","value":731.25},
        {"name":"黑龙江","value":1302.33},
        {"name":"上海","value":0},
        {"name":"江苏","value":23.31},
        {"name":"浙江","value":0},
        {"name":"安徽","value":0.25},
        {"name":"福建","value":0},
        {"name":"江西","value":0},
        {"name":"山东","value":334.93},
        {"name":"河南","value":74.77},
        {"name":"湖北","value":46.87},
        {"name":"湖南","value":0},
        {"name":"广东","value":0.59},
        {"name":"广西","value":1.58},
        {"name":"海南","value":24.35},
        {"name":"重庆","value":2726.9},
        {"name":"四川","value":13191.61},
        {"name":"贵州","value":6.1},
        {"name":"云南","value":0.47},
        {"name":"西藏","value":0},
        {"name":"陕西","value":7802.5},
        {"name":"甘肃","value":318.03},
        {"name":"青海","value":1354.44},
        {"name":"宁夏","value":274.44},
        {"name":"新疆","value":10251.78}];
    var c3 = [{"name":"地区","value":"消费"},
        {"name":"北京","value":162.31},
        {"name":"天津","value":74.53},
        {"name":"河北","value":70.45},
        {"name":"山西","value":69.35},
        {"name":"内蒙古","value":45.06},
        {"name":"辽宁","value":50.63},
        {"name":"吉林","value":21.51},
        {"name":"黑龙江","value":38.04},
        {"name":"上海","value":79.04},
        {"name":"江苏","value":172.73},
        {"name":"浙江","value":87.78},
        {"name":"安徽","value":39.18},
        {"name":"福建","value":48.55},
        {"name":"江西","value":20.04},
        {"name":"山东","value":98.61},
        {"name":"河南","value":92.75},
        {"name":"湖北","value":41.5},
        {"name":"湖南","value":28.32},
        {"name":"广东","value":167.79},
        {"name":"广西","value":12.89},
        {"name":"海南","value":41.29},
        {"name":"重庆","value":89.32},
        {"name":"四川","value":181.57},
        {"name":"贵州","value":17.11},
        {"name":"云南","value":7.71},
        {"name":"西藏","value":0},
        {"name":"陕西","value":98.22},
        {"name":"甘肃","value":26.4},
        {"name":"青海","value":46.25},
        {"name":"宁夏","value":22.4},
        {"name":"新疆","value":132.38}];
    var mapData = c1;
    var name = '储量';
    var max = 13200;
    if (param  == "c2") {
        mapData = c2;
        name = '产量';
        max = 450;
    }else if (param  == "c3") {
        mapData = c3;
        name = '消费量';
        max = 180;
    }else{
        mapData = c1;
        name = '储量';
        max = 13200;
    }
    option = {
        title:[{
            text:'中国天然气'+name+'分布   (2016)',
            top:'3%',
            left:'center',
            textStyle: {
                color: '#29B8FF',
                fontSize:16,
            }
        }],
        tooltip: {
            trigger: 'item',
            formatter: function (v){
                //alert(JSON.stringify(v));
                var cl = '<br/>'+name+' :'+v.data.value+'(亿立方米)';
                return v.name +cl;
            }
        },
        visualMap: {
            min: 0,
            max: max,
            text: [name+': (亿立方米)',' '],
            itemHeight:100,
            itemWidth:15,
            textGap:15,
            seriesIndex:0,
            calculable:true,
            left:30,
            bottom:5,
            textStyle:{
                color:'#fff',
                fontSize: 10
            },
            //calculable: true,
            // color: ['#00d6ff','#81edf9','#b3f0f7']
            color: ['#2E2E58','#65FCF7','#0048FE']
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
                        show: true
                    }
                }
            },
            data: mapData
        }]
    };
    var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function chart1(data){

    var option =  {
        textStyle: {
            color: '#59ebe8'
        },
        legend: {
            show:true,
            bottom : '4%',
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data:['产量（十亿立方米）','天然气储采比（年）'],
        },
        grid: {
            left: '3%',
            right:'3%',
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
            position: "bottom",
            type: "category",
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
                rotate: 30
            },
            data: ['1980年','1981年','1982年','1983年','1984年','1985年','1986年','1987年','1988年','1989年','1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
        }],
        yAxis: [{
            type: 'value',
            position: 'left',
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
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitLine: {
                show: false
            }
        },{
            type: 'value',
            position: 'right',
            min:16,
            max:120,
            axisTick: {
                show: true
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
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                },
                formatter: '{value}'
            },
            //单位
        }],
        series: [{
            name: "产量（十亿立方米）",
            type: "bar",
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: '#25e4a3',
                    barBorderRadius: 50,
                },
            },
            data: [14.4,12.8,12.0,12.3,12.5,13.0,13.9,14.0,14.4,15.2,15.4,15.6,15.9,16.9,17.7,18.1,20.3,22.9,23.5,25.4,27.4,30.6,32.9,35.3,41.8,49.7,59.0,69.8,80.9,85.9,96.5,106.2,111.5,121.8,131.2,135.7,137.9,149.2],

        }, {
            name: "天然气储采比（年）",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#faf13f'
                },
            },
            data: [49.25,54.90,72.01,71.51,71.58,67.44,62.86,64.36,64.66,67.96,65.30,64.67,88.59,99.65,95.09,93.02,58.19,51.11,58.72,54.25,50.25,45.10,38.82,38.16,34.93,31.11,28.75,32.57,33.49,33.37,28.45,27.59,28.17,27.70,27.26,34.49,39.72,36.73],

        }]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function near10Order(jsonData,selectObj){

    let selectPoint = ""
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.near10OrderDatas = jsonData
        selectPoint = checkInitDate("near10OrderSelected")

    }

    let groupDataObj = {}

    let legendArray = []
    let point= ''
    _data_cache.near10OrderDatas.forEach((eachData,i)=>{
        const group = eachData['group']
        if(group!=selectPoint){
            return
        }
        point = eachData['point']

        legendArray.push(group)
        const groupDatas = eachData['groupDatas']
        groupDatas.sort(compare('value'))
        groupDatas.forEach(eachGroupData=>{
            const eachGroupDataName = eachGroupData['name']
            const eachGroupDataValue = eachGroupData['value']
            if(groupDataObj[eachGroupDataName]!=null){}else{
                groupDataObj[eachGroupDataName] = [0]
                // groupDataObj[eachGroupDataName] = [0,0]
            }

            // groupDataObj[eachGroupDataName][i] = eachGroupDataValue
            groupDataObj[eachGroupDataName][0] = eachGroupDataValue
        })
    })

    const xArray = Object.keys(groupDataObj)
    let barArray = []
    const colorArray = [['rgba(67,147,250,1)','rgba(67,147,250,0.5)','rgba(67,147,250,0.1)'],['#00feff','#027eff']]
    Object.values(groupDataObj).forEach(groupData=>{
        groupData.forEach((eachGroupData,i)=>{
            if(barArray[i]!=null){
                barArray[i].data.push(eachGroupData)
            }else{
                barArray[i] = {
                    "name": legendArray[i],
                    "type": "bar",
                    "data": [eachGroupData],
                    "barWidth": "10",
                    "itemStyle": {
                        normal: {
                            // barBorderRadius: [30, 30, 0, 0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1, [{
                                    offset: 0,
                                    color: colorArray[i][0]
                                }, {
                                    offset: 0.4,
                                    color: colorArray[i][1]
                                }, {
                                    offset: 1,
                                    color: colorArray[i][2]
                                }
                                ]
                            )
                        }
                    }
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
            bottom:'8%',
            containLabel: true
        },
        // "legend": {
        //     show:true,
        //     bottom : '2%',
        //     itemGap: 12, //图例每项之间的间隔
        //     itemWidth: 16, //图例宽度
        //     itemHeight: 8, //图例高度
        //     textStyle: {
        //         color:'#fff',
        //         fontFamily: '微软雅黑',
        //         fontSize: 10,
        //     },
        //     data: legendArray,
        // },
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
                name:point,
                nameGap:3,
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

}


function chart2(data){
    option = {
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
            left: '3%',
            right:'3%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        "legend": {
            show:true,
            bottom : '4%',
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: ['中国','中国 天然气探明储量占比']
        },
        "xAxis": [
            {
                "type": "category",
                "data": ['1980年','1981年','1982年','1983年','1984年','1985年','1986年','1987年','1988年','1989年','1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
                "axisPointer": {
                    "type": "shadow"
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
            }
        ],
        "yAxis": [
            {
                type: 'value',
                name:'          万亿立方米',
                nameGap:1,
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
                "splitLine": {
                    "show": false
                },
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
                //单位
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": "中国",
                "type": "bar",
                "data": [0.7,0.7,0.9,0.9,0.9,0.9,0.9,0.9,0.9,1.0,1.0,1.0,1.4,1.7,1.7,1.7,1.2,1.2,1.4,1.4,1.4,1.4,1.3,1.3,1.5,1.5,1.7,2.3,2.7,2.9,2.7,2.9,3.1,3.4,3.6,4.7,5.5,5.5],
                "barWidth": "60%",
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
                "name": "中国 天然气探明储量占比",
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": [1.0,0.9,1.1,1.1,1.1,1.1,1.0,1.0,1.0,1.0,0.9,0.9,1.2,1.4,1.4,1.4,0.9,0.9,1.0,1.0,1.0,0.9,0.8,0.9,0.9,1.0,1.1,1.4,1.6,1.7,1.5,1.5,1.7,1.8,1.9,2.4,2.8,2.8],
                "itemStyle": {
                    "normal": {
                        "color": "#86E65A"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(){
    option ={
        color: ['#366DFF','#7C7DFF','#FFD200','#3729FF','#15C0FE','#FFFFFF','#003AC4'],
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                color: '#fafafa'
            }

        },
        legend: {
            show:true,
            bottom : '2%',
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            type:'scroll',
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: ['采掘业','制造业','电力生产','交运仓储','其他行业','生活消费','批发零售业'],
        },
        grid: {
            left: '3%',
            right:'6%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },

        calculable: true,
        yAxis: [{
            type: 'category',
            data: ['2000年', '2005年', '2010年', '2015年'],
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
                /*itemStyle: {
                    normal: {
                        color: '#3CB371'
                    }
                },*/
                data: [29.43,17.80,12.54,8.45]
            },
            {
                name: '制造业',
                type: 'bar',
                stack: '总量',
                barWidth: '60%',
                /*itemStyle: {
                    normal: {
                        color: '#3fa7d3'
                    }
                },*/
                data: [48.46,46.91,33.45,37.20]
            },
            {
                name: '电力生产',
                type: 'bar',
                stack: '总量',
                barWidth: '60%',
                /*itemStyle: {
                    normal: {
                        color: '#FF6347'
                    }
                },*/
                data: [3.32,5.59,17.68,18.26]
            },
            {
                name: '交运仓储',
                type: 'bar',
                stack: '总量',
                barWidth: '60%',
                /*itemStyle: {
                    normal: {
                        color: '#FF1347'
                    }
                },*/
                data: [3.60,8.13,9.98,12.30]
            },
            {
                name: '其他行业',
                type: 'bar',
                stack: '总量',
                barWidth: '60%',
                /*itemStyle: {
                    normal: {
                        color: '#FF2347'
                    }
                },*/
                data: [0.60,2.27,2.59,2.51]
            },
            {
                name: '生活消费',
                type: 'bar',
                stack: '总量',
                barWidth: '60%',
                /*itemStyle: {
                    normal: {
                        color: '#FF3347'
                    }
                },*/
                data: [13.19,16.99,21.22,18.63]
            },
            {
                name: '批发零售业',
                type: 'bar',
                stack: '总量',
                barWidth: '60%',
                /*itemStyle: {
                    normal: {
                        color: '#FF4347'
                    }
                },*/
                data: [1.40,2.31,2.55,2.66]
            }
        ]

    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(){
    var option = {
        tooltip: {
            trigger: "axis"
        },
        legend:{
            show:true,
            bottom : '4%',
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data:['产量','生产指数PI']
        },
        grid: {
            left: '3%',
            right:'6%',
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
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                }
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data:['1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
        },
        yAxis: [{
            type: 'value',
            name:'        百万吨油当量',
            nameGap:1,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            splitLine:{
                show:false
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
        },{
            type: 'value',
            max:150,
            splitLine:{
                show:false
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
                formatter: '{value}%'
            },
            //单位
        }],
        series: [
            {
                name:'产量',
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: 'rgba(62,228,243,1)'},
                                {offset: 0.5, color: 'rgba(62,228,243,0.5)'},
                                {offset: 1, color: 'rgba(62,228,243,0.1)'}
                            ]
                        )
                    },
                },
                data: [13.3,13.4,13.7,14.5,15.2,15.6,17.4,19.7,20.2,21.8,23.6,26.3,28.3,30.3,35.9,42.7,50.7,60.0,69.6,73.9,83.0,91.3,95.9,104.7,112.8,116.7,118.6,128.3]
            },
            {
                name:'生产指数PI',
                yAxisIndex:1,
                type:'line',
                symbolSize:0,
                itemStyle:{
                    normal:{
                        color:'#2b88ff'
                    }
                },
                data: [100.00,100.00,100.00,100.00,100.00,101.18,108.20,115.57,114.92,117.23,111.01,110.57,111.91,103.26,104.51,105.82,102.13,98.18,98.78,95.25,88.68,78.55,73.89,70.87,69.64,69.68,65.86,62.05]
            }
        ]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
    var pieData = data[3];
    var option = {
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : ({d}%)"
        },
        // color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4','#0007ff'],
        color: ['#f24942', '#6491e6', '#eeac53', '#2cffc9', '#2baffb', '#fdb91a','#4138e1'],
        series: [{
            name: '储量占比',
            type: 'pie',
            //roseType : 'radius',
            radius: ['30%','60%'],
            center: ["50%", "55%"], //圆心坐标
            labelLine: {
                length: 8,
                length2: 4
            },
            label: {
                normal: {
                    show: true,
                    position: 'outside',
                    formatter: "{b}\n{c}%",
                    textStyle: {
                        color:'#fff',
                        //fontSize: 8
                    }
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: 9,
                        fontWeight: 'bold'
                    }
                }
            },
            data: pieData
        }]
    };
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(jsonData){
    jsonData.sort(compare('value'))

    let data = {}
    jsonData.forEach(oldData=>{
        data[oldData['name']] = oldData['value']
    })
    const colorArray = [['rgba(67,147,250,1)','rgba(67,147,250,0.5)','rgba(67,147,250,0.1)'],['#00feff','#027eff']]

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
            name:'亿立方米',
            nameGap:1,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
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
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: colorArray[0][0]
                        }, {
                            offset: 0.4,
                            color: colorArray[0][1]
                        }, {
                            offset: 1,
                            color: colorArray[0][2]
                        }
                        ]
                    )
                }
            },
            z: -12,
            data: Object.values(data)
        }]
    };
    var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}

function chart7(jsonData){
    jsonData.sort(compare('value'))

    let data = {}
    jsonData.forEach(oldData=>{
        data[oldData['name']] = oldData['value']
    })
    const colorArray = [['rgba(67,147,250,1)','rgba(67,147,250,0.5)','rgba(67,147,250,0.1)'],['#00feff','#027eff']]

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
            name:'亿立方米',
            nameGap:1,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
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
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1, [{
                            offset: 0,
                            color: colorArray[0][0]
                        }, {
                            offset: 0.4,
                            color: colorArray[0][1]
                        }, {
                            offset: 1,
                            color: colorArray[0][2]
                        }
                        ]
                    )
                }
            },
            z: -12,
            data: Object.values(data)
        }]
    };
    var myChart = echarts.init($('#chart7')[0]);
    myChart.setOption(option);
}


function changeMap(param){
    var id ="#"+param;
    $(".c"). removeClass("check_btn_option_checked");
    $(id). addClass("check_btn_option_checked");
    main(param);
}
