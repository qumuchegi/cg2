(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{106:function(e,t,a){e.exports=a(242)},198:function(e,t,a){},200:function(e,t,a){},225:function(e,t,a){},231:function(e,t,a){},239:function(e,t,a){},242:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(25),c=a.n(r),l=a(15),o=a(16),i=a(18),u=a(17),m=a(19),p=a(248),d=a(247),h=(a(78),a(50)),y=a.n(h),g=(a(68),a(27)),v=a.n(g),E=(a(70),a(11)),f=a.n(E),b=a(8),k=a.n(b),w=(a(71),a(12)),x=a.n(w),j=a(20),N=a(75),S=a.n(N),C=a(101),O=a.n(C),I="http://localhost:3001",z={get:function(){var e=Object(j.a)(k.a.mark(function e(){var t,a,n,s=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:"/",a=s.length>1&&void 0!==s[1]?s[1]:{},(n=O.a.stringify(a))&&(n="?"+n),e.t0=this,e.next=7,S.a.get(I+t+n);case 7:return e.t1=e.sent,e.abrupt("return",e.t0.apiResponse.call(e.t0,e.t1));case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),post:function(){var e=Object(j.a)(k.a.mark(function e(){var t,a,n=arguments;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:"/",a=n.length>1&&void 0!==n[1]?n[1]:{},e.t0=this,e.next=5,S.a.post(I+t,a);case 5:return e.t1=e.sent,e.abrupt("return",e.t0.apiResponse.call(e.t0,e.t1));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),apiResponse:function(e){var t=e.status,a=e.data;return console.log("status",t,"data",a),a}},D=(a(198),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={name:"",password:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"toregister",value:function(){this.props.history.push("/register")}},{key:"login",value:function(){var e=Object(j.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.state.name||!this.state.password){e.next=8;break}return e.next=3,z.post("/login",{name:this.state.name,password:this.state.password});case 3:t=e.sent,console.log("login",t.data),0===t.code?this.props.history.push("/homepage/".concat(this.state.name,"?").concat(this.state.password)):1===t.code?x.a.fail(t.data):2===t.code&&x.a.fail(t.data),e.next=9;break;case 8:x.a.fail("\u8bf7\u586b\u5199\u5b8c\u6574\uff01");case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("h1",null,"SEU\u8df3\u86a4APP"),s.a.createElement("h3",null,"\u767b\u5f55"),s.a.createElement("div",{id:"input"},s.a.createElement(f.a,{onChange:function(t){return e.setState({name:t})}},s.a.createElement("span",{className:"key2"},"\u7528\u6237\u540d")),s.a.createElement(f.a,{type:"password",onChange:function(t){return e.setState({password:t})}},s.a.createElement("span",{className:"key2"},"\u5bc6\u7801"))),s.a.createElement("div",{id:"buttonDiv"},s.a.createElement(v.a,{type:"primary",onClick:function(){e.login()},size:"small",className:"button"},"\u767b\u5f55"),s.a.createElement(y.a,{size:"lg"}),s.a.createElement(v.a,{type:"ghost",onClick:function(){return e.toregister()},size:"small",className:"button"},"\u6ce8\u518c")))}}]),t}(n.Component)),P=(a(69),a(49)),T=a.n(P),M=(a(200),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={name:"",password:"",phone:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){console.log(z)}},{key:"back",value:function(){this.props.history.goBack()}},{key:"checkPassword",value:function(e){this.state.password!==e&&x.a.fail("\u524d\u540e\u5bc6\u7801\u4e0d\u4e00\u81f4\uff01\uff01")}},{key:"register",value:function(){var e=Object(j.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(this.state),e.next=3,z.post("/register",this.state);case 3:t=e.sent,console.log("res",t),0===t.code?x.a.success("\u6ce8\u518c\u6210\u529f\uff0c\u8bf7\u8fd4\u56de\u767b\u5f55\uff01"):x.a.fail("\u6ce8\u518c\u5931\u8d25\uff0c\u8bf7\u7a0d\u540e\u518d\u8bd5");case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(T.a,{type:"left",size:"lg",onClick:function(){return e.back()}},"\u8fd4\u56de"),s.a.createElement("h3",null,"\u586b\u5199\u6ce8\u518c\u4fe1\u606f"),s.a.createElement(f.a,{onChange:function(t){return e.setState({name:t})}},s.a.createElement("span",{className:"key3"},"\u7528\u6237\u540d")),s.a.createElement(f.a,{type:"password",onChange:function(t){return e.setState({password:t})}},s.a.createElement("span",{className:"key3"},"\u5bc6\u7801")),s.a.createElement(f.a,{onBlur:function(t){return e.checkPassword(t)}},s.a.createElement("span",{className:"key3"},"\u786e\u8ba4\u5bc6\u7801")),s.a.createElement(f.a,{onChange:function(t){return e.setState({phone:t})}},s.a.createElement("span",{className:"key3"},"\u624b\u673a")),s.a.createElement(y.a,null),s.a.createElement(v.a,{type:"primary",onClick:function(){return e.register()},id:"button"},"\u6ce8\u518c"))}}]),t}(n.Component)),B=(a(202),a(76)),A=a.n(B),G=(a(73),a(37)),R=a.n(G),K=(a(74),a(38)),U=a.n(K),X=(a(225),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={selectedDiv:"sell",sellgood:"",sellprice:"",selldiscription:"",buygood:"",buyprice:"",buydiscription:"",myuser:{}},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.myuser;console.log("pubmy",e),this.setState({myuser:e})}},{key:"onSGChange",value:function(e){var t=0===e.nativeEvent.selectedSegmentIndex?"sell":"buy";console.log("selectedIndex:".concat(e.nativeEvent.selectedSegmentIndex)),this.setState({selectedDiv:t})}},{key:"pubSell",value:function(){var e=Object(j.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.sellgood&&this.state.sellprice&&this.state.selldiscription)){e.next=9;break}return t={owner:{name:this.state.myuser.name,phone:this.state.myuser.phone},name:this.state.sellgood,price:this.state.sellprice,discription:this.state.selldiscription},console.log(t),e.next=5,z.post("/goodspub",t);case 5:0===e.sent.code?(x.a.success("\u53d1\u5e03\u6210\u529f"),window.setTimeout(window.location.reload(),1e3)):x.a.info("\u53d1\u5e03\u5931\u8d25"),e.next=10;break;case 9:x.a.info("\u8bf7\u586b\u5199\u5b8c\u6574\uff01");case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"pubBuy",value:function(){var e=Object(j.a)(k.a.mark(function e(){var t;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(this.state.buygood&&this.state.buyprice&&this.state.buydiscription)){e.next=9;break}return t={owner:{name:this.state.myuser.name,phone:this.state.myuser.phone},name:this.state.buygood,price:this.state.buyprice,discription:this.state.buydiscription},console.log(t),e.next=5,z.post("/needspub",t);case 5:0===e.sent.code?(x.a.info("\u53d1\u5e03\u6210\u529f\uff01"),window.setTimeout(window.location.reload(),1e3)):x.a.info("\u53d1\u5e03\u5931\u8d25"),e.next=10;break;case 9:x.a.info("\u8bf7\u586b\u5199\u5b8c\u6574\uff01");case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(R.a,{size:"lg"},s.a.createElement(U.a,{id:"SegmentedControl",values:["\u6211\u8981\u5356","\u6211\u8981\u4e70"],style:{color:"rgba(213,171,112)"},tintColor:"rgba(213,171,112)",onChange:function(t){return e.onSGChange(t)}})),"sell"===this.state.selectedDiv?s.a.createElement("div",{className:"inputbody"},s.a.createElement("h3",null,"\u586b\u5199\u51fa\u552e\u4fe1\u606f"),s.a.createElement(f.a,{type:"text",onChange:function(t){return e.setState({sellgood:t})}},s.a.createElement("span",{className:"key1"},"\u51fa\u552e\u5b9d\u8d1d\u540d")),s.a.createElement(f.a,{type:"number",onChange:function(t){return e.setState({sellprice:t})}},s.a.createElement("span",{className:"key1"},"\u51fa\u624b\u4ef7\u683c")),s.a.createElement(f.a,{type:"text",onChange:function(t){return e.setState({selldiscription:t})}},s.a.createElement("span",{className:"key1"},"\u5b9d\u8d1d\u63cf\u8ff0")),s.a.createElement(v.a,{type:"ghost",size:"small",onClick:function(){return e.pubSell()},className:"button"},"\u53d1\u5e03")):s.a.createElement("div",{className:"inputbody"},s.a.createElement("h3",null,"\u586b\u5199\u9700\u6c42\u4fe1\u606f"),s.a.createElement(f.a,{type:"text",onChange:function(t){return e.setState({buygood:t})}},s.a.createElement("span",{className:"key1"},"\u9700\u8981\u5b9d\u8d1d\u540d")),s.a.createElement(f.a,{type:"number",onChange:function(t){return e.setState({buyprice:t})}},s.a.createElement("span",{className:"key1"},"\u80fd\u63a5\u53d7\u4ef7\u683c")),s.a.createElement(f.a,{type:"text",onChange:function(t){return e.setState({buydiscription:t})}},s.a.createElement("span",{className:"key1"},"\u5b9d\u8d1d\u8981\u6c42\u63cf\u8ff0")),s.a.createElement(v.a,{type:"ghost",size:"small",onClick:function(){return e.pubBuy()},className:"button"},"\u53d1\u5e03")))}}]),t}(n.Component)),L=(a(227),a(42)),V=a.n(L),q=(a(90),a(23)),H=a.n(q),J=(a(231),function(e){var t=e.goods,a=e.needs,n=e.selectedDiv,r=e.onSGChange;return s.a.createElement("div",null,s.a.createElement(R.a,{size:"lg"},s.a.createElement(U.a,{id:"SegmentedControl",values:["\u627e\u627e\u5b9d\u8d1d","\u770b\u770b\u9700\u6c42"],style:{color:"rgba(213,171,112)"},tintColor:"rgba(213,171,112)",onChange:function(e){return r(e)}})),"sell"===n?s.a.createElement(F,{goods:t}):s.a.createElement(Q,{needs:a}),s.a.createElement("div",{style:{fontSize:"220%",textAlign:"center",paddingTop:"4%",color:"rgb(211, 162, 102)"}},"\u5c0f\u8df3\u86a4"))}),F=function(e){var t=e.goods;return t?t.map(function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(V.a,{defaultActiveKey:"0",className:"my-accordion"},s.a.createElement(V.a.Panel,{header:s.a.createElement("span",{className:"title"},e.name),key:t},s.a.createElement(H.a,{className:"my-list"},s.a.createElement(H.a.Item,null,s.a.createElement("span",{className:"key"},"\u53d1\u5e03\u4eba"),s.a.createElement("span",{className:"value"},e.owner.name)),s.a.createElement(H.a.Item,null,s.a.createElement("span",{className:"key"},"\u624b\u673a"),s.a.createElement("span",{className:"value"},e.owner.phone)),s.a.createElement(H.a.Item,null,s.a.createElement("span",{className:"key"},"\u4ef7\u683c"),s.a.createElement("span",{className:"value"},e.price)),s.a.createElement(H.a.Item,null,s.a.createElement("span",{className:"key"},"\u63cf\u8ff0"),s.a.createElement("span",{className:"value"},e.discription))))))}):null},Q=function(e){var t=e.needs;return t?t.map(function(e,t){return s.a.createElement("div",{key:t},s.a.createElement(V.a,{defaultActiveKey:"0",className:"my-accordion"},s.a.createElement(V.a.Panel,{header:s.a.createElement("span",{className:"title"},e.name),key:t},s.a.createElement(H.a,{className:"my-list"},s.a.createElement(H.a.Item,null,s.a.createElement("span",{className:"key"},"\u53d1\u5e03\u4eba"),s.a.createElement("span",{className:"value"},e.owner.name)),s.a.createElement(H.a.Item,null,s.a.createElement("span",{className:"key"},"\u624b\u673a"),s.a.createElement("span",{className:"value"},e.owner.phone)),s.a.createElement(H.a.Item,null,s.a.createElement("span",{className:"key"},"\u4ef7\u683c"),s.a.createElement("span",{className:"value"},e.price)),s.a.createElement(H.a.Item,null,s.a.createElement("span",{className:"key"},"\u63cf\u8ff0"),s.a.createElement("span",{className:"value"},e.discription))))))}):null},W=(a(233),a(53)),Y=a.n(W),Z=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={name:"",phone:"",myowngood:"",myownneed:"",selectedDiv:"sell"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,a=e.phone,n=e.mygood,s=e.myneed;console.log(t,a,n,s);var r=n.filter(function(e){return e.owner.name===t}),c=s.filter(function(e){return e.owner.name===t});this.setState({name:t,phone:a,myowngood:r,myownneed:c})}},{key:"onSGChange",value:function(e){var t=0===e.nativeEvent.selectedSegmentIndex?"sell":"buy";console.log("selectedIndex:".concat(e.nativeEvent.selectedSegmentIndex)),this.setState({selectedDiv:t})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement(Y.a,{full:!0},s.a.createElement(Y.a.Header,{title:this.state.name,thumb:"https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg",extra:s.a.createElement("span",null,"\u6ce8\u9500")}),s.a.createElement(Y.a.Body,null,s.a.createElement("p",null,s.a.createElement("span",{className:"key"},"\u624b\u673a"),s.a.createElement("span",{className:"value"},this.state.phone)))),s.a.createElement(R.a,null,s.a.createElement(U.a,{id:"SegmentedControl",values:["\u6211\u5356\u6211\u4e0d\u9700\u8981","\u6211\u4e70\u6211\u9700\u8981"],style:{color:"rgba(213,171,112)"},tintColor:"rgba(213,171,112)",onChange:function(t){return e.onSGChange(t)}})),s.a.createElement("div",null,"sell"===this.state.selectedDiv?s.a.createElement(F,{goods:this.state.myowngood,id:"addbottom"}):s.a.createElement(Q,{needs:this.state.myownneed,id:"addbottom"})),s.a.createElement("div",{style:{fontSize:"220%",textAlign:"center",paddingTop:"4%",color:"rgb(211, 162, 102)"}},"\u5c0f\u8df3\u86a4"))}}]),t}(n.Component),$=(a(239),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={name:"",phone:"",password:"",selectedTab:"sy",mygood:[],myneed:[],selectedDiv:"sell"},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.user,t=this.props.location.search.substr(1);this.setState({name:e,password:t}),console.log(e,t),this.getMyhomepage(e,t)}},{key:"getMyhomepage",value:function(){var e=Object(j.a)(k.a.mark(function e(t,a){var n,s;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.post("/login",{name:t,password:a});case 2:n=e.sent,console.log("res",n.data),s=n.data,this.setState({mygood:s.good,myneed:s.need,myuser:s.user,phone:s.user.phone}),console.log("mygood",this.state.mygood);case 7:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}()},{key:"onSGChange",value:function(e){var t=0===e.nativeEvent.selectedSegmentIndex?"sell":"buy";console.log("selectedIndex:".concat(e.nativeEvent.selectedSegmentIndex)),this.setState({selectedDiv:t})}},{key:"render",value:function(){var e=this,t=A.a.Item;return s.a.createElement("div",null,s.a.createElement("h1",null,"SEU\u8df3\u86a4APP"),"sy"===this.state.selectedTab?s.a.createElement(J,{goods:this.state.mygood,needs:this.state.myneed,selectedDiv:this.state.selectedDiv,onSGChange:function(t){return e.onSGChange(t)}}):"fb"===this.state.selectedTab?s.a.createElement(X,this.state):s.a.createElement(Z,{name:this.state.name,phone:this.state.phone,mygood:this.state.mygood,myneed:this.state.myneed}),s.a.createElement("div",{id:"tabbar",style:{position:"fixed",bottom:0,width:"100%",zIndex:"23"}},s.a.createElement(A.a,{tabBarPosition:"bottom",barTintColor:"rgba(213,171,112)"},s.a.createElement(t,{title:"\u9996\u9875",key:"\u9996\u9875",icon:s.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat"}}),selectedIcon:s.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat"}}),selected:"sy"===this.state.selectedTab,badge:1,onPress:function(){console.log("selectedIndex",e.state.selectedDiv),e.setState({selectedTab:"sy"})},"data-seed":"logId"}),s.a.createElement(t,{title:"\u53d1\u5e03",key:"\u53d1\u5e03",icon:{uri:"https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg"},selectedIcon:{uri:"https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg"},selected:"fb"===this.state.selectedTab,badge:1,onPress:function(){console.log("selectedIndex",e.state.selectedDiv),e.setState({selectedTab:"fb",selectedDiv:"sell"})},"data-seed":"logId"}),s.a.createElement(t,{title:"\u6211\u7684",key:"\u6211\u7684",icon:s.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat"}}),selectedIcon:s.a.createElement("div",{style:{width:"22px",height:"22px",background:"url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat"}}),selected:"wd"===this.state.selectedTab,badge:1,onPress:function(){console.log("selectedIndex",e.state.selectedDiv),e.setState({selectedTab:"wd",selectedDiv:"sell"})},"data-seed":"logId"}))))}}]),t}(n.Component)),_=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(p.a,null,s.a.createElement(d.a,{exact:!0,path:"/",component:D}),s.a.createElement(d.a,{path:"/register",component:M}),s.a.createElement(d.a,{path:"/homepage/:user",component:$})))}}]),t}(n.Component),ee=a(246);c.a.render(s.a.createElement(ee.a,null,s.a.createElement(_,null)),document.getElementById("root"))}},[[106,2,1]]]);
//# sourceMappingURL=main.db902d11.chunk.js.map