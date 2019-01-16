$(document).ready(function(){
    var __time = "?__time=" + new Date();
    changeMap('nh');//chart1
    changeMap('dh');
    getdata('/energy/oil/ha/chart2.json' + __time,chart2);
    getdata('/energy/oil/ha/chart3.json' + __time,getchart3);
    getdata('/energy/oil/ha/chart4.json' + __time,getChart4);
    getdata('/energy/oil/ha/main.json' + __time,getMain);
});

function changeMainDate(v){
    console.log(v);
}

var mainData;
function getMain(data){
    mainData = data;
    main(mainData, "炼油");
}
function changeMain(v, param){
    var id ="#"+param;
    $(".d"). removeClass("check_btn_option_checked");
    $(id). addClass("check_btn_option_checked");
    main(mainData, v);
}

function main(data, selectName){
    var mapData = data[selectName];
    var color = ['#9ae5fc', '#2874ff']; // 自定义图中要用到的颜色
    var series = []; // 用来存储地图数据

    // 显示终点位置,类似于上面最后一个效果，放在外面写，是为了防止被循环执行多次
    series.push({
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 3,
        rippleEffect: {
            brushType: 'stroke'
        },
        label: {
            normal: {
                show: false,
                //position: 'bottom',
                color:'#fff',
                fontSize:14,
                formatter: function(v){
                    //alert(JSON.stringify(v));
                    return v.name;//+": "+v.data.value[2]+' 吨';
                }
            }
        },
        symbolSize: function(val) {
//	    	if (val[3]>60) {
//	    		return 60;
//			}
            return val[2]/data["nm"][selectName];
        },
        itemStyle: {
            normal: {
                color: color[1]
            }
        },
        data: mapData
    });

    // 最后初始化世界地图中的相关数据
    var option = ({
        title : {
            text: '高耗能行业集中度国际对比',
            right:"40%",
            top: 0,
            textStyle : {
                color: '#a4d6fe',
                fontSize: 15
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.componentSubType == 'effectScatter') {
                    //alert(JSON.stringify(params));
                    return params.name+' : <br/>'+params.data.value[2] + ' 万吨';
                }else{
                    return '';
                }
            }
        },
        geo: {
            map: 'world', // 与引用进来的地图js名字一致
            roam: true, // 禁止缩放平移
            zoom:1.2,
            top:'15%',
            left:'10%',
            right:'20%',
            bottom:'15%',
            aspectScale:0.9,
            itemStyle: { // 每个区域的样式
                normal: {
                    borderColor:'rgba(13,247,249,1)',
                    areaColor: 'rgba(13,247,249,0)'
                },
                emphasis: {
                    areaColor: '#80def8'
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


function changeMap(param){
    var id ="#"+param;
    $(".c"). removeClass("check_btn_option_checked");
    $(id). addClass("check_btn_option_checked");
    var __time = "?__time=" + new Date();
    if("nh" == param){
        getdata('/energy/oil/ha/chart1.json' + __time,chart1_nh);
    }else if("dh" == param){
        getdata('/energy/oil/ha/chart1.json' + __time,chart1_dh);
    }
}

const lineColors = [{rgb1:65,rgb2:56,rgb3:225},{rgb1:64,rgb2:148,rgb3:255}];

function chart1_nh(data){
    var option = {
        title: {
            text: data[0][1][0],
            x: 'center',
            y: 0,
            textStyle:{
                color:'#afffff',
                fontSize:13,
                fontWeight:'normal',
            }
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0][0];
                }
                return res;

            }
        },
        legend:{
            show:true,
            top : 3,
            right:5,
            itemWidth: 10,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            data: data[0][2]
        },
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'10%',
            containLabel: true
        },
        xAxis: {
            boundaryGap: false,
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
            data: data[0][4]
        },
        yAxis: [{
                type: 'value',
                name:data[0][0][0],
                nameGap:-5,
                nameTextStyle:{
                    padding:[0,0,0,55],
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
                }
            }
        ],
        series: [
            {
                name: data[0][2][0],
                color:data[0][3][0],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[0][5]["nh"][0],
                areaStyle: { //区域填充样式
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                            offset: 0, // 0% 处的颜色
                            color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+', 0.3)'
                        }, {
                            offset: 0.8, // 80% 处的颜色
                            color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+', 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                        shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    }
                },
                itemStyle: { //折线拐点标志的样式
                    normal: {
                        color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+')',
                        borderColor: 'rgba('+lineColors[0].rgb1+','+lineColors[0].rgb2+','+lineColors[0].rgb2+',0.4)', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
            },
            {
                name: data[0][2][1],
                color:data[0][3][1],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[0][5]["nh"][1],
                areaStyle: { //区域填充样式
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                            offset: 0, // 0% 处的颜色
                            color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+', 0.3)'
                        }, {
                            offset: 0.8, // 80% 处的颜色
                            color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+', 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                        shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    }
                },
                itemStyle: { //折线拐点标志的样式
                    normal: {
                        color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+')',
                        borderColor: 'rgba('+lineColors[1].rgb1+','+lineColors[1].rgb2+','+lineColors[1].rgb2+',0.4)', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
            }
        ]
    };
    var myChart = echarts.init($('#chart1_nh')[0]);
    myChart.setOption(option);
}

function chart1_dh(data){
    var option = {
        title: {
            text: data[1][1][0],
            x: 'center',
            y: 0,
            textStyle:{
                color:'#afffff',
                fontSize:13,
                fontWeight:'normal',
            }
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[1][0][0];
                }
                return res;

            }
        },
        legend:{
            show:true,
            top : 3,
            right:5,
            itemWidth: 10,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            data: data[1][2]
        },
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'10%',
            containLabel: true
        },
        xAxis: {
            boundaryGap: false,
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
            data: data[1][4]
        },
        yAxis: [{
            type: 'value',
            name:data[1][0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,55],
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
            }
        }
        ],
        series: [
            {
                name: data[1][2][0],
                color:data[1][3][0],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[1][5]["dh"][0],
                areaStyle: { //区域填充样式
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                            offset: 0, // 0% 处的颜色
                            color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+', 0.3)'
                        }, {
                            offset: 0.8, // 80% 处的颜色
                            color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+', 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                        shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    }
                },
                itemStyle: { //折线拐点标志的样式
                    normal: {
                        color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+')',
                        borderColor: 'rgba('+lineColors[0].rgb1+','+lineColors[0].rgb2+','+lineColors[0].rgb2+',0.4)', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
            },
            {
                name: data[1][2][1],
                color:data[1][3][1],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[1][5]["dh"][1],
                areaStyle: { //区域填充样式
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                            offset: 0, // 0% 处的颜色
                            color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+', 0.3)'
                        }, {
                            offset: 0.8, // 80% 处的颜色
                            color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+', 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                        shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    }
                },
                itemStyle: { //折线拐点标志的样式
                    normal: {
                        color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+')',
                        borderColor: 'rgba('+lineColors[1].rgb1+','+lineColors[1].rgb2+','+lineColors[1].rgb2+',0.4)', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
            }
        ]
    };
    var myChart = echarts.init($('#chart1_dh')[0]);
    myChart.setOption(option);
}


function chart2(data){
    var option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                }
                return res;

            }
        },
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
        xAxis: {
            boundaryGap: false,
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
            data: data[3]
        },
        yAxis: {
            type: 'value',
            name:data[0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,55],
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
                // formatter: data[1][0]
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
            data: data[1]
        },
        series: [
            {
                name: data[1][0],
                color:data[2][0],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[4],
                areaStyle: { //区域填充样式
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                            offset: 0, // 0% 处的颜色
                            color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+', 0.3)'
                        }, {
                            offset: 0.8, // 80% 处的颜色
                            color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+', 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                        shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    }
                },
                itemStyle: { //折线拐点标志的样式
                    normal: {
                        color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+')',
                        borderColor: 'rgba('+lineColors[0].rgb1+','+lineColors[0].rgb2+','+lineColors[0].rgb2+',0.4)', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
            },
            {
                name: data[1][1],
                color: data[2][1],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[5],
                areaStyle: { //区域填充样式
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                            offset: 0, // 0% 处的颜色
                            color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+', 0.3)'
                        }, {
                            offset: 0.8, // 80% 处的颜色
                            color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+', 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                        shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    }
                },
                itemStyle: { //折线拐点标志的样式
                    normal: {
                        color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+')',
                        borderColor: 'rgba('+lineColors[1].rgb1+','+lineColors[1].rgb2+','+lineColors[1].rgb2+',0.4)', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
            }
        ]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

var chart3Data;
function getchart3(data){
    chart3Data = data;
    chart3(chart3Data, "全国");
}

function changeChart3(v){
    chart3(chart3Data, v);
}

function chart3(data, selectName){

    var nm = data[2][selectName];

    var dataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            },
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40, 0.5)',
        }
    };

    var placeHolderStyle = {
        normal: {
            color: 'rgba(44,59,70,1)',//未完成的圆环的颜色
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        },
        emphasis: {
            color: 'rgba(44,59,70,1)'//未完成的圆环的颜色
        }
    };

    option = {
        title: {
            text: nm + '%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: "#4138e1",
                fontSize: 30
            }
        },
        legend:{
            show:true,
            selectedMode:false,
            left : 10,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            data: [selectName]
        },
        color: ['#2baffb', '#313443', '#fff'],
        tooltip: {
            show: true,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        series: [
            {
                name: selectName,
                type: 'pie',
                clockWise: false,
                radius: [50, 55],
                itemStyle: dataStyle,
                hoverAnimation: false,

                data: [{
                        value: nm,
                        name: '01'
                    }, {
                        value: 100 - nm,
                        name: 'invisible',
                        itemStyle: placeHolderStyle
                    }
                ]
            },
            {
                name: 'Line 2',
                type: 'pie',
                animation: false,
                clockWise: false,
                radius: [60, 66],
                itemStyle: dataStyle,
                hoverAnimation: false,
                tooltip: {
                    show: false
                },
                data: [{
                    value: 100,
                    name: '02',
                    itemStyle: {
                        emphasis: {
                            color: '#fdb91a'
                        }
                    }
                }, {
                    value: 0,
                    name: 'invisible',
                    itemStyle: placeHolderStyle
                }

                ]
            }
        ]
    };

    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

var chart4Data;
function getChart4(data){
    chart4Data = data;
    chart4(chart4Data, "全国");
}

function changeChart4(v){
    chart4(chart4Data, v);
}

function chart4(data, selectName){

    var option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " %";
                }
                return res;

            }
        },
        grid:{
            top:'5%',
            left:'5%',
            right:'5%',
            bottom:'25%',
            containLabel: true
        },
        xAxis: {
            boundaryGap: false,
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
            data: data[2]
        },
        yAxis: [
            {
                type: 'value',
                // name:data[1][0],
                // min: 'dataMin', // 最小值
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
                    },
                    formatter: "{value}%"
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
            },
        ],
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
            data: data[1]
        },
        series: [
            {
                name: data[1][0],
                type: 'line',
                smooth: true,
                showSymbol: false,
                itemStyle:{
                    normal:{
                        color: '#2baffb'
                    }
                },
                data: data[3][data[1][0]][selectName],
                areaStyle: { //区域填充样式
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                            offset: 0, // 0% 处的颜色
                            color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+', 0.3)'
                        }, {
                            offset: 0.8, // 80% 处的颜色
                            color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+', 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                        shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    }
                },
                itemStyle: { //折线拐点标志的样式
                    normal: {
                        color: 'rgba('+lineColors[0].rgb1+', '+lineColors[0].rgb2+', '+lineColors[0].rgb3+')',
                        borderColor: 'rgba('+lineColors[0].rgb1+','+lineColors[0].rgb2+','+lineColors[0].rgb2+',0.4)', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
            },
            {
                name: data[1][1],
                type: 'line',
                smooth: true,
                showSymbol: false,
                itemStyle:{
                    normal:{
                        color: '#40eaf9'
                    }
                },
                data: data[3][data[1][1]][selectName],
                areaStyle: { //区域填充样式
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                            offset: 0, // 0% 处的颜色
                            color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+', 0.3)'
                        }, {
                            offset: 0.8, // 80% 处的颜色
                            color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+', 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                        shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    }
                },
                itemStyle: { //折线拐点标志的样式
                    normal: {
                        color: 'rgba('+lineColors[1].rgb1+', '+lineColors[1].rgb2+', '+lineColors[1].rgb3+')',
                        borderColor: 'rgba('+lineColors[1].rgb1+','+lineColors[1].rgb2+','+lineColors[1].rgb2+',0.4)', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
            }
        ]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}




