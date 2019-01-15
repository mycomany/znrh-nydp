$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/elec/ha/main.json' + __time,main);
    getdata('/energy/elec/ha/chart1.json' + __time,chart1);
    getdata('/energy/elec/ha/chart2.json' + __time,chart2);
    getdata('/energy/elec/ha/chart3.json' + __time,getchart3);
    getdata('/energy/elec/ha/chart4.json' + __time,chart4);
});

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


function main(){
    var mapData = [{
        name: '俄罗斯',
        value: [39.378811,57.509873, 10613221.57]
    },{
        name: '乌克兰',
        value: [30.106574,49.847142,7959916.179]
    },{
        name: '加拿大',
        value: [-108.645839,58.500205,7517698.614]
    },{
        name: '德国',
        value: [10.311082,51.246807,8402133.745]
    },{
        name: '意大利',
        value: [12.592347,42.547686,5306610.786]
    },{
        name: '荷兰',
        value: [4.865482,52.375709,5129723.76]
    },{
        name: '法国',
        value: [1.88512,47.600749,4864393.221]
    },{
        name: '奥地利',
        value: [14.652844,47.687781, 4687506.194]
    },{
        name: '美国',
        value: [-101.838839,40.002538,8844351.31]
    },{
        name: '中国',
        value: [103.033458,34.354405,4422175.655]
    }];
    var color = ['#9ae5fc', '#dca93c']; // 自定义图中要用到的颜色
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
            return val[2]/1000000*3;
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
        // title : {
        //     text: '中国与世界主要国家发电消耗标准煤对比',
        //     left: 'center',
        //     textStyle : {
        //         color: '#a4d6fe',
        //         fontSize: 18
        //     }
        // },
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                if (params.componentSubType == 'effectScatter') {
                    //alert(JSON.stringify(params));
                    return params.name+' : '+params.data.value[2]+'吨';
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

function change1(v){

}

function chart1(data){

    var chartId = "chart1";
    var yf = "11";

    var seriArray = [];
    for(var i=0; i<data[1].length; i++){
        seriArray.push(
            {
                "name": data[1][i],
                "type": "bar",
                barWidth: "40%",
                "stack": "总量",
                // "barMaxWidth": 50,
                // "barGap": "10%",
                "itemStyle": {
                    "normal": {
                        "barBorderRadius": 0,
                        "color": data[0][i],
                        "label": {
                            // "show": true,
                            // "position": "insideTop",
                            formatter : function(p) {
                                return p.value > 0 ? (p.value ): '';
                            }
                        }
                    }
                },
                "data": data[4][yf][data[3][i]],
            }
        );
    }


    option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "shadow"
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + '%';
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
        "calculable": true,
        "xAxis": [
            {
                "type": "category",
                "data": data[2],
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
        "yAxis": {
            type: 'value',
            // name: "%",
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,20],
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
        "series": seriArray
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
    setH(chartId);
}

function change2(v){

}

function chart2(data){

    var chartId = "chart2";
    var yf = "11"

    //排序，名称data[0][2]，数据data[0][3][yf]["fd"]
    var dataArray = [];
    for(var i=0; i<data[0][2].length; i++){
        dataArray.push({"name": data[0][2][i], "value": data[0][3][yf]["fd"][i]});
    }
    dataArray.sort(function(a,b){
        return b.value - a.value
    });
    for(var i=0; i<dataArray.length; i++){
        data[0][2][i] = dataArray[i].name;
        data[0][3][yf]["fd"][i] = dataArray[i].value;
    }

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
                    if(params[i].seriesName == data[0][0][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1][0];
                    }
                }
                return res;
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
        },
        /* "legend": {
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
             data: data[0][0],
         },*/
        "xAxis": [
            {
                "type": "category",
                "data": data[0][2],
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
                // name:data[0][1][0],
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
                }
            }
        ],
        "series": [
            {
                "name": data[0][0][0],
                "type": "bar",
                "data": data[0][3][yf]["fd"],
                "barWidth": "30%",
                yAxisIndex:0,
                itemStyle: {
                    "normal": {
                        "color": "#2b88ff"
                    }
                }
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}

var chart3Data;
function getchart3(data){
    chart3Data = data;
    chart3(chart3Data, "国电投")
}

function change3(v){
    chart3(chart3Data, v)
}

function chart3(data, selectName){

    const lineColors = [{rgb1:65,rgb2:56,rgb3:225},{rgb1:64,rgb2:148,rgb3:255}];

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
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                }
                return res;
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'5%',
            bottom:'10%',
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
            data: data[0][0],
        },
        "xAxis": [
            {
                "type": "category",
                "data": data[1],
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
                }
            }
        ],
        "series": [
            {
                "name": selectName,
                "type": "line",
                "data": data[3][selectName],
                smooth: true,
                showSymbol: false,
                "yAxisIndex": 0,
                "itemStyle": {
                    "normal": {
                        "color": "#4138e1"
                    }
                },
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
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}


function change4(v){

}

function chart4(data){

    var chartId = "chart4";

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[2].length; i++){
        dataArray.push({"name": data[2][i], "value": data[3][i]});
    }
    dataArray.sort(function(a,b){
        return b.value - a.value
    });
    for(var i=0; i<dataArray.length; i++){
        data[2][i] = dataArray[i].name;
        data[3][i] = dataArray[i].value;
    }

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
                    if(params[i].seriesName == data[0][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + data[1][0];
                    }
                }
                return res;
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
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
        //     data: data[0],
        // },
        "xAxis": [
            {
                "type": "category",
                "data": data[2],
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
                    // formatter: data[1][0]
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
            }
        ],
        "series": [
            {
                "name": data[0][0],
                "type": "bar",
                "data": data[3],
                barWidth: "40%",
                "itemStyle": {
                    "normal": {
                        "color": "#40eaf9"
                    }
                },
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}


