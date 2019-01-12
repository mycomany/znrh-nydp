$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/gas/ha/chart1.json' + __time,chart1);
    getdata('/energy/gas/ha/chart2.json' + __time,chart2);
    getdata('/energy/gas/ha/chart3.json' + __time,chart3);
    getdata('/energy/gas/ha/chart4.json' + __time,chart4);
    getdata('/energy/gas/ha/chart5.json' + __time,chart5);
    getdata('/energy/gas/ha/main.json' + __time,main);
});

function dwz(data, name){
    for(var i=0; i<data[3].length; i++){
        if(data[3][i] == name){
            return data[0][i];
        }
    }
    return "";
}

function main(data){

    var nf = "2013"

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
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + dwz(data, params[i].name);
                }
                return res;

            }
        },
        legend: {
            show:true,
            bottom : 10,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data:data[1]
        },
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
        xAxis: [
            {
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
            }
        ],
        yAxis: {
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
            // name: data[0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,55],
                align:'center',
                color:'#fff',
            },
            type: 'value',
            z:10,
        },
        series:[
            {
                "name":"理论值",
                "type":"bar",
                "barWidth":40,
                "color":"#4682B4",
                "data":data[4][nf]["th"]
            },
            {
                "name":"实际值",
                "type":"bar",
                "barWidth":40,
                "color":"#00BFFF",
                "data":data[4][nf]["sj"]
            }
        ]
    };
    var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}



function chart1(data){
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
            name: data[0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,20],
                align:'center',
                color:'#fff',
            },
            type: 'value',
            z:10,
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
                data: data[4]
            },
            {
                name: data[1][1],
                color: data[2][1],
                type: 'line',
                data: data[5]
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


function chart2(data){

    var chartId = "chart2";

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
                "type": "line",
                symbol: 'circle',
                "data": data[4],
                "barWidth": "auto",
                "itemStyle": {
                    "normal": {
                        "color": "#43eec6"
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
                        "color": "#ffaa00"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
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
                "type": "line",
                symbol: 'circle',
                "data": data[4],
                "barWidth": "auto",
                "itemStyle": {
                    "normal": {
                        "color": "#43eec6"
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
                        "color": "#ffaa00"
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
                "type": "line",
                symbol: 'circle',
                "data": data[4],
                "barWidth": "auto",
                "itemStyle": {
                    "normal": {
                        "color": "#43eec6"
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
                        "color": "#ffaa00"
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
                "name": data[0][0],
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
                    // formatter: "{value}%"
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
                "type": "line",
                symbol: 'circle',
                "data": data[4],
                "barWidth": "auto",
                "itemStyle": {
                    "normal": {
                        "color": "#43eec6"
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
                        "color": "#ffaa00"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}