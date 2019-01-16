$(document).ready(function(){
	getdata('/pattern/gasIndex/chart1.json',chart1);
	getdata('/pattern/gasIndex/chart2.json',chart2);
	getdata('/pattern/gasIndex/chart3.json',chart3);
	getdata('/pattern/gasIndex/chart4.json',chart4);
	getdata('/pattern/gasIndex/main.json',main);
});
//探明结构储量分析
function chart1(data){
	var pieData = data[3];
	var option = {
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : ({d}%)"
		},
		color: ['#c487ee', '#deb140', '#49dff0', '#034079', '#6f81da', '#00ffb4','#0007ff'],
		series: [{
			name: '储量占比',
			type: 'pie',
			//roseType : 'radius',
			radius: ['30%','60%'],
			center: ["50%", "55%"], //圆心坐标
			labelLine: {
				length: 8,
				length2: 4
			},
			label: {
				normal: {
					show: true,
					position: 'outside',
					formatter: "{b}\n{c}%",
					textStyle: {
						color:'#fff',
						//fontSize: 8
					}
				},
				emphasis: {
					show: true,
					textStyle: {
						fontSize: 9,
						fontWeight: 'bold'
					}
				}
			},
			data: pieData
		}]
	};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}
//探明储量TOP10国分析
function chart2(data){
	var yData = data[2];
	var barData = data[3];
	var option = {
		tooltip: {
			show:"true",
			trigger: 'item',
			formatter:'{b}: {c}%',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		grid: {
			left: 15,
			right:15,
			top:'5%',
			bottom:'12%',
			containLabel: true
		},
		yAxis: {
			type: 'value',
			show: true,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false
			}
		},
		xAxis: [{
			type: 'category',
			position: "left",
			data: yData,
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				show: true,
				color:'#fff',
				rotate:-45,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 7
				},
			},
			splitLine: {
				show: false
			}
		}],
		series: [{
			name: '',
			type: 'bar',
			barWidth: 6,
			silent: false,
			itemStyle: {
				normal: {
					barBorderRadius: 10,
					color: {
						type: 'bar',
						colorStops: [{
							offset: 0,
							color: '#00ffa8' // 0% 处的颜色
						}, {
							offset: 1,
							color: '#ffea00' // 100% 处的颜色
						}],
						globalCoord: false, // 缺省为 false
					},
					/*label: {
						show: true,
						position: 'insideTop',
						formatter: '   ',
						backgroundColor: '#fff',
						distance: 0,
						borderColor: 'rgba(255, 234, 0, 0.5)',
						borderWidth: 8,
						borderRadius: 10,
						color: '#fff'
					}*/
				}
			},
			data: barData
		}]
	};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}
function xbar(d){
	for(var i = 0; i < d.length; i++){
		d[i] = d[i].length > 3 ? d[i].substr(0, 2) + '\n' + d[i].substring(2) : d[i];
	}
	return d;
}
//区域历史储产比趋势对比
function chart3(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	var lineData4 = data[6];
	var lineData5 = data[7];
	var lineData6 = data[8];
	var lineData7 = data[9];
	var option = {
		tooltip: {
			trigger: 'axis'
		},
		legend:{
			show:true,
			bottom : 5,
			type:'scroll',
			itemWidth: 16,
			itemHeight: 8,
			pageButtonItemGap:1,
			pageTextStyle:{
				color:'#fff',
			},
			textStyle:{
				color:'#fff',
				fontFamily: '微软雅黑',
				fontSize: 10,
			},
			data:data[0]
		},
		grid:{
			top:'10%',
			bottom:'20%',
			left:'5%',
			right:'5%',
			containLabel:true,
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
			data:xData
		},
		yAxis: {
			name:'年',
			nameGap:-5,
			nameTextStyle:{
				padding:[0,0,0,45],
				align:'center',
				color:'#fff',
			},
			type: 'value',
			splitNumber:3,
			//min:410,
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
		},
		series: [{
			name: '北美洲',
			type: 'line',
			smooth: true,
			symbol:'circle',
			showSymbol: false,
			itemStyle: {
				normal: {
					color: '#00FFFF'
				},
			},
			data: lineData1
		},
			{
				name: '中南美洲',
				type: 'line',
				smooth: true,//值为true折线平滑    值为false折线曲折
				symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
				showSymbol: false,//true 为拐点处有点  false 为没有
				itemStyle: {
					normal: {
						color: '#F0FFFF'
					},
				},
				data: lineData2
			},
			{
				name: '欧洲国家',
				type: 'line',
				smooth: true,//值为true折线平滑    值为false折线曲折
				symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
				showSymbol: false,//true 为拐点处有点  false 为没有
				itemStyle: {
					normal: {
						color: '#0000FF'
					},
				},
				data: lineData3
			},{
				name: '独联体',
				type: 'line',
				smooth: true,//值为true折线平滑    值为false折线曲折
				symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
				showSymbol: false,//true 为拐点处有点  false 为没有
				itemStyle: {
					normal: {
						color: '#FFD700'
					},
				},
				data: lineData4
			},
			{
				name: '中东国家',
				type: 'line',
				smooth: true,//值为true折线平滑    值为false折线曲折
				symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
				showSymbol: false,//true 为拐点处有点  false 为没有
				itemStyle: {
					normal: {
						color: '#FF6A6A'
					},
				},
				data: lineData5
			},
			{
				name: '非洲',
				type: 'line',
				smooth: true,//值为true折线平滑    值为false折线曲折
				symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
				showSymbol: false,//true 为拐点处有点  false 为没有
				itemStyle: {
					normal: {
						color: '#A020F0'
					},
				},
				data: lineData6
			},{
				name: '亚太地区',
				type: 'line',
				smooth: true,//值为true折线平滑    值为false折线曲折
				symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
				showSymbol: false,//true 为拐点处有点  false 为没有
				itemStyle: {
					normal: {
						color: '#FF7F00'
					},
				},
				data: lineData7
			}]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}
//近10年新增探明储量的贡献分布
function chart4(data){
	var xData = data[2];
	var barData = data[3];
	var option = {
		grid: {
			top:'10%',
			left: '3%',
			right: '4%',
			bottom: '13%',
			containLabel: true
		},
		tooltip:{},
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
			//boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
			axisTick: {
				color: '#0177d4',
				show: true
			},
			splitArea: {
				show: false
			},
			axisLabel: {
				inside: false,
				rotate:-45,
				textStyle: {
					color: '#fff',
					fontWeight: 'normal',
					fontSize: 8
				},
			},
			data: xData,
		}],
		yAxis: [{
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
			name:'储量增量贡献占比',
			type: 'bar',
			data: barData,
			barWidth: '40%', //柱子宽度
			//barGap: 1, //柱子之间间距
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
						offset: 0,
						color: '#00fcae'
					}, {
						offset: 1,
						color: '#006388'
					}]),
					opacity: 1,
				}
			}
		}]
	};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function main(data){
var value3 = data[0];

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
		timeline: {
			axisType: 'category',
			orient: 'vertical',
			autoPlay: true,
			inverse: true,
			playInterval: 5000,
			left: null,
			right: -105,
			top: 20,
			bottom: 20,
			width: 46,
			data: ['2016',]
		},
		baseOption: {
			title:[{
				text:'各国储量(万亿立方米)',
				bottom:125,
				left:'14%',
				textStyle: {
					color: '#fff',
					fontSize:10,
				}
			},{
                text:'世界天然气储量分布  (2017)',
                top:'3%',
                left:'center',
                textStyle: {
                    color: '#29B8FF',
                    fontSize:16,
                }
            }],
			visualMap: {
				type: 'piecewise', //分段型。
				splitNumber: 6,
				inverse: true,
				max:36,
				 pieces: [
		                    {
		                    max: 2.99,
		                    label:'小于3',
		                    color: '#b1e3f9'
		                }, {
		                    min: 3,
		                    max: 5.99,
		                    label:'3至6',
		                    color: '#60daf7'
		                }, {
		                    min: 6,
		                    max: 8.99,
		                    label:'6至9',
		                    color: '#089ff7'
		                }, {
		                    min: 9,
		                    label:'大于9',
		                    color: '#1399d6'
		                }],
				left: '14%',
				top: 'bottom',
				itemWidth:16,
				itemHeight:10,
				itemGap:5,
				textStyle: {
					color: '#fff',
					fontSize:10,
				}
			},
			series: [{
				type: 'map',
				map: 'world',
				roam: true,
				itemStyle:{
					emphasis:{label:{show:false}}
				},
				nameMap: nameMap

			}]
		},

		options: [{
			tooltip: {
				trigger: 'item',
				position: ['50%', '50%'],
				formatter: function (params) {
					var value = (params.value) || 0;
					//value = value.toFixed(5);toFixed(3)控制小数位数
					value = value;
					if(params.name==''){
						return '无';
					}
					return  params.name + ' : ' + value+' 万亿立方米';
				}
			},
			series: {
				data: value3
			}
		}, ]
	};
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}