$(document).ready(function(){
	getdata('/statecn/gasMarket/gasMarketDetail5.json',function(d){
		var x = $chart.xtime(d.x);
		chart1(x, d.s, d.data5);
		chart2(x, d.s, d.data1);
		chart3(x, d.s, d.data3);
		chart4(x, d.s, d.data2);
		chart5(x, d.s, d.data4);
		chart6(x, d.s, d.data6);

	});
});

function to_kdata(d, i){
	var ret = [];
	d[i].map(function(o){
		var arr = o.split('-');
		if(arr.length == 0)
			arr = [0,0];
		ret.push([arr[0],arr[1],arr[0],arr[1]]);
	});
	return ret;
}
function to_ldata(d){
	var ret = [];
	for(var i = 0; i< d.length; i++){
		var arr = d[i].split('-');
		var val = (parseFloat(arr[0]) + parseFloat(arr[1]) ) / 2;
		ret.push(val);
	}
	return ret;
}
function chart1(xdata, sdata, data){
	var sindex = 4;
	var option =  {
		color:['#38b8ff','#ff0'],
		legend:{
			left:10,
			textStyle:{
				color:'#fff'
			},
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			textStyle: {
				color: '#fff',
				fontSize: 10,
			},
			data:sdata[sindex]
		},
		grid:{
			top:'15%',
			left:'5%',
			right:'5%',
			bottom:'5%',
			containLabel: true
		},
		tooltip: {
			trigger: 'axis'
		},
		xAxis: [{
			type: "category",
			axisLine: {
				lineStyle: {
					 color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false
			},
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				color: '#0177d4',
				show: true
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 10
				},
			},
			data: xdata,
		}],
		yAxis: [{
			name:'元/吨',
    		nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,35],
		    	align:'center',
		    	color:'#fff',
			},
			type: 'value',
			min:2000,
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontSize:10
				}
			},
			axisLine: {
				show:false
			},
			axisTick: {
				show: false
			},
			splitLine: {
				show: false
			}
		}],
		dataZoom: [
			{
				type: "slider",
				orient: "horizontal",
				show: true,
				bottom:5,
			},{
				"type": "inside",
				"orient": "horizontal",
				"show": true,
			}
		],
		series: [
			{
				name: sdata[sindex][0],
				type: 'line',
				showSymbol: false,
				data: to_ldata(data[0])
			},
			{
				name: sdata[sindex][1],
				type: 'line',
				showSymbol: false,
				data: to_ldata(data[1])
			}]
	};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(xdata, sdata, data){
	var sindex = 0;
	var option = {
		color:['#070093','#70b4eb','#fff'],
		legend:{
			left:10,
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			textStyle: {
				color: '#fff',
				fontSize: 10,
			},
			data:sdata[sindex]
		},
		tooltip: {
			trigger: 'axis'
		},
		grid:{
			top:'15%',
			left:'5%',
			right:'5%',
			bottom:'5%',
			containLabel: true
		},
		xAxis: {
			type: "category",
			axisLine: {
				lineStyle: {
					 color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff ',
				}
			},
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				show: false
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 10
				},
			},
			data:xdata
		},
		yAxis: {
			name:'元/吨',
    		nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,35],
		    	align:'center',
		    	color:'#fff',
			},
			 type: 'value',
			 min:2000,
			 axisTick: {
					show: false
				},
			 axisLine: {
				 show: false
			 },
			 splitLine: {
				 show: false
			 },
			 axisLabel: {
				 textStyle: {
					 color: '#fff',
					 fontSize:10
				 }
			 }
		},
		dataZoom: [
			{
				type: "slider",
				orient: "horizontal",
				show: true,
				bottom:5,
			},{
				"type": "inside",
				"orient": "horizontal",
				"show": true,
			}
		],
		series: [{
			name: sdata[sindex][0],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[0])
		},
		{
			name: sdata[sindex][1],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[1])
		},
		{
			name: sdata[sindex][2],
			type: 'line',
			showSymbol: false,
			lineStyle:{
				type:'dashed'
			},
			data: to_ldata(data[2])
		}]
	};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(xdata, sdata, data){
	var sindex = 2;
	var option = {
		color:['#070093','#70b4eb','#fff', '#8A2BE2', '#1E90FF', '#ff0'],
		legend:{
			left:10,
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			textStyle: {
				color: '#fff',
				fontSize: 10,
			},
			type:'scroll',
			pageButtonItemGap:1,
			pageTextStyle:{
				color:'#fff',
			},
			data:sdata[sindex]
		},
		tooltip: {
			trigger: 'axis'
		},
		grid:{
			top:'15%',
			left:'5%',
			right:'5%',
			bottom:'5%',
			containLabel: true
		},
		xAxis: {
			type: "category",
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff ',
				}
			},
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				show: false
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 10
				},
			},
			data:xdata
		},
		yAxis: {
			name:'元/吨',
    		nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,35],
		    	align:'center',
		    	color:'#fff',
			},
			type: 'value',
			min:2000,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			}
		},
		dataZoom: [
			{
				type: "slider",
				orient: "horizontal",
				show: true,
				handleSize: '50%',
			},{
				"type": "inside",
				"orient": "horizontal",
				"show": true,
			}
		],
		series: [{
			name: sdata[sindex][0],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[0])
		},
		{
			name: sdata[sindex][1],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[1])
		},
		{
			name: sdata[sindex][2],
			type: 'line',
			showSymbol: false,
			lineStyle:{
				type:'dashed'
			},
			data: to_ldata(data[2])
		},
		{
			name: sdata[sindex][3],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[3])
		},
		{
			name: sdata[sindex][4],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[4])
		},
		{
			name: sdata[sindex][5],
			type: 'line',
			showSymbol: false,
			lineStyle:{
				type:'dashed'
			},
			data: to_ldata(data[5])
		}]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(xdata, sdata, data){
	var sindex = 1;
	var option = {
		color:['#070093','#70b4eb','#ff0'],
		legend:{
			left:10,
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			textStyle: {
				color: '#fff',
				fontSize: 10,
			},
			data:sdata[sindex]
		},
		tooltip: {
			trigger: 'axis'
		},
		grid:{
			top:'15%',
			left:'5%',
			right:'5%',
			bottom:'5%',
			containLabel: true
		},
		xAxis: {
			type: "category",
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff ',
				}
			},
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				show: false
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 10
				},
			},
			data:xdata
		},
		yAxis: {
			name:'元/吨',
    		nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,35],
		    	align:'center',
		    	color:'#fff',
			},
			type: 'value',
			min:2000,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			}
		},
		dataZoom: [
			{
				type: "slider",
				orient: "horizontal",
				show: true,
				bottom:5,
			},{
				"type": "inside",
				"orient": "horizontal",
				"show": true,
			}
		],
		series: [{
			name: sdata[sindex][0],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[0])
		},{
			name: sdata[sindex][1],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[1])
		},
		{
			name: sdata[sindex][2],
			type: 'line',
			showSymbol: false,
			lineStyle:{
				type:'dashed'
			},
			data: to_ldata(data[2])
		}]
	};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(xdata, sdata, data){
	var sindex = 3;
	var option = {
		color:['#070093','#70b4eb','#fff'],
		legend:{
			left:10,
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			textStyle: {
				color: '#fff',
				fontSize: 10,
			},
			data:sdata[sindex]
		},
		tooltip: {
			trigger: 'axis'
		},
		grid:{
			top:'15%',
			left:'5%',
			right:'5%',
			bottom:'5%',
			containLabel: true
		},
		xAxis: {
			type: "category",
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff ',
				}
			},
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				show: false
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 10
				},
			},
			data:xdata
		},
		yAxis: {
			name:'元/吨',
    		nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,35],
		    	align:'center',
		    	color:'#fff',
			},
			type: 'value',
			min:2000,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			}
		},
		dataZoom: [
			{
				type: "slider",
				orient: "horizontal",
				show: true,
				bottom:5,
			},{
				"type": "inside",
				"orient": "horizontal",
				"show": true,
			}
		],
		series: [{
			name: sdata[sindex][0],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[0])
		}]
	};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(xdata, sdata, data){
	var sindex = 5;
	var option = {
		color:['#070093','#70b4eb','#fff'],
		legend:{
			left:10,
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			textStyle: {
				color: '#fff',
				fontSize: 10,
			},
			data:sdata[sindex]
		},
		tooltip: {
			trigger: 'axis'
		},
		grid:{
			top:'15%',
			left:'5%',
			right:'5%',
			bottom:'5%',
			containLabel: true
		},
		xAxis: {
			type: "category",
			axisLine: {
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff ',
				}
			},
			boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				show: false
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 10
				},
			},
			data:xdata
		},
		yAxis: {
			name:'元/吨',
    		nameGap:-5,
    		nameTextStyle:{
		    	padding:[0,0,0,35],
		    	align:'center',
		    	color:'#fff',
			},
			type: 'value',
			min:2000,
			axisTick: {
				show: false
			},
			axisLine: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 10
				}
			}
		},
		dataZoom: [
			{
				type: "slider",
				orient: "horizontal",
				show: true,
				bottom:5,
			},{
				"type": "inside",
				"orient": "horizontal",
				"show": true,
			}
		],
		series: [{
			name: sdata[sindex][0],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[0])
		},{
			name: sdata[sindex][1],
			type: 'line',
			showSymbol: false,
			data: to_ldata(data[1])
		}]
	};
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}