$(document).ready(function(){
    getdata('/motion/index/BidRoundInfo.json',initCallAction);
    getdata('/motion/index/BidPriceCPKInfo.json',initCallActionSubAmount);
    getdata('/motion/index/BidTransAmtInfo.json',initCallActionTradCount);
    getdata('/motion/index/BidEnegyInfo.json',initWordInfo);
    getdata('/motion/index/bidCompMapInfo.json',initChinaMap);
    getdata('/motion/index/BidCompTableInfo.json',intiCallActionCompanyLstTable);
    initCallActionFlowRecord('callCount');


    $(".check_btn_option_status_l,.check_btn_option_status_r").click(function(){
        if($(this).hasClass("check_btn_option_checked")){
            //do nothing.....
        }else{
            $($($(this).parent()).find(".check_btn_option_checked")).removeClass("check_btn_option_checked");
            $(this).addClass("check_btn_option_checked");
        }
    });
});

function initCallAction(jsonData){
    var call_action_asp_echart = echarts.init(document.getElementById("callActionAsp"));
    var call_action_deep_echart = echarts.init(document.getElementById("callActionDeep"));

    call_action_asp_echart.setOption(getCallActionAspEchartOption(jsonData));
    call_action_deep_echart.setOption(getCallActionDeepEchartOption(jsonData));


    function getCallActionAspEchartOption(jsonData){
        /*var wishDatas = jsonData.intensity;
        var lineArray = [];
        var barArray = [];
        if(wishDatas!=null){
            wishDatas.map(function(wishData){
                var grpID = wishData.grpID;
                var indxID = wishData.indxID;
                var indxNm = wishData.indxNm;
                var indxVal = wishData.indxVal;
                if(grpID=='01'){//line
                    if(indxID=='01'){
                        lineArray[0] = indxVal;
                    }else{
                        lineArray[1] = indxVal;
                    }
                }else if(grpID=='02'){//bar
                    if(indxID=='01'){
                        barArray[0] = indxVal;
                    }else{
                        barArray[1] = indxVal;
                    }
                }
            })
        }*/
        var lineArray = [100,100], barArray = [1367,1367];
        var barColor = new echarts.graphic.LinearGradient(0, 0, 0, 1,
            [
                {offset: 0, color: '#00EBE0'},
                {offset: 0.5, color: '#03B7D3'},
                {offset: 1, color: '#0494C9'}
            ]
        );
        var echartOption = {
            title:{
                show:true,
                text:"竞价意愿",
                textStyle:{
                    color:"white",
                    fontWeight:100,
                    fontSize:10
                }
            },
            grid:{
                top:'25%',
                bottom:'20%',
                left:0,
                right:0,
                containLabel: true
            },
            legend: {
                show:false,
                textStyle:{color:'white'},
                left:'left',
                top:'12%',
                itemWidth: 16,
                itemHeight: 8,
                textStyle:{
                    color:'#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 8,
                },
                data:[
                    {name:'企业数',icon:'roundRect'},
                    {name:'占响应会员比例',icon:'roundRect'}
                ]
            },
            tooltip:{
                trigger:'item'
            },
            xAxis: [{
                type: 'category',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisTick :{show:false},
                axisLabel:{
                    fontSize:7,
                    interval:0,
                },
                data: ['申报出价', '结算成交']
            }],
            yAxis: [
                {
                    type: 'value',
                    splitNumber:3,
                    axisTick :{show:false},
                    axisLabel: {
                        color: 'white',
                        fontSize:7,
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    }
                },
                {
                    type: 'value',
                    splitNumber:3,
                    axisLabel: {
                        color: 'white'
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisTick :{show:false},
                    splitLine:{show:false}
                }
            ],
            series: [
                {
                    name:'占响应会员比例',
                    type: 'line',
                    yAxisIndex:1,
                    showSymbol:false,
                    itemStyle: {color: '#254E88'},
                    data: lineArray,
                },
                {
                    name:'企业数',
                    type:'bar',
                    yAxisIndex:0,
                    itemStyle: {
                        normal: {
                            barBorderRadius:[10,10,0,0],
                            color:barColor
                        }
                    },
                    barWidth: 12,
                    data:barArray

                }
            ]
        };
        return echartOption;
    }

    function getCallActionDeepEchartOption(jsonData){
        var indxValArray = [2240,2240];

        /* var intensity = jsonData.wish;
        var indxNmArray = [];
        var indxValArray = [];
        if(intensity!=null){
            intensity.map(function(intensityData){
                var grpID = intensityData.grpID;
                var indxID = intensityData.indxID;
                var indxNm = intensityData.indxNm;
                var indxVal = intensityData.indxVal;
                indxNmArray.push(indxNm);
                indxValArray.push(indxVal);
            })
        }*/

        var echartOption = {
            title:{show:true,text:"竞价烈度",textStyle:{color:"white",fontWeight:100,fontSize:10}},
            grid:{
                top:'25%',
                bottom:'20%',
                left:0,
                right:0,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisLabel:{
                    fontSize:7,
                    interval:0,
                },
                axisTick: {
                    alignWithLabel: true
                },
                data: ['累计申报量','结算成交量']
            },
            yAxis: [
                {
                    type: 'value',
                    splitNumber:3,
                    axisLabel: {
                        color: 'white',
                        fontSize:7,
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    }
                }
            ],
            tooltip:{
                formatter: '{b} - {c} 万元'
            },
            series: [
                {
                    name:'同比',
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
                    barWidth: 12,
                    data:indxValArray
                }
            ]
        };
        return echartOption;
    }


}


function initCallActionSubAmount(jsonData){
    var call_action_deep_echart = echarts.init(document.getElementById("callActionSubAmountChart"));

    call_action_deep_echart.setOption(getCallActionSubAmountChartOption(jsonData));

    function getCallActionSubAmountChartOption(jsonData){
        var priceCPKInfo = jsonData.priceCPKInfo;
        var dealAmount = 0;
        var barObj = {};
        if(priceCPKInfo!=null){
            priceCPKInfo.map(function(priceCPKInfoData){
                var grpNm = priceCPKInfoData.grpNm;
                var grpID = priceCPKInfoData.grpID;
                var indxNm = priceCPKInfoData.indxNm;
                var indxVal = priceCPKInfoData.indxVal;

                if(grpID=='02'){
                    dealAmount = indxVal;
                }else{
                    barObj[indxNm] = indxVal;
                }
            });
        }
        var bins = ecStat.histogram( Object.values(barObj));
        var echartOption = {
            color: ['#3398DB'],
            grid:{
                top:'10%',
                bottom:'10%',
                left:'5%',
                right:'5%',
                containLabel: true
            },
            title:{
                show:false,
                text:"竞价申报价格分布",
                // text:"成交金额:   "+dealAmount,
                textStyle:{
                    color:"white",
                    fontWeight:100,
                    fontSize:15
                }
            },
            xAxis : [
                {
                    type : 'category',
                    // type : 'value',
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    splitLine: {
                        show:false,
                        lineStyle: {
                            width:5,
                            // 使用深浅的间隔色
                            color: [ 'rgba(255,255,255,0)', 'rgba(255,255,255,0)', 'rgba(255,255,255,0)','yellow', 'rgba(255,255,255,0)']
                        }
                    },
                    scale:true,
                    data : Object.keys(barObj)
                }
            ],
            yAxis : [
                {
                    type : 'value',
                    show:false
                }
            ],
            tooltip:{},
            series : [
                {
                    type:'bar',
                    barWidth: '99.3%',
                    data:Object.values(barObj)
                }
            ]
        };
        return echartOption;
    }

}

function initCallActionTradCount(jsonData){
    var allActionTradCount = echarts.init(document.getElementById("callActionTradCountChart"));

    allActionTradCount.setOption(getCallActionTradCountChartOption(jsonData));

    function getCallActionTradCountChartOption(jsonData){
        var transAmtInfo = jsonData.transAmtInfo;
        var dataTmp = {};
        var yUnit1 = "";
        var yUnit2 = "";
        if(transAmtInfo!=null){
            transAmtInfo.map(function(transAmtInfoData){
                var indxID = transAmtInfoData.indxID;
                var indxNm = transAmtInfoData.indxNm;
                var grpID = transAmtInfoData.grpID;
                var indxVal = transAmtInfoData.indxVal;
                var unit = transAmtInfoData.unit;
                var dataTmpObj = {};
                if(dataTmp[indxNm]!=null){
                    dataTmpObj = dataTmp[indxNm];

                }else{
                    dataTmp[indxNm] = dataTmpObj
                }
                if(grpID=='01'){//申报量
                    dataTmp[indxNm].barData = indxVal;
                    yUnit1 =unit;
                }else{//累计申报占比
                    dataTmp[indxNm].lineData = indxVal;
                    yUnit2 =unit;

                }
            });
        }

        var lineArray = [];
        var barArray = [];
        var companyNames = Object.keys(dataTmp);
        companyNames.map(function(companyName){
            lineArray.push(dataTmp[companyName].lineData);
            barArray.push(dataTmp[companyName].barData);
        });

        var echarOption = {
            grid:{
                top:'25%',
                bottom:'5%',
                left:'5%',
                right:'5%',
                containLabel: true
            },
            legend: {
                left:'left',
                itemWidth: 16,
                itemHeight: 8,
                textStyle:{
                    color:'#fff',
                    fontFamily: '微软雅黑',
                    fontSize: 10,
                },
                data:[{
                    name:'申报量',
                    icon:'roundRect'
                },
                    {
                        name:'累计申报占比',
                        icon:'roundRect'
                    }]
            },
            tooltip:{trigger:'item'},
            xAxis: {
                type: 'category',
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: 'white'
                    }
                },
                axisLabel:{
                    formatter:function(v){
                        if(v.length>4){
                            return v.substr(0, 4);
                        }
                        return v;
                    },
                },
                axisTick:false,
                data: companyNames
            },
            yAxis: [
                {
                    name:yUnit2,
                    type: 'value',
                    splitNumber:4,
                    axisLabel: {
                        color: 'white'
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    }
                },
                {
                    name:yUnit1,
                    type: 'value',
                    splitNumber:4,
                    axisLabel: {
                        color: 'white',
                        formatter:'{value} %',
                    },
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisTick:{
                        show:false
                    },
                    splitLine:{
                        show:false
                    }
                }
            ],
            series: [
                {
                    name:'累计申报占比',
                    type: 'line',
                    showSymbol:false,
                    itemStyle: {color: '#254E88'},
                    data: lineArray
                },
                {
                    name:'申报量',
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

function initWordInfo(jsonData){
    var enegyInfo = jsonData.enegyInfo;
    if(enegyInfo!=null){
        $("#basic_info_fonts_title").empty();
        $("#basic_info_font_values").empty();
        enegyInfo.map(function(enegyInfoData){
            var indxID = enegyInfoData.indxID;//
            var indxNm = enegyInfoData.indxNm;//
            var indxVal = enegyInfoData.indxVal;
            var point = indxID.indexOf('均价')>0?"元":"万元";
            $("#basic_info_fonts_title").append('<div><span class="font-color-changed">'+indxNm+'</span></div>');
            $("#basic_info_font_values").append('<div><span class="basic_info_font_value">'+indxVal+'</span>'+point+'</div>');
        });
    }
}

function initChinaMap(jsonData){
    $.get(__host + '/static/data/public/map/china.json', function (chinaJson) {
        echarts.registerMap('china_out_nanhai', chinaJson);//需要南海群岛的话 把china_out_nanhai改成china就行了
        // echarts.registerMap('china', chinaJson);//需要南海群岛的话 把china_out_nanhai改成china就行了
        $.get(__host + '/static/data/public/map/china_city_coord.json', function (chinaCityJson) {
            var member_map_chart = echarts.init(document.getElementById('report_china_map'));
            member_map_chart.setOption(getReportChinaMapOption(chinaCityJson,jsonData));

        });

    });

    function getReportChinaMapOption(chinaCityJson,jsonData) {
        var transMapDatas = jsonData.compMapInfo;
        var mapDataTmp = new Object();
        if(transMapDatas!=null&&transMapDatas.length>0){
            transMapDatas.map(function(transMapData){
                var grpNm = transMapData.provNM;
                var indxNm = transMapData.indxNm;
                var indxVal = transMapData.indxVal;

                var unit = transMapData.unit;
                if(indxNm=='申报数量'){

                }else if(indxNm=='申报金额'){
                    unit = '万元';
                }else{
                    unit = "";
                }
                if(grpNm==''){
                    grpNm = "重庆";
                }
                grpNm = grpNm.replace(/省/,"");
                grpNm = grpNm.replace(/市/,"");
                if(mapDataTmp[grpNm]!=null){
                    var mapData = mapDataTmp[grpNm];
                    mapData[2].push({name:indxNm,value:indxVal,unit:unit});
                }else{
                    mapDataTmp[grpNm] = chinaCityJson[grpNm];
                    if(mapDataTmp[grpNm]!=null)
                        mapDataTmp[grpNm][2] = [{name:indxNm,value:indxVal,unit:unit}];
                }
            });
        }

        var mapPointDatas = [];
        var cityNames = Object.keys(mapDataTmp);
        cityNames.map(function(cityName){
            var citNameVal = mapDataTmp[cityName];
            var mapPointData = {name:cityName,value:citNameVal};
            mapPointDatas.push(mapPointData)
        });

        var mapChartOption = {
            grid:{
                top:70,
                bottom:40,
                left:40,
                right:40
            },
            geo: {
                map: 'china_out_nanhai',
                zoom:'1.1',
                label: {
                    emphasis: {
                        show: false
                    }
                },
                itemStyle: {
                    normal: {
                        areaColor: '#3FA1D2',
                        borderColor: '#111'
                    },
                    emphasis: {
                        areaColor: '#2a333d'
                    }
                }
            },
            tooltip: {
                trigger: 'item',
                formatter: function (params) {
                    console.log(JSON.stringify(params));
                    var values = params.value[2];
                    var showInfo = params.name;
                    values.map(function(valuesData){
                        var valueName = valuesData.name;
                        var valueData = valuesData.value;
                        var valueunit = valuesData.unit || '';
                        if(showInfo!=""){
                            showInfo = showInfo+"<br>";
                        }
                        showInfo = showInfo+valueName+":"+valueData+valueunit;
                    });
                    return showInfo;
                }
            },
            series: [
                {
                    name:'采购数量',
                    type: 'scatter',
                    symbol:'pin',
                    symbolSize:25,
                    coordinateSystem: 'geo',
                    itemStyle: {color: 'yellow'},
                    data:mapPointDatas
                }
                // {
                //     name:'采购数量',
                //     type: 'scatter',
                //     coordinateSystem: 'geo',
                //     itemStyle: {color: 'yellow'},
                //     data:[
                //         {value:[115.48,38.85]},{value:[125.03,46.58]}
                //     ]
                // },
                // {
                //     name:'采购数量1',
                //     type: 'lines',
                //     zlevel: 1,
                //     effect: {
                //         show: true,
                //         period: 6,
                //         trailLength: 0,
                //         color:'#7BFFFD',
                //         symbolSize: 10,
                //         symbol:'arrow'
                //     },
                //     lineStyle: {
                //         normal: {
                //             width: 0,
                //             curveness: 0.5
                //         }
                //     },
                //     data:[
                //         {coords: [chinaCityJson["重庆市"],chinaCityJson["南宁"]]},
                //         {coords: [chinaCityJson["重庆市"],chinaCityJson["广州"]]}
                //     ]
                // }

            ]
        };
        return mapChartOption;
    }

}

function initCallActionFlowRecord(showType){
    // initCallActionFlowRecordP1();
    // initCallActionFlowRecordP2();
    var callActionThis = this;

    if(showType=='callCount'){

        getdata('/motion/index/BidActionInfo.json',function(jsonData){
            var minAmount = null;
            var maxAmount = 0;
            var actionInfoDatas = jsonData.actionInfo;

            var amountArray = [];

            var provNMDataObj = {};

            var countObject = new Object();

            actionInfoDatas.map(function(actionInfoData){
                var grpNm = actionInfoData.grpNm;
                var stattDt = actionInfoData.stattDt;
                var indxNm = actionInfoData.indxNm;
                var indxVal = actionInfoData.indxVal;
                var unit = actionInfoData.unit;

                if(indxNm=='申报单价'){
                    amountArray.push(indxVal);
                    if(indxVal>maxAmount){
                        maxAmount = indxVal;
                    }
                    if(minAmount==null){
                        minAmount = indxVal
                    }else{
                        if(indxVal<minAmount){
                            minAmount = indxVal;
                        }
                    }
                    if(provNMDataObj[grpNm+"-"+stattDt]!=null){
                        provNMDataObj[grpNm+"-"+stattDt].amountVal = indxVal;
                    }else{
                        provNMDataObj[grpNm+"-"+stattDt] = {"grpNm":grpNm,"stattDt":stattDt,"amountVal":indxVal,"unit":""};
                    }
                }else if(indxNm=='申报量'){
                    if(countObject[indxVal]==null){
                        countObject[indxVal] = "SCQ";
                    }
                    if(provNMDataObj[grpNm+"-"+stattDt]!=null){
                        provNMDataObj[grpNm+"-"+stattDt].countVal = indxVal;
                    }else{
                        provNMDataObj[grpNm+"-"+stattDt] = {"grpNm":grpNm,"stattDt":stattDt,"countVal":indxVal,"unit":unit};
                    }
                }
            });

            var middleAmountVal = null;
            var pointAmountVal = null;
            if(minAmount == maxAmount){
                pointAmountVal = (maxAmount/3).toFixed(2);
                middleAmountVal = pointAmountVal*2;
            }else{
                pointAmountVal = ((maxAmount - minAmount)/3).toFixed(2);
                middleAmountVal = pointAmountVal*2;
            }

            var provDataArray = Object.values(provNMDataObj);
            provDataArray = provDataArray.sort(sortAmountValue);

            var countArray = Object.keys(countObject);
            var part1AmontArray = [];
            var part2AmountArray = [];

            provDataArray.map(function(provData){
                var countVal = provData.countVal;
                var xAsVal = null;
                countArray.map(function(countArrayData,indx){
                    if(countArrayData==countVal){
                        xAsVal = indx;
                    }
                });
                var amountVal = provData.amountVal;
                var grpNm = provData.grpNm;
                var stattDt = provData.stattDt;
                if(amountVal>middleAmountVal){
                    part1AmontArray.push([xAsVal,amountVal,grpNm,stattDt,countVal]);
                }else{
                    part2AmountArray.push([xAsVal,amountVal,grpNm,stattDt,countVal]);
                }
            });

            var part1YaxisData = {"minValue":middleAmountVal,"splitValue":pointAmountVal};
            var part2YaxisData = {"maxValue":middleAmountVal,"splitValue":pointAmountVal};

            initCallActionFlowRecordP1(countArray,part1AmontArray,part1YaxisData,showType);
            initCallActionFlowRecordP2(countArray,part2AmountArray,part2YaxisData,showType);
        });
    }
    else{
        getdata('/motion/index/BidActionTimeInfo.json',function(jsonData){
            var minAmount = null;
            var maxAmount = 0;
            var actionInfoDatas = jsonData.actionInfo;

            var amountArray = [];

            var provNMDataObj = {};

            var countObject = new Object();

            actionInfoDatas.map(function(actionInfoData){
                var grpNm = actionInfoData.grpNm;
                var stattDt = actionInfoData.stattDt;
                var indxNm = actionInfoData.indxNm;
                var indxVal = actionInfoData.indxVal;

                if(indxNm=='申报单价'){
                    amountArray.push(indxVal);
                    if(indxVal>maxAmount){
                        maxAmount = indxVal;
                    }
                    if(minAmount==null){
                        minAmount = indxVal
                    }else{
                        if(indxVal<minAmount){
                            minAmount = indxVal;
                        }
                    }
                    if(provNMDataObj[grpNm+"-"+stattDt]!=null){
                        provNMDataObj[grpNm+"-"+stattDt].amountVal = indxVal;
                    }else{
                        provNMDataObj[grpNm+"-"+stattDt] = {"grpNm":grpNm,"stattDt":stattDt,"amountVal":indxVal};
                    }
                }else if(indxNm=='申报时间'){
                    if(countObject[indxVal]==null){
                        countObject[indxVal] = "SCQ";
                    }
                    if(provNMDataObj[grpNm+"-"+stattDt]!=null){
                        provNMDataObj[grpNm+"-"+stattDt].countVal = indxVal;
                    }else{
                        provNMDataObj[grpNm+"-"+stattDt] = {"grpNm":grpNm,"stattDt":stattDt,"countVal":indxVal};
                    }
                }
            });

            var middleAmountVal = null;
            var pointAmountVal = null;
            if(minAmount == maxAmount){
                pointAmountVal = (maxAmount/3).toFixed(2);
                middleAmountVal = pointAmountVal*2;
            }else{
                pointAmountVal = ((maxAmount - minAmount)/3).toFixed(2);
                middleAmountVal = pointAmountVal*2;
            }

            var provDataArray = Object.values(provNMDataObj);
            provDataArray = provDataArray.sort(sortAmountValue);

            var countArray = Object.keys(countObject);
            var part1AmontArray = [];
            var part2AmountArray = [];

            provDataArray.map(function(provData){
                var countVal = provData.countVal;
                var xAsVal = null;
                countArray.map(function(countArrayData,indx){
                    if(countArrayData==countVal){
                        xAsVal = indx;
                    }
                });
                var amountVal = provData.amountVal;
                var grpNm = provData.grpNm;
                var stattDt = provData.stattDt;
                if(amountVal>middleAmountVal){
                    part1AmontArray.push([xAsVal,amountVal,grpNm,stattDt,countVal]);
                }else{
                    part2AmountArray.push([xAsVal,amountVal,grpNm,stattDt,countVal]);
                }
            });

            var part1YaxisData = {"minValue":middleAmountVal,"splitValue":pointAmountVal};
            var part2YaxisData = {"maxValue":middleAmountVal,"splitValue":pointAmountVal};

            initCallActionFlowRecordP1(countArray,part1AmontArray,part1YaxisData,showType);
            initCallActionFlowRecordP2(countArray,part2AmountArray,part2YaxisData,showType);
        });
    }




    function sortAmountValue(a,b){
        return a.countVal - b.countVal;
    }



    function initCallActionFlowRecordP1(countArray,part1AmontArray,part1YaxisData,showType){
        var callActionFlowRecordChartP1 = echarts.init(document.getElementById("callActionFlowRecordChartP1"));
        callActionFlowRecordChartP1.setOption(getCallActionFlowRecordP1ChartOption(showType));

        function getCallActionFlowRecordP1ChartOption(showType){
            var flowRecordOption = {
                color:['#61ffff'],
                title: {
                    show:true,
                    text:"申报单价",
                    left:35,
                    top:'10%',
                    textStyle:{
                        color:"white",
                        fontWeight:100,
                        fontSize:10
                    }
                },
                grid:{
                    show:true,
                    backgroundColor: 'rgba(23,55,66,0.3)',
                    borderWidth:0,
                    top:40,
                    left:40,
                    right:10,
                    bottom:0
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        console.log(JSON.stringify(params));
                        var grpNm = params.value[2];
                        var stattDt = params.value[3];
                        var count = params.value[4];//申报数量||申报时间
                        var showStr = grpNm+"<br>";
                        if(showType=='callCount'){
                            showStr = showStr+"申报数量:"+count+"<br>";
                        }else{
                            showStr = showStr+"申报时间:"+count+"<br>";
                        }
                        showStr = showStr+"申报单价:"+params.value[1];

                        return showStr;
                    }
                },
                xAxis : {
                    axisLine: {
                        show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    axisTick: {
                        // alignWithLabel: true
                        showMinLabel:false,
                        show:false
                    },
                    // axisTick:false,
                    splitLine:{
                        show:false
                    },
                    // data:[1234,2000,3000,4000,5000,6700]
                    data:countArray
                },
                yAxis : {
                    // splitNumber:5,
                    axisLabel: {
                        color: 'white'
                    },
                    axisLine: {
                        // show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    min:part1YaxisData.minValue,
                    interval:part1YaxisData.splitValue,
                    axisTick:false,
                    scale: true,
                    splitLine:{
                        show:false
                    }
                },
                series: [
                    {
                        data: part1AmontArray,
                        type: 'scatter'
                    }]
            };
            return flowRecordOption;
        }

    }

    function initCallActionFlowRecordP2(countArray,part2AmontArray,part2YaxisData){
        var callActionFlowRecordChartP1 = echarts.init(document.getElementById("callActionFlowRecordChartP2"));

        if(part2AmontArray!=null&&part2AmontArray.length>0){}
        else{
            part2AmontArray.push({value:[0,part2YaxisData.maxValue],symbolSize : 0 });
        }

        callActionFlowRecordChartP1.setOption(getCallActionFlowRecordP2ChartOption());

        function getCallActionFlowRecordP2ChartOption(){
            var flowRecordOption = {
                grid:{
                    top:0,
                    left:40,
                    right:10,
                    bottom:20
                },
                xAxis : {
                    name:'申报时间',
                    position: 'top',
                    axisLine: {
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    // splitArea: {
                    //     show: true
                    // },
                    axisLabel:{
                        inside:true
                    },
                    axisTick: {
                        showMinLabel:false,
                        show:false
                    },
                    // axisTick:false,
                    splitLine:{
                        show:false
                    },
                    data:countArray
                    // data:["7000","8000"]
                },
                yAxis : {
                    // splitNumber:5,
                    axisLabel: {
                        color: 'white'
                    },
                    axisLine: {
                        // show: false,
                        lineStyle: {
                            color: 'white'
                        }
                    },
                    max:part2YaxisData.maxValue,
                    interval:part2YaxisData.splitValue,
                    axisTick:false,
                    scale: true,
                    splitLine:{
                        show:false
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        console.log(JSON.stringify(params));
                        var grpNm = params.value[2];
                        var stattDt = params.value[3];
                        var count = params.value[4];//申报数量||申报时间
                        var showStr = grpNm+"<br>";
                        if(showType=='callCount'){
                            showStr = showStr+"申报数量:"+count+"<br>";
                        }else{
                            showStr = showStr+"申报时间:"+count+"<br>";
                        }
                        showStr = showStr+"申报单价:"+params.value[1];

                        return showStr;
                    }
                },
                series: [
                    {
                        // data:  (function(){
                        //     var oriData = [
                        //         4100,5000,6000
                        //     ];
                        //     var len = oriData.length;
                        //     while(len--) {
                        //         oriData[len] *= -1;
                        //     }
                        //     return oriData;
                        // })(),
                        data:part2AmontArray,
                        type: 'scatter'
                    }]
            };
            return flowRecordOption;
        }

    }

}

function intiCallActionCompanyLstTable(jsonData){
    var enegyInfo = jsonData.compTableInfo;
    $("#callActionCompanyLstTableBody").empty();
    if(enegyInfo!=null){
        enegyInfo.filter(function(o, i){
            return i <=5;
        }).map(function(enegyInfoData){
            var trObj = $("<tr style='font-weight: normal'></tr>");
            trObj.append("<td title='"+enegyInfoData.declMemNm+"' >"+enegyInfoData.declMemNm+"</td>");
            trObj.append("<td>"+enegyInfoData.declPrc+"</td>");
            trObj.append("<td>"+enegyInfoData.declQty+"</td>");
            trObj.append("<td>"+enegyInfoData.declTm+"</td>");
            trObj.append("<td>"+enegyInfoData.accmDeclQty+"</td>");
            trObj.append("<td>"+enegyInfoData.accmDeclPct+"</td>");
            $("#callActionCompanyLstTableBody").append(trObj);

        });
    }

}
