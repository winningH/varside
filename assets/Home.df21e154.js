import{u as k,f as y,_,B as c,m as C}from"./index.c00f5e3c.js";import{d as w,c as x,a as b,_ as V,r as j,u as I,o as S,b as B,e as a,t as m,w as E,F as H,p as G,f as z,g as r}from"./index.6d450283.js";function g(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function N(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var D=N(function e(t){P(this,e),this.error=new Error("unreachable case: ".concat(JSON.stringify(t)))}),O=function(){return{prefixCls:String,size:{type:String}}};const p=w({name:"AButtonGroup",props:O(),setup:function(t,n){var o=n.slots,d=k("btn-group",t),l=d.prefixCls,f=d.direction,v=x(function(){var s,h=t.size,u="";switch(h){case"large":u="lg";break;case"small":u="sm";break;case"middle":case void 0:break;default:console.warn(new D(h).error)}return s={},_(s,"".concat(l.value),!0),_(s,"".concat(l.value,"-").concat(u),u),_(s,"".concat(l.value,"-rtl"),f.value==="rtl"),s});return function(){var s;return b("div",{class:v.value},[y((s=o.default)===null||s===void 0?void 0:s.call(o))])}}});c.Group=p;c.install=function(e){return e.component(c.name,c),e.component(p.name,p),e};const q="/varside/vite.svg",F="/varside/assets/vue.5532db34.svg";const i=e=>(G("data-v-2dc54a20"),e=e(),z(),e),R=i(()=>a("div",null,[a("a",{href:"https://vitejs.dev",target:"_blank"},[a("img",{src:q,class:"logo",alt:"Vite logo"})]),a("a",{href:"https://vuejs.org/",target:"_blank"},[a("img",{src:F,class:"logo vue",alt:"Vue logo"})])],-1)),T={class:"card"},U=i(()=>a("p",null,[r(" Edit "),a("code",null,"components/HelloWorld.vue"),r(" to test HMR ")],-1)),A=i(()=>a("p",null,[r(" Check out "),a("a",{href:"https://vuejs.org/guide/quick-start.html#local",target:"_blank"},"create-vue"),r(", the official Vue + Vite starter ")],-1)),J=i(()=>a("p",null,[r(" Install "),a("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar"),r(" in your IDE for a better DX ")],-1)),M=i(()=>a("p",{class:"read-the-docs"},"Click on the Vite and Vue logos to learn more",-1)),W=r("buttton"),X={__name:"Home",props:{msg:{type:String,default:"hello vite"}},setup(e){const t=j(0),n=I();function o(){n.push({path:"/loading",query:{name:"arrow"}}),C.info("to loading")}return(d,l)=>{const f=c;return S(),B(H,null,[R,a("h1",null,m(e.msg),1),a("div",T,[a("button",{type:"button",onClick:l[0]||(l[0]=v=>t.value++)},"count is "+m(t.value),1),U]),A,J,M,b(f,{type:"primary",onClick:o},{default:E(()=>[W]),_:1})],64)}}},L=V(X,[["__scopeId","data-v-2dc54a20"],["__file","/home/travis/build/winningH/varside/src/views/Home.vue"]]);export{L as default};