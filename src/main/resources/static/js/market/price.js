$(document).ready(function(){
    getdata('/market/price/chart1.json',function(df){ init_table(df,'tb1');  });
    getdata('/market/price/chart2.json',function(df){ init_table(df,'tb2');  });
    getdata('/market/price/chart3.json',function(df){ init_table(df,'tb3');  });
    $(this).click(function(){
        for(var n in _tdmap)
            _tdmap[n].auto = true;
    })
});
var _tdmap = {'tb1':{i:2,idx:2,fn:chart1,t:'table1',cv:cv1,auto:true},'tb2':{i:1,idx:1,fn:chart2,t:'table2',cv:cv1,auto:true},'tb3':{i:1,idx:1,fn:chart3,t:'table3',cv:cv2,auto:true}};
function init_table(df, tid){
    if(df==null) return;
    var tt = _tdmap[tid];
    var l1 = df.column.length, l2 = df.column[0].length, l0 = df.data.length, lp = 100 > l0 ? l0 : 100;
    var str = [], i = 0, j = 0, k = 0, w = $('.qg-panel').width(), w0 = 100, w11 = w0 * tt.i, w12 = w - w11 - 17, wt12 = (l2-tt.i)*w0;
    var dsp = [], h = $('.qg-panel').height(), h0 = 30, h2 = h - h0 * l1 - 17, h3 = h2 + 17;
    tt.max = l2;
    tt.df = df;
    for(i = 0; i< l2; i++){
        dsp.push([]);
    }
    for(i = 0; i< l0; i++){
        for(j = 0; j < l2; j++){
            dsp[j].push(tt.cv(df.data[i][j]));
        }
    }
    //1., 1.1
    str.push('<div class="qg-header qg-box" style="padding-right:17px;">',
             '	<div class="qg-header1 qg-box qg-line" style="width:',w11, 'px;">',
             '		<table class="qt"><thead>'
    );
    for(i = 0; i < l1; i++){
        str.push('<tr>');
        for(j = 0; j < tt.i; j++)
            str.push('<th>',df.column[i][j], '</th>' );
        str.push('</tr>');
    }
    str.push('</thead></table></div>');
    //1.2
    str.push('<div class="qg-header2 qg-box qg-line" style="width:', w12, 'px;">',
            '     <table class="qt" style="width: ',wt12, 'px;">'
    );
    for(i = df.i; i< l2; i++){
        str.push('<colgroup id="', tid, '_col_', i, 'h" style="width:', w0, 'px"></colgroup>');
    }
    str.push('<thead>');
    for(i = 0; i < l1; i++){
        str.push('<tr>');
        for(j = tt.i; j < l2; j++){
            str.push('<th>', df.column[i][j], '</th>');
        }
        str.push('</tr>');
    }
    str.push('</thead></table></div>');
    str.push('</div>');
    //2.,2.1
    str.push('<div class="qg-body1 qg-box qg-line" style="width:', w11, 'px;height:', h2,'px;">',
             '     <table class="qt">');
    for(i = 0; i< tt.i; i++){
        str.push('<colgroup style="width:', w0, 'px"></colgroup>');
    }
    str.push('<tbody>');
    for(i = l0 - 1, k = l0 - lp; i >= k; i--){
        str.push('<tr>');
        str.push('<td>', df.index[i]||'' ,'</td>');
        for(j = 0; j < tt.i - 1; j++){
            str.push('<td>', df.data[i][j]||'' ,'</td>');
        }
        str.push('</tr>');
    }
    str.push('</tbody></table></div>');
    //2.2
    str.push('<div id="', tid ,'_body" class="qg-body2 qg-box qg-line" style="width:', w12, 'px;height:', h3,'px;">',
        '     <table id="',tid,'" class="qt qtable" style="width:', wt12 , 'px">');
    for(i = tt.i; i< l2; i++){
        str.push('<colgroup id="', tid, '_col_', i, '"></colgroup>');
    }
    str.push('<tbody>');
    for(i = l0 - 1, k = l0 - lp; i >= k; i--){
        str.push('<tr>');
        for(j = tt.i - 1; j < l2; j++){
            var cid = tid + "_col_" + (j+1);
            str.push('<td rel="',cid, '">', df.data[i][j], '</td>');
        }
        str.push('</tr>');
    }
    str.push('</tbody></table></div>');
    $("#"+tt.t).html(str.join(''));
    var tb = $("#"+tid);
    var qb2 = $("#"+tt.t).find('.qg-body2'), qb1 = $("#"+tt.t).find(".qg-body1"), qh2 = $("#"+tt.t).find(".qg-header2"), h11 = qh2.height();
    qb2.height(h - h11);
    qb1.height(h - h11);
    qb2.scroll(function(){
        var tt = $(this).scrollTop(), ll = $(this).scrollLeft();
        qb1.scrollTop(tt);
        qh2.scrollLeft(ll);
    });
    tb.find("th,td").click(function(e) {
        e.stopPropagation();
        var curCol = $(this).attr("rel");
        if(!curCol) return;
        var tt = _tdmap[tid];
        tt.idx = parseInt(curCol.split('_')[2]);
        tt.auto = false;
        choseCol(tid, tt);
    });
    tt.ps = new PerfectScrollbar("#"+tid+'_body');
    tt.ds = dsp;
    tt.dc = df.column[df.column.length - 1];
    df.index = $chart.xtime(df.index);
    auto_choseCol(tid);
}
function auto_choseCol(tid){
    var tt = _tdmap[tid];
    if(tt.auto)
        choseCol(tid,tt);
    setTimeout(function(){
        auto_choseCol(tid);
    }, 3000);
}
function choseCol(tid,tt){
    $("#"+tid+" colgroup.hover").removeClass("hover");
    var curCol = tid + '_col_' + tt.idx;
    $("#"+curCol).addClass("hover");
    if(tt.idx>tt.i+1)
        $("#"+tid + '_body')[0].scrollLeft = (tt.idx - tt.i)*100;
    tt.idx = tt.idx + 1;
    if(tt.idx>=tt.max)
        tt.idx = tt.i;
    var x = tt.idx - 2;//-tt.t
    tt.fn(tt.ds[x], tid);
}
function cv1(o){
    return o;
}
function cv2(o){
    if(o)
        return o.substr(0, o.length - 2);
    return o;
}

function chart1(data,tid){
    var tt = _tdmap[tid];
    var option = {
        legend: {
            show:false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            top: '10%',
            bottom:10,
            left:'5%',
            right:'5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            splitLine: {
                show: false
            },
            data:tt.df.index
        },
        yAxis: {
            type: 'value',
            splitNumber:4,
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
            z: 10
        },
        series: [{
            name:'产品价格',
            type:'line',
            smooth:true,
            showSymbol: false,
            sampling: 'average',
            lineStyle:{
                color:'#36b8ff'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(54,184,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(54,184,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(54,184,255,0.1)'
                        }]
                    )
                }
            },
            data: data
        }]
    };
    if(tt.chart)
        tt.chart.dispose();
    tt.chart = echarts.init($('#chart1')[0]);
    tt.chart.setOption(option);
}

function chart2(data,tid){
    var tt = _tdmap[tid];
    var option = {
        legend: {
            show:false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            top: '10%',
            bottom:10,
            left:'5%',
            right:'5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            splitLine: {
                show: false
            },
            data:tt.df.index
        },
        yAxis: {
            type: 'value',
            splitNumber:4,
            axisTick: {
                inside: true
            },
            splitLine: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#ffffff'
                }
            },
        },
        series: [{
            name:'产品价差',
            type:'line',
            smooth:true,
            showSymbol: false,
            sampling: 'average',
            lineStyle:{
              color:'#e1c15a'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(214,190,106,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(214,190,106,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(214,190,106,0.1)'
                        }]
                    )
                }
            },
            data: data
        }]
    };
    if(tt.chart)
        tt.chart.dispose();
    tt.chart = echarts.init($('#chart2')[0]);
    tt.chart.setOption(option);
}

function chart3(data,tid){
    var tt = _tdmap[tid];
    var option = {
        legend: {
            show:false
        },
        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        grid: {
            top: '10%',
            bottom:10,
            left:'5%',
            right:'5%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            splitLine: {
                show: false
            },
            data:tt.df.index
        },
        yAxis: {
            type: 'value',
            splitNumber:4,
            axisTick: {
                inside: true
            },
            axisLine: {
                lineStyle: {
                    color: '#87CEFF'
                }
            },
            splitLine: {
                show: false
            },
            axisLabel: {
            	formatter: '{value}%',
                textStyle: {
                    color: '#ffffff'
                }
            },
        },
        series: [{
            name:'产品开工率',
            type:'line',
            smooth:true,
            showSymbol: false,
            sampling: 'average',
            lineStyle:{
              color:'#61ffff'
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(97,255,255,1)'
                        }, {
                            offset: 0.4,
                            color: 'rgba(97,255,255,0.5)'
                        }, {
                            offset: 1,
                            color: 'rgba(97,255,255,0.1)'
                        }]
                    )
                }
            },
            data: data
        }]
    };
    if(tt.chart)
        tt.chart.dispose();
    tt.chart = echarts.init($('#chart3')[0]);
    tt.chart.setOption(option);
}