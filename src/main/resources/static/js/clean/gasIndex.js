$(document).ready(function(){
	getdatax('/clean/gasIndex/chart1.json',chart1);
	getdatax('/clean/gasIndex/chart2.json',chart2);
	getdatax('/clean/gasIndex/chart3.json',chart3);
	getdatax('/clean/gasIndex/chart4.json',chart4);
	getdatax('/clean/gasIndex/chart5.json',chart5);
	getdatax('/clean/gasIndex/chart6.json',chart6);
	getdatax('/clean/gasIndex/chart7.json',chart7);
	getdata('/clean/gasIndex/main.json',main);
});
var mainChart, mainData, mainText = {'c1':'天然气占清洁能源','c2':'天然气占一次能源','c3':'天然气占化石能源'};
function changeMain(param){
	$(".c"). removeClass("check_btn_option_checked");
	$("#"+param). addClass("check_btn_option_checked");
	if(mainChart != null){
		mainChart.dispose();
	}
	main(mainData[param], param);
}
function main(data, ix){
	if(ix == null || (ix.charAt(0)!='c')){
		mainData = {'c1':[],'c2':[],'c3':[]};
		data[3].forEach(function(x){
			mainData.c1.push({name: x.name, value: x.value[0]});
			mainData.c2.push({name: x.name, value: x.value[1]});
			mainData.c3.push({name: x.name, value: x.value[2]});
		});
		data = mainData.c1;
		ix = 'c1';
	}
	var nameMap = {
		'Afghanistan':'阿富汗',
		'Albania':'阿尔巴尼亚',
		'Algeria':'阿尔及利亚',
		'Andorra':'安道尔',
		'Angola':'安哥拉',
		'Antarctica':'南极洲',
		'Antigua and Barbuda':'安提瓜和巴布达',
		'Argentina':'阿根廷',
		'Armenia':'亚美尼亚',
		'Australia':'澳大利亚',
		'Austria':'奥地利',
		'Azerbaijan':'阿塞拜疆',
		'The Bahamas':'巴哈马',
		'Bahrain':'巴林',
		'Bangladesh':'孟加拉国',
		'Barbados':'巴巴多斯',
		'Belarus':'白俄罗斯',
		'Belgium':'比利时',
		'Belize':'伯利兹',
		'Benin':'贝宁',
		'Bermuda':'百慕大',
		'Bhutan':'不丹',
		'Bolivia':'玻利维亚',
		'Bosnia and Herzegovina':'波斯尼亚和黑塞哥维那',
		'Botswana':'博茨瓦纳',
		'Brazil':'巴西',
		'Brunei':'文莱',
		'Bulgaria':'保加利亚',
		'Burkina Faso':'布基纳法索',
		'Burundi':'布隆迪',
		'Cambodia':'柬埔寨',
		'Cameroon':'喀麦隆',
		'Canada':'加拿大',
		'Cape Verde':'佛得角',
		'Central African Republic':'中非共和国',
		'Chad':'乍得',
		'Chile':'智利',
		'China':'中国',
		'Colombia':'哥伦比亚',
		'Comoros':'科摩罗',
		'Republic of the Congo':'刚果共和国',
		'Costa Rica':'哥斯达黎加',
		'Croatia':'克罗地亚',
		'Cuba':'古巴',
		'Cyprus':'塞浦路斯',
		'Czech Republic':'捷克共和国',
		'Denmark':'丹麦',
		'Djibouti':'吉布提',
		'Dominica':'多米尼加',
		'Dominican Republic':'多明尼加共和国',
		'Ecuador':'厄瓜多尔',
		'Egypt':'埃及',
		'El Salvador':'萨尔瓦多',
		'Equatorial Guinea':'赤道几内亚',
		'Eritrea':'厄立特里亚',
		'Estonia':'爱沙尼亚',
		'Ethiopia':'埃塞俄比亚',
		'Falkland Islands':'福克兰群岛',
		'Faroe Islands':'法罗群岛',
		'Fiji':'斐济',
		'Finland':'芬兰',
		'France':'法国',
		'French Guiana':'法属圭亚那',
		'French Southern and Antarctic Lands':'法属南半球和南极领地',
		'Gabon':'加蓬',
		'Gambia':'冈比亚',
		'Gaza Strip':'加沙',
		'Georgia':'格鲁吉亚',
		'Germany':'德国',
		'Ghana':'加纳',
		'Greece':'希腊',
		'Greenland':'格陵兰',
		'Grenada':'格林纳达',
		'Guadeloupe':'瓜德罗普',
		'Guatemala':'危地马拉',
		'Guinea':'几内亚',
		'Guinea Bissau':'几内亚比绍',
		'Guyana':'圭亚那',
		'Haiti':'海地',
		'Honduras':'洪都拉斯',
		'Hong Kong':'香港',
		'Hungary':'匈牙利',
		'Iceland':'冰岛',
		'India':'印度',
		'Indonesia':'印尼',
		'Iran':'伊朗',
		'Iraq':'伊拉克',
		'Iraq-Saudi Arabia Neutral Zone':'伊拉克阿拉伯中立区',
		'Ireland':'爱尔兰',
		'Isle of Man':'马恩岛',
		'Israel':'以色列',
		'Italy':'意大利',
		'Ivory Coast':'科特迪瓦',
		'Jamaica':'牙买加',
		'Jan Mayen':'扬马延岛',
		'Japan':'日本',
		'Jordan':'约旦',
		'Kazakhstan':'哈萨克斯坦',
		'Kenya':'肯尼亚',
		'Kerguelen':'凯尔盖朗群岛',
		'Kiribati':'基里巴斯',
		'North Korea':'北朝鲜',
		'South Korea':'韩国',
		'Kuwait':'科威特',
		'Kyrgyzstan':'吉尔吉斯斯坦',
		'Laos':'老挝',
		'Latvia':'拉脱维亚',
		'Lebanon':'黎巴嫩',
		'Lesotho':'莱索托',
		'Liberia':'利比里亚',
		'Libya':'利比亚',
		'Liechtenstein':'列支敦士登',
		'Lithuania':'立陶宛',
		'Luxembourg':'卢森堡',
		'Macau':'澳门',
		'Macedonia':'马其顿',
		'Madagascar':'马达加斯加',
		'Malawi':'马拉维',
		'Malaysia':'马来西亚',
		'Maldives':'马尔代夫',
		'Mali':'马里',
		'Malta':'马耳他',
		'Martinique':'马提尼克',
		'Mauritania':'毛里塔尼亚',
		'Mauritius':'毛里求斯',
		'Mexico':'墨西哥',
		'Moldova':'摩尔多瓦',
		'Monaco':'摩纳哥',
		'Mongolia':'蒙古',
		'Morocco':'摩洛哥',
		'Mozambique':'莫桑比克',
		'Myanmar':'缅甸',
		'Namibia':'纳米比亚',
		'Nepal':'尼泊尔',
		'Netherlands':'荷兰',
		'New Caledonia':'新喀里多尼亚',
		'New Zealand':'新西兰',
		'Nicaragua':'尼加拉瓜',
		'Niger':'尼日尔',
		'Nigeria':'尼日利亚',
		'Northern Mariana Islands':'北马里亚纳群岛',
		'Norway':'挪威',
		'Oman':'阿曼',
		'Pakistan':'巴基斯坦',
		'Panama':'巴拿马',
		'Papua New Guinea':'巴布亚新几内亚',
		'Paraguay':'巴拉圭',
		'Peru':'秘鲁',
		'Philippines':'菲律宾',
		'Poland':'波兰',
		'Portugal':'葡萄牙',
		'Puerto Rico':'波多黎各',
		'Qatar':'卡塔尔',
		'Reunion':'留尼旺岛',
		'Romania':'罗马尼亚',
		'Russia':'俄罗斯',
		'Rwanda':'卢旺达',
		'San Marino':'圣马力诺',
		'Sao Tome and Principe':'圣多美和普林西比',
		'Saudi Arabia':'沙特阿拉伯',
		'Senegal':'塞内加尔',
		'Seychelles':'塞舌尔',
		'Sierra Leone':'塞拉利昂',
		'Singapore':'新加坡',
		'Slovakia':'斯洛伐克',
		'Slovenia':'斯洛文尼亚',
		'Solomon Islands':'所罗门群岛',
		'Somalia':'索马里',
		'South Africa':'南非',
		'Spain':'西班牙',
		'Sri Lanka':'斯里兰卡',
		'St. Christopher-Nevis':'圣',
		'St. Lucia':'圣露西亚',
		'St. Vincent and the Grenadines':'圣文森特和格林纳丁斯',
		'Sudan':'苏丹',
		'Suriname':'苏里南',
		'Svalbard':'斯瓦尔巴特群岛',
		'Swaziland':'斯威士兰',
		'Sweden':'瑞典',
		'Switzerland':'瑞士',
		'Syria':'叙利亚',
		'Taiwan':'台湾',
		'Tajikistan':'塔吉克斯坦',
		'United Republic of Tanzania':'坦桑尼亚',
		'Thailand':'泰国',
		'Togo':'多哥',
		'Tonga':'汤加',
		'Trinidad and Tobago':'特里尼达和多巴哥',
		'Tunisia':'突尼斯',
		'Turkey':'土耳其',
		'Turkmenistan':'土库曼斯坦',
		'Turks and Caicos Islands':'特克斯和凯科斯群岛',
		'Uganda':'乌干达',
		'Ukraine':'乌克兰',
		'United Arab Emirates':'阿联酋',
		'United Kingdom':'英国',
		'United States':'美国',
		'Uruguay':'乌拉圭',
		'Uzbekistan':'乌兹别克斯坦',
		'Vanuatu':'瓦努阿图',
		'Venezuela':'委内瑞拉',
		'Vietnam':'越南',
		'Western Sahara':'西撒哈拉',
		'Western Samoa':'西萨摩亚',
		'Yemen':'也门',
		'Yugoslavia':'南斯拉夫',
		'Democratic Republic of the Congo':'刚果民主共和国',
		'Zambia':'赞比亚',
		'Zimbabwe':'津巴布韦',
		'South Sudan':'南苏丹',
		'Somaliland':'索马里兰',
		'Montenegro':'黑山',
		'Kosovo':'科索沃',
		'Republic of Serbia':'塞尔维亚',

	};
	var option = {
		title:[
			{
			text:'占比(%)',
			bottom:150,
			left:'10%',
			textStyle: {
				color: '#fff',
				fontSize:10,
			}
		},{
			text:'天然气消费占比 {0}'.format('('+mainText[ix]+')'||''),
			top:'3%',
			left:'center',
			textStyle: {
				color: '#a4d6fe',
				fontSize:16,
			}
		}],
		tooltip: {
			trigger: 'item',
			formatter: function (params) {
				//alert(JSON.stringify(params));
				if (params.value>=0) {
					return params.name + ' : '+ params.value + '%';
				}
			}
		},
		visualMap: {
			min: 0,
			max: 100,
			text:[' ','  '],
			itemHeight:100,
			itemWidth:15,
			textGap:15,
			left:'10%',
			textStyle:{
				color:'#fff',
				fontSize: 10
			},
			realtime: false,
			calculable: true,
			color: ['#4138e1','#2b88ff', '#3ee4f3'],
		},
		series: [
			{
				name: 'World Population (2010)',
				type: 'map',
				nameMap:nameMap,
				mapType: 'world',
				zoom:1.1,
				top:'20%',
				roam: false,
				itemStyle:{
					emphasis:{label:{show:true}}
				},
				data:data
			}
		]
	};
	mainChart = $chart.init('#main', option,{});
}
//天然气开采资源综合利用情况
function chart1(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color:['#25e4a3','#3fe5f4','#2b88ff'],
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
				},
				min:"dataMin",
			}],
		series: [
			{
				name: "余热利用率",
				type: "line",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "油井伴生气回收利用率",
				type: "line",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "油泥资源化利用率",
				type: "line",
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][2],
			},
		]
	};
	$chart.init('#chart1', option);
}
//天然气开采废水排放情况
function chart2(data, ix){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			data:data.legend
		},
		color:['#3fe5f4','#2b88ff','#2b88ff'],
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
			areaStyle: {
				normal: {type: 'default',
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0.3,
						color: 'rgba(63,229,244,0.2)'
					}, {
						offset: 0.7,
						color: 'rgba(63,229,244,0.4)'
					}, {
						offset: 1,
						color: 'rgba(63,229,244, 1)'
					}], false)
				}
			},
			data: data.data[ix][0]
		},
		{
			name: '采出废水达标排放率',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
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
			data: data.data[ix][1]
		}]
	};
	$chart.init('#chart2', option);
}
//天然气开采其他污染物产生情况
function chart3(data, ix){
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		color:['#3ee4f3','#e45698','#2b88ff'],
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
			},
			min:"dataMin"
		}],
		series: [{
			name: '落地原油率',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
				},
			},
			data: data.data[ix][0]
		},
			{
				name: '油井伴生气外排率',
				type: 'line',
				smooth: true,
				symbol:'circle',
				showSymbol: false,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][1]
			}]
	};
	$chart.init('#chart3', option);
}
//全球天然气消费占比排名
function chart4(data, ix){
	var option = {
		tooltip: {
			trigger: 'item',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend:{
			data:data.legend
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
			data:data.xData,
		}],
		yAxis: [{
			name:'百万吨石油当量',
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
			name: '消费总量',
			type:'bar',
			barWidth:15,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(62,228,243,1)'
						}, {
							offset: 0.4,
							color: 'rgba(62,228,243,0.5)'
						}, {
							offset: 1,
							color: 'rgba(62,228,243,0.1)'
						}]
					),
					barBorderRadius: [3, 3, 0, 0]
				}
			},
			data: data.data[ix][0]
		},
		]
	};
	$chart.init('#chart4', option);
}
//天然气净化工艺情况
function chart5(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color:['#3ee4f3','#2b88ff','#4138e1'],
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
			boundaryGap: false,
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
				},
				min:"dataMin"
			}],
		series: [
			{
				name: "硫回收率",
				type: "line",
				areaStyle: {
					normal: {type: 'default',
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0.3,
							color: 'rgba(62,228,243,0.2)'
						}, {
							offset: 0.7,
							color: 'rgba(62,228,243,0.4)'
						}, {
							offset: 1,
							color: 'rgba(62,228,243, 1)'
						}], false)
					}
				},
				data: data.data[ix][0],
			},
			{
				name: "净化器合格率",
				type: "line",
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
				data: data.data[ix][1],
			},
			{
				name: "尾气达标排放率",
				type: "line",
				areaStyle: {
					normal: {type: 'default',
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0.3,
							color: 'rgba(65,56,225,0.2)'
						}, {
							offset: 0.7,
							color: 'rgba(65,56,225,0.4)'
						}, {
							offset: 1,
							color: 'rgba(65,56,225, 1)'
						}], false)
					}
				},
				data: data.data[ix][2],
			},
		]
	};
	$chart.init('#chart5', option);
}
//天然气净化资源综合利用情况
function chart6(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color:['#2b88ff','#40eaf9','#25e4a3'],
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
				name:'ug/m3',
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
				name: "单位潜硫量综合能耗",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "单位潜硫量脱硫剂消耗",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "中水回用率",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][2],
			},
		]
	};
	$chart.init('#chart6', option);
}
//天然气净化污染物产生情况
function chart7(data, ix){
	var option =  {
		legend: {
			data: data.legend,
		},
		color: ['#6ed5ff','#4138e1','#2874ff','#25e4a3','#af59ff'],
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
				name:'mg/L',
				nameGap:-1,
				nameTextStyle:{
					padding:[0,0,0,-45],
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
				name: "S02排放速率",
				type: "line",
				smooth: true,
				showSymbol:false,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][0],
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
				data: data.data[ix][1],
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
				data:data.data[ix][2],
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
				data: data.data[ix][3],
			},
		]
	};
	$chart.init('#chart7', option);
}