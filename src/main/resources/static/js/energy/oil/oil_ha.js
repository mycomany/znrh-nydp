$(document).ready(function(){
    var __time = "?__time=" + new Date();
    changeMap('nh');//chart1
    getdata('/energy/oil/ha/chart2.json' + __time,chart2);
    getdata('/energy/oil/ha/chart3.json' + __time,chart3);
    getdata('/energy/oil/ha/chart4.json' + __time,chart4);
    getdata('/energy/oil/ha/chart5.json' + __time,chart5);
    getdata('/energy/oil/ha/main.json' + __time,main);
});


function main(data){
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
        legend: {
            show:true,
            bottom : 20,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 12,
            },
            data:data[1]
        },
        grid:{
            top:'5%',
            left:'5%',
            right:'5%',
            bottom:'15%',
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
            name: data[0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,15],
                align:'center',
                color:'#fff',
            },
            type: 'value',
            z:10,
        },
        series:data[4]
    };
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

function chart1_nh(data){
    var option = {
        title: {
            text: '中国石油开采综合能耗对比',
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
            itemWidth: 10,
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
                type: 'bar',
                barWidth: "20%",
                data: data[0][5]["nh"][0]
            },
            {
                name: data[0][2][1],
                color:data[0][3][1],
                type: 'bar',
                barWidth: "20%",
                data: data[0][5]["nh"][1]
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart1_dh(data){
    var option = {
        title: {
            text: '中国石油开采综合能耗对比',
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
            itemWidth: 10,
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
                type: 'bar',
                barWidth: "20%",
                data: data[1][5]["dh"][0]
            },
            {
                name: data[1][2][1],
                color:data[1][3][1],
                type: 'bar',
                barWidth: "20%",
                data: data[1][5]["dh"][1]
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
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}



function chart3(data){
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
                    if(params[i].axisValueLabel == data[3][0] || params[i].axisValueLabel == data[3][1]){//能耗
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                    }else if(params[i].axisValueLabel == data[3][2]){//电耗
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1];
                    }
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
        yAxis: [{
            type: 'value',
            name:data[0][0],
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
                type: 'value',
                name: "%",
                nameGap:-5,
                nameTextStyle:{
                    padding:[0,0,0,-15],
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
                type: 'bar',
                barWidth: "20%",
                "yAxisIndex": 0,
                data: data[4]["ly"]
            },
            {
                name: data[1][1],
                color:data[2][1],
                type: 'bar',
                barWidth: "20%",
                "yAxisIndex": 1,
                data: data[4]["yx"]
            }
        ]
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}


function chart4(data){

    //排序，名称data[1]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[1].length; i++){
        dataArray.push({"name": data[1][i], "value": data[3][i]});
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
    });
    for(var i=0; i<dataArray.length; i++){
        data[1][i] = dataArray[i].name;
        data[3][i] = dataArray[i].value;
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
                    res += '<br/>' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
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
            data: data[1]
        },
        yAxis: [
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
                    formatter: "{value}%"
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
            },
        ],
        legend:{
            show:false,
            bottom : 10,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: data[2]
        },
        series: [
            {
                type: 'bar',
                barWidth: "20%",
                itemStyle:{
                    normal:{
                        color: '#2baffb'
                    }
                },
                data: data[3]
            }
        ]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}


function chart5(data){
    var nf = "2015";

    //排序，名称data[1]，数据data[3][nf]
    var dataArray = [];
    for(var i=0; i<data[1].length; i++){
        dataArray.push({"name": data[1][i], "value": data[3][nf][i]});
    }
    dataArray.sort(function(a,b){
        return a.value - b.value
    });
    for(var i=0; i<dataArray.length; i++){
        data[1][i] = dataArray[i].name;
        data[3][nf][i] = dataArray[i].value;
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
                    res += '<br/>' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
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
            data: data[1]
        },
        yAxis: [
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
                    formatter: "{value}%"
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
            },
        ],
        legend:{
            show:false,
            bottom : 10,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: data[2]
        },
        series: [
            {
                type: 'bar',
                barWidth: "20%",
                itemStyle:{
                    normal:{
                        color: '#4138e1'
                    }
                },
                data: data[3][nf]
            }
        ]
    };
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}


