$(document).ready(function(){
	getdata('/market/index/main.json',main);
	getdata('/market/index/chart1.json',chart1);
	getdata('/market/index/chart2.json',chart2);
	getdata('/market/index/near10Order.json',chart3);
	getdata('/market/index/chart4.json',chart4);
	getdata('/market/index/chart5.json',chart5);
	getdata('/market/index/chart6.json',chart6);
});

function main(data){
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
	var data1 = data[0].map(function(o){
		return {name: o.name, value: o.value[2]};
	});
	var seriseData=[
		{
			name: '供需缺口',
			type: 'map',
			aspectScale: 1.1, //长宽比
			zoom:1.2,
			top:'20%',
			mapType: 'world',
			showLegendSymbol:false,
			nameMap: nameMap,
			itemStyle:{
				normal: {
					color: '#66CD00'
				},
				emphasis:{label:{show:false}}
			},
			data:data1
		},
		{
			name:"消费量",
			coordinateSystem: 'geo',
			type:'scatter',
			label: {
				normal: {
					show: true,
					color:'#fff',
					formatter:function(obj){
						return parseInt(obj['value'][2]);
					}
				},
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				color:'#fb970d',
				emphasis: {
					borderColor: '#fff',
					borderWidth: 1
				}
			},
			symbolSize: function (val) {
				return 5 + Math.sqrt(parseInt(val[2]))*1.4;
			},
			data:data[1]
		},{
        	type:'pie',
        	radius: 0,
        	center: ['-30%', '-50%'],
        	color: ["#f8ae48"],
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
        	data:[{name:"消费量      单位：百万吨",value:1}
        	      ]
        }
	];

	var option = {
		title:[{
			text:'0',
			left:110,
			bottom:74,
			textStyle:{
				color:'#fff',
				fontSize:10,
			},
		},{
            text:'世界石油供需整体特征  (2017)',
            top:'3%',
            left:'center',
            textStyle: {
                color: '#59EBE8',
                fontSize:16,
            }
        }],
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
	        data: ['消费量      单位：百万吨'],
	    }],
		tooltip: {
			trigger: 'item',
			formatter: function(params) {
				//根据业务自己拓展要显示的内容
				var res = "";
				var name = params.name;
				if(!name)
					return '无';
				for (var a = 0; a < data[0].length; a++) {
					if (data[0][a].name == name) {
						res = name + '<br/>产量：'+data[0][a].value[0]+'(百万吨)<br/>消费量：'
							+data[0][a].value[1]+'(百万吨)<br/>供需缺口：'+data[0][a].value[2]+'(百万吨)';
					}
				}
				return res;
			}
		},
		geo: {
			show: true,
			map: 'world',
			aspectScale: 1.1, //长宽比
			zoom:1.2,
			top:'20%',
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
	    visualMap: {
			min: -500,
			max: 500,
	        text: ['供需缺口：百万吨',' '],
	        itemHeight:100,
	        itemWidth:15,
			textGap:15,
			seriesIndex:0,
			calculable:true,
	        left:50,
	        bottom:5,
	        textStyle:{
	    	   color:'#fff',
	    	   fontSize: 10
	        },
	        //calculable: true,
	        color: ['#1e17f8','#9a97f8','#ff1a00']
	    },
	    series: seriseData
	};
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function getValue (data,name){
	for (var i = 0; i < data.length; i++) {
		if (data[i].name == name) {
			return data[i].value;
		}
	}
}

function chart1(data){
	var xData = data[1];
	var barData1 = data[4].map(function(v){
		if(v<0){
			return {value:v, itemStyle:{color:'#fed312'}};
		}
		return v;
	});
	var barData2 = data[5];
	var option =  {
		grid: {
			left: '3%',
			right:'3%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		legend: { //图例组件，颜色和名字
			itemGap: 12, //图例每项之间的间隔
			itemWidth: 16,
			itemHeight: 8,
			bottom:5,
			data: data[0],
			textStyle: {
				color: '#fff',
				fontSize: 7,
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			position: "bottom",
			type: "category",
			axisLabel: {
				//interval: 0,
				textStyle: {
					color: '#fff',
					fontSize:10
				},
				rotate: 30,
			},
			axisLine:{
				lineStyle:{
					color: '#38b8ff'
				}
			},
			data: xData,
		}],
		yAxis: [
			{
				name: '',
				type: 'value',
				splitNumber:3,
				//max:5,
				axisLabel: {
					textStyle: {
						color: '#fff',
						fontStyle: 'normal',
						fontSize:10
					}
				},
				axisLine: {
					lineStyle:{
						color: '#38b8ff'
					}
				},
				axisTick: {
					color: '#38b8ff',
					show: true
				},
				splitLine: {
					show: false
				}
			},{
				type: "value",
				splitNumber:3,
				axisTick: {
					show: true
				},
				axisLine: {
					lineStyle:{
						color: '#38b8ff'
					}
				},
				splitLine: {
					show: false
				},
				axisLabel: {
					show: true,
					textStyle: {
						color: '#fff',
						fontSize:10
					}
				}
			}],
		series: [
			{
				name: "供需缺口(百万桶/日)",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color: '#00FFFF',
						// barBorderRadius: 50,
					},
				},
				data: barData1,

			},
			{
				name: "布伦特油价(美元/桶)",
				type: "line",
				barWidth: '30%',
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#1E90FF',
						//barBorderRadius: 50,
					},
				},
				data: barData2,

			}
		]
	};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xData = data[1];
	var lineData1 = data[2];
	var lineData2 = data[3];
	var option = {
		grid: {
			left: '3%',
			right:'3%',
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
		tooltip:{
			trigger:'axis'
		},
		xAxis : {
			type: "category",
			axisLine: {
				lineStyle: {
					color: '#38b8ff',
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
			data : xData
		},
		yAxis : [{
			type: 'value',
			min:92,
			axisTick: {
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#38b8ff',
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
					fontSize: 10
				},
				formatter: '{value}',
			},
		},{
			type: "value",
			min:40,
			splitNumber:4,
			axisLine: {
				lineStyle:{
					color: '#fff'
				}
			},
			axisTick: {
				show: true
			},
			axisLine: {
				lineStyle:{
					color: '#38b8ff'
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize:10
				}
			}
		}],
		series : [
			{
				name:'需求（百万桶/天）',
				type:'line',
				areaStyle: {
					normal: {type: 'default',
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(238 ,238, 0,0.8)'
						}, {
							offset: 1,
							color: 'rgba(238 ,238, 0,0.8)'
						}], false)
					}
				},
				smooth:true,
				itemStyle: {
					normal: {
						color:'rgba(238 ,238, 0,1)',
						areaStyle: {type: 'default'}}
				},
				data:lineData1
			},
			{
				name:'Brent油价(美元/桶)',
				type:'line',
				yAxisIndex: 1,
				areaStyle: {
					normal: {type: 'default',
						color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
							offset: 0,
							color: 'rgba(255, 255, 224,0.8)'
						}, {
							offset: 1,
							color: 'rgba(255, 255, 224,0.8)'
						}], false)
					}
				},
				smooth:true,
				itemStyle: {
					normal: {
						color:'rgba(255, 255, 224,1)',
						areaStyle: {type: 'default'}}},
				data:lineData2
			}
		]
	};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xData = data[1];
	var barData1 = data[2];
	var barData2 = data[3];
	var option =  {
		grid: {
			left: '3%',
			right:'3%',
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
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			position: "bottom",
			type: "category",
			axisLabel: {
				//interval: 0,
				textStyle: {
					color: '#fff',
					fontSize:8
				},
				//rotate: 30,
			},
			axisLine:{
				lineStyle:{
					color: '#0177d4'
				}
			},
			data: xData,
		}],
		yAxis: [
			{
			name: '',
			type: 'value',
			min:8000,
			splitNumber:4,
			position: 'left',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontSize:8
				}
			},
			axisLine: {
				lineStyle:{
					color: '#0177d4'
				}
			},
			axisTick: {
				color: '#0177d4',
				show: true
			},
			splitLine: {
				show: false
			}
		},{
			type: "value",
			splitNumber:4,
			position: 'right',
			axisLine: {
				lineStyle:{
					color: '#fff'
				}
			},
			axisTick: {
				show: true
			},
			axisLine: {
				lineStyle:{
					color: '#0177d4'
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize:8
				}
			}
		}],
		series: [
			{
			name: "美国原油产量(千桶/天)",
			type: "line",
			itemStyle: {
				normal: {
					color: '#00FFFF',
					barBorderRadius: 50,
				},
			},
			data: barData1,

		}, {
			name: "钻机数量(台)",
			type: "line",
			itemStyle: {
				normal: {
					color: '#1E90FF',
					barBorderRadius: 50,
				},
			},
			data: barData2,
			yAxisIndex: 1

		}]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xData = data[1];
	var lineData1 = data[2];
	var lineData2 = data[3];
	var option = {
		tooltip : {
		  trigger: 'axis'
		},
		grid: {
			  left: '3%',
			  right:'3%',
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
		xAxis : {
		type: "category",
        axisLine: {
            lineStyle: {
            	 color: '#38b8ff',
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
		            data : xData
		        },
		    yAxis : [{
		    	 type: 'value',
		    	 min: 2500,
		         axisTick: {
		             show: true
		         },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: '#38b8ff',
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
		                 fontSize: 10
		             },
		             formatter: '{value}',
		         },
		        },{
			    	 type: 'value',
			         axisTick: {
			             show: true
			         },
			         axisLine: {
			             show: true,
			             lineStyle: {
			                 color: '#38b8ff',
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
			                 fontSize: 10
			             },
			             formatter: '{value}',
			         },
			        }],
		    series : [
		        {
		            name:'库存（百万桶/天）',
		            type:'line',
		            areaStyle: {
		                normal: {type: 'default',
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(199, 37, 50,0.2)'
		                    }, {
		                        offset: 1,
		                        color: 'rgba(199, 37, 50,0.2)'
		                    }], false)
		                }
		            },
		            smooth:true,
		            itemStyle: {
		                normal: {
		                	color:'#00F5FF',
		                	areaStyle: {type: 'default'}}    
		            },
		            data:lineData1
		        },
		         {
		            name:'WTI油价（美元/桶）',
		            type:'line',
		            yAxisIndex: 1,
		            areaStyle: {
		                normal: {type: 'default',
		                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
		                        offset: 0,
		                        color: 'rgba(19, 37, 250,0.2)'
		                    }, {
		                        offset: 1,
		                        color: 'rgba(19, 37, 250,0.2)'
		                    }], false)
		                }
		            },
		            smooth:true,
		            itemStyle: {
		            	normal: {
		            	color:'#0000FF',	
		            	areaStyle: {type: 'default'}}},
		            data:lineData2
		        }
		    ]
		};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	var xData = data[2];
	var lineData1 = data[4];
	var lineData2 = data[5];
	var option =  {
		grid: {
			left: '3%',
			right:'3%',
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
				fontSize: 8,
			}
		},
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			position: "bottom",
			type: "category",
			axisLabel: {
				//interval: 0,
				textStyle: {
					color: '#fff',
					fontSize:10
				},
				//rotate: 30,
			},
			axisLine:{
				lineStyle:{
					color: '#38b8ff'
				}
			},
			data: xData,
		}],
		yAxis: [
			{
			name: '',
			type: 'value',
			min:-4,
			position: 'left',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontSize:10
				}
			},
			axisLine: {
				lineStyle:{
					color: '#38b8ff'
				}
			},
			axisTick: {
				color: '#38b8ff',
				show: true
			},
			splitLine: {
				show: false
			}
		},{
			type: "value",
			position: 'right',
			axisLine: {
				lineStyle:{
					color: '#38b8ff'
				}
			},
			axisTick: {
				show: true
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize:10
				}
			}
		}],
		series: [{
			name: "Brent-Dubai(美元/桶)",
			type: "line",
			itemStyle: {
				normal: {
					color: '#00FFFF'
				},
			},
			data: lineData2,

		}, {
			name: "OPEC产量增长率(%)",
			type: "line",
			yAxisIndex: 1,
			itemStyle: {
				normal: {
					color: '#E9DC37'
				},
			},
			data: lineData1,

		}]
	};

	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(data){
	var xData = data[2];
	var lineData = data[4];
	var barData = data[3];
	var option =  {
		grid: {
			left: '3%',
			right:'3%',
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
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		xAxis: [{
			position: "bottom",
			type: "category",
			axisLabel: {
				//interval: 0,
				textStyle: {
					color: '#fff',
					fontSize:8
				},
				//rotate: 30,
			},
			axisLine:{
				lineStyle:{
					color: '#0177d4'
				}
			},
			data: xData,
		}],
		yAxis: [{
			name: '',
			type: 'value',
			min:0.8,
			position: 'left',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontSize:8
				}
			},
			axisLine: {
				lineStyle:{
					color: '#0177d4'
				}
			},
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
			axisLine: {
				lineStyle:{
					color: '#fff'
				}
			},
			axisTick: {
				show: true
			},
			axisLine: {
				lineStyle:{
					color: '#0177d4'
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				textStyle: {
					color: '#fff',
					fontSize:8
				}
			}
		}],
		series: [{
			name: "OPEC剩余产量(百万桶/天)",
			type: "bar",
			barWidth: '60%',
			itemStyle: {
				normal: {
					color: '#00FFFF',
					barBorderRadius: 50,
				},
			},
			data: barData,
		}, {
			name: "WTI油价(美元/桶)",
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
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}