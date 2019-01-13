const _data_cache = {}
const _default_company_name = "全国"
const _default_select_date = "2017-1"
let main_type="makePower" //makePower||installed
const _default_clean_power_company = '全国'
$(document).ready(function(){
    // getdata('/product/index/productIndex.json',initEnergyRatio);
    getdata('/produce/index/installAndGeneration.json',installAndGeneration);
    getdata('/produce/index/installCapacity.json',installCapacity);//装机容量排名
    getdata('/produce/index/powerMaked.json',powerMaked);//发电量排名
    getdata('/produce/index/intenetUsed.json',internetUsed);//上网电量排名
    getdata('/produce/index/deviceTotalUsedRatio.json',deviceUsedRatio);
    getdata('/produce/index/makeWarmingRecord.json',makeWarmingRecord);
    getdata('/produce/index/consumeForMakeWarming.json',consume);

    getdata('/produce/index/cleanPowerInstall.json',cleanPowerInstallInfos);
    getdata('/produce/index/cleanPowerMaked.json',cleanPowerInfos);
    getdata('/produce/index/cleanPowerDetails.json',loadTabInfo);
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
        0.25,
        0.105,
        0.59,
        0.125,
        0.58,
        0.27,
        0.52,
        0.675,
        0.13,
        0.535,
        0.33]

    topPercentArray.forEach((topPercent,i)=>{
        const companyTop = mainHeight*topPercent
        $(".main_order_name"+(i+1)).attr("style","top:"+companyTop+'px')
    })

    $(".main_order_type").css('margin-top',(mainHeight-100)+'px')

}

function mainAreaLister(){
    $(".main_order_name").click(function(){
        const index = $(this).attr("index")
        if(main_type==='makePower'){
            const clickName = _data_cache.cleanPowerInfos[index]
            loadTabInfo('select',clickName['type'],$("#cleanPowerSelected").val())
        }else{

        }
    })

    $(".main_show_tab_data").click(function(){
        const makePower = $(this).attr('makePower')
        if(makePower==='makePower'){
            cleanPowerInfos('select',$(".qmain").find("#cleanPowerSelected"))
        }else{
            cleanPowerInstallInfos('select',$(".qmain").find("#cleanPowerSelected"))
        }
    })
}

function installAndGeneration(jsonData,selectObj){
    let selectPoint = _default_company_name
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.installAndGeneration = jsonData
    }

    let months = {}
    const seriesDataArray = []

    let lineDataObj = {}
    _data_cache.installAndGeneration.forEach(groups=>{
        const group = groups['group']
        const groupDatas = groups['groupDatas']

        groupDatas.forEach(groupData=>{
            const companyName = groupData['companyName']
            const year = groupData["year"]//
            const month = groupData["month"]
            let val = groupData['val']
            if(companyName!='全国'){
                val = (val/10000).toFixed(2)
            }

            const ratio = groupData["ratio"]//同比
            if(companyName===selectPoint) {
                if(lineDataObj[group]!=null){

                }else{
                    lineDataObj[group] = []
                }
                lineDataObj[group].push(val)
                if(months[year+"-"+month]==null){
                    months[year+"-"+month]='SCQ'
                }
            }
        })
    })
    const lineColors = [{rgb1:137,rgb2:189,rgb3:27},{rgb1:0,rgb2:136,rgb3:212}]

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
                        borderColor: 'rgba('+lineColors[i].rgb1+','+lineColors[i].rgb2+',2,'+lineColors[i].rgb1/100+')', //图形的描边颜色。支持的格式同 color
                        borderColor: 'rgba('+lineColors[i].rgb1+','+lineColors[i].rgb2+',2,'+lineColors[i].rgb1/100+')', //图形的描边颜色。支持的格式同 color
                        borderWidth: 12 //描边线宽。为 0 时无描边。[ default: 0 ]

                    }
                },
                data: lineValues
            }
        )

        // seriesDataArray.push({
        //     name: lineName,
        //     type: 'line',
        //     showSymbol: false,
        //     yAxisIndex: i,
        //     areaStyle: {
        //         normal: {
        //             type: 'default',
        //             color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //                 offset: 0,
        //                 color: 'rgba(' + lineColors[i].rgb1 + ', ' + lineColors[i].rgb1 + ', ' + lineColors[i].rgb1 + ',0.8)'
        //             }, {
        //                 offset: 1,
        //                 color: 'rgba(' + lineColors[i].rgb1 + ', ' + lineColors[i].rgb1 + ', ' + lineColors[i].rgb1 + ',0.8)'
        //             }], false)
        //         }
        //     },
        //     smooth: true,
        //     itemStyle: {
        //         normal: {
        //             color: 'rgba(' + lineColors[i].rgb1 + ', ' + lineColors[i].rgb1 + ', ' + lineColors[i].rgb1 + ',1)',
        //             areaStyle: {type: 'default'}
        //         }
        //     },
        //     data: lineValues
        // })
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
            data: Object.keys(months)
        }],
        yAxis: [{
            type: 'value',
            /*name:'10亿桶',
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,45],
                align:'center',
                color:'#fff',
            },*/
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

    seriesData.push({
        name:'同比',
        type:'line',
        yAxisIndex: 1,
        data:lineArray
    })


    // console.log(JSON.stringify(seriesData))


    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        color:['#FFD743','#2AB7FF','#30FFFE','#216FFF'],
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

function installCapacity(jsonData,selectObj){
    //X轴：全国+10家名称 Y轴：左侧装机量+右侧同比 装机量
    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.installCapacity = jsonData
        selectPoint = checkInitDate("installCapacitySelect")
    }


    const option = makeOrders(_data_cache.installCapacity,selectPoint,'千瓦')

    var myChart = echarts.init($('#installCapacity')[0]);
    myChart.setOption(option);

}

function powerMaked(jsonData,selectObj){
    //X轴：全国+10家名称 Y轴：左侧装机量+右侧同比 装机量
    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.powerMaked = jsonData
        selectPoint = checkInitDate("powerMakedSelected")

    }

    const option = makeOrders(_data_cache.powerMaked,selectPoint,'万千瓦时')


    var myChart = echarts.init($('#powerMaked')[0]);
    myChart.setOption(option);

}

function internetUsed(jsonData,selectObj){
    //X轴：全国+10家名称 Y轴：左侧装机量+右侧同比 装机量
    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.internetUsed = jsonData
        selectPoint = checkInitDate("internetUsedSelected")

    }

    const option = makeOrders(_data_cache.internetUsed,selectPoint,'万千瓦时')


    var myChart = echarts.init($('#internetUsed')[0]);
    myChart.setOption(option);

}

function deviceUsedRatio(jsonData,selectObj){
    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.deviceUsedRatio = jsonData
        selectPoint = checkInitDate("deviceUsedRatioSelected")

    }
    let lineObject = {}
    let line2Object = {}
    let xArray = []
    _data_cache.deviceUsedRatio.forEach((productInfo)=>{
        const areaName = productInfo["type"]
        const year = productInfo["year"]
        const month = productInfo["month"]
        const val = productInfo["val"]
        const ratio = productInfo["ratio"]

        if((year+'-'+month)===selectPoint){
            if(lineObject[areaName]!=null){}
            else{
                lineObject[areaName] = val
                line2Object[areaName] = ratio
            }
        }
    })

    xArray = Object.keys(lineObject)

    let seriesData = [];

    seriesData.push({
        name:"利用率",
        type:'line',
        smooth: true,
        //stack: '总量',
        symbolSize: 1,
        symbol: 'circle',
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
        data:Object.values(line2Object)
    })


    // console.log(JSON.stringify(seriesData))

    let option = {
        grid: {
            left: '3%',
            right:'3%',
            top:'10%',
            bottom:'5%',
            containLabel: true
        },
        color: ["#37A2DA", "#E062AE", "#96BFFF"],

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
            name:'  小时',
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


    var myChart = echarts.init($('#deviceUsedRatio')[0]);
    myChart.setOption(option);
}

function makeWarmingRecord(jsonData,selectObj){
    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.makeWarmingRecord = jsonData
        selectPoint = checkInitDate("makeWarmingRecordSelected")
    }
    let lineObject = {}

    let barDatas = {}
    let lineDatas = {}
    _data_cache.makeWarmingRecord.forEach(groupJsonObj=>{
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
            if((year+'-'+month)===selectPoint) {
                barDatas[groupNm].push({'typeName':typeVal,'typeVal':val})
                lineDatas[groupNm].push({'typeName':typeVal,'typeVal':ratio})
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
        data: dataShadow,
        animation: false
    },)

    makeSerDatas(barDatas,'bar')
    makeSerDatas(lineDatas,'line')

    function makeSerDatas(fromDatas,makeType){
        Object.keys(fromDatas).forEach((barGroupName)=>{
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
            const whichY = makeType=='line'?"1":"0"
            const d = {
                name:serName,
                type:makeType,
                // barWidth:15,
                yAxisIndex: whichY,
                data:barSerData
            };
            if(makeType==='bar'){
                d.itemStyle = {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#83bff6'},
                                {offset: 0.5, color: '#2874ff'},
                                {offset: 1, color: '#188df0'}
                            ]
                        )
                    }
                }
            }else{
                d.itemStyle = {
                    normal:{
                        color:'#8121dd'
                    }
                }
            }
            seriesData.push(d)
        })
    }

    let option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid:{
            top:'10%',
            left:'5%',
            right:'5%',
            bottom:'20%',
            containLabel: true
        },
        // legend:{
        //     show:true,
        //     bottom : 10,
        //     itemWidth: 16,
        //     itemHeight: 8,
        //     textStyle:{
        //         color:'#fff',
        //         fontFamily: '微软雅黑',
        //         fontSize: 10,
        //     },
        //     data:data[0]
        // },
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

function consume(jsonData,selectObj){
    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
    }else{
        _data_cache.deviceUsedRatio = jsonData
        selectPoint = checkInitDate("deviceUsedRatioSelected")

    }
    let lineObject = {}
    let line2Object = {}
    let xArray = []
    _data_cache.deviceUsedRatio.forEach((productInfo)=>{
        const areaName = productInfo["type"]
        const year = productInfo["year"]
        const month = productInfo["month"]
        const val = productInfo["val"]
        const ratio = productInfo["ratio"]

        if((year+'-'+month)===selectPoint){
            if(lineObject[areaName]!=null){}
            else{
                lineObject[areaName] = val
                line2Object[areaName] = ratio
            }
        }
    })

    xArray = Object.keys(lineObject)

    let seriesData = [];

    seriesData.push({
        name:"利用率",
        type:'line',
        smooth: true,
        //stack: '总量',
        symbolSize: 1,
        symbol: 'circle',
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
        data:Object.values(line2Object)
    })


    // console.log(JSON.stringify(seriesData))

    let option = {
        grid: {
            left: '3%',
            right:'3%',
            top:'10%',
            bottom:'5%',
            containLabel: true
        },
        color: ["#37A2DA", "#E062AE", "#96BFFF"],

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


function cleanPowerInfos(jsonData,selectObj){
    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
        loadTabInfo('select',_default_clean_power_company,selectPoint)
    }else{
        _data_cache.cleanPowerInfos = jsonData
        selectPoint = checkInitDate("cleanPowerSelected")

    }

    cleanPowerMake(_data_cache.cleanPowerInfos,selectPoint)
}

function cleanPowerInstallInfos(jsonData,selectObj){
    let selectPoint = _default_select_date
    if(isSelect(jsonData)){
        selectPoint = $(selectObj).val()
        loadTabInfo('select',_default_clean_power_company,selectPoint)
    }else{
        _data_cache.cleanPowerInstallInfos = jsonData
        selectPoint = checkInitDate("cleanPowerSelected")

    }

    cleanPowerMake(_data_cache.cleanPowerInstallInfos,selectPoint)
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
        // $(".main_order_name"+(i+1)).html(showData['val'])
        $(".main_order_name"+(i+1)).html(showData['type'])
        // $(".main_order_name"+(i+1)).html(showData['type']+i)
    })

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
        selectDate = checkInitDate("cleanPowerSelected")
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
