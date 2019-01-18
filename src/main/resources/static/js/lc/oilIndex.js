$(document).ready(function(){
	getdata('/lc/oilIndex/chart1.json',chart1);
	getdata('/lc/oilIndex/chart2.json',chart2);
	getdata('/lc/oilIndex/chart3.json',chart3);
	getdata('/lc/oilIndex/chart4.json',chart4);
	getdatax('/lc/oilIndex/chart5.json',chart5);
	getdatax('/lc/oilIndex/chart6.json',chart6);
	getdatax('/lc/oilIndex/chart7.json',chart7);
	getdata('/lc/oilIndex/main.json',main);
});
var fontsize = 9;
function main(val, ix){
	 var data = [];
	 var efData = [];
	var tmp = {};
	for (var i = 0; i < val.index.length; i++) {
		var ls = val.data[val.index[i]];
		 var dataArray = [];
		    for(var s=0; s<ls[0].length; s++){
		        dataArray.push({"name": val.xData[s], "value": ls[0][s],"value1":ls[1][s]})
		    }
		    dataArray.sort(function(a,b){
		        return b.value - a.value
		    });
		    //var xds = [];
		    /*for(var k=0; k<dataArray.length; k++){
		    	//val.xData[k] = dataArray[k].name;
		    	xds.push(dataArray[k].name);
		    	ls[0][k] = dataArray[k].value;
		    	ls[1][k] = dataArray[k].value1;
		    	val.coordinate[k] = dataArray[k].coordinate;
		 }*/
		tmp = {};
		tmp.time = val.index[i];
		var da = [];
		var de = [];
		var te = {};
		var ef = {};
		for (var j = 0; j < dataArray.length; j++) {
			te = {};
			ef = {};
			te.name = dataArray[j].name;
			ef.name = dataArray[j].name;
			te.value =  [dataArray[j].value,dataArray[j].name];
			ef.value = [val.coordinate[dataArray[j].name][0],val.coordinate[dataArray[j].name][1],dataArray[j].value1];
			//alert(JSON.stringify(ef));
			da.push(te);
			de.push(ef);
		}
		tmp.data = da;
		tmp.efData = de;
		data.push(tmp);
	}
	

	var nameMap = {
	    'Korea': "韩国",
	    'Côte d\'Ivoire': '科特迪瓦',
	    'Dem. Rep. Korea': '朝鲜',
	    'Afghanistan':'阿富汗',
	    'Angola':'安哥拉',
	    'Albania':'阿尔巴尼亚',
	    'United Arab Emirates':'阿联酋',
	    'Argentina':'阿根廷',
	    'Armenia':'亚美尼亚',
	    'French Southern and Antarctic Lands':'法属南半球和南极领地',
	    'Australia':'澳大利亚',
	    'Austria':'奥地利',
	    'Azerbaijan':'阿塞拜疆',
	    'Barbados' : '巴巴多斯',
	    'Burundi':'布隆迪',
	    'Belgium':'比利时',
	    'Benin':'贝宁',
	    'Burkina Faso':'布基纳法索',
	    'Bangladesh':'孟加拉国',
	    'Bulgaria':'保加利亚',
	    'Bahamas':'巴哈马',
	    'Bosnia and Herz.':'波斯尼亚和黑塞哥维那',
	    'Belarus':'白俄罗斯',
	    'Belize':'伯利兹',
	    'Bermuda':'百慕大',
	    'Bolivia':'玻利维亚',
	    'Brazil':'巴西',
	    'Brunei':'文莱',
	    'Bhutan':'不丹',
	    'Botswana':'博茨瓦纳',
	    'Central African Rep.':'中非共和国',
	    'Canada':'加拿大',
	    'Cape Verde':'佛得角共和国',
	    'Switzerland':'瑞士',
	    'Chile':'智利',
	    'China':'中国',
	    'Ivory Coast':'象牙海岸',
	    'Cameroon':'喀麦隆',
	    'Congo':'刚果共和国',
	    'Colombia':'哥伦比亚',
	    'Costa Rica':'哥斯达黎加',
	    'Cuba':'古巴',
	    'Northern Cyprus':'北塞浦路斯',
	    'Cyprus':'塞浦路斯',
	    'Czech Rep.':'捷克共和国',
	    'Germany':'德国',
	    'Djibouti':'吉布提',
	    'Dem. Rep. Congo': '刚果民主共和国',
	    'Denmark':'丹麦',
	    'Dominican Rep.':'多米尼加共和国',
	    'Dominica':'多米尼克',
	    'Algeria':'阿尔及利亚',
	    'Ecuador':'厄瓜多尔',
	    'Egypt':'埃及',
	    'Eritrea':'厄立特里亚',
	    'Spain':'西班牙',
	    'Eq. Guinea':'赤道几内亚',
	    'Estonia':'爱沙尼亚',
	    'Ethiopia':'埃塞俄比亚',
	    'Finland':'芬兰',
	    'Fiji':'斐济',
	    'Falkland Is.':'马尔维纳斯群岛',
	    'France':'法国',
	    'Gabon':'加蓬',
	    'United Kingdom':'英国',
	    'Georgia':'格鲁吉亚',
	    'Ghana':'加纳',
	    'Guinea':'几内亚',
	    'Gambia':'冈比亚',
	    'Guinea-Bissau':'几内亚比绍',
	    'Greece':'希腊',
	    'Greenland':'格陵兰',
	    'Guatemala':'危地马拉',
	    'French Guiana':'法属圭亚那',
	    'Guyana':'圭亚那',
	    'Honduras':'洪都拉斯',
	    'Croatia':'克罗地亚',
	    'Haiti':'海地',
	    'Hungary':'匈牙利',
	    'Indonesia':'印尼',
	    'India':'印度',
	    'Ireland':'爱尔兰',
	    'Iran':'伊朗',
	    'Iraq':'伊拉克',
	    'Iceland':'冰岛',
	    'Israel':'以色列',
	    'Italy':'意大利',
	    'Jamaica':'牙买加',
	    'Jordan':'约旦',
	    'Japan':'日本',
	    'Kazakhstan':'哈萨克斯坦',
	    'Kenya':'肯尼亚',
	    'Kyrgyzstan':'吉尔吉斯斯坦',
	    'Cambodia':'柬埔寨',
	    'South Korea':'韩国',
	    'Kosovo':'科索沃',
	    'Kuwait':'科威特',
	    'Lao PDR':'老挝',
	    'Lebanon':'黎巴嫩',
	    'Liberia':'利比里亚',
	    'Libya':'利比亚',
	    'Sri Lanka':'斯里兰卡',
	    'Lesotho':'莱索托',
	    'Lithuania':'立陶宛',
	    'Luxembourg':'卢森堡',
	    'Latvia':'拉脱维亚',
	    'Morocco':'摩洛哥',
	    'Moldova':'摩尔多瓦',
	    'Madagascar':'马达加斯加',
	    'Mexico':'墨西哥',
	    'Macedonia':'马其顿',
	    'Mali':'马里',
	    'Myanmar':'缅甸',
	    'Montenegro':'黑山',
	    'Mongolia':'蒙古',
	    'Mozambique':'莫桑比克',
	    'Mauritania':'毛里塔尼亚',
	    'Malawi':'马拉维',
	    'Malaysia':'马来西亚',
	    'Namibia':'纳米比亚',
	    'New Caledonia':'新喀里多尼亚',
	    'Niger':'尼日尔',
	    'Nigeria':'尼日利亚',
	    'Nicaragua':'尼加拉瓜',
	    'Netherlands':'荷兰',
	    'Norway':'挪威',
	    'Nepal':'尼泊尔',
	    'New Zealand':'新西兰',
	    'Oman':'阿曼',
	    'Pakistan':'巴基斯坦',
	    'Panama':'巴拿马',
	    'Peru':'秘鲁',
	    'Philippines':'菲律宾',
	    'Papua New Guinea':'巴布亚新几内亚',
	    'Poland':'波兰',
	    'Puerto Rico':'波多黎各',
	    'North Korea':'北朝鲜',
	    'Portugal':'葡萄牙',
	    'Paraguay':'巴拉圭',
	    'Qatar':'卡塔尔',
	    'Romania':'罗马尼亚',
	    'Russia':'俄罗斯',
	    'Rwanda':'卢旺达',
	    'W. Sahara':'西撒哈拉',
	    'Saudi Arabia':'沙特阿拉伯',
	    'Sudan':'苏丹',
	    'S. Sudan':'南苏丹',
	    'Senegal':'塞内加尔',
	    'Solomon Is.':'所罗门群岛',
	    'Sierra Leone':'塞拉利昂',
	    'El Salvador':'萨尔瓦多',
	    'Somaliland':'索马里兰',
	    'Somalia':'索马里',
	    'Serbia':'塞尔维亚共和国',
	    'Suriname':'苏里南',
	    'Slovakia':'斯洛伐克',
	    'Slovenia':'斯洛文尼亚',
	    'Sweden':'瑞典',
	    'Swaziland':'斯威士兰',
	    'Syria':'叙利亚',
	    'Chad':'乍得',
	    'Togo':'多哥',
	    'Thailand':'泰国',
	    'Tajikistan':'塔吉克斯坦',
	    'Turkmenistan':'土库曼斯坦',
	    'Tanzania': '坦桑尼亚',
	    'East Timor':'东帝汶',
	    'Trinidad and Tobago':'特里尼达和多巴哥',
	    'Tunisia':'突尼斯',
	    'Turkey':'土耳其',
	    'United Republic of Tanzania':'坦桑尼亚联合共和国',
	    'Uganda':'乌干达',
	    'Ukraine':'乌克兰',
	    'Uruguay':'乌拉圭',
	    'United States':'美国',
	    'Uzbekistan':'乌兹别克斯坦',
	    'Venezuela':'委内瑞拉',
	    'Vietnam':'越南',
	    'Vanuatu':'瓦努阿图',
	    'West Bank':'西岸',
	    'Yemen':'也门',
	    'South Africa':'南非',
	    'Zambia':'赞比亚',
	    'Zimbabwe':'津巴布韦',
	    'Comoros':'科摩罗伊斯兰联邦共和国'
	};
		var option = {
		    baseOption: {
		        animationDurationUpdate: 1000,
		        animationEasingUpdate: 'quinticInOut',
		        timeline: {
		            axisType: 'category',
		            orient: 'vertical',
		            autoPlay: true,
		            inverse: true,
		            playInterval: 5000,
		            left: null,
		            right: 5,
		            top: 20,
		            bottom: 20,
		            width: 46,
		            height: null,
		            label: {
		                normal: {
		                    textStyle: {
		                        color: '#ddd'
		                    }
		                },
		                emphasis: {
		                    textStyle: {
		                        color: '#77d9f4'
		                    }
		                }
		            },
		            symbol: 'none',
		            lineStyle: {
		                color: '#c2d8f3'
		            },
		            checkpointStyle: {
		                color: '#ffc100',
		                borderColor: '#c2c8cf',
		                borderWidth: 1
		            },
		            controlStyle: {
		                showNextBtn: false,
		                showPrevBtn: false,
		                normal: {
		                    color: '#666',
		                    borderColor: '#666'
		                },
		                emphasis: {
		                    color: '#aaa',
		                    borderColor: '#aaa'
		                }
		            },
		            data: data.map(function(ele) {
		                return ele.time
		            })
		        },
		        title: {
		            text: '',
		            left: 'center',
		            top: 'top',
		            textStyle: {
		                fontSize: 25,
		                color: 'rgba(255,255,255, 0.9)'
		            }
		        },
		        tooltip: {
		            formatter: function(v) {
		            	//alert(JSON.stringify(v));
		            	return v.name+'<br/>CO<sub>2</sub>排放量: '+v.data.value[0].toFixed(2)+' 百万吨<br/>CO<sub>2</sub>人均排放量：'+v.data.value[1].toFixed(2)+' 吨';
		            }
		        },
		        grid: {
		            left: '4%',
		            right: '75%',
		            top: '50%',
		            bottom: '5%'
		        },
		        xAxis: {},
		        yAxis: {},
		        geo: {
			        map: 'world',
			        label: {
			            emphasis: {
			                show: true,
			                color:'#c2c8cf'
			            }
			        },
			        top: '10%',
			        zoom:1.1, 
			        aspectScale:0.7,    
			        roam: false,
			        itemStyle: {
			            normal: {
			                areaColor: 'rgba(1,1,1,0)',
			                borderColor: 'rgba(1,1,1,0)'
			            },
			            emphasis: {
			            	 borderColor:'#c2c8cf',
			                    areaColor: 'red',
			            }
			        }
			    },
		        series: [{
		            id: 'map',
		            type: 'map',
		            mapType: 'world',
		            nameMap: nameMap,
		            top: '10%',
		            zoom:1.1, 
			        aspectScale:0.7,  
			        roam: false,
		            itemStyle: {
			            normal: {
			                areaColor: 'rgba(1,1,1,0)',
			                borderColor: '#59b6f4'
			            },
			            emphasis: {
			            	 borderColor:'#c2c8cf',
			                    areaColor: 'rgba(70,202,239,0.8)',
			            }
			        },
			        label: {
			            emphasis: {
			                show: true,
			                color:'#c2c8cf'
			            }
			        },
		            data: []
		        }, {
		            id: 'bar',
		            type: 'bar',
		            barWidth:'60%',
		            tooltip: {
		                show: false
		            },
		            label: {
		                normal: {
		                    show: true,
		                    position: 'right',
		                    textStyle: {
		                        color: '#ddd'
		                    }
		                }
		            },
		            data: []
		        },{
		        	id:'effectScatter',
		    	    type: 'effectScatter',
		    	    coordinateSystem: 'geo',
		    	    zlevel: 3,
		    	    rippleEffect: {
		                period: 3,
		                brushType: 'stroke',
		                scale: 3
		            },
		    	    label: {
		    	        normal: {
		    	            show: true,
		    	            position: 'bottom',
		    	            color:'#c5eaef',
		    	            fontSize: fontsize,
		    	            formatter: function(v){
		    	            	return v.name+'\n'+v.data.value[2].toFixed(2)+'吨';
		    	            }
		    	        }
		    	    },
		    	    symbolSize: function(val) {
		    	    	if (val[2]*1.5<10) {
							return 10;
						}
		    	    	if (val[2]*1.5>40) {
							return 40;
						}
		    	        return val[2]*1.5;
		    	    },
		    	    itemStyle: {
		    	        normal: {
		    	            color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
	    	                    offset: 0,
	    	                    color: '#00f4ff'
	    	                }, {
	    	                    offset: 0.4,
	    	                    color: 'rgba(0,244,255,0.5)'
	    	                }, {
	    	                    offset: 0.5,
	    	                    color: '#00f4ff'
	    	                }, {
	    	                    offset: 0.6,
	    	                    color: 'rgba(0,244,255,0.5)'
	    	                }, {
	    	                    offset: 1,
	    	                    color: '#00f4ff'
	    	                }])
		    	        }
		    	    },
		    	    data: []
		    	}]
		    },
		    options: []
		}

		for (var i = 0; i < data.length; i++) {
		    option.options.push({
		        visualMap: [{
		            //type:'continous',
		            //type: 'continuous',
		            calculable: true,
		            seriesIndex: [0,1],
		            orient: 'horizontal',
		            dimension: 0,
		            left: 'center',
		            bottom: '2%',
		            itemWidth: 12,
		            itemHeight: 80,
		            min: data[i].data[val.xData.length-1].value[0],
		            max: data[i].data[0].value[0],
		            text: ['高(百万吨)', '低'],
		            textStyle: {
		                color: '#ddd'
		            },
		            inRange: {
		            	color: ['#8b95f9','#6875f3','#005bff']
		            }
		        }],
		        xAxis: {
		            type: 'value',
		            boundaryGap: [0, 0.1],
		            axisLabel: {
		                show: false,
		            },
		            axisLine:{
						lineStyle:{
							color: '#0177d4'
						}
					},
		            splitLine: {
		                show: false
		            }
		        },
		        yAxis: {
		            type: 'category',
		            axisLabel: {
		                show: false,
		                textStyle: {
		                    color: '#ddd'
		                }
		            },
		            axisLine:{
						lineStyle:{
							color: '#0177d4'
						}
					},
		            data: data[i].data.map(function(ele) {
		            	//alert(JSON.stringify(ele));
		                return ele.value[1]
		            }).reverse()
		        },
		        series: [{
		            id: 'map',
		            data: data[i].data
		        },{
		            id: 'effectScatter',
		            data: data[i].efData
		        }, {
		            id: 'bar',
		            label: {
		                normal: {
		                	color:'#c5eaef',
		                    position: 'right',
		                    formatter: '{b}'
		                }
		            },
		            data: data[i].data.map(function(ele) {
		                return ele.value[0]
		            }).sort(function(a, b) {
		                return a > b
		            })
		        }]
		    })
		}
	

	$chart.init('#main',option);
}
//石油开采资源综合利用情况
function chart1(data){
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend:{
			data:data[0],
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
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
					color: '#c2c8cf ',
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
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: 8
				},
			},
			data:data[1],
		}],
		yAxis: [{
			name:'吨CO2每吨标准煤',
			nameGap:-5,
			nameTextStyle:{
				padding:[0,0,0,110],
				align:'center',
				color:'#c2c8cf',
				fontSize: fontsize
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
					color: '#c2c8cf',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: 8
				},
				formatter: '{value}'
			}
		}],
		series: [
			{
				name: '中国',
				type:'bar',
				barWidth:'30%',
				//stack:'g',
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(0,255,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(0,255,255,0.2)'
	                            }
	                        ]
	                    )
					},
				},
				data: data[2]
			},{
				name: '世界',
				type:'bar',
				barWidth:'30%',
				//stack:'g',
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(43,136,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(43,136,255,0.2)'
	                            }
	                        ]
	                    )
					},
				},
				data: data[3]
			}
		]
	};
	$chart.init('#chart1', option);
}
//石油开采其他污染物产生情况
function chart2(data){
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend:{
			data:data[0],
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
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
					color: '#c2c8cf ',
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
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: 8
				},
			},
			data:data[1],
		}],
		yAxis: [{
			nameTextStyle:{
				padding:[0,0,0,65],
				align:'center',
				color:'#c2c8cf',
				fontSize: fontsize
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
					color: '#c2c8cf',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: 8
				},
				formatter: '{value}'
			}
		}],
		series: [
			{
				name: '排放系数',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(0,255,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(0,255,255,0.2)'
	                            }
	                        ]
	                    )
					},
				},
				data: data[2]
			},
		]
	};
	$chart.init('#chart2', option);
}
//石油开采其他污染物产生情况
function chart3(data){
	var option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: { // 坐标轴指示器，坐标轴触发有效
				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
			}
		},
		legend:{
			data:data[0],
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color:['#40eaf9','#2b88ff','#2cffc9','#4138e1','#f5bd3b','#69a8f8', '#9571d8','#e45698','#74edb6'],
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
					color: '#c2c8cf ',
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
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: 8
				},
			},
			data:data[1],
		}],
		yAxis: [{
			nameTextStyle:{
				padding:[0,0,0,65],
				align:'center',
				color:'#c2c8cf',
				fontSize: fontsize
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
					color: '#c2c8cf',
				}
			},
			axisLabel: {
				textStyle: {
					color: '#c2c8cf',
					fontWeight: 'normal',
					fontSize: 8
				},
				formatter: '{value}'
			}
		}],
		series: [
			{
				name: '煤炭',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[2]
			},
			{
				name: '焦炭',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[3]
			},
			{
				name: '焦炉煤气',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[4]
			},
			{
				name: '高炉煤气',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[5]
			},
			{
				name: '转炉煤气',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[6]
			},
			{
				name: '石油制品',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[7]
			},
			{
				name: '天然气',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[8]
			},
			{
				name: '总用电量',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[9]
			},
			{
				name: '火电',
				type:'bar',
				barWidth:15,
				itemStyle: {
					normal: {
					},
				},
				data: data[10]
			}
		]
	};
	$chart.init('#chart3', option);
}
//石油开采加工综合能耗企业排名
function chart4(data){
	var option =  {
		legend: {
			data: data[0],
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color:['#2b88ff','#2cffc9'],
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
			axisTick:{
				interval:0
			},
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
				name:'',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,25],
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
				name: "t-CO2",
				type: "line",
				smooth:true,
				itemStyle: {
					normal: {
					},
				},
				data: data[2],
			},
			{
				name: "t-C/toe",
				type: "line",
				smooth:true,
				itemStyle: {
					normal: {
					},
				},
				data: data[3],
			},
		]
	};
	$chart.init('#chart4', option);
}
//石油加工资源消耗情况
function chart5(data, ix){
	var option =  {
		legend: {
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color:['#2b88ff','#40eaf9','#fdb91a','#2cffc9'],
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
				name:'',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,25],
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
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
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
			}],
		series: [
			{
				name: "总排放量",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(43,136,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(43,136,255,0.2)'
	                            }
	                        ]
	                    )
					},
				},
				data: data.data[ix][0],
			},
			{
				name: "排放系数",
				type: "bar",
				barWidth: '30%',
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(64,234,249,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(64,234,249,0.2)'
	                            }
	                        ]
	                    )
					},
				},
				data: data.data[ix][1],
			},
			{
				name: "单位CO2增长率",
				type: "line",
				smooth:true,
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][2],
			},
			{
				name: "排放系数增长率",
				type: "line",
				smooth:true,
				yAxisIndex: 1,
				itemStyle: {
					normal: {
					},
				},
				data: data.data[ix][3],
			},
		]
	};
	$chart.init('#chart5', option);
}
//石油加工资源综合利用情况
function chart6(data, ix){
	var option =  {
		legend: {
			show:false,
			data: data.legend,
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
				name:'',
				nameGap:-5,
				nameTextStyle:{
					padding:[0,0,0,25],
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
				},
				splitLine: {
					show:false,
					lineStyle: {
						color: '#0177d4'
					}
				}
			},{
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
			}],
		series: [
			{
				name: "研发人员与产业人员占比",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(43,136,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(43,136,255,0.2)'
	                            }
	                        ]
	                    ),
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][0],
			},
		]
	};
	$chart.init('#chart6', option);
}
//石油加工污染物产生情况
function chart7(data, ix){
	var option =  {
		legend: {
			show:false,
			data: data.legend,
			textStyle: {
	            color: '#c2c8cf',
	            fontSize: 10,
	        }
		},
		color: ['#2b88ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
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
				name:'万千瓦时',
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
			},{
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
			}],
		series: [
			{
				name: "技术经费投入占比",
				type: "bar",
				barWidth: '20%',
				itemStyle: {
					normal: {
						color:new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1, [{
	                                offset: 0,
	                                color: 'rgba(43,136,255,1)'
	                            },
	                            {
	                                offset: 1,
	                                color: 'rgba(43,136,255,0.2)'
	                            }
	                        ]
	                    ),
						barBorderRadius: 10,
					},
				},
				data: data.data[ix][0],
			},
		]
	};
	$chart.init('#chart7', option);
}
