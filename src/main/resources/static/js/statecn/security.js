$(document).ready(function(){
    getdata('/statecn/security/chart1.json',chart1);
    getdata('/statecn/security/chart2.json',chart2);
    getdata('/statecn/security/near10Order.json',chart3);
    getdata('/statecn/security/chart4.json',chart4);
    //getdata('/statecn/security/chart5.json',chart5);
    getdata('/statecn/security/chart6.json',chart6);
	getdata('/statecn/security/main.json',main);
});

function main(data){
	option = {
			title:[{
                text:'石油安全仪表盘  (2017)',
                top:'3%',
                left:'2%',
                textStyle: {
                    color: '#59EBE8',
                    fontSize:16,
                }
            }], 
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
		            name: '石油对外依赖度',
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
		            name: '石油进口集中度 ',
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
		            name: '储量接替率',
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
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function chart1(data){
	var xData = data[2];
	var lineData = data[3];
	var barData = data[4];
	option = {
			textStyle: {
		        color: '#38b8ff'
		    },
		    tooltip: {
		        trigger: 'axis',
		        //formatter: '{a}</br>{b} ：{c} %'
		    },
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
		        data:['原油对外依存度','原油进口量（亿吨）']
		    },
		    grid: {
				 left: '5%',
		   		 right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
	   			 },
		    xAxis: {
		    	type: "category",
		        splitLine: {
		        	show: false,
		            lineStyle: {
		                color: '#fff ',
		            }
		        },
		       // boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        axisLine: {
	                lineStyle: {
	                    color: '#38b8ff'
	                }
	            },
	            axisLabel: {
	            	inside: false,
	                textStyle: {
	                    color: '#ffffff',
	                    fontSize: 10
	                }
	            },
		        data:xData
		    },
		    yAxis: [{
		    	 type: 'value',
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
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
	                },
	                formatter: '{value}'
	             },
	             //单位
		    },{
		    	 type: 'value',
		    	 min:20,
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
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
	                },
	                formatter: '{value}%'
	             },
	             //单位
		    }],
		    series: [
		    {
		        name: '原油对外依存度',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        yAxisIndex:1,
		        itemStyle: {
	                normal: {
	                    color: '#FFD700'
	                },
	            },
		        data: lineData
		    },{
	            name: "原油进口量（亿吨）",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData,

	        }]
		};
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart2(data){
	var xData = data[2];
	var lineData = data[4];
	var barData = data[3];
	    var option =  {
	    		textStyle: {
			        color: '#38b8ff'
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
		        data:['石油消费总量','石油消费比重']
		    },
	        xAxis: [{
	            position: "bottom",
	            type: "category",
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
	                //rotate: 30
	            },
	            data: xData,
	        }],
	        yAxis: [{
	        	type: 'value',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        		name:'       万吨标准煤',
        		nameGap:-5,
        		nameTextStyle:{
			    	padding:[0,0,0,45],
			    	align:'center',
			    	color:'#fff',
				},
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
	                }
	             },
	            //单位
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
	            min:16,
	            max:23,
	            axisTick: {
	                show: true
	            },
	            splitLine: {
	                show: false
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
	                },
	                formatter: '{value}%'
	            },
	            //单位
	        }],
	        series: [{
	            name: "石油消费总量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData,

	        }, {
	            name: "石油消费比重",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: lineData,

	        }]
	    }
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	var xData = data[2];
	var lineData1 = data[3];
	var lineData2 = data[4];
	option = {
			
			textStyle: {
		        color: '#38b8ff'
		    },
		    tooltip: {
		        trigger: 'axis',
		        //formatter: '{a}</br>{b} ：{c} %'
		    },
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
		        data:['能源消费强度','石油消费增长率']
		    },
		    grid: {
				 left: '5%',
		   		 right:'5%',
	   			  top:'10%',
	   			  bottom:'18%',
	   			 containLabel: true
	   			 },
		    xAxis: {
		    	type: "category",
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
		        boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
		        axisTick: {
	            	color: '#0177d4',
	                show: true
	            },
		        splitArea: {
		            show: false
		        },
		        data:xData
		    },
		    yAxis: [{
		    	type: 'value',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
        		name:'                      万吨标准煤/亿元GDP',
        		nameGap:-5,
        		nameTextStyle:{
			    	padding:[0,0,0,45],
			    	align:'center',
			    	color:'#fff',
				},
				max:1.8,
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
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
		    },{
		    	 type: 'value',
		    	 max:21,
		    	 axisTick: {
		            	color: '#0177d4',
		                show: true
		            },
		         splitLine: {
		        	 show: false,
		             lineStyle: {
		                 color: '#fff',
		             }
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
	                },
	                formatter: '{value}%'
	             },
	             //单位
		    }],
		    series: [
		    {
		        name: '能源消费强度',
		        type: 'line',
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#00EE76'
	                },
	            },
		        data: lineData1
		    },{
		        name: '石油消费增长率',
		        type: 'line',
		        yAxisIndex: 1,
		        smooth: true,//值为true折线平滑    值为false折线曲折
		        symbol:'circle',//circle--拐点实心圆形 rect--实心方形   symbol没有为默认空心圆形
		        showSymbol: false,//true 为拐点处有点  false 为没有
		        itemStyle: {
	                normal: {
	                    color: '#00FFFF'
	                },
	            },
		        data: lineData2
		    }]
		};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);
}

function chart4(data){
	var xData = data[2];
	var barData = data[3];
	var lineData = data[4];
	    var option =  {
    		textStyle: {
		        color: '#38b8ff'
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
		        data:['消费-自给','自给缺口变化']
		    },
	        xAxis: [{
	            position: "bottom",
	            type: "category",
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
	            data: xData,
	        }],
	        yAxis: [{
	        	type: 'value',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        		name:'百万吨',
        		nameGap:-5,
        		nameTextStyle:{
			    	padding:[0,0,0,45],
			    	align:'center',
			    	color:'#fff',
				},
	            //min:36,
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
	                }
	            },
	            //单位
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
	            max:50,
	            axisTick: {
	                show: true
	            },
	            splitLine: {
	                show: false
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
	                },
	                formatter: '{value}%'
	            },
	            //单位
	        }],
	        series: [{
	            name: "消费-自给",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData,

	        }, {
	            name: "自给缺口变化",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: lineData,

	        }]
	    }
	var myChart = echarts.init($('#chart4')[0]);
    myChart.setOption(option);
}

function chart5(data){
	var xData = data[2];
	var lineData = data[5];
	var barData1 = data[3];
	var barData2 = data[4];
	    var option =  {
    		textStyle: {
		        color: '#38b8ff'
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
		        data:['石油产量','石油消费量','石油供需比']
		    },
	        xAxis: [{
	            position: "bottom",
	            type: "category",
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
	                //rotate: 30
	            },
	            data: xData,
	        }],
	        yAxis: [{
	        	type: 'value',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        		name:'百万吨',
        		nameGap:-5,
        		nameTextStyle:{
			    	padding:[0,0,0,45],
			    	align:'center',
			    	color:'#fff',
				},
	           // min:36,
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
	                }
	            },
	            //单位
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
	            axisTick: {
	                show: true
	            },
	            splitLine: {
	                show: false
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
	                },
	                formatter: '{value}%'
	            },
	            //单位
	        }],
	        series: [{
	            name: "石油产量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#57FFFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },{
	            name: "石油消费量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData2,

	        },{
	            name: "石油供需比",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: lineData,

	        }]
	    }
	var myChart = echarts.init($('#chart5')[0]);
    myChart.setOption(option);
}


function chart6(data){
	var xData = data[2];
	var barData1 = data[3];
	var barData2 = data[4];
	var barData3 = data[5];
	var lineData = data[6];
	    var option =  {
    		textStyle: {
		        color: '#38b8ff'
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
	        legend: {
		    	show:true,
	            bottom : '2%',
	            itemGap: 12, //图例每项之间的间隔
	            itemWidth: 16, //图例宽度
	            itemHeight: 8, //图例高度
	            type:'scroll',
	            textStyle: {
	                color:'#fff',
	                fontFamily: '微软雅黑',
	                fontSize: 10,
	            },
		        data:['新增查明储量','消耗储量','储量接替率']
		    },
	        xAxis: [{
	            position: "bottom",
	            type: "category",
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
	                //rotate: 30
	            },
	            data: xData,
	        }],
	        yAxis: [{
	        	type: 'value',                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
        		name:'亿吨',
        		nameGap:-5,
        		nameTextStyle:{
			    	padding:[0,0,0,42],
			    	align:'center',
			    	color:'#fff',
				},
	           // min:36,
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
	                }
	            },
	            //单位
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
	            min:90,
	            axisTick: {
	                show: true
	            },
	            splitLine: {
	                show: false
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
	                },
	                formatter: '{value}%'
	            },
	            //单位
	        }],
	        series: [{
	            name: "新增查明储量",
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
	            name: "消耗储量",
	            type: "bar",
	            barWidth: '30%',
	            itemStyle: {
	                normal: {
	                	 color: '#FFD844',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData3,

	        },{
	            name: "储量接替率",
	            type: "line",
	            yAxisIndex: 1,
	            itemStyle: {
	                normal: {
	                    color: '#E9DC37'
	                },
	            },
	            data: lineData,

	        }]
	    }
	var myChart = echarts.init($('#chart6')[0]);
    myChart.setOption(option);
}