$(document).ready(function(){
	getdata('/lc/elecIndex/chart1.json',chart1);
	//getdatax('/lc/elecIndex/chart2.json',chart2);
	getdata('/lc/elecIndex/chart3.json',chart3);
	getdatax('/lc/elecIndex/chart4.json',chart4);
	getdatax('/lc/elecIndex/chart5.json',chart5,{sidx:2});
	getdata('/lc/elecIndex/main.json',main);
});
var fontsize = 9;
function main(data){
	$(".mainc .node").each(function(){
		var n = $(this), i = n.attr("index");
		n.html('<div class="text"><a href="javascript:void(0);"><div>'+ data[3][i].name + '</div><div>' + data[3][i].value +'</div></a></div>');
		n.data("d", data[3][i]);
		drawTip(n, data[3][i]);
		n.on('mouseover',function(){
			this.tip.show();
		}).on('mouseout',function(){
			this.tip.hide();
		});
	});
}
function drawTip(n, x){
	var div = '<div class="tip" style="">{0}<br><span class="ball" style="background-color:#2b88ff;"></span>{1}: {2}<br><span class="ball" style="background-color:#5acbff;"></span>{3}: {4}</div>'
	n.append(div.format(x.name,'脱硝效率', x.value, '同比', x.tb + '%'));
	n[0].tip = n.find(".tip");
}
//煤气联合循环发电量趋势
function chart1(data){
	var option =  {
		legend: {
			data: data[0],
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color:['#2b88ff','#5acbff'],
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
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data[1],
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			axisLabel: {
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
			{
				name:'MW',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,45],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},
			{
				name:'亿千瓦时',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,-45],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				max:100,
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
					formatter: '{value}'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}],
		series: [
			{
				name: "装机容量",
				type: "line",
				smooth:true,
				itemStyle: {
					normal: {
					},
				},
				data: data[2],
			},
			{
				name: "发电量",
				type: "line",
				smooth: true,
				yAxisIndex:1,
				itemStyle: {
					normal: {
					},
				},
				data: data[3],
			},
		]
	};
	$chart.init('#chart1', option);
}
//煤气联合循环发电量排名
function chart2(data, ix){
	var option =  {
		legend: {
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color:['#4df3f3','#2b88ff'],
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
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data.xData,
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			axisLabel: {
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
			{
				name:'MW',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,45],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},
			{
				name:'万千瓦时',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,-45],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
					formatter: '{value}'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}
		],
		series: [
			{
				name: "装机容量",
				type: "bar",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "发电量",
				type: "bar",
				yAxisIndex:1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},
		]
	};
	$chart.init('#chart2', option);
}
//CO2排放量趋势
function chart3(data){
	var val = data[2];
	var xData = data[1];
    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<val.length; i++){
        dataArray.push({"name": xData[i], "value": val[i]})
    }
    dataArray.sort(function(a,b){
        return b.value - a.value
    });
    for(var i=0; i<dataArray.length; i++){
    	xData[i] = dataArray[i].name;
        val[i] = dataArray[i].value;
    }
	var option = {
		legend: {
			data: data[0],
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		color:['#2b88ff','#4138e1'],
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data[1],
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			axisLabel: {
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
			{
				name:'吨',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,20],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}/*,{
				nameTextStyle: {
					color: '#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
					formatter: '{value}%'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}*/],
		series: [
			{
				name: "排放量",
				type: "line",
				smooth:true,
				areaStyle: {
					normal: {type: 'default',
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0.3,
							color: 'rgba(43,136,255,0.2)'
						}, {
							offset: 0.7,
							color: 'rgba(43,136,255,0.4)'
						}, {
							offset: 1,
							color: 'rgba(43,136,255, 1)'
						}], false)
					}
				},
				data: data[2],
			},
		]
	};
	$chart.init('#chart3', option);
}
//CO2排放量排名
function chart4(data, ix){
	
	var val = data.data[ix][0];
	var xData = data.xData;
    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<val.length; i++){
        dataArray.push({"name": xData[i], "value": val[i]})
    }
    dataArray.sort(function(a,b){
        return b.value - a.value
    });
    for(var i=0; i<dataArray.length; i++){
    	xData[i] = dataArray[i].name;
        val[i] = dataArray[i].value;
    }
	var option = {
		legend: {
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color:['#5acbff','#2b88ff'],
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
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data.xData,

			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			axisLabel: {
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
			{
				name:'千克/千瓦时',
				nameGap:-1,
				nameTextStyle:{
					padding:[0,0,0,65],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}],
		series: [
			{
				name: "排放量",
				type: "bar",
				barWidth:"30%",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][0],
			}/*,
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},*/
		]
	};
	$chart.init('#chart4', option);
}
//单位发电CO2排放量排名
function chart5(data, ix){
	var val = data.data[ix][0];
	var xData = data.xData;
    //排序，名称data[2]，数据data[3]
    var dataArray = [];
    for(var i=0; i<val.length; i++){
        dataArray.push({"name": xData[i], "value": val[i]})
    }
    dataArray.sort(function(a,b){
        return b.value - a.value
    });
    for(var i=0; i<dataArray.length; i++){
    	xData[i] = dataArray[i].name;
        val[i] = dataArray[i].value;
    }
	var option =  {
		legend: {
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color:['#2b88ff','#5acbff'],
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
		xAxis: [{
			type: 'category',
			gridIndex: 0,
			data: data.xData,
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			axisLabel: {
				color: '#c2c8cf',
				fontSize: fontsize
			}
		}],
		yAxis: [
			{
				name:'千克/千瓦时',
				nameGap:-1,
				nameTextStyle:{
					padding:[0,0,0,65],
					align:'center',
					color:'#c2c8cf',
					fontSize: fontsize
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#c2c8cf',
					fontSize: fontsize,
					formatter: '{value}'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			}],
		series: [
			{
				name: "排放量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						barBorderRadius: [50,50,0,0],
					},
				},
				data: data.data[ix][0],
			}/*,
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},*/
		]
	};
	$chart.init('#chart5', option);
}

function mainOld(data){
	var chart = am4core.createFromConfig({
		data: data[3],
		legend: {
			labels:{
				text:'{category}',
				fill:'none',
				stroke:'#c2c8cf',
				fontSize:12,
				fontFamily: 'sans-serif',
				fontWeight:100,
			}
		},
		angle:32,
		depth:220,
		innerRadius: "10%",
		series: [{
			"type": "PieSeries3D",
			"legendSettings": {
				"valueText": "{valueY.close}"
			},
			"labels":{
				stroke:'#c2c8cf',
				fontSize:12,
				fontFamily: 'sans-serif',
				fontWeight:100,
				//"disabled":true
			},
			"ticks":{
				"disabled":true
			},
			"slices":{
				"strokeWidth":0,
				"cornerRadius":5,
			},
			"colors":{
				"step":3
			},
			"dataFields": {
				"value": "value",
				"depthValue":"value",
				"category": "name"
			}
		}]
	}, "main", "PieChart3D");
	$("#id-43-title").parent().hide();
}