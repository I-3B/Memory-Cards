(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],[,,,,,,,,,,function(t,e,c){},function(t,e,c){},function(t,e,c){},,,function(t,e,c){},function(t,e,c){},function(t,e,c){"use strict";c.r(e);var n=c(0),r=c.n(n),s=c(4),a=c.n(s),i=(c(10),c(2)),o=(c(11),c(12),c(1)),u=function(t){var e=Object(n.useState)(!1),c=Object(i.a)(e,2),r=c[0],s=c[1];return Object(o.jsx)("div",{id:"card",onClick:function(){t.isCardClickedAlready(r),s(!0)},children:Object(o.jsx)("img",{src:"Animals/"+t.image+".svg",alt:"animal",draggable:!1})})},j=c(5),b=c.n(j),f=function(t){var e=Object(n.useState)(0),c=Object(i.a)(e,2),r=c[0],s=c[1],a=Object(n.useState)(0),j=Object(i.a)(a,2),f=j[0],d=j[1],O=Object(n.useState)(4),l=Object(i.a)(O,2),h=l[0],S=l[1],m=Object(n.useState)([]),v=Object(i.a)(m,2),g=v[0],x=v[1],p=function(t){t?(s(0),d(0),S(4),x(C(4))):(s((function(t){return t+1})),d((function(t){return t+1})))},C=function(t){for(var e=[],c=[],n=0;n<t;n++){for(var r=Math.floor(48*Math.random())+1;e.includes(r);)r=Math.floor(48*Math.random())+1;e.push(r),c.push(Object(o.jsx)(u,{image:r,isCardClickedAlready:p},b()()))}return c};return Object(n.useEffect)((function(){x(C(h))}),[]),Object(n.useEffect)((function(){!function(t){for(var e=t.length-1;e>0;e--){var c=Math.floor(Math.random()*(e+1)),n=[t[c],t[e]];t[e]=n[0],t[c]=n[1]}}(g),t.score(f),r===h&&(s(0),S(Math.floor(1.5*h)),x(C(h)))})),Object(n.useEffect)((function(){h>48&&S(48),x(C(h))}),[h]),Object(o.jsx)("div",{id:"play-board",children:g})},d=(c(15),function(t){var e=Object(n.useState)(""),c=Object(i.a)(e,2),r=c[0],s=c[1],a=Object(n.useState)(""),u=Object(i.a)(a,2),j=u[0],b=u[1];return Object(n.useEffect)((function(){s("text-animation"),setTimeout((function(){s("")}),100)}),[t.score]),Object(n.useEffect)((function(){b("text-animation"),setTimeout((function(){b("")}),100)}),[t.bestScore]),Object(o.jsxs)("div",{id:"scores",children:[Object(o.jsxs)("div",{id:"best-score",children:["HS:"," ",Object(o.jsxs)("span",{className:j,children:[" ",t.bestScore]})]}),Object(o.jsxs)("div",{id:"current-score",children:["Score:",Object(o.jsxs)("span",{className:r,children:[" ",t.score]})]})]})}),O=(c(16),JSON.parse(localStorage.getItem("best-score")));null===O&&(O=0);var l=function(){var t=Object(n.useState)(0),e=Object(i.a)(t,2),c=e[0],r=e[1];return Object(o.jsxs)("div",{id:"app",children:[Object(o.jsx)(d,{score:c,bestScore:O}),Object(o.jsx)(f,{score:function(t){t>O&&(O=t,localStorage.setItem("best-score",JSON.stringify(O))),r(t)}})]})},h=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,18)).then((function(e){var c=e.getCLS,n=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;c(t),n(t),r(t),s(t),a(t)}))};a.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),h()}],[[17,1,2]]]);
//# sourceMappingURL=main.5426cc23.chunk.js.map