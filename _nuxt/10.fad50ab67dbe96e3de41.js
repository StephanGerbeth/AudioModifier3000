(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{286:function(t,e,l){"use strict";l(141);var n=l(138),o={props:{url:{type:[String,Object],default:"#"},title:{type:String,default:null},download:{type:String,default:null},layer:{type:String,default:null},target:{type:String,default:"_blank"}},computed:{isExternal:function(){return!!this.url.startsWith("blob")||"string"==typeof this.url&&(/^(http(s)?|ftp):\/\//.test(this.url)||this.url.startsWith("#"))}},methods:{onClick:function(){n.a.show(this.layer)}}},r=l(27),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return t.isExternal||t.layer?t.layer?l("button",{on:{click:t.onClick}},[t._t("default",[t._v(t._s(t.title))])],2):l("a",{attrs:{download:t.download,href:t.url,target:t.target||"_blank",rel:"noopener",title:t.title}},[t._t("default",[t._v(t._s(t.title))])],2):l("nuxt-link",{attrs:{to:t.url,title:t.title}},[t._t("default",[t._v(t._s(t.title))])],2)}),[],!1,null,null,null);e.a=component.exports},287:function(t,e,l){var content=l(355);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(48).default)("3e4d9f88",content,!0,{sourceMap:!1})},288:function(t,e,l){var content=l(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(48).default)("2b897b80",content,!0,{sourceMap:!1})},354:function(t,e,l){"use strict";l(287)},355:function(t,e,l){var n=l(47)((function(i){return i[1]}));n.push([t.i,".molecule-link-list{display:flex;padding:0;margin:0;list-style:none}@media (max-width:575px){.molecule-link-list{flex-wrap:wrap;justify-content:center;margin:-3.125vw 0}}@media (max-width:575px){.molecule-link-list li{margin:3.125vw 0}}.molecule-link-list li{flex:0 0 50%}@media (min-width:576px){.molecule-link-list li{flex:0 0 33.33333%}}.molecule-link-list li{text-align:center}.molecule-link-list a,.molecule-link-list button{padding:0;font-size:3.75vw;color:#230ce5;text-decoration:none;cursor:pointer;background:none;border:none;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:filter .2s linear}@media (min-width:576px){.molecule-link-list a,.molecule-link-list button{font-size:12px}}@media (min-width:768px){.molecule-link-list a,.molecule-link-list button{font-size:18px}}@media (hover:none){.molecule-link-list a:active,.molecule-link-list button:active{filter:blur(3px)}}@media (hover:hover) and (pointer:fine){.molecule-link-list a:hover,.molecule-link-list button:hover{filter:blur(3px)}}",""]),t.exports=n},356:function(t,e,l){"use strict";l(288)},357:function(t,e,l){var n=l(47)((function(i){return i[1]}));n.push([t.i,".page-footer{padding:0 0 10.66667%;margin:0}@media (min-width:576px){.page-footer{padding:20px 0}}@media (min-width:992px){.page-footer{padding-top:25px;padding-bottom:100px}}.page-footer{background:var(--color-light-grey)}.page-footer nav{flex-grow:0;flex-shrink:0;flex-basis:calc(83.25% - 2.5px);max-width:calc(83.25% - 2.5px);width:calc(83.25% - 2.5px);margin-left:calc(8.325% + 1.25px) !important}.page-footer nav:nth-child(1n){margin-right:15px;margin-left:0}.page-footer nav:last-child{margin-right:0}.page-footer nav:nth-child(12n){margin-right:0;margin-left:auto}@media (min-width:576px){.page-footer nav{flex-grow:0;flex-shrink:0;flex-basis:calc(49.95% - 7.5px);max-width:calc(49.95% - 7.5px);width:calc(49.95% - 7.5px);margin-left:calc(24.975% + 3.75px) !important}.page-footer nav:nth-child(1n){margin-right:15px;margin-left:0}.page-footer nav:last-child{margin-right:0}.page-footer nav:nth-child(12n){margin-right:0;margin-left:auto}}",""]),t.exports=n},462:function(t,e,l){"use strict";l.r(e);var n=l(136),o={components:{AtomLinkTo:l(286).a},props:{list:{type:Array,default:function(){return[]}}},methods:{getUrl:function(t){return"$i18n"in this?this.localePath(t.url):t.url}}},r=(l(354),l(27)),c=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Roboto",700,"normal",{selector:"a, button"}),expression:"$getFont('Roboto', 700, 'normal', {selector: 'a, button'})"}],staticClass:"molecule-link-list"},[t._t("default",t._l(t.list,(function(e){return l("li",{key:e.title},[l("atom-link-to",t._b({attrs:{url:t.getUrl(e)}},"atom-link-to",e,!1),[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})))],2)}),[],!1,null,null,null).exports,f={components:{LayoutLostContainer:n.a,LinkList:c},props:{navigation:{type:Array,default:function(){return[{layer:"disclaimer",title:"Disclaimer"},{layer:"imprint",title:"Imprint"}]}}}},d=(l(356),Object(r.a)(f,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("layout-lost-container",{staticClass:"page-footer",attrs:{tag:"footer"}},[l("nav",[l("link-list",{attrs:{list:t.navigation}})],1)])}),[],!1,null,null,null));e.default=d.exports}}]);