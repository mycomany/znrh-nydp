$(document).ready(function(){
    getdata('/motion/mounthReport/getMonthSumInfo.json',initMonthTradeInfoChart);
    getdata('/motion/mounthReport/getSupTransInfo.json',initFactoryTradeChart);
    getdata('/motion/mounthReport/getBWDInfo.json',initTradeUpWaterInfoChart);

    initTradeAreaInfoChart('tradeWay');
    initTradeAmountOrderChart('liveness');
    getdata('/motion/mounthReport/getTransSumRankInfo.json',initTradeAmountOrderInfoChart);

    getdata('/motion/mounthReport/getTransContriInfo.json',initTradeTopInfoChart);
    getdata('/motion/mounthReport/getTransMonthTrendInfo.json',initTradeInfoMonthChart);
    // initCallActionFlowRecord('callCount');


    $(".check_btn_option_status_l,.check_btn_option_status_r").click(function(){
        if($(this).hasClass("check_btn_option_checked")){
            //do nothing.....
        }else{
            $($($(this).parent()).find(".check_btn_option_checked")).removeClass("check_btn_option_checked");
            $(this).addClass("check_btn_option_checked");
        }
    });
});

function initMonthTradeInfoChart(jsonData){
    var monthTradeInfoChart = echarts.init(document.getElementById("monthTradeInfoChart"));

    monthTradeInfoChart.setOption(getMonthTradeInfoChartOption(jsonData));

    function getMonthTradeInfoChartOption(jsonData){
            var monthSumDatas = jsonData.monthSum;
            var monthDealAmount = 0;
            if(monthSumDatas!=null&&monthSumDatas.length>0){
                monthSumDatas.map(function(monthSumData){
                    var indxNm = monthSumData.indxNm;
                    var indxVal = monthSumData.indxVal;
                    if(indxNm=='月累计成交笔数'){
                        $("#monthDealCount").empty();
                        $("#monthDealCount").html(indxVal+"笔");
                    }else if(indxNm=='月累计成交金额'){
                        monthDealAmount = (indxVal/100000000).toFixed(2);
                    }else if(indxNm=='月参与交易省份'){
                        $("#monthDealAreaCount").empty();
                        $("#monthDealAreaCount").html(indxVal+"个");
                    }
                });
            }

            var option = {
                title:{
                    show:true,
                    textStyle:{fontWeight:'normal', color:'white'},
                    top:'bottom',
                    left:'center',
                    text:'月累计成交金额'
                },
                grid:{
                    left:0
                },
                series: [
                    {
                        name:'访问来源',
                        type:'pie',
                        radius: ['60%', '70%'],
                        center:['50%','40%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color:'#fff',
                                    fontSize: '20',
                                    fontWeight: 'bold'
                                },
                                position: 'center'
                            }
                        },
                        itemStyle:{
                            color:'#3CD6CA'
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:1, name:monthDealAmount+"亿"}
                        ]
                    }
                ]
            };
            return option;
        }


}

function initFactoryTradeChart(jsonData){
    var factoryTradeBarChart = echarts.init(document.getElementById("factoryTradeBarChart"));
    var factoryTradePieChart = echarts.init(document.getElementById("factoryTradePieChart"));

    factoryTradeBarChart.setOption(getFactoryTradeBarChartOption(jsonData));
    factoryTradePieChart.setOption(getFactoryTradePieChartOption(jsonData));

    function getFactoryTradeBarChartOption(jsonData){
        var supTransInfo = jsonData.supTransInfo;

        var indxNmArray = [];
        var grpNmsArray = [];

        var indxObj = {};
        var grpNmObj = {};
        if(supTransInfo!=null){//{LNG占比:{中石油:11,中石化:222},PNG占比:{中石油:222，中石化:333}}
            supTransInfo.map(function(supTransInfoData){
                var grpNm = supTransInfoData.grpNm;
                var indxNm = supTransInfoData.indxNm;
                var indxVal = supTransInfoData.indxVal;

                var indxObjTmp = {};
                if(indxObj[indxNm]!=null){
                    indxObjTmp = indxObj[indxNm];
                }else{
                    indxObj[indxNm] = indxObjTmp;
                }
                indxObjTmp[grpNm] = indxVal;
                if(grpNmObj[grpNm]==null){
                    grpNmObj[grpNm] = "SCQ";
                }
            });
            indxNmArray = Object.keys(indxObj);
            grpNmsArray = Object.keys(grpNmObj);
        }


        var indexSeriObj = {};

        indxNmArray.map(function(indxNm){
            var indxDatas =indxObj[indxNm];
            grpNmsArray.map(function(grpNm){
                var indxVal = indxDatas[grpNm]!=null?indxDatas[grpNm]:0;
                if(indexSeriObj[grpNm]!=null){
                    indexSeriObj[grpNm].data.push(indxVal);
                }else{
                    indexSeriObj[grpNm] = {
                        name: grpNm,
                        type: 'bar',
                        stack:'Scq',
                        label:{show:true,position:'top',color:'white'},
                        barWidth:10,
                        data: [indxVal]
                    };
                }
            });
        });

        var option = {
            title:{text:'按分项成交金额结构',textStyle:{color:'white',fontSize:10, fontWeight:'normal'}},
            grid:{
                right:0,
                top:'20%',
                left:0,
                bottom:'20%',
                containLabel: true
            },
            legend: {
                y:'bottom',
                x:'center',
                itemWidth: 16,
                itemHeight: 8,
                textStyle:{
                    color:'#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 10,
                },
                data: grpNmsArray
            },
            tooltip: {
		        trigger: 'axis',
		        formatter: function (v){
		        	//alert(JSON.stringify(v));
		        	return v[0].name+'<br/>'+v[0].seriesName +':'+v[0].value+'%<br/>'+v[1].seriesName +':'+v[1].value+'%';
		        }
		    },
            xAxis: {
                type: 'value',
                max:100,
                splitLine:{show:false},
                axisLine:{show:false},
                axisLabel:{show:false},
                axisTick:{show:false},
                boundaryGap: [0, 0.01]
            },
            color:["#55F8CB","#068EC9"],
            yAxis: {
                type: 'category',
                axisTick:{show:false},
                axisLabel:{color:'white'},
                data: indxNmArray
            },
            series : [
                      {"name":"中石化",
                    	"type":"bar",
                    	"stack":"Scq",
                    	"barWidth":"40%",
                    	"data":[33.57,10.69,33.57,10.69]
                      },{"name":"中石油",
                    	  "type":"bar",
                    	  "stack":"Scq",
                    	  "barWidth":"40%",
                    	  "data":[66.43,89.31,66.43,89.31]
                      }]
        }
        return option;
    }

    function getFactoryTradePieChartOption(jsonData){
        var supTransSumInfo = jsonData.supTransSumInfo;

        var indxNmArray = new Array();

        var serDataArray = new Array();

        if(supTransSumInfo!=null){
            supTransSumInfo.map(function(supTransSumInfoData){
                var grpNm = supTransSumInfoData.grpNm;
                var indxNm = supTransSumInfoData.indxNm;
                var indxVal = supTransSumInfoData.indxVal;
                indxNmArray.push(grpNm);
                serDataArray.push({name:grpNm,value:indxVal});
            });
        }
        var option = {
            title:{text:'成交金额整体结构',textStyle:{color:'white',fontSize:10, fontWeight:'normal'}},
            legend: {
                y:'bottom',
                x:'center',
                itemWidth: 16,
                itemHeight: 8,
                textStyle:{
                    color:'#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 10,
                },
                data: Object.keys(serDataArray)
            },
            calculable : true,
            color:["#55F8CB","#068EC9"],
            tooltip:{formatter :'{b}<br/>成交额:{c} 元<br/>占比：{d}%'},
            series : [
                {
                    name:'pie2',
                    type:'pie',
                    borderColor:'#068EC9',
                    radius:[0,'55%'],
                    center:['50%','55%'],
                    label: {show:true,color:'white'},
                    labelLine:{show:true,color:'white',lineStyle:{shadowOffsetY:100}},
                    data:serDataArray
                }
                // {
                //     name:'pie1',
                //     type:'pie',
                //     borderColor:'#068EC9',
                //     radius:[0,'40%'],
                //     label: {show: false,formatter:'{c}'+'%'},
                //     lableLine: {show: false},
                //     data:[
                //         {value:70, name:'中石油',
                //             itemStyle:{color :'#068EC9'},
                //             label:{show:true,color:'white'},
                //             labelLine:{show:true,color:'white',lineStyle:{shadowOffsetY:100}}},
                //         {value:20, name:'rose6',itemStyle:{opacity:0}}
                //     ]
                // },
                // {
                //     name:'pie2',
                //     type:'pie',
                //     borderColor:'#068EC9',
                //     radius:[0,'60%'],
                //     label: {show: false,formatter:'{c}'+'%'},
                //     lableLine: {show: false},
                //     data:[
                //         {value:70, name:'rose5',itemStyle:{opacity :0}},
                //         {value:20, name:'中石化',itemStyle:{color :'#55F8CB'},
                //             label:{show:true,color:'white'},
                //             labelLine:{show:true,color:'white',lineStyle:{shadowOffsetY:100}}}
                //     ]
                // }
            ]
        };
        return option;
    }

}

function initTradeUpWaterInfoChart(jsonData){
    var tradeUpWaterInfoChart = echarts.init(document.getElementById("tradeUpWaterInfoChart"));
    tradeUpWaterInfoChart.setOption(getTradeUpWaterInfoChartOption(jsonData));
    function getTradeUpWaterInfoChartOption(jsonData){
        var jsonDataObj = jsonData.BWDInfo;

        var grpDataObj = {};//{grpNm:{indxNm:indxVal}}
        var indxNmObj = {};

        if(jsonDataObj!=null){//{北京市:{交易量（亿立方）：122,升贴水加权值：2222}}
            jsonDataObj.map(function(json){
                var grpNm = json.grpNm;
                var indxID = json.indxID;
                var indxNm = json.indxNm;
                var indxVal = json.indxVal;

                var indxDataObj = {};//{indxNm:indxValue}
                if(grpDataObj[grpNm]!=null){
                    indxDataObj = grpDataObj[grpNm];
                }else{
                    grpDataObj[grpNm] = indxDataObj;
                }
                indxDataObj[indxNm] = json;

                if(indxNmObj[indxNm]==null){
                    indxNmObj[indxNm] = indxID;
                }
            });
        }

        var indxNmArray = Object.keys(indxNmObj);
        var grpNmArray = Object.keys(grpDataObj);
        var indxSeriesObj = {};
        grpNmArray.map(function(grpNm){
            var grpData = grpDataObj[grpNm];
            indxNmArray.map(function(indxNm){
                var jsonDataGroup = grpData[indxNm];
                var indxId = indxNmObj[indxNm];
                var indxVal = jsonDataGroup!=null?jsonDataGroup.indxVal:0;
                if(indxSeriesObj[indxId]==null){
                    indxSeriesObj[indxId]={"indxNm":indxNm,"indxValue":[]};
                }
                indxSeriesObj[indxId].indxValue.push(indxVal);
            });
        });

        var lineArray = indxSeriesObj["02"].indxValue;
        var barArray = indxSeriesObj["01"].indxValue;
        var echarOption = {
            grid:{
            	left: '3%',
	 			  right:'3%',
	 			  top:'10%',
	 			  bottom:'18%',
	 			 containLabel: true
            },
            tooltip: {
    			trigger: 'axis',
    			axisPointer: { // 坐标轴指示器，坐标轴触发有效
    				type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
    			},
    			formatter:function (v){
		        	return v[0].name+'<br/>'+v[0].seriesName +':'+v[0].value+' 元<br/>'+v[1].seriesName +':'+v[1].value+' 亿立方米';	
		        }
    		},
            legend: {
                textStyle:{
                    color:'white'
                },
                bottom:'2%',
                itemWidth: 16,
                itemHeight: 8,
                textStyle:{
                    color:'#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 10,
                },
                data:["升贴水加权值（元）","交易量（亿立方米）"]
            },
            xAxis: {
                type: 'category',
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
	            splitLine: {
	                show: false
	            },
                data: ["甘肃","云南","贵州","重庆","宁夏","青海","其他","广西","四川","陕西","内蒙古"]
            },
            yAxis: [
                {
                    type: 'value',
                    splitNumber:3,
                    splitLine:{
    	                show:false
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
    	            }
                },
                {
                    type: 'value',
                    splitNumber:3,
                    splitLine:{
    	                show:false
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
    	            }
                }
            ],
            series: [
                {
                    name:'升贴水加权值（元）',
                    type: 'line',
                    showSymbol:false,
                    itemStyle: {color: '#254E88'},
                    data: [0,0.0094,0.0391,0,0.4356,0,0.0002,0.003,0.0074,0,0.5573]
                },
                {
                    name:'交易量（亿立方米）',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#00EBE0'},
                                    {offset: 0.5, color: '#03B7D3'},
                                    {offset: 1, color: '#0494C9'}
                                ]
                            )
                        }
                    },
                    yAxisIndex: 1,
                    barWidth: '15px',
                    data:[0.0702,0.2237,0.1595,0.3835,1.0628,0.1,1.6162,0.1428,2.38,0.035,1.1885]

                }
            ]
        };
        return echarOption;
    }

}

function initTradeAreaInfoChart (showType){
    var tradeAreaInfoChart = echarts.init(document.getElementById("tradeAreaInfoChart"));

    getdata('/motion/mounthReport/getTransAreaInfo.json',function(jsonData){
        tradeAreaInfoChart.setOption(getTradeAreaInfoChartOption(jsonData));
        function getTradeAreaInfoChartOption(jsonData){

          var series = [];
          var xData = [];
          var a = '挂牌交易金额';
          var b = '竞价交易金额';
            if(showType=='tradeWay'){
            	series = [
                          {
                              "name":a,
                              "type":"bar",
                              "showSymbol":false,
                              "stack":"SCQ",
                              "barWidth":15,
                              "data":[430.50,19200.11,5867.55,2703.23,926.64,2614.37,30052.55,3574.79,21242.01,1160.00,36829.00,"-","-","-","-"]
                               },{
                              "name":b,
                              "type":"bar",
                              "showSymbol":false,
                              "stack":"SCQ",
                              "barWidth":15,
                              "data":["-","-","-","-","-","-","-","-","-","-","-",346.13,485.85,881.60,912.34]
                               }];
            	xData = ["陕西","宁夏","重庆","广西","甘肃","贵州","其他","云南","内蒙古","青海","四川","其他","上海","广东","江苏"];
            }else{
            	 a = 'PNG交易金额';
                 b = 'LNG交易金额';
            	series = [
                          {
                              "name":a,
                              "type":"bar",
                              "showSymbol":false,
                              "stack":"SCQ",
                              "barWidth":15,
                              "data":[430.50,19200.11,5867.55,2703.23,926.64,2614.37,30052.55,3574.79,21242.01,1160.00,36829.00,"-","-","-","-"]
                               },{
                              "name":b,
                              "type":"bar",
                              "showSymbol":false,
                              "stack":"SCQ",
                              "barWidth":15,
                              "data":["-","-","-","-","-","-","-","-","-","-","-",485.85,881.60,912.34,346.13]
                               }];
            	xData = ["陕西","宁夏","重庆","广西","甘肃","贵州","其他","云南","内蒙古","青海","四川","上海","广东","江苏","其他"];
            }

            var grpDataObj = {};//{grpNm:{indxNm:indxVal}}
            var indxNmObj = {};

            /*if(transAreaDatas!=null){//{北京市:{竞价交易金额（亿立方）：122,挂牌交易金额：2222}}
                transAreaDatas.map(function(json){
                    var grpNm = json.grpNm;
                    var indxID = json.indxID;
                    var indxNm = json.indxNm;
                    var indxVal = json.indxVal;

                    var indxDataObj = {};//{indxNm:indxValue}
                    if(grpDataObj[grpNm]!=null){
                        indxDataObj = grpDataObj[grpNm];
                    }else{
                        grpDataObj[grpNm] = indxDataObj;
                    }
                    indxDataObj[indxNm] = json;

                    if(indxNmObj[indxNm]==null){
                        indxNmObj[indxNm] = indxID;
                    }
                });
            }*/

            var indxNmArray = Object.keys(indxNmObj);
            var grpNmArray = Object.keys(grpDataObj);
            var indxSeriesObj = {};
            grpNmArray.map(function(grpNm){
                var grpData = grpDataObj[grpNm];
                indxNmArray.map(function(indxNm){
                    var jsonDataGroup = grpData[indxNm];
                    var indxId = indxNmObj[indxNm];
                    var indxVal = jsonDataGroup!=null?jsonDataGroup.indxVal:0;
                    if(indxSeriesObj[indxId]==null){
                        indxSeriesObj[indxId]= {
                            name:indxNm,
                            type: 'bar',
                            showSymbol:false,
                            stack:'SCQ',
                            barWidth:15,
                            data: [indxVal]
                        };
                    }
                    indxSeriesObj[indxId].data.push(indxVal);
                });
            });
            var option = {
                grid:{
                    top:'15%',
                    left:'5%',
                    right:'5%',
                    bottom:'5%',
                    containLabel: true
                },
                legend: {
                    textStyle:{
                        color:'white'
                    },
                    top:'top',
                    left:'right',
                    itemWidth: 16,
                    itemHeight: 8,
                    textStyle:{
                        color:'#fff',
                        fontFamily: '微软雅黑',
                        fontSize: 10,
                    },
                    data:indxNmArray
                },
                tooltip:{
                	trigger: "axis",
                    formatter: function(v){
                    	var c = '';
                    	var d = '';
                    	if (v[0].value>0) {
							c = '<br/>'+a+'：'+v[0].value+'万元';
						}
                    	if (v[1].value>0) {
							d = '<br/>'+b+'：'+v[1].value+'万元';
						}
                    	return v[0].name +c+d;
                    }//'{b} : {c} 万元'
                },
                color:['#417AD3','#55F8CB'],
                xAxis: {
                    type: 'category',
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
    	            splitLine: {
    	                show: false
    	            },
                    data: xData
                },
                yAxis: {
                    name : '万元',
                    type: 'value',
                    splitNumber:3,
                    nameGap:-5,
                    nameTextStyle:{
                        padding:[0,0,0,45],
                        align:'center',
                        color:'#fff',
                    },
                    splitLine:{
    	                show:false
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
                },
                series: series
            }
            return option;
        }

    });
}

function initTradeAmountOrderChart(showType){
    var tradeAmountOrderBarChart = echarts.init(document.getElementById("tradeAmountOrderBarChart"));
    var tradeAmountOrderPieChart = echarts.init(document.getElementById("tradeAmountOrderPieChart"));

    getdata('/motion/mounthReport/getMarketFtActive.json',function(jsonData){
        if(showType=='liveness'){
            tradeAmountOrderBarChart.setOption(getTradeAmountOrderBaOption(jsonData));
            tradeAmountOrderPieChart.setOption(getTradeAmountOrderPieOption(jsonData));
        }else{
            // $("#tradeAmountOrderBarChart").addClass("div-hidden");
            // $("#tradeAmountOrderPieChart").addClass("div-hidden");
        }
    });

    marketFtPriceChartChange('LNG');

    if(showType=='liveness'){
        $("#marketFtPriceChartArea0").show();
        $("#tradeAmountOrderBarChart").show();
        $("#tradeAmountOrderPieChart").show();
        $("#tradeAmountOrderPieChart").find("div").width("100%");
        $("#tradeAmountOrderPieChart").find("div").height("100%");
        $("#tradeAmountOrderPieChart").find("canvas").width("100%");
        $("#tradeAmountOrderPieChart").find("canvas").height("100%");
        $("#marketFtPriceChartArea").hide();
        $("#marketFtPriceChartLngPng").hide();
    }else{
        $("#marketFtPriceChartArea0").hide();
        $("#tradeAmountOrderBarChart").hide();
        $("#tradeAmountOrderPieChart").hide();
        $("#marketFtPriceChartArea").show();
        $("#marketFtPriceChartLngPng").show();

    }

    function getTradeAmountOrderBaOption(jsonData){
        var marketFtActiveDegree = jsonData.marketFtActiveDegree;

        var indxNmArray = [];
        var indxValArray = [];

        marketFtActiveDegree.map(function(marketFtActiveDegreeDt){
            var indxNm = marketFtActiveDegreeDt.indxNm;
            var indxVal = marketFtActiveDegreeDt.indxVal;
            indxNmArray.push(indxNm);
            indxValArray.push(indxVal);
        });
        var barColor = new echarts.graphic.LinearGradient(1, 0, 0, 0,
            [
                {offset: 0, color: '#0494C9'},
                {offset: 0.5, color: '#03B7D3'},
                {offset: 1, color: '#00EBE0'}
            ]
        );
        var option = {
            title:{text:'活跃客户交易行为分布',x:'center',y:'bottom',textStyle:{color:'white',fontSize:14, fontWeight:'normal'},padding:[20,0,12,0]},
            grid:{
            	 left: '3%',
	 			  right:'3%',
	 			  top:'6%',
	 			  bottom:'28%',
	 			 containLabel: true
            },
            xAxis: {
                type: 'value',
                // max:100,
                splitLine:{show:false},
                axisLine:{show:false},
                axisLabel:{show:false},
                axisTick:{show:false},
                boundaryGap: [0, 0.01]
            },
            yAxis: {
                type: 'category',
                axisTick:{show:false},
                axisLabel:{color:'white'},
                data: indxNmArray
            },
            tooltip:{trigger: 'axis'},
            series: [
                {
                    type: 'bar',
                    stack:'Scq',
                    label:{show:true,position:'right',color:'white'},
                    barWidth:10,
                    itemStyle: {
                        normal: {
                            barBorderRadius:[0,10,10,0],
                            color:barColor
                        }
                    },
                    data: indxValArray
                }
            ]
        }
        return option;
    }

    function getTradeAmountOrderPieOption(jsonData){
        var marketFtActivePercent = jsonData.marketFtActivePercent;
        var dataArray = [];
        var leagenArray = [];
        marketFtActivePercent.map(function(marketFtActivePercentDt){
            dataArray.push({name:marketFtActivePercentDt.indxNm,value:marketFtActivePercentDt.indxVal});
            leagenArray.push(marketFtActivePercentDt.indxNm);
        });

        var option = {
            legend: {
                left:'center',
                bottom:5,
                itemWidth: 16,
                itemHeight: 8,
                textStyle:{
                    color:'#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 10,
                },
                data: leagenArray
            },
            calculable : true,
            tooltip:{},
            series : [
                {
                    type:'pie',
                    borderColor:'#068EC9',
                    startAngle:180,
                    radius:['50%','60%'],
                    center:['50%','30%'],
                    color:["#F8CB00","#068EC9"],
                    label: {show: true,formatter:'{c}',color:'white'},
                    labelLine : {show: true,lineStyle:{color:'white'}},
                    data:dataArray
                }
            ]
        };
        return option;
    }

}


function initTradeAmountOrderInfoChart(jsonData){
    var tradeAmountOrderInfo1Chart = echarts.init(document.getElementById("tradeAmountOrderInfo1Chart"));
   // var tradeAmountOrderInfo2Chart = echarts.init(document.getElementById("tradeAmountOrderInfo2Chart"));

    tradeAmountOrderInfo1Chart.setOption(getTradeAmountOrderInfo1Option(jsonData));
    //tradeAmountOrderInfo2Chart.setOption(getTradeAmountOrderInfo2Option(jsonData));

    function getTradeAmountOrderInfo1Option(jsonData){
        var supTransInfo= jsonData.supTransInfo;
        var idxDatas = {};

        supTransInfo.map(function(supTransInfoData){
            var indxNm = supTransInfoData.indxNm;
            var indxVal = supTransInfoData.indxVal;
            idxDatas[indxNm] = indxVal;
        });
        var barColor = new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [
                {offset: 0, color: '#00EBE0'},
                {offset: 0.5, color: '#03B7D3'},
                {offset: 1, color: '#0494C9'}
            ]
        );
        //alert(JSON.stringify(Object.values(idxDatas)));
        var echartOption = {
            title:{
                show:true,
                text:"TOP5省份",
                x:'center',
                top:'-3%',
                textStyle:{
                    color:"white",
                    fontWeight:100,
                    fontSize:15
                }
            },
            tooltip:{
            	 trigger: 'axis',
 		        formatter:function (v){
 		        	//alert(JSON.stringify(v));
 		        	return v[0].name+':'+v[0].value+' 万元';	
 		        }
            },
            grid: {
				 left: '3%',
	 			  right:'3%',
	 			  top:'17%',
	 			  bottom:'4%',
	 			 containLabel: true
		    },
            xAxis: {
                type: 'category',
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
                axisTick: {
                    show:true,
                    alignWithLabel: true
                },
                splitLine: {
	                show: false
	            },
                data: ["四川","内蒙古","宁夏","重庆","云南"]
            },
            yAxis: [
                {
                	name:'万元',
                	nameGap:-2,
              		nameTextStyle:{
    				    	padding:[0,0,0,33],
    				    	align:'center',
    				    	color:'#fff',
    				},
                    type: 'value',
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
                    axisTick: {
                        show:true,
                        alignWithLabel: true
                    },
                    splitLine: {
    	                show: false
    	            },
                }
            ],
            series: [
                {
                    type:'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color:barColor
                        }
                    },
                    barWidth: '10px',
                    label: {
                        show:false,
                        color:'white',
                        position: 'top',
                        // fontSize:18
                    },
                    data:[36829.00,21242.01,19200.11,5867.55,3574.79]

                }
            ]
        };
        return echartOption;
    }

   /* function getTradeAmountOrderInfo2Option(jsonData){
        var supTransSumInfo= jsonData.supTransSumInfo;
        var idxDatas = {};

        supTransSumInfo.map(function(supTransInfoData){
            var indxNm = supTransInfoData.indxNm;
            var indxVal = supTransInfoData.indxVal;
            idxDatas[indxNm] = indxVal;
        });

        var barColor = new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [
                {offset: 0, color: '#00EBE0'},
                {offset: 0.5, color: '#03B7D3'},
                {offset: 1, color: '#0494C9'}
            ]
        );
        // console.log(barColor);
        var echartOption = {
            title:{
                show:true,
                text:"TOP5企业",
                x:'center',
                top:30,
                textStyle:{
                    color:"white",
                    fontWeight:100,
                    fontSize:15
                }
            },
            tooltip:{
                formatter: '{b} - {c} 万元'
            },
            grid:{
                top:70,
                left:30,
                right:0,
                bottom:20
                // bottom:40
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisTick: {
                    show:false,
                    alignWithLabel: true
                },
                axisLabel:{
                    formatter:function(v){
                        return v.replace(/有限责任公司|股份有限公司/g,'')
                    },
                },
                data: Object.keys(idxDatas)
            },
            yAxis: [
                {
                    type: 'value',
                    show:false
                }
            ],
            series: [
                {
                    type:'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color:barColor
                        }
                    },
                    barWidth: '10px',
                    label: {
                        show:false,
                        color:'white',
                        position: 'top',
                        // fontSize:18
                    },
                    data:Object.values(idxDatas)

                }
            ]
        };
        return echartOption;
    }*/


}

function initTradeTopInfoChart(jsonData){
    var tradeTopInfoChart = echarts.init(document.getElementById("tradeTopInfoChart"));

    tradeTopInfoChart.setOption(getTradeTopInfoOption(jsonData));

    function getTradeTopInfoOption(jsonData){
        var transContri = jsonData.transContri;
        var dataTmpObj = {};
        transContri.map(function(transContriData){
            var grpNm = transContriData.grpNm;
            var indxNm = transContriData.indxNm;
            var indxVal = transContriData.indxVal;

            if(dataTmpObj[grpNm]!=null){
                if(indxNm=='交易总笔数'){
                    dataTmpObj[grpNm][0] = indxVal;
                }else{
                    dataTmpObj[grpNm][1] = indxVal;
                    dataTmpObj[grpNm][2] = indxVal;
                    dataTmpObj[grpNm][3] = grpNm;
                }
            }else{
                dataTmpObj[grpNm] = [];
                if(indxNm=='交易总笔数'){
                    dataTmpObj[grpNm][0] = indxVal;
                }else{
                    dataTmpObj[grpNm][1] = indxVal;
                    dataTmpObj[grpNm][2] = indxVal;
                    dataTmpObj[grpNm][3] = grpNm;
                }
            }
        });
        console.log(JSON.stringify(Object.values(dataTmpObj)));
        var option = {
            grid:{
                left:'5%',
                right:'8%',
            },
            xAxis: {
            	 name:'交\n易\n笔\n数',
            	 nameTextStyle:{color:'white',fontSize :10},
                offset:-200,
                axisLine:{onZero:false,lineStyle:{color:'#313A52'}},
                axisTick:{show:false},
                axisLabel:{show:true,color:'white'},
                splitLine:{show:false}
            },
            yAxis: {
                name:'交易总金额（万元）',
                nameLocation:'start',
                nameTextStyle:{color:'white',fontSize :10},
                offset:-260,
                axisLine:{onZero:false,lineStyle:{color:'#313A52'}},
                axisTick:{show:false},
                axisLabel:{show:true,color:'white'},
                splitLine:{show:false}
            },
            tooltip:{
                formatter: function(params){
                    return params.value[3]+"<br/>交易总笔数:"+params.value[0]+"<br>交易总金额:"+params.value[1]+"万元";
                }
            },
            color:['#41C2A7','#AD6F1D','#41C2A8','#1986C4'],
            series: [{
                // symbolSize: 20,
                type: 'scatter',
                symbolSize: 20,
                data: Object.values(dataTmpObj)
            }]
        };

        return option;
    }

}

function initTradeInfoMonthChart(jsonData){
    var tradeInfoMonthChart = echarts.init(document.getElementById("tradeInfoMonthChart"));

    tradeInfoMonthChart.setOption(getTradeInfoMonthOption(jsonData));

    function getTradeInfoMonthOption(jsonData){
        var transMonthTrend = jsonData.transMonthTrend;

        var legendObj = {};
        var pngAmountArray = [];
        var lngAmountArray = [];
        var lngGrownArray = [];
        var pngGrownArray = [];
        var monthObj = {};

        if(transMonthTrend!=null){
            transMonthTrend.map(function(transMonthTrendData){
                var stattDt = transMonthTrendData.stattDt;
                var indxID = transMonthTrendData.indxID;
                var indxNm = transMonthTrendData.indxNm;
                var indxVal = transMonthTrendData.indxVal;
                var monthDatas = null;
                if(monthObj[stattDt]!=null){
                    monthDatas = monthObj[stattDt];
                }else{
                    monthDatas = {};
                    monthObj[stattDt] = monthDatas;
                }


                if(indxID=='01'){//LNG交易金额
                    monthDatas.lngAmount = indxVal;
                }else if(indxID=='02'){//PNG交易金额
                    monthDatas.pngAmount = indxVal;
                }else if(indxID=='03'){//LNG增速
                    monthDatas.lngGrown = indxVal;
                }else if(indxID=='04'){//PNG增速
                    monthDatas.pngGrown = indxVal;
                }
            });

            var allMonths = Object.keys(monthObj);
            allMonths.map(function(monthVal){
                lngAmountArray.push(monthObj[monthVal].lngAmount);
                pngAmountArray.push(monthObj[monthVal].pngAmount);
                lngGrownArray.push(monthObj[monthVal].lngGrown);
                pngGrownArray.push(monthObj[monthVal].pngGrown);
            });
        }
        var option = {
            grid:{
                top:'25%',
                left:'5%',
                right:'5%',
                bottom:'5%',
                containLabel: true
            },
            tooltip:{
            	trigger: "axis",
            },
            legend: {
                right:5,
                itemWidth: 16,
                itemHeight: 8,
                textStyle:{
                    color:'#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 10,
                },
                data:["PNG交易额","LNG交易额"]
            },
            xAxis: {
                type: 'category',
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
	            splitLine: {
	                show: false
	            },
                data: ["2018-4","2018-5","2018-6","2018-7"]
            },
            yAxis: [{
            	name:'万元',
                type: 'value',
                position:'left',
                nameGap:5,
                nameTextStyle:{
			    	padding:[0,0,0,45],
			    	align:'center',
			    	color:'#fff',
				},
                position:'left',
                splitNumber:5,
                splitLine:{
	                show:false
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
	            }
            }],
            series: [
                {
                    name:'PNG交易额',
                    type: 'bar',
                    barWidth: '25%',
                    //stack: 'barStack',
                    itemStyle: {
                        normal: {
                            color: '#55f8cb'
                        }
                    },
                    data:[1540.00,8405.46,45441.36,124600.77]
                },
                {
                    name:'LNG交易额',
                    type: 'bar',
                    barWidth: '25%',
                   // stack: 'barStack',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color: '#ff6600'
                        }
                    },
                    data: [0.00,254.29,6704.35,2625.93]
                }
            ]
        }

        return option;
    }

}

function marketFtPriceChartChange(lngOrPng){
    var marketFtPriceChart = echarts.init(document.getElementById("marketFtPriceChart"));

    getdata('/motion/mounthReport/getMarketFtPrice.json',function(jsonData){
        marketFtPriceChart.setOption(getMarketFtPriceChartOption(jsonData,lngOrPng));
    });


    function getMarketFtPriceChartOption(jsonData,lngOrPng){
        var marketFtPriceDataArray = null;
        if(lngOrPng == 'LNG'){
            marketFtPriceDataArray = jsonData.marketFtPriceLNG;
            $("#pngTag").removeClass("marketFtPriceChartLngPngChecked");
            $("#lngTag").addClass("marketFtPriceChartLngPngChecked");
        }else{
            marketFtPriceDataArray = jsonData.marketFtPricePNG;
            $("#lngTag").removeClass("marketFtPriceChartLngPngChecked");
            $("#pngTag").addClass("marketFtPriceChartLngPngChecked");
        }


        var indxNmGroup = {};
        if(marketFtPriceDataArray!=null){
            marketFtPriceDataArray.map(function(marketFtPriceData){
                var indxNm = marketFtPriceData.indxNm;
                var indxVal = marketFtPriceData.indxVal;
                var grpNm = marketFtPriceData.grpNm;

                if(indxNmGroup[indxNm]!=null){
                    var indxNmGroupObj = indxNmGroup[indxNm];
                    indxNmGroupObj[grpNm] = indxVal;
                }else{
                    var grpNmGroup = {};
                    grpNmGroup[grpNm] = indxVal;
                    indxNmGroup[indxNm] = grpNmGroup;
                }
            });
        }

        var allIndxNms = Object.keys(indxNmGroup);
        var lineArray = new Array();
        var barArray = new Array();
        allIndxNms.map(function(indxNm){
            var grpNmObj = indxNmGroup[indxNm];
            var indxValAmount = grpNmObj['成交总金额']!=null? grpNmObj['成交总金额']: 0;
            var indxValCount = grpNmObj['成交总笔数']!=null? grpNmObj['成交总笔数']: 0;
            barArray.push(indxValAmount);
            lineArray.push(indxValCount);
        });

        var echarOption = {
            grid:{
                top:'10%',
                left:'5%',
                right:'5%',
                bottom:'20%',
                containLabel: true
            },
            legend: {
                itemWidth: 16,
                itemHeight: 8,
                textStyle:{
                    color:'#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 10,
                },
                bottom:5,
                x:'center',
                data:['成交总金额','成交总笔数']
            },
            tooltip:{
            	trigger: 'axis'
            },
            xAxis: {
                type: 'category',
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
	            splitLine: {
	                show: false
	            },
                data: allIndxNms
            },
            yAxis: [
                {
                    type: 'value',
                    splitNumber:3,
                    splitLine:{
    	                show:false
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
    	            }
                },
                {
                	 name: '万元',
    				 nameGap:-5,
    				 nameTextStyle:{
    					padding:[0,0,0,-40],
    					align:'center',
    					color:'#fff',
    				},
                    type: 'value',
                    splitNumber:3,
                    splitLine:{
    	                show:false
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
    	            }
                }
            ],
            series: [
                {
                    name:'成交总笔数',
                    type: 'line',
                    showSymbol:false,
                    itemStyle: {color: '#254E88'},
                    data: lineArray
                },
                {
                    name:'成交总金额',
                    type:'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color: new echarts.graphic.LinearGradient(
                                0, 0, 0, 1,
                                [
                                    {offset: 0, color: '#00EBE0'},
                                    {offset: 0.5, color: '#03B7D3'},
                                    {offset: 1, color: '#0494C9'}
                                ]
                            )
                        }
                    },
                    yAxisIndex: 1,
                    barWidth: '15px',
                    data:barArray

                }
            ]
        };
        return echarOption;
    }

}
