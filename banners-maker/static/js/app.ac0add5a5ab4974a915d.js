webpackJsonp([0],{"4buA":function(t,e,a){"use strict";(function(t){var s=a("sTcZ"),i=a.n(s);e.a={name:"Banner1",data:function(){return{titulo:"Cualquier título",resumen:"TEXTO INFORMATIVO TEXTO INFORMATIVO.TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO",linea1:"linea n",linea2:"linea n",linea3:"linea n",linea4:"linea n",linea5:"linea n",fecha:"FECHA:25-05-2018",nombre:"BY: NOMBRE DE PRUEBA"}},methods:{capture:function(t){(t=document.getElementById("banner")).className="banner",i.a.toJpeg(t,{quality:.95}).then(function(t){var e=document.createElement("a");e.download="banner.jpeg",e.href=t,e.click()}).then(function(){t.className="banner editable"})},readURL:function(e){if(e.target.files&&e.target.files[0]){var a=new FileReader;a.onload=function(e){t(".imagen").css("background-image","url("+e.target.result+")"),document.getElementById("muestra").setAttribute("src",e.target.result)},a.readAsDataURL(e.target.files[0])}},volver:function(){this.$router.push("/")}},mounted:function(){document.getElementById("muestra").setAttribute("src","static/gente.jpg")}}}).call(e,a("7t+N"))},A5Y9:function(t,e){},"C+X5":function(t,e,a){"use strict";(function(t){var s=a("sTcZ"),i=a.n(s);e.a={name:"Banner3",data:function(){return{titulo:"Cualquier título",resumen:"TEXTO INFORMATIVO TEXTO INFORMATIVO.TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO TEXTO INFORMATIVO",correoText:"INFO@LOBSTERBLUM.IO",linea1:"linea n",linea2:"linea n",linea3:"linea n",linea4:"linea n",linea5:"linea n",fecha:"FECHA:25-05-2018",nombre:"BY: NOMBRE DE PRUEBA"}},methods:{capture:function(t){(t=document.getElementById("banner")).className="banner",i.a.toJpeg(t,{quality:.95}).then(function(t){var e=document.createElement("a");e.download="banner.jpeg",e.href=t,e.click()}).then(function(){t.className="banner editable"})},readURL:function(e){if(e.target.files&&e.target.files[0]){var a=new FileReader;a.onload=function(e){t(".portada").css("background-image","url("+e.target.result+")"),document.getElementById("muestra").setAttribute("src",e.target.result)},a.readAsDataURL(e.target.files[0])}},volver:function(){this.$router.push("/")}},mounted:function(){document.getElementById("muestra").setAttribute("src","static/gente.jpg")}}}).call(e,a("7t+N"))},KAui:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[this._m(0),this._v(" "),e("div",{staticClass:"logo"}),this._v(" "),e("router-view")],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"franjaColor"},[e("div",{staticClass:"bloqueColor color1"}),this._v(" "),e("div",{staticClass:"bloqueColor color2"}),this._v(" "),e("div",{staticClass:"bloqueColor color3"}),this._v(" "),e("div",{staticClass:"bloqueColor color4"}),this._v(" "),e("div",{staticClass:"bloqueColor color5"})])}]};var n=a("VU/8")({name:"App"},i,!1,function(t){a("KAui")},null,null).exports,l=a("/ocq"),r=a("4buA"),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},[a("div",{staticClass:"leftContent"},[t._m(0),t._v(" "),a("div",{staticClass:"cajaBanner"},[a("div",{staticClass:"banner editable",attrs:{id:"banner"}},[a("div",{staticClass:"imagen"}),t._v(" "),a("div",{staticClass:"contenido"},[t._m(1),t._v(" "),a("h1",{staticClass:"titulo"},[t._v(t._s(t.titulo))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea1))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea2))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea3))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea4))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea5))])]),t._v(" "),a("div",{staticClass:"membrete"},[a("p",{staticClass:"fecha"},[t._v(t._s(t.fecha))]),t._v(" "),a("p",{staticClass:"nombre"},[t._v(t._s(t.nombre))])])])])]),t._v(" "),a("div",{staticClass:"rightContent"},[t._m(2),t._v(" "),a("div",{staticClass:"sidebar"},[a("h1",{staticClass:"tituloEdicion",staticStyle:{color:"#42020c"}},[t._v("Editar contenido")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.titulo,expression:"titulo"}],staticClass:"textInputs",attrs:{type:"text",id:"titulo"},domProps:{value:t.titulo},on:{input:function(e){e.target.composing||(t.titulo=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea1,expression:"linea1"}],staticClass:"textInputs",attrs:{type:"text",id:"linea1"},domProps:{value:t.linea1},on:{input:function(e){e.target.composing||(t.linea1=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea2,expression:"linea2"}],staticClass:"textInputs",attrs:{type:"text",id:"linea2"},domProps:{value:t.linea2},on:{input:function(e){e.target.composing||(t.linea2=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea3,expression:"linea3"}],staticClass:"textInputs",attrs:{type:"text",id:"linea3"},domProps:{value:t.linea3},on:{input:function(e){e.target.composing||(t.linea3=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea4,expression:"linea4"}],staticClass:"textInputs",attrs:{type:"text",id:"linea4"},domProps:{value:t.linea4},on:{input:function(e){e.target.composing||(t.linea4=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea5,expression:"linea5"}],staticClass:"textInputs",attrs:{type:"text",id:"linea5"},domProps:{value:t.linea5},on:{input:function(e){e.target.composing||(t.linea5=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fecha,expression:"fecha"}],staticClass:"textInputs",attrs:{type:"textarea",id:"fecha"},domProps:{value:t.fecha},on:{input:function(e){e.target.composing||(t.fecha=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"textInputs",attrs:{type:"text",id:"nombre"},domProps:{value:t.nombre},on:{input:function(e){e.target.composing||(t.nombre=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("div",{staticClass:"file"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",name:"resume"},on:{change:t.readURL}}),t._v(" "),t._m(3)])]),t._v(" "),a("img",{attrs:{id:"muestra",src:"",alt:""}}),t._v(" "),a("div",{staticClass:"botonera"},[a("button",{attrs:{id:"calcelar"},on:{click:t.volver}},[t._v("Cancelar")]),t._v(" "),a("button",{attrs:{id:"capture"},on:{click:t.capture}},[t._v("Listo")]),t._v(" "),a("button",{attrs:{id:"termine"},on:{click:t.volver}},[t._v("Terminé")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{staticClass:"logo_header",attrs:{src:"static/logo04.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{staticClass:"logotipo",attrs:{src:"static/logo04.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"franjaColor"},[e("div",{staticClass:"bloqueColor color1"}),this._v(" "),e("div",{staticClass:"bloqueColor color2"}),this._v(" "),e("div",{staticClass:"bloqueColor color3"}),this._v(" "),e("div",{staticClass:"bloqueColor color4"}),this._v(" "),e("div",{staticClass:"bloqueColor color5"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"fa fa-pencil"})]),this._v(" "),e("span",{staticClass:"file-label"})])}]};var c=function(t){a("mLmJ")},u=a("VU/8")(r.a,o,!1,c,"data-v-898448a4",null).exports,v=a("lZtc"),m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},[a("div",{staticClass:"leftContent"},[t._m(0),t._v(" "),a("div",{staticClass:"cajaBanner"},[a("div",{staticClass:"banner editable",attrs:{id:"banner"}},[a("div",{staticClass:"contenido"},[a("h1",{staticClass:"titulo"},[t._v(t._s(t.titulo))]),t._v(" "),a("h1",{staticClass:"subtitulo"},[t._v(t._s(t.subtitulo))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea1))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea2))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea3))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea4))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea5))])]),t._v(" "),t._m(1),t._v(" "),a("div",{staticClass:"correo"},[a("p",{staticClass:"correotext"},[t._v(t._s(t.correoText))])])])])]),t._v(" "),a("div",{staticClass:"rightContent"},[t._m(2),t._v(" "),a("div",{staticClass:"sidebar"},[a("h1",{staticClass:"tituloEdicion",staticStyle:{color:"#42020c"}},[t._v("Editar contenido")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.titulo,expression:"titulo"}],staticClass:"textInputs",attrs:{type:"text",id:"titulo"},domProps:{value:t.titulo},on:{input:function(e){e.target.composing||(t.titulo=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.subtitulo,expression:"subtitulo"}],staticClass:"textInputs",attrs:{type:"text",id:"subtitulo"},domProps:{value:t.subtitulo},on:{input:function(e){e.target.composing||(t.subtitulo=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea1,expression:"linea1"}],staticClass:"textInputs",attrs:{type:"text",id:"linea1"},domProps:{value:t.linea1},on:{input:function(e){e.target.composing||(t.linea1=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea2,expression:"linea2"}],staticClass:"textInputs",attrs:{type:"text",id:"linea2"},domProps:{value:t.linea2},on:{input:function(e){e.target.composing||(t.linea2=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea3,expression:"linea3"}],staticClass:"textInputs",attrs:{type:"text",id:"linea3"},domProps:{value:t.linea3},on:{input:function(e){e.target.composing||(t.linea3=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea4,expression:"linea4"}],staticClass:"textInputs",attrs:{type:"text",id:"linea4"},domProps:{value:t.linea4},on:{input:function(e){e.target.composing||(t.linea4=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea5,expression:"linea5"}],staticClass:"textInputs",attrs:{type:"text",id:"linea5"},domProps:{value:t.linea5},on:{input:function(e){e.target.composing||(t.linea5=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.correoText,expression:"correoText"}],staticClass:"textInputs",attrs:{type:"text",id:"correotext"},domProps:{value:t.correoText},on:{input:function(e){e.target.composing||(t.correoText=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("div",{staticClass:"file"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",name:"resume"},on:{change:t.readURL}}),t._v(" "),t._m(3)])]),t._v(" "),a("img",{attrs:{id:"muestra",src:"",alt:""}}),t._v(" "),a("div",{staticClass:"botonera"},[a("button",{attrs:{id:"calcelar"},on:{click:t.volver}},[t._v("Cancelar")]),t._v(" "),a("button",{attrs:{id:"capture"},on:{click:t.capture}},[t._v("Listo")]),t._v(" "),a("button",{attrs:{id:"termine"},on:{click:t.volver}},[t._v("Terminé")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{staticClass:"logo_header",attrs:{src:"static/logo04.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"imagen"},[e("div",{staticClass:"logo"},[e("img",{staticClass:"logotipo",attrs:{src:"static/logo04.png",alt:""}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"franjaColor"},[e("div",{staticClass:"bloqueColor color1"}),this._v(" "),e("div",{staticClass:"bloqueColor color2"}),this._v(" "),e("div",{staticClass:"bloqueColor color3"}),this._v(" "),e("div",{staticClass:"bloqueColor color4"}),this._v(" "),e("div",{staticClass:"bloqueColor color5"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"fa fa-pencil"})]),this._v(" "),e("span",{staticClass:"file-label"})])}]};var d=function(t){a("OHUB")},p=(a("VU/8")(v.a,m,!1,d,"data-v-30185601",null).exports,a("C+X5")),_={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"all"},[a("div",{staticClass:"leftContent"},[t._m(0),t._v(" "),a("div",{staticClass:"cajaBanner"},[a("div",{staticClass:"banner editable",attrs:{id:"banner"}},[a("div",{staticClass:"portada"},[a("div",{staticClass:"contenido"},[t._m(1),t._v(" "),a("h1",{staticClass:"titulo"},[t._v(t._s(t.titulo))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea1))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea2))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea3))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea4))]),t._v(" "),a("p",{staticClass:"resumen"},[t._v(t._s(t.linea5))])])]),t._v(" "),a("div",{staticClass:"correo"},[a("p",{staticClass:"correotext"},[t._v(t._s(t.correoText))])]),t._v(" "),a("div",{staticClass:"membrete"},[a("p",{staticClass:"fecha"},[t._v(t._s(t.fecha))]),t._v(" "),a("p",{staticClass:"nombre"},[t._v(t._s(t.nombre))])])])])]),t._v(" "),a("div",{staticClass:"rightContent"},[t._m(2),t._v(" "),a("div",{staticClass:"sidebar"},[a("h1",{staticClass:"tituloEdicion",staticStyle:{color:"#42020c"}},[t._v("Editar contenido")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.titulo,expression:"titulo"}],staticClass:"textInputs",attrs:{type:"text",id:"titulo"},domProps:{value:t.titulo},on:{input:function(e){e.target.composing||(t.titulo=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea1,expression:"linea1"}],staticClass:"textInputs",attrs:{type:"text",id:"linea1"},domProps:{value:t.linea1},on:{input:function(e){e.target.composing||(t.linea1=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea2,expression:"linea2"}],staticClass:"textInputs",attrs:{type:"text",id:"linea2"},domProps:{value:t.linea2},on:{input:function(e){e.target.composing||(t.linea2=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea3,expression:"linea3"}],staticClass:"textInputs",attrs:{type:"text",id:"linea3"},domProps:{value:t.linea3},on:{input:function(e){e.target.composing||(t.linea3=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea4,expression:"linea4"}],staticClass:"textInputs",attrs:{type:"text",id:"linea4"},domProps:{value:t.linea4},on:{input:function(e){e.target.composing||(t.linea4=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.linea5,expression:"linea5"}],staticClass:"textInputs",attrs:{type:"text",id:"linea5"},domProps:{value:t.linea5},on:{input:function(e){e.target.composing||(t.linea5=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.correoText,expression:"correoText"}],staticClass:"textInputs",attrs:{type:"text",id:"correoText"},domProps:{value:t.correoText},on:{input:function(e){e.target.composing||(t.correoText=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.fecha,expression:"fecha"}],staticClass:"textInputs",attrs:{type:"textarea",id:"fecha"},domProps:{value:t.fecha},on:{input:function(e){e.target.composing||(t.fecha=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"textInputs",attrs:{type:"text",id:"nombre"},domProps:{value:t.nombre},on:{input:function(e){e.target.composing||(t.nombre=e.target.value)}}}),a("br"),a("br"),t._v(" "),a("div",{staticClass:"file"},[a("label",{staticClass:"file-label"},[a("input",{staticClass:"file-input",attrs:{type:"file",name:"resume"},on:{change:t.readURL}}),t._v(" "),t._m(3)])]),t._v(" "),a("img",{attrs:{id:"muestra",src:"",alt:""}}),t._v(" "),a("div",{staticClass:"botonera"},[a("button",{attrs:{id:"calcelar"},on:{click:t.volver}},[t._v("Cancelar")]),t._v(" "),a("button",{attrs:{id:"capture"},on:{click:t.capture}},[t._v("Listo")]),t._v(" "),a("button",{attrs:{id:"termine"},on:{click:t.volver}},[t._v("Terminé")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{staticClass:"logo_header",attrs:{src:"static/logo04.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("img",{staticClass:"logotipo",attrs:{src:"static/logo04.png",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"franjaColor"},[e("div",{staticClass:"bloqueColor color1"}),this._v(" "),e("div",{staticClass:"bloqueColor color2"}),this._v(" "),e("div",{staticClass:"bloqueColor color3"}),this._v(" "),e("div",{staticClass:"bloqueColor color4"}),this._v(" "),e("div",{staticClass:"bloqueColor color5"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"file-cta"},[e("span",{staticClass:"file-icon"},[e("i",{staticClass:"fa fa-pencil"})]),this._v(" "),e("span",{staticClass:"file-label"})])}]};var C=function(t){a("ZJ/y")},f=(a("VU/8")(p.a,_,!1,C,"data-v-05bbf919",null).exports,{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"all"},[this._m(0),this._v(" "),e("router-link",{attrs:{to:"/banner-1"}},[e("img",{attrs:{src:"static/banners-1.jpg",alt:""}})]),this._v(" "),e("router-link",{attrs:{to:"/banner-2"}},[e("img",{attrs:{src:"static/banners-2.jpg",alt:""}})]),this._v(" "),e("router-link",{attrs:{to:"/banner-3"}},[e("img",{attrs:{src:"static/banners-3.jpg",alt:""}})]),this._v(" "),e("router-link",{attrs:{to:"/banner-4"}},[e("img",{attrs:{src:"static/banners-4.jpg",alt:""}})]),this._v(" "),e("router-link",{attrs:{to:"/banner-5"}},[e("img",{attrs:{src:"static/banners-5.jpg",alt:""}})])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("img",{staticClass:"logo_header",attrs:{src:"static/logo04.png",alt:""}})])}]});var g=a("VU/8")({name:"Home",data:function(){return{}},methods:{}},f,!1,function(t){a("A5Y9")},"data-v-6f32af52",null).exports;s.a.use(l.a);var b=new l.a({routes:[{path:"/",name:"Home",component:g},{path:"/banner-1",name:"Banner1",component:u}]}),h=a("NYxO");s.a.use(h.a);var x=new h.a.Store({});s.a.config.productionTip=!1,new s.a({el:"#app",router:b,store:x,components:{App:n},template:"<App/>"})},OHUB:function(t,e){},"ZJ/y":function(t,e){},lZtc:function(t,e,a){"use strict";(function(t){var s=a("sTcZ"),i=a.n(s);e.a={name:"Banner2",data:function(){return{titulo:"Título",subtitulo:"Subtítulo",linea1:"linea n",linea2:"linea n",linea3:"linea n",linea4:"linea n",linea5:"linea n",correoText:"INFO@LOBSTERBLUM.IO"}},methods:{capture:function(t){(t=document.getElementById("banner")).className="banner",i.a.toJpeg(t,{quality:.95}).then(function(t){var e=document.createElement("a");e.download="banner.jpeg",e.href=t,e.click()}).then(function(){t.className="banner editable"})},readURL:function(e){if(e.target.files&&e.target.files[0]){var a=new FileReader;a.onload=function(e){t(".imagen").css("background-image","url("+e.target.result+")"),document.getElementById("muestra").setAttribute("src",e.target.result)},a.readAsDataURL(e.target.files[0])}},volver:function(){this.$router.push("/")}},mounted:function(){document.getElementById("muestra").setAttribute("src","static/gente.jpg")}}}).call(e,a("7t+N"))},mLmJ:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ac0add5a5ab4974a915d.js.map