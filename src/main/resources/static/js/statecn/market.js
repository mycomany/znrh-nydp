$(document).ready(function(){
    main();
    getdata('/statecn/market/chart1.json',chart1);
    getdata('/statecn/market/chart2.json',chart2);
    getdata('/statecn/market/chart3.json',chart3);
    getdata('/statecn/market/chart4.json',chart4);
});

function main(){
    getdata('/statecn/market/main.json', function(data){
        var province = data.province, db = data.pie;
        var typeIndex = 1;
        var option = null;
        var pieData = [];
        var geoCoordMap = { //为了保证饼图不互相重叠，我对经纬坐标进行了调整
            '上海':  [121.472644,  31.231706],
            '云南':  [102.712251,  24.040609],
            '内蒙古':  [111.670801,  40.818311],
            '北京':  [116.405285,  39.904989],
            // '台湾': [121.509062, 25.044332],
            '吉林':  [125.3245,  43.886841],
            '四川':  [103.065735,  30.659462],
            '天津':  [119.190182,  39.125596],
            '宁夏':  [106.278179,  38.46637],
            '安徽':  [117.283042,  31.86119],
            '山东':  [118.000923,  36.675807],
            '山西':  [112.049248,  37.057014],
            '广东':  [113.280637,  23.125178],
            '广西':  [108.320004,  22.82402],
            '新疆':  [87.617733,  43.792818],
            '江苏':  [119.467413,  33.741544],
            '江西':  [115.892151,  28.676493],
            '河北':  [114.802461,  37.745474],
            '河南':  [113.665412,  33.757975],
            '浙江':  [120.153576,  29.287459],
            '海南':  [110.33119,  20.031971],
            '湖北':  [113.298572,  30.984355],
            '湖南':  [112.12279,  28.19409],
            // '澳门': [113.54909, 22.198951],
            '甘肃':  [103.823557,  36.058039],
            '福建':  [119.306239,  26.075302],
            '西藏':  [91.132212,  29.660361],
            '贵州':  [106.713478,  26.578343],
            '辽宁':  [123.029096,  41.396767],
            '重庆':  [106.504962,  29.933155],
            '陕西':  [108.948024,  34.263161],
            '青海':  [100.578916,  36.623178],
            // '香港': [114.173355, 22.320048],
            '黑龙江':  [126.642464,  46.756967],
        };
        
        var s = ["山东","辽宁","广东","江苏","浙江","上海","新疆","河北","福建","黑龙江","重庆"];
        var xData = ["原油","汽油","柴油"];
        for (var i = 0; i < province.length; i++) {
        	if ($.inArray(province[i], s)!= -1) {
        		pieData.push({
                    "name": province[i],
                    "value": [{
                        "name": "原油",
                        value: db[i][0],
                        itemStyle:{
                            color:'#ffd700'
                        }
                    }, {
                            "name": "汽油",
                            value: db[i][1],
                            itemStyle:{
                                color:'#61ffff'
                            }
                        },
                        {
                            "name": "柴油",
                            value: db[i][2],
                            itemStyle:{
                                color:'#2e8b57'
                            }
                        }
                    ]
                })
			}
        }
        function convertMapDta(type, data) {
            var mapData = [];
            for (var i = 0; i < data.length; i++) {
                mapData.push({
                    'name': province[i],
                    "value": data[i][3]
                })
            }
            return mapData;
        }
        function addPie(chart, data) {
            var sd = option.series;
            for (var i = 0; i < data.length; i++) {
                var val0 = data[i].value[0].value, val1 = data[i].value[1].value;
                var radius = val0 > 800 ? 15 : 10;
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord && (val0>0 || val1 > 0)) {
                    var vr = [];
                    (data[i].value).map(function(v) {
                        vr.push({
                            name: v.name,
                            value: v.value,
                            itemStyle: v.itemStyle,
                            visualMap: false
                        });
                    });
                    var p = chart.convertToPixel({
                        seriesIndex: 0
                    }, geoCoord);
                    sd.push({
                        name: data[i].name,
                        type: 'pie',
                        tooltip: {
                            formatter: function(params) {
                                return params.seriesName + "<br/>" + params.name + " : " + params.value + ' 万吨';
                            }
                        },
                        radius: radius,
                        center: p,
                        data: vr,
                        zlevel: 4,
                        tooltip: {
                            formatter: '{a}<br/>{b}: {c}（万吨 ）<br/>占比：{d}%'
                        },
                        label: {
                            normal: {
                                show: false,
                            },
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        itemStyle: {
                            opacity: 1
                        }
                    });
                }
            }
            return sd;
        };
        function addBar(chart, data) {
            var sd = option.series;
            var prodb = data.province, bardb = data.pie, max = 10;
            for (var i = 0; i < prodb.length; i++) {
                var val0 = bardb[i][0], val1 = bardb[i][1], name = prodb[i];
                var geoCoord = geoCoordMap[name];
                if(s.indexOf(name)==-1){
                    continue;
                }
                if (geoCoord && (val0>0 || val1 > 0)) {
                    var coord = chart.convertToPixel('geo', geoCoord);
                    var idx = i + '';
                    var val = [
                        {value:bardb[i][0], itemStyle:{color:'#ffd700'},visualMap: false},
                        {value:bardb[i][1], itemStyle:{color:'#61ffff'},visualMap: false},
                        {value:bardb[i][2], itemStyle:{color:'#2e8b57'},visualMap: false}
                    ];
                    option.xAxis.push({
                        id: idx,
                        gridId: idx,
                        type: 'category',
                        name: name,
                        show:true,
                        nameStyle: {
                            color: '#fff',
                            fontSize: 10
                        },
                        nameLocation: 'middle',
                        nameGap: 3,
                        splitLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {show: false},
                        axisLine: {
                            onZero: false,
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        data: xData,
                        z: 9
                    });
                    option.yAxis.push({
                        id: idx,
                        gridId: idx,
                        show:false,
                        splitLine: {show: false},
                        axisTick: {show: false},
                        axisLabel: {show: false},
                        axisLine: {
                            lineStyle: {
                                color: '#fff'
                            }
                        },
                        z: 9
                    });
                    option.grid.push({
                        id: idx,
                        width: 30,
                        height: 30,
                        left: coord[0] - 15,
                        top: coord[1] - 15,
                        z: 9
                    });
                    option.series.push({
                        id: idx,
                        name:prodb[i],
                        type: 'bar',
                        xAxisId: idx,
                        yAxisId: idx,
                        barGap: 0,
                        tooltip: {
                            formatter: function(params) {
                                var str = params.seriesName + "<br/>";
                                for(var i = 0; i < prodb.length; i++){
                                    if(prodb[i] == params.seriesName){
                                        str += xData[0] + "：" + bardb[i][0] + ' 万吨<br />';
                                        str += xData[1] + "：" + bardb[i][1] + ' 万吨<br />';
                                        str += xData[2] + "：" + bardb[i][2] + ' 万吨<br />';
                                    }
                                }
                                return str;
                            }
                        },
                        data: val,
                        z: 9
                    });
                }
            }
            return sd;
        }

        /* 指定图表的配置项和数据:pie*/
        option = {
            xAxis: [], yAxis: [], grid: [],
            geo: {
                map: 'china',
                label: {
                    normal: {
                        show: false
                    },
                    emphasis: {
                        show: false,
                    }
                },
                roam: false,
                itemStyle: {
                    normal: {
                        areaColor: '#031525',
                        borderColor: '#3B5077',
                    },
                    emphasis: {
                        areaColor: '#2B91B7',
                    }
                }
            },
            title:[{
                text:'石油消费分布   (2016)',
                subtext:'单位：万吨',
                top:'3%',
                left:'center',
                textStyle: {
                    color: '#59EBE8',
                    fontSize:16,
                },
                subtextStyle: {
                    color: '#fff',
                    fontSize:10,
                }
            }],
            legend: {
                show:true,
                data: ["原油","汽油","柴油"],
                itemWidth: 16, //图例宽度
                itemHeight: 8, //图例高度
                bottom:'2%',
                textStyle:{
                    color:'#fff'
                },
                z: 9
            },
            tooltip: {
                trigger: 'item',
                formatter: function(params) {
                    if (params.value) {
                        return params.name + "<br/>" + "总消费量: " + params.value + "万吨";
                    }
                }
            },
            visualMap: {
                type: 'continuous',
                show: true,
                min: 0,
                max: 10000,
                itemHeight:100,
                itemWidth:15,
                left: 'left',
                top: 'bottom',
                text: ['高    (万吨)', '低    (万吨)'], // 文本，默认为数值文本
                calculable: true,
                // seriesIndex: [0],
                inRange: {
                    color: ["#aeb2f7","#3c68f3","#061ae1" ]
                },
                textStyle:{
                    color:'#fff'
                },
            },
            series: [{
                name: 'total',
                type: 'map',
                mapType: 'china',
                roam: false,
                showLegendSymbol:false,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: false
                    }
                },
                data: convertMapDta(province[typeIndex], db),
                z: 3
            }]
        };
        var myChart = echarts.init($('#main')[0]);
        if (option && typeof option === "object") {
            myChart.setOption(option, true);
        }
        /*pie*/
        setTimeout(function(){addBar(myChart, data);myChart.setOption(option);}, 10);
        //addPie(myChart, pieData);
        //myChart.setOption(option);
    });
}

function chart1(data){
    var option = {
    		tooltip: {
			      trigger: "axis"
			    }, 
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
            bottom:'2%',
            data: data[0],
            textStyle: {
                color: '#fff',
                fontSize: 10,
            }
        },
        xAxis: {
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 10
                },
            },
            splitLine: {
                show: false
            },
            type: 'category',
            data:data[1]
        },
        yAxis: [{
        	name:'           百万吨油当量',
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
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 10
                },
            },
            splitLine:{
                show:false
            },
            type: 'value'
        },{
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#fff',
                    fontWeight: 'normal',
                    fontSize: 10
                },
                formatter:function(v){
                    return v + '%';
                }
            },
            splitLine:{
                show:false
            },
            type: 'value'
        }],
        series: [
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
                data: data[2]
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
                data: data[3]
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
    var option = {
    	tooltip: {
		   trigger: "axis"
		 }, 
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
	        bottom:'2%',
	        type:'scroll',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    }, 
        xAxis: {
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
	        axisLabel: {
	            inside: false,
	            textStyle: {
	                color: '#fff',
	                fontWeight: 'normal',
	                fontSize: 10
	            },
	        },
            splitLine: {
                show: false
            },
            type: 'category',
            data:data[1]
        },
        yAxis: [{
        	name:' 元/升',
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
	            inside: false,
	            textStyle: {
	                color: '#fff',
	                fontWeight: 'normal',
	                fontSize: 10
	            },
	        },
            splitLine:{
                show:false
            },
            type: 'value'
        },{
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
	        axisLabel: {
	            inside: false,
	            textStyle: {
	                color: '#fff',
	                fontWeight: 'normal',
	                fontSize: 10
	            },
	            formatter:function(v){
                    return v + '%';
                }
	        },
            splitLine:{
                show:false
            },
            type: 'value'
        }],
        series: [
            {
                name:data[0][0],
                type: 'bar',
                yAxisIndex:0,
                barWidth: "30%",
                itemStyle: {
                    normal: {
                        color: '#61ffff'
                    },
                },
                zlevel:1,
                data: data[2]
            },
            {
                name:data[0][2],
                type: 'bar',
                barWidth: "30%",
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: '#2874ff'
                    },
                },
                zlevel:1,
                data: data[4]
            },
            {
                name:data[0][1],
                yAxisIndex:1,
                type:'line',
                areaStyle:{
                    normal:{
                        color:'#ffa24c'
                    }
                },
                data: data[3]
            },
            {
                name:data[0][3],
                yAxisIndex:1,
                type:'line',
                itemStyle:{
                    normal:{
                        color:'#ff9b00'
                    }
                },
                data: data[5]
            }
        ]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
    var seriesData = [];
    for(var i = 2; i < data.length; i++){
        var o = {
            name:data[0][i-2],
            type:'line',
            areaStyle:{},
            data:data[i]
        };
        seriesData.push(o);
    }
    var option = {
    	tooltip: {
			trigger: "axis"
		}, 
        color:['#61ffff','#2874ff','#ffa24c'],
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
	        bottom:'2%',
	        type:'scroll',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    }, 
        xAxis: {
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
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
            data:data[1]
        },
        yAxis: {
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
	        axisLabel: {
	        	formatter:'{value}%',
	            inside: false,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10
	            }
	        },
	        splitLine: {
                show: false
            },
        },
        series: seriesData
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
    var option = {
    		tooltip: {
    			trigger: "axis"
    		}, 
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
	        bottom:'2%',
	        data: data[0],
	        textStyle: {
	            color: '#fff',
	            fontSize: 10,
	        }
	    }, 
        xAxis: {
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
	        axisLabel: {
	            inside: false,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10
	            }
	        },
            splitLine: {
                show: false
            },
            type: 'category',
            data:data[1]
        },
        yAxis: [{
        	name:'百万吨',
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
	            inside: false,
	            textStyle: {
	                color: '#fff',
	                fontSize: 10
	            }
	        },
            splitLine:{
                show:false
            },
            type: 'value'
        },{
        	axisLine: {
	            lineStyle: {
	                color: '#38b8ff'
	            }
	        },
	        axisLabel: {
	            inside: false,
	            formatter: '{value}%',
	            textStyle: {
	                color: '#fff',
	                fontSize: 10
	            }
	        },
            splitLine:{
                show:false
            },
            type: 'value'
        }],
        series: [
            {
                name:data[0][0],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: '#61ffff'
                    },
                },
                data: data[2]
            },
            {
                name:data[0][1],
                type: 'bar',
                yAxisIndex:0,
                itemStyle: {
                    normal: {
                        color: '#2874ff'
                    },
                },
                data: data[3]
            },
            {
                name:data[0][2],
                yAxisIndex:1,
                type:'line',
                itemStyle:{
                    normal:{
                        color:'#ff0'
                    }
                },
                data: data[4]
            }
        ]
    };
    var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function cv3d(d){
    return d.map(function(v,i){
        return [i, 0, v];
    });
}