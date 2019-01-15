$(document).ready(function(){
    var __time = "?__time=" + new Date();
    getdata('/energy/gas/ha/main.json' + __time,getMain);
    changeMap('nh');//chart1
    getdata('/energy/gas/ha/chart2.json' + __time,chart2);
    getdata('/energy/gas/ha/chart3.json' + __time,chart3);
    getdata('/energy/gas/ha/chart4.json' + __time,chart4);
    getdata('/energy/gas/ha/chart5.json' + __time,chart5);
});

function dwz(data, name){
    for(var i=0; i<data[3].length; i++){
        if(data[3][i] == name){
            return data[0][i];
        }
    }
    return "";
}

var mainData;
function getMain(data){
    mainData = data;
    main(mainData, "储气库工作气量")
}

function changeMain(lx, param){
    var id ="#"+param;
    $(".d"). removeClass("check_btn_option_checked");
    $(id). addClass("check_btn_option_checked");

    main(mainData, lx)
}

function main(data, lx){

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
        'United States of America':'美国',
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

    var dataItems = [];
    var maxData = 0;
    for(var i=0; i<data[1].length; i++){
        var iValue = data[3][lx][i];
        dataItems.push(
            {name: data[1][i], value: iValue}
        );
        if(iValue > maxData){
            maxData = iValue;
        }
    }

    option = {
        timeline: {
            axisType: 'category',
            orient: 'vertical',
            autoPlay: true,
            inverse: true,
            playInterval: 5000,
            left: null,
            right: -105,
            top: 20,
            bottom: 20,
            width: 46,
            data: ['2016',]
        },
        baseOption: {
            visualMap: {
                bottom: '3%',
                left: '3%',
                min: 1,
                max: maxData,
                text:['高','低'],
                realtime: true,
                calculable: true,
                inRange: {
                    color: ['skyblue','orangered']
                }
            },
            series: [{
                type: 'map',
                map: 'world',
                roam: true,
                itemStyle:{
                    emphasis:{label:{show:false}}
                },
                nameMap: nameMap

            }]
        },

        options: [
            {
                title: {
                    text: '世界十大天然气储气国调峰能力',
                    left: 'center',
                    top: 'top',
                    textStyle: {
                        color: '#a4d6fe'
                    },
                },
                tooltip: {
                    trigger: 'item',
                    formatter: function (params) {
                        var value = (params.value);
                        //value = value.toFixed(5);toFixed(3)控制小数位数
                        value = value;
                        //var abc=(params.abc);
                        if(params.name){
                            return  params.name + ' : ' + (value ? value : '0') +' 亿立方米';
                        }else{
                            return  '';
                        }
                    }
                },
                series: {
                    data: dataItems

                }
            },

        ]
    };

    var myChart = echarts.init($('#main')[0]);
    myChart.setOption(option);
}

function changeMap(param){
    var id ="#"+param;
    $(".c"). removeClass("check_btn_option_checked");
    $(id). addClass("check_btn_option_checked");
    var __time = "?__time=" + new Date();
    if("nh" == param){
        getdata('/energy/gas/ha/chart1.json' + __time,chart1_nh);
    }else if("dh" == param){
        getdata('/energy/gas/ha/chart1.json' + __time,chart1_dh);
    }
}

function chart1_nh(data){
    var option = {
        title: {
            text: '中国天然气开采综合能耗对比',
            x: 'center',
            y: 0,
            textStyle:{
                color:'#a4d6fe',
                fontSize:13,
                fontWeight:'normal',
            }
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0][0];
                }
                return res;

            }
        },
        legend:{
            show:true,
            top : 3,
            right:5,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: data[0][2]
        },
        grid:{
            top:'25%',
            left:'5%',
            right:'5%',
            bottom:'1%',
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
            data: data[0][4]
        },
        yAxis: [{
            type: 'value',
            name:data[0][0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,55],
                align:'center',
                color:'#fff',
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
            "splitLine": {
                "show": false
            }
        }
        ],
        series: [
            {
                name: data[0][2][0],
                color:data[0][3][0],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[0][5]["nh"][0]
            },
            {
                name: data[0][2][1],
                color:data[0][3][1],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[0][5]["nh"][1]
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}

function chart1_dh(data){
    var option = {
        title: {
            text: '中国天然气开采综合能耗对比',
            x: 'center',
            y: 0,
            textStyle:{
                color:'#a4d6fe',
                fontSize:13,
                fontWeight:'normal',
            }
        },
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[1][0][0];
                }
                return res;

            }
        },
        legend:{
            show:true,
            top : 3,
            right:5,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: data[1][2]
        },
        grid:{
            top:'25%',
            left:'5%',
            right:'5%',
            bottom:'1%',
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
            data: data[1][4]
        },
        yAxis: [{
            type: 'value',
            name:data[1][0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,55],
                align:'center',
                color:'#fff',
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
            "splitLine": {
                "show": false
            }
        }
        ],
        series: [
            {
                name: data[1][2][0],
                color:data[1][3][0],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[1][5]["dh"][0]
            },
            {
                name: data[1][2][1],
                color:data[1][3][1],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[1][5]["dh"][1]
            }
        ]
    };
    var myChart = echarts.init($('#chart1')[0]);
    myChart.setOption(option);
}


function chart2(data){

    var option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                }
                return res;

            }
        },
        legend:{
            show:true,
            top : 0,
            right:1,
            itemWidth: 16,
            itemHeight: 8,
            textStyle:{
                color:'#fff',
                fontFamily: '微软雅黑',
                fontSize: 10,
            },
            data: data[2]
        },
        grid:{
            top:'5%',
            left:'5%',
            right:'5%',
            bottom:'10%',
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
            data: data[3]
        },
        yAxis: [{
            type: 'value',
            name:data[0][0],
            nameGap:-5,
            nameTextStyle:{
                padding:[0,0,0,15],
                align:'center',
                color:'#fff',
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
            "splitLine": {
                "show": false
            }
        }
        ],
        series: [
            {
                name: data[2][0],
                color:data[1][0],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[4]
            },
            {
                name: data[2][1],
                color:data[1][1],
                type: 'line',
                smooth: true,
                showSymbol: false,
                data: data[5]
            }
        ]
    };
    var myChart = echarts.init($('#chart2')[0]);
    myChart.setOption(option);
}


function chart3(data){

    var chartId = "chart3";

    option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    if(params[i].seriesName == data[1][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                    }else if(params[i].seriesName == data[1][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1];
                    }
                }
                return res;
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        "legend": {
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
            data: data[1],
        },
        "xAxis": [
            {
                "type": "category",
                "data": data[3],
                "axisPointer": {
                    "type": "shadow"
                },
                boundaryGap: true,
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
                "splitLine": {
                    "show": false
                },
            }
        ],
        "yAxis": [
            {
                type: 'value',
                name:data[0][0],
                nameGap:-5,
                nameTextStyle:{
                    padding:[0,0,0,55],
                    align:'center',
                    color:'#fff',
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
                "splitLine": {
                    "show": false
                },
                /*
                "splitLine": {
                  "lineStyle": {
                    "color": "#7d838b"
                  }
                }
                */
            },

            {
                "type": "value",
                //"name": "完成率",
                "show": true,
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
                    formatter: "{value}%"
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": data[1][0],
                "type": "bar",
                "data": data[4],
                "barWidth": "30%",
                "itemStyle": {
                    "normal": {
                        "color": "#2b88ff"
                    }
                },
                "smooth": true
            },
            {
                "name": data[1][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[5],
                "itemStyle": {
                    "normal": {
                        "color": "#25e4a3"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}


function chart4(data){

    var chartId = "chart4";

    option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    if(params[i].seriesName == data[1][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                    }else if(params[i].seriesName == data[1][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1];
                    }
                }
                return res;
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        "legend": {
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
            data: data[1],
        },
        "xAxis": [
            {
                "type": "category",
                "data": data[3],
                "axisPointer": {
                    "type": "shadow"
                },
                boundaryGap: true,
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
                "splitLine": {
                    "show": false
                },
            }
        ],
        "yAxis": [
            {
                type: 'value',
                name:data[0][0],
                nameGap:-5,
                nameTextStyle:{
                    padding:[0,0,0,55],
                    align:'center',
                    color:'#fff',
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
                "splitLine": {
                    "show": false
                }
            },
            {
                "type": "value",
                //"name": "完成率",
                "show": true,
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
                    formatter: "{value}%"
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": data[1][0],
                "type": "bar",
                "data": data[4],
                "barWidth": "30%",
                "itemStyle": {
                    "normal": {
                        "color": "#2b88ff"
                    }
                },
                "smooth": true
            },
            {
                "name": data[1][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[5],
                "itemStyle": {
                    "normal": {
                        "color": "#25e4a3"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}



function chart5(data){

    var chartId = "chart5";

    option = {
        "tooltip": {
            "trigger": "axis",
            "axisPointer": {
                "type": "cross",
                "crossStyle": {
                    "color": "#384757"
                }
            },
            formatter: function(params, ticket, callback) {

                var res = params[0].name;

                for (var i = 0, l = params.length; i < l; i++) {
                    if(params[i].seriesName == data[1][0]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][0];
                    }else if(params[i].seriesName == data[1][1]){
                        res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value ? params[i].value : '0') + " " + data[0][1];
                    }
                }
                return res;
            }
        },
        grid: {
            left: '5%',
            right:'5%',
            top:'10%',
            bottom:'18%',
            containLabel: true
        },
        "legend": {
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
            data: data[1],
        },
        "xAxis": [
            {
                "type": "category",
                "data": data[3],
                "axisPointer": {
                    "type": "shadow"
                },
                boundaryGap: true,
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
                "splitLine": {
                    "show": false
                },
            }
        ],
        "yAxis": [
            {
                type: 'value',
                name:data[0][0],
                nameGap:-5,
                nameTextStyle:{
                    padding:[0,0,0,55],
                    align:'center',
                    color:'#fff',
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
                "splitLine": {
                    "show": false
                }
            },
            {
                "type": "value",
                //"name": "完成率",
                "show": true,
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
                    formatter: "{value}%"
                },
                //去掉辅助线
                splitLine: {
                    show: false
                },
            }
        ],
        "series": [
            {
                "name": data[1][0],
                "type": "bar",
                "data": data[4],
                "barWidth": "30%",
                "itemStyle": {
                    "normal": {
                        "color": "#2b88ff"
                    }
                },
                "smooth": true
            },
            {
                "name": data[1][1],
                "type": "line",
                symbol: 'circle',
                "yAxisIndex": 1,
                "data": data[5],
                "itemStyle": {
                    "normal": {
                        "color": "#25e4a3"
                    }
                },
                "smooth": true
            }
        ]
    };
    var myChart = echarts.init($('#' + chartId)[0]);
    myChart.setOption(option);
}
