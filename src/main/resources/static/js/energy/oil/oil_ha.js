$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/oil/ha/chart1.json' + __time,chart1);
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
            name: data[0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,55],
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
                padding:[0,0,0,55],
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
                padding:[0,0,0,55],
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
                padding:[0,0,0,15],
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
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}


function chart4(data){
    var option = {
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend:{
            show:true,
            x: 'left',
            orient: 'vertical',
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
                name:'产能占比',
                type:'pie',
                radius: ['35%', '55%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '10',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:data[2]
            }
        ]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}


function chart5(data){
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
                padding:[0,0,0,55],
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
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}


