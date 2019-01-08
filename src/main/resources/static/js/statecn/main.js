$(document).ready(function(){
    getdata('/statecn/main/chart1.json',chart1);
    getdata('/statecn/main/chart2.json',chart2);
    getdata('/statecn/main/chart3.json',chart3);
    getdata('/statecn/main/main.json',main);
    getdata('/statecn/main/chart41.json',chart41);
   // getdata('/statecn/main/chart42.json',chart42);
    getdata('/statecn/main/chart43.json',chart43);

});

function chart1(data){
	var xData = data[2];
	var lineData = data[4];
	var barData = data[3];
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
	            position: "bottom",
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
	        yAxis: [{
	            name: '个',
	            nameGap:-5,
        		nameTextStyle:{
			    	padding:[0,0,0,20],
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
	        },{
	            type: "value",
	            position: 'right',
	            //min:16,
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
	            	formatter: '{value}%',
	                show: true,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:10
	                }
	            }
	        }],
	        series: [{
	            name: "企业数",
	            type: "bar",
	            barWidth: '60%',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData,

	        }, {
	            name: "企业数占比",
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
	var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


function chart2(data){
	var xData = data[2];
	var barData1 = data[3];
	var barData2 = data[4];
	var barData3 = data[5];
	var barData4 = data[6];
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
	            position: "bottom",
	            type: "category",
	            axisLabel: {
	                //interval: 0,
	                textStyle: {
	                    color: '#fff',
	                    fontSize:10
	                },
	               // rotate: 30,
	            },
	            axisLine:{
	                lineStyle:{
	                    color: '#38b8ff'
	                }
	            },
	            data: xData,
	        }],
	        yAxis: [{
	        	 name: '个',
		            nameGap:-5,
	        		nameTextStyle:{
				    	padding:[0,0,0,20],
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
	        }],
	        series: [{
	            name: "大型企业数",
	            type: "bar",
	            barWidth: '60%',
	            stack: '1',
	            itemStyle: {
	                normal: {
	                	 color: '#BBFFFF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData1,

	        },{
	            name: "中型企业数",
	            type: "bar",
	            barWidth: '60%',
	            stack: '1',
	            itemStyle: {
	                normal: {
	                	 color: '#1E90FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData2,

	        },{
	            name: "小型企业数",
	            type: "bar",
	            barWidth: '60%',
	            stack: '1',
	            itemStyle: {
	                normal: {
	                	 color: '#00F5FF',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData3,

	        },{
	            name: "微型企业数",
	            type: "bar",
	            barWidth: '60%',
	            stack: '1',
	            itemStyle: {
	                normal: {
	                	 color: '#FFD700',
	                	 barBorderRadius: 50,
	                },
	            },
	            data: barData4,

	        }]
	    }
	var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}

function chart3(data){
	option = {
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
		        bottom:'4%',
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
            name:'总资产收入率',
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
            name:'总资产利润率',
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
        }]
	};
	var myChart = echarts.init($('#chart3')[0]);
    myChart.setOption(option);	
}

function chart41(data){
	 var option =  {
			 legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        x:'center',
			        bottom:'4%',
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
		            data: data[2],
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            axisLabel: {
		            	formatter:'{value}%',
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
		        }],
		        series: [{
		            name: '亏损面',
		            type: 'pictorialBar',
		            symbol: 'rect',
		            barWidth: '60%',
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1,
		                        [
		                            {offset: 0, color: 'rgba(0,245,255,0.8)'},
		                            {offset: 0.4, color: 'rgba(0,245,255,0.6)'},
		                            {offset: 1, color: 'rgba(0,245,255,0.2)'}
		                        ]
		                    )
		                }
		            },
		            symbolRepeat: true,
		            //symbolSize: [12, 4],
		            symbolMargin: 1,
		            z: -10,
		            data: data[3]
		        }]
		    }
	var myChart = echarts.init($('#chart41')[0]);
	 myChart.setOption(option);	
}

function chart42(data){
	
	var clo = new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                {offset: 0, color: 'rgba(0,245,255,0.8)'},
                {offset: 0.4, color: 'rgba(0,245,255,0.6)'},
                {offset: 1, color: 'rgba(0,245,255,0.2)'}
            ]
        );
	var clo1 = new echarts.graphic.LinearGradient(
            0, 0, 0, 1,
            [
                {offset: 0, color: 'rgba(255,163,0,0.8)'},
                {offset: 0.4, color: 'rgba(255,163,0,0.6)'},
                {offset: 1, color: 'rgba(255,163,0,0.2)'}
            ]
        );
	 var option =  {
			 legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        x:'center',
			        bottom:'4%',
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
		            },
		            formatter:function (v) {
		            	//alert(JSON.stringify(v));
		            	var ss = v[0].name +'<br/>亏损深度： '+v[0].value+'%';
		            	if (v[0].name=='山西省') {
		            		ss = v[0].name +'<br/>亏损深度： -345.24%';	
						}
		            	if (v[0].name=='黑龙江') {
		            		ss = v[0].name +'<br/>亏损深度： -32057.49%';
						}
		            	return ss;
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
		            data: data[2],
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            min:-100,
		            axisLabel: {
		            	formatter:function (v) {
		            		return v+ '%';
		            	},
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
		        }],
		        series: [{
		            name: '亏损深度',
		            type: 'pictorialBar',
		            symbol: 'rect',
		            barWidth: '60%',
		            itemStyle: {
		                normal: {
		                    color: function (c){
		                    	if (c.name == '山西省'||c.name == '黑龙江') {
									return clo1;
								}
		                    	return clo;
		                    }
		                }
		            },
		            symbolRepeat: true,
		            //symbolSize: [12, 4],
		            symbolMargin: 1,
		            z: -10,
		            data: data[3]
		        }]
		    }
	var myChart = echarts.init($('#chart42')[0]);
	 myChart.setOption(option);	
}

function chart43(data){
	 var option =  {
			 legend: { //图例组件，颜色和名字
			        itemGap: 12, //图例每项之间的间隔
			        itemWidth: 16,
			        itemHeight: 8,
			        x:'center',
			        bottom:'4%',
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
		            data: data[2],
		        }],
		        yAxis: [{
		            name: '',
		            type: 'value',
		            position: 'left',
		            axisLabel: {
		            	formatter:'{value}%',
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
		        }],
		        series: [{
		            name: '集中度',
		            type: 'pictorialBar',
		            symbol: 'rect',
		            barWidth: '60%',
		            itemStyle: {
		                normal: {
		                    color: new echarts.graphic.LinearGradient(
		                        0, 0, 0, 1,
		                        [
		                         {offset: 0, color: 'rgba(255,163,0,0.8)'},
		                         {offset: 0.4, color: 'rgba(255,163,0,0.6)'},
		                         {offset: 1, color: 'rgba(255,163,0,0.2)'}
		                        ]
		                    )
		                }
		            },
		            symbolRepeat: true,
		            //symbolSize: [12, 4],
		            symbolMargin: 1,
		            z: -10,
		            data: data[3]
		        }]
		    }
	var myChart = echarts.init($('#chart43')[0]);
	 myChart.setOption(option);	
}

function main(da){
		var hours = da[1];
	     var days = da[0];
	     var datas = [];
	     for (var i = 0; i < 7; i++) {
	    	 var max = Math.max.apply(null,da[i+2]);
			for (var j = 0; j < hours.length; j++) {
				var d = [];
				var s = Math.ceil((da[i+2][j]/max)*10);
				d.push(i,j,s,da[i+2][j]);
				datas.push(d);
			}
		}
	    // alert(JSON.stringify(datas));
	    var data =datas;
	     option = {
	         tooltip: {
	             position: 'top',
	             formatter:function(v){
	            	 //alert(JSON.stringify(v));
	                    return v.name+'<br/>'+da[0][v.seriesIndex]+'：'+da[v.seriesIndex+2][v.dataIndex];
	                }
	         },
	         title: [{
	 	        right:'5%',
	 	        top: '5%',
	 	        text: '单位：万方',
	 	        textStyle: {
	 	            fontWeight: 'normal',
	 	            fontSize: 10,
	 	            color: "#fff"
	 	        },
	 	    },{
	 	        left:'center',
	 	        top: '3%',
	 	        text: '各省天然气用途分布特征  (2016)',
	 	        textStyle: {
	 	            fontWeight: 'normal',
	 	            fontSize: 16,
	 	            color: "#59EBE8"
	 	        },
	 	    }],
	         singleAxis: [],
	         series: []
	     };

	     echarts.util.each(days, function (day, idx) {
	    	 var sh = false;
	    	 if (idx==6) {
	    		 sh = true;
			}
	    	 var to = idx * 12+15;
	         if (idx == 0) {
	        	 to = 15;
			}
	         option.title.push({
	             textBaseline: 'middle',
	             top: to+'%',
	             left:'4%',
	             textStyle:{
	            	 fontSize:12,
	            	 color:'#fff'
	             },
	             text: day
	         });
	    
	         option.singleAxis.push({
	             left: 120,
	             type: 'category',
	             //boundaryGap: false,
	             data: hours,
	             top: to + '%',
	             height: (100 / 7 - 12) + '%',
	             nameTextStyle:{
	            	 color:'#fff'
	             },
	             //nameGap:200,
	             axisLabel: {
	            	 show:sh,
	            	 textStyle: {
		                    color: '#fff',
		                    fontSize:12
		                },
	                 interval: 1
	             },
	             axisLine:{
	            	 lineStyle:{
	            		 width:1,
	            		 color:'#fff'
	            	 }
	             }
	         });
	         option.series.push({
	             singleAxisIndex: idx,
	             coordinateSystem: 'singleAxis',
	             type: 'scatter',
	             data: [],
	             symbolSize: function (dataItem) {
	                 return dataItem[1] * 4;
	             },
	         itemStyle: {
	                normal: {
	                    color: function(params) {
	                        // build a color map as your need.
	                        var colorList = [
	                          '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
	                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
	                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0',
	                           '#C1232B','#B5C334','#FCCE10','#E87C25','#27727B',
	                           '#FE8463','#9BCA63','#FAD860','#F3A43B','#60C0DD',
	                           '#D7504B','#C6E579','#F4E001','#F0805A','#26C0C0'
	                        
	                        ];
	                        return colorList[params.dataIndex]
	             } 
	                }
	             },
	         });
	     });

	     echarts.util.each(data, function (dataItem) {
	         option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
	     });
	var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);	
}


	
