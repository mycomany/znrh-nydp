$(document).ready(function(){
	main();
	chart1();
	chart2();
	getdata('/pattern/supply/chart3.json',chart3);
	chart4();
	chart5();
});

function chart1(){
	var option = {
		textStyle: {
			color: '#38b8ff'
		},
		color: ['#16c2af', '#ffc751', '#4162ff', '#ff6e72', '#9692ff'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow'
			}
		},
		legend: {
			show:true,
			type:'scroll',
			bottom : '2%',
			itemGap: 6, //图例每项之间的间隔
			itemWidth: 16, //图例宽度
			itemHeight: 8, //图例高度
			textStyle: {
				color:'#fff',
				fontFamily: '微软雅黑',
				fontSize: 10,
			},
			pageButtonItemGap:1,
			pageTextStyle:{
				color:'#fff',
			},
			data: ['北美洲', '中美洲', '欧洲', '独联体', '中东', '非洲', '亚太'],
		},
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		yAxis: [{
			type: 'value',
			splitNumber:3,
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
			//去掉辅助线
			splitLine: {
				show: false
			}
		}],
		xAxis: [{
			type: 'category',
			data: ['1990年','1995年','2000年','2005年','2010年','2015年','2016年','2017年'],
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
			splitLine: {
				show: false
			}
		}],
		series: [{
			name: '北美洲',
			type: 'bar',
			stack: '总量',
			barWidth: '30%',
			data: [29.6,29.19,29.89,28.98,25.86,24.39,24.24,23.99]
		},
			{
				name: '中美洲',
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: [5.5,6.25,6.46,6.25,7.14,7.38,7.04,6.90]
			},
			{
				name: '欧洲',
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: [23.1,22.33,21.24,20.10,17.98,15.71,15.78,15.82]
			},
			{
				name: '独联体',
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: [12.5,6.31,4.67,4.39,4.39,4.42,4.45,4.40]
			},
			{
				name: '中东',
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: [5.3,6.60,6.62,7.53,8.76,9.24,9.13,9.09]
			},
			{
				name: '非洲',
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: [3.0,3.18,3.30,3.52,4.04,4.22,4.23,4.25]
			},
			{
				name: '亚太',
				type: 'bar',
				stack: '总量',
				barWidth: '30%',
				data: [21.0,26.15,27.81,29.23,31.83,34.63,35.13,35.56]
			}
		]
	};
	
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
    setH('chart1');
}


function chart2(){
	var option = {
		color: ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f"],
		textStyle: {
			color: '#38b8ff'
		},
		tooltip : {
			trigger: 'axis'
		},
		legend: {
			show:true,
			type:'scroll',
			bottom : '2%',
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16, //图例宽度
			itemHeight: 8, //图例高度
			textStyle: {
				color:'#fff',
				fontFamily: '微软雅黑',
				fontSize: 10,
			},
			pageButtonItemGap:1,
			pageTextStyle:{
				color:'#fff',
			},
			data:['石油','天然气','煤炭','核能','水电','其他可再生能源'],
		},
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		xAxis : [
			{
				type : 'category',
				boundaryGap : false,
				data : ['1965年','1966年','1967年','1968年','1969年','1970年','1971年','1972年','1973年','1974年','1975年','1976年','1977年','1978年','1979年','1980年','1981年','1982年','1983年','1984年','1985年','1986年','1987年','1988年','1989年','1990年','1991年','1992年','1993年','1994年','1995年','1996年','1997年','1998年','1999年','2000年','2001年','2002年','2003年','2004年','2005年','2006年','2007年','2008年','2009年','2010年','2011年','2012年','2013年','2014年','2015年','2016年','2017年'],
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
				splitLine: {
					show: false
				}
			}
		],
		yAxis : [
			{
				type: 'value',
				name:'             百万吨油当量',
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
					}
				},
				//单位
				//去掉辅助线
				splitLine: {
					show: false
				}
			}
		],
		series : [
			{
				name:'石油',
				type:'line',
				symbol:'circle',
				showSymbol: false,
				stack: '总量',
				areaStyle: {normal: {}},
				data:[1552.4,1671.7,1791.1,1944.4,2109.6,2291.5,2427.7,2613.9,2818.1,2777.3,2749.2,2929.1,3028.8,3125.9,3177.4,3053.0,2943.2,2852.8,2835.9,2901.7,2905.7,2993.9,3055.2,3158.7,3210.9,3244.8,3247.0,3303.7,3282.8,3355.3,3401.2,3480.7,3572.2,3591.4,3655.2,3700.7,3733.5,3765.8,3852.4,3998.6,4051.2,4104.2,4167.8,4148.8,4077.6,4208.9,4252.4,4304.9,4359.3,4394.7,4475.8,4557.3,4621.9]
			},
			{
				name:'天然气',
				type:'line',
				symbol:'circle',
				showSymbol: false,
				stack: '总量',
				areaStyle: {normal: {}},
				data:[542.3,590.9,634.4,691.9,759.7,826.7,884.8,933.7,978.0,1001.9,1002.4,1062.0,1096.9,1142.9,1214.3,1224.3,1237.8,1244.5,1264.5,1368.2,1398.4,1412.0,1486.6,1554.9,1625.4,1675.5,1718.4,1726.3,1743.3,1754.5,1816.1,1904.0,1898.7,1933.4,1986.9,2065.3,2095.2,2158.9,2215.8,2300.3,2367.8,2437.5,2543.4,2607.2,2534.6,2730.8,2786.8,2860.8,2899.0,2922.3,2987.3,3073.2,3156.0]
			},
			{
				name:'煤炭',
				type:'line',
				symbol:'circle',
				showSymbol: false,
				stack: '总量',
				areaStyle: {normal: {}},
				data:[1388.8,1404.3,1381.9,1402.6,1446.8,1467.3,1459.2,1475.7,1519.6,1520.9,1550.4,1606.9,1654.5,1673.0,1750.6,1793.3,1818.5,1838.7,1895.1,1977.4,2055.6,2079.4,2162.1,2226.1,2248.7,2222.3,2197.9,2190.8,2199.6,2212.4,2224.2,2280.0,2282.9,2265.8,2278.0,2356.3,2394.8,2488.1,2706.4,2893.9,3105.7,3265.7,3451.8,3500.6,3447.0,3605.6,3778.9,3794.5,3865.3,3862.2,3765.0,3706.0,3731.5]
			},
			{
				name:'核能',
				type:'line',
				symbol:'circle',
				showSymbol: false,
				stack: '总量',
				areaStyle: {normal: {}},
				data:[5.8,7.8,9.6,11.9,14.4,17.7,24.9,34.1,45.9,59.6,82.4,98.1,121.2,140.1,144.7,161.0,189.2,207.4,232.9,281.6,337.0,360.9,392.6,428.0,440.2,452.7,474.4,478.0,494.4,503.7,525.5,544.6,540.9,550.2,571.2,584.0,600.5,610.1,597.7,623.9,626.6,634.4,621.5,619.5,610.8,626.2,600.0,559.5,563.8,575.0,582.8,591.2,596.4]
			},
			{
				name:'水电',
				type:'line',
				symbol:'circle',
				showSymbol: false,
				stack: '总量',
				label: {
					normal: {
						//show: true,
						position: 'top'
					}
				},
				areaStyle: {normal: {}},
				data:[208.1,223.2,228.4,239.6,254.0,265.8,276.4,288.9,292.5,321.1,325.9,324.8,333.2,359.5,377.3,384.4,390.4,406.6,425.2,439.2,447.9,454.1,460.4,475.0,472.1,489.0,500.8,500.4,530.4,533.9,563.2,571.0,581.4,586.2,590.2,600.7,585.3,596.0,595.0,635.4,660.3,685.7,696.9,738.5,736.2,777.5,792.7,830.7,859.4,879.7,880.5,913.3,918.6]
			},
			{
				name:'其他可再生能源',
				type:'line',
				symbol:'circle',
				showSymbol: false,
				stack: '总量',
				label: {
					normal: {
						//show: true,
						position: 'top'
					}
				},
				areaStyle: {normal: {}},
				data:[4.1,4.5,4.5,5.0,5.3,5.8,6.3,6.8,7.3,7.7,7.8,8.7,9.2,9.7,10.4,11.2,12.0,13.9,15.4,17.2,17.6,19.4,20.8,21.4,24.2,27.3,28.5,30.7,31.9,33.4,35.0,36.1,39.3,41.9,45.1,49.3,52.2,58.8,63.9,73.0,82.1,92.9,107.0,123.9,143.7,170.5,203.5,238.7,282.6,320.1,368.8,417.4,486.8]
			}
		]
	};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
    setH('chart2');
}

function chart3(data){
	var xData = data[1];
	var lineData1 = data[2];
	var lineData2 = data[3];
	var barData = data[4];
	var option = {
		color: ["#fb7293",'#61ffff', "#DC143C", "#8A2BE2", "#e7bcf3", "#00BFFF", "#8378EA", "#96BFFF"],
		textStyle: {
			color: '#38b8ff'
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
			type:'scroll',
			bottom : '2%',
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16, //图例宽度
			itemHeight: 8, //图例高度
			textStyle: {
				color:'#fff',
				fontFamily: '微软雅黑',
				fontSize: 10,
			},
			pageButtonItemGap:1,
			pageTextStyle:{
				color:'#fff',
			},
			data: ['石油','天然气','煤炭','核能','水电','其他可再生能源'],
		},
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		yAxis:[{
			type: 'value',
			splitNumber:4,
			//name: '人数',
			min: 0,
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
				},
				formatter: '{value}%'
			},
			//单位
			//去掉辅助线
			splitLine: {
				show: false
			}
		}],
		xAxis: [{
			type: 'category',
			data: ['美国', '日本', '印度', '中国', '欧洲'],
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
			splitLine: {
				show: false
			}
		}],
		series: [
			{
			name: '石油',
			type: 'bar',
			stack: '人数',
			barWidth: '30%',
			label: {
				normal: {
					//show: true,
					position: 'insideRight'
				}
			},
			data: [40.87,41.26,29.47,19.42,37.13]
		}, {
			name: '天然气',
			type: 'bar',
			stack: '人数',
			barWidth: '30%',
			label: {
				normal: {
					//show: true,
					position: 'insideRight'
				}
			},
			data: [28.45,22.06,6.18,6.60,23.21]
		}, {
			name: '煤炭',
			type: 'bar',
			stack: '人数',
			barWidth: '30%',
			label: {
				normal: {
					//show: true,
					position: 'insideRight'
				}
			},
			data: [14.86,26.41,56.25,60.42,15.05]
		}, {
			name: '核能',
			type: 'bar',
			stack: '人数',
			barWidth: '30%',
			label: {
				normal: {
					//show: true,
					position: 'insideRight'
				}
			},
			data: [8.58,1.44,1.12,1.79,9.77]
		}, {
			name: '水电',
			type: 'bar',
			stack: '人数',
			barWidth: '30%',
			label: {
				normal: {
					//show: true,
					position: 'insideRight'
				}
			},
			data: [3.00,3.93,4.07,8.35,6.62]
		}, {
			name: '其他可再生能源',
			type: 'bar',
			stack: '人数',
			barWidth: '30%',
			label: {
				normal: {
					//show: true,
					position: 'insideRight'
				}
			},
			data: [4.24,4.90,2.89,3.41,8.22]
		}]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
    setH('chart3');
}

function chart4(){
	var option = {
		textStyle: {
			color: '#38b8ff'
		},
		color: ['#16abfe','#ff7070'],
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		legend: {
			show:true,
			bottom : '2%',
			type:'scroll',
			bottom : '2%',
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16, //图例宽度
			itemHeight: 8, //图例高度
			textStyle: {
				color:'#fff',
				fontFamily: '微软雅黑',
				fontSize: 10,
			},
			pageButtonItemGap:1,
			pageTextStyle:{
				color:'#fff',
			},
			data: ['消费量', '增长率','占比'],
		},
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		xAxis: [{
			type: 'category',
			data: ['美国','中国','印度','日本','沙特阿拉伯','俄罗斯','巴西','韩国','德国','加拿大'],
			axisPointer: {
				type: 'shadow'
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
			splitLine: {
				show: false
			}
		}],
		yAxis: [
			{
				type: 'value',
				splitNumber:3,
				name:'             百万吨油当量',
				nameGap:-5,
				max:1200,
				nameTextStyle:{
					padding:[0,0,0,45],
					align:'center',
					color:'#fff',
				},
				//name: '消费量',
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
				splitLine: {
					show: false
				}
			},
			{
				type: 'value',
				//name: '增长率',
				splitNumber:3,
				max:25,
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
				//去掉辅助线
				splitLine: {
					show: false
				}
			}
		],
		series: [{
			name: '消费量',
			type: 'bar',
			barWidth: '30%',
			yAxisIndex: 0,
			data: [870.1,595.5,221.8,181.3,165.8,147.8,139.6,122.6,114.7,103.6]
		},

			{
				name: '增长率',
				type: 'line',
				yAxisIndex: 1,
				smooth: true,
				data: [0.9,4.0,2.7,-1.4,-0.6,0.5,-0.2,0.3,2.4,1.7]
			},

			{
				name: '占比',
				type: 'line',
				yAxisIndex: 1,
				smooth: true,
				data: [19.5,13.3,5.0,4.1,3.7,3.3,3.1,2.7,2.6,2.3]
			}
		]
	};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
    setH('chart4');
}

function main(){
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
	/*var ddd = [{name:"其他中东国家",value:["巴林","约旦","黎巴嫩","叙利亚","也门","巴勒斯坦","利比亚","突尼斯","苏丹","毛里塔尼亚","索马里"],data:0.25},
	           {name:"其他亚太国家",value:["文莱","柬埔寨","斐济","基里巴斯","朝鲜","老挝","巴布亚新几内亚","萨摩亚","所罗门群岛","东帝汶","汤加","瓦努阿图"],data:0.06},
	           {name:"其他加勒比海国家",value:["古巴","多米尼加","海地","牙买加","巴巴多斯","安提瓜和巴布达","巴哈马","格林纳达"],data:0.78},
	           {name:"其他南美国家",value:["圭亚那","法属圭亚那","苏里南","玻利维亚","乌拉圭","巴拉圭"],data:0.43},
	           {name:"其他独联体国家",value:["亚美尼亚","格鲁吉亚","吉尔吉斯斯坦","摩尔多瓦","塔吉克斯坦"],data:0.93},
	           {name:"其他非洲国家",value:["卢旺达","布隆迪","乌干达","埃塞俄比亚","马达加斯加","海地","肯尼亚","索马里","厄立特里亚","布基纳法索","马拉维","塞拉利昂","坦桑尼亚","尼日利亚","尼日尔","毛里塔尼亚","喀麦隆","贝宁","马里","刚果民主共和国","几内亚","利比里亚","多哥","毛里求斯","莫桑比克","斯威士兰","乍得","塞内加尔","津巴布韦","科特迪瓦","赞比亚","突尼斯","加纳","中非共和国","安哥拉","冈比亚","刚果共和国","苏丹","加蓬","利比亚","纳米比亚","博茨瓦纳","南苏丹","索马里兰","赤道几内亚","几内亚比绍","西撒哈拉","莱索托","吉布提"],data:0.84}
	           ];
	if(!params.name) return '无';
	//alert(JSON.stringify(params));
	var value = '';
	for (var i = 0; i < 6; i++) {
		if ($.inArray(params.name, dad[i].value)!=-1) {
			value = dad[i].name+': '+dad[i].data+'吨油当量';
		}
	}
	//alert(JSON.stringify(value));
	if (value == '') {
		value =params.name + ' : ' +params.value+'吨油当量';
	}
	//var value = (params.value + '').split('.');
	value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
		+ '.' + value[1]+'吨油当量';
	return params.seriesName + '<br/>'+ value;*/
	var option = {
		title:[{
			text:'人均消费量（吨）',
			bottom:'24%',
			left:'10%',
			textStyle: {
				color: '#fff',
				fontSize:10,
			}
		},{
            text:'世界石油消费分布地图  (2017)',
            top:'3%',
            left:'center',
            textStyle: {
                color: '#59EBE8',
                fontSize:16,
            }
        }],
		tooltip: {
			trigger: 'item',
			formatter: function (params) {
				if(!params.name) return '无';
				
				var value = (params.value + '').split('.');
				value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
					+ '.' + value[1]+'吨';
				return params.seriesName + '<br/>' + params.name + ' : ' + value;
			}
		},
		 legend: [{
		    	show:true,
	            bottom : '0%',
	            icon:'circle',
	            itemGap: 12, //图例每项之间的间隔
	            textStyle: {
	                color:'#fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
		        data: ['年度总消费新增量','年度总消费新增量前三'],
		    }],
		visualMap: [
			{
				left:'10%',
				type:'piecewise',
				pieces: [
					{
						max: 0.749,
						label:'<0.75',
						color: '#9eaefb'
					}, {
						max: 1.49,
						label:'0.75-1.5',
						color: '#758df9'
					}, {
						max: 2.249,
						label:'1.5-2.25',
						color: '#5976f9'
					}, {
						max: 2.99,
						label:'2.25-3',
						color: '#4335d2'
					}, {
						label:'≥3',
						color: '#1503c4'
					}
				],
				seriesIndex:0,
				inRange:{
					color: ["#070093", "#1482e5","#b9e1f2", "#ffffff"],
				},
				itemWidth:16,
				itemHeight:10,
				itemGap:5,
				textStyle: {
					color: '#fff',
					fontSize:10,
				},
			},
		],
		geo: {
			show: true,
			map: 'world',
			aspectScale: 1.2, //长宽比
			top:'20%',
			zoom:1.2,
			label: {
				normal: {
					show: false,
					color: "#fff"
				},
				emphasis: {
					show: true,
					color: "#fff",
					fontSize: 18,
					fontWeight: "bold"
				}
			},
		},
		series: [
			{
				name: '人均消费量',
				type: 'map',
				mapType: 'world',
				top:'20%',
				showLegendSymbol:false,
				aspectScale: 1.2, //长宽比
				zoom:1.2,
				roam: false,
				nameMap: nameMap,
				label: {
					normal: {
						show: false,
						color: "#fff"
					},
					emphasis: {
						show: false,
					}
				},
				data:[{"name":"美国","value":2.68},
					{"name":"中国","value":0.42},
					{"name":"印度","value":0.17},
					{"name":"日本","value":1.42},
					{"name":"沙特阿拉伯","value":5.03},
					{"name":"俄罗斯","value":1.03},
					{"name":"巴西","value":0.67},
					{"name":"韩国","value":2.40},
					{"name":"德国","value":1.40},
					{"name":"加拿大","value":2.83},
					{"name":"墨西哥","value":0.64},
					{"name":"伊朗","value":1.00},
					{"name":"法国","value":1.18},
					{"name":"新加坡","value":12.98},
					{"name":"印度尼西亚","value":0.28},
					{"name":"英国","value":1.11},
					{"name":"西班牙","value":1.37},
					{"name":"泰国","value":0.88},
					{"name":"意大利","value":0.99},
					{"name":"澳大利亚","value":2.05},
					{"name":"土耳其","value":0.60},
					{"name":"中国台湾","value":2.01},
					{"name":"阿联酋","value":4.54},
					{"name":"荷兰","value":2.32},
					{"name":"伊拉克","value":1.00},
					{"name":"埃及","value":0.39},
					{"name":"马来西亚","value":1.11},
					{"name":"其他加拉比海国家","value":0.78},
					{"name":"西非","value":0.14},
					{"name":"比利时","value":2.73},
					{"name":"阿根廷","value":0.70},
					{"name":"波兰","value":0.80},
					{"name":"东非","value":0.28},
					{"name":"巴基斯坦","value":0.14},
					{"name":"南非","value":0.49},
					{"name":"其他中东国家","value":0.25},
					{"name":"委内瑞拉","value":0.73},
					{"name":"其他亚太地区国家","value":0.06},
					{"name":"越南","value":0.23},
					{"name":"中美洲","value":0.84},
					{"name":"中国香港","value":2.88},
					{"name":"菲律宾","value":0.20},
					{"name":"科威特","value":4.67},
					{"name":"阿尔及利亚","value":0.45},
					{"name":"智利","value":0.98},
					{"name":"其他欧洲国家","value":0.04},
					{"name":"哥伦比亚","value":0.33},
					{"name":"希腊","value":1.38},
					{"name":"瑞典","value":1.52},
					{"name":"其他北非国家","value":0.82},
					{"name":"哈萨克斯坦","value":0.77},
					{"name":"奥地利","value":1.48},
					{"name":"摩洛哥","value":0.36},
					{"name":"中非","value":2.75},
					{"name":"卡塔尔","value":4.66},
					{"name":"葡萄牙","value":1.18},
					{"name":"秘鲁","value":0.36},
					{"name":"以色列","value":1.35},
					{"name":"厄瓜多尔","value":0.65},
					{"name":"瑞士","value":1.24},
					{"name":"挪威","value":1.85},
					{"name":"罗马尼亚","value":0.50},
					{"name":"乌克兰","value":0.22},
					{"name":"其他南美国家","value":0.43},
					{"name":"捷克共和国","value":0.89},
					{"name":"芬兰","value":1.69},
					{"name":"阿曼","value":1.93},
					{"name":"新西兰","value":1.74},
					{"name":"丹麦","value":1.40},
					{"name":"匈牙利","value":0.78},
					{"name":"孟加拉国","value":0.04},
					{"name":"爱尔兰","value":1.49},
					{"name":"土库曼斯坦","value":1.21},
					{"name":"白俄罗斯","value":0.70},
					{"name":"斯里兰卡","value":0.24},
					{"name":"保加利亚","value":0.67},
					{"name":"阿塞拜疆","value":0.43},
					{"name":"斯洛伐克","value":0.77},
					{"name":"其他独联体国家","value":0.93},
					{"name":"克罗地亚","value":0.76},
					{"name":"乌兹别克斯坦","value":0.10},
					{"name":"立陶宛","value":1.05},
					{"name":"其他南非国家","value":0.02},
					{"name":"卢森堡","value":4.69},
					{"name":"塞浦路斯","value":2.22},
					{"name":"斯洛文尼亚","value":1.18},
					{"name":"特立尼达和多巴哥","value":1.57},
					{"name":"拉脱维亚","value":0.94},
					{"name":"爱沙尼亚","value":1.08},
					{"name":"马其顿","value":0.43},
					{"name":"冰岛","value":2.54},
					
					{"name":"巴林","value":0.25},{"name":"约旦","value":0.25},{"name":"黎巴嫩","value":0.25},{"name":"叙利亚","value":0.25},{"name":"也门","value":0.25},{"name":"巴勒斯坦","value":0.25},{"name":"利比亚","value":0.25},{"name":"突尼斯","value":0.25},{"name":"苏丹","value":0.25},{"name":"毛里塔尼亚","value":0.25},{"name":"索马里","value":0.25},{"value":0.25},
					
					{"name":"文莱","value":0.06},{"name":"柬埔寨","value":0.06},{"name":"斐济","value":0.06},{"name":"基里巴斯","value":0.06},{"name":"朝鲜","value":0.06},{"name":"老挝","value":0.06},{"name":"巴布亚新几内亚","value":0.06},{"name":"萨摩亚","value":0.06},{"name":"所罗门群岛","value":0.06},{"name":"东帝汶","value":0.06},{"name":"汤加","value":0.06},{"name":"瓦努阿图","value":0.06},
					
					{"name":"古巴","value":0.78},{"name":"多米尼加","value":0.78},{"name":"海地","value":0.78},{"name":"牙买加","value":0.78},{"name":"巴巴多斯","value":0.78},{"name":"安提瓜和巴布达","value":0.78},{"name":"巴哈马","value":0.78},{"name":"格林纳达","value":0.78},
					
					{"name":"圭亚那","value":0.43},{"name":"法属圭亚那","value":0.43},{"name":"苏里南","value":0.43},{"name":"玻利维亚","value":0.43},{"name":"乌拉圭","value":0.43},{"name":"巴拉圭","value":0.43},
					
					{"name":"亚美尼亚","value":0.93},{"name":"格鲁吉亚","value":0.93},{"name":"吉尔吉斯斯坦","value":0.93},{"name":"摩尔多瓦","value":0.93},{"name":"塔吉克斯坦","value":0.93},
					
					{"name":"卢旺达","value":0.84},{"name":"布隆迪","value":0.84},{"name":"乌干达","value":0.84},{"name":"埃塞俄比亚","value":0.84},{"name":"马达加斯加","value":0.84},{"name":"海地","value":0.84},{"name":"肯尼亚","value":0.84},{"name":"索马里","value":0.84},{"name":"厄立特里亚","value":0.84},{"name":"布基纳法索","value":0.84},{"name":"马拉维","value":0.84},{"name":"塞拉利昂","value":0.84},{"name":"坦桑尼亚","value":0.84},{"name":"尼日利亚","value":0.84},{"name":"尼日尔","value":0.84},{"name":"毛里塔尼亚","value":0.84},{"name":"喀麦隆","value":0.84},{"name":"贝宁","value":0.84},{"name":"马里","value":0.84},{"name":"刚果民主共和国","value":0.84},{"name":"几内亚","value":0.84},{"name":"利比里亚","value":0.84},{"name":"多哥","value":0.84},{"name":"毛里求斯","value":0.84},{"name":"莫桑比克","value":0.84},{"name":"斯威士兰","value":0.84},{"name":"乍得","value":0.84},{"name":"塞内加尔","value":0.84},{"name":"津巴布韦","value":0.84},{"name":"科特迪瓦","value":0.84},{"name":"赞比亚","value":0.84},{"name":"突尼斯","value":0.84},{"name":"加纳","value":0.84},{"name":"中非共和国","value":0.84},{"name":"安哥拉","value":0.84},{"name":"冈比亚","value":0.84},{"name":"刚果共和国","value":0.84},{"name":"苏丹","value":0.84},{"name":"加蓬","value":0.84},{"name":"利比亚","value":0.84},{"name":"纳米比亚","value":0.84},{"name":"博茨瓦纳","value":0.84},{"name":"南苏丹","value":0.84},{"name":"索马里兰","value":0.84},{"name":"赤道几内亚","value":0.84},{"name":"几内亚比绍","value":0.84},{"name":"西撒哈拉","value":0.84},{"name":"莱索托","value":0.84},{"name":"吉布提","value":0.84}
				]
			},
			{
				name:"去年增长量",
				coordinateSystem: 'geo',
				type:'scatter',
				showLegendSymbol:false,
				tooltip:{
					formatter:function(o){
						return o.name + '<br />年度总消费新增量：'+ o.value[2]+'百万吨';
					},
				},
				label: {
					normal: {
						show: true,
						color:'#fff',
						formatter:function(obj){
							return obj['value'][2];
						}
					},
					emphasis: {
						show: false
					}
				},
				itemStyle: {
					color:'#fed312',
					emphasis: {
						borderColor: '#fd4500',
						borderWidth: 1
					}
				},
				symbolSize: function (val) {
					if(val[2]<5)
						return 30;
					else if(val[2]<10)
						return 45;
					return 60;
				},
				data:[
					    {"name":"中国","value":["114.199","40.124","21.23"], "itemStyle":{"color":'#fd4500'} },
						{"name":"美国","value":["-91.408722","33.01","5.69"], "itemStyle":{"color":'#fd4500'} },
						{"name":"印度","value":["70.9211","20.7131","5.05"], "itemStyle":{"color":'#fd4500'} },
						{"name":"伊朗","value":["56.2688","26.9487","3.91"]},
						{"name":"西非","value":["7.20603","5.42706","3.74"]},
						{"name":"印度尼西亚","value":["121.999","-1.57","3.07"]},
						{"name":"德国","value":["10.6347","51.2678","2.58"]},
						{"name":"新加坡","value":["103.819821","1.26418","2.53"]},
						{"name":"中国香港","value":["114.152153","22.2893","2.50"]},
						{"name":"波兰","value":["17.9777","53.0968","2.46"]},
						{"name":"澳大利亚","value":["153.3145","-24.9584","1.89"]},
						{"name":"泰国","value":["100.60675","13.91258","1.84"]},
						{"name":"土耳其","value":["34.53455","38.7718","1.67"]},
						{"name":"伊拉克","value":["44.404167","31.9916","1.61"]},
						{"name":"加拿大","value":["-104.731785","55.56","1.61"]},
						{"name":"其他亚太地区国家","value":["110.532656","2.840552","1.48"]},
						{"name":"东非","value":["30.430094","19.1538","1.31"]}
				]
			},{
	        	type:'pie',
	        	radius: 0,
	        	center: ['-30%', '-50%'],
	        	color: ["rgba(254,211,18,0.8)", "rgba(253,69,0,0.8)"],
	        	 itemStyle:{
	                 normal: {
	                     show:false,
	                },
	                emphasis: {
	                	color: "rgba(254,211,18,0)",
	                	show:false
	                }
	            },
	            label: {
	                normal: {
	                     show:false
	                },
	                emphasis: {
	                	color: "rgba(254,211,18,0)",
	                	show:false
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                	color: "rgba(254,211,18,0)",
	                	show:false
	                }
	            },
	        	data:[{name:"年度总消费新增量",value:1},
	        	      {name:"年度总消费新增量前三",value:1}
	        	      ]
	        }
		]
	};
var myChart = echarts.init($('#main')[0]);
myChart.setOption(option);
setH('main');
}

/*var  othe = [["中国","朝鲜","蒙古","越南","泰国","柬埔寨","尼泊尔","缅甸","印度","斯里兰卡","巴基斯坦","塔吉克斯坦","吉尔吉斯斯坦","乌兹别克斯坦","土库曼斯坦","哈萨克斯坦","老挝","阿富汗","菲律宾","韩国","伊拉克","孟加拉国","伊朗","土耳其","叙利亚","阿联酋","马来西亚","日本","以色列","卡塔尔","沙特阿拉伯","科威特","阿曼","阿塞拜疆","不丹","约旦","也门","东帝汶"],
             ["俄罗斯","波兰","希腊","马其顿","阿尔巴尼亚","西班牙","克罗地亚","瑞士","英国","爱尔兰","意大利","荷兰","黑山","斯洛文尼亚","德国","卢森堡","葡萄牙","塞尔维亚","法国","奥地利","捷克共和国","斯洛伐克","拉脱维亚","挪威","比利时","丹麦","匈牙利","瑞典","罗马尼亚","保加利亚","立陶宛","爱沙尼亚","白俄罗斯","摩尔多瓦","芬兰","乌克兰","科索沃","波黑"],
             ["哥斯达黎加","萨尔瓦多","多米尼加","危地马拉","洪都拉斯","巴拿马","古巴","牙买加","墨西哥","波多黎各","特立尼达和多巴哥","伯利兹","加拿大","美国","巴哈马","格陵兰","哥伦比亚","尼加拉瓜","厄瓜多尔","秘鲁","委内瑞拉","玻利维亚","巴西","智利","苏里南","乌拉圭","巴拉圭","圭亚那","阿根廷"],
             ["卢旺达","布隆迪","乌干达","埃塞俄比亚","马达加斯加","海地","肯尼亚","索马里","厄立特里亚","布基纳法索","马拉维","塞拉利昂","坦桑尼亚","尼日利亚","尼日尔","毛里塔尼亚","喀麦隆","贝宁","马里","刚果民主共和国","几内亚","利比里亚","多哥","毛里求斯","莫桑比克","斯威士兰","乍得","塞内加尔","津巴布韦","科特迪瓦","赞比亚","突尼斯","加纳","中非共和国","安哥拉","冈比亚","刚果共和国","苏丹","加蓬","利比亚","纳米比亚","博茨瓦纳","南苏丹","索马里兰","赤道几内亚","几内亚比绍","西撒哈拉","莱索托","吉布提"],
             ["澳大利亚","巴布亚新几内亚","斐济","新喀里多尼亚","新西兰","北马里亚纳"]];
var yz = ["中国","印度","日本","沙特阿拉伯","韩国","伊朗","泰国","土耳其","阿联酋","伊拉克","马来西亚","巴基斯坦","越南","菲律宾","科威特","哈萨克斯坦","卡塔尔","以色列","阿曼","孟加拉国","土库曼斯坦","斯里兰卡","阿塞拜疆","乌兹别克斯坦"];
var oz = ["俄罗斯","德国","法国","英国","西班牙","意大利","荷兰","比利时","波兰","希腊","瑞典","奥地利","葡萄牙","瑞士","挪威","罗马尼亚","乌克兰","捷克共和国","芬兰","丹麦","匈牙利","爱尔兰","白俄罗斯","保加利亚","斯洛伐克","克罗地亚","立陶宛","卢森堡","斯洛文尼亚","拉脱维亚","爱沙尼亚","马其顿"];
var mz = ["美国","巴西","加拿大","墨西哥","阿根廷","委内瑞拉","智利","哥伦比亚","秘鲁","厄瓜多尔","特立尼达和多巴哥"];
var fz = ["埃及","南非","阿尔及利亚","摩洛哥"];
*/

function chart5(){
	/*var dds = [];
	for (var i = 0; i < ddd[5].value.length; i++) {
		var ss = {};
		ss.name = ddd[5].value[i];
		ss.value = 0.84;
		dds.push(ss);
	}
	alert(JSON.stringify(dds));*/
	
	//json数据
	var option = {
		color:['#61ffff','#238cac','#eee8aa','#fdd312'],
		textStyle: {
			color: '#38b8ff'
		},
		tooltip: {
			trigger: 'axis',

		},
		legend: {
			show:true,
			bottom : '2%',
			type:'scroll',
			bottom : '2%',
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16, //图例宽度
			itemHeight: 8, //图例高度
			textStyle: {
				color:'#fff',
				fontFamily: '微软雅黑',
				fontSize: 10,
			},
			pageButtonItemGap:1,
			pageTextStyle:{
				color:'#fff',
			},
			data:["OECD","中国","其他亚洲国家","世界其他地区"]
		},
		grid: {
			left: 10,
			right:10,
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		xAxis: {
			type: 'category',
			data: ["原油","天然气","煤炭","核电","水力","可再生能源"],
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
		},
		yAxis: {
			type: 'value',
			splitNumber:3,
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize: 10
				},
				formatter: '{value}%'
			},
			splitLine: {
				show: false
			}
		},
		series: [
			{
				name: 'OECD',
				type: 'bar',
				showSymbol: false,
				data: [-118,1079,-1592,-357,90,2934]
			},
			{
				name: '中国',
				type: 'bar',
				showSymbol: false,
				data: [-6,698,365,1223,377,3065]
			},
			{
				name: '其他亚洲国家',
				type: 'bar',
				showSymbol: false,
				data: [-37,420,3257,204,366,1368]
			},
			{
				name: '世界其他地区',
				type: 'bar',
				showSymbol: false,
				data: [-221,1509,149,343,629,1258]
			}
		]
	};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
    setH('chart5');
}

function setH(id){
	var ids ='#'+ id+' div';
	$(ids).css('height','100%');
	$(ids).css('width','100%');
	$('canvas').css('height','100%');
	$('canvas').css('width','100%');
}