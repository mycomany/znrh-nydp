$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/gas/ha/main.json' + __time,getMain);
    changeMap('nh');//chart1
    getdata('/energy/gas/ha/chart2.json' + __time,chart2);
    getdata('/energy/gas/ha/chart3.json' + __time,chart3);
    getdata('/energy/gas/ha/chart4.json' + __time,chart4);
    getdata('/energy/gas/ha/chart5.json' + __time,chart5);
});

function dwz(data, name){
    for(var i=0; i<data[3].length; i++){
        if(data[3][i] == name){
            return data[0][i];
        }
    }
    return "";
}

var mainData;
function getMain(data){
    mainData = data;
    main(mainData, "储气库工作气量")
}

function changeMain(lx, param){
    var id ="#"+param;
    $(".d"). removeClass("check_btn_option_checked");
    $(id). addClass("check_btn_option_checked");

    main(mainData, lx)
}

function main(mainData, lx){

    var color = ['#9ae5fc', '#2b88ff']; // 自定义图中要用到的颜色
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
                    return "";//v.name;//+": "+v.data.value[2]+' 吨';
                }
            }
        },
        symbolSize: function(val) {
            return val[2]/mainData[4][lx];
        },
        itemStyle: {
            normal: {
                color: color[1]
            }
        },
        data: mainData[3][lx]
    },
        // {
        //     name: '点',
        //     type: 'scatter',
        //     coordinateSystem: 'geo',
        //     symbol: 'pin',
        //     symbolSize: function(val) {
        //         return 60;
        //     },
        //     label: {
        //         normal: {
        //             show: true,
        //             textStyle: {
        //                 color: '#fff',
        //                 fontSize: 12,
        //             }
        //         }
        //     },
        //     itemStyle: {
        //         normal: {
        //             color: '#efb333', //标志颜色
        //         }
        //     },
        //     zlevel: 6,
        //     data: mainData[3][lx],
        // }
    );

    // 最后初始化世界地图中的相关数据
    var option = ({
        title : {
            text: '',
            left: 'center',
            textStyle : {
                color: '#a4d6fe',
                fontSize: 18
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.componentSubType == 'effectScatter') {
                    //alert(JSON.stringify(params));
                    return params.name+' : '+params.data.value[2] + " " + mainData[0][lx];
                }else{
                    return '';
                }
            }
        },
        geo: {
            map: 'world', // 与引用进来的地图js名字一致
            roam: true, // 禁止缩放平移
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
        getdata('/energy/gas/ha/chart1.json' + __time,chart1_nh);
    }else if("dh" == param){
        getdata('/energy/gas/ha/chart1.json' + __time,chart1_dh);
    }
}

const lineColors = [{rgb1:65,rgb2:56,rgb3:225},{rgb1:64,rgb2:148,rgb3:255}];

function chart1_nh(data){
    var option = {
        title: {
            text: '中国天然气开采综合能耗对比',
            x: 'center',
            y: 0,
            textStyle:{
                color:'#a4d6fe',
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
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: data[0][2]
        },
        grid:{
            top:'25%',
            left:'5%',
            right:'5%',
            bottom:'1%',
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
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart1_dh(data){
    var option = {
        title: {
            text: '中国天然气开采综合能耗对比',
            x: 'center',
            y: 0,
            textStyle:{
                color:'#a4d6fe',
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
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: data[1][2]
        },
        grid:{
            top:'25%',
            left:'5%',
            right:'5%',
            bottom:'1%',
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
    var myChart = echarts.init($('#chart1')[0]);
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
        legend:{
            show:true,
            top : 0,
            right:1,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: data[2]
        },
        grid:{
            top:'5%',
            left:'5%',
            right:'5%',
            bottom:'10%',
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
            data: data[3]
        },
        yAxis: [{
            type: 'value',
            name:data[0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,15],
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
                name: data[2][0],
                color:data[1][0],
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
                name: data[2][1],
                color:data[1][1],
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


function chart3(data){

    var chartId = "chart3";

    option = {
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
                    if(params[i].seriesName == data[1][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                    }else if(params[i].seriesName == data[1][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1];
                    }
                }
                return res;
            }
        },
        grid: {
            left: '5%',
            right:'5%',
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
            data: data[1],
        },
        "xAxis": [
            {
                "type": "category",
                "data": data[3],
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
                    formatter: "{value}%"
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": data[1][0],
                "type": "bar",
                "data": data[4],
                "barWidth": "30%",
                "itemStyle": {
                    "normal": {
                        "color": "#2b88ff"
                    }
                },
                "smooth": true
            },
            {
                "name": data[1][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[5],
                "itemStyle": {
                    "normal": {
                        "color": "#25e4a3"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}


function chart4(data){

    var chartId = "chart4";

    option = {
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
                    if(params[i].seriesName == data[1][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                    }else if(params[i].seriesName == data[1][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1];
                    }
                }
                return res;
            }
        },
        grid: {
            left: '5%',
            right:'5%',
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
            data: data[1],
        },
        "xAxis": [
            {
                "type": "category",
                "data": data[3],
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
                    }
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
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
                    formatter: "{value}%"
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": data[1][0],
                "type": "bar",
                "data": data[4],
                "barWidth": "30%",
                "itemStyle": {
                    "normal": {
                        "color": "#2b88ff"
                    }
                },
                "smooth": true
            },
            {
                "name": data[1][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[5],
                "itemStyle": {
                    "normal": {
                        "color": "#25e4a3"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}



function chart5(data){

    var chartId = "chart5";

    option = {
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
                    if(params[i].seriesName == data[1][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                    }else if(params[i].seriesName == data[1][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1];
                    }
                }
                return res;
            }
        },
        grid: {
            left: '5%',
            right:'5%',
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
            data: data[1],
        },
        "xAxis": [
            {
                "type": "category",
                "data": data[3],
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
                    }
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
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
                    formatter: "{value}%"
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": data[1][0],
                "type": "bar",
                "data": data[4],
                "barWidth": "30%",
                "itemStyle": {
                    "normal": {
                        "color": "#2b88ff"
                    }
                },
                "smooth": true
            },
            {
                "name": data[1][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[5],
                "itemStyle": {
                    "normal": {
                        "color": "#25e4a3"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}
