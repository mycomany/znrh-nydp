$(document).ready(function(){
    getdata('/statecn/opinions/chart1.json',chart1);
    getdata('/statecn/opinions/chart2.json',chart2);
    getdata('/statecn/opinions/near10Order.json',chart3);
    getdata('/statecn/opinions/chart4.json',chart4);
    getdata('/statecn/opinions/chart5.json',chart5);
    getdata('/statecn/opinions/chart6.json',chart6);
    getdata('/statecn/opinions/main.json',main);
});

function chart1(data){
	option = {
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
	        color:["#28B7FF","#57FFFF","#226FFF"],
		    tooltip: {
		        trigger: 'axis'
		    },
		    xAxis: {
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
		        data: data[2]
		    },
		    yAxis: {
		    	name:'家',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,25],
			    	align:'center',
			    	color:'#fff',
				},
	            type: 'value',
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
	        },
		    series: [{
		        name: '石油上游',
		        type: 'line',
		        symbol:'circle',
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#28B7FF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#28B7FF',
		                opacity:1
		            }
		        },
		        data: data[3]
		    }, {
		        name: '石油中游',
		        type: 'line',
		        symbol:'circle',
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		        lineStyle:{
		            normal:{
		                color:'#57FFFF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#57FFFF',
		                 opacity:1
		            }
		        },
		        data: data[4]
		    },{
		        name: '石油下游',
		        type: 'line',
		        symbol:'circle',
		        stack: '总量',
		        itemStyle: {
		            normal: {
		                opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#226FFF'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#226FFF',
		                 opacity:1
		            }
		        },
		        data: data[5]
		    }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


function chart2(data){
	option = {
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
	        color:["#FFD844","#226FFF","#FFF8DA"],
		    tooltip: {
		        trigger: 'axis'
		    },
		    xAxis: {
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
		        data: data[2]
		    },
		    yAxis: {
		    	name:'家',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,25],
			    	align:'center',
			    	color:'#fff',
				},
	            type: 'value',
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
	        },
		    series: [{
		        name: '天然气上游',
		        type: 'line',
		        z:5,
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#FFD844'
		            }
		        },
		       areaStyle: {
		            normal: {
		                color: '#FFD844',
		                opacity:1
		            }
		        },
		        data: data[3]
		    }, {
		        name: '天然气中游',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
		            normal: {
		                 opacity:0
		            }
		        },
		        lineStyle:{
		            normal:{
		                color:'#226FFF'
		            }
		        },
		        data: data[4]
		    },{
		        name: '天然气下游',
		        type: 'line',
		        z:3,
		        smooth: true,//值为true折线平滑    值为false折线曲折
			    symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
			    showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
		            normal: {
		                opacity:0
		            }
		        },
		         lineStyle:{
		            normal:{
		                color:'#FFF8DA'
		            }
		        },
		        areaStyle: {
		            normal: {
		                color: '#FFF8DA',
		                 opacity:1
		            }
		        },
		        data: data[5]
		    }]
		};
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	var lineData4 = data[6];
	var lineData5 = data[7];
	var lineData6 = data[8];
	option = {
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
		        type:'scroll',
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
	            	color: '#38b8ff',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontSize: 10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	name:'次',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,25],
			    	align:'center',
			    	color:'#fff',
				},
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#38b8ff',
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
		                 fontSize: 10
		             },
		             formatter:function (v) {
		            		return v/100000 + '万';
		            	},
		         }
		    },
		    series: [{
		        name: '风能',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#FFC000'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '核能',
		        type: 'line',
		       // smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#A5A5A5'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: '煤炭',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#70AD47'
	                },
	            },
		        data: lineData3
		    },
		    {
		        name: '石油',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#5B9BD5'
	                },
	            },
		        data: lineData4
		    },
		    {
		        name: '太阳能',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#ED7D31'
	                },
	            },
		        data: lineData5
		    },
		    {
		        name: '天然气',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#4472C4'
	                },
	            },
		        data: lineData6
		        }]
		};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
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
				data: data[0],
			},
			grid: {
				left: '5%',
				right:'5%',
				top:'10%',
				bottom:'18%',
				containLabel: true
			},
			yAxis: [{
				name:'个',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,25],
			    	align:'center',
			    	color:'#fff',
				},
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
					formatter: '{value}'
				},
				//单位
				//去掉辅助线
				splitLine: {
					show: false
				}
			}],
			xAxis: [{
				type: 'category',
				data: data[2],
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
				name: '上游',
				type: 'bar',
				stack: '总量',
				barWidth: '60%',
				data: data[3]
			},
				{
					name: '中游',
					type: 'bar',
					stack: '总量',
					barWidth: '60%',
					data:data[4]
				},
				{
					name: '下游',
					type: 'bar',
					stack: '总量',
					barWidth: '60%',
					data:data[5]
				}
			]
		};
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	var lineData4 = data[6];
	var lineData5 = data[7];
	var lineData6 = data[8];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
				 left: '5%',
		   		 right:'7%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
	   			 },
		    legend: { //图例组件，颜色和名字
		        itemGap: 7, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'2%',
		        type:'scroll',
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
	            	color: '#38b8ff',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontSize: 10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	name:'次',
	    		nameGap:-5,
	    		nameTextStyle:{
			    	padding:[0,0,0,25],
			    	align:'center',
			    	color:'#fff',
				},
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#38b8ff',
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
		        	 formatter:function (v) {
		            		return v/100000 + '万';
		            	},
		             textStyle: {
		                 color: '#fff',
		                 //fontWeight: 'normal',
		                 fontSize: 10
		             }
		         }
		    },
		    series: [{
		        name: '风能',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#FFC000'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '核能',
		        type: 'line',
		       // smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#A5A5A5'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: '煤炭',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#70AD47'
	                },
	            },
		        data: lineData3
		    },
		    {
		        name: '石油',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#5B9BD5'
	                },
	            },
		        data: lineData4
		    },
		    {
		        name: '太阳能',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#ED7D31'
	                },
	            },
		        data: lineData5
		    },
		    {
		        name: '天然气',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#4472C4'
	                },
	            },
		        data: lineData6
		        }]
		};
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}

function chart6(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	var lineData3 = data[5];
	var lineData4 = data[6];
	var lineData5 = data[7];
	var lineData6 = data[8];
	option = {
		    tooltip: {
		        trigger: 'axis'
		    },
		    grid: {
				 left: '5%',
		   		 right:'6%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
	   			 },
		    legend: { //图例组件，颜色和名字
		        itemGap: 7, //图例每项之间的间隔
		        itemWidth: 16,
		        itemHeight: 8,
		        x:'center',
		        bottom:'2%',
		        type:'scroll',
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
	            	color: '#38b8ff',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLabel: {
		            inside: false,
		            textStyle: {
		                color: '#fff',
		                fontSize:10
		            },
		        },
		        data:xData
		    },
		    yAxis: {
		    	 type: 'value',
		    	 min:0.6,
		    	 axisTick: {
		            	color: '#38b8ff',
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
		                 //fontWeight: 'normal',
		                 fontSize: 10
		             },
		             formatter:function (v) {
		            		return v*100 + '%';
		            	},
		         }
		    },
		    series: [{
		        name: '风能',
		        type: 'line',
		        //smooth: true,
		        symbol:'circle',
		        showSymbol: false,
		        itemStyle: {
	                normal: {
	                    color: '#FFC000'
	                },
	            },
		        data: lineData1
		    },
		    {
		        name: '核能',
		        type: 'line',
		       // smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#A5A5A5'
	                },
	            },
		        data: lineData2
		    },
		    {
		        name: '煤炭',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#70AD47'
	                },
	            },
		        data: lineData3
		    },
		    {
		        name: '石油',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#5B9BD5'
	                },
	            },
		        data: lineData4
		    },
		    {
		        name: '太阳能',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#ED7D31'
	                },
	            },
		        data: lineData5
		    },
		    {
		        name: '天然气',
		        type: 'line',
		        //smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#4472C4'
	                },
	            },
		        data: lineData6
		        }]
		};
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}

function main(das){
	var myChart = echarts.init($('#main')[0]);
	var province = das.name;
	var gdp = das.pie;
	var typeIndex = 1;
	var selectedRange = null;
	var option = null;
	var str = "";
	var data = [];
	var geoCoordMap = {};
	//var name = "2016年各省市GDP及各产业占比"
	var mapName = 'china'
	//var mapFeatures = echarts.getMap(mapName).geoJson.features;
	for (var i = 0; i < province.length; i++) {
	    data.push({
	        "name": province[i],
	        "value": [{
	                "name": '风能',
	                value: gdp[i][0]
	            },
	            {
	                "name": '核能',
	                value: gdp[i][1]
	            },
	            {
	                "name": '煤炭',
	                value: gdp[i][2]
	            },
	            {
	                "name": '石油',
	                value: gdp[i][3]
	            },
	            {
	                "name": '太阳能',
	                value: gdp[i][4]
	            },
	            {
	                "name": '天然气',
	                value: gdp[i][5]
	            }
	        ]
	    })
	}
	var geoCoordMap = { //为了保证饼图不互相重叠，我对经纬坐标进行了调整
	    '上海':  [121.472644,  31.231706],
	    '云南':  [102.712251,  24.040609],
	    '内蒙古':  [111.670801,  40.818311],
	    '北京':  [116.405285,  39.904989],
	    // '台湾': [121.509062, 25.044332],
	    '吉林':  [125.3245,  43.886841],
	    '四川':  [103.065735,  30.659462],
	    '天津':  [119.190182,  39.125596],
	    '宁夏':  [106.278179,  38.46637],
	    '安徽':  [117.283042,  31.86119],
	    '山东':  [118.000923,  36.675807],
	    '山西':  [112.049248,  37.057014],
	    '广东':  [113.280637,  23.125178],
	    '广西':  [108.320004,  22.82402],
	    '新疆':  [87.617733,  43.792818],
	    '江苏':  [119.467413,  33.741544],
	    '江西':  [115.892151,  28.676493],
	    '河北':  [114.802461,  37.745474],
	    '河南':  [113.665412,  33.757975],
	    '浙江':  [120.153576,  29.287459],
	    '海南':  [110.33119,  20.031971],
	    '湖北':  [113.298572,  30.984355],
	    '湖南':  [112.12279,  28.19409],
	    // '澳门': [113.54909, 22.198951],
	    '甘肃':  [103.823557,  36.058039],
	    '福建':  [119.306239,  26.075302],
	    '西藏':  [91.132212,  29.660361],
	    '贵州':  [106.713478,  26.578343],
	    '辽宁':  [123.029096,  41.396767],
	    '重庆':  [106.504962,  29.933155],
	    '陕西':  [108.948024,  34.263161],
	    '青海':  [100.578916,  36.623178],
	    // '香港': [114.173355, 22.320048],
	    '黑龙江':  [126.642464,  46.756967],
	}


	/*变换地图数据（格式）：pie*/
	function convertMapDta(type, data) {
	    var mapData = [];
	    for (var i = 0; i < data.length; i++) {
	        mapData.push({
	            'name': province[i],
	            "value": gdp[i][6]
	        })
	    }
	    return mapData;
	}

	/*resetPie*/
	function resetPie(myChart, params, geoCoordMap, typeIndex) {
	    var op = myChart.getOption();
	    var ops = op.series;
	    ops.forEach(function(v, i) {
	        if (i > 0) {
	            var geoCoord = geoCoordMap[v.name];
	            var p = myChart.convertToPixel({
	                seriesIndex: 0
	            }, geoCoord);
	            v.center = p;
	            if (params != 0 && params.zoom) {
	                v.radius = v.radius * params.zoom;
	            }
	            if (params != 0 && params.selected) {
	                var rangeFirstNumber = params.selected[0];
	                var rangeSecondNumber = params.selected[1];
	                var pd = v.data[typeIndex].value;
	                if (pd < rangeFirstNumber || pd > rangeSecondNumber) {
	                    v.itemStyle.normal.opacity = 0;
	                } else {
	                    v.itemStyle.normal.opacity = 1;
	                }
	            }
	        }
	    });
	    myChart.setOption(op, true);
	}
	

	/* 指定图表的配置项和数据:pie*/
	var option = {
			title:[{
                text:'新增主体区域分布  (2018)',
                textStyle:{
                    fontSize:16,
                    color:'#59EBE8'
                },
                top:'3%',
                left:10
            },{
				text:'新增主体（家）',
				bottom:'38%',
				left:'5%',
				textStyle: {
					color: '#fff',
					fontSize:10,
				}
			}],
	    legend: {
	        data: das.legend,
	        orient: 'vertical',
	        itemWidth: 16,
	        itemHeight: 8,
	        top: '10%',
	        left: '5%',
	        textStyle:{
                color:'#fff'
            },
	        zlevel: 4
	    },
	    tooltip: {
	        trigger: 'item',
	        formatter: function(params) {
	        	//alert(JSON.stringify(params));
	            if (params.value) {
	            	var a = params.dataIndex
	                return params.name + "<br/>" + "新增总量: " + params.value+'<br/>家'
	                +'风能：'+gdp[a][0]+'家<br/>'
	                +'核能：'+gdp[a][1]+'家<br/>'
	                +'煤炭：'+gdp[a][2]+'家<br/>'
	                +'石油：'+gdp[a][3]+'家<br/>'
	                +'太阳能：'+gdp[a][4]+'家<br/>'
	                +'天然气：'+gdp[a][5]+'家';
	            }
	        }
	    },
	    visualMap: {
	        type: 'continuous',
	        show: true,
	        min: 0,
	        max: 100000,
	        left: '5%',
	        top: 'bottom',
	        itemHeight:90,
	        itemWidth:15,
	        text: ['高', '低'], // 文本，默认为数值文本
	        calculable: true,
	        // seriesIndex: [0],
	        textStyle:{
                color:'#fff',
                fontSize:10
            },
            inRange: {
                color: ["#ffffff","#70b4eb","#1482e5", "#070093" ]
            },
	    },

	    series: [{
	        name: 'chinaMap',
	        type: 'map',
	        mapType: mapName,
	        showLegendSymbol: false,
	        aspectScale:0.9,
	        roam: true,
	        zoom:1.2,
	        label: {
	            normal: {
	                show: false,
	            },
	            emphasis: {
	                show: true
	            }
	        },
	        geo: {
	            show: false,
	            map: mapName,
	            layoutCenter: ['130%', '30%'],
	// 如果宽高比大于 1 则宽度为 100，如果小于 1 则高度为 100，保证了不超过 100x100 的区域
	            aspectScale: 0.9,
	            label: {
	                normal: {
	                    show: false
	                },
	                emphasis: {
	                    show: false,
	                }
	            },
	            roam: true,
	            itemStyle: {
	                normal: {
	                    areaColor: '#031525',
	                    borderColor: '#3B5077',
	                },
	                emphasis: {
	                    areaColor: '#2B91B7',
	                }
	            }
	        },

	        data: convertMapDta(province[typeIndex], data),
	        zlevel: 1
	    }]
	};
	if (option && typeof option === "object") {
	    myChart.setOption(option, true);
	}
	/*pie*/
	//addPie(myChart, data);

	myChart.setOption(option, true);

	/*饼图跟着地图移动:pie*/
	myChart.on('georoam', function(params) {
	    resetPie(myChart, params, geoCoordMap, typeIndex);
	});
	myChart.on('datarangeselected', function(params) {
	    resetPie(myChart, params, geoCoordMap, typeIndex);
	});
	window.addEventListener("resize", function() {
	    myChart.resize();
	    resetPie(myChart, 0, geoCoordMap);
	})


	myChart.setOption(option);
}