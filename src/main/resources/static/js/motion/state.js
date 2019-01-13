$(document).ready(function(){
    getdata('/motion/state/main.json',main);
    getdata('/motion/state/chart1.json',chart1);
    getdata('/motion/state/chart2.json',chart2);
    getdata('/motion/state/near10Order.json',chart3);
});

function main(data){
    var c = [{"name":"四川","value":308},
             {"name":"山东","value":108},
             {"name":"江苏","value":94},
             {"name":"新疆","value":71},
             {"name":"河北","value":68},
             {"name":"重庆","value":68},
             {"name":"湖北","value":52},
             {"name":"辽宁","value":39},
             {"name":"宁夏","value":36},
             {"name":"甘肃","value":34},
             {"name":"河南","value":34},
             {"name":"陕西","value":33},
             {"name":"安徽","value":28},
             {"name":"广东","value":26},
             {"name":"青海","value":26},
             {"name":"贵州","value":25},
             {"name":"江西","value":21},
             {"name":"天津","value":21},
             {"name":"内蒙古","value":20},
             {"name":"湖南","value":17},
             {"name":"吉林","value":16},
             {"name":"云南","value":15},
             {"name":"山西","value":13},
             {"name":"广西","value":10},
             {"name":"北京","value":7},
             {"name":"上海","value":5},
             {"name":"浙江","value":3},
             {"name":"福建","value":1},
             {"name":"西藏","value":0},
             {"name":"黑龙江","value":0}];
	var mapData = c;
	var max = 310;
	
	option = {
			title:[{
                text:'会员分布(2018-8)',
                top:'3%',
                left:'center',
                textStyle: {
                    color: '#29B8FF',
                    fontSize:16,
                }
            }], 
		    tooltip: {
		        trigger: 'item',
		        formatter: function (v){
		        	var cl = '';
		        	if (v.data.value>0) {
		        		cl = '<br/>'+'会员数 :'+v.data.value+'(个)';
					}
		        	return v.name +cl;
		        }
		    },
		    visualMap: {
                type: 'piecewise',
                inverse: true,
                //seriesIndex:0,
                //text: ['','单位：个'],
                pieces: [
                    {
                    min: 0,
                    max: 30,
                    label:'小于30个',
                    color: '#C5D9F1'
                }, {
                    min: 31,
                    max: 60,
                    label:'30个至60个',
                    color: '#538DD5'
                }, {
                    min: 61,
                    max: 90,
                    label:'60个至90个',
                    color: '#16365C'
                }, {
                    min: 91,
                    label:'大于90个',
                    color: '#0F243E'
                }],
                left: '5%',
               bottom:'20%',
                itemWidth:16,
                itemHeight:10,
                itemGap:5,
                textStyle: {
                    color: '#fff',
                    fontSize:10,
                },
            },
		   /* visualMap: {
		        min: 0,
		        max: max,
		        text: ['个',' '],
		        itemHeight:100,
		        itemWidth:15,
				textGap:15,
				seriesIndex:0,
				calculable:true,
		        left:30,
		        bottom:5,
		        textStyle:{
		    	   color:'#fff',
		    	   fontSize: 10
		        },
		        //calculable: true,
		        color: ['#00d6ff','#81edf9','#b3f0f7']
		    },*/
		    series: [{
		        name: 'Number',
		        type: 'map',
		        mapType: 'china',
		        showLegendSymbol: false,
		        aspectScale:0.9,
		        roam: true,
		        zoom:1.2,
		        itemStyle: {
		            normal: {
		                label: {
		                    show: false,
		                    formatter: function (v){
		    		        	return v.name +'\n'+v.data.value+'个';
		    		        }
		                }
		            },
		            emphasis: {
		                label: {
		                    show: true
		                }
		            }
		        },
		        data: mapData
		    }]
		};
    var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

//会员数发展前十省份
function chart1(data){
	var xData = ["四川","山东","江苏","新疆","河北","重庆","湖北","辽宁","宁夏","甘肃"];
	var bar = [308,108,94,71,68,68,52,39,36,34];
	var line = [25.69,9.01,7.84,5.92,5.67,5.67,4.34,3.25,3.00,2.84];
	var option = {
	        grid: {
	            top:'10%',
	            left: '5%',
	            right: '5%',
	            bottom: '20%',
	            containLabel: true
	        },
	        legend:{
	            show:true,
	            bottom : 5,
	            itemWidth: 16,
	            itemHeight: 8,
	            textStyle:{
	                color:'#fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
	            data:["会员数","占比"]
	        },
	        tooltip: {
		        trigger: 'axis',
		        formatter:function (v){
		        	return v[0].name+'<br/>'+v[0].seriesName +':'+v[0].value+'个<br/>'+v[1].seriesName +':'+v[1].value+'%';	
		        }
		    },
	        xAxis: [{
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
	                }
	            },
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                color: '#0177d4',
	                show: true
	            },
	            splitArea: {
	                show: false
	            },
	            data:xData,
	        }],
	        yAxis: [{
	            splitNumber:4,
	            axisTick: {
	                color: '#0177d4',
	                show: true
	            },
	            splitLine:{
	                show:false
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
	            }
	        },{
	            splitNumber:4,
	            axisTick: {
	                color: '#0177d4',
	                show: true
	            },
	            splitLine:{
	                show:false
	            },
	            axisLine: {
	                lineStyle: {
	                    color: '#38b8ff'
	                }
	            },
	            axisLabel: {
	            	formatter: '{value}%',
	                textStyle: {
	                    color: '#ffffff',
	                    fontSize: 10
	                }
	            }
	        }],
	        series: [
	            {
	                name:'会员数',
	                type: 'bar',
	                stack:'a',
	                data: bar,
	                barWidth: '60%',
	                itemStyle: {
			            normal: {
			            	color:'#00c6ff'
			            }
			        },
	            },
	            {
			        name: '占比',
			        type: 'line',
			        symbol:'circle',
			        yAxisIndex: 1,
			        itemStyle: {
			            normal: {
			            	 color:'#ff9b00' ,
			                 opacity:0
			            }
			        },
			         lineStyle:{
			            normal:{
			                color:'#ff9b00'
			            }
			        },
			        data:line
			    }
	        ]
	    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}
//会员增长变化前十省份
function chart2(data){
	var xData = ["四川","河北","重庆","山东","辽宁","广东","江苏","天津","湖北","云南"];
	var bar1 = [102,19,33,74,14,5,76,5,38,2];
	var bar2 = [206,49,35,34,25,21,18,16,14,13];
	var option = {
	        grid: {
	            top:'10%',
	            left: '5%',
	            right: '5%',
	            bottom: '20%',
	            containLabel: true
	        },
	        legend:{
	            show:true,
	            bottom : 5,
	            itemWidth: 16,
	            itemHeight: 8,
	            textStyle:{
	                color:'#fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
	            data:["4月会员数","4至8月新增会员数"]
	        },
	        tooltip: {
		        trigger: 'axis',
		        axisPointer: { // 坐标轴指示器，坐标轴触发有效
		            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
		            color: '#fafafa'
		        }

		    },
	        xAxis: [{
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
	                }
	            },
	            splitLine: {
	                show: false
	            },
	            axisTick: {
	                color: '#0177d4',
	                show: true
	            },
	            splitArea: {
	                show: false
	            },
	            data:xData,
	        }],
	        yAxis: [{
	            splitNumber:4,
	            axisTick: {
	                color: '#0177d4',
	                show: true
	            },
	            splitLine:{
	                show:false
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
	            }
	        }],
	        series: [
	            {
	                name:'4月会员数',
	                type: 'bar',
	                stack:'a',
	                data: bar1,
	                barWidth: '60%',
	                itemStyle: {
			            normal: {
			            	color:'#00c6ff'
			            }
			        },
	            },
	            {
	                name:'4至8月新增会员数',
	                type: 'bar',
	                stack:'a',
	                data: bar2,
	                barWidth: '60%',
	                itemStyle: {
			            normal: {
			            	color:'#1e00ff'
			            }
			        },
	            }
	        ]
	    };
	 var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}
//LNG与PNG交易量结构
function chart3(data){

    var option = {
        color:['#004cff','#61ffff'],
        grid: {
            top:'10%',
            left: '5%',
            right: '5%',
            bottom: '20%',
            containLabel: true
        },
        legend:{
            show:true,
            bottom : 5,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data:data[0]
        },
        tooltip: {
	        trigger: 'axis',
	        formatter:function (v){
	        	return v[0].name+'<br/>'+v[0].seriesName +':'+v[0].value+'%<br/>'+v[1].seriesName +':'+v[1].value+'%';	
	        }
	    },
        xAxis: [{
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
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitArea: {
                show: false
            },
            data: data[1],
        }],
        yAxis: [{
            splitNumber:4,
            axisTick: {
                color: '#0177d4',
                show: true
            },
            splitLine:{
                show:false
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            axisLabel: {
            	formatter: '{value}%',
                textStyle: {
                    color: '#ffffff',
                    fontSize: 10
                }
            }
        }],
        series: [
            {
                name:data[0][0],
                type: 'bar',
                stack:'a',
                data: data[2],
                barWidth: '25%',
            },
            {
                name:data[0][1],
                type: 'bar',
                stack:'a',
                data: data[3],
                barWidth: '25%',
            },
        ]
    };
    var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function convertBar3d(d){
    var ds = {x:[],s:[]}, ang0 = 0, step = Math.PI / d.length, r = 2;
    d.forEach(function(o, i){
        var u = ang0 + step * i;
        ds.x.push(o.name);
        ds.s.push([2+r*Math.cos(u),2+r*Math.sin(u), o.value, o.name]);
    });
    return ds;
}