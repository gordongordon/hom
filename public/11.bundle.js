webpackJsonp([11],{713:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=(a(267),a(266)),s=n(u),f=(a(48),a(47)),c=n(f),d=(a(724),a(723)),p=n(d),m=(a(730),a(729)),h=n(m),y=(a(265),a(268)),g=n(y),v=(a(22),a(23)),D=n(v),k=(a(728),a(727)),M=(n(k),Object.assign||function(e){for(var t=1;arguments.length>t;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}),x=function(){function e(e,t){for(var a=0;t.length>a;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),b=a(0),P=n(b),_=a(34),C=(a(731),a(732)),E=a(105),O=a(46),w=a(106),V=a(26),I=a(170),T=n(I);a(722);var S=a(14),j=n(S),z=a(15),N=n(z),A=a(272),L=function(e){function t(){var e,a,n,o;i(this,t);for(var u=arguments.length,s=Array(u),f=0;u>f;f++)s[f]=arguments[f];return a=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.state={data:[],cols:1,asyncValue:[],sValue:["2001","3001"],netSizefocused:!1},n.onClick=function(){setTimeout(function(){n.setState({data:province})},120)},n.addPropertyForSale=function(e){var t=new w.Property;t.uid=j.default.app.uid,t.addressRegion=e.districk[0],t.addressLocation=e.districk[1],t.nameOfBuilding=e.districk[2],t.earlyTimeToView=e.earlyTimeToView.toJSON(),t.netSize=parseInt(e.netSize),t.salePrice=parseInt(e.salePrice),t.numOfRoom=parseInt(e.partition[0]),t.numOfBathroom=parseInt(e.partition[1]),t.numOfLivingroom=parseInt(e.partition[2]),t.isSaleWIthLease=e.isSaleWIthLease,t.isViewAble=e.isViewAble,t.contactName=e.contactName,t.contactPhone=parseInt(e.contactPhone),t.contactEmail=e.contactEmail,t.level=e.level[0],t.isPetAllowed=e.isPetAllowed;var a=O.Fb.app.agentSaleRef.push().key;t.typeFor="buy",t.typeTo="sale",t.fbid=a,t.typeBy="engage",t.relatedFbid=j.default.router.params.keyID,O.Fb.app.agentSaleRef.update(r({},a,t.serialize())),O.Fb.agentPropertys.child(a).set(t.serialize()),j.default.router.goTo(N.default.matchAgent,{keyID:j.default.router.params.filterID,typeTo:"buy",selectedSegmentIndex:1})},n.submit=function(e){var t=n.props.form.getFieldsValue();e.preventDefault(),n.addPropertyForSale(t)},n.sale=function(){},o=a,l(n,o)}return o(t,e),x(t,[{key:"render",value:function(){var e=this.props.form.getFieldProps,t=j.default.app.passByRef;console.log("p.size",V.propertys.propertys.size),console.log("p",t);var a=t.addressToArray,n=t.partitionToArray,r=t.levelToArray,i=(0,T.default)().locale("zh-cn").utcOffset(8),l=(0,T.default)(i).add(6,"M");return P.default.createElement("div",null,P.default.createElement(D.default,{style:{backgroundColor:"white"},className:"picker-list"},P.default.createElement(g.default,M({data:E.DISTRICK,cols:3},e("districk",{initialValue:a}),{className:"forss",title:"請選擇大廈/屋苑",extra:"請選擇大廈/屋苑"}),P.default.createElement(D.default.Item,{arrow:"horizontal"},"大廈/屋苑")),P.default.createElement(h.default,M({},e("netSize",{initialValue:t.netSize,normalize:function(e,t){return e&&!/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(e)?"."===e?"0.":t:e}}),{type:"number",placeholder:"0",clear:!0,extra:"呎"}),"實用 面 積"),P.default.createElement(g.default,M({data:A.LEVEL,cols:1,title:"選擇層數",cascade:!1},e("level",{initialValue:r}),{extra:"選擇層數",onOk:function(e){return console.log("ok",e)},onDismiss:function(e){return console.log("dismiss",e)}}),P.default.createElement(D.default.Item,{arrow:"horizontal"},"層數")),P.default.createElement(p.default,M({mode:"date",title:"選擇日期",extra:"選擇日期,最長半年來"},e("earlyTimeToView",{initialValue:(0,T.default)(t.earlyTimeToView)}),{minDate:i,maxDate:l}),P.default.createElement(D.default.Item,{arrow:"horizontal"},"最快幾時有樓睇")),P.default.createElement(g.default,M({data:C.PARTITION,cols:3,title:"選擇間隔",cascade:!1},e("partition",{initialValue:n}),{extra:"選擇間隔",onOk:function(e){return console.log("ok",e)},onDismiss:function(e){return console.log("dismiss",e)}}),P.default.createElement(D.default.Item,{arrow:"horizontal"},"間隔")),P.default.createElement(h.default,M({},e("salePrice",{initialValue:t.salePrice,normalize:function(e,t){return e&&!/^(([1-9]\d*)|0)(\.\d{0,2}?)?$/.test(e)?"."===e?"0.":t:e}}),{type:"number",placeholder:"請求入場價格/每萬",clear:!0,extra:"萬元"}),"售價"),P.default.createElement(D.default.Item,{extra:P.default.createElement(c.default,M({},e("isSaleWIthLease",{initialValue:t.isSaleWIthLease,valuePropName:"checked"}),{onClick:function(e){console.log(e)}}))},"出售連租賃"),P.default.createElement(D.default.Item,{extra:P.default.createElement(c.default,M({},e("isViewAble",{initialValue:t.isViewAble,valuePropName:"checked"}),{onClick:function(e){console.log(e)}}))},"有樓睇"),P.default.createElement(D.default.Item,{extra:P.default.createElement(c.default,M({},e("isPetAllowed",{initialValue:t.isPetAllowed,valuePropName:"checked"}),{onClick:function(e){console.log(e)}}))},"可養寵物"),P.default.createElement(h.default,M({},e("contactName",{initialValue:t.contactName}),{type:"text",placeholder:"請輸入姓名",clear:!0}),"姓名"),P.default.createElement(h.default,M({clear:!0},e("contactPhone",{initialValue:t.contactPhone}),{type:"phone",placeholder:"請輸入電話"}),"聯絡手機"),P.default.createElement(h.default,M({},e("contactEmail",{initialValue:t.contactEmail}),{clear:!0,placeholder:"請輸入電郵地址"}),"聯絡電郵"),P.default.createElement(D.default.Item,{extra:P.default.createElement(s.default,{type:"ghost",size:"large",inline:!0,onClick:this.submit},"回覆"),multipleLine:!0},"HoMatching",P.default.createElement(D.default.Item.Brief,null,"尊重您的私隱和信息，不會被共享。"))))}}]),t}(P.default.Component);t.default=(0,_.createForm)()(L)},723:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(3),i=n(r),l=a(4),o=n(l),u=a(6),s=n(u),f=a(5),c=n(f),d=a(1),p=n(d),m=a(0),h=n(m),y=a(21),g=n(y),v=a(738),D=n(v),k=a(737),M=n(k),x=a(736),b=a(733),P=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){var e=this.props,t=this.context,n=e.children,r=e.value,i=e.defaultDate,l=e.extra,o=e.popupPrefixCls,u=(0,b.getComponentLocale)(e,t,"DatePicker",function(){return a(735)}),s=(0,b.getLocaleCode)(t),f=u.okText,c=u.dismissText,d=u.DatePickerLocale;s&&(r&&r.locale(s),i&&i.locale(s));var m=h.default.createElement(M.default,{minuteStep:e.minuteStep,locale:d,minDate:e.minDate,maxDate:e.maxDate,mode:e.mode,pickerPrefixCls:e.pickerPrefixCls,prefixCls:e.prefixCls,defaultDate:r||(0,x.getDefaultDate)(this.props)});return h.default.createElement(D.default,(0,p.default)({datePicker:m,WrapComponent:"div",transitionName:"am-slide-up",maskTransitionName:"am-fade"},e,{prefixCls:o,date:r||(0,x.getDefaultDate)(this.props),dismissText:c,okText:f}),n&&h.default.cloneElement(n,{extra:r?(0,x.formatFn)(this,r):l}))}}]),t}(h.default.Component);t.default=P,P.defaultProps=function(){return(0,p.default)({prefixCls:"am-picker",pickerPrefixCls:"am-picker-col",popupPrefixCls:"am-picker-popup",minuteStep:1},(0,x.getProps)())}(),P.contextTypes={antLocale:g.default.object},e.exports=t.default},724:function(e,t,a){"use strict";a(265)},735:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(740);t.default={okText:"确定",dismissText:"取消",DatePickerLocale:function(e){return e&&e.__esModule?e:{default:e}}(n).default},e.exports=t.default},736:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return"time"===e?"HH:mm":"datetime"===e?"YYYY-MM-DD HH:mm":"YYYY-MM-DD"}function i(e,t){var a=e.props.format,n=void 0===a?"undefined":(0,s.default)(a);return"string"===n?t.format(n):"function"===n?a(t):t.format(r(e.props.mode))}function l(){return{mode:"datetime",extra:"请选择",onChange:function(){},title:""}}function o(e){var t=e.defaultDate,a=e.minDate,n=e.maxDate;if(t)return t;var r=(0,c.default)();return a&&r.isBefore(a)?a:n&&n.isBefore(r)?a:r}Object.defineProperty(t,"__esModule",{value:!0});var u=a(51),s=n(u);t.formatFn=i,t.getProps=l,t.getDefaultDate=o;var f=a(170),c=n(f)},737:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return e.clone().endOf("month").date()}function i(e){return 10>e?"0"+e:e+""}Object.defineProperty(t,"__esModule",{value:!0});var l=a(1),o=n(l),u=a(3),s=n(u),f=a(4),c=n(f),d=a(6),p=n(d),m=a(5),h=n(m),y=a(0),g=n(y),v=a(109),D=n(v),k=a(110),M=n(k),x=a(170),b=n(x),P=a(739),_=n(P),C={fontSize:20},E="datetime",O="date",w="month",V="year",I=function(e){function t(){(0,s.default)(this,t);var e=(0,p.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={date:e.props.date||e.props.defaultDate},e.onValueChange=function(t,a){var n=parseInt(t[a],10),r=e.props,i=r.mode,l=e.getDate().clone();if(i===E||i===O||i===V||i===w)switch(a){case 0:l.year(n);break;case 1:l.month(n);break;case 2:l.date(n);break;case 3:l.hour(n);break;case 4:l.minute(n)}else switch(a){case 0:l.hour(n);break;case 1:l.minute(n)}l=e.clipDate(l),"date"in r||e.setState({date:l}),r.onDateChange&&r.onDateChange(l)},e}return(0,h.default)(t,e),(0,c.default)(t,[{key:"componentWillReceiveProps",value:function(e){"date"in e&&this.setState({date:e.date||e.defaultDate})}},{key:"getDefaultMinDate",value:function(){return this.defaultMinDate||(this.defaultMinDate=this.getGregorianCalendar([2e3,1,1,0,0,0])),this.defaultMinDate}},{key:"getDefaultMaxDate",value:function(){return this.defaultMaxDate||(this.defaultMaxDate=this.getGregorianCalendar([2030,1,1,23,59,59])),this.defaultMaxDate}},{key:"getDate",value:function(){return this.state.date||this.getDefaultMinDate()}},{key:"getValue",value:function(){return this.getDate()}},{key:"getMinYear",value:function(){return this.getMinDate().year()}},{key:"getMaxYear",value:function(){return this.getMaxDate().year()}},{key:"getMinMonth",value:function(){return this.getMinDate().month()}},{key:"getMaxMonth",value:function(){return this.getMaxDate().month()}},{key:"getMinDay",value:function(){return this.getMinDate().date()}},{key:"getMaxDay",value:function(){return this.getMaxDate().date()}},{key:"getMinHour",value:function(){return this.getMinDate().hour()}},{key:"getMaxHour",value:function(){return this.getMaxDate().hour()}},{key:"getMinMinute",value:function(){return this.getMinDate().minute()}},{key:"getMaxMinute",value:function(){return this.getMaxDate().minute()}},{key:"getMinDate",value:function(){return this.props.minDate||this.getDefaultMinDate()}},{key:"getMaxDate",value:function(){return this.props.maxDate||this.getDefaultMaxDate()}},{key:"getDateData",value:function(){for(var e=this.props,t=e.locale,a=e.formatMonth,n=e.formatDay,i=e.mode,l=this.getDate(),o=l.year(),u=l.month(),s=this.getMinYear(),f=this.getMaxYear(),c=this.getMinMonth(),d=this.getMaxMonth(),p=this.getMinDay(),m=this.getMaxDay(),h=[],y=s;f>=y;y++)h.push({value:y+"",label:y+t.year+""});var g={key:"year",props:{children:h}};if(i===V)return[g];var v=[],D=0,k=11;s===o&&(D=c),f===o&&(k=d);for(var M=D;k>=M;M++){v.push({value:M+"",label:a?a(M,l):M+1+t.month+""})}var x={key:"month",props:{children:v}};if(i===w)return[g,x];var b=[],P=1,_=r(l);s===o&&c===u&&(P=p),f===o&&d===u&&(_=m);for(var C=P;_>=C;C++){b.push({value:C+"",label:n?n(C,l):C+t.day+""})}return[g,x,{key:"day",props:{children:b}}]}},{key:"getTimeData",value:function(){var e=0,t=23,a=0,n=59,r=this.props,l=r.mode,o=r.locale,u=r.minuteStep,s=this.getDate(),f=this.getMinMinute(),c=this.getMaxMinute(),d=this.getMinHour(),p=this.getMaxHour(),m=s.hour();if(l===E){var h=s.year(),y=s.month(),g=s.date(),v=this.getMinYear(),D=this.getMaxYear(),k=this.getMinMonth(),M=this.getMaxMonth(),x=this.getMinDay(),b=this.getMaxDay();v===h&&k===y&&x===g&&(e=d,d===m&&(a=f)),D===h&&M===y&&b===g&&(t=p,p===m&&(n=c))}else e=d,d===m&&(a=f),t=p,p===m&&(n=c);for(var P=[],_=e;t>=_;_++)P.push({value:_+"",label:o.hour?_+o.hour+"":i(_)});for(var C=[],O=a;n>=O;O+=u)C.push({value:O+"",label:o.minute?O+o.minute+"":i(O)});return[{key:"hours",props:{children:P}},{key:"minutes",props:{children:C}}]}},{key:"getGregorianCalendar",value:function(e){return(0,b.default)(e)}},{key:"clipDate",value:function(e){var t=this.props.mode,a=this.getMinDate(),n=this.getMaxDate();if(t===E){if(e.isBefore(a))return a.clone();if(e.isAfter(n))return n.clone()}else if(t===O){if(e.isBefore(a,"day"))return a.clone();if(e.isAfter(n,"day"))return n.clone()}else{var r=n.hour(),i=n.minute(),l=a.hour(),o=a.minute(),u=e.hour(),s=e.minute();if(l>u||u===l&&o>s)return a.clone();if(u>r||u===r&&s>i)return n.clone()}return e}},{key:"getValueCols",value:function(){var e=this.props.mode,t=this.getDate(),a=[],n=[];return e===V?{cols:this.getDateData(),value:[t.year()+""]}:e===w?{cols:this.getDateData(),value:[t.year()+"",t.month()+""]}:(e!==E&&e!==O||(a=this.getDateData(),n=[t.year()+"",t.month()+"",t.date()+""]),e!==E&&"time"!==e||(a=a.concat(this.getTimeData()),n=n.concat([t.hour()+"",t.minute()+""])),{value:n,cols:a})}},{key:"render",value:function(){var e=this.getValueCols(),t=e.value,a=e.cols,n=this.props,r=n.mode,i=n.prefixCls,l=n.pickerPrefixCls,u=n.rootNativeProps,s=n.className,f=n.disabled,c=n.style,d=(0,o.default)({flexDirection:"row",alignItems:"center"},c);return g.default.createElement(D.default,{style:d,rootNativeProps:u,className:s,prefixCls:i,selectedValue:t,onValueChange:this.onValueChange},a.map(function(e){return g.default.createElement(M.default,{style:{flex:1},key:e.key,disabled:f,prefixCls:l,itemStyle:"undefined"==typeof window&&"datetime"===r?C:void 0},e.props.children.map(function(e){return g.default.createElement(M.default.Item,{key:e.value,value:e.value},e.label)}))}))}}]),t}(g.default.Component);I.defaultProps={prefixCls:"rmc-date-picker",pickerPrefixCls:"rmc-picker",locale:_.default,mode:O,minuteStep:1,onDateChange:function(){}},t.default=I,e.exports=t.default},738:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=a(1),i=n(r),l=a(3),o=n(l),u=a(4),s=n(u),f=a(6),c=n(f),d=a(5),p=n(d),m=a(0),h=n(m),y=a(271),g=n(y),v=function(e){function t(){(0,o.default)(this,t);var e=(0,c.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.onOk=function(t){var a=e.props,n=a.onChange,r=a.onOk;n&&n(t),r&&r(t)},e}return(0,p.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){return h.default.createElement(g.default,(0,i.default)({picker:this.props.datePicker,value:this.props.date},this.props,{onOk:this.onOk}))}}]),t}(h.default.Component);v.defaultProps={pickerValueProp:"date",pickerValueChangeProp:"onDateChange"},t.default=v,e.exports=t.default},739:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={year:"",month:"",day:"",hour:"",minute:""},e.exports=t.default},740:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={year:"年",month:"月",day:"日",hour:"时",minute:"分"},e.exports=t.default}});