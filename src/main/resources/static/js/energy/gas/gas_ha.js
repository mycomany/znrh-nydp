$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/gas/ha/main.json' + __time,main);
    changeMap('nh');//chart1
    getdata('/energy/gas/ha/chart2.json' + __time,chart2);
    getdata('/energy/gas/ha/chart3.json' + __time,chart3);
    getdata('/energy/gas/ha/chart4.json' + __time,chart4);
    getdata('/energy/gas/ha/chart5.json' + __time,chart5);
    getdata('/energy/gas/ha/chart6.json' + __time,chart6);
    getdata('/energy/gas/ha/chart7.json' + __time,chart7);
});

function changemain(){

}

function change2(){

}

function change5(){

}

function change6(){

}

function dwz(data, name){
    for(var i=0; i<data[3].length; i++){
        if(data[3][i] == name){
            return data[0][i];
        }
    }
    return "";
}

function main(data){

    var nf = selectNfMain;

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
                "barWidth":30,
                "color":"#25e4a3",
                "data":data[4][nf]["th"]
            },
            {
                "name":"实际值",
                "type":"bar",
                "barWidth":30,
                "color":"#2b88ff",
                "data":data[4][nf]["sj"]
            }
        ]
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
        getdata('/energy/gas/ha/chart1.json' + __time,chart1_nh);
    }else if("dh" == param){
        getdata('/energy/gas/ha/chart1.json' + __time,chart1_dh);
    }
}

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
                data: data[0][5]["nh"][0]
            },
            {
                name: data[0][2][1],
                color:data[0][3][1],
                type: 'line',
                smooth: true,
                showSymbol: false,
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
                data: data[1][5]["dh"][0]
            },
            {
                name: data[1][2][1],
                color:data[1][3][1],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[1][5]["dh"][1]
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


function chart2(data){

    //排序，名称data[1]，数据data[3]
    var dataArray = [];
    for(var i=0; i<data[1].length; i++){
        dataArray.push({"name": data[1][i], "value": data[3][i]});
    }
    dataArray.sort(function(a,b){
        return b.value - a.value
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
                min: 'dataMin', // 最小值
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
                },
                /*
                "splitLine": {
                  "lineStyle": {
                    "color": "#7d838b"
                  }
                }
                */
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
                        color: '#25e4a3'
                    }
                },
                data: data[3]
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

    var seriesItems = [];

    for(var i=0; i<data[2].length; i++){
        seriesItems.push(
            {
                name: data[2][i],
                type: 'bar',
                barWidth: "8%",
                itemStyle:{
                    normal:{
                        color: data[4][i]
                    }
                },
                data: data[3][i]
            }
        );
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
            show:true,
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
        series: seriesItems
    };
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}



function chart6(data){

    var seriesItems = [];

    seriesItems.push({
        name: data[2][0],
        type: 'bar',
        barWidth: "15%",
        "yAxisIndex": 0,
        itemStyle:{
            normal:{
                color: data[4][0]
            }
        },
        data: data[3][0]
    });

    seriesItems.push({
        name: data[2][1],
        type: 'bar',
        barWidth: "15%",
        "yAxisIndex": 0,
        itemStyle:{
            normal:{
                color: data[4][1]
            }
        },
        data: data[3][1]
    });

    seriesItems.push({
        name: data[2][2],
        type: 'bar',
        barWidth: "15%",
        "yAxisIndex": 1,
        itemStyle:{
            normal:{
                color: data[4][2]
            }
        },
        data: data[3][2]
    });

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
                    if(params[i].seriesName == data[2][0] || params[i].seriesName == data[2][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                    }else if(params[i].seriesName == data[2][2]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1];
                    }
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
                    // formatter: "{value}%"
                },
                //去掉辅助线
                "splitLine": {
                    "show": false
                }
            },
            {
                type: 'value',
                // name:data[0][1],
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
            }
        ],
        legend:{
            show:true,
            bottom : 10,
            itemWidth: 16,
            itemHeight: 6,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: data[2]
        },
        series: seriesItems
    };
    var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
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