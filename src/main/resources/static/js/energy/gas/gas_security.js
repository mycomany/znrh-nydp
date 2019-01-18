$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/gas/security/main.json' + __time, main);
    getdata('/energy/gas/security/chart1.json' + __time, chart1);
    getdata('/energy/gas/security/chart2.json' + __time, chart2);
    getdata('/energy/gas/security/chart3.json' + __time, chart3);
    getdata('/energy/gas/security/chart4.json' + __time, chart4);
    getdata('/energy/gas/security/chart5.json' + __time, chart5);
    getdata('/energy/gas/security/chart6.json' + __time, chart6);
    getdata('/energy/gas/security/chart7.json' + __time, chart7);
    getdata('/energy/gas/security/chart8.json' + __time, chart8);
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
    var myRate1 = 1000;
    option = {
        title: [{
            text:'天然气安全仪表盘  (2018)',
            top:'3%',
            left:'2%',
            textStyle: {
                color: '#29B8FF',
                fontSize:16,
            }
        },{
            x: "20.5%",
            bottom: '22%',
            text: '天然气对外依赖度 (%)',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 14,
                color: "#fff"
            },
        }, {
            x: "60%",
            bottom: '22%',
            text: '储量接替率 (%)',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 14,
                color: "#fff"
            },
        },{
            x: "3.5%",
            bottom: '16%',
            text: 'PNG进口集中度 (%)',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 14,
                color: "#fff"
            },
        },{
            x: "80%",
            bottom: '16%',
            text: 'LNG进口集中度 (%)',
            textStyle: {
                fontWeight: 'normal',
                fontSize: 14,
                color: "#fff"
            },
        }],
        legend: {
            show:true,
            bottom : '2%',
            //left:'5%',
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: ['安全','基本安全','预警'],
        },
        tooltip: {
            show: true,
            formatter:'{a}: {c} %',

        },
        series: [{
            type: 'gauge',
            center: ['32%', '50%'], // 默认全局居中
            radius: '50%',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
            startAngle: 220,
            endAngle: -40,
            clockwise: true,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#03B7C9']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#03B7C9',
                    width: 1
                },
                length: -5,
                splitNumber: 10
            },
            splitLine: {
                show: true,
                length: -8,
                lineStyle: {
                    color: '#03B7C9',
                }
            },
            axisLabel: {
                distance: -20,
                textStyle: {
                    color: "#03B7C9",
                    fontSize: "10",
                    fontWeight: "bold"
                }
            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate1
            }]
        }, {
            startAngle: 220,
            endAngle: -40,
            type: 'gauge',
            center: ['32%', '50%'], // 默认全局居中
            radius: '45%',
            min: 0,
            max: 100,
            splitNumber: 0,
            axisLine: { // 坐标轴线
                lineStyle: {
                    color: [
                        [0.66, '#dddddd'],
                        [1, '#dddddd']
                    ], // 属性lineStyle控制线条样式
                    width: 4
                }
            },


            axisLabel: { // 坐标轴小标记
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: 'rgba(30,144,255,0)',
                }
            },
            splitLine: { // 分隔线
                length: 10, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 0,
                    color: '#444'
                }
            },
            pointer: { // 分隔线 指针
                color: '#666666',
                width: 0,
                length: 230
            },
            detail: {
                show: false
            },

        }, {
            name: '天然气对外依赖度',
            type: 'gauge',
            startAngle: 220,
            endAngle: -40,
            radius: '40%',
            center: ['32%', '50%'], // 默认全局居中
            min: 0,
            max: 100,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 5,
                    shadowBlur: 0,
                    color: [
                        [0.3, '#6ced91'],
                        [0.5, '#F4923F'],
                        [1, '#fe6b7d']
                    ]
                }
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
                length: 20,

            },

            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
            },
            detail: {
                show: true,
                offsetCenter: [0, '40%'],
                formatter:'{value}',
                textStyle: {
                    fontSize: 20
                }
            },
            itemStyle: {
                normal: {
                    color: "#03B7C9",

                }
            },
            data: [{
                value: 38.85
            }]
        },{
            type: 'gauge',
            center: ['68%', '50%'], // 默认全局居中
            radius: '50%',
            splitNumber: 10, //刻度数量
            min: 200,
            max: 0,
            startAngle: 220,
            endAngle: -40,
            clockwise: true,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#03B7C9']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#03B7C9',
                    width: 1
                },
                length: -5,
                splitNumber: 10
            },
            splitLine: {
                show: true,
                length: -8,
                lineStyle: {
                    color: '#03B7C9',
                }
            },
            axisLabel: {
                distance: -20,
                textStyle: {
                    color: "#03B7C9",
                    fontSize: "10",
                    fontWeight: "bold"
                }
            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate1
            }]
        }, {
            startAngle: 220,
            endAngle: -40,
            type: 'gauge',
            center: ['68%', '50%'], // 默认全局居中
            radius: '45%',
            min: 200,
            max: 0,
            splitNumber: 0,
            axisLine: { // 坐标轴线
                lineStyle: {
                    color: [
                        [0.66, '#dddddd'],
                        [1, '#dddddd']
                    ], // 属性lineStyle控制线条样式
                    width: 4
                }
            },


            axisLabel: { // 坐标轴小标记
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: 'rgba(30,144,255,0)',
                }
            },
            splitLine: { // 分隔线
                length: 10, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 0,
                    color: '#444'
                }
            },
            pointer: { // 分隔线 指针
                color: '#666666',
                width: 0,
                length: 230
            },
            detail: {
                show: false
            },

        }, {
            name: '储量接替率',
            type: 'gauge',
            startAngle: 220,
            endAngle: -40,
            radius: '40%',
            center: ['68%', '50%'], // 默认全局居中
            min: 200,
            max: 0,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 5,
                    shadowBlur: 0,
                    color: [
                        [0.475, '#6CED91'],
                        [0.525, '#f4923f'],
                        [1, '#FE6B7D']
                    ]
                }
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
                length: 20,

            },

            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
            },
            detail: {
                show: true,
                offsetCenter: [0, '40'],
                formatter:'{value}',
                textStyle: {
                    fontSize: 20
                }
            },
            itemStyle: {
                normal: {
                    color: "#03B7C9",

                }
            },
            data: [{
                value: 118.21
            }]
        },{
            type: 'gauge',
            center: ['12%', '55%'], // 默认全局居中
            radius: '29%',
            splitNumber: 10, //刻度数量
            min: 0,
            max: 100,
            startAngle: 280,
            endAngle: 80,
            clockwise: true,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#03B7C9']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#03B7C9',
                    width: 1
                },
                length: -4,
                splitNumber: 10
            },
            splitLine: {
                show: true,
                length: -6,
                lineStyle: {
                    color: '#03B7C9',
                }
            },
            axisLabel: {
                distance: -20,
                textStyle: {
                    color: "#03B7C9",
                    fontSize: "10",
                    fontWeight: "bold"
                }
            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate1
            }]
        }, {
            type: 'gauge',
            center: ['12%', '55%'], // 默认全局居中
            radius: '26%',
            min: 0,
            max: 100,
            startAngle: 280,
            endAngle: 80,
            splitNumber: 0,
            axisLine: { // 坐标轴线
                lineStyle: {
                    color: [
                        [0.66, '#dddddd'],
                        [1, '#dddddd']
                    ], // 属性lineStyle控制线条样式
                    width: 4
                }
            },


            axisLabel: { // 坐标轴小标记
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: 'rgba(30,144,255,0)',
                }
            },
            splitLine: { // 分隔线
                length: 10, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 0,
                    color: '#444'
                }
            },
            pointer: { // 分隔线 指针
                color: '#666666',
                width: 0,
                length: 230
            },
            detail: {
                show: false
            },

        }, {
            name: 'PNG进口集中度',
            type: 'gauge',
            startAngle: 280,
            endAngle: 80,
            radius: '23%',
            center: ['12%', '55%'], // 默认全局居中
            min: 0,
            max: 100,
            axisLine: {
                show: false,
                lineStyle: {
                    width: 5,
                    shadowBlur: 0,
                    color: [
                        [0.3, '#6ced91'],
                        [0.5, '#F4923F'],
                        [1, '#fe6b7d']
                    ]
                }
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
                length: 20,

            },

            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
            },
            detail: {
                show: true,
                offsetCenter: ['20%', '40%'],
                formatter:'{value}',
                textStyle: {
                    fontSize: 20
                }
            },
            itemStyle: {
                normal: {
                    color: "#03B7C9",

                }
            },
            data: [{
                value: 80.40
            }]
        }, {
            type: 'gauge',
            center: ['88%', '55%'], // 默认全局居中
            radius: '29%',
            splitNumber: 10, //刻度数量
            min: 100,
            max: 0,
            startAngle: 100,
            endAngle: -100,
            clockwise: true,
            axisLine: {
                show: true,
                lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [
                        [1, '#03B7C9']
                    ]
                }
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#03B7C9',
                    width: 1
                },
                length: -4,
                splitNumber: 10
            },
            splitLine: {
                show: true,
                length: -6,
                lineStyle: {
                    color: '#03B7C9',
                }
            },
            axisLabel: {
                distance: -20,
                textStyle: {
                    color: "#03B7C9",
                    fontSize: "10",
                    fontWeight: "bold"
                }
            },
            pointer: { //仪表盘指针
                show: 0
            },
            detail: {
                show: false
            },
            data: [{
                name: "",
                value: myRate1
            }]
        }, {
            type: 'gauge',
            center: ['88%', '55%'], // 默认全局居中
            radius: '26%',
            min: 0,
            max: 100,
            startAngle: 100,
            endAngle: -100,
            splitNumber: 0,
            axisLine: { // 坐标轴线
                lineStyle: {
                    color: [
                        [0.66, '#dddddd'],
                        [1, '#dddddd']
                    ], // 属性lineStyle控制线条样式
                    width: 4
                }
            },


            axisLabel: { // 坐标轴小标记
                textStyle: { // 属性lineStyle控制线条样式
                    fontWeight: 'bolder',
                    fontSize: 16,
                    color: 'rgba(30,144,255,0)',
                }
            },
            splitLine: { // 分隔线
                length: 10, // 属性length控制线长
                lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                    width: 0,
                    color: '#444'
                }
            },
            pointer: { // 分隔线 指针
                color: '#666666',
                width: 0,
                length: 230
            },
            detail: {
                show: false
            },

        }, {
            name: '"LNG进口集中度',
            type: 'gauge',
            startAngle: 100,
            endAngle: -100,
            radius: '23%',
            center: ['88%', '55%'], // 默认全局居中

            min: 0,
            max: 100,

            axisLine: {
                show: false,
                lineStyle: {
                    width: 5,
                    shadowBlur: 0,
                    color: [
                        [0.5, '#fe6b7d'],
                        [0.7, '#F4923F'],
                        [1, '#6ced91']
                    ]
                }
            },
            axisTick: {
                show: false,

            },
            splitLine: {
                show: false,
                length: 20,

            },

            axisLabel: {
                show: false
            },
            pointer: {
                show: true,
            },
            detail: {
                show: true,
                offsetCenter: [0, '40%'],
                formatter:'{value}',
                textStyle: {
                    fontSize: 20
                }
            },
            itemStyle: {
                normal: {
                    color: "#03B7C9",

                }
            },
            data: [{
                value: 45.1
            }]
        },{
            type:'pie',
            radius: 0,
            center: ['-30%', '-50%'],
            color: ["#6ced91","#F4923F", "#fe6b7d"],
            itemStyle:{
                normal: {
                    show:false,
                }
            },
            label: {
                normal: {
                    show:false,
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[{name:"安全",value:1},
                {name:"基本安全",value:1},
                {name:"预警",value:1}
            ]
        }]
    };
    var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}







function chart1(data){
    var xData = data[2];
    var barData = data[3];
    var lineData = data[4];
    option = {
        textStyle: {
            color: '#59ebe8'
        },
        tooltip: {
            trigger: 'axis',
            //formatter: '{a}</br>{b} ：{c} %'
        },
        legend: {
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
            data: ['进口量','对外依赖度'],
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        xAxis: {
            type: "category",
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff ',
                }
            },
            boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                }
            },
            data:xData
        },
        yAxis: [{
            type: 'value',
            name:'   亿立方米',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            min:20,
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
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
            //单位
        },{
            type: 'value',
            //min:20,
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
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
                formatter: '{value}%'
            },
            //单位
        }],
        series: [{
            name: "进口量",
            type: "bar",
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: '#1E90FF',
                    barBorderRadius: 50,
                },
            },
            data: barData,

        },{
            name: "对外依赖度",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#E9DC37'
                },
            },
            data: lineData,

        }]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


function chart2(data){
    var xData = data[2];
    var lineData = data[5];
    var barData1 = data[3];
    var barData2 = data[4];
    var option =  {
        textStyle: {
            color: '#59ebe8'
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }


        },
        legend: {
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
            data: ['新增查明储量','消耗储量','储量接替率'],
        },
        xAxis: [{
            position: "bottom",
            type: "category",
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
                // rotate: 30
            },
            data: xData,
        }],
        yAxis: [{
            type: 'value',
            name:'     亿立方米',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            position: 'left',
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
            //单位
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitLine: {
                show: false
            }
        },{
            type: "value",
            position: 'right',
            min:16,
            axisTick: {
                show: true
            },
            splitLine: {
                show: false
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
                formatter: '{value}%'
            },
            //单位好
        }],
        series: [{
            name: "新增查明储量",
            type: "bar",
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: '#003AC4',
                    barBorderRadius: 50,
                },
            },
            data: barData1,

        },{
            name: "消耗储量",
            type: "bar",
            barWidth: '20%',
            itemStyle: {
                normal: {
                    color: '#15C0FE',
                    barBorderRadius: 50,
                },
            },
            data: barData2,

        }, {
            name: "储量接替率",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#fff'
                },
            },
            data: lineData,

        }]
    }
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var dataShadow = [], yMax = 12000;
    for(var i = 0; i < data[3].length; i++){
        dataShadow.push(yMax);
    }
    var option = {
        tooltip:{},
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
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
            data:data[0]
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
            data:$chart.xtime(data[1])
        },
        yAxis: [{
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
            name:'亿方',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            type: 'value',
            z:10,
        },{
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            splitLine:{
                show:false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter:function(v){
                    return v + '%';
                }
            },
            splitNumber:4,
            type: 'value'
        }],
        series: [
            {
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {color: 'rgba(12,15,34,0.8)'}
                },
                barGap:'-100%',
                barCategoryGap:'40%',
                data: dataShadow,
                animation: false
            },
            {
                name:data[0][0],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#2874ff'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    },
                },
                data: data[3]
            },
            {
                name:data[0][1],
                yAxisIndex:1,
                type:'line',
                itemStyle:{
                    normal:{
                        color:'#8121dd'
                    }
                },
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}




function chart4(data){
    var seriesData = [];
    for(var i = 2; i < data.length; i++){
        var o = {
            name:data[0][i-2],
            type:'line',
            data:data[i]
        };
        seriesData.push(o);
    }
    var option = {
        tooltip: {
            trigger: "axis"
        },
        color:['#e1e1e2','#ffd300','#7b7cff','#463ffe','#386efe','#ff3481'],
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        legend: { //图例组件，颜色和名字
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:'1%',
            data: data[0],
            type:'scroll',
            textStyle: {
                color: '#fff',
                fontSize: 10,
            }
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: '#59ebe8'
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 10
                }
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data:$chart.xtime(data[1])
        },
        yAxis: {
            name:'           美元/MMBtu',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            axisLine: {
                lineStyle: {
                    color: '#59ebe8'
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 10
                }
            },
            axisTick:{
                show:true
            },
            splitLine: {
                show: false
            },
            type: 'value'
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}



function chart5(data){
    var xData = data[2];
    var barData1 = data[3];
    var barData2 = data[4];
    var lineData = data[5];
    var option =  {
        textStyle: {
            color: '#59ebe8'
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:true,
            bottom : '2%',
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            type:'scroll',
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: ['储气库工作气量','消费量','工作气量占消费量比重'],
        },
        xAxis: [{
            position: "bottom",
            type: "category",
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
                rotate: 30
            },
            data: xData,
        }],
        yAxis: [{
            type: 'value',
            name:'     亿立方米',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            // min:36,
            max:9000,
            position: 'left',
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
            //单位
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitLine: {
                show: false
            }
        },{
            type: "value",
            position: 'right',
            max:130,
            axisTick: {
                show: true
            },
            splitLine: {
                show: false
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
                formatter: '{value}%'
            },
            //单位
        }],
        series: [{
            name: "储气库工作气量",
            type: "bar",
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: '#226FFF',
                    barBorderRadius: 50,
                },
            },
            data: barData1,

        },{
            name: "消费量",
            type: "bar",
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: '#7C7DFF',
                    barBorderRadius: 50,
                },
            },
            data: barData2,

        },{
            name: "工作气量占消费量比重",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#15BEFB'
                },
            },
            data: lineData,

        }]
    }
    var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}



function chart6(data){
    var xData = data[2];
    var barData1 = data[3];
    var barData2 = data[4];
    var option =  {
        textStyle: {
            color: '#59ebe8'
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'16%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            show:true,
            bottom : '2%',
            itemGap: 17, //图例每项之间的间隔
            itemWidth: 16, //图例宽度
            itemHeight: 8, //图例高度
            textStyle: {
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: ['产量','消费'],
        },
        xAxis: [{
            position: "bottom",
            type: "category",
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
                //rotate: 30
            },
            data: xData,
        }],
        yAxis: [{
            type: 'value',
            name:'                 十亿立方英尺每天',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            // min:36,
            position: 'left',
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
            //单位
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitLine: {
                show: false
            }
        }],
        series: [{
            name: "产量",
            type: "bar",
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: '#6CED91'
                },
            },
            data: barData1,

        },{
            name: "消费",
            type: "bar",
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: '#1E90FF',
                },
            },
            data: barData2,

        }]
    }
    var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}


function chart7(data){
    var xData = data[2];
    var barData1 = data[3];
    var barData2 = data[4];
    var lineData = data[5];
    var option =  {
        textStyle: {
            color: '#59ebe8'
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'16%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }

        },
        legend: {
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
            data: ['中国','美国','中国与美国比较'],
        },
        xAxis: [{
            position: "bottom",
            type: "category",
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
                rotate: 30
            },
            data: xData,
        }],
        yAxis: [{
            type: 'value',
            name:'立方米',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            //min:36,
            max:2800,
            position: 'left',
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
            //单位
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitLine: {
                show: false
            }
        },{
            type: "value",
            position: 'right',
            axisTick: {
                show: true
            },
            splitLine: {
                show: false
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
                formatter: '{value}%'
            },
            //单位
        }],
        series: [{
            name: "中国",
            type: "bar",
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: '#FFD200',
                    barBorderRadius: 50,
                },
            },
            data: barData1,

        },{
            name: "美国",
            type: "bar",
            barWidth: '30%',
            itemStyle: {
                normal: {
                    color: '#1E90FF',
                    barBorderRadius: 50,
                },
            },
            data: barData2,

        },{
            name: "中国与美国比较",
            type: "line",
            yAxisIndex: 1,
            itemStyle: {
                normal: {
                    color: '#FFD200'
                },
            },
            data: lineData,

        }]
    }
    var myChart = echarts.init($('#chart7')[0]);
    myChart.setOption(option);
}


function chart8(data){
    var xData = data[2];
    var lineData1 = data[3];
    var lineData2 = data[4];
    option = {
        textStyle: {
            color: '#59ebe8'
        },
        tooltip: {
            trigger: 'axis',
            //formatter: '{a}</br>{b} ：{c} %'
        },
        legend: {
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
            data: ['生产增长率','消费增长率'],
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        xAxis: {
            type: "category",
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff ',
                }
            },
            boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                }
            },
            data:xData
        },
        yAxis: [{
            type: 'value',
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: '#fff',
                }
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
                formatter: '{value}%'
            },
            //单位好
        }],
        series: [
            {
                name: '生产增长率',
                type: 'line',
                smooth: true,//值为true折线平滑    值为false折线曲折
                symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
                showSymbol: false,//true 为拐点处有点  false 为没有
                itemStyle: {
                    normal: {
                        color: '#B1AA33'
                    },
                },
                data: lineData1
            },{
                name: '消费增长率',
                type: 'line',
                smooth: true,//值为true折线平滑    值为false折线曲折
                symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
                showSymbol: false,//true 为拐点处有点  false 为没有
                itemStyle: {
                    normal: {
                        color: '#00FFFF'
                    },
                },
                data: lineData2
            }]
    };
    var myChart = echarts.init($('#chart8')[0]);
    myChart.setOption(option);
}