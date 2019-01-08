$(document).ready(function(){
	getdata('/pattern/gasSupply/chart1.json',chart1);
	getdata('/pattern/gasSupply/chart2.json',chart2);
	getdata('/pattern/gasSupply/chart3.json',chart3);
	getdata('/pattern/gasSupply/chart4.json',chart4);
	getdata('/pattern/gasSupply/chart5.json',chart5);
	main();
});

function chart1(data){
	var pieData = data[3];
	var legendData = data[1];
	option = {
		    tooltip: {
		        trigger: 'item',
		        formatter: "{a} <br/>{b}: {c}%"
		    },
		    color: ['#fd9173', '#f36f8a', '#5f71d2', '#42a4eb', '#4ac7f5'],
		    series: [{
		        name: '产量占比',
		        type: 'pie',
		        clockwise: false, //饼图的扇区是否是顺时针排布
		        minAngle: 20, //最小的扇区角度（0 ~ 360）
		        center: ['50%', '50%'], //饼图的中心（圆心）坐标
		        radius: ['50%', '60%'], //饼图的半径
		        avoidLabelOverlap: true, ////是否启用防止标签重叠
		        itemStyle: { //图形样式
		            normal: {
		                borderColor: '#1e2239',
		                borderWidth: 1.5,
		            },
		        },
		        label: {
	                normal: {
	                	color:'#fff',
	                    formatter: '{b}\n{d}%'
	                },
	          
	            },
		        data: pieData
		    }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var yData = data[2];
	var barData1 = data[3];
	var barData2 = data[4];
	option = {
		    tooltip : {
		        trigger: 'axis',
		        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
		            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
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
	   			  top:'5%',
	   			  bottom:'18%',
	   			 containLabel: true
	   			 },
		    xAxis : [
		        {
		            type : 'value',
		            min:-1,
		            splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         axisLine: {
				            lineStyle: {
				                color: '#59ebe8'
				            }
				        },
			         splitArea: {
			             show: false
			         },
			         axisLabel: {
			             textStyle: {
			                 color: '#fff',
			                 fontWeight: 'normal',
			                 fontSize: 10
			             },
			             formatter: '{value} %',
			         }
		        }
		    ],
		    yAxis : [
		        {
		            type : 'category',
		            axisTick : {show: false},
		            splitLine: {
			        	 show: false,
			             lineStyle: {
			                 color: '#fff',
			             }
			         },
			         axisLine: {
				            lineStyle: {
				                color: '#59ebe8'
				            }
				        },
			         axisLabel: {
			             textStyle: {
			                 color: '#fff',
			                 fontSize: 10
			             }
			         },
		            data : yData
		        }
		    ],
		    series : [
		        {
		            name:'同比增长率',
		            type:'bar',
		            
		            itemStyle: {
		                normal: {
		                	 color: '#00FFFF',
		                }
		            },
		            data:barData1
		        },
		        {
		            name:'产量占比',
		            type:'bar',
		            stack: '总量',
		            
		            itemStyle: {
		                normal: {
		                	 color: '#4534f3',
		                }
		            },
		            data:barData2
		        }
		    ]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xData = data[2];
	var lineData = data[3];
	var barData1 = data[4];
	var barData2 = data[5];
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
			bottom:'10%',
			containLabel: true
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
				interval: 0,
				textStyle: {
					color: '#fff',
					fontSize:10
				},
				rotate: 30,
			},
			axisLine:{
				lineStyle:{
					color: '#59ebe8'
				}
			},
			data: xData,
		}],
		yAxis: [{
			splitNumber:3,
			type: 'value',
			//min:36,
			position: 'left',
			axisLabel: {
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontSize:10
				}
			},
			axisLine: {
				lineStyle:{
					color: '#59ebe8'
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
			splitNumber:3,
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
					color: '#59ebe8'
				}
			},
			splitLine: {
				show: false
			},
			axisLabel: {
				show: true,
				formatter: '{value}%',
				textStyle: {
					color: '#fff',
					fontSize:10
				}
			}
		}],
		series: [{
			name: "产量(百万吨油当量)",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#1E90FF',
					barBorderRadius: 50,
				},
			},
			data: barData1,

		},{
			name: "消费量(百万吨油当量)",
			type: "bar",
			barWidth: '30%',
			itemStyle: {
				normal: {
					color: '#4534f3',
					barBorderRadius: 50,
				},
			},
			data: barData2,
		}, {
			name: "PI(%)",
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
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var  option = {
		    tooltip: {
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
		    xAxis: {
		    	type: "category",
		        axisLine: {
		            lineStyle: {
		            	 color: '#59ebe8',
		            }
		        },
		        splitLine: {
		        	show: false,
		            lineStyle: {
		                color: '#59ebe8 ',
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
		                fontSize: 10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
				 name: '百万吨油当量',
				 nameGap:-5,
				 nameTextStyle:{
					padding:[0,0,0,125],
					align:'center',
					color:'#fff',
				},
		    	 min:410,
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         axisLine: {
		             show: true,
		             lineStyle: {
		                 color: '#59ebe8',
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
		             formatter: '{value}'
		         }
		    },
		    series: [{
		        name: '美国',
		        type: 'line',
		        smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#54FF9F'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '俄罗斯',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#FFD700'
	                },
	            },
		        data: lineData2
		    }]
		};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
    var xData = data[2];
    var barData = data[3].map(function(v){
		if(v<0){
			return {value:v, itemStyle:{color:'#fdd312'}};
		}
		return v;
	});
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'none'
			},
			formatter: function (params) {
				return params[0].name + '<br />' + params[0].value + '百万吨油当量';
			}
		},
		grid: {
			left: '5%',
			right:'5%',
			top:'10%',
			bottom:'18%',
			containLabel: true
		},
		legend: { //图例组件，颜色和名字
			show:false,
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
		xAxis: {
			type: "category",
			axisLine: {
				lineStyle: {
					color: '#59ebe8',
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
				//interval: 0,
				textStyle: {
					color: '#fff',
					fontSize:10
				},
				//rotate: 30,
			},
			data: xData
		},
		yAxis: {
			type: 'value',
			name: '百万吨油当量',
			nameGap:-5,
			nameTextStyle:{
				padding:[0,0,0,125],
				align:'center',
				color:'#fff',
			},
			axisTick: {
				color: '#0177d4',
				show: true
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: '#59ebe8',
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
				formatter: '{value}'
			}
		},
		color: ['#00FFFF'],
		series: [
			{
				name: '产量变动',
				type:'bar',
				//type: 'pictorialBar',
				//barCategoryGap: '-130%',
				//symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
				itemStyle: {
					normal: {
						opacity: 0.5
					},
					emphasis: {
						opacity: 1
					}
				},
				data: barData,
				z: 10
			}
		]
	};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
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
    var cnMap = {};
    for(var n in _country){
        cnMap[_country[n]] = n;
    }
    getdata('/pattern/gasSupply/main.json', function(db){
       /* for(var i = 0; i < db.length; i++){
            db[i].name = _country[db[i].name];
        }*/
        var color = ["#070093", "#1c3fbf", "#1482e5", "#70b4eb", "#b4e0f3", "#b9e1f2", "#ffffff"];

        var option = {
			title:[{
				text:'天然气产量(百万吨油当量)',
				bottom:'32%',
				left:'7%',
				textStyle: {
					color: '#fff',
					fontSize:10,
				}
			},{
	            text:'世界天然气产量分布   (2017)',
	            top:'3%',
	            left:'center',
	            textStyle: {
	                color: '#29B8FF',
	                fontSize:16,
	            }
	        }],
			tooltip: {
				trigger: 'item',
				formatter: function(params) {
					if(!params.data.name)
						return '无';
					return '天然气产量<br/>'+params.data.name+':'+params.data.value+'(百万吨油当量)';
				}
			},
            visualMap: {
                type: 'piecewise',
                //splitNumber: 5,
                inverse: true,
                seriesIndex:0,
                pieces: [
					{
						max: 19.99,
						label:'<20',
						color: '#cfeefc'
					}, {
						min:20,
						max: 99.99,
						label:'20-100',
						color: '#9dddf9'
					}, {
						min:100,
						max: 199.99,
						label:'100-200',
						color: '#52c8f6'
					}, {
						min:200,
						max: 499.99,
						label:'200-500',
						color: '#41bcf3'
					}, {
						min:500,
						label:'≥500',
						color: '#03a3eb'
					}
				],
                left: '10%',
                bottom: '1%',
				itemWidth:16,
				itemHeight:10,
				itemGap:5,
				textStyle: {
					color: '#fff',
					fontSize:10,
				},
            },
            series: [{
                type:'map',
                map: 'world',
                //shading: 'color',
                nameMap:nameMap,
                zoom:1.1,
				top:'20%',
                label:{
                	show:false,
                    textStyle:{
                        distance:10,
                        color:'#2874ff'
                    }
                },
                itemStyle: {
                    color: '#fff',
                    borderWidth:0.3
                },
                viewControl: {
                    distance: 60
                },
                regionHeight: 0.5,
                data:db
            }]
        };
        var myChart = echarts.init($('#main')[0]);
        myChart.setOption(option);
    });
}
