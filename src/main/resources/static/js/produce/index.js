const _data_cache = {}
const _default_company_name = "全国"
const _default_select_date = "2017-01-01"

$(document).ready(function(){
    // getdata('/product/index/productIndex.json',initEnergyRatio);
    getdata('/produce/index/installAndGeneration.json',installAndGeneration);
    getdata('/produce/index/installCapacity.json',installCapacity);

});



function isSelect(jsonData){
    if(jsonData!=null&&jsonData==='select'){
        return true
    }else
        return false
}

function installAndGeneration(jsonData,selectObj){
    let selectPoint = _default_company_name
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.installAndGeneration = jsonData
    }

    debugger
    let months = {}
    const seriesDataArray = []

    _data_cache.installAndGeneration.forEach((productInfo)=>{
        const recordType = productInfo["recordType"]

        if(recordType===selectPoint){
            const recordInfos = productInfo["recordInfos"]
            recordInfos.forEach((recordInfo)=>{
                const energyType = recordInfo["energyType"] //总量、水电、风电....
                const energyValues = recordInfo["energyValues"]//同比值

                let countLineChartData = []
                let growonLineChartData = []
                energyValues.forEach(energyValue=>{
                    countLineChartData.push(energyValue['installCount'])//当期值
                    growonLineChartData.push(energyValue['grownRatio'])//当期值
                })

                seriesDataArray.push({
                    name:recordType,
                    type:'line',
                    showSymbol:false,
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
                            color:'rgba(255 ,255, 224,1)',
                            areaStyle: {type: 'default'}}
                    },
                    data:countLineChartData
                })

                seriesDataArray.push({
                    name:recordType,
                    type:'line',
                    yAxisIndex: 1,
                    showSymbol:false,
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
                    data:growonLineChartData
                })

                if(months!=null&&months.length>0){}
                else{
                    energyValues.forEach(energyValue=>{
                        const year = energyValue['year']
                        const month = energyValue['month']
                        if(months[year+"-"+month]!=null){}
                        else{months[year+"-"+month]="SCQ"}
                    })
                }

            })
        }else{
            //do nothing.....
        }

    })

    let option = {
        grid: {
            left: '3%',
            right:'3%',
            top:'10%',
            bottom:'5%',
            containLabel: true
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
            data : Object.keys(months)
        },
        yAxis : [{
            type: 'value',
            axisLabel: {
                color: 'white',
                formatter:'{value} ',
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
        },{
            type: 'value',
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
        }],
        series : seriesDataArray
    };

    console.log(seriesDataArray)
    const myChart = echarts.init($('#energyRatio')[0])
    myChart.setOption(option);
}

function installCapacity(jsonData){
    //X轴：全国+10家名称 Y轴：左侧装机量+右侧同比 装机量
}