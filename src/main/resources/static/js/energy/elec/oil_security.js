$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/elec/security/main.json' + __time, main);
    getdata('/energy/elec/security/chart1.json' + __time, chart1);
    getdata('/energy/elec/security/chart2.json' + __time, chart2);
    getdata('/energy/elec/security/chart3.json' + __time, chart3);
    getdata('/energy/elec/security/chart4.json' + __time, chart4);
    getdata('/energy/elec/security/chart5.json' + __time, chart5);
    getdata('/energy/elec/security/chart6.json' + __time, chart6);
    getdata('/energy/elec/security/chart7.json' + __time, chart7);
    getdata('/energy/elec/security/chart8.json' + __time, chart8);
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
    var seriesData = [];

    seriesData.push({
        name: data[0][0],
        type: 'line',
        smooth: true,
        symbolSize: 8,
        symbol: 'circle',
        data: data[3][0]
    });

    seriesData.push({
        name: data[0][1],
        type: 'line',
        // smooth: true,
        // symbolSize: 8,
        symbol: 'circle',
        data: data[3][1],
        "barWidth": "auto",
        "itemStyle": {
            "normal": {
                "color": "#00feff"
            }
        }
    });

    seriesData.push({
        name: data[0][2],
        type: 'bar',
        smooth: true,
        barWidth: "50%",
        data: data[3][2],
        color: "#43eec6",
        "smooth": true
    });

    var option = {
        // color: ['#ac9857','#ffa24c','#368e94','#2874ff'],
        color: ['#ac9857','#ffa24c','#368e94'],
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
            right:'7%',
            top:'15%',
            bottom:'10%',
            containLabel: true
        },
        tooltip: {
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
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + '%';
                }
                return res;

            }
        },
        xAxis: {
            type: 'category',
            nameGap:5,
            nameTextStyle:{
                align:'center',
                color:'#fff',
            },
            boundaryGap: true,
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                color: '#fff',
                fontSize: 10
            },
            data: data[2]
        },
        yAxis: {
            splitNumber:4,
            name:'起',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,25],
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
                fontSize: 10,
                formatter: data[1][0]
            },
            splitLine: {
                show: false
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
    setH(chartId);
}






function chart1(data){

    var chartId = "chart1";

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
                    },
                    // rotate: 15
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
                    padding:[0,0,0,25],
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
                "type": "line",
                "data": data[3],
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
                "name": data[0][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[4],
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
                    padding:[0,0,0,25],
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
                "type": "line",
                "data": data[3],
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
                "name": data[0][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[4],
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
                    padding:[0,0,0,25],
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
                "type": "line",
                "data": data[3],
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
                "name": data[0][1],
                "type": "bar",
                barWidth: "50%",
                "yAxisIndex": 1,
                "data": data[4],
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
                    padding:[0,0,0,25],
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
                "type": "line",
                "data": data[3],
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
                "name": data[0][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[4],
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
                    padding:[0,0,0,25],
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
                "type": "line",
                "data": data[3],
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
                "name": data[0][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[4],
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


function chart6(data){

    var chartId = "chart6";

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
                    padding:[0,0,0,25],
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
                "type": "line",
                "data": data[3],
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
                "name": data[0][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[4],
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


function chart7(data){

    var chartId = "chart7";

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
                    padding:[0,0,0,25],
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
                "type": "line",
                "data": data[3],
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
                "name": data[0][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[4],
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


function chart8(data){

    var chartId = "chart8";

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
                    padding:[0,0,0,25],
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
                "type": "line",
                "data": data[3],
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
                "name": data[0][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[4],
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
