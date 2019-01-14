$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/elec/security/main.json' + __time, main);
    getdata('/energy/elec/security/main.json' + __time, main_1);
    getdata('/energy/elec/security/chart1.json' + __time, chart1);
    getdata('/energy/elec/security/chart2.json' + __time, chart2);
    getdata('/energy/elec/security/chart3.json' + __time, chart3);
    getdata('/energy/elec/security/chart4.json' + __time, chart4);
    getdata('/energy/elec/security/chart5.json' + __time, chart5);
    getdata('/energy/elec/security/chart6.json' + __time, chart6);
    getdata('/energy/elec/security/chart7.json' + __time, chart7);
    getdata('/energy/elec/security/chart8.json' + __time, chart8);
});

//判断是否为整数
function pdInteger(value){
    return value % 1 === 0;
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


function main(data){

    var dataArray = [];
    for(var i=0; i<data[0][2].length; i++){
        dataArray.push({"name": data[0][2][i], "value": data[0][3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
    });
    for(var i=0; i<dataArray.length; i++){
        data[0][2][i] = dataArray[i].name;
        data[0][3][i] = dataArray[i].value;
    }

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
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + "%";
                }
                return res;

            }
        },
        legend: {
            show:true,
            bottom : "10%",
            itemWidth: 16,
            itemHeight: 10,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            data:data[0][0]
        },
        grid:{
            top:'2%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            position: 'top',
            boundaryGap: [0, 0.01],
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
            }
        },
        yAxis: {
            type: 'category',
            data: data[0][2],
            axisLine: {
                lineStyle: {
                    color: '#4094ff'
                }
            }
        },
        series: [
            {
                name: data[0][0],
                type: 'bar',
                "barWidth": "40%",
                data: data[0][3],
                "color": "#4094ff"
            }
        ]
    };

    var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}


function main_1(data){
    var dataArray = [];
    for(var i=0; i<data[1][2].length; i++){
        dataArray.push({"name": data[1][2][i], "value": data[1][3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
    });
    for(var i=0; i<dataArray.length; i++){
        data[1][2][i] = dataArray[i].name;
        data[1][3][i] = dataArray[i].value;
    }

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
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + "%";
                }
                return res;

            }
        },
        legend: {
            show:true,
            bottom : "10%",
            itemWidth: 16,
            itemHeight: 10,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            data:data[1][0]
        },
        grid:{
            top:'2%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            position: 'top',
            boundaryGap: [0, 0.01],
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
            }
        },
        yAxis: {
            type: 'category',
            data: data[1][2],
            axisLine: {
                lineStyle: {
                    color: '#4094ff'
                }
            }
        },
        series: [
            {
                name: data[1][0],
                type: 'bar',
                "barWidth": "40%",
                data: data[1][3],
                "color": "#3ae276"
            }
        ]
    };

    var myChart = echarts.init($('#main_1')[0]);
    myChart.setOption(option);
}



function chart1(data){

    var chartId = "chart1";

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[2].length; i++){
        dataArray.push({"name": data[2][i], "value": data[3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
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
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
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
                    },
                    formatter: function(value){
                        if(pdInteger(value)){
                            return value;
                        }else{
                            return "";
                        }
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
                "name": data[0][0],
                "type": "bar",
                "data": data[3],
                barWidth: "30%",
                "yAxisIndex": 0,
                itemStyle: {
                    normal: {
                        color: '#4df3f3'
                    }
                }
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}


function chart2(data){

    var chartId = "chart2";

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[2].length; i++){
        dataArray.push({"name": data[2][i], "value": data[3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
    });
    for(var i=0; i<dataArray.length; i++){
        data[2][i] = dataArray[i].name;
        data[3][i] = dataArray[i].value;
    }

    option = {
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
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
                    },
                    formatter: function(value){
                        if(pdInteger(value)){
                            return value;
                        }else{
                            return "";
                        }
                    }
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
            }
        ],
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            }
        },
        series: [
            {
                name: data[0][0],
                symbolSize: function (data) {
                    return 10;
                },
                type: 'scatter',
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#4df3f3'
                }, {
                    offset: 1,
                    color: '#4df3f3'
                }]),
                "yAxisIndex": 0,
                data:data[3]
            }
        ]
    };

    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}

function chart3(data){

    var chartId = "chart3";

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[2].length; i++){
        dataArray.push({"name": data[2][i], "value": data[3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
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
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
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
                    },
                    formatter: function(value){
                        if(pdInteger(value)){
                            return value;
                        }else{
                            return "";
                        }
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
                "name": data[0][0],
                "type": "bar",
                "data": data[3],
                "barWidth": "30%",
                "yAxisIndex": 0,
                itemStyle: {
                    normal: {
                        color: '#4df3f3'
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

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[2].length; i++){
        dataArray.push({"name": data[2][i], "value": data[3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
    });
    for(var i=0; i<dataArray.length; i++){
        data[2][i] = dataArray[i].name;
        data[3][i] = dataArray[i].value;
    }

    option = {
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
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
                    },
                    formatter: function(value){
                        if(pdInteger(value)){
                            return value;
                        }else{
                            return "";
                        }
                    }
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
            }
        ],
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            }
        },
        series: [
            {
                name: data[0][0],
                symbolSize: function (data) {
                    return 10;
                },
                type: 'scatter',
                color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
                    offset: 0,
                    color: '#4df3f3'
                }, {
                    offset: 1,
                    color: '#4df3f3'
                }]),
                "yAxisIndex": 0,
                data:data[3]
            }
        ]
    };

    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}



function chart5(data){

    var chartId = "chart5";

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[2].length; i++){
        dataArray.push({"name": data[2][i], "value": data[3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
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
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
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
                    },
                    formatter: function(value){
                        if(pdInteger(value)){
                            return value;
                        }else{
                            return "";
                        }
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
                "name": data[0][0],
                "type": "bar",
                "data": data[3],
                "barWidth": "30%",
                "yAxisIndex": 0,
                itemStyle: {
                    normal: {
                        color: '#4df3f3'
                    }
                }
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}


function chart6(data){

    var chartId = "chart6";

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[2].length; i++){
        dataArray.push({"name": data[2][i], "value": data[3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
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
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
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
                    },
                    formatter: function(value){
                        if(pdInteger(value)){
                            return value;
                        }else{
                            return "";
                        }
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
                "name": data[0][0],
                "type": "bar",
                "data": data[3],
                "barWidth": "30%",
                "yAxisIndex": 0,
                itemStyle: {
                    normal: {
                        color: '#4df3f3'
                    }
                }
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}


function chart7(data){

    var chartId = "chart7";

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[2].length; i++){
        dataArray.push({"name": data[2][i], "value": data[3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
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
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
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
                    },
                    formatter: function(value){
                        if(pdInteger(value)){
                            return value;
                        }else{
                            return "";
                        }
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
                "name": data[0][0],
                "type": "bar",
                "data": data[3],
                "barWidth": "30%",
                "yAxisIndex": 0,
                itemStyle: {
                    normal: {
                        color: '#4df3f3'
                    }
                }
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}


function chart8(data){

    var chartId = "chart8";

    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[2].length; i++){
        dataArray.push({"name": data[2][i], "value": data[3][i]})
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
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
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'10%',
            containLabel: true
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
                    },
                    formatter: function(value){
                        if(pdInteger(value)){
                            return value;
                        }else{
                            return "";
                        }
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
                "name": data[0][0],
                "type": "bar",
                "data": data[3],
                "barWidth": "30%",
                "yAxisIndex": 0,
                itemStyle: {
                    normal: {
                        color: '#4df3f3'
                    }
                }
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
    setH(chartId);
}
