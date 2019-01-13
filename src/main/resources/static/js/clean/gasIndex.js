$(document).ready(function(){
	getdata('/clean/gasIndex/chart1.json',chart1);
	getdata('/clean/gasIndex/chart2.json',chart2);
	getdata('/clean/gasIndex/chart3.json',chart3);
	getdata('/clean/gasIndex/chart4.json',chart4);
	getdata('/clean/gasIndex/chart5.json',chart5);
	getdata('/clean/gasIndex/chart6.json',chart6);
	getdata('/clean/gasIndex/chart7.json',chart7);
	getdata('/clean/gasIndex/main.json',main);
});
function main(data){
	var option1 = {
		tooltip: {
		},
		title:{
			text:'一次能源',
			x:'center',
			y:40,
			textStyle:{
				color:'#fff',
				fontSize:16,
			}
		},
		color:['#f00', '#ff63', '#ff0', '#0f0', '#0ff', '#00f', '#403D84', '#FA3E5F', '#6635EF', '#FFAFDA'],
		series: [
			{
			name: '一次能源',
			type: 'pie',
			radius: ['20%', '82%'],
			center:['50%','50%'],
			label: {
				normal: {
					position: 'inner'
				}
			},
			data: data[3]
		},
		]
	};
	var option2 = {
		tooltip: {
		},
		title:{
			text:'清洁能源',
			x:'center',
			y:40,
			textStyle:{
				color:'#fff',
				fontSize:16,
			}
		},
		color:['#f00', '#ff63', '#ff0', '#0f0', '#0ff', '#00f', '#403D84', '#FA3E5F', '#6635EF', '#FFAFDA'],
		series: [
			{
				name: '清洁能源',
				type: 'pie',
				radius: ['20%', '82%'],
				center:['50%','50%'],
				label: {
					normal: {
						position: 'inner'
					}
				},
				data: data[4]
			},
		]
	};
	var option3 = {
		tooltip: {
		},
		title:{
			text:'化石能源消费',
			x:'center',
			y:40,
			textStyle:{
				color:'#fff',
				fontSize:16,
			}
		},
		color:['#f00', '#ff63', '#ff0', '#0f0', '#0ff', '#00f', '#403D84', '#FA3E5F', '#6635EF', '#FFAFDA'],
		series: [
			{
				name: '化石能源消费',
				type: 'pie',
				radius: ['20%', '82%'],
				center:['50%','50%'],
				label: {
					normal: {
						position: 'inner'
					}
				},
				data: data[5]
			}]
	};
	$chart.init('#main1', option1,'pie');
	$chart.init('#main2', option2,'pie');
	$chart.init('#main3', option3,'pie');
}
//石油开采资源综合利用情况
function chart1(data){
	var option =  {
		legend: {
			data: data[0],
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
			data: data[1],
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
				name: "余热利用率",
				type: "line",
				itemStyle: {
					normal: {
						color: '#2c18f3',
					},
				},
				data: data[2],
			},
			{
				name: "天然气回收利用率",
				type: "line",
				itemStyle: {
					normal: {
						color: '#00FFFF',
					},
				},
				data: data[3],
			},
			{
				name: "资源化利用率",
				type: "line",
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data[4],
			},
		]
	};
	$chart.init('#chart1', option);
}
//石油开采其他污染物产生情况
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
			name: '采油废水回用率',
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
			name: '采出废水达标排放率',
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
//石油开采其他污染物产生情况
function chart3(data){
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
			name: '落地原油率',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
					color: '#16abfe'
				},
			},
			data: data[2]
		},
			{
				name: '油井伴生气外排率',
				type: 'line',
				smooth: true,
				symbol:'circle',
				showSymbol: false,
				itemStyle: {
					normal: {
						color: '#ff7070'
					},
				},
				data: data[3]
			}]
	};
	$chart.init('#chart3', option);
}
//石油开采加工综合能耗企业排名
function chart4(data){
	var option = {
		tooltip: {
			trigger: 'item',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend:{
			data:data[0]
		},
		grid:{
			top:'10%',
			bottom:'20%',
			left:'2%',
			right:'2%',
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
			name:'单位能耗量',
			nameGap:-1,
			nameTextStyle:{
				padding:[0,0,0,65],
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
			name: '开采重油',
			type:'bar',
			barWidth:15,
			//stack:'g',
			itemStyle: {
				normal: {
					color: '#2c18f3'
				},
			},
			data: data[2]
		},
		{
			name: '开采轻油',
			type:'bar',
			barWidth:15,
			//stack:'g',
			itemStyle: {
				normal: {
					color: '#00FFFF'
				},
			},
			data: data[3]
		},
		{
			name: '石油加工',
			type:'bar',
			barWidth:15,
			//stack:'g',
			itemStyle: {
				normal: {
					color: '#FFD743'
				},
			},
			data: data[4]
		}]
	};
	$chart.init('#chart4', option);
}
//石油加工资源消耗情况
function chart5(data){
	var option =  {
		legend: {
			data: data[0],
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
			data: data[1],
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
			}],
		series: [
			{
				name: "硫回收率",
				type: "line",
				itemStyle: {
					normal: {
						color: '#2c18f3',
					},
				},
				data: data[2],
			},
			{
				name: "净化器合格率",
				type: "line",
				itemStyle: {
					normal: {
						color: '#00FFFF',
					},
				},
				data: data[4],
			},
			{
				name: "尾气达标排放率",
				type: "line",
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data[3],
			},
		]
	};
	$chart.init('#chart5', option);
}
//石油加工资源综合利用情况
function chart6(data){
	var option =  {
		legend: {
			data: data[0],
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
			data: data[1],
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
				name:'吨',
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
					fontSize: 10,
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},
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
			}],
		series: [
			{
				name: "单位潜硫量脱硫剂消耗",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color: '#2c18f3',
						barBorderRadius: 10,
					},
				},
				data: data[2],
			},
			{
				name: "单位潜流量综合能耗",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color: '#30fffe',
						barBorderRadius: 10,
					},
				},
				data: data[3],
			},
			{
				name: "中水回用率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37',
					},
				},
				data: data[4],
			},
		]
	};
	$chart.init('#chart6', option);
}
//石油加工污染物产生情况
function chart7(data){
	var option =  {
		legend: {
			data: data[0],
		},
		color: ['#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
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
				name: "S02排放速率",
				type: "line",
				smooth: true,
				showSymbol:false,
				itemStyle: {
					normal: {
					},
				},
				data: data[2],
			},
			{
				name: "废水达标排放率",
				type: "line",
				smooth: true,
				showSymbol:false,
				itemStyle: {
					normal: {
					},
				},
				data: data[3],
			},
			{
				name: "COD排放浓度",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						lineStyle: {
							type: 'dashed',
						}
					},
				},
				data: data[4],
			},
			{
				name: "氨氮排放浓度",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#e7572d',
						lineStyle: {
							type: 'dashed',
						}
					},
				},
				data: data[5],
			},
		]
	};
	$chart.init('#chart7', option);
}