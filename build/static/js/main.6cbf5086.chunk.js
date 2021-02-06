(this["webpackJsonpwine-quality-predicter"]=this["webpackJsonpwine-quality-predicter"]||[]).push([[0],{25:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var a=c(1),i=c(0),s=c.n(i),n=c(5),j=c.n(n),d=(c(25),c(3)),l=c.p+"static/media/wineHeader.45178cae.jpg",b=c.p+"static/media/wine_white_9.e981e77b.jpg",r=c.p+"static/media/wine_white_6.0ee7f6db.jpg",O=c.p+"static/media/wine_white_3.229ea669.jpg",o=c.p+"static/media/wine_red_9.51c5691a.jpg",h=c.p+"static/media/wine_red_6.5f0c2ab4.jpg",m=c.p+"static/media/wine_red_3.229ea669.jpg",u=c(6),x=(c(29),c(19)),v=c.n(x);c(48);var p=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),c=t[0],s=t[1],n=Object(i.useState)(m),j=Object(d.a)(n,2),x=j[0],p=j[1],g=Object(i.useState)(1),f=Object(d.a)(g,2),N=f[0],S=f[1],w=Object(i.useState)(10.5),C=Object(d.a)(w,2),_=C[0],y=C[1],F=Object(i.useState)(.5),L=Object(d.a)(F,2),A=L[0],D=L[1],I=Object(i.useState)(3.2),k=Object(d.a)(I,2),q=k[0],B=k[1],P=Object(i.useState)(.99),T=Object(d.a)(P,2),H=T[0],J=T[1],z=Object(i.useState)(115),E=Object(d.a)(z,2),M=E[0],R=E[1],V=Object(i.useState)(30),G=Object(d.a)(V,2),K=G[0],Q=G[1],U=Object(i.useState)(.05),W=Object(d.a)(U,2),X=W[0],Y=W[1],Z=Object(i.useState)(5.5),$=Object(d.a)(Z,2),ee=$[0],te=$[1],ce=Object(i.useState)(.3),ae=Object(d.a)(ce,2),ie=ae[0],se=ae[1],ne=Object(i.useState)(.38),je=Object(d.a)(ne,2),de=je[0],le=je[1],be=Object(i.useState)(7.5),re=Object(d.a)(be,2),Oe=re[0],oe=re[1];return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)("div",{className:"header",children:Object(a.jsx)("img",{className:"headerImages",src:l,alt:"headerImage"})}),Object(a.jsx)("div",{className:"headerLine",children:Object(a.jsx)("h3",{children:"Customize your wine parameters and get real-time quality predictions!"})}),Object(a.jsxs)("div",{className:"allLabels",children:[Object(a.jsxs)("div",{className:"firstcol",children:[Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["white or red :",N]}),Object(a.jsx)(u.a,{min:0,max:1,step:1,value:N,onChange:function(e){S(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Fixed Acidity: ",Oe]}),Object(a.jsx)(u.a,{min:3.5,max:16.5,step:.1,value:Oe,onChange:function(e){oe(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Volatile Acidity: ",de]}),Object(a.jsx)(u.a,{min:.08,max:1.6,step:.01,value:de,onChange:function(e){le(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Citric Acid: ",ie]}),Object(a.jsx)(u.a,{min:0,max:1.6,step:.1,value:ie,onChange:function(e){se(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Residual Sugar: ",ee]}),Object(a.jsx)(u.a,{min:.5,max:66.5,step:.5,value:ee,onChange:function(e){te(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Chlorides: ",X]}),Object(a.jsx)(u.a,{min:.01,max:.62,step:.01,value:X,onChange:function(e){Y(e)}})]})]}),Object(a.jsx)("div",{className:"secondcol",children:c?Object(a.jsx)("div",{className:"Loader",children:"Loading..."}):Object(a.jsx)("img",{className:"winepic",src:x,alt:"pic of wine"})}),Object(a.jsxs)("div",{className:"thirdcol",children:[Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Free Sulfur Dioxide: ",K]}),Object(a.jsx)(u.a,{min:1,max:291,value:K,step:1,onChange:function(e){Q(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Total Sulfur Dioxide: ",M]}),Object(a.jsx)(u.a,{min:5,max:440,step:1,value:M,onChange:function(e){R(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Density: ",H]}),Object(a.jsx)(u.a,{min:.98,max:1.04,step:.01,value:H,onChange:function(e){J(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["pH: ",q]}),Object(a.jsx)(u.a,{min:2.7,max:4.1,step:.1,value:q,onChange:function(e){B(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Sulphates: ",A]}),Object(a.jsx)(u.a,{min:.2,max:2,step:.1,value:A,onChange:function(e){D(e)}})]}),Object(a.jsxs)("div",{className:"item",children:[Object(a.jsxs)("div",{children:["Alcohol: ",_]}),Object(a.jsx)(u.a,{min:8,max:15,step:.1,value:_,onChange:function(e){y(e)}})]})]})]}),Object(a.jsx)("div",{className:"sendButt",children:Object(a.jsx)("button",{onClick:function(){s(!0);var e={war:N,fixacid:Oe,volacid:de,citacid:ie,resisugar:ee,chlorides:X,freesdo:K,totalsdo:M,density:H,ph:q,sulphates:A,alcohol:_};v.a.post("/hello",e).then((function(e){s(!1),0===N&&(3===e.data&&p(O),6===e.data&&p(r),9===e.data&&p(b)),1===N&&(3===e.data&&p(m),6===e.data&&p(h),9===e.data&&p(o))})).catch((function(e){console.log(e),console.log("hh")}))},children:"Predict"})})]})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,51)).then((function(t){var c=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),a(e),i(e),s(e),n(e)}))};c(49);j.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(p,{})}),document.getElementById("root")),g()}},[[50,1,2]]]);
//# sourceMappingURL=main.6cbf5086.chunk.js.map