$(document).ready(function(){
	main();
	getdata('/pattern/supply/chart1.json',chart1);
	getdata('/pattern/supply/chart2.json',chart2);
	getdata('/pattern/supply/chart3.json',chart3);
	chart4();
	getdata('/pattern/supply/chart5.json',chart5);
});

function chart1(data){
	var option = {
		tooltip : {
			trigger: 'axis'
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
		xAxis : {
			type: "category",
			axisLine: {
				lineStyle: {
					color: '#38b8ff'
				}
			},
			splitLine: {
				show: false,
				lineStyle: {
					color: '#59ebe8 ',
				}
			},
			//boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
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
			data : data[2]
		},
		yAxis : {
			type: 'value',
			axisTick: {
				show: true
			},
			axisLine: {
				lineStyle: {
					color: '#59ebe8'
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
				formatter: '{value}%',
			},
		},
		series : [
			{
				name:'美国增长率',
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
				data:data[3]
			},
			{
				name:'俄罗斯增长率',
				type:'line',
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
				data:data[4]
			},{
				name:'OPEC增长率',
				type:'line',
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
						color:'#ffd100',
						areaStyle: {type: 'default'}}},
				data:data[5]
			}
		]
	};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
    setH('chart1');
}

function chart2(data){
	for(var i = 0; i < data[3].length; i++){
		if(data[3][i]<0)
			data[3][i] = { value:data[3][i], itemStyle: {
				normal: {
					barBorderRadius: 30,
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1, [{
							offset: 0,
							color: '#fd1212'
						},
							{
								offset: 0.5,
								color: '#fdd312'
							},
							{
								offset: 1,
								color: '#fefe12'
							}
						]
					)
				}
			} };
	}
	var  option = {
	    color: ['#3398DB', '#FED312'],
	    tooltip : {
	        trigger: 'axis'
	    },
	    legend: {
			show:false
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
	        gridIndex: 0,
	        data: data[2],
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
	    yAxis: [{
			name:'千桶/日',
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
	        }],
	    series: [{
	            name: '世界产量异动',
	            type: 'bar',
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                    barBorderRadius: 30,
	                    color: new echarts.graphic.LinearGradient(
	                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: '#00feff'
	                            },
	                            {
	                                offset: 0.5,
	                                color: '#027eff'
	                            },
	                            {
	                                offset: 1,
	                                color: '#0286ff'
	                            }
	                        ]
	                    )
	                }
	            },
	            data: data[3]
	        }]
	};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
    setH('chart2');
}

function chart3(data){
	var option =  {
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
			data: data[2],
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
				name: "PI",
				type: "line",
				yAxisIndex: 1,
				itemStyle: {
					normal: {
						color: '#E9DC37'
					},
				},
				data: data[3],

			},
			{
			name: "产量",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#2c18f3',
					barBorderRadius: 50,
				},
			},
			data: data[4],

		},
			{
			name: "消费量",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#00FFFF',
					barBorderRadius: 50,
				},
			},
			data: data[5],

		},
		]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
    setH('chart3');
}

function chart4(data){
	 var dataStyle1 = {
		        normal: {
		            color: 'rgba(0,0,0,0)',
		            label: {
		                show: false
		            },
		            labelLine: {
		                show: false
		            }
		        },
		        emphasis: {
		        	label: {
		                show: false
		            },
		            labelLine: {
		                show: false
		            }
		        }
		    };
	 var dataStyle2 = {
		        normal: {
		            color: '#3525AA',
		            label: {
		                show: false
		            },
		            labelLine: {
		                show: false
		            }
		        },
		        emphasis: {
		        	label: {
		                show: false
		            },
		            labelLine: {
		                show: false
		            }
		        }
		    };
	
	option = {
			 title: {
			        text: '42.56%',
			        x: 'center',
			        y: 'center',
			        textStyle: {
			            color: '#98a0c4',
			            fontWeight: 'bolder',
			            fontSize: 16,
			        }
			    },
		  /* tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },*/
		    series : [
		       {
		            type: 'pie',
		            radius : ["73%","80%"],
		            center: ['50%', '50%'],
		            data:[
		                {value:42.56, name:'欧佩克'},
		                {value:57.44, name:'非欧佩克'}
		            ],
		            color:["#E43715","#00d6ff"],
		            labelLine: {
		                normal: {
		                    show: false
		                }
		            },
		            label: {
		                normal: {
		                    show: false,
		                    position: 'center'
		                },
		                emphasis: {
		                    show: false,
		                    textStyle: {
		                        fontSize: '30',
		                        fontWeight: 'bold'
		                    }
		                }
		            },
		            tooltip:{
            			trigger: 'item',
        		        formatter: "{b} : {c} ({d}%)"
            		},
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
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

	var option = {
		title:[{
			text:'石油产量(百万吨)',
			bottom:150,
			left:'10%',
			textStyle: {
				color: '#fff',
				fontSize:10,
			}
		},{
            text:'世界石油产量分布   (2017)',
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
				//alert(JSON.stringify(params));
				if (params.value>=0) {
					return '产量' + '<br/>' + params.name + ' : '+ params.value + '百万吨';
				}
			}
		},
		visualMap: {
			min: 0,
			max: 600,
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
			color: ["#1503c4", "#4335d2", "#5976f9", "#758df9", "#9eaefb"]
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
				data:[{"name":"美国","value":571.0},
					{"name":"沙特阿拉伯","value":561.7},
					{"name":"俄罗斯","value":554.4},
					{"name":"加拿大","value":236.3},
					{"name":"伊朗","value":234.2},
					{"name":"伊拉克","value":221.5},
					{"name":"中国","value":191.5},
					{"name":"阿联酋","value":176.3},
					{"name":"科威特","value":146.0},
					{"name":"巴西","value":142.7},
					{"name":"墨西哥","value":109.5},
					{"name":"委内瑞拉","value":108.3},
					{"name":"尼日利亚","value":95.3},
					{"name":"挪威","value":88.8},
					{"name":"哈萨克斯坦","value":86.9},
					{"name":"安哥拉","value":81.8},
					{"name":"卡塔尔","value":79.9},
					{"name":"阿尔及利亚","value":66.6},
					{"name":"阿曼","value":47.6},
					{"name":"英国","value":46.6},
					{"name":"印度尼西亚","value":46.4},
					{"name":"哥伦比亚","value":44.8},
					{"name":"利比亚","value":40.8},
					{"name":"印度","value":40.4},
					{"name":"阿塞拜疆","value":39.2},
					{"name":"埃及","value":32.2},
					{"name":"马来西亚","value":32.2},
					{"name":"厄瓜多尔","value":28.5},
					{"name":"阿根廷","value":27.4},
					{"name":"泰国","value":16.8},
					{"name":"越南","value":16.1},
					{"name":"其他非洲国家","value":15.1},
					{"name":"澳大利亚","value":14.8},
					{"name":"刚果共和国","value":14.7},
					{"name":"其他欧洲国家","value":12.7},
					{"name":"土库曼斯坦","value":12.4},
					{"name":"其他亚太地区国家","value":11.8},
					{"name":"其他中东国家","value":10.9},
					{"name":"加蓬","value":10.0},
					{"name":"赤道几内亚","value":9.5},
					{"name":"其他中南美洲国家","value":6.8},
					{"name":"丹麦","value":6.7},
					{"name":"文莱","value":5.5},
					{"name":"乍得","value":5.4},
					{"name":"秘鲁","value":5.4},
					{"name":"南苏丹","value":5.3},
					{"name":"特立尼达和多巴哥","value":4.4},
					{"name":"其他独联体国家","value":4.3},
					{"name":"苏丹","value":4.2},
					{"name":"意大利","value":4.1},
					{"name":"罗马尼亚","value":3.6},
					{"name":"乌兹别克斯坦","value":2.5},
					{"name":"突尼斯","value":2.4},
					{"name":"也门","value":2.1},
					{"name":"叙利亚","value":1.1}]
			}
		]
	};
var myChart = echarts.init($('#main')[0]);
myChart.setOption(option);
setH('main');
}

function chart5(data){
	var option = {
		tooltip: {
			show:"true",
			trigger: 'item',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
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
			data: data[2],
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
		yAxis: [{
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
		series: [{
			name:'同比增长率',
			type:'bar',
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
			data:data[3]
		},
			{
				name:'产量占比',
				type:'bar',
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
				data:data[4]
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