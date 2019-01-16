const _data_cache = {}
const _default_company_name = "全国"
const _default_select_date = "2017-1"
let main_type="makePower" //makePower||installed
const _default_clean_power_company = '全国'
$(document).ready(function(){
    // getdata('/product/index/productIndex.json',initEnergyRatio);
    getdatax('/produce/index/installAndGeneration.json',installAndGeneration);
    getdatax('/produce/index/installCapacity.json',installCapacity);//装机容量排名
    getdatax('/produce/index/powerMaked.json',powerMaked);//发电量排名
    getdatax('/produce/index/intenetUsed.json',internetUsed);//上网电量排名
    getdatax('/produce/index/deviceTotalUsedRatio.json',deviceUsedRatio);
    getdatax('/produce/index/makeWarmingRecord.json',makeWarmingRecord);
    getdatax('/produce/index/consumeForMakeWarming.json',consume);

    getdata('/produce/index/cleanPowerInstall.json',cleanPowerInstallInfos);
    getdatax('/produce/index/cleanPowerMaked.json',cleanPowerInfos);
    // getdata('/produce/index/cleanPowerMaked.json',cleanPowerMaked);
    // getdata('/produce/index/cleanPowerInstall.json',cleanPowerInstall);
    mainAreaStyles()
    mainAreaLister()
});



function isSelect(jsonData){
    if(jsonData!=null&&jsonData==='select'){
        return true
    }else
        return false
}

function checkInitDate(checkedSelected){
    return $("#"+checkedSelected).val()
}

function mainAreaStyles(){
    const mainHeight = $(".main_order_bg").height()

    const topPercentArray = [
        0.28,
        0.14,
        0.595,
        0.16,
        0.587,
        0.29,
        0.53,
        0.675,
        0.165,
        0.54,
        0.35]

    topPercentArray.forEach((topPercent,i)=>{
        const companyTop = mainHeight*topPercent
        $(".main_order_name"+(i+1)).attr("style","top:"+companyTop+'px')
    })

    $(".main_order_type").css('margin-top',(mainHeight-90)+'px')

}

function mainAreaLister(){
    $(".main_order_name").click(function(){
        const index = $(this).attr("index")
        let clickName = ""
        if(main_type==='makePower'){
            clickName = _data_cache.cleanPowerInfos.data[index]
        }else{
            clickName = _data_cache.cleanPowerInstallInfos.data[index]
        }
        loadTabInfo('select',clickName['type'],$("#cleanPowerInfos_comb").find("select").val())
    })

    $(".main_show_type").click(function(){
        const orderType = $(this).attr('orderType')
        $(".main_show_type").removeClass("main_show_power_checked")
        $(".main_show_type").removeClass("main_show_installed_checked")

        if(orderType==='makePower'){
            cleanPowerInfos(_data_cache.cleanPowerInfos,$("#cleanPowerInfos_comb").find("select").val())
            loadTabInfo('select',_default_clean_power_company,$("#cleanPowerInfos_comb").find("select").val())
            $(".main_show_power").addClass("main_show_power_checked")

        }else{
            cleanPowerInstallInfos(_data_cache.cleanPowerInstallInfos,$("#cleanPowerInfos_comb").find("select").val())
            loadTabInfo('select',_default_clean_power_company,$("#cleanPowerInfos_comb").find("select").val())
            $(".main_show_installed").addClass("main_show_installed_checked")

        }
    })

    $(".main_order_name").mouseover(function(){
        $(this).find(".main_order_name_val").show()
    }).mouseout(function(){
        $(this).find(".main_order_name_val").hide()
    })
}

function installAndGeneration(jsonData,selectPoint){
    console.log("------>"+selectPoint)

    let months = {}
    const seriesDataArray = []

    let lineDataObj = {}
    jsonData.data.forEach(groups=>{
        const group = groups['group']
        const groupDatas = groups['groupDatas']

        let allCompanys = Object.keys(groupDatas)
        allCompanys.forEach(company=>{
            if(company===selectPoint){
                lineDataObj[group] = groupDatas[company]
            }
        })

        // groupDatas.forEach(groupData=>{
        //     const companyName = groupData['companyName']
        //     const date = groupData["date"]//
        //     let val = groupData['value']
        //     // if(companyName!='全国'){
        //     //     val = (val/10000).toFixed(2)
        //     // }
        //
        //     const ratio = groupData["ratio"]//同比
        //     if(companyName===selectPoint) {
        //         if(lineDataObj[group]!=null){
        //
        //         }else{
        //             lineDataObj[group] = []
        //         }
        //         lineDataObj[group].push(val)
        //         if(months[date]==null){
        //             months[date]='SCQ'
        //         }
        //     }
        // })
    })
    const lineColors = [{rgb1:65,rgb2:56,rgb3:225},{rgb1:64,rgb2:148,rgb3:255}]

    Object.keys(lineDataObj).forEach((lineName,i)=> {
        const lineValues = lineDataObj[lineName]

        seriesDataArray.push(
            {
                name: lineName, //系列名称，用于tooltip的显示，legend 的图例筛选，在 setOption 更新数据和配置项时用于指定对应的系列
                type: 'line',
                yAxisIndex: i,
                smooth: true, //是否平滑曲线显示
                symbol: 'circle', //标记的图形。ECharts 提供的标记类型包括 'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'
                symbolSize: 5, //标记的大小，可以设置成诸如 10 这样单一的数字，也可以用数组分开表示宽和高，例如 [20, 10] 表示标记宽为20，高为10[ default: 4 ]
                showSymbol: false, //是否显示 symbol, 如果 false 则只有在 tooltip hover 的时候显示
                lineStyle: { //线条样式
                    normal: {
                        width: 1 //线宽。[ default: 2 ]
                    }
                },
                areaStyle: { //区域填充样式
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ //填充的颜色。
                            offset: 0, // 0% 处的颜色
                            color: 'rgba('+lineColors[i].rgb1+', '+lineColors[i].rgb2+', '+lineColors[i].rgb3+', 0.3)'
                        }, {
                            offset: 0.8, // 80% 处的颜色
                            color: 'rgba('+lineColors[i].rgb1+', '+lineColors[i].rgb2+', '+lineColors[i].rgb3+', 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)', //阴影颜色。支持的格式同color
                        shadowBlur: 10 //图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果
                    }
                },
                itemStyle: { //折线拐点标志的样式
                    normal: {
                        color: 'rgba('+lineColors[i].rgb1+', '+lineColors[i].rgb2+', '+lineColors[i].rgb3+')',
                        borderColor: 'rgba('+lineColors[i].rgb1+','+lineColors[i].rgb2+','+lineColors[i].rgb2+',0.4)', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
                data: lineValues
            }
        )
    })

    let option = {
        textStyle: {
            color: '#38b8ff'
        },
        tooltip: {
            trigger: 'axis', //触发类型。[ default: 'item' ] :数据项图形触发，主要在散点图，饼图等无类目轴的图表中使用;'axis'坐标轴触发，主要在柱状图，折线图等会使用类目轴的图表中使用
            axisPointer: {
                lineStyle: {
                    color: '#57617B'
                }
            },
            z:100
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
            data: ['发电量(亿千瓦时)', '装机量(万千瓦)'],
        },
        grid: {
            left: '2%',
            right:'2%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            boundaryGap: false, //坐标轴两边留白策略，类目轴和非类目轴的设置和表现不一样
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
            },
            data: jsonData.xData
        }],
        yAxis: [{
            type: 'value',
            // name:'亿千瓦时',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            axisTick: {
                show: true //是否显示坐标轴刻度
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
            //去掉辅助线
            splitLine: {
                show: false
            },
            /*splitLine: {
             lineStyle: {
             color: '#57617B' //分隔线颜色设置
             }
             }*/
        },
            {
                type: 'value',
                // name:'万千瓦',
                nameGap:-5,
                nameTextStyle:{
                    padding:[0,0,0,45],
                    align:'center',
                    color:'#fff',
                },
                axisTick: {
                    show: true //是否显示坐标轴刻度
                },
                axisLine: {
                    lineStyle: {
                        color: '#38b8ff'
                    }
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 10
                    }
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
                /*splitLine: {
                 lineStyle: {
                 color: '#57617B' //分隔线颜色设置
                 }
                 }*/
            }],
        series: seriesDataArray
    };



    // console.log(seriesDataArray)
    const myChart = echarts.init($('#energyRatio')[0])
    myChart.setOption(option);
}

function makeOrders(orderDatas,selectPoint,point){
    let lineArray = []
    let barObject = {}
    let lineName = ""
    let xObject = {}

    orderDatas.forEach(powerMakedData=>{
        const companyName = powerMakedData["companyName"]//每家公司名称
        const type = powerMakedData["type"]//类型：水、风、火、光伏、核能
        const year = powerMakedData["year"]//
        const month = powerMakedData["month"]
        const val = powerMakedData["val"]//量
        const ratio = powerMakedData["ratio"]//同比

        if((year+'-'+month)===selectPoint) {
            if(xObject[companyName]==null){xObject[companyName]='SCQ'}
            if(barObject[type]!=null){
                barObject[type].push(val)
            }else{
                barObject[type] = []
                barObject[type].push(val)
            }
            if(type==='总量'||type==='上网电量'){
                lineArray.push(ratio)
            }
        }
    })

    let seriesData = [];

    Object.keys(barObject).forEach((barName)=>{
        const barArray = barObject[barName]
        const o = {
            name:barName,
            type:'bar',
            stack: 'stackBars',
            barWidth:15,
            data:barArray
        };
        seriesData.push(o)
    })

    // seriesData.push({
    //     name:'同比',
    //     type:'line',
    //     yAxisIndex: 1,
    //     data:lineArray
    // })


    // console.log(JSON.stringify(seriesData))


    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#2b88ff','#4138e1','#4ad08d','#4df3f3','#dedd4f','#dca93c'],
        legend: { //图例组件，颜色和名字
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:'2%',
            data: Object.keys(barObject).concat(['同比']),
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
        xAxis: {
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
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'category',
            data:Object.keys(xObject)
        },
        yAxis: [{
            name:'  '+point,
            nameGap:0,
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
                show: false
            },
            axisTick:{
                show:true
            },
            type: 'value'
        },
            {
                type: 'value',
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
        series: seriesData
    }

    return option
}

function installCapacity(jsonData,selectPoint){
    //X轴：全国+10家名称 Y轴：左侧装机量+右侧同比 装机量

    const option = makeOrders(jsonData.data,selectPoint,'千瓦')

    var myChart = echarts.init($('#installCapacity')[0]);
    myChart.setOption(option);

}

function powerMaked(jsonData,selectPoint){
    const option = makeOrders(jsonData.data,selectPoint,'万千瓦时')


    var myChart = echarts.init($('#powerMaked')[0]);
    myChart.setOption(option);

}

function internetUsed(jsonData,selectPoint){

    const option = makeOrders(jsonData.data,selectPoint,'万千瓦时')


    var myChart = echarts.init($('#internetUsed')[0]);
    myChart.setOption(option);

}

function deviceUsedRatio(jsonData,selectPoint){
    let lineObject = {}
    let line2Object = {}
    let legArray = {}
    jsonData.data.forEach((productInfo)=>{
        const areaName = productInfo["type"]
        const date = productInfo["date"]
        const val = productInfo["value"]
        const ratio = productInfo["ratio"]

        if(areaName===selectPoint){
            if(lineObject[date]!=null){}
            else{
                lineObject[date] = Number(val)
                line2Object[date] = Number(ratio)
                // line2Object[date] = ratio
            }

        }
    })

    const xArray = Object.keys(lineObject)

    let seriesData = [];

    seriesData.push({
        name:"本年",
        type:'bar',
        smooth: true,
        //stack: '总量',
        symbolSize: 1,
        symbol: 'circle',
        barWidth:10,
        data:Object.values(lineObject)
    })

    seriesData.push({
        name:"同比",
        type:'line',
        smooth: true,
        yAxisIndex: 1,
        //stack: '总量',
        symbolSize: 1,
        symbol: 'circle',
        // barWidth:15,
        data:Object.values(line2Object)
    })


    // console.log(JSON.stringify(seriesData))

    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#2b88ff','#57c5f8'],
        legend: { //图例组件，颜色和名字
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:'2%',
            data: ['本年','同比'],
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
        xAxis : {
            type: "category",
            gridIndex: 0,
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
            data : xArray
        },
        yAxis : [{
            type: 'value',
            name:'小时数',
            nameGap:-5,
            gridIndex: 0,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            //去掉辅助线
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
                formatter: '{value}'
            }
        },{
            type: 'value',
            // name:' %',
            nameGap:1,
            gridIndex: 0,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            //去掉辅助线
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
                formatter: '{value} %'
            }
        }],
        series : seriesData
    };


    var myChart = echarts.init($('#deviceUsedRatio')[0]);
    myChart.setOption(option);
}

function makeWarmingRecord(jsonData,selectPoint){
    let lineObject = {}

    let barDatas = {}
    let lineDatas = {}
    jsonData.data.forEach(groupJsonObj=>{
        const groupNm = groupJsonObj['group']
        const groupDatas = groupJsonObj['groupDatas']
        barDatas[groupNm] = []
        lineDatas[groupNm] = []
        groupDatas.forEach(groupData=>{
            const typeVal = groupData['type']
            const year = groupData['year']
            const month = groupData['month']
            const val = groupData['val']
            const ratio = groupData['ratio']
            // if((year+'-'+month)===selectPoint) {
            //     barDatas[groupNm].push({'typeName':typeVal,'typeVal':val})
            //     lineDatas[groupNm].push({'typeName':typeVal,'typeVal':ratio})
            // }
            if((typeVal)===selectPoint) {
                barDatas[groupNm].push({'typeName':year+'-'+month,'typeVal':val})
                lineDatas[groupNm].push({'typeName':year+'-'+month,'typeVal':ratio})
            }
        })
    })
    let seriesData = []
    let xArrayObj = {}

    let dataShadow = [], yMax = 12000;
    for(let i = 0; i < barDatas.length; i++){
        dataShadow.push(yMax);
    }


    seriesData.push({
        type: 'bar',
        yAxisIndex:0,
        itemStyle: {
            normal: {color: 'rgba(12,15,34,0.8)'}
        },
        barGap:'-100%',
        barCategoryGap:'40%',
        barWidth:15,
        data: dataShadow,
        animation: false
    },)

    let legNames = []

    // const barColors = [['#83bff6','#2874ff','#188df0'],['#37a705','#37a705','#00ffcb']]
    const barColors = [['#4138e1','#4138e1','#4138e1']
        ,['#4094ff','#4094ff','#4094ff']]
    // const barColors = [{rgb1:65,rgb2:56,rgb3:225},{rgb1:64,rgb2:148,rgb3:255}]

    makeSerDatas(barDatas,legNames,'bar')
    makeSerDatas(lineDatas,legNames,'line')

    function makeSerDatas(fromDatas,legNames,makeType){
        Object.keys(fromDatas).forEach((barGroupName,i)=>{
            const barArray = makeType==='bar'?barDatas[barGroupName]:lineDatas[barGroupName]
            let barSerData = []
            barArray.forEach(bar=>{
                const typeName = bar.typeName
                const typeVal = bar.typeVal
                if(xArrayObj[typeName]!=null){}
                else
                    xArrayObj[typeName]='SCQ'

                barSerData.push(typeVal)
            })
            const serName = makeType=='line'?barGroupName+"同比":barGroupName
            legNames.push(serName)
            const whichY = makeType=='line'?"1":"0"
            const d = {
                name:serName,
                type:makeType,
                // barWidth:15,
                yAxisIndex: whichY,
                smooth: true,
                symbolSize: 1,
                symbol: 'circle',
                data:barSerData
            };
            if(makeType==='bar'){
                d.itemStyle = {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: barColors[i][0]},
                                {offset: 0.5, color: barColors[i][1]},
                                {offset: 1, color: barColors[i][2]}
                            ]
                        )
                    }
                }
            }else{
                d.itemStyle = {
                    normal:{
                        color:barColors[i][0]
                    }
                }
            }
            seriesData.push(d)
        })
    }

    console.log(JSON.stringify(legNames))

    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                label : {
                    fontSize:5,
                    padding:0,
                    lineHeight:20
                }
            }
        },
        color:['#4138e1','#4094ff'],
        legend: { //图例组件，颜色和名字
            itemGap: 5, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:'2%',
            data: legNames,
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
        xAxis: {
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            type: 'category',
            data:Object.keys(xArrayObj)
        },
        yAxis: [{
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            splitLine:{
                show:false
            },
            splitNumber:4,
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            name:'千瓦/千焦',
            nameGap:-2,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            type: 'value',
            z:10,
        },{
            axisLine: {
                lineStyle: {
                    color: '#38b8ff'
                }
            },
            splitLine:{
                show:false
            },
            axisLabel: {
                textStyle: {
                    color: '#fff'
                },
                formatter:function(v){
                    return v + '%';
                }
            },
            splitNumber:4,
            type: 'value'
        }],
        series: seriesData
    };

    var myChart = echarts.init($('#makeWarmingRecord')[0]);
    myChart.setOption(option);

}

function consume(jsonData,selectPoint){
    let lineObject = {}
    let line2Object = {}
    let xArray = []
    jsonData.data.forEach((productInfo)=>{
        const areaName = productInfo["type"]
        const year = productInfo["year"]
        const month = productInfo["month"]
        const val = productInfo["val"]
        const ratio = productInfo["ratio"]

        if(areaName===selectPoint){
            if(lineObject[year+'-'+month]!=null){}
            else{
                lineObject[year+'-'+month] = val
                line2Object[year+'-'+month] = ratio
            }

        }
    })

    xArray = Object.keys(lineObject)

    let seriesData = [];

    seriesData.push({
        name:"消耗量",
        type:'bar',
        smooth: true,
        //stack: '总量',
        symbolSize: 1,
        symbol: 'circle',
        barWidth:15,
        data:Object.values(lineObject)
    })

    seriesData.push({
        name:"同比",
        type:'bar',
        smooth: true,
        yAxisIndex: 1,
        //stack: '总量',
        symbolSize: 1,
        symbol: 'circle',
        barWidth:15,
        data:Object.values(line2Object)
    })


    // console.log(JSON.stringify(seriesData))

    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#5acbff','#2b88ff','#30FFFE','#216FFF'],
        // const lineColors = [{rgb1:65,rgb2:56,rgb3:225},{rgb1:64,rgb2:148,rgb3:255}]
        legend: { //图例组件，颜色和名字
            itemGap: 12, //图例每项之间的间隔
            itemWidth: 16,
            itemHeight: 8,
            x:'center',
            bottom:'2%',
            data: ['消耗量','同比'],
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
            data : xArray
        },
        yAxis : [{
            type: 'value',
            name:'  吨',
            nameGap:0,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            //去掉辅助线
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
                formatter: '{value}'
            }
        },{
            type: 'value',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },
            //去掉辅助线
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
                formatter: '{value}'
            }
        }],
        series : seriesData
    };


    var myChart = echarts.init($('#consume')[0]);
    myChart.setOption(option);
}


function cleanPowerInfos(jsonData,selectPoint){
    // let selectPoint = _default_select_date
    // if(isSelect(jsonData)){
    //     selectPoint = $(selectObj).val()
    //     loadTabInfo('select',_default_clean_power_company,selectPoint)
    // }else{
    //     _data_cache.cleanPowerInfos = jsonData
    //     selectPoint = checkInitDate("cleanPowerSelected")
    //
    // }
    _data_cache.cleanPowerInfos = jsonData
    cleanPowerMake(jsonData.data,selectPoint)
    getdata('/produce/index/cleanPowerDetails.json',loadTabInfo);
}

function cleanPowerInstallInfos(jsonData,selectPoint){
    // let selectPoint = _default_select_date
    // if(isSelect(jsonData)){
    //     selectPoint = $(selectObj).val()
    //     loadTabInfo('select',_default_clean_power_company,selectPoint)
    // }else{
    //     _data_cache.cleanPowerInstallInfos = jsonData
    //     selectPoint = checkInitDate("cleanPowerSelected")
    //
    // }
    //
    // cleanPowerMake(_data_cache.cleanPowerInstallInfos,selectPoint)
    _data_cache.cleanPowerInstallInfos = jsonData

    cleanPowerMake(jsonData.data,selectPoint)

}

function cleanPowerMake(datas,selectPoint){
    let showDatas = []

    datas.forEach(cleanPowerInfo=>{
        const year = cleanPowerInfo['year']
        const month = cleanPowerInfo['month']
        if((year+'-'+month)===selectPoint) {
            showDatas.push(cleanPowerInfo)
        }
        // sort(compare("val"))
    })

    showDatas.sort(compare('val'))

    showDatas.forEach((showData,i)=>{
        $(".main_order_name"+(i+1)).empty()
        // $(".main_order_name"+(i+1)).html(showData['type']+'<br><span class="main_order_name_val">'+showData['val']+'%</span>')
        $(".main_order_name"+(i+1)).html(showData['type']+'<br><span class="main_order_name_val">'+showData['val']+'%</span>')
        // $(".main_order_name"+(i+1)).html(showData['type']+i)
    })

    $(".main_order_name_val").hide()

    function compare(property){
        return function(obj1,obj2){
            var value1 = obj1[property];
            var value2 = obj2[property];
            return value2 - value1;     // 降
        }
    }
}

function loadTabInfo(jsonData,selectedCompanyName,selectDate){
    if(isSelect(jsonData)){
    }else{
        _data_cache.cleanPowerDetailDatas = jsonData
        // selectDate = checkInitDate("cleanPowerSelected")
        selectDate = $("#cleanPowerInfos_comb").find("select").val()
        selectedCompanyName = _default_company_name
    }

    _data_cache.cleanPowerDetailDatas.forEach(cleanPowerDetail=>{
        const year = cleanPowerDetail['year']
        const month = cleanPowerDetail['month']
        if((year+'-'+month)===selectDate) {
            const companyName = cleanPowerDetail['companyName']
            if(companyName===selectedCompanyName){
                if(cleanPowerDetail['type']==='弃光率'){
                    $("#qg").empty()
                    $("#qg").html(cleanPowerDetail['val'])
                }else if(cleanPowerDetail['type']==='弃风率'){
                    $("#qf").empty()
                    $("#qf").html(cleanPowerDetail['val'])
                }else if(cleanPowerDetail['type']==='弃水率'){
                    $("#qs").empty()
                    $("#qs").html(cleanPowerDetail['val'])
                }else if(cleanPowerDetail['type']==='弃核率'){
                    $("#qhn").empty()
                    $("#qhn").html(cleanPowerDetail['val'])
                }

            }
        }
    })
}

function cleanPowerMaked(jsonData,selectObj){

    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.cleanPowerMaked = jsonData
        selectPoint = checkInitDate("cleanPowerSelected")

    }

    let seriesData = []
    _data_cache.cleanPowerMaked.forEach(eachData=>{
        const type = eachData['type']
        const val = eachData['val']
        const year = eachData['year']
        const month = eachData['month']
        if((year+'-'+month)===selectPoint){
            seriesData.push({"name":type,"value":val})
        }

    })

    const option = {
        color: ['#ffd653','#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
        tooltip : {
            trigger: 'item'
        },
        legend: {
            show:false
        },
        series : [
            {
                name:'清洁能源发电量',
                type:'pie',
                radius : [0, 50],
                center : ['45%', '50%'],
                // roseType : 'area',
                labelLine: {
                    length: 5,
                    length2: 10
                },
                data:seriesData
            }
        ]
    };
    var myChart = echarts.init($('#cleanPowerMaked')[0]);
    myChart.setOption(option);
}

function cleanPowerInstall(jsonData,selectObj){

    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.cleanPowerInstall = jsonData
        selectPoint = checkInitDate("cleanPowerSelected")

    }

    let seriesData = []
    _data_cache.cleanPowerInstall.forEach(eachData=>{
        const type = eachData['type']
        const val = eachData['val']
        const year = eachData['year']
        const month = eachData['month']
        if((year+'-'+month)===selectPoint){
            seriesData.push({"name":type,"value":val})
        }

    })

    const option = {
        color: ['#ffd653','#6ed5ff','#ff3a83','#2874ff','#ffa24c','#af59ff'],
        tooltip : {
            trigger: 'item'
        },
        legend: {
            show:false
        },
        series : [
            {
                name:'清洁能源装机率',
                type:'pie',
                radius : [30, 50],
                center : ['45%', '50%'],
                roseType : 'area',
                labelLine: {
                    length: 5,
                    length2: 10
                },
                data:seriesData
            }
        ]
    };

    console.log(JSON.stringify(seriesData))
    var myChart = echarts.init($('#cleanPowerInstall')[0]);
    myChart.setOption(option);
}
