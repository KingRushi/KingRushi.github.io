(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{204:function(e,t,a){e.exports=a(232)},209:function(e,t,a){},232:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),i=a.n(r),l=a(33),c=a(34),s=a(29),d=a(36),u=a(35),p=(a(209),{background:"#E63946",borderRadius:10,fontSize:15,color:"white",fontFamily:"Playfair Display",width:150,height:50,marginTop:50}),m=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("button",{style:p,onClick:this.props.onClick},"Search")}}]),a}(o.a.Component),h={display:"inline",padding:47,fontSize:"18px",marginRight:60},g=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.props.onChange(t)}},{key:"render",value:function(){return o.a.createElement("div",{style:{border:"0px solid red",paddingTop:"30px"}},o.a.createElement("h3",{style:h},"I am looking for..."),o.a.createElement("select",{id:"occupation",className:"select-cssO",onChange:this.handleChange,required:!0},o.a.createElement("option",{selected:!0,disabled:!0,hidden:!0,value:""},"select occupation"),o.a.createElement("option",{value:"Software Engineer"},"Software Engineers"),o.a.createElement("option",{value:"Designer"},"Designers"),o.a.createElement("option",{value:"Marketer"},"Marketers")))}}]),a}(o.a.Component),f={display:"inline",padding:47,fontSize:"18px",marginRight:30},b=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.props.onChange(t)}},{key:"render",value:function(){return o.a.createElement("div",{style:{border:"0px solid red"}},o.a.createElement("h3",{style:f},"Years of experience..."),o.a.createElement("select",{id:"experience",className:"select-cssY",onChange:this.handleChange,required:!0},o.a.createElement("option",{selected:!0,disabled:!0,hidden:!0,value:""},"select years"),o.a.createElement("option",{value:"1 - 3 years"},"1 - 3 years"),o.a.createElement("option",{value:"4 - 7 years"},"4 - 7 years"),o.a.createElement("option",{value:"8+ years"},"8 + years")))}}]),a}(o.a.Component),y={display:"inline",padding:47,fontSize:"18px",marginRight:116},E=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleChange",value:function(e){var t=e.target.value;this.props.onChange(t)}},{key:"render",value:function(){return o.a.createElement("div",{style:{border:"0px solid red"}},o.a.createElement("h3",{style:y},"Location..."),o.a.createElement("select",{id:"location",className:"select-css",onChange:this.handleChange,required:!0},o.a.createElement("option",{selected:!0,disabled:!0,hidden:!0,value:""},"select location"),o.a.createElement("option",{value:"SF Bay Area"},"SF Bay Area"),o.a.createElement("option",{value:"NYC"},"NYC"),o.a.createElement("option",{value:"LA"},"LA")))}}]),a}(o.a.Component),v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{style:{marginTop:"-10px"}},o.a.createElement("p",{style:{marginBottom:-5}},"Connect with top talent."),o.a.createElement("img",{alt:"Airbnb",src:"https://www.denverslocksmiths.com/wp-content/uploads/2018/04/airbnblogo.png",width:"100px",position:"absolute",style:{border:"0px solid  red",marginBottom:"40px",paddingRight:"40px"}}),o.a.createElement("img",{alt:"Lyft",src:"https://cdn.freebiesupply.com/images/large/2x/lyft-logo-png-transparent.png",width:"50px",style:{border:"0px solid  blue",marginBottom:"45px",paddingRight:"40px"}}),o.a.createElement("img",{alt:"Uber",src:"https://www.freepnglogos.com/uploads/black-uber-logo-png-6.png",width:"80px",position:"absolute",style:{border:"0px solid  red",marginBottom:"57px",paddingRight:"45px"}}),o.a.createElement("img",{alt:"Tesla",src:"https://www.freepnglogos.com/uploads/tesla-logo-png-27.png",width:"40px",style:{border:"0px solid  blue",marginBottom:"55px",marginTop:"10px"}}))}}]),a}(o.a.Component),x=a(138),k=a.n(x),w=a(199),C=a.n(w),j=a(84),O=a(180),M=a(130),S=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).getMuiTheme=function(){return Object(j.a)({overrides:{MUIDataTableBodyCell:{root:{backgroundColor:"#FFD2D2",fontFamily:"Muli",fontSize:15,fontWeight:"bold"},header:{fontFamily:"Muli",backgroundColor:"red"}},MuiTableCell:{root:{},head:{backgroundColor:"#FFD2D2",fontFamily:"Muli",fontSize:14,fontWeight:"bold",color:"white"}},MUIDataTableHeadCell:{fixedHeaderCommon:{backgroundColor:"#1d3557"}}}})},n.state={data:[]},n.updateData=n.updateData.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){k.a.parse("https://docs.google.com/spreadsheets/d/1LLR8xxxO7LUFMvEzuAz_hA-t25MT7LmF_zpgvjJ-Yjs/gviz/tq?tqx=out:csv&&range=a:h",{header:!1,download:!0,complete:this.updateData})}},{key:"componentDidMount",value:function(){window.RW.render()}},{key:"updateData",value:function(e){var t=e.data;this.setState({data:t})}},{key:"render",value:function(){var e=this.props.name,t=this.props.years,a=this.props.loc,n=(this.state.data[0],this.state.data.splice(1)),r=(n.map(function(e){return e.push(o.a.createElement(M.b,{to:"/".concat(e[0],"/").concat(e[1])},o.a.createElement("button",{class:"glow-on-hover"},"View ".concat(e[1],"'s Profile"))))}),n.map(function(e){return e.splice(0,1)}));console.log(r);var i=[{name:"Name",options:{filter:!1}},{name:"Occupation",options:{filterList:[e]}},{name:"Experience",options:{filter:!0,filterList:[t],sort:!0}},{name:"Location",options:{filter:!0,filterList:[a]}},{name:"Relocate",options:{filter:!1,sort:!1}},{name:"LinkedIn",options:{filter:!1,sort:!1,customBodyRender:function(e,t,a){return o.a.createElement("a",{href:e,target:"blank"},e)}}},{name:"Last Company",options:{filter:!1,sort:!1}},{name:"Share",options:{filter:!1,sort:!1}}];return o.a.createElement("div",null,o.a.createElement("h2",null,"Your results for [",e,"s with ",t," experience out of"," ",a,"]"),o.a.createElement(O.a,{theme:this.getMuiTheme()},o.a.createElement(C.a,{title:"Talent List",columns:i,data:n,options:{responsive:"scrollFullHeight",download:!1,print:!1,filter:!0,search:!1,selectableRows:"none",rowsPerPage:15}})),o.a.createElement("br",null),o.a.createElement("div",{class:"rw-ui-container"}))}}]),a}(o.a.Component),L=a(176),F=a(154),T=a(192),N=a(191),R=a(195),A=a(179),z=Object(A.a)({root:{verticalAlign:"right",margin:"auto"},MuiTypography:{fontFamily:"Muli"}});function B(){var e=o.a.useState({checkedA:!1,checkedB:!0}),t=Object(F.a)(e,2),a=t[0],n=t[1];z();return o.a.createElement("div",{className:"MuiTypography-body1"},o.a.createElement(T.a,{row:!0},o.a.createElement(N.a,{control:o.a.createElement(R.a,{checked:a.checkedA,onChange:function(e){n(Object(L.a)(Object(L.a)({},a),{},{[e.target.name]:e.target.checked}))},name:"checkedA",style:{color:"#e63946"}}),className:"MuiTypography-body1",label:"Looking to get hired instead?",style:{margin:"auto"}}),o.a.createElement("br",null),function(){if(a.checkedA)return o.a.createElement("iframe",{title:"form",src:"https://docs.google.com/forms/d/e/1FAIpQLSewZ4VfFXDy2KTWOM5QdK48PS8d1J9IZpa_JPoau5YIsaH-vQ/viewform?embedded=true",width:"640",height:"750",frameborder:"0",marginheight:"0",marginwidth:"0",style:{margin:"auto"}},"Loading\u2026")}()))}var D=a(19),I=a(186),P=a(187),Y=a(189),_=a(188),q=a(162),U=a(201),W=a.n(U),J=function e(t){var a,r=Object(n.useState)(null),i=Object(F.a)(r,2),l=i[0],c=i[1];if(Object(n.useEffect)(function(){k.a.parse("https://docs.google.com/spreadsheets/d/1LLR8xxxO7LUFMvEzuAz_hA-t25MT7LmF_zpgvjJ-Yjs/gviz/tq?tqx=out:csv&&range=a:i",{header:!1,download:!0,complete:function(e){console.log(e);var a=t.match.params.id;e.data.forEach(function(e){e[0]===a&&c(e)})}})},[]),null==l)return null;return o.a.createElement(O.a,{theme:Object(j.a)({typography:{useNextVariants:!0},overrides:e.getTheme(Object(j.a)())})},o.a.createElement(P.a,{className:"MuiPostCard--02"},o.a.createElement(Y.a,{className:"MuiCardMedia-root",image:(a=l[2],"Software Engineer"===a?"https://inteng-storage.s3.amazonaws.com/img/iea/nR6bkXZxwo/sizes/software-engineering-skills_md.jpg":"Marketer"===a?"https://storage.needpix.com/rsynced_images/digital-marketing-1527799_1280.png":"Designer"===a?"https://www.designer-daily.com/wp-content/uploads/2019/02/graphic-designer.jpg":void 0)}),o.a.createElement(_.a,{className:"MuiCardContent-root"},o.a.createElement(q.a,{className:"MuiTypography--date",variant:"overline",style:{fontFamily:"Muli",color:"#457b9d"}},"Vetted ".concat(l[2])),o.a.createElement(q.a,{className:"MuiTypography--heading",variant:"h6",gutterBottom:!0},"".concat(l[1])),o.a.createElement(q.a,{className:"MuiTypography--subheading"},"Experience: ",l[3],o.a.createElement("br",null),"Location: ",l[4],o.a.createElement("br",null),"Email: ",l[8]),o.a.createElement("a",{href:l[6],target:"blank",style:{textDecoration:"none"}},o.a.createElement(I.a,{className:"MuiButton--readMore"},"LinkedIn")),o.a.createElement(I.a,{className:"MuiButton--readMore",id:"url",onClick:function(){W()(window.location.href)}},"Copy URL"))))};J.getTheme=function(e){return{MuiCard:{root:{"&.MuiPostCard--02":{borderRadius:2*e.spacing.unit,transition:"0.3s",boxShadow:"0px 14px 80px rgba(34, 35, 58, 0.2)",width:"95%",position:"relative",maxWidth:1e3,marginLeft:"auto",margin:"auto",overflow:"initial",background:"white",display:"flex",alignItems:"center",padding:"".concat(2*e.spacing.unit,"px 0"),"&:hover":{transform:"translateY(3px)",boxShadow:"0 4px 20px 0 rgba(0,0,0,0.12)"},"& .MuiCardMedia-root":{flexShrink:0,fontFamily:"Muli",width:"28%",paddingTop:"28%",transform:"translateX(-15%)",boxShadow:"4px 4px 20px 1px rgba(252, 56, 56, 0.2)",borderRadius:2*e.spacing.unit,backgroundImage:"linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",backgroundColor:e.palette.common.white,overflow:"hidden","&:after":{content:'" "',position:"absolute",top:0,left:0,width:"100%",height:"100%",backgroundImage:"linear-gradient(147deg, #e63946 0%, #a8dadc 74%)",borderRadius:2*e.spacing.unit,opacity:.5}},"& .MuiCardContent-root":{textAlign:"left",paddingLeft:0,padding:2*e.spacing.unit},"& .MuiTypography--heading":{fontWeight:"bold",fontFamily:"Muli"},"& .MuiTypography--subheading":{marginBottom:2*e.spacing.unit,fontFamily:"Muli"},"& .MuiButton--readMore":{backgroundImage:"linear-gradient(147deg, #e63946 0%, #1d3557 64%)",boxShadow:"0px 4px 32px rgba(252, 56, 56, 0.4)",borderRadius:100,paddingLeft:24,paddingRight:24,color:"#ffffff",marginRight:10,fontFamily:"Muli"}}}}}},J.metadata={name:"Post Card II",description:"Personal Post",credit:"https://codemyui.com/gradient-card-ui-image-info-slider/"};var H={fontFamily:"Muli",fontSize:40,paddingTop:40,paddingBottom:45},V={fontFamily:"Playfair Display",textAlign:"left",fontSize:15,fontStyle:"italic",marginTop:-50,marginBottom:100},Q=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={clicked:!1,name:"?",exp:"?",loc:"?"},n.handleClick=n.handleClick.bind(Object(s.a)(n)),n.changeName=n.changeName.bind(Object(s.a)(n)),n.changeExperience=n.changeExperience.bind(Object(s.a)(n)),n.changeLocation=n.changeLocation.bind(Object(s.a)(n)),n}return Object(c.a)(a,[{key:"handleClick",value:function(){this.setState({clicked:!0})}},{key:"changeName",value:function(e){this.setState({name:e})}},{key:"changeExperience",value:function(e){this.setState({exp:e})}},{key:"changeLocation",value:function(e){this.setState({loc:e})}},{key:"checkSelects",value:function(){return"?"===this.state.name||"?"===this.state.exp||"?"===this.state.loc}},{key:"render",value:function(){return o.a.createElement(M.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(D.c,null,o.a.createElement(D.a,{exact:!0,path:"/"},o.a.createElement("h1",{style:H},"Find your next hire within seconds!"),o.a.createElement("h2",{style:V},o.a.createElement(B,null)),o.a.createElement(v,null),o.a.createElement(g,{onChange:this.changeName}),o.a.createElement("br",null),o.a.createElement(b,{onChange:this.changeExperience}),o.a.createElement("br",null),o.a.createElement(E,{onChange:this.changeLocation}),this.checkSelects()?null:o.a.createElement(M.b,{to:"/results"},o.a.createElement(m,{onClick:this.handleClick}))),o.a.createElement(D.a,{path:"/results"},this.state.clicked?o.a.createElement(S,{name:this.state.name,years:this.state.exp,loc:this.state.loc}):null),o.a.createElement(D.a,{path:"/:id/:name",component:J})),o.a.createElement("br",null)))}}]),a}(o.a.Component),X=document.getElementById("root");i.a.render(o.a.createElement(Q,null),X)}},[[204,1,2]]]);
//# sourceMappingURL=main.2fa36c06.chunk.js.map