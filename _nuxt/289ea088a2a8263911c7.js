(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{513:function(t,e,r){var content=r(628);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("18d66530",content,!0,{sourceMap:!1})},514:function(t,e,r){var content=r(630);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("1227ed50",content,!0,{sourceMap:!1})},515:function(t,e,r){var content=r(632);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(12).default)("5b188a62",content,!0,{sourceMap:!1})},521:function(t){t.exports=JSON.parse('{"date":"2020/3/12 21:00","datasets":[{"label":"2月10日~14日","data":[-0.96,-2.94,-7.48]},{"label":"2月17日~21日","data":[-0.36,-4.11,-6.95]},{"label":"2月25日~28日","data":[3.06,-9.47,-7.31]},{"label":"3月02日~05日","data":[1.08,-21.64,-9.92]},{"label":"3月09日~12日","data":[-0.78,-24.51,-12.13]}],"labels":["6:30~7:30","7:30~9:30","9:30~10:30"],"base_period":"1月20日~1月24日"}')},522:function(t){t.exports=JSON.parse('{"date":"2020/3/6 21:00","labels":["1/1~1/5","1/6~1/12","1/13~1/19","1/20~1/26","1/27~2/2","2/3~2/9","2/10~2/16","2/17~2/23","2/24~3/1","3/2~3/8"],"datasets":[{"label":"第一庁舎計","data":[0,12572,10267,12387,12248,12924,10221,12690,8841,9468]},{"label":"第二庁舎計","data":[0,14656,11548,13963,13611,13711,10997,14374,10734,12271]},{"label":"議事堂計","data":[0,422,316,321,632,492,464,553,492,381]}]}')},627:function(t,e,r){"use strict";var n=r(513);r.n(n).a},628:function(t,e,r){(e=r(11)(!1)).push([t.i,".Graph-Desc[data-v-4eee038c]{width:100%;margin:0;font-size:12px;color:gray}",""]),t.exports=e},629:function(t,e,r){"use strict";var n=r(514);r.n(n).a},630:function(t,e,r){(e=r(11)(!1)).push([t.i,".MetroGraph-Desc{margin-top:10px;margin-bottom:0 !important;font-size:12px;color:gray}",""]),t.exports=e},631:function(t,e,r){"use strict";var n=r(515),o=r.n(n);e.default=o.a},632:function(t,e,r){(e=r(11)(!1)).push([t.i,".DataViewDesc_3od6x{margin-top:10px;margin-bottom:0 !important;font-size:12px;color:gray}",""]),e.locals={DataViewDesc:"DataViewDesc_3od6x"},t.exports=e},640:function(t,e,r){"use strict";r.r(e);var n=r(521),o=r(522),c=r(523),d=r(526),l=r(524),h=(r(37),r(468)),f=r(525),m=r(517),y={components:{DataView:h.a,DataSelector:f.a,DataViewBasicInfoPanel:m.a},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"time-stacked-bar-chart"},chartData:{type:Array,required:!1,default:function(){return[]}},date:{type:String,required:!0,default:""},items:{type:Array,required:!1,default:function(){return[]}},labels:{type:Array,required:!1,default:function(){return[]}},unit:{type:String,required:!1,default:""}},data:function(){return{dataKind:"transition"}},computed:{displayInfo:function(){return"transition"===this.dataKind?{lText:this.sum(this.pickLastNumber(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の合計",{date:this.labels[this.labels.length-1]})),unit:this.unit}:{lText:this.sum(this.cumulativeSum(this.chartData)).toLocaleString(),sText:"".concat(this.$t("{date}の全体累計",{date:this.labels[this.labels.length-1]})),unit:this.unit}},displayData:function(){var t=this,e=["#18834f","#18ae63"];return"transition"===this.dataKind?{labels:this.labels,datasets:this.chartData.map((function(r,n){return{label:t.items[n],data:r,backgroundColor:e[n],borderWidth:0}}))}:{labels:this.labels,datasets:this.chartData.map((function(r,n){return{label:t.items[n],data:t.cumulative(r),backgroundColor:e[n],borderWidth:0}}))}},options:function(){var t=this,e=this.unit,r=this.eachArraySum(this.chartData),data=this.chartData,n=this.chartData.map((function(e){return t.cumulative(e)})),o=this.eachArraySum(n);return{tooltips:{displayColors:!1,callbacks:{label:function(c){var d,l,h=[t.$t("都内"),t.$t("その他")];return"transition"===t.dataKind?(d=r[c.index].toLocaleString(),l=data[c.datasetIndex][c.index].toLocaleString()):(d=o[c.index].toLocaleString(),l=n[c.datasetIndex][c.index].toLocaleString()),"".concat(h[c.datasetIndex],": ").concat(l," ").concat(e," (").concat(t.$t("合計"),": ").concat(d," ").concat(e,")")},title:function(t,data){return data.labels[t[0].index]}}},responsive:!0,maintainAspectRatio:!1,legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"}},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,minRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold",callback:function(label){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(label.split(" ")[0])+1+"月"}},type:"time",time:{unit:"month"}}],yAxes:[{location:"bottom",stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,stepSize:1,fontColor:"#808080"}}]}}}},methods:{cumulative:function(t){var e=[],r=0;return t.forEach((function(t){r+=t,e.push(r)})),e},sum:function(t){return t.reduce((function(t,e){return t+e}))},pickLastNumber:function(t){return t.map((function(t){return t[t.length-1]}))},cumulativeSum:function(t){return t.map((function(t){return t.reduce((function(t,e){return t+e}))}))},eachArraySum:function(t){for(var e=[],i=0;i<t[0].length;i++)e.push(t[0][i]+t[1][i]);return e}}},v=(r(627),r(14)),$={components:{TimeStackedBarChart:Object(v.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[r("p",{staticClass:"Graph-Desc"},[t._v("\n      "+t._s(t.$t("（注）同一の対象者について複数の検体を調査する場合あり"))+"\n      "),r("br"),t._v("\n      "+t._s(t.$t("検査実施数は、速報値として公開するものであり、後日確定データとして修正される場合があります"))+"\n    ")]),t._v(" "),r("data-selector",{model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"infoPanel",fn:function(){return[r("data-view-basic-info-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0}])},[t._v(" "),r("bar",{attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.options,height:240}})],1)}),[],!1,null,"4eee038c",null).exports},data:function(){var t=this.$store.state.data.data,data={Data:t,inspectionsGraph:[t.inspections_summary.data["都内"],t.inspections_summary.data["その他"]],inspectionsItems:[this.$t("都内発生（疑い例・接触者調査）"),this.$t("その他（チャーター便・クルーズ船）")],inspectionsLabels:t.inspections_summary.labels};return data}},x=r(47),k=r.n(x),D=r(462),C=Object(v.a)($,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-stacked-bar-chart",{attrs:{title:this.$t("検査実施数"),"title-id":"number-of-tested","chart-id":"time-stacked-bar-chart-inspections","chart-data":this.inspectionsGraph,date:this.Data.inspections_summary.date,items:this.inspectionsItems,labels:this.inspectionsLabels,unit:this.$t("件.tested")}})],1)}),[],!1,null,null,null),_=C.exports;k()(C,{VCol:D.a});var S=r(471),w=r(516),L={components:{TimeBarChart:w.a},data:function(){var t=this.$store.state.data.data,data={Data:t,contactsGraph:Object(S.a)(t.contacts.data)};return data}},I=Object(v.a)(L,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("新型コロナコールセンター相談件数"),"title-id":"number-of-reports-to-covid19-telephone-advisory-center","chart-id":"time-bar-chart-contacts","chart-data":this.contactsGraph,date:this.Data.contacts.date,unit:this.$t("件.reports"),url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000071"}})],1)}),[],!1,null,null,null),O=I.exports;k()(I,{VCol:D.a});var T={components:{TimeBarChart:w.a},data:function(){var t=this.$store.state.data.data,data={Data:t,querentsGraph:Object(S.a)(t.querents.data)};return data}},A=Object(v.a)(T,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("time-bar-chart",{attrs:{title:this.$t("新型コロナ受診相談窓口相談件数"),"title-id":"number-of-reports-to-covid19-consultation-desk","chart-id":"time-bar-chart-querents","chart-data":this.querentsGraph,date:this.Data.querents.date,unit:this.$t("件.reports"),url:"https://catalog.data.metro.tokyo.lg.jp/dataset/t000010d0000000070"}})],1)}),[],!1,null,null,null),j=A.exports;k()(A,{VCol:D.a});var G={components:{DataView:h.a},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"metro-bar-chart"},chartData:{type:Object,required:!1,default:function(){}},chartOption:{type:Object,required:!1,default:function(){}},date:{type:String,required:!0,default:""}},computed:{displayData:function(){var t=this,e=["#a6e29f","#63c765","#008b41"];return{labels:this.chartData.datasets.map((function(t){return t.label})),datasets:this.chartData.labels.map((function(label,i){return{label:label,data:t.chartData.datasets.map((function(t){return t.data[i]})),backgroundColor:e[i],borderWidth:0}}))}}}},V=(r(629),{components:{MetroBarChart:Object(v.a)(G,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[r("p",{staticClass:"MetroGraph-Desc"},[t._v("\n      "+t._s(t.$t("{range}の利用者数*の平均値を基準としたときの相対値",{range:t.$t(t.chartData.base_period)}))+"\n      "),r("br"),t._v("\n      *"+t._s(t.$t("都営地下鉄4路線の自動改札出場数"))+"\n    ")])]},proxy:!0}])},[t._v(" "),r("bar",{attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.chartOption,height:240}})],1)}),[],!1,null,null,null).exports},data:function(){var t=this,e=this.$store.state.data.data,r=n,data={Data:e,metroGraph:r,metroGraphOption:{responsive:!0,legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"}},scales:{xAxes:[{position:"bottom",stacked:!1,gridLines:{display:!0},ticks:{fontSize:10,maxTicksLimit:20,fontColor:"#808080"}}],yAxes:[{stacked:!1,gridLines:{display:!0},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",callback:function(t){return t.toFixed(2)+"%"}}}]},tooltips:{displayColors:!1,callbacks:{title:function(e,r){var label=e[0].label;return t.$t("期間: {duration}",{duration:t.$t(label)})},label:function(e,data){var n=data.datasets[e.datasetIndex],o="".concat(n.data[e.index],"%");return t.$t("{duration}の利用者数との相対値: {percentage}",{duration:t.$t(r.base_period),percentage:o})}}}}};return data}}),E=Object(v.a)(V,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("metro-bar-chart",{attrs:{title:this.$t("都営地下鉄の利用者数の推移"),"title-id":"predicted-number-of-toei-subway-passengers","chart-id":"metro-bar-chart","chart-data":this.metroGraph,"chart-option":this.metroGraphOption,date:this.metroGraph.date}})],1)}),[],!1,null,null,null),z=E.exports;k()(E,{VCol:D.a});var M={components:{DataView:h.a},props:{title:{type:String,required:!1,default:""},titleId:{type:String,required:!1,default:""},chartId:{type:String,required:!1,default:"agency-bar-chart"},unit:{type:String,required:!1,default:""},url:{type:String,required:!1,default:""}},data:function(){var t=this,e=[this.$t("第一庁舎計"),this.$t("第二庁舎計"),this.$t("議事堂計")];return o.datasets.map((function(e){e.label=t.$t(e.label)})),{chartData:o,date:o.date,agencies:e}},computed:{displayData:function(){var t=this,e=["#008b41","#63c765","#a6e29f"];return{labels:this.chartData.labels,datasets:this.chartData.datasets.map((function(r,n){return{label:t.agencies[n],data:r.data,backgroundColor:e[n]}}))}},displayOption:function(){var t=this;return{tooltips:{displayColors:!1,callbacks:{title:function(e){var r=e[0].label;return t.$t("期間: {duration}",{duration:r})},label:function(e,data){var r=e.datasetIndex,title=t.$t(data.datasets[r].label),n=e.value,o=t.$t(t.unit);return"".concat(title,": ").concat(n).concat(o)}}},legend:{display:!0,onHover:function(t){t.currentTarget.style.cursor="pointer"},onLeave:function(t){t.currentTarget.style.cursor="default"}},scales:{xAxes:[{stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,fontColor:"#808080"}}],yAxes:[{stacked:!0,gridLines:{display:!0},ticks:{fontSize:9,fontColor:"#808080",maxTicksLimit:10,stepSize:1,callback:function(label){return"".concat(label).concat(t.unit)}}}]}}}}},N=r(631);var B={components:{AgencyBarChart:Object(v.a)(M,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,url:t.url},scopedSlots:t._u([{key:"button",fn:function(){return[r("small",{class:t.$style.DataViewDesc},[t._v("\n      ※土・日・祝日を除く庁舎開庁日の1週間累計数\n    ")])]},proxy:!0}])},[t._v(" "),r("bar",{attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240}})],1)}),[],!1,(function(t){this.$style=N.default.locals||N.default}),null,null).exports}},J=Object(v.a)(B,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("agency-bar-chart",{attrs:{title:this.$t("都庁来庁者数の推移"),"title-id":"agency","chart-id":"agency",url:"",unit:this.$t("人")}})],1)}),[],!1,null,null,null),K=J.exports;k()(J,{VCol:D.a});var R={components:{ConfirmedCasesDetailsCard:c.a,ConfirmedCasesNumberCard:d.a,ConfirmedCasesAttributesCard:l.a,TestedNumberCard:_,TelephoneAdvisoryReportsNumberCard:O,ConsultationDeskReportsNumberCard:j,MetroCard:z,AgencyCard:K},data:function(){var title,t,e=this.$store.state.data.data;switch(this.$route.params.card){case"details-of-confirmed-cases":title=this.$t("検査陽性者の状況"),t=e.inspections_summary.date;break;case"number-of-confirmed-cases":title=this.$t("陽性患者数"),t=e.patients.date;break;case"attributes-of-confirmed-cases":title=this.$t("陽性患者の属性"),t=e.patients.date;break;case"number-of-tested":title=this.$t("検査実施数"),t=e.inspections_summary.date;break;case"number-of-reports-to-covid19-telephone-advisory-center":title=this.$t("新型コロナコールセンター相談件数"),t=e.contacts.date;break;case"number-of-reports-to-covid19-consultation-desk":title=this.$t("新型コロナ受診相談窓口相談件数"),t=e.querents.date;break;case"predicted-number-of-toei-subway-passengers":title=this.$t("都営地下鉄の利用者数の推移"),t=n.date;break;case"agency":title=this.$t("都庁来庁者数の推移"),t=o.date}var data={title:title,updatedAt:t};return data},head:function(){var t="https://stopcovid19.metro.tokyo.lg.jp",e=t+"/ogp-"+this.$route.params.card+".png",r=this.updatedAt+" 更新 | 当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、東京都が開設したものです。";return{title:this.title,meta:[{hid:"og:url",property:"og:url",content:t+this.$route.path+"/"},{hid:"og:title",property:"og:title",content:this.title+" | 東京都 新型コロナウイルス感染症対策サイト"},{hid:"description",name:"description",content:r},{hid:"og:description",property:"og:description",content:r},{hid:"og:image",property:"og:image",content:e},{hid:"twitter:image",name:"twitter:image",content:e}]}}},H=Object(v.a)(R,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",["details-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-details-card"):"number-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-number-card"):"attributes-of-confirmed-cases"==this.$route.params.card?e("confirmed-cases-attributes-card"):"number-of-tested"==this.$route.params.card?e("tested-number-card"):"number-of-reports-to-covid19-telephone-advisory-center"==this.$route.params.card?e("telephone-advisory-reports-number-card"):"number-of-reports-to-covid19-consultation-desk"==this.$route.params.card?e("consultation-desk-reports-number-card"):"predicted-number-of-toei-subway-passengers"==this.$route.params.card?e("metro-card"):"agency"==this.$route.params.card?e("agency-card"):this._e()],1)}),[],!1,null,null,null);e.default=H.exports}}]);