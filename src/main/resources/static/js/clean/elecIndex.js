$(document).ready(function(){
	getdatax('/clean/elecIndex/chart1.json',chart1);
	getdata('/clean/elecIndex/chart2.json',chart2);
	getdata('/clean/elecIndex/chart3.json',chart3);
	getdatax('/clean/elecIndex/chart4.json',chart4);
	getdatax('/clean/elecIndex/chart5.json',chart5);
	getdatax('/clean/elecIndex/chart6.json',chart6);
	getdatax('/clean/elecIndex/chart7.json',chart7);
});
//["国电投","中国华能集团","中国大唐集团公司","中国华电集团公司","中国国电集团公司","国投电力","国华电力","华润电力","中广核","中国神华"],
//非化石能源发电量趋势
function chart1(data, ix){
	var option =  {
		legend: {
			data: data.legend,
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
				color: '#fff',
				fontSize: 10
			}
		}],
		yAxis: [
			{
				name:'万千瓦时',
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
					color: '#fff',
					fontSize: 10
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
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
				name: "发电量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "本月止累计发电量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#00FFFF',
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data.data[ix][2],
			},
			{
				name: "本月止累计同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#e7572d'
					},
				},
				data: data.data[ix][3],
			},
		]
	};
	$chart.init('#chart1', option);
}
//清洁能源增长率
function chart2(data){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data[0]
		},
		grid:{
			top:'10%',
			bottom:'20%',
			left:'5%',
			right:'5%',
			containLabel:true,
		},
		xAxis: [{
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
					fontSize: 8
				},
			},
			data:data[1],
		}],
		yAxis: [{
			type: 'value',
			splitNumber:3,
			axisTick: {
				color: '#0177d4',
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 8
				},
				formatter: '{value}%'
			}
		}],
		series: [{
			name: '增长率',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
					color: '#2c18f3'
				},
			},
			data: data[2]
		},
		{
			name: '本月同比',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
					color: '#00FFFF'
				},
			},
			data: data[3]
		}]
	};
	$chart.init('#chart2', option);
}
function xbar(d){
	for(var i = 0; i < d.length; i++){
		d[i] = d[i].length > 3 ? d[i].substr(0, 2) + '\n' + d[i].substring(2) : d[i];
	}
	return d;
}
//污染物排放完成率
function chart3(data){
	var option = {
		//title:[{
		//	text:'污染物排放完成率',
		//	top:'3%',
		//	left:'2%',
		//	textStyle: {
		//		color: '#59EBE8',
		//		fontSize:16,
		//	}
		//}],
		tooltip : {
			formatter: "{a} : {c}%"
		},
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
		series : [
			{
				name: 'SO2',
				type: 'gauge',
				z: 3,
				min: 0,
				max: 100,
				splitNumber: 10,
				//center: ['60%', '55%'],
				radius: '80%',
				axisLine: {            // 坐标轴线
					lineStyle: {
						color:  [[0.3, '#6ced91'],[0.5, '#F4923F'],[1, '#fe6b7d']],// 属性lineStyle控制线条样式
						width: 10
					}
				},
				axisLabel: {
					formatter: function(e) {
						return e+'%';
					}
				},
				axisTick: {            // 坐标轴小标记
					length: 15,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				splitLine: {           // 分隔线
					length: 20,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				title : {
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						//fontWeight: 'bolder',
						fontSize: 16,
						color:'#fff'
					}
				},
				detail : {
					formatter:'{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder'
					}
				},
				data:[data[0]]
			},
			{
				name: '氮氧化物',
				type: 'gauge',
				center: ['20%', '55%'],    // 默认全局居中
				radius: '65%',
				min:0,
				max:100,
				endAngle:45,
				splitNumber:10,
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						color:  [[0.3, '#6ced91'],[0.5, '#F4923F'],[1, '#fe6b7d']],
						width: 8
					}
				},
				axisTick: {            // 坐标轴小标记
					length:12,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {
					formatter: function(e) {
						return e+'%';
					}
				},
				splitLine: {           // 分隔线
					length:20,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				pointer: {
					width:5
				},
				title: {
					offsetCenter: [0, '-30%'],
					textStyle: {
						color:'#fff',
						fontSize: 16,
					}
				},
				detail: {
					formatter:'{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder'
					}
				},
				data:[data[1]]
			},
			{
				name: '粉尘',
				type: 'gauge',
				center: ['79%', '50%'],    // 默认全局居中
				radius: '55%',
				min: 0,
				max: 200,
				startAngle: 135,
				endAngle: 45,
				splitNumber: 2,
				axisLine: {            // 坐标轴线
					lineStyle: {       // 属性lineStyle控制线条样式
						color:  [[0.475, '#FE6B7D'],[0.525, '#f4923f'],[1, '#6CED91']],
						width: 8
					}
				},
				axisTick: {            // 坐标轴小标记
					splitNumber: 5,
					length: 10,        // 属性length控制线长
					lineStyle: {       // 属性lineStyle控制线条样式
						color: 'auto'
					}
				},

				splitLine: {           // 分隔线
					length: 15,         // 属性length控制线长
					lineStyle: {       // 属性lineStyle（详见lineStyle）控制线条样式
						color: 'auto'
					}
				},
				axisLabel: {
					formatter: function(e) {
						return e+'%';
					}
				},
				pointer: {
					width:2
				},
				title: {
					offsetCenter: [0, '-30%'],
					textStyle: {
						color:'#fff',
						fontSize: 16,
					}
				},
				detail: {
					formatter:'{value}%',
					textStyle: {       // 其余属性默认使用全局文本样式，详见TEXTSTYLE
						fontWeight: 'bolder'
					}
				},
				data:[data[2]]
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
			}
		]
	};
	$chart.init('#chart3', option,'pie');
}
//污染物排放趋势
function chart4(data, ix){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data.legend
		},
		grid:{
			top:'10%',
			bottom:'20%',
			left:'5%',
			right:'5%',
			containLabel:true,
		},
		xAxis: [{
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
					fontSize: 8
				},
			},
			data:data.xData,
		}],
		yAxis: [{
			name:'吨',
			nameGap:-5,
			nameTextStyle:{
				padding:[0,0,0,45],
				align:'center',
				color:'#fff',
			},
			type: 'value',
			splitNumber:3,
			axisTick: {
				color: '#0177d4',
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: 'rgba(255,255,255,0.6)',
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#fff',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 8
				},
				formatter: '{value}'
			}
		}],
		series: [
			{
			name: 'SO2排放量',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			stack:'g',
			areaStyle:{},
			itemStyle: {
				normal: {
					color: '#2c18f3'
				},
			},
			data: data.data[ix][0]
		},
			{
				name: '氮氧化物排放量',
				type: 'line',
				smooth: true,
				symbol:'circle',
				showSymbol: false,
				stack:'g',
				areaStyle:{},
				itemStyle: {
					normal: {
						color: '#00FFFF'
					},
				},
				data: data.data[ix][1]
			},
			{
				name: '粉尘排放量',
				type: 'line',
				smooth: true,
				symbol:'circle',
				showSymbol: false,
				stack:'g',
				areaStyle:{},
				itemStyle: {
					normal: {
						color: '#CDDC39'
					},
				},
				data: data.data[ix][2]
			},
		]
	};
	$chart.init('#chart4', option);
}
//脱硫效率排名
function chart5(data, ix){
	var option =  {
		legend: {
			data: data.legend,
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
				color: '#fff',
				fontSize: 10
			}
		}],
		yAxis: [
			{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
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
				name: "脱硫效率",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "本月止累计",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#00FFFF',
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data.data[ix][2],
			},
			{
				name: "去年累计同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#e7572d'
					},
				},
				data: data.data[ix][3],
			},
		]
	};
	$chart.init('#chart5', option);
}
//脱硝效率排名
function chart6(data, ix){
	var option =  {
		legend: {
			data: data.legend,
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
				color: '#fff',
				fontSize: 10
			}
		}],
		yAxis: [
			{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
				nameTextStyle: {
					color: '#fff',
					fontSize: 10
				},
				axisLine: {
					lineStyle: {
						color: '#38b8ff'
					}
				},
				axisLabel: {
					color: '#fff',
					fontSize: 10,
					formatter: '{value}%'
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
				name: "脱硝效率",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
						barBorderRadius: 50,
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "本月同比",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data.data[ix][1],
			},
		]
	};
	$chart.init('#chart6', option);
}
//淘汰落后产能结构
function chart7(data, ix){
	var option = {
		textStyle: {
			color: '#59ebe8'
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b}: {c}千瓦 ({d}%)"
		},
		color: ['#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
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
			/*data: data.legend,*/
		},
		series : [
			{
				name: '淘汰落后产能',
				type: 'pie',
				radius : '60%',
				center: ['50%', '40%'],
				data:data.data[ix][0],
				itemStyle: {
					normal: {
						label:{
							show: true,
							//position:'inside',
							//formatter: '{b} : {c}%' ,
							textStyle:{
								color:'#fff',
								//fontSize: 10
							},
						}
					}
				}
			}
		]
	};
	$chart.init('#chart7', option);
}