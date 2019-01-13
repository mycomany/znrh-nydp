$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/elec/ha/main.json' + __time,main);
    getdata('/energy/elec/ha/chart1.json' + __time,chart1);
    getdata('/energy/elec/ha/chart2.json' + __time,chart2);
    getdata('/energy/elec/ha/chart3.json' + __time,chart3);
    getdata('/energy/elec/ha/chart3.json' + __time,chart3_3);
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


function main(data){

    var chartId = "main";
    var yf = "11";

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
                    }else if(params[i].seriesName == data[0][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + '%';
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
            data: data[0],
        },
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
                name:data[1][0],
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
                    formatter: data[1][1]
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": data[0][0],
                "type": "bar",
                "data": data[3][yf].dl,
                barWidth: "50%",
                "itemStyle": {
                    "normal": {
                        "color": "#00feff"
                    }
                },
            },
            {
                "name": data[0][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[3][yf].tb,
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
    setH(chartId);
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
                barWidth: "50%",
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
            name: "%",
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
                    if(params[i].seriesName == data[0][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[1][0];
                    }else if(params[i].seriesName == data[0][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[1][1];
                    }else {
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + '%';
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
            data: data[0],
        },
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
                name:data[1][0],
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
                    formatter: data[1][2]
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": data[0][0],
                "type": "bar",
                "data": data[3],
                "yAxisIndex": 0,
                "barWidth": "20%",
                "itemStyle": {
                    "normal": {
                        "color": "#43eec6"
                    }
                },
            },
            {
                "name": data[0][1],
                "type": "bar",
                "barWidth": "20%",
                "yAxisIndex": 0,
                "data": data[4],
                "itemStyle": {
                    "normal": {
                        color: '#0286ff'
                    }
                }
            },
            {
                "name": data[0][2],
                "type": "line",
                "data": data[5],
                "yAxisIndex": 1,
                itemStyle: {
                    normal: {
                        "color": "#ffaa00"
                    }
                }
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
    setH(chartId);
}


function chart3(data){

    var chartId = "chart3";
    var yf = "11"

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
                    }else if(params[i].seriesName == data[0][0][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1][1];
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
            data: data[0][0],
        },
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
                name:data[0][1][0],
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
            },

            {
                type: 'value',
                name: "%",
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
        "series": [
            {
                "name": data[0][0][0],
                "type": "bar",
                "data": data[0][3][yf]["fd"],
                "barWidth": "20%",
                yAxisIndex:0,
                itemStyle: {
                    "normal": {
                        "color": "#43eec6"
                    }
                }
            },
            {
                "name": data[0][0][1],
                "type": "line",
                "data": data[0][3][yf]["tb"],
                // "barWidth": "20%",
                yAxisIndex:1,
                itemStyle: {
                    "normal": {
                        "color": "#ffaa00"//"#43eec6"
                    }
                }
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}


function chart3_3(data){

    var chartId = "chart3_3";
    var yf = "11"

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
                    if(params[i].seriesName == data[1][0][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[1][1][0];
                    }else if(params[i].seriesName == data[1][0][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[1][1][1];
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
            data: data[1][0],
        },
        "xAxis": [
            {
                "type": "category",
                "data": data[1][2],
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
                name:data[1][1][0],
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
            },

            {
                type: 'value',
                name: "%",
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
        "series": [
            {
                "name": data[1][0][0],
                "type": "bar",
                "data": data[1][3][yf]["rj"],
                "barWidth": "20%",
                yAxisIndex:0,
                itemStyle: {
                    "normal": {
                        "color": "#43eec6"
                    }
                }
            },
            {
                "name": data[1][0][1],
                "type": "line",
                "data": data[1][3][yf]["tb"],
                // "barWidth": "20%",
                yAxisIndex:1,
                itemStyle: {
                    "normal": {
                        "color": "#ffaa00"
                    }
                }
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
                    if(params[i].seriesName == data[0][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + data[1][0];
                    }else {
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + '%';
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
            data: data[0],
        },
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
                name:data[1][0],
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
                // "name": "完成率",
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
                    formatter: data[1][1]
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": data[0][0],
                "type": "bar",
                "data": data[3],
                barWidth: "50%",
                "itemStyle": {
                    "normal": {
                        "color": "#9AC0CD"
                    }
                },
            },
            {
                "name": data[0][1],
                "type": "line",
                // symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[4],
                "itemStyle": {
                    "normal": {
                        "color": "#669933"
                    }
                },
                // "smooth": true
            },
            {
                "name": data[0][2],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[5],
                "itemStyle": {
                    "normal": {
                        "color": "#1E90FF"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
    setH(chartId);
}


