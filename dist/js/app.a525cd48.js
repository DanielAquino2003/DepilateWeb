(function(){"use strict";var e={5276:function(e,t,r){var n=r(2856),o=function(){var e=this,t=e._self._c,r=e._self._setupProxy;return t("div",{staticClass:"app-container"},[e._m(0),t("div",{staticClass:"registration-container"},[r.registered?t("div",[t("h2",[e._v("BIENVENIDO A LA LISTENING PARTY")]),t("p",[e._v("¡"+e._s(r.name)+", estás registrado!")])]):t("div",[t("h2",[e._v("Registro para la Fiesta")]),t("form",{on:{submit:function(e){return e.preventDefault(),r.handleSubmit.apply(null,arguments)}}},[t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"email"}},[e._v("Email:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:r.email,expression:"email"}],attrs:{type:"email",id:"email",required:""},domProps:{value:r.email},on:{input:function(e){e.target.composing||(r.email=e.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{attrs:{for:"name"}},[e._v("Nombre:")]),t("input",{directives:[{name:"model",rawName:"v-model",value:r.name,expression:"name"}],attrs:{type:"text",id:"name",required:""},domProps:{value:r.name},on:{input:function(e){e.target.composing||(r.name=e.target.value)}}})]),t("button",{attrs:{type:"submit",disabled:r.isLoading}},[e._v(" "+e._s(r.isLoading?"Registrando...":"Registrarse")+" ")])]),r.error?t("p",{staticClass:"error-message"},[e._v(e._s(r.error))]):e._e()])])])},a=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("header",[t("h1",{staticClass:"main-title"},[e._v("LISTENING PARTY")])])}],i=r(417),u={__name:"App",setup(e){const t=(0,n.KR)(""),r=(0,n.KR)(""),o=(0,n.KR)(!1),a=(0,n.KR)(!1),u=(0,n.KR)(""),s=async()=>{if(!a.value){a.value=!0,u.value="";try{const e=await i.A.post("http://localhost:5000/api/register",{name:r.value,email:t.value},{headers:{"Content-Type":"application/json"}});console.log("Respuesta del servidor:",e.data),o.value=!0}catch(e){console.error("Error al registrar:",e),u.value="Hubo un error al registrarse. Por favor, intenta de nuevo."}finally{a.value=!1}}};return{__sfc:!0,email:t,name:r,registered:o,isLoading:a,error:u,handleSubmit:s}}},s=u,l=r(1656),c=(0,l.A)(s,o,a,!1,null,null,null),f=c.exports;n.Ay.config.productionTip=!1,new n.Ay({render:e=>e(f)}).$mount("#app")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,o,a){if(!n){var i=1/0;for(c=0;c<e.length;c++){n=e[c][0],o=e[c][1],a=e[c][2];for(var u=!0,s=0;s<n.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[s])}))?n.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[n,o,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={524:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,a,i=n[0],u=n[1],s=n[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(s)var c=s(r)}for(t&&t(n);l<i.length;l++)a=i[l],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(c)},n=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[504],(function(){return r(5276)}));n=r.O(n)})();
//# sourceMappingURL=app.a525cd48.js.map