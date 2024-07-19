"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[577],{6309:function(t,e,r){r.d(e,{Z:function(){return W}});var i=function(){function t(t){var e=this;this._insertTag=function(t){var r;r=0===e.tags.length?e.insertionPoint?e.insertionPoint.nextSibling:e.prepend?e.container.firstChild:e.before:e.tags[e.tags.length-1].nextSibling,e.container.insertBefore(t,r),e.tags.push(t)},this.isSpeedy=void 0===t.speedy||t.speedy,this.tags=[],this.ctr=0,this.nonce=t.nonce,this.key=t.key,this.container=t.container,this.prepend=t.prepend,this.insertionPoint=t.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(t){t.forEach(this._insertTag)},e.insert=function(t){if(this.ctr%(this.isSpeedy?65e3:1)==0){var e;this._insertTag(((e=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&e.setAttribute("nonce",this.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e))}var r=this.tags[this.tags.length-1];if(this.isSpeedy){var i=function(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}(r);try{i.insertRule(t,i.cssRules.length)}catch(t){}}else r.appendChild(document.createTextNode(t));this.ctr++},e.flush=function(){this.tags.forEach(function(t){var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)}),this.tags=[],this.ctr=0},t}(),n=Math.abs,s=String.fromCharCode,o=Object.assign;function a(t,e,r){return t.replace(e,r)}function l(t,e){return t.indexOf(e)}function u(t,e){return 0|t.charCodeAt(e)}function c(t,e,r){return t.slice(e,r)}function h(t){return t.length}function d(t,e){return e.push(t),t}var p=1,f=1,m=0,g=0,y=0,v="";function x(t,e,r,i,n,s,o){return{value:t,root:e,parent:r,type:i,props:n,children:s,line:p,column:f,length:o,return:""}}function b(t,e){return o(x("",null,null,"",null,null,0),t,{length:-t.length},e)}function w(){return y=g<m?u(v,g++):0,f++,10===y&&(f=1,p++),y}function P(){return u(v,g)}function S(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function T(t){return p=f=1,m=h(v=t),g=0,[]}function A(t){var e,r;return(e=g-1,r=function t(e){for(;w();)switch(y){case e:return g;case 34:case 39:34!==e&&39!==e&&t(y);break;case 40:41===e&&t(e);break;case 92:w()}return g}(91===t?t+2:40===t?t+1:t),c(v,e,r)).trim()}var C="-ms-",E="-moz-",k="-webkit-",M="comm",F="rule",V="decl",j="@keyframes";function R(t,e){for(var r="",i=t.length,n=0;n<i;n++)r+=e(t[n],n,t,e)||"";return r}function D(t,e,r,i){switch(t.type){case"@layer":if(t.children.length)break;case"@import":case V:return t.return=t.return||t.value;case M:return"";case j:return t.return=t.value+"{"+R(t.children,i)+"}";case F:t.value=t.props.join(",")}return h(r=R(t.children,i))?t.return=t.value+"{"+r+"}":""}function O(t,e,r,i,s,o,l,u,h,d,p){for(var f=s-1,m=0===s?o:[""],g=m.length,y=0,v=0,b=0;y<i;++y)for(var w=0,P=c(t,f+1,f=n(v=l[y])),S=t;w<g;++w)(S=(v>0?m[w]+" "+P:a(P,/&\f/g,m[w])).trim())&&(h[b++]=S);return x(t,e,r,0===s?F:u,h,d,p)}function L(t,e,r,i){return x(t,e,r,V,c(t,0,i),c(t,i+1,-1),i)}var $=function(t,e,r){for(var i=0,n=0;i=n,n=P(),38===i&&12===n&&(e[r]=1),!S(n);)w();return c(v,t,g)},_=function(t,e){var r=-1,i=44;do switch(S(i)){case 0:38===i&&12===P()&&(e[r]=1),t[r]+=$(g-1,e,r);break;case 2:t[r]+=A(i);break;case 4:if(44===i){t[++r]=58===P()?"&\f":"",e[r]=t[r].length;break}default:t[r]+=s(i)}while(i=w());return t},I=function(t,e){var r;return r=_(T(t),e),v="",r},B=new WeakMap,z=function(t){if("rule"===t.type&&t.parent&&!(t.length<1)){for(var e=t.value,r=t.parent,i=t.column===r.column&&t.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==t.props.length||58===e.charCodeAt(0)||B.get(r))&&!i){B.set(t,!0);for(var n=[],s=I(e,n),o=r.props,a=0,l=0;a<s.length;a++)for(var u=0;u<o.length;u++,l++)t.props[l]=n[a]?s[a].replace(/&\f/g,o[u]):o[u]+" "+s[a]}}},N=function(t){if("decl"===t.type){var e=t.value;108===e.charCodeAt(0)&&98===e.charCodeAt(2)&&(t.return="",t.value="")}},U=[function(t,e,r,i){if(t.length>-1&&!t.return)switch(t.type){case V:t.return=function t(e,r){switch(45^u(e,0)?(((r<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3):0){case 5103:return k+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return k+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return k+e+E+e+C+e+e;case 6828:case 4268:return k+e+C+e+e;case 6165:return k+e+C+"flex-"+e+e;case 5187:return k+e+a(e,/(\w+).+(:[^]+)/,k+"box-$1$2"+C+"flex-$1$2")+e;case 5443:return k+e+C+"flex-item-"+a(e,/flex-|-self/,"")+e;case 4675:return k+e+C+"flex-line-pack"+a(e,/align-content|flex-|-self/,"")+e;case 5548:return k+e+C+a(e,"shrink","negative")+e;case 5292:return k+e+C+a(e,"basis","preferred-size")+e;case 6060:return k+"box-"+a(e,"-grow","")+k+e+C+a(e,"grow","positive")+e;case 4554:return k+a(e,/([^-])(transform)/g,"$1"+k+"$2")+e;case 6187:return a(a(a(e,/(zoom-|grab)/,k+"$1"),/(image-set)/,k+"$1"),e,"")+e;case 5495:case 3959:return a(e,/(image-set\([^]*)/,k+"$1$`$1");case 4968:return a(a(e,/(.+:)(flex-)?(.*)/,k+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+k+e+e;case 4095:case 3583:case 4068:case 2532:return a(e,/(.+)-inline(.+)/,k+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(h(e)-1-r>6)switch(u(e,r+1)){case 109:if(45!==u(e,r+4))break;case 102:return a(e,/(.+:)(.+)-([^]+)/,"$1"+k+"$2-$3$1"+E+(108==u(e,r+3)?"$3":"$2-$3"))+e;case 115:return~l(e,"stretch")?t(a(e,"stretch","fill-available"),r)+e:e}break;case 4949:if(115!==u(e,r+1))break;case 6444:switch(u(e,h(e)-3-(~l(e,"!important")&&10))){case 107:return a(e,":",":"+k)+e;case 101:return a(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+k+(45===u(e,14)?"inline-":"")+"box$3$1"+k+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch(u(e,r+11)){case 114:return k+e+C+a(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return k+e+C+a(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return k+e+C+a(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return k+e+C+e+e}return e}(t.value,t.length);break;case j:return R([b(t,{value:a(t.value,"@","@"+k)})],i);case F:if(t.length){var n,s;return n=t.props,s=function(e){var r;switch(r=e,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return R([b(t,{props:[a(e,/:(read-\w+)/,":"+E+"$1")]})],i);case"::placeholder":return R([b(t,{props:[a(e,/:(plac\w+)/,":"+k+"input-$1")]}),b(t,{props:[a(e,/:(plac\w+)/,":"+E+"$1")]}),b(t,{props:[a(e,/:(plac\w+)/,C+"input-$1")]})],i)}return""},n.map(s).join("")}}}],W=function(t){var e,r,n,o,m,b,C=t.key;if("css"===C){var E=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(E,function(t){-1!==t.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(t),t.setAttribute("data-s",""))})}var k=t.stylisPlugins||U,F={},V=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+C+' "]'),function(t){for(var e=t.getAttribute("data-emotion").split(" "),r=1;r<e.length;r++)F[e[r]]=!0;V.push(t)});var j=(r=(e=[z,N].concat(k,[D,(n=function(t){b.insert(t)},function(t){!t.root&&(t=t.return)&&n(t)})])).length,function(t,i,n,s){for(var o="",a=0;a<r;a++)o+=e[a](t,i,n,s)||"";return o}),$=function(t){var e,r;return R((r=function t(e,r,i,n,o,m,b,T,C){for(var E,k=0,F=0,V=b,j=0,R=0,D=0,$=1,_=1,I=1,B=0,z="",N=o,U=m,W=n,Y=z;_;)switch(D=B,B=w()){case 40:if(108!=D&&58==u(Y,V-1)){-1!=l(Y+=a(A(B),"&","&\f"),"&\f")&&(I=-1);break}case 34:case 39:case 91:Y+=A(B);break;case 9:case 10:case 13:case 32:Y+=function(t){for(;y=P();)if(y<33)w();else break;return S(t)>2||S(y)>3?"":" "}(D);break;case 92:Y+=function(t,e){for(var r;--e&&w()&&!(y<48)&&!(y>102)&&(!(y>57)||!(y<65))&&(!(y>70)||!(y<97)););return r=g+(e<6&&32==P()&&32==w()),c(v,t,r)}(g-1,7);continue;case 47:switch(P()){case 42:case 47:d(x(E=function(t,e){for(;w();)if(t+y===57)break;else if(t+y===84&&47===P())break;return"/*"+c(v,e,g-1)+"*"+s(47===t?t:w())}(w(),g),r,i,M,s(y),c(E,2,-2),0),C);break;default:Y+="/"}break;case 123*$:T[k++]=h(Y)*I;case 125*$:case 59:case 0:switch(B){case 0:case 125:_=0;case 59+F:-1==I&&(Y=a(Y,/\f/g,"")),R>0&&h(Y)-V&&d(R>32?L(Y+";",n,i,V-1):L(a(Y," ","")+";",n,i,V-2),C);break;case 59:Y+=";";default:if(d(W=O(Y,r,i,k,F,o,T,z,N=[],U=[],V),m),123===B){if(0===F)t(Y,r,W,W,N,m,V,T,U);else switch(99===j&&110===u(Y,3)?100:j){case 100:case 108:case 109:case 115:t(e,W,W,n&&d(O(e,W,W,0,0,o,T,z,o,N=[],V),U),o,U,V,T,n?N:U);break;default:t(Y,W,W,W,[""],U,0,T,U)}}}k=F=R=0,$=I=1,z=Y="",V=b;break;case 58:V=1+h(Y),R=D;default:if($<1){if(123==B)--$;else if(125==B&&0==$++&&125==(y=g>0?u(v,--g):0,f--,10===y&&(f=1,p--),y))continue}switch(Y+=s(B),B*$){case 38:I=F>0?1:(Y+="\f",-1);break;case 44:T[k++]=(h(Y)-1)*I,I=1;break;case 64:45===P()&&(Y+=A(w())),j=P(),F=V=h(z=Y+=function(t){for(;!S(P());)w();return c(v,t,g)}(g)),B++;break;case 45:45===D&&2==h(Y)&&($=0)}}return m}("",null,null,null,[""],e=T(e=t),0,[0],e),v="",r),j)};m=function(t,e,r,i){b=r,$(t?t+"{"+e.styles+"}":e.styles),i&&(_.inserted[e.name]=!0)};var _={key:C,sheet:new i({key:C,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:F,registered:{},insert:m};return _.sheet.hydrate(V),_}},7179:function(t,e,r){r.d(e,{E:function(){return m},T:function(){return h},c:function(){return p},h:function(){return l},w:function(){return c}});var i=r(2265),n=r(6309),s=r(9926),o=r(5006),a=r(1073),l={}.hasOwnProperty,u=i.createContext("undefined"!=typeof HTMLElement?(0,n.Z)({key:"css"}):null);u.Provider;var c=function(t){return(0,i.forwardRef)(function(e,r){return t(e,(0,i.useContext)(u),r)})},h=i.createContext({}),d="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",p=function(t,e){var r={};for(var i in e)l.call(e,i)&&(r[i]=e[i]);return r[d]=t,r},f=function(t){var e=t.cache,r=t.serialized,i=t.isStringTag;return(0,s.hC)(e,r,i),(0,a.L)(function(){return(0,s.My)(e,r,i)}),null},m=c(function(t,e,r){var n=t.css;"string"==typeof n&&void 0!==e.registered[n]&&(n=e.registered[n]);var a=t[d],u=[n],c="";"string"==typeof t.className?c=(0,s.fp)(e.registered,u,t.className):null!=t.className&&(c=t.className+" ");var p=(0,o.O)(u,void 0,i.useContext(h));c+=e.key+"-"+p.name;var m={};for(var g in t)l.call(t,g)&&"css"!==g&&g!==d&&(m[g]=t[g]);return m.className=c,r&&(m.ref=r),i.createElement(i.Fragment,null,i.createElement(f,{cache:e,serialized:p,isStringTag:"string"==typeof a}),i.createElement(a,m))})},3098:function(t,e,r){r.d(e,{F4:function(){return u},iv:function(){return l},ms:function(){return d}});var i=r(7179),n=r(2265),s=r(9926),o=r(1073),a=r(5006);function l(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return(0,a.O)(e)}r(6309),r(6451);var u=function(){var t=l.apply(void 0,arguments),e="animation-"+t.name;return{name:e,styles:"@keyframes "+e+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},c=function t(e){for(var r=e.length,i=0,n="";i<r;i++){var s=e[i];if(null!=s){var o=void 0;switch(typeof s){case"boolean":break;case"object":if(Array.isArray(s))o=t(s);else for(var a in o="",s)s[a]&&a&&(o&&(o+=" "),o+=a);break;default:o=s}o&&(n&&(n+=" "),n+=o)}}return n},h=function(t){var e=t.cache,r=t.serializedArr;return(0,o.L)(function(){for(var t=0;t<r.length;t++)(0,s.My)(e,r[t],!1)}),null},d=(0,i.w)(function(t,e){var r=[],o=function(){for(var t=arguments.length,i=Array(t),n=0;n<t;n++)i[n]=arguments[n];var o=(0,a.O)(i,e.registered);return r.push(o),(0,s.hC)(e,o,!1),e.key+"-"+o.name},l={css:o,cx:function(){for(var t,r,i,n,a=arguments.length,l=Array(a),u=0;u<a;u++)l[u]=arguments[u];return t=e.registered,r=c(l),i=[],n=(0,s.fp)(t,i,r),i.length<2?r:n+o(i)},theme:n.useContext(i.T)},u=t.children(l);return n.createElement(n.Fragment,null,n.createElement(h,{cache:e,serializedArr:r}),u)})},5006:function(t,e,r){r.d(e,{O:function(){return m}});var i,n,s,o={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},a=/[A-Z]|^ms/g,l=/_EMO_([^_]+?)_([^]*?)_EMO_/g,u=function(t){return 45===t.charCodeAt(1)},c=function(t){return null!=t&&"boolean"!=typeof t},h=(i=function(t){return u(t)?t:t.replace(a,"-$&").toLowerCase()},n=Object.create(null),function(t){return void 0===n[t]&&(n[t]=i(t)),n[t]}),d=function(t,e){switch(t){case"animation":case"animationName":if("string"==typeof e)return e.replace(l,function(t,e,r){return s={name:e,styles:r,next:s},e})}return 1===o[t]||u(t)||"number"!=typeof e||0===e?e:e+"px"};function p(t,e,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return s={name:r.name,styles:r.styles,next:s},r.name;if(void 0!==r.styles){var i=r.next;if(void 0!==i)for(;void 0!==i;)s={name:i.name,styles:i.styles,next:s},i=i.next;return r.styles+";"}return function(t,e,r){var i="";if(Array.isArray(r))for(var n=0;n<r.length;n++)i+=p(t,e,r[n])+";";else for(var s in r){var o=r[s];if("object"!=typeof o)null!=e&&void 0!==e[o]?i+=s+"{"+e[o]+"}":c(o)&&(i+=h(s)+":"+d(s,o)+";");else if(Array.isArray(o)&&"string"==typeof o[0]&&(null==e||void 0===e[o[0]]))for(var a=0;a<o.length;a++)c(o[a])&&(i+=h(s)+":"+d(s,o[a])+";");else{var l=p(t,e,o);switch(s){case"animation":case"animationName":i+=h(s)+":"+l+";";break;default:i+=s+"{"+l+"}"}}}return i}(t,e,r);case"function":if(void 0!==t){var n=s,o=r(t);return s=n,p(t,e,o)}}if(null==e)return r;var a=e[r];return void 0!==a?a:r}var f=/label:\s*([^\s;\n{]+)\s*(;|$)/g;function m(t,e,r){if(1===t.length&&"object"==typeof t[0]&&null!==t[0]&&void 0!==t[0].styles)return t[0];var i,n=!0,o="";s=void 0;var a=t[0];null==a||void 0===a.raw?(n=!1,o+=p(r,e,a)):o+=a[0];for(var l=1;l<t.length;l++)o+=p(r,e,t[l]),n&&(o+=a[l]);f.lastIndex=0;for(var u="";null!==(i=f.exec(o));)u+="-"+i[1];return{name:function(t){for(var e,r=0,i=0,n=t.length;n>=4;++i,n-=4)e=(65535&(e=255&t.charCodeAt(i)|(255&t.charCodeAt(++i))<<8|(255&t.charCodeAt(++i))<<16|(255&t.charCodeAt(++i))<<24))*1540483477+((e>>>16)*59797<<16),e^=e>>>24,r=(65535&e)*1540483477+((e>>>16)*59797<<16)^(65535&r)*1540483477+((r>>>16)*59797<<16);switch(n){case 3:r^=(255&t.charCodeAt(i+2))<<16;case 2:r^=(255&t.charCodeAt(i+1))<<8;case 1:r^=255&t.charCodeAt(i),r=(65535&r)*1540483477+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*1540483477+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(o)+u,styles:o,next:s}}},1073:function(t,e,r){r.d(e,{L:function(){return o}});var i,n=r(2265),s=!!(i||(i=r.t(n,2))).useInsertionEffect&&(i||(i=r.t(n,2))).useInsertionEffect,o=s||function(t){return t()};s||n.useLayoutEffect},9926:function(t,e,r){function i(t,e,r){var i="";return r.split(" ").forEach(function(r){void 0!==t[r]?e.push(t[r]+";"):i+=r+" "}),i}r.d(e,{My:function(){return s},fp:function(){return i},hC:function(){return n}});var n=function(t,e,r){var i=t.key+"-"+e.name;!1===r&&void 0===t.registered[i]&&(t.registered[i]=e.styles)},s=function(t,e,r){n(t,e,r);var i=t.key+"-"+e.name;if(void 0===t.inserted[e.name]){var s=e;do t.insert(e===s?"."+i:"",s,t.sheet,!0),s=s.next;while(void 0!==s)}}},6451:function(t,e,r){var i=r(2659),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},s={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},a={};function l(t){return i.isMemo(t)?o:a[t.$$typeof]||n}a[i.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a[i.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,h=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,f=Object.prototype;t.exports=function t(e,r,i){if("string"!=typeof r){if(f){var n=p(r);n&&n!==f&&t(e,n,i)}var o=c(r);h&&(o=o.concat(h(r)));for(var a=l(e),m=l(r),g=0;g<o.length;++g){var y=o[g];if(!s[y]&&!(i&&i[y])&&!(m&&m[y])&&!(a&&a[y])){var v=d(r,y);try{u(e,y,v)}catch(t){}}}}return e}},6648:function(t,e,r){r.d(e,{default:function(){return n.a}});var i=r(5601),n=r.n(i)},8173:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"Image",{enumerable:!0,get:function(){return x}});let i=r(9920),n=r(1452),s=r(7437),o=n._(r(2265)),a=i._(r(4887)),l=i._(r(8321)),u=r(497),c=r(7103),h=r(3938);r(2301);let d=r(291),p=i._(r(1241)),f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function m(t,e,r,i,n,s,o){let a=null==t?void 0:t.src;t&&t["data-loaded-src"]!==a&&(t["data-loaded-src"]=a,("decode"in t?t.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(t.parentElement&&t.isConnected){if("empty"!==e&&n(!0),null==r?void 0:r.current){let e=new Event("load");Object.defineProperty(e,"target",{writable:!1,value:t});let i=!1,n=!1;r.current({...e,nativeEvent:e,currentTarget:t,target:t,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,e.preventDefault()},stopPropagation:()=>{n=!0,e.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(t)}}))}function g(t){return o.use?{fetchPriority:t}:{fetchpriority:t}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,o.forwardRef)((t,e)=>{let{src:r,srcSet:i,sizes:n,height:a,width:l,decoding:u,className:c,style:h,fetchPriority:d,placeholder:p,loading:f,unoptimized:y,fill:v,onLoadRef:x,onLoadingCompleteRef:b,setBlurComplete:w,setShowAltText:P,sizesInput:S,onLoad:T,onError:A,...C}=t;return(0,s.jsx)("img",{...C,...g(d),loading:f,width:l,height:a,decoding:u,"data-nimg":v?"fill":"1",className:c,style:h,sizes:n,srcSet:i,src:r,ref:(0,o.useCallback)(t=>{e&&("function"==typeof e?e(t):"object"==typeof e&&(e.current=t)),t&&(A&&(t.src=t.src),t.complete&&m(t,p,x,b,w,y,S))},[r,p,x,b,w,A,y,S,e]),onLoad:t=>{m(t.currentTarget,p,x,b,w,y,S)},onError:t=>{P(!0),"empty"!==p&&w(!0),A&&A(t)}})});function v(t){let{isAppRouter:e,imgAttributes:r}=t,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...g(r.fetchPriority)};return e&&a.default.preload?(a.default.preload(r.src,i),null):(0,s.jsx)(l.default,{children:(0,s.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let x=(0,o.forwardRef)((t,e)=>{let r=(0,o.useContext)(d.RouterContext),i=(0,o.useContext)(h.ImageConfigContext),n=(0,o.useMemo)(()=>{let t=f||i||c.imageConfigDefault,e=[...t.deviceSizes,...t.imageSizes].sort((t,e)=>t-e),r=t.deviceSizes.sort((t,e)=>t-e);return{...t,allSizes:e,deviceSizes:r}},[i]),{onLoad:a,onLoadingComplete:l}=t,m=(0,o.useRef)(a);(0,o.useEffect)(()=>{m.current=a},[a]);let g=(0,o.useRef)(l);(0,o.useEffect)(()=>{g.current=l},[l]);let[x,b]=(0,o.useState)(!1),[w,P]=(0,o.useState)(!1),{props:S,meta:T}=(0,u.getImgProps)(t,{defaultLoader:p.default,imgConf:n,blurComplete:x,showAltText:w});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{...S,unoptimized:T.unoptimized,placeholder:T.placeholder,fill:T.fill,onLoadRef:m,onLoadingCompleteRef:g,setBlurComplete:b,setShowAltText:P,sizesInput:t.sizes,ref:e}),T.priority?(0,s.jsx)(v,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},2901:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"AmpStateContext",{enumerable:!0,get:function(){return i}});let i=r(9920)._(r(2265)).default.createContext({})},687:function(t,e){function r(t){let{ampFirst:e=!1,hybrid:r=!1,hasQuery:i=!1}=void 0===t?{}:t;return e||r&&i}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"isInAmpMode",{enumerable:!0,get:function(){return r}})},497:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImgProps",{enumerable:!0,get:function(){return a}}),r(2301);let i=r(1564),n=r(7103);function s(t){return void 0!==t.default}function o(t){return void 0===t?t:"number"==typeof t?Number.isFinite(t)?t:NaN:"string"==typeof t&&/^[0-9]+$/.test(t)?parseInt(t,10):NaN}function a(t,e){var r;let a,l,u,{src:c,sizes:h,unoptimized:d=!1,priority:p=!1,loading:f,className:m,quality:g,width:y,height:v,fill:x=!1,style:b,overrideSrc:w,onLoad:P,onLoadingComplete:S,placeholder:T="empty",blurDataURL:A,fetchPriority:C,layout:E,objectFit:k,objectPosition:M,lazyBoundary:F,lazyRoot:V,...j}=t,{imgConf:R,showAltText:D,blurComplete:O,defaultLoader:L}=e,$=R||n.imageConfigDefault;if("allSizes"in $)a=$;else{let t=[...$.deviceSizes,...$.imageSizes].sort((t,e)=>t-e),e=$.deviceSizes.sort((t,e)=>t-e);a={...$,allSizes:t,deviceSizes:e}}if(void 0===L)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let _=j.loader||L;delete j.loader,delete j.srcSet;let I="__next_img_default"in _;if(I){if("custom"===a.loader)throw Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let t=_;_=e=>{let{config:r,...i}=e;return t(i)}}if(E){"fill"===E&&(x=!0);let t={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[E];t&&(b={...b,...t});let e={responsive:"100vw",fill:"100vw"}[E];e&&!h&&(h=e)}let B="",z=o(y),N=o(v);if("object"==typeof(r=c)&&(s(r)||void 0!==r.src)){let t=s(c)?c.default:c;if(!t.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(t));if(!t.height||!t.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(t));if(l=t.blurWidth,u=t.blurHeight,A=A||t.blurDataURL,B=t.src,!x){if(z||N){if(z&&!N){let e=z/t.width;N=Math.round(t.height*e)}else if(!z&&N){let e=N/t.height;z=Math.round(t.width*e)}}else z=t.width,N=t.height}}let U=!p&&("lazy"===f||void 0===f);(!(c="string"==typeof c?c:B)||c.startsWith("data:")||c.startsWith("blob:"))&&(d=!0,U=!1),a.unoptimized&&(d=!0),I&&c.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(d=!0),p&&(C="high");let W=o(g),Y=Object.assign(x?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:k,objectPosition:M}:{},D?{}:{color:"transparent"},b),X=O||"empty"===T?null:"blur"===T?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:z,heightInt:N,blurWidth:l,blurHeight:u,blurDataURL:A||"",objectFit:Y.objectFit})+'")':'url("'+T+'")',G=X?{backgroundSize:Y.objectFit||"cover",backgroundPosition:Y.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:X}:{},H=function(t){let{config:e,src:r,unoptimized:i,width:n,quality:s,sizes:o,loader:a}=t;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:u}=function(t,e,r){let{deviceSizes:i,allSizes:n}=t;if(r){let t=/(^|\s)(1?\d?\d)vw/g,e=[];for(let i;i=t.exec(r);i)e.push(parseInt(i[2]));if(e.length){let t=.01*Math.min(...e);return{widths:n.filter(e=>e>=i[0]*t),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof e?{widths:i,kind:"w"}:{widths:[...new Set([e,2*e].map(t=>n.find(e=>e>=t)||n[n.length-1]))],kind:"x"}}(e,n,o),c=l.length-1;return{sizes:o||"w"!==u?o:"100vw",srcSet:l.map((t,i)=>a({config:e,src:r,quality:s,width:t})+" "+("w"===u?t:i+1)+u).join(", "),src:a({config:e,src:r,quality:s,width:l[c]})}}({config:a,src:c,unoptimized:d,width:z,quality:W,sizes:h,loader:_});return{props:{...j,loading:U?"lazy":f,fetchPriority:C,width:z,height:N,decoding:"async",className:m,style:{...Y,...G},sizes:H.sizes,srcSet:H.srcSet,src:w||H.src},meta:{unoptimized:d,priority:p,placeholder:T,fill:x}}}},8321:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{default:function(){return m},defaultHead:function(){return h}});let i=r(9920),n=r(1452),s=r(7437),o=n._(r(2265)),a=i._(r(5960)),l=r(2901),u=r(6590),c=r(687);function h(t){void 0===t&&(t=!1);let e=[(0,s.jsx)("meta",{charSet:"utf-8"})];return t||e.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),e}function d(t,e){return"string"==typeof e||"number"==typeof e?t:e.type===o.default.Fragment?t.concat(o.default.Children.toArray(e.props.children).reduce((t,e)=>"string"==typeof e||"number"==typeof e?t:t.concat(e),[])):t.concat(e)}r(2301);let p=["name","httpEquiv","charSet","itemProp"];function f(t,e){let{inAmpMode:r}=e;return t.reduce(d,[]).reverse().concat(h(r).reverse()).filter(function(){let t=new Set,e=new Set,r=new Set,i={};return n=>{let s=!0,o=!1;if(n.key&&"number"!=typeof n.key&&n.key.indexOf("$")>0){o=!0;let e=n.key.slice(n.key.indexOf("$")+1);t.has(e)?s=!1:t.add(e)}switch(n.type){case"title":case"base":e.has(n.type)?s=!1:e.add(n.type);break;case"meta":for(let t=0,e=p.length;t<e;t++){let e=p[t];if(n.props.hasOwnProperty(e)){if("charSet"===e)r.has(e)?s=!1:r.add(e);else{let t=n.props[e],r=i[e]||new Set;("name"!==e||!o)&&r.has(t)?s=!1:(r.add(t),i[e]=r)}}}}return s}}()).reverse().map((t,e)=>{let i=t.key||e;if(!r&&"link"===t.type&&t.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(e=>t.props.href.startsWith(e))){let e={...t.props||{}};return e["data-href"]=e.href,e.href=void 0,e["data-optimized-fonts"]=!0,o.default.cloneElement(t,e)}return o.default.cloneElement(t,{key:i})})}let m=function(t){let{children:e}=t,r=(0,o.useContext)(l.AmpStateContext),i=(0,o.useContext)(u.HeadManagerContext);return(0,s.jsx)(a.default,{reduceComponentsToState:f,headManager:i,inAmpMode:(0,c.isInAmpMode)(r),children:e})};("function"==typeof e.default||"object"==typeof e.default&&null!==e.default)&&void 0===e.default.__esModule&&(Object.defineProperty(e.default,"__esModule",{value:!0}),Object.assign(e.default,e),t.exports=e.default)},1564:function(t,e){function r(t){let{widthInt:e,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:s,objectFit:o}=t,a=i?40*i:e,l=n?40*n:r,u=a&&l?"viewBox='0 0 "+a+" "+l+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===o?"xMidYMid":"cover"===o?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+s+"'/%3E%3C/svg%3E"}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},3938:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"ImageConfigContext",{enumerable:!0,get:function(){return s}});let i=r(9920)._(r(2265)),n=r(7103),s=i.default.createContext(n.imageConfigDefault)},7103:function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return i}});let r=["default","imgix","cloudinary","akamai","custom"],i={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"inline",remotePatterns:[],unoptimized:!1}},5601:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),function(t,e){for(var r in e)Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}(e,{default:function(){return l},getImageProps:function(){return a}});let i=r(9920),n=r(497),s=r(8173),o=i._(r(1241));function a(t){let{props:e}=(0,n.getImgProps)(t,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1}});for(let[t,r]of Object.entries(e))void 0===r&&delete e[t];return{props:e}}let l=s.Image},1241:function(t,e){function r(t){let{config:e,src:r,width:i,quality:n}=t;return e.path+"?url="+encodeURIComponent(r)+"&w="+i+"&q="+(n||75)}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},291:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"RouterContext",{enumerable:!0,get:function(){return i}});let i=r(9920)._(r(2265)).default.createContext(null)},5960:function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return a}});let i=r(2265),n="undefined"==typeof window,s=n?()=>{}:i.useLayoutEffect,o=n?()=>{}:i.useEffect;function a(t){let{headManager:e,reduceComponentsToState:r}=t;function a(){if(e&&e.mountedInstances){let n=i.Children.toArray(Array.from(e.mountedInstances).filter(Boolean));e.updateHead(r(n,t))}}if(n){var l;null==e||null==(l=e.mountedInstances)||l.add(t.children),a()}return s(()=>{var r;return null==e||null==(r=e.mountedInstances)||r.add(t.children),()=>{var r;null==e||null==(r=e.mountedInstances)||r.delete(t.children)}}),s(()=>(e&&(e._pendingUpdate=a),()=>{e&&(e._pendingUpdate=a)})),o(()=>(e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null),()=>{e&&e._pendingUpdate&&(e._pendingUpdate(),e._pendingUpdate=null)})),null}},571:function(t,e){/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=Symbol.for("react.element"),i=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),l=Symbol.for("react.context"),u=Symbol.for("react.server_context"),c=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),f=Symbol.for("react.lazy");Symbol.for("react.offscreen"),Symbol.for("react.module.reference"),e.isFragment=function(t){return function(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case r:switch(t=t.type){case n:case o:case s:case h:case d:return t;default:switch(t=t&&t.$$typeof){case u:case l:case c:case f:case p:case a:return t;default:return e}}case i:return e}}}(t)===n}},3462:function(t,e,r){t.exports=r(571)},4332:function(t,e){/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,s=r?Symbol.for("react.fragment"):60107,o=r?Symbol.for("react.strict_mode"):60108,a=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,c=r?Symbol.for("react.async_mode"):60111,h=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,f=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,g=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,v=r?Symbol.for("react.fundamental"):60117,x=r?Symbol.for("react.responder"):60118,b=r?Symbol.for("react.scope"):60119;function w(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case c:case h:case s:case a:case o:case p:return t;default:switch(t=t&&t.$$typeof){case u:case d:case g:case m:case l:return t;default:return e}}case n:return e}}}function P(t){return w(t)===h}e.AsyncMode=c,e.ConcurrentMode=h,e.ContextConsumer=u,e.ContextProvider=l,e.Element=i,e.ForwardRef=d,e.Fragment=s,e.Lazy=g,e.Memo=m,e.Portal=n,e.Profiler=a,e.StrictMode=o,e.Suspense=p,e.isAsyncMode=function(t){return P(t)||w(t)===c},e.isConcurrentMode=P,e.isContextConsumer=function(t){return w(t)===u},e.isContextProvider=function(t){return w(t)===l},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return w(t)===d},e.isFragment=function(t){return w(t)===s},e.isLazy=function(t){return w(t)===g},e.isMemo=function(t){return w(t)===m},e.isPortal=function(t){return w(t)===n},e.isProfiler=function(t){return w(t)===a},e.isStrictMode=function(t){return w(t)===o},e.isSuspense=function(t){return w(t)===p},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===s||t===h||t===a||t===o||t===p||t===f||"object"==typeof t&&null!==t&&(t.$$typeof===g||t.$$typeof===m||t.$$typeof===l||t.$$typeof===u||t.$$typeof===d||t.$$typeof===v||t.$$typeof===x||t.$$typeof===b||t.$$typeof===y)},e.typeOf=w},2659:function(t,e,r){t.exports=r(4332)},8646:function(t,e,r){r.d(e,{_:function(){return i}});function i(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}},6427:function(t,e,r){let i;r.d(e,{E:function(){return ss}});var n,s=r(7437),o=r(2265);let a=(0,o.createContext)({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"}),l=(0,o.createContext)({}),u=(0,o.createContext)(null),c="undefined"!=typeof document,h=c?o.useLayoutEffect:o.useEffect,d=(0,o.createContext)({strict:!1}),p=t=>t.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),f="data-"+p("framerAppearId"),m={skipAnimations:!1,useManualTiming:!1},g=["read","resolveKeyframes","update","preRender","render","postRender"];function y(t,e){let r=!1,i=!0,n={delta:0,timestamp:0,isProcessing:!1},s=()=>r=!0,o=g.reduce((t,e)=>(t[e]=function(t){let e=new Set,r=new Set,i=!1,n=!1,s=new WeakSet,o={delta:0,timestamp:0,isProcessing:!1};function a(e){s.has(e)&&(l.schedule(e),t()),e(o)}let l={schedule:(t,n=!1,o=!1)=>{let a=o&&i?e:r;return n&&s.add(t),a.has(t)||a.add(t),t},cancel:t=>{r.delete(t),s.delete(t)},process:t=>{if(o=t,i){n=!0;return}i=!0,[e,r]=[r,e],r.clear(),e.forEach(a),i=!1,n&&(n=!1,l.process(t))}};return l}(s),t),{}),{read:a,resolveKeyframes:l,update:u,preRender:c,render:h,postRender:d}=o,p=()=>{let s=m.useManualTiming?n.timestamp:performance.now();r=!1,n.delta=i?1e3/60:Math.max(Math.min(s-n.timestamp,40),1),n.timestamp=s,n.isProcessing=!0,a.process(n),l.process(n),u.process(n),c.process(n),h.process(n),d.process(n),n.isProcessing=!1,r&&e&&(i=!1,t(p))},f=()=>{r=!0,i=!0,n.isProcessing||t(p)};return{schedule:g.reduce((t,e)=>{let i=o[e];return t[e]=(t,e=!1,n=!1)=>(r||f(),i.schedule(t,e,n)),t},{}),cancel:t=>{for(let e=0;e<g.length;e++)o[g[e]].cancel(t)},state:n,steps:o}}let{schedule:v,cancel:x}=y(queueMicrotask,!1);function b(t){return t&&"object"==typeof t&&Object.prototype.hasOwnProperty.call(t,"current")}let w=(0,o.createContext)({}),P=!1;function S(){window.HandoffComplete=!0}function T(t){return"string"==typeof t||Array.isArray(t)}function A(t){return null!==t&&"object"==typeof t&&"function"==typeof t.start}let C=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],E=["initial",...C];function k(t){return A(t.animate)||E.some(e=>T(t[e]))}function M(t){return!!(k(t)||t.variants)}function F(t){return Array.isArray(t)?t.join(" "):t}let V={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},j={};for(let t in V)j[t]={isEnabled:e=>V[t].some(t=>!!e[t])};let R=(0,o.createContext)({}),D=Symbol.for("motionComponentSymbol"),O=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function L(t){if("string"!=typeof t||t.includes("-"));else if(O.indexOf(t)>-1||/[A-Z]/u.test(t))return!0;return!1}let $={},_=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],I=new Set(_);function B(t,{layout:e,layoutId:r}){return I.has(t)||t.startsWith("origin")||(e||void 0!==r)&&(!!$[t]||"opacity"===t)}let z=t=>!!(t&&t.getVelocity),N={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},U=_.length,W=t=>e=>"string"==typeof e&&e.startsWith(t),Y=W("--"),X=W("var(--"),G=t=>!!X(t)&&H.test(t.split("/*")[0].trim()),H=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,K=(t,e)=>e&&"number"==typeof t?e.transform(t):t,Z=(t,e,r)=>r>e?e:r<t?t:r,q={test:t=>"number"==typeof t,parse:parseFloat,transform:t=>t},J={...q,transform:t=>Z(0,1,t)},Q={...q,default:1},tt=t=>Math.round(1e5*t)/1e5,te=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu,tr=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,ti=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;function tn(t){return"string"==typeof t}let ts=t=>({test:e=>tn(e)&&e.endsWith(t)&&1===e.split(" ").length,parse:parseFloat,transform:e=>`${e}${t}`}),to=ts("deg"),ta=ts("%"),tl=ts("px"),tu=ts("vh"),tc=ts("vw"),th={...ta,parse:t=>ta.parse(t)/100,transform:t=>ta.transform(100*t)},td={...q,transform:Math.round},tp={borderWidth:tl,borderTopWidth:tl,borderRightWidth:tl,borderBottomWidth:tl,borderLeftWidth:tl,borderRadius:tl,radius:tl,borderTopLeftRadius:tl,borderTopRightRadius:tl,borderBottomRightRadius:tl,borderBottomLeftRadius:tl,width:tl,maxWidth:tl,height:tl,maxHeight:tl,size:tl,top:tl,right:tl,bottom:tl,left:tl,padding:tl,paddingTop:tl,paddingRight:tl,paddingBottom:tl,paddingLeft:tl,margin:tl,marginTop:tl,marginRight:tl,marginBottom:tl,marginLeft:tl,rotate:to,rotateX:to,rotateY:to,rotateZ:to,scale:Q,scaleX:Q,scaleY:Q,scaleZ:Q,skew:to,skewX:to,skewY:to,distance:tl,translateX:tl,translateY:tl,translateZ:tl,x:tl,y:tl,z:tl,perspective:tl,transformPerspective:tl,opacity:J,originX:th,originY:th,originZ:tl,zIndex:td,backgroundPositionX:tl,backgroundPositionY:tl,fillOpacity:J,strokeOpacity:J,numOctaves:td};function tf(t,e,r){let{style:i,vars:n,transform:s,transformOrigin:o}=t,a=!1,l=!1,u=!0;for(let t in e){let r=e[t];if(Y(t)){n[t]=r;continue}let c=tp[t],h=K(r,c);if(I.has(t)){if(a=!0,s[t]=h,!u)continue;r!==(c.default||0)&&(u=!1)}else t.startsWith("origin")?(l=!0,o[t]=h):i[t]=h}if(!e.transform&&(a||r?i.transform=function(t,e,r){let i="";for(let e=0;e<U;e++){let r=_[e];if(void 0!==t[r]){let e=N[r]||r;i+=`${e}(${t[r]}) `}}return i=i.trim(),r?i=r(t,e?"":i):e&&(i="none"),i}(t.transform,u,r):i.transform&&(i.transform="none")),l){let{originX:t="50%",originY:e="50%",originZ:r=0}=o;i.transformOrigin=`${t} ${e} ${r}`}}let tm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function tg(t,e,r){for(let i in e)z(e[i])||B(i,r)||(t[i]=e[i])}let ty=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function tv(t){return t.startsWith("while")||t.startsWith("drag")&&"draggable"!==t||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||ty.has(t)}let tx=t=>!tv(t);try{(n=require("@emotion/is-prop-valid").default)&&(tx=t=>t.startsWith("on")?!tv(t):n(t))}catch(t){}function tb(t,e,r){return"string"==typeof t?t:tl.transform(e+r*t)}let tw={offset:"stroke-dashoffset",array:"stroke-dasharray"},tP={offset:"strokeDashoffset",array:"strokeDasharray"};function tS(t,{attrX:e,attrY:r,attrScale:i,originX:n,originY:s,pathLength:o,pathSpacing:a=1,pathOffset:l=0,...u},c,h){if(tf(t,u,h),c){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};let{attrs:d,style:p,dimensions:f}=t;d.transform&&(f&&(p.transform=d.transform),delete d.transform),f&&(void 0!==n||void 0!==s||p.transform)&&(p.transformOrigin=function(t,e,r){let i=tb(e,t.x,t.width),n=tb(r,t.y,t.height);return`${i} ${n}`}(f,void 0!==n?n:.5,void 0!==s?s:.5)),void 0!==e&&(d.x=e),void 0!==r&&(d.y=r),void 0!==i&&(d.scale=i),void 0!==o&&function(t,e,r=1,i=0,n=!0){t.pathLength=1;let s=n?tw:tP;t[s.offset]=tl.transform(-i);let o=tl.transform(e),a=tl.transform(r);t[s.array]=`${o} ${a}`}(d,o,a,l,!1)}let tT=()=>({...tm(),attrs:{}}),tA=t=>"string"==typeof t&&"svg"===t.toLowerCase();function tC(t,{style:e,vars:r},i,n){for(let s in Object.assign(t.style,e,n&&n.getProjectionStyles(i)),r)t.style.setProperty(s,r[s])}let tE=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function tk(t,e,r,i){for(let r in tC(t,e,void 0,i),e.attrs)t.setAttribute(tE.has(r)?r:p(r),e.attrs[r])}function tM(t,e,r){var i;let{style:n}=t,s={};for(let o in n)(z(n[o])||e.style&&z(e.style[o])||B(o,t)||(null===(i=null==r?void 0:r.getValue(o))||void 0===i?void 0:i.liveStyle)!==void 0)&&(s[o]=n[o]);return r&&n&&"string"==typeof n.willChange&&(r.applyWillChange=!1),s}function tF(t,e,r){let i=tM(t,e,r);for(let r in t)(z(t[r])||z(e[r]))&&(i[-1!==_.indexOf(r)?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r]=t[r]);return i}function tV(t){let e=[{},{}];return null==t||t.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function tj(t,e,r,i){if("function"==typeof e){let[n,s]=tV(i);e=e(void 0!==r?r:t.custom,n,s)}if("string"==typeof e&&(e=t.variants&&t.variants[e]),"function"==typeof e){let[n,s]=tV(i);e=e(void 0!==r?r:t.custom,n,s)}return e}let tR=t=>Array.isArray(t),tD=t=>!!(t&&"object"==typeof t&&t.mix&&t.toValue),tO=t=>tR(t)?t[t.length-1]||0:t;function tL(t){let e=z(t)?t.get():t;return tD(e)?e.toValue():e}let t$=new Set(["opacity","clipPath","filter","transform"]);function t_(t){return I.has(t)?"transform":t$.has(t)?p(t):void 0}function tI(t,e){-1===t.indexOf(e)&&t.push(e)}function tB(t,e){let r=t.indexOf(e);r>-1&&t.splice(r,1)}let tz=t=>(e,r)=>{let i=(0,o.useContext)(l),n=(0,o.useContext)(u),s=()=>(function({applyWillChange:t=!1,scrapeMotionValuesFromProps:e,createRenderState:r,onMount:i},n,s,o,a){let l={latestValues:function(t,e,r,i,n){var s;let o={},a=[],l=i&&(null===(s=t.style)||void 0===s?void 0:s.willChange)===void 0,u=n(t,{});for(let t in u)o[t]=tL(u[t]);let{initial:c,animate:h}=t,d=k(t),p=M(t);e&&p&&!d&&!1!==t.inherit&&(void 0===c&&(c=e.initial),void 0===h&&(h=e.animate));let f=!!r&&!1===r.initial,m=(f=f||!1===c)?h:c;return m&&"boolean"!=typeof m&&!A(m)&&tN(t,m,(t,e)=>{for(let e in t){let r=t[e];if(Array.isArray(r)){let t=f?r.length-1:0;r=r[t]}null!==r&&(o[e]=r)}for(let t in e)o[t]=e[t]}),l&&(h&&!1!==c&&!A(h)&&tN(t,h,t=>{for(let e in t)!function(t,e){let r=t_(e);r&&tI(t,r)}(a,e)}),a.length&&(o.willChange=a.join(","))),o}(n,s,o,!a&&t,e),renderState:r()};return i&&(l.mount=t=>i(n,t,l)),l})(t,e,i,n,r);return r?s():function(t){let e=(0,o.useRef)(null);return null===e.current&&(e.current=t()),e.current}(s)};function tN(t,e,r){let i=Array.isArray(e)?e:[e];for(let e=0;e<i.length;e++){let n=tj(t,i[e]);if(n){let{transitionEnd:t,transition:e,...i}=n;r(i,t)}}}var tU=r(9276);let{schedule:tW,cancel:tY,state:tX,steps:tG}=y("undefined"!=typeof requestAnimationFrame?requestAnimationFrame:tU.Z,!0),tH={useVisualState:tz({scrapeMotionValuesFromProps:tF,createRenderState:tT,onMount:(t,e,{renderState:r,latestValues:i})=>{tW.read(()=>{try{r.dimensions="function"==typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(t){r.dimensions={x:0,y:0,width:0,height:0}}}),tW.render(()=>{tS(r,i,tA(e.tagName),t.transformTemplate),tk(e,r)})}})},tK={useVisualState:tz({applyWillChange:!0,scrapeMotionValuesFromProps:tM,createRenderState:tm})};function tZ(t,e,r,i={passive:!0}){return t.addEventListener(e,r,i),()=>t.removeEventListener(e,r)}let tq=t=>"mouse"===t.pointerType?"number"!=typeof t.button||t.button<=0:!1!==t.isPrimary;function tJ(t,e="page"){return{point:{x:t[`${e}X`],y:t[`${e}Y`]}}}let tQ=t=>e=>tq(e)&&t(e,tJ(e));function t0(t,e,r,i){return tZ(t,e,tQ(r),i)}let t1=(t,e)=>r=>e(t(r)),t3=(...t)=>t.reduce(t1);function t5(t){let e=null;return()=>null===e&&(e=t,()=>{e=null})}let t4=t5("dragHorizontal"),t2=t5("dragVertical");function t6(t){let e=!1;if("y"===t)e=t2();else if("x"===t)e=t4();else{let t=t4(),r=t2();t&&r?e=()=>{t(),r()}:(t&&t(),r&&r())}return e}function t9(){let t=t6(!0);return!t||(t(),!1)}class t7{constructor(t){this.isMounted=!1,this.node=t}update(){}}function t8(t,e){let r=e?"onHoverStart":"onHoverEnd";return t0(t.current,e?"pointerenter":"pointerleave",(i,n)=>{if("touch"===i.pointerType||t9())return;let s=t.getProps();t.animationState&&s.whileHover&&t.animationState.setActive("whileHover",e);let o=s[r];o&&tW.postRender(()=>o(i,n))},{passive:!t.getProps()[r]})}class et extends t7{mount(){this.unmount=t3(t8(this.node,!0),t8(this.node,!1))}unmount(){}}class ee extends t7{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch(e){t=!0}t&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=t3(tZ(this.node.current,"focus",()=>this.onFocus()),tZ(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}let er=(t,e)=>!!e&&(t===e||er(t,e.parentElement));function ei(t,e){if(!e)return;let r=new PointerEvent("pointer"+t);e(r,tJ(r))}class en extends t7{constructor(){super(...arguments),this.removeStartListeners=tU.Z,this.removeEndListeners=tU.Z,this.removeAccessibleListeners=tU.Z,this.startPointerPress=(t,e)=>{if(this.isPressing)return;this.removeEndListeners();let r=this.node.getProps(),i=t0(window,"pointerup",(t,e)=>{if(!this.checkPressEnd())return;let{onTap:r,onTapCancel:i,globalTapTarget:n}=this.node.getProps(),s=n||er(this.node.current,t.target)?r:i;s&&tW.update(()=>s(t,e))},{passive:!(r.onTap||r.onPointerUp)}),n=t0(window,"pointercancel",(t,e)=>this.cancelPress(t,e),{passive:!(r.onTapCancel||r.onPointerCancel)});this.removeEndListeners=t3(i,n),this.startPress(t,e)},this.startAccessiblePress=()=>{let t=tZ(this.node.current,"keydown",t=>{"Enter"!==t.key||this.isPressing||(this.removeEndListeners(),this.removeEndListeners=tZ(this.node.current,"keyup",t=>{"Enter"===t.key&&this.checkPressEnd()&&ei("up",(t,e)=>{let{onTap:r}=this.node.getProps();r&&tW.postRender(()=>r(t,e))})}),ei("down",(t,e)=>{this.startPress(t,e)}))}),e=tZ(this.node.current,"blur",()=>{this.isPressing&&ei("cancel",(t,e)=>this.cancelPress(t,e))});this.removeAccessibleListeners=t3(t,e)}}startPress(t,e){this.isPressing=!0;let{onTapStart:r,whileTap:i}=this.node.getProps();i&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),r&&tW.postRender(()=>r(t,e))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!t9()}cancelPress(t,e){if(!this.checkPressEnd())return;let{onTapCancel:r}=this.node.getProps();r&&tW.postRender(()=>r(t,e))}mount(){let t=this.node.getProps(),e=t0(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),r=tZ(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=t3(e,r)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}let es=new WeakMap,eo=new WeakMap,ea=t=>{let e=es.get(t.target);e&&e(t)},el=t=>{t.forEach(ea)},eu={some:0,all:1};class ec extends t7{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();let{viewport:t={}}=this.node.getProps(),{root:e,margin:r,amount:i="some",once:n}=t,s={root:e?e.current:void 0,rootMargin:r,threshold:"number"==typeof i?i:eu[i]};return function(t,e,r){let i=function({root:t,...e}){let r=t||document;eo.has(r)||eo.set(r,{});let i=eo.get(r),n=JSON.stringify(e);return i[n]||(i[n]=new IntersectionObserver(el,{root:t,...e})),i[n]}(e);return es.set(t,r),i.observe(t),()=>{es.delete(t),i.unobserve(t)}}(this.node.current,s,t=>{let{isIntersecting:e}=t;if(this.isInView===e||(this.isInView=e,n&&!e&&this.hasEnteredView))return;e&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",e);let{onViewportEnter:r,onViewportLeave:i}=this.node.getProps(),s=e?r:i;s&&s(t)})}mount(){this.startObserver()}update(){if("undefined"==typeof IntersectionObserver)return;let{props:t,prevProps:e}=this.node;["amount","margin","root"].some(function({viewport:t={}},{viewport:e={}}={}){return r=>t[r]!==e[r]}(t,e))&&this.startObserver()}unmount(){}}function eh(t,e){if(!Array.isArray(e))return!1;let r=e.length;if(r!==t.length)return!1;for(let i=0;i<r;i++)if(e[i]!==t[i])return!1;return!0}function ed(t,e,r){let i=t.getProps();return tj(i,e,void 0!==r?r:i.custom,t)}let ep=t=>1e3*t,ef=t=>t/1e3,em={type:"spring",stiffness:500,damping:25,restSpeed:10},eg=t=>({type:"spring",stiffness:550,damping:0===t?2*Math.sqrt(550):30,restSpeed:10}),ey={type:"keyframes",duration:.8},ev={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},ex=(t,{keyframes:e})=>e.length>2?ey:I.has(t)?t.startsWith("scale")?eg(e[1]):em:ev;function eb(t,e){return t[e]||t.default||t}let ew={current:!1},eP=t=>null!==t;function eS(t,{repeat:e,repeatType:r="loop"},i){let n=t.filter(eP),s=e&&"loop"!==r&&e%2==1?0:n.length-1;return s&&void 0!==i?i:n[s]}function eT(){i=void 0}let eA={now:()=>(void 0===i&&eA.set(tX.isProcessing||m.useManualTiming?tX.timestamp:performance.now()),i),set:t=>{i=t,queueMicrotask(eT)}},eC=t=>/^0[^.\s]+$/u.test(t);var eE=r(9047);let ek=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),eM=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u,eF=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),eV=t=>t===q||t===tl,ej=(t,e)=>parseFloat(t.split(", ")[e]),eR=(t,e)=>(r,{transform:i})=>{if("none"===i||!i)return 0;let n=i.match(/^matrix3d\((.+)\)$/u);if(n)return ej(n[1],e);{let e=i.match(/^matrix\((.+)\)$/u);return e?ej(e[1],t):0}},eD=new Set(["x","y","z"]),eO=_.filter(t=>!eD.has(t)),eL={width:({x:t},{paddingLeft:e="0",paddingRight:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),height:({y:t},{paddingTop:e="0",paddingBottom:r="0"})=>t.max-t.min-parseFloat(e)-parseFloat(r),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:eR(4,13),y:eR(5,14)};eL.translateX=eL.x,eL.translateY=eL.y;let e$=t=>e=>e.test(t),e_=[q,tl,ta,to,tc,tu,{test:t=>"auto"===t,parse:t=>t}],eI=t=>e_.find(e$(t)),eB=new Set,ez=!1,eN=!1;function eU(){if(eN){let t=Array.from(eB).filter(t=>t.needsMeasurement),e=new Set(t.map(t=>t.element)),r=new Map;e.forEach(t=>{let e=function(t){let e=[];return eO.forEach(r=>{let i=t.getValue(r);void 0!==i&&(e.push([r,i.get()]),i.set(r.startsWith("scale")?1:0))}),e}(t);e.length&&(r.set(t,e),t.render())}),t.forEach(t=>t.measureInitialState()),e.forEach(t=>{t.render();let e=r.get(t);e&&e.forEach(([e,r])=>{var i;null===(i=t.getValue(e))||void 0===i||i.set(r)})}),t.forEach(t=>t.measureEndState()),t.forEach(t=>{void 0!==t.suspendedScrollY&&window.scrollTo(0,t.suspendedScrollY)})}eN=!1,ez=!1,eB.forEach(t=>t.complete()),eB.clear()}function eW(){eB.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(eN=!0)})}class eY{constructor(t,e,r,i,n,s=!1){this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...t],this.onComplete=e,this.name=r,this.motionValue=i,this.element=n,this.isAsync=s}scheduleResolve(){this.isScheduled=!0,this.isAsync?(eB.add(this),ez||(ez=!0,tW.read(eW),tW.resolveKeyframes(eU))):(this.readKeyframes(),this.complete())}readKeyframes(){let{unresolvedKeyframes:t,name:e,element:r,motionValue:i}=this;for(let n=0;n<t.length;n++)if(null===t[n]){if(0===n){let n=null==i?void 0:i.get(),s=t[t.length-1];if(void 0!==n)t[0]=n;else if(r&&e){let i=r.readValue(e,s);null!=i&&(t[0]=i)}void 0===t[0]&&(t[0]=s),i&&void 0===n&&i.set(t[0])}else t[n]=t[n-1]}}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),eB.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,eB.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}let eX=(t,e)=>r=>!!(tn(r)&&ti.test(r)&&r.startsWith(t)||e&&null!=r&&Object.prototype.hasOwnProperty.call(r,e)),eG=(t,e,r)=>i=>{if(!tn(i))return i;let[n,s,o,a]=i.match(te);return{[t]:parseFloat(n),[e]:parseFloat(s),[r]:parseFloat(o),alpha:void 0!==a?parseFloat(a):1}},eH=t=>Z(0,255,t),eK={...q,transform:t=>Math.round(eH(t))},eZ={test:eX("rgb","red"),parse:eG("red","green","blue"),transform:({red:t,green:e,blue:r,alpha:i=1})=>"rgba("+eK.transform(t)+", "+eK.transform(e)+", "+eK.transform(r)+", "+tt(J.transform(i))+")"},eq={test:eX("#"),parse:function(t){let e="",r="",i="",n="";return t.length>5?(e=t.substring(1,3),r=t.substring(3,5),i=t.substring(5,7),n=t.substring(7,9)):(e=t.substring(1,2),r=t.substring(2,3),i=t.substring(3,4),n=t.substring(4,5),e+=e,r+=r,i+=i,n+=n),{red:parseInt(e,16),green:parseInt(r,16),blue:parseInt(i,16),alpha:n?parseInt(n,16)/255:1}},transform:eZ.transform},eJ={test:eX("hsl","hue"),parse:eG("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:r,alpha:i=1})=>"hsla("+Math.round(t)+", "+ta.transform(tt(e))+", "+ta.transform(tt(r))+", "+tt(J.transform(i))+")"},eQ={test:t=>eZ.test(t)||eq.test(t)||eJ.test(t),parse:t=>eZ.test(t)?eZ.parse(t):eJ.test(t)?eJ.parse(t):eq.parse(t),transform:t=>tn(t)?t:t.hasOwnProperty("red")?eZ.transform(t):eJ.transform(t)},e0="number",e1="color",e3=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function e5(t){let e=t.toString(),r=[],i={color:[],number:[],var:[]},n=[],s=0,o=e.replace(e3,t=>(eQ.test(t)?(i.color.push(s),n.push(e1),r.push(eQ.parse(t))):t.startsWith("var(")?(i.var.push(s),n.push("var"),r.push(t)):(i.number.push(s),n.push(e0),r.push(parseFloat(t))),++s,"${}")).split("${}");return{values:r,split:o,indexes:i,types:n}}function e4(t){return e5(t).values}function e2(t){let{split:e,types:r}=e5(t),i=e.length;return t=>{let n="";for(let s=0;s<i;s++)if(n+=e[s],void 0!==t[s]){let e=r[s];e===e0?n+=tt(t[s]):e===e1?n+=eQ.transform(t[s]):n+=t[s]}return n}}let e6=t=>"number"==typeof t?0:t,e9={test:function(t){var e,r;return isNaN(t)&&tn(t)&&((null===(e=t.match(te))||void 0===e?void 0:e.length)||0)+((null===(r=t.match(tr))||void 0===r?void 0:r.length)||0)>0},parse:e4,createTransformer:e2,getAnimatableNone:function(t){let e=e4(t);return e2(t)(e.map(e6))}},e7=new Set(["brightness","contrast","saturate","opacity"]);function e8(t){let[e,r]=t.slice(0,-1).split("(");if("drop-shadow"===e)return t;let[i]=r.match(te)||[];if(!i)return t;let n=r.replace(i,""),s=e7.has(e)?1:0;return i!==r&&(s*=100),e+"("+s+n+")"}let rt=/\b([a-z-]*)\(.*?\)/gu,re={...e9,getAnimatableNone:t=>{let e=t.match(rt);return e?e.map(e8).join(" "):t}},rr={...tp,color:eQ,backgroundColor:eQ,outlineColor:eQ,fill:eQ,stroke:eQ,borderColor:eQ,borderTopColor:eQ,borderRightColor:eQ,borderBottomColor:eQ,borderLeftColor:eQ,filter:re,WebkitFilter:re},ri=t=>rr[t];function rn(t,e){let r=ri(t);return r!==re&&(r=e9),r.getAnimatableNone?r.getAnimatableNone(e):void 0}let rs=new Set(["auto","none","0"]);class ro extends eY{constructor(t,e,r,i){super(t,e,r,i,null==i?void 0:i.owner,!0)}readKeyframes(){let{unresolvedKeyframes:t,element:e,name:r}=this;if(!e.current)return;super.readKeyframes();for(let r=0;r<t.length;r++){let i=t[r];if("string"==typeof i&&G(i=i.trim())){let n=function t(e,r,i=1){(0,eE.k)(i<=4,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);let[n,s]=function(t){let e=eM.exec(t);if(!e)return[,];let[,r,i,n]=e;return[`--${null!=r?r:i}`,n]}(e);if(!n)return;let o=window.getComputedStyle(r).getPropertyValue(n);if(o){let t=o.trim();return ek(t)?parseFloat(t):t}return G(s)?t(s,r,i+1):s}(i,e.current);void 0!==n&&(t[r]=n),r===t.length-1&&(this.finalKeyframe=i)}}if(this.resolveNoneKeyframes(),!eF.has(r)||2!==t.length)return;let[i,n]=t,s=eI(i),o=eI(n);if(s!==o){if(eV(s)&&eV(o))for(let e=0;e<t.length;e++){let r=t[e];"string"==typeof r&&(t[e]=parseFloat(r))}else this.needsMeasurement=!0}}resolveNoneKeyframes(){let{unresolvedKeyframes:t,name:e}=this,r=[];for(let e=0;e<t.length;e++){var i;("number"==typeof(i=t[e])?0===i:null===i||"none"===i||"0"===i||eC(i))&&r.push(e)}r.length&&function(t,e,r){let i,n=0;for(;n<t.length&&!i;){let e=t[n];"string"==typeof e&&!rs.has(e)&&e5(e).values.length&&(i=t[n]),n++}if(i&&r)for(let n of e)t[n]=rn(r,i)}(t,r,e)}measureInitialState(){let{element:t,unresolvedKeyframes:e,name:r}=this;if(!t.current)return;"height"===r&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=eL[r](t.measureViewportBox(),window.getComputedStyle(t.current)),e[0]=this.measuredOrigin;let i=e[e.length-1];void 0!==i&&t.getValue(r,i).jump(i,!1)}measureEndState(){var t;let{element:e,name:r,unresolvedKeyframes:i}=this;if(!e.current)return;let n=e.getValue(r);n&&n.jump(this.measuredOrigin,!1);let s=i.length-1,o=i[s];i[s]=eL[r](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==o&&void 0===this.finalKeyframe&&(this.finalKeyframe=o),(null===(t=this.removedTransforms)||void 0===t?void 0:t.length)&&this.removedTransforms.forEach(([t,r])=>{e.getValue(t).set(r)}),this.resolveNoneKeyframes()}}function ra(t){let e;return()=>(void 0===e&&(e=t()),e)}let rl=(t,e)=>"zIndex"!==e&&!!("number"==typeof t||Array.isArray(t)||"string"==typeof t&&(e9.test(t)||"0"===t)&&!t.startsWith("url("));class ru{constructor({autoplay:t=!0,delay:e=0,type:r="keyframes",repeat:i=0,repeatDelay:n=0,repeatType:s="loop",...o}){this.isStopped=!1,this.hasAttemptedResolve=!1,this.options={autoplay:t,delay:e,type:r,repeat:i,repeatDelay:n,repeatType:s,...o},this.updateFinishedPromise()}get resolved(){return this._resolved||this.hasAttemptedResolve||(eW(),eU()),this._resolved}onKeyframesResolved(t,e){this.hasAttemptedResolve=!0;let{name:r,type:i,velocity:n,delay:s,onComplete:o,onUpdate:a,isGenerator:l}=this.options;if(!l&&!function(t,e,r,i){let n=t[0];if(null===n)return!1;if("display"===e||"visibility"===e)return!0;let s=t[t.length-1],o=rl(n,e),a=rl(s,e);return(0,eE.K)(o===a,`You are trying to animate ${e} from "${n}" to "${s}". ${n} is not an animatable value - to enable this animation set ${n} to a value animatable to ${s} via the \`style\` property.`),!!o&&!!a&&(function(t){let e=t[0];if(1===t.length)return!0;for(let r=0;r<t.length;r++)if(t[r]!==e)return!0}(t)||"spring"===r&&i)}(t,r,i,n)){if(ew.current||!s){null==a||a(eS(t,this.options,e)),null==o||o(),this.resolveFinishedPromise();return}this.options.duration=0}let u=this.initPlayback(t,e);!1!==u&&(this._resolved={keyframes:t,finalKeyframe:e,...u},this.onPostResolved())}onPostResolved(){}then(t,e){return this.currentFinishedPromise.then(t,e)}updateFinishedPromise(){this.currentFinishedPromise=new Promise(t=>{this.resolveFinishedPromise=t})}}function rc(t,e,r){var i,n;let s=Math.max(e-5,0);return i=r-t(s),(n=e-s)?1e3/n*i:0}function rh(t,e){return t*Math.sqrt(1-e*e)}let rd=["duration","bounce"],rp=["stiffness","damping","mass"];function rf(t,e){return e.some(e=>void 0!==t[e])}function rm({keyframes:t,restDelta:e,restSpeed:r,...i}){let n;let s=t[0],o=t[t.length-1],a={done:!1,value:s},{stiffness:l,damping:u,mass:c,duration:h,velocity:d,isResolvedFromDuration:p}=function(t){let e={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...t};if(!rf(t,rp)&&rf(t,rd)){let r=function({duration:t=800,bounce:e=.25,velocity:r=0,mass:i=1}){let n,s;(0,eE.K)(t<=ep(10),"Spring duration must be 10 seconds or less");let o=1-e;o=Z(.05,1,o),t=Z(.01,10,ef(t)),o<1?(n=e=>{let i=e*o,n=i*t;return .001-(i-r)/rh(e,o)*Math.exp(-n)},s=e=>{let i=e*o*t,s=Math.pow(o,2)*Math.pow(e,2)*t,a=rh(Math.pow(e,2),o);return(i*r+r-s)*Math.exp(-i)*(-n(e)+.001>0?-1:1)/a}):(n=e=>-.001+Math.exp(-e*t)*((e-r)*t+1),s=e=>t*t*(r-e)*Math.exp(-e*t));let a=function(t,e,r){let i=r;for(let r=1;r<12;r++)i-=t(i)/e(i);return i}(n,s,5/t);if(t=ep(t),isNaN(a))return{stiffness:100,damping:10,duration:t};{let e=Math.pow(a,2)*i;return{stiffness:e,damping:2*o*Math.sqrt(i*e),duration:t}}}(t);(e={...e,...r,mass:1}).isResolvedFromDuration=!0}return e}({...i,velocity:-ef(i.velocity||0)}),f=d||0,m=u/(2*Math.sqrt(l*c)),g=o-s,y=ef(Math.sqrt(l/c)),v=5>Math.abs(g);if(r||(r=v?.01:2),e||(e=v?.005:.5),m<1){let t=rh(y,m);n=e=>o-Math.exp(-m*y*e)*((f+m*y*g)/t*Math.sin(t*e)+g*Math.cos(t*e))}else if(1===m)n=t=>o-Math.exp(-y*t)*(g+(f+y*g)*t);else{let t=y*Math.sqrt(m*m-1);n=e=>{let r=Math.exp(-m*y*e),i=Math.min(t*e,300);return o-r*((f+m*y*g)*Math.sinh(i)+t*g*Math.cosh(i))/t}}return{calculatedDuration:p&&h||null,next:t=>{let i=n(t);if(p)a.done=t>=h;else{let s=f;0!==t&&(s=m<1?rc(n,t,i):0);let l=Math.abs(s)<=r,u=Math.abs(o-i)<=e;a.done=l&&u}return a.value=a.done?o:i,a}}}function rg({keyframes:t,velocity:e=0,power:r=.8,timeConstant:i=325,bounceDamping:n=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:u=.5,restSpeed:c}){let h,d;let p=t[0],f={done:!1,value:p},m=t=>void 0!==a&&t<a||void 0!==l&&t>l,g=t=>void 0===a?l:void 0===l?a:Math.abs(a-t)<Math.abs(l-t)?a:l,y=r*e,v=p+y,x=void 0===o?v:o(v);x!==v&&(y=x-p);let b=t=>-y*Math.exp(-t/i),w=t=>x+b(t),P=t=>{let e=b(t),r=w(t);f.done=Math.abs(e)<=u,f.value=f.done?x:r},S=t=>{m(f.value)&&(h=t,d=rm({keyframes:[f.value,g(f.value)],velocity:rc(w,t,f.value),damping:n,stiffness:s,restDelta:u,restSpeed:c}))};return S(0),{calculatedDuration:null,next:t=>{let e=!1;return(d||void 0!==h||(e=!0,P(t),S(t)),void 0!==h&&t>=h)?d.next(t-h):(e||P(t),f)}}}let ry=(t,e,r)=>(((1-3*r+3*e)*t+(3*r-6*e))*t+3*e)*t;function rv(t,e,r,i){if(t===e&&r===i)return tU.Z;let n=e=>(function(t,e,r,i,n){let s,o;let a=0;do(s=ry(o=e+(r-e)/2,i,n)-t)>0?r=o:e=o;while(Math.abs(s)>1e-7&&++a<12);return o})(e,0,1,t,r);return t=>0===t||1===t?t:ry(n(t),e,i)}let rx=rv(.42,0,1,1),rb=rv(0,0,.58,1),rw=rv(.42,0,.58,1),rP=t=>Array.isArray(t)&&"number"!=typeof t[0],rS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,rT=t=>e=>1-t(1-e),rA=t=>1-Math.sin(Math.acos(t)),rC=rT(rA),rE=rS(rA),rk=rv(.33,1.53,.69,.99),rM=rT(rk),rF=rS(rM),rV={linear:tU.Z,easeIn:rx,easeInOut:rw,easeOut:rb,circIn:rA,circInOut:rE,circOut:rC,backIn:rM,backInOut:rF,backOut:rk,anticipate:t=>(t*=2)<1?.5*rM(t):.5*(2-Math.pow(2,-10*(t-1)))},rj=t=>{if(Array.isArray(t)){(0,eE.k)(4===t.length,"Cubic bezier arrays must contain four numerical values.");let[e,r,i,n]=t;return rv(e,r,i,n)}return"string"==typeof t?((0,eE.k)(void 0!==rV[t],`Invalid easing type '${t}'`),rV[t]):t},rR=(t,e,r)=>{let i=e-t;return 0===i?1:(r-t)/i},rD=(t,e,r)=>t+(e-t)*r;function rO(t,e,r){return(r<0&&(r+=1),r>1&&(r-=1),r<1/6)?t+(e-t)*6*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}function rL(t,e){return r=>r>0?e:t}let r$=(t,e,r)=>{let i=t*t,n=r*(e*e-i)+i;return n<0?0:Math.sqrt(n)},r_=[eq,eZ,eJ],rI=t=>r_.find(e=>e.test(t));function rB(t){let e=rI(t);if((0,eE.K)(!!e,`'${t}' is not an animatable color. Use the equivalent color code instead.`),!e)return!1;let r=e.parse(t);return e===eJ&&(r=function({hue:t,saturation:e,lightness:r,alpha:i}){t/=360,r/=100;let n=0,s=0,o=0;if(e/=100){let i=r<.5?r*(1+e):r+e-r*e,a=2*r-i;n=rO(a,i,t+1/3),s=rO(a,i,t),o=rO(a,i,t-1/3)}else n=s=o=r;return{red:Math.round(255*n),green:Math.round(255*s),blue:Math.round(255*o),alpha:i}}(r)),r}let rz=(t,e)=>{let r=rB(t),i=rB(e);if(!r||!i)return rL(t,e);let n={...r};return t=>(n.red=r$(r.red,i.red,t),n.green=r$(r.green,i.green,t),n.blue=r$(r.blue,i.blue,t),n.alpha=rD(r.alpha,i.alpha,t),eZ.transform(n))},rN=new Set(["none","hidden"]);function rU(t,e){return r=>rD(t,e,r)}function rW(t){return"number"==typeof t?rU:"string"==typeof t?G(t)?rL:eQ.test(t)?rz:rG:Array.isArray(t)?rY:"object"==typeof t?eQ.test(t)?rz:rX:rL}function rY(t,e){let r=[...t],i=r.length,n=t.map((t,r)=>rW(t)(t,e[r]));return t=>{for(let e=0;e<i;e++)r[e]=n[e](t);return r}}function rX(t,e){let r={...t,...e},i={};for(let n in r)void 0!==t[n]&&void 0!==e[n]&&(i[n]=rW(t[n])(t[n],e[n]));return t=>{for(let e in i)r[e]=i[e](t);return r}}let rG=(t,e)=>{let r=e9.createTransformer(e),i=e5(t),n=e5(e);return i.indexes.var.length===n.indexes.var.length&&i.indexes.color.length===n.indexes.color.length&&i.indexes.number.length>=n.indexes.number.length?rN.has(t)&&!n.values.length||rN.has(e)&&!i.values.length?rN.has(t)?r=>r<=0?t:e:r=>r>=1?e:t:t3(rY(function(t,e){var r;let i=[],n={color:0,var:0,number:0};for(let s=0;s<e.values.length;s++){let o=e.types[s],a=t.indexes[o][n[o]],l=null!==(r=t.values[a])&&void 0!==r?r:0;i[s]=l,n[o]++}return i}(i,n),n.values),r):((0,eE.K)(!0,`Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`),rL(t,e))};function rH(t,e,r){return"number"==typeof t&&"number"==typeof e&&"number"==typeof r?rD(t,e,r):rW(t)(t,e)}function rK({duration:t=300,keyframes:e,times:r,ease:i="easeInOut"}){let n=rP(i)?i.map(rj):rj(i),s={done:!1,value:e[0]},o=function(t,e,{clamp:r=!0,ease:i,mixer:n}={}){let s=t.length;if((0,eE.k)(s===e.length,"Both input and output ranges must be the same length"),1===s)return()=>e[0];if(2===s&&t[0]===t[1])return()=>e[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());let o=function(t,e,r){let i=[],n=r||rH,s=t.length-1;for(let r=0;r<s;r++){let s=n(t[r],t[r+1]);e&&(s=t3(Array.isArray(e)?e[r]||tU.Z:e,s)),i.push(s)}return i}(e,i,n),a=o.length,l=e=>{let r=0;if(a>1)for(;r<t.length-2&&!(e<t[r+1]);r++);let i=rR(t[r],t[r+1],e);return o[r](i)};return r?e=>l(Z(t[0],t[s-1],e)):l}((r&&r.length===e.length?r:function(t){let e=[0];return function(t,e){let r=t[t.length-1];for(let i=1;i<=e;i++){let n=rR(0,e,i);t.push(rD(r,1,n))}}(e,t.length-1),e}(e)).map(e=>e*t),e,{ease:Array.isArray(n)?n:e.map(()=>n||rw).splice(0,e.length-1)});return{calculatedDuration:t,next:e=>(s.value=o(e),s.done=e>=t,s)}}let rZ=t=>{let e=({timestamp:e})=>t(e);return{start:()=>tW.update(e,!0),stop:()=>tY(e),now:()=>tX.isProcessing?tX.timestamp:eA.now()}},rq={decay:rg,inertia:rg,tween:rK,keyframes:rK,spring:rm},rJ=t=>t/100;class rQ extends ru{constructor({KeyframeResolver:t=eY,...e}){super(e),this.holdTime=null,this.startTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();let{onStop:t}=this.options;t&&t()};let{name:r,motionValue:i,keyframes:n}=this.options,s=(t,e)=>this.onKeyframesResolved(t,e);r&&i&&i.owner?this.resolver=i.owner.resolveKeyframes(n,s,r,i):this.resolver=new t(n,s,r,i),this.resolver.scheduleResolve()}initPlayback(t){let e,r;let{type:i="keyframes",repeat:n=0,repeatDelay:s=0,repeatType:o,velocity:a=0}=this.options,l=rq[i]||rK;l!==rK&&"number"!=typeof t[0]&&(e=t3(rJ,rH(t[0],t[1])),t=[0,100]);let u=l({...this.options,keyframes:t});"mirror"===o&&(r=l({...this.options,keyframes:[...t].reverse(),velocity:-a})),null===u.calculatedDuration&&(u.calculatedDuration=function(t){let e=0,r=t.next(e);for(;!r.done&&e<2e4;)e+=50,r=t.next(e);return e>=2e4?1/0:e}(u));let{calculatedDuration:c}=u,h=c+s;return{generator:u,mirroredGenerator:r,mapPercentToKeyframes:e,calculatedDuration:c,resolvedDuration:h,totalDuration:h*(n+1)-s}}onPostResolved(){let{autoplay:t=!0}=this.options;this.play(),"paused"!==this.pendingPlayState&&t?this.state=this.pendingPlayState:this.pause()}tick(t,e=!1){let{resolved:r}=this;if(!r){let{keyframes:t}=this.options;return{done:!0,value:t[t.length-1]}}let{finalKeyframe:i,generator:n,mirroredGenerator:s,mapPercentToKeyframes:o,keyframes:a,calculatedDuration:l,totalDuration:u,resolvedDuration:c}=r;if(null===this.startTime)return n.next(0);let{delay:h,repeat:d,repeatType:p,repeatDelay:f,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-u/this.speed,this.startTime)),e?this.currentTime=t:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(t-this.startTime)*this.speed;let g=this.currentTime-h*(this.speed>=0?1:-1),y=this.speed>=0?g<0:g>u;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=u);let v=this.currentTime,x=n;if(d){let t=Math.min(this.currentTime,u)/c,e=Math.floor(t),r=t%1;!r&&t>=1&&(r=1),1===r&&e--,(e=Math.min(e,d+1))%2&&("reverse"===p?(r=1-r,f&&(r-=f/c)):"mirror"===p&&(x=s)),v=Z(0,1,r)*c}let b=y?{done:!1,value:a[0]}:x.next(v);o&&(b.value=o(b.value));let{done:w}=b;y||null===l||(w=this.speed>=0?this.currentTime>=u:this.currentTime<=0);let P=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return P&&void 0!==i&&(b.value=eS(a,this.options,i)),m&&m(b.value),P&&this.finish(),b}get duration(){let{resolved:t}=this;return t?ef(t.calculatedDuration):0}get time(){return ef(this.currentTime)}set time(t){t=ep(t),this.currentTime=t,null!==this.holdTime||0===this.speed?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.speed)}get speed(){return this.playbackSpeed}set speed(t){let e=this.playbackSpeed!==t;this.playbackSpeed=t,e&&(this.time=ef(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved){this.pendingPlayState="running";return}if(this.isStopped)return;let{driver:t=rZ,onPlay:e}=this.options;this.driver||(this.driver=t(t=>this.tick(t))),e&&e();let r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime&&"finished"!==this.state||(this.startTime=r),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){var t;if(!this._resolved){this.pendingPlayState="paused";return}this.state="paused",this.holdTime=null!==(t=this.currentTime)&&void 0!==t?t:0}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";let{onComplete:t}=this.options;t&&t()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel()}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}}let r0=t=>Array.isArray(t)&&"number"==typeof t[0],r1=([t,e,r,i])=>`cubic-bezier(${t}, ${e}, ${r}, ${i})`,r3={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:r1([0,.65,.55,1]),circOut:r1([.55,0,1,.45]),backIn:r1([.31,.01,.66,-.59]),backOut:r1([.33,1.53,.69,.99])};function r5(t){return r4(t)||r3.easeOut}function r4(t){if(t)return r0(t)?r1(t):Array.isArray(t)?t.map(r5):r3[t]}let r2=ra(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));class r6 extends ru{constructor(t){super(t);let{name:e,motionValue:r,keyframes:i}=this.options;this.resolver=new ro(i,(t,e)=>this.onKeyframesResolved(t,e),e,r),this.resolver.scheduleResolve()}initPlayback(t,e){var r,i;let{duration:n=300,times:s,ease:o,type:a,motionValue:l,name:u}=this.options;if(!(null===(r=l.owner)||void 0===r?void 0:r.current))return!1;if("spring"===(i=this.options).type||!function t(e){return!!(!e||"string"==typeof e&&e in r3||r0(e)||Array.isArray(e)&&e.every(t))}(i.ease)){let{onComplete:e,onUpdate:r,motionValue:i,...l}=this.options,u=function(t,e){let r=new rQ({...e,keyframes:t,repeat:0,delay:0,isGenerator:!0}),i={done:!1,value:t[0]},n=[],s=0;for(;!i.done&&s<2e4;)n.push((i=r.sample(s)).value),s+=10;return{times:void 0,keyframes:n,duration:s-10,ease:"linear"}}(t,l);1===(t=u.keyframes).length&&(t[1]=t[0]),n=u.duration,s=u.times,o=u.ease,a="keyframes"}let c=function(t,e,r,{delay:i=0,duration:n=300,repeat:s=0,repeatType:o="loop",ease:a,times:l}={}){let u={[e]:r};l&&(u.offset=l);let c=r4(a);return Array.isArray(c)&&(u.easing=c),t.animate(u,{delay:i,duration:n,easing:Array.isArray(c)?"linear":c,fill:"both",iterations:s+1,direction:"reverse"===o?"alternate":"normal"})}(l.owner.current,u,t,{...this.options,duration:n,times:s,ease:o});return c.startTime=eA.now(),this.pendingTimeline?(c.timeline=this.pendingTimeline,this.pendingTimeline=void 0):c.onfinish=()=>{let{onComplete:r}=this.options;l.set(eS(t,this.options,e)),r&&r(),this.cancel(),this.resolveFinishedPromise()},{animation:c,duration:n,times:s,type:a,ease:o,keyframes:t}}get duration(){let{resolved:t}=this;if(!t)return 0;let{duration:e}=t;return ef(e)}get time(){let{resolved:t}=this;if(!t)return 0;let{animation:e}=t;return ef(e.currentTime||0)}set time(t){let{resolved:e}=this;if(!e)return;let{animation:r}=e;r.currentTime=ep(t)}get speed(){let{resolved:t}=this;if(!t)return 1;let{animation:e}=t;return e.playbackRate}set speed(t){let{resolved:e}=this;if(!e)return;let{animation:r}=e;r.playbackRate=t}get state(){let{resolved:t}=this;if(!t)return"idle";let{animation:e}=t;return e.playState}attachTimeline(t){if(this._resolved){let{resolved:e}=this;if(!e)return tU.Z;let{animation:r}=e;r.timeline=t,r.onfinish=null}else this.pendingTimeline=t;return tU.Z}play(){if(this.isStopped)return;let{resolved:t}=this;if(!t)return;let{animation:e}=t;"finished"===e.playState&&this.updateFinishedPromise(),e.play()}pause(){let{resolved:t}=this;if(!t)return;let{animation:e}=t;e.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;let{resolved:t}=this;if(!t)return;let{animation:e,keyframes:r,duration:i,type:n,ease:s,times:o}=t;if("idle"===e.playState||"finished"===e.playState)return;if(this.time){let{motionValue:t,onUpdate:e,onComplete:a,...l}=this.options,u=new rQ({...l,keyframes:r,duration:i,type:n,ease:s,times:o,isGenerator:!0}),c=ep(this.time);t.setWithVelocity(u.sample(c-10).value,u.sample(c).value,10)}let{onStop:a}=this.options;a&&a(),this.cancel()}complete(){let{resolved:t}=this;t&&t.animation.finish()}cancel(){let{resolved:t}=this;t&&t.animation.cancel()}static supports(t){let{motionValue:e,name:r,repeatDelay:i,repeatType:n,damping:s,type:o}=t;return r2()&&r&&t$.has(r)&&e&&e.owner&&e.owner.current instanceof HTMLElement&&!e.owner.getProps().onUpdate&&!i&&"mirror"!==n&&0!==s&&"inertia"!==o}}let r9=ra(()=>void 0!==window.ScrollTimeline);class r7{constructor(t){this.stop=()=>this.runAll("stop"),this.animations=t.filter(Boolean)}then(t,e){return Promise.all(this.animations).then(t).catch(e)}getAll(t){return this.animations[0][t]}setAll(t,e){for(let r=0;r<this.animations.length;r++)this.animations[r][t]=e}attachTimeline(t){let e=this.animations.map(e=>{if(!r9()||!e.attachTimeline)return e.pause(),function(t,e){let r;let i=()=>{let{currentTime:i}=e,n=(null===i?0:i.value)/100;r!==n&&t(n),r=n};return tW.update(i,!0),()=>tY(i)}(t=>{e.time=e.duration*t},t);e.attachTimeline(t)});return()=>{e.forEach((t,e)=>{t&&t(),this.animations[e].stop()})}}get time(){return this.getAll("time")}set time(t){this.setAll("time",t)}get speed(){return this.getAll("speed")}set speed(t){this.setAll("speed",t)}get duration(){let t=0;for(let e=0;e<this.animations.length;e++)t=Math.max(t,this.animations[e].duration);return t}runAll(t){this.animations.forEach(e=>e[t]())}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}let r8=(t,e,r,i={},n,s,o)=>a=>{let l=eb(i,t)||{},u=l.delay||i.delay||0,{elapsed:c=0}=i;c-=ep(u);let h={keyframes:Array.isArray(r)?r:[null,r],ease:"easeOut",velocity:e.getVelocity(),...l,delay:-c,onUpdate:t=>{e.set(t),l.onUpdate&&l.onUpdate(t)},onComplete:()=>{a(),l.onComplete&&l.onComplete(),o&&o()},onStop:o,name:t,motionValue:e,element:s?void 0:n};!function({when:t,delay:e,delayChildren:r,staggerChildren:i,staggerDirection:n,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:u,...c}){return!!Object.keys(c).length}(l)&&(h={...h,...ex(t,h)}),h.duration&&(h.duration=ep(h.duration)),h.repeatDelay&&(h.repeatDelay=ep(h.repeatDelay)),void 0!==h.from&&(h.keyframes[0]=h.from);let d=!1;if(!1!==h.type&&(0!==h.duration||h.repeatDelay)||(h.duration=0,0!==h.delay||(d=!0)),(ew.current||m.skipAnimations)&&(d=!0,h.duration=0,h.delay=0),d&&!s&&void 0!==e.get()){let t=eS(h.keyframes,l);if(void 0!==t)return tW.update(()=>{h.onUpdate(t),h.onComplete()}),new r7([])}return!s&&r6.supports(h)?new r6(h):new rQ(h)};class it{constructor(){this.subscriptions=[]}add(t){return tI(this.subscriptions,t),()=>tB(this.subscriptions,t)}notify(t,e,r){let i=this.subscriptions.length;if(i){if(1===i)this.subscriptions[0](t,e,r);else for(let n=0;n<i;n++){let i=this.subscriptions[n];i&&i(t,e,r)}}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}let ie=t=>!isNaN(parseFloat(t)),ir={current:void 0};class ii{constructor(t,e={}){this.version="11.3.7",this.canTrackVelocity=null,this.events={},this.updateAndNotify=(t,e=!0)=>{let r=eA.now();this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(t),this.current!==this.prev&&this.events.change&&this.events.change.notify(this.current),e&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.hasAnimated=!1,this.setCurrent(t),this.owner=e.owner}setCurrent(t){this.current=t,this.updatedAt=eA.now(),null===this.canTrackVelocity&&void 0!==t&&(this.canTrackVelocity=ie(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,e){this.events[t]||(this.events[t]=new it);let r=this.events[t].add(e);return"change"===t?()=>{r(),tW.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(let t in this.events)this.events[t].clear()}attach(t,e){this.passiveEffect=t,this.stopPassiveEffect=e}set(t,e=!0){e&&this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t,e)}setWithVelocity(t,e,r){this.set(e),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,e=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,e&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return ir.current&&ir.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){var t;let e=eA.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;let r=Math.min(this.updatedAt-this.prevUpdatedAt,30);return t=parseFloat(this.current)-parseFloat(this.prevFrameValue),r?1e3/r*t:0}start(t){return this.stop(),new Promise(e=>{this.hasAnimated=!0,this.animation=t(e),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function is(t,e){return new ii(t,e)}function io(t){return t.getProps()[f]}class ia extends ii{constructor(){super(...arguments),this.output=[],this.counts=new Map}add(t){let e=t_(t);if(!e)return;let r=this.counts.get(e)||0;this.counts.set(e,r+1),0===r&&(this.output.push(e),this.update());let i=!1;return()=>{if(i)return;i=!0;let t=this.counts.get(e)-1;this.counts.set(e,t),0===t&&(tB(this.output,e),this.update())}}update(){this.set(this.output.length?this.output.join(", "):"auto")}}function il(t,e){var r,i;if(!t.applyWillChange)return;let n=t.getValue("willChange");if(n||(null===(r=t.props.style)||void 0===r?void 0:r.willChange)||(n=new ia("auto"),t.addValue("willChange",n)),z(i=n)&&i.add)return n.add(e)}function iu(t,e,{delay:r=0,transitionOverride:i,type:n}={}){var s;let{transition:o=t.getDefaultTransition(),transitionEnd:a,...l}=e;i&&(o=i);let u=[],c=n&&t.animationState&&t.animationState.getState()[n];for(let e in l){let i=t.getValue(e,null!==(s=t.latestValues[e])&&void 0!==s?s:null),n=l[e];if(void 0===n||c&&function({protectedKeys:t,needsAnimating:e},r){let i=t.hasOwnProperty(r)&&!0!==e[r];return e[r]=!1,i}(c,e))continue;let a={delay:r,elapsed:0,...eb(o||{},e)},h=!1;if(window.HandoffAppearAnimations){let r=io(t);if(r){let t=window.HandoffAppearAnimations(r,e,i,tW);null!==t&&(a.elapsed=t,h=!0)}}i.start(r8(e,i,n,t.shouldReduceMotion&&I.has(e)?{type:!1}:a,t,h,il(t,e)));let d=i.animation;d&&u.push(d)}return a&&Promise.all(u).then(()=>{tW.update(()=>{a&&function(t,e){let{transitionEnd:r={},transition:i={},...n}=ed(t,e)||{};for(let e in n={...n,...r}){let r=tO(n[e]);t.hasValue(e)?t.getValue(e).set(r):t.addValue(e,is(r))}}(t,a)})}),u}function ic(t,e,r={}){var i;let n=ed(t,e,"exit"===r.type?null===(i=t.presenceContext)||void 0===i?void 0:i.custom:void 0),{transition:s=t.getDefaultTransition()||{}}=n||{};r.transitionOverride&&(s=r.transitionOverride);let o=n?()=>Promise.all(iu(t,n,r)):()=>Promise.resolve(),a=t.variantChildren&&t.variantChildren.size?(i=0)=>{let{delayChildren:n=0,staggerChildren:o,staggerDirection:a}=s;return function(t,e,r=0,i=0,n=1,s){let o=[],a=(t.variantChildren.size-1)*i,l=1===n?(t=0)=>t*i:(t=0)=>a-t*i;return Array.from(t.variantChildren).sort(ih).forEach((t,i)=>{t.notify("AnimationStart",e),o.push(ic(t,e,{...s,delay:r+l(i)}).then(()=>t.notify("AnimationComplete",e)))}),Promise.all(o)}(t,e,n+i,o,a,r)}:()=>Promise.resolve(),{when:l}=s;if(!l)return Promise.all([o(),a(r.delay)]);{let[t,e]="beforeChildren"===l?[o,a]:[a,o];return t().then(()=>e())}}function ih(t,e){return t.sortNodePosition(e)}let id=[...C].reverse(),ip=C.length;function im(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ig(){return{animate:im(!0),whileInView:im(),whileHover:im(),whileTap:im(),whileDrag:im(),whileFocus:im(),exit:im()}}class iy extends t7{constructor(t){super(t),t.animationState||(t.animationState=function(t){let e=e=>Promise.all(e.map(({animation:e,options:r})=>(function(t,e,r={}){let i;if(t.notify("AnimationStart",e),Array.isArray(e))i=Promise.all(e.map(e=>ic(t,e,r)));else if("string"==typeof e)i=ic(t,e,r);else{let n="function"==typeof e?ed(t,e,r.custom):e;i=Promise.all(iu(t,n,r))}return i.then(()=>{tW.postRender(()=>{t.notify("AnimationComplete",e)})})})(t,e,r))),r=ig(),i=!0,n=e=>(r,i)=>{var n;let s=ed(t,i,"exit"===e?null===(n=t.presenceContext)||void 0===n?void 0:n.custom:void 0);if(s){let{transition:t,transitionEnd:e,...i}=s;r={...r,...i,...e}}return r};function s(s){let o=t.getProps(),a=t.getVariantContext(!0)||{},l=[],u=new Set,c={},h=1/0;for(let e=0;e<ip;e++){var d;let p=id[e],f=r[p],m=void 0!==o[p]?o[p]:a[p],g=T(m),y=p===s?f.isActive:null;!1===y&&(h=e);let v=m===a[p]&&m!==o[p]&&g;if(v&&i&&t.manuallyAnimateOnMount&&(v=!1),f.protectedKeys={...c},!f.isActive&&null===y||!m&&!f.prevProp||A(m)||"boolean"==typeof m)continue;let x=(d=f.prevProp,("string"==typeof m?m!==d:!!Array.isArray(m)&&!eh(m,d))||p===s&&f.isActive&&!v&&g||e>h&&g),b=!1,w=Array.isArray(m)?m:[m],P=w.reduce(n(p),{});!1===y&&(P={});let{prevResolvedValues:S={}}=f,C={...S,...P},E=e=>{x=!0,u.has(e)&&(b=!0,u.delete(e)),f.needsAnimating[e]=!0;let r=t.getValue(e);r&&(r.liveStyle=!1)};for(let t in C){let e=P[t],r=S[t];if(!c.hasOwnProperty(t))(tR(e)&&tR(r)?eh(e,r):e===r)?void 0!==e&&u.has(t)?E(t):f.protectedKeys[t]=!0:null!=e?E(t):u.add(t)}f.prevProp=m,f.prevResolvedValues=P,f.isActive&&(c={...c,...P}),i&&t.blockInitialAnimation&&(x=!1),x&&(!v||b)&&l.push(...w.map(t=>({animation:t,options:{type:p}})))}if(u.size){let e={};u.forEach(r=>{let i=t.getBaseTarget(r),n=t.getValue(r);n&&(n.liveStyle=!0),e[r]=null!=i?i:null}),l.push({animation:e})}let p=!!l.length;return i&&(!1===o.initial||o.initial===o.animate)&&!t.manuallyAnimateOnMount&&(p=!1),i=!1,p?e(l):Promise.resolve()}return{animateChanges:s,setActive:function(e,i){var n;if(r[e].isActive===i)return Promise.resolve();null===(n=t.variantChildren)||void 0===n||n.forEach(t=>{var r;return null===(r=t.animationState)||void 0===r?void 0:r.setActive(e,i)}),r[e].isActive=i;let o=s(e);for(let t in r)r[t].protectedKeys={};return o},setAnimateFunction:function(r){e=r(t)},getState:()=>r,reset:()=>{r=ig(),i=!0}}}(t))}updateAnimationControlsSubscription(){let{animate:t}=this.node.getProps();A(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){let{animate:t}=this.node.getProps(),{animate:e}=this.node.prevProps||{};t!==e&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),null===(t=this.unmountControls)||void 0===t||t.call(this)}}let iv=0;class ix extends t7{constructor(){super(...arguments),this.id=iv++}update(){if(!this.node.presenceContext)return;let{isPresent:t,onExitComplete:e}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;let i=this.node.animationState.setActive("exit",!t);e&&!t&&i.then(()=>e(this.id))}mount(){let{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}let ib=(t,e)=>Math.abs(t-e);class iw{constructor(t,e,{transformPagePoint:r,contextWindow:i,dragSnapToOrigin:n=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{var t,e;if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let r=iT(this.lastMoveEventInfo,this.history),i=null!==this.startEvent,n=(t=r.offset,e={x:0,y:0},Math.sqrt(ib(t.x,e.x)**2+ib(t.y,e.y)**2)>=3);if(!i&&!n)return;let{point:s}=r,{timestamp:o}=tX;this.history.push({...s,timestamp:o});let{onStart:a,onMove:l}=this.handlers;i||(a&&a(this.lastMoveEvent,r),this.startEvent=this.lastMoveEvent),l&&l(this.lastMoveEvent,r)},this.handlePointerMove=(t,e)=>{this.lastMoveEvent=t,this.lastMoveEventInfo=iP(e,this.transformPagePoint),tW.update(this.updatePoint,!0)},this.handlePointerUp=(t,e)=>{this.end();let{onEnd:r,onSessionEnd:i,resumeAnimation:n}=this.handlers;if(this.dragSnapToOrigin&&n&&n(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;let s=iT("pointercancel"===t.type?this.lastMoveEventInfo:iP(e,this.transformPagePoint),this.history);this.startEvent&&r&&r(t,s),i&&i(t,s)},!tq(t))return;this.dragSnapToOrigin=n,this.handlers=e,this.transformPagePoint=r,this.contextWindow=i||window;let s=iP(tJ(t),this.transformPagePoint),{point:o}=s,{timestamp:a}=tX;this.history=[{...o,timestamp:a}];let{onSessionStart:l}=e;l&&l(t,iT(s,this.history)),this.removeListeners=t3(t0(this.contextWindow,"pointermove",this.handlePointerMove),t0(this.contextWindow,"pointerup",this.handlePointerUp),t0(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),tY(this.updatePoint)}}function iP(t,e){return e?{point:e(t.point)}:t}function iS(t,e){return{x:t.x-e.x,y:t.y-e.y}}function iT({point:t},e){return{point:t,delta:iS(t,iA(e)),offset:iS(t,e[0]),velocity:function(t,e){if(t.length<2)return{x:0,y:0};let r=t.length-1,i=null,n=iA(t);for(;r>=0&&(i=t[r],!(n.timestamp-i.timestamp>ep(.1)));)r--;if(!i)return{x:0,y:0};let s=ef(n.timestamp-i.timestamp);if(0===s)return{x:0,y:0};let o={x:(n.x-i.x)/s,y:(n.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}(e,0)}}function iA(t){return t[t.length-1]}function iC(t){return t.max-t.min}function iE(t,e,r,i=.5){t.origin=i,t.originPoint=rD(e.min,e.max,t.origin),t.scale=iC(r)/iC(e),t.translate=rD(r.min,r.max,t.origin)-t.originPoint,(t.scale>=.9999&&t.scale<=1.0001||isNaN(t.scale))&&(t.scale=1),(t.translate>=-.01&&t.translate<=.01||isNaN(t.translate))&&(t.translate=0)}function ik(t,e,r,i){iE(t.x,e.x,r.x,i?i.originX:void 0),iE(t.y,e.y,r.y,i?i.originY:void 0)}function iM(t,e,r){t.min=r.min+e.min,t.max=t.min+iC(e)}function iF(t,e,r){t.min=e.min-r.min,t.max=t.min+iC(e)}function iV(t,e,r){iF(t.x,e.x,r.x),iF(t.y,e.y,r.y)}function ij(t,e,r){return{min:void 0!==e?t.min+e:void 0,max:void 0!==r?t.max+r-(t.max-t.min):void 0}}function iR(t,e){let r=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([r,i]=[i,r]),{min:r,max:i}}function iD(t,e,r){return{min:iO(t,e),max:iO(t,r)}}function iO(t,e){return"number"==typeof t?t:t[e]||0}let iL=()=>({translate:0,scale:1,origin:0,originPoint:0}),i$=()=>({x:iL(),y:iL()}),i_=()=>({min:0,max:0}),iI=()=>({x:i_(),y:i_()});function iB(t){return[t("x"),t("y")]}function iz({top:t,left:e,right:r,bottom:i}){return{x:{min:e,max:r},y:{min:t,max:i}}}function iN(t){return void 0===t||1===t}function iU({scale:t,scaleX:e,scaleY:r}){return!iN(t)||!iN(e)||!iN(r)}function iW(t){return iU(t)||iY(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function iY(t){var e,r;return(e=t.x)&&"0%"!==e||(r=t.y)&&"0%"!==r}function iX(t,e,r,i,n){return void 0!==n&&(t=i+n*(t-i)),i+r*(t-i)+e}function iG(t,e=0,r=1,i,n){t.min=iX(t.min,e,r,i,n),t.max=iX(t.max,e,r,i,n)}function iH(t,{x:e,y:r}){iG(t.x,e.translate,e.scale,e.originPoint),iG(t.y,r.translate,r.scale,r.originPoint)}function iK(t){return Number.isInteger(t)?t:t>1.0000000000001||t<.999999999999?t:1}function iZ(t,e){t.min=t.min+e,t.max=t.max+e}function iq(t,e,r,i,n=.5){let s=rD(t.min,t.max,n);iG(t,e,r,s,i)}function iJ(t,e){iq(t.x,e.x,e.scaleX,e.scale,e.originX),iq(t.y,e.y,e.scaleY,e.scale,e.originY)}function iQ(t,e){return iz(function(t,e){if(!e)return t;let r=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:r.y,left:r.x,bottom:i.y,right:i.x}}(t.getBoundingClientRect(),e))}let i0=({current:t})=>t?t.ownerDocument.defaultView:null,i1=new WeakMap;class i3{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=iI(),this.visualElement=t}start(t,{snapToCursor:e=!1}={}){let{presenceContext:r}=this.visualElement;if(r&&!1===r.isPresent)return;let{dragSnapToOrigin:i}=this.getProps();this.panSession=new iw(t,{onSessionStart:t=>{let{dragSnapToOrigin:r}=this.getProps();r?this.pauseAnimation():this.stopAnimation(),e&&this.snapToCursor(tJ(t,"page").point)},onStart:(t,e)=>{var r;let{drag:i,dragPropagation:n,onDragStart:s}=this.getProps();if(i&&!n&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=t6(i),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),iB(t=>{let e=this.getAxisMotionValue(t).get()||0;if(ta.test(e)){let{projection:r}=this.visualElement;if(r&&r.layout){let i=r.layout.layoutBox[t];if(i){let t=iC(i);e=parseFloat(e)/100*t}}}this.originPoint[t]=e}),s&&tW.postRender(()=>s(t,e)),null===(r=this.removeWillChange)||void 0===r||r.call(this),this.removeWillChange=il(this.visualElement,"transform");let{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(t,e)=>{let{dragPropagation:r,dragDirectionLock:i,onDirectionLock:n,onDrag:s}=this.getProps();if(!r&&!this.openGlobalLock)return;let{offset:o}=e;if(i&&null===this.currentDirection){this.currentDirection=function(t,e=10){let r=null;return Math.abs(t.y)>e?r="y":Math.abs(t.x)>e&&(r="x"),r}(o),null!==this.currentDirection&&n&&n(this.currentDirection);return}this.updateAxis("x",e.point,o),this.updateAxis("y",e.point,o),this.visualElement.render(),s&&s(t,e)},onSessionEnd:(t,e)=>this.stop(t,e),resumeAnimation:()=>iB(t=>{var e;return"paused"===this.getAnimationState(t)&&(null===(e=this.getAxisMotionValue(t).animation)||void 0===e?void 0:e.play())})},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:i,contextWindow:i0(this.visualElement)})}stop(t,e){var r;null===(r=this.removeWillChange)||void 0===r||r.call(this);let i=this.isDragging;if(this.cancel(),!i)return;let{velocity:n}=e;this.startAnimation(n);let{onDragEnd:s}=this.getProps();s&&tW.postRender(()=>s(t,e))}cancel(){this.isDragging=!1;let{projection:t,animationState:e}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;let{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),e&&e.setActive("whileDrag",!1)}updateAxis(t,e,r){let{drag:i}=this.getProps();if(!r||!i5(t,i,this.currentDirection))return;let n=this.getAxisMotionValue(t),s=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(s=function(t,{min:e,max:r},i){return void 0!==e&&t<e?t=i?rD(e,t,i.min):Math.max(t,e):void 0!==r&&t>r&&(t=i?rD(r,t,i.max):Math.min(t,r)),t}(s,this.constraints[t],this.elastic[t])),n.set(s)}resolveConstraints(){var t;let{dragConstraints:e,dragElastic:r}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):null===(t=this.visualElement.projection)||void 0===t?void 0:t.layout,n=this.constraints;e&&b(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=function(t,{top:e,left:r,bottom:i,right:n}){return{x:ij(t.x,r,n),y:ij(t.y,e,i)}}(i.layoutBox,e):this.constraints=!1,this.elastic=function(t=.35){return!1===t?t=0:!0===t&&(t=.35),{x:iD(t,"left","right"),y:iD(t,"top","bottom")}}(r),n!==this.constraints&&i&&this.constraints&&!this.hasMutatedConstraints&&iB(t=>{!1!==this.constraints&&this.getAxisMotionValue(t)&&(this.constraints[t]=function(t,e){let r={};return void 0!==e.min&&(r.min=e.min-t.min),void 0!==e.max&&(r.max=e.max-t.min),r}(i.layoutBox[t],this.constraints[t]))})}resolveRefConstraints(){var t;let{dragConstraints:e,onMeasureDragConstraints:r}=this.getProps();if(!e||!b(e))return!1;let i=e.current;(0,eE.k)(null!==i,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");let{projection:n}=this.visualElement;if(!n||!n.layout)return!1;let s=function(t,e,r){let i=iQ(t,r),{scroll:n}=e;return n&&(iZ(i.x,n.offset.x),iZ(i.y,n.offset.y)),i}(i,n.root,this.visualElement.getTransformPagePoint()),o={x:iR((t=n.layout.layoutBox).x,s.x),y:iR(t.y,s.y)};if(r){let t=r(function({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}(o));this.hasMutatedConstraints=!!t,t&&(o=iz(t))}return o}startAnimation(t){let{drag:e,dragMomentum:r,dragElastic:i,dragTransition:n,dragSnapToOrigin:s,onDragTransitionEnd:o}=this.getProps(),a=this.constraints||{};return Promise.all(iB(o=>{if(!i5(o,e,this.currentDirection))return;let l=a&&a[o]||{};s&&(l={min:0,max:0});let u={type:"inertia",velocity:r?t[o]:0,bounceStiffness:i?200:1e6,bounceDamping:i?40:1e7,timeConstant:750,restDelta:1,restSpeed:10,...n,...l};return this.startAxisValueAnimation(o,u)})).then(o)}startAxisValueAnimation(t,e){let r=this.getAxisMotionValue(t);return r.start(r8(t,r,0,e,this.visualElement,!1,il(this.visualElement,t)))}stopAnimation(){iB(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){iB(t=>{var e;return null===(e=this.getAxisMotionValue(t).animation)||void 0===e?void 0:e.pause()})}getAnimationState(t){var e;return null===(e=this.getAxisMotionValue(t).animation)||void 0===e?void 0:e.state}getAxisMotionValue(t){let e=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps();return r[e]||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){iB(e=>{let{drag:r}=this.getProps();if(!i5(e,r,this.currentDirection))return;let{projection:i}=this.visualElement,n=this.getAxisMotionValue(e);if(i&&i.layout){let{min:r,max:s}=i.layout.layoutBox[e];n.set(t[e]-rD(r,s,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;let{drag:t,dragConstraints:e}=this.getProps(),{projection:r}=this.visualElement;if(!b(e)||!r||!this.constraints)return;this.stopAnimation();let i={x:0,y:0};iB(t=>{let e=this.getAxisMotionValue(t);if(e&&!1!==this.constraints){let r=e.get();i[t]=function(t,e){let r=.5,i=iC(t),n=iC(e);return n>i?r=rR(e.min,e.max-i,t.min):i>n&&(r=rR(t.min,t.max-n,e.min)),Z(0,1,r)}({min:r,max:r},this.constraints[t])}});let{transformTemplate:n}=this.visualElement.getProps();this.visualElement.current.style.transform=n?n({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.resolveConstraints(),iB(e=>{if(!i5(e,t,null))return;let r=this.getAxisMotionValue(e),{min:n,max:s}=this.constraints[e];r.set(rD(n,s,i[e]))})}addListeners(){if(!this.visualElement.current)return;i1.set(this.visualElement,this);let t=t0(this.visualElement.current,"pointerdown",t=>{let{drag:e,dragListener:r=!0}=this.getProps();e&&r&&this.start(t)}),e=()=>{let{dragConstraints:t}=this.getProps();b(t)&&t.current&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,i=r.addEventListener("measure",e);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),tW.read(e);let n=tZ(window,"resize",()=>this.scalePositionWithinConstraints()),s=r.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e})=>{this.isDragging&&e&&(iB(e=>{let r=this.getAxisMotionValue(e);r&&(this.originPoint[e]+=t[e].translate,r.set(r.get()+t[e].translate))}),this.visualElement.render())});return()=>{n(),t(),i(),s&&s()}}getProps(){let t=this.visualElement.getProps(),{drag:e=!1,dragDirectionLock:r=!1,dragPropagation:i=!1,dragConstraints:n=!1,dragElastic:s=.35,dragMomentum:o=!0}=t;return{...t,drag:e,dragDirectionLock:r,dragPropagation:i,dragConstraints:n,dragElastic:s,dragMomentum:o}}}function i5(t,e,r){return(!0===e||e===t)&&(null===r||r===t)}class i4 extends t7{constructor(t){super(t),this.removeGroupControls=tU.Z,this.removeListeners=tU.Z,this.controls=new i3(t)}mount(){let{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||tU.Z}unmount(){this.removeGroupControls(),this.removeListeners()}}let i2=t=>(e,r)=>{t&&tW.postRender(()=>t(e,r))};class i6 extends t7{constructor(){super(...arguments),this.removePointerDownListener=tU.Z}onPointerDown(t){this.session=new iw(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:i0(this.node)})}createPanHandlers(){let{onPanSessionStart:t,onPanStart:e,onPan:r,onPanEnd:i}=this.node.getProps();return{onSessionStart:i2(t),onStart:i2(e),onMove:r,onEnd:(t,e)=>{delete this.session,i&&tW.postRender(()=>i(t,e))}}}mount(){this.removePointerDownListener=t0(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let i9={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function i7(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}let i8={correct:(t,e)=>{if(!e.target)return t;if("string"==typeof t){if(!tl.test(t))return t;t=parseFloat(t)}let r=i7(t,e.target.x),i=i7(t,e.target.y);return`${r}% ${i}%`}};class nt extends o.Component{componentDidMount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:r,layoutId:i}=this.props,{projection:n}=t;Object.assign($,nr),n&&(e.group&&e.group.add(n),r&&r.register&&i&&r.register(n),n.root.didUpdate(),n.addEventListener("animationComplete",()=>{this.safeToRemove()}),n.setOptions({...n.options,onExitComplete:()=>this.safeToRemove()})),i9.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){let{layoutDependency:e,visualElement:r,drag:i,isPresent:n}=this.props,s=r.projection;return s&&(s.isPresent=n,i||t.layoutDependency!==e||void 0===e?s.willUpdate():this.safeToRemove(),t.isPresent===n||(n?s.promote():s.relegate()||tW.postRender(()=>{let t=s.getStack();t&&t.members.length||this.safeToRemove()}))),null}componentDidUpdate(){let{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),v.postRender(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){let{visualElement:t,layoutGroup:e,switchLayoutGroup:r}=this.props,{projection:i}=t;i&&(i.scheduleCheckAfterUnmount(),e&&e.group&&e.group.remove(i),r&&r.deregister&&r.deregister(i))}safeToRemove(){let{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ne(t){let[e,r]=function(){let t=(0,o.useContext)(u);if(null===t)return[!0,null];let{isPresent:e,onExitComplete:r,register:i}=t,n=(0,o.useId)();return(0,o.useEffect)(()=>i(n),[]),!e&&r?[!1,()=>r&&r(n)]:[!0]}(),i=(0,o.useContext)(R);return(0,s.jsx)(nt,{...t,layoutGroup:i,switchLayoutGroup:(0,o.useContext)(w),isPresent:e,safeToRemove:r})}let nr={borderRadius:{...i8,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:i8,borderTopRightRadius:i8,borderBottomLeftRadius:i8,borderBottomRightRadius:i8,boxShadow:{correct:(t,{treeScale:e,projectionDelta:r})=>{let i=e9.parse(t);if(i.length>5)return t;let n=e9.createTransformer(t),s="number"!=typeof i[0]?1:0,o=r.x.scale*e.x,a=r.y.scale*e.y;i[0+s]/=o,i[1+s]/=a;let l=rD(o,a,.5);return"number"==typeof i[2+s]&&(i[2+s]/=l),"number"==typeof i[3+s]&&(i[3+s]/=l),n(i)}}},ni=["TopLeft","TopRight","BottomLeft","BottomRight"],nn=ni.length,ns=t=>"string"==typeof t?parseFloat(t):t,no=t=>"number"==typeof t||tl.test(t);function na(t,e){return void 0!==t[e]?t[e]:t.borderRadius}let nl=nc(0,.5,rC),nu=nc(.5,.95,tU.Z);function nc(t,e,r){return i=>i<t?0:i>e?1:r(rR(t,e,i))}function nh(t,e){t.min=e.min,t.max=e.max}function nd(t,e){nh(t.x,e.x),nh(t.y,e.y)}function np(t,e,r,i,n){return t-=e,t=i+1/r*(t-i),void 0!==n&&(t=i+1/n*(t-i)),t}function nf(t,e,[r,i,n],s,o){!function(t,e=0,r=1,i=.5,n,s=t,o=t){if(ta.test(e)&&(e=parseFloat(e),e=rD(o.min,o.max,e/100)-o.min),"number"!=typeof e)return;let a=rD(s.min,s.max,i);t===s&&(a-=e),t.min=np(t.min,e,r,a,n),t.max=np(t.max,e,r,a,n)}(t,e[r],e[i],e[n],e.scale,s,o)}let nm=["x","scaleX","originX"],ng=["y","scaleY","originY"];function ny(t,e,r,i){nf(t.x,e,nm,r?r.x:void 0,i?i.x:void 0),nf(t.y,e,ng,r?r.y:void 0,i?i.y:void 0)}function nv(t){return 0===t.translate&&1===t.scale}function nx(t){return nv(t.x)&&nv(t.y)}function nb(t,e){return Math.round(t.x.min)===Math.round(e.x.min)&&Math.round(t.x.max)===Math.round(e.x.max)&&Math.round(t.y.min)===Math.round(e.y.min)&&Math.round(t.y.max)===Math.round(e.y.max)}function nw(t){return iC(t.x)/iC(t.y)}class nP{constructor(){this.members=[]}add(t){tI(this.members,t),t.scheduleRender()}remove(t){if(tB(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){let t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(t){let e;let r=this.members.findIndex(e=>t===e);if(0===r)return!1;for(let t=r;t>=0;t--){let r=this.members[t];if(!1!==r.isPresent){e=r;break}}return!!e&&(this.promote(e),!0)}promote(t,e){let r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.instance&&r.scheduleRender(),t.scheduleRender(),t.resumeFrom=r,e&&(t.resumeFrom.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);let{crossfade:i}=t.options;!1===i&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{let{options:e,resumingFrom:r}=t;e.onExitComplete&&e.onExitComplete(),r&&r.options.onExitComplete&&r.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function nS(t,e,r){let i="",n=t.x.translate/e.x,s=t.y.translate/e.y,o=(null==r?void 0:r.z)||0;if((n||s||o)&&(i=`translate3d(${n}px, ${s}px, ${o}px) `),(1!==e.x||1!==e.y)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),r){let{transformPerspective:t,rotate:e,rotateX:n,rotateY:s,skewX:o,skewY:a}=r;t&&(i=`perspective(${t}px) ${i}`),e&&(i+=`rotate(${e}deg) `),n&&(i+=`rotateX(${n}deg) `),s&&(i+=`rotateY(${s}deg) `),o&&(i+=`skewX(${o}deg) `),a&&(i+=`skewY(${a}deg) `)}let a=t.x.scale*e.x,l=t.y.scale*e.y;return(1!==a||1!==l)&&(i+=`scale(${a}, ${l})`),i||"none"}let nT=(t,e)=>t.depth-e.depth;class nA{constructor(){this.children=[],this.isDirty=!1}add(t){tI(this.children,t),this.isDirty=!0}remove(t){tB(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(nT),this.isDirty=!1,this.children.forEach(t)}}let nC=["","X","Y","Z"],nE={visibility:"hidden"},nk=0,nM={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function nF(t,e,r,i){let{latestValues:n}=e;n[t]&&(r[t]=n[t],e.setStaticValue(t,0),i&&(i[t]=0))}function nV({attachResizeListener:t,defaultParent:e,measureScroll:r,checkIsScrollRoot:i,resetTransform:n}){return class{constructor(t={},r=null==e?void 0:e()){this.id=nk++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,nM.totalNodes=nM.resolvedTargetDeltas=nM.recalculatedProjection=0,this.nodes.forEach(nD),this.nodes.forEach(nz),this.nodes.forEach(nN),this.nodes.forEach(nO),window.MotionDebug&&window.MotionDebug.record(nM)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=t,this.root=r?r.root||r:this,this.path=r?[...r.path,r]:[],this.parent=r,this.depth=r?r.depth+1:0;for(let t=0;t<this.path.length;t++)this.path[t].shouldResetTransform=!0;this.root===this&&(this.nodes=new nA)}addEventListener(t,e){return this.eventHandlers.has(t)||this.eventHandlers.set(t,new it),this.eventHandlers.get(t).add(e)}notifyListeners(t,...e){let r=this.eventHandlers.get(t);r&&r.notify(...e)}hasListeners(t){return this.eventHandlers.has(t)}mount(e,r=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=e instanceof SVGElement&&"svg"!==e.tagName,this.instance=e;let{layoutId:i,layout:n,visualElement:s}=this.options;if(s&&!s.current&&s.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),r&&(n||i)&&(this.isLayoutDirty=!0),t){let r;let i=()=>this.root.updateBlockedByResize=!1;t(e,()=>{this.root.updateBlockedByResize=!0,r&&r(),r=function(t,e){let r=eA.now(),i=({timestamp:e})=>{let n=e-r;n>=250&&(tY(i),t(n-250))};return tW.read(i,!0),()=>tY(i)}(i,0),i9.hasAnimatedSinceResize&&(i9.hasAnimatedSinceResize=!1,this.nodes.forEach(nB))})}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&s&&(i||n)&&this.addEventListener("didUpdate",({delta:t,hasLayoutChanged:e,hasRelativeTargetChanged:r,layout:i})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}let n=this.options.transition||s.getDefaultTransition()||nH,{onLayoutAnimationStart:o,onLayoutAnimationComplete:a}=s.getProps(),l=!this.targetLayout||!nb(this.targetLayout,i)||r,u=!e&&r;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||u||e&&(l||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);let e={...eb(n,"layout"),onPlay:o,onComplete:a};(s.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else e||nB(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);let t=this.getStack();t&&t.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,tY(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){!this.isUpdateBlocked()&&(this.isUpdating=!0,this.nodes&&this.nodes.forEach(nU),this.animationId++)}getTransformTemplate(){let{visualElement:t}=this.options;return t&&t.getProps().transformTemplate}willUpdate(t=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.HandoffCancelAllAnimations&&function t(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return!1;let{visualElement:r}=e.options;return!!r&&(!!io(r)||!!e.parent&&!e.parent.hasCheckedOptimisedAppear&&t(e.parent))}(this)&&window.HandoffCancelAllAnimations(),this.root.isUpdating||this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let t=0;t<this.path.length;t++){let e=this.path[t];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}let{layoutId:e,layout:r}=this.options;if(void 0===e&&!r)return;let i=this.getTransformTemplate();this.prevTransformTemplateValue=i?i(this.latestValues,""):void 0,this.updateSnapshot(),t&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(n$);return}this.isUpdating||this.nodes.forEach(n_),this.isUpdating=!1,this.nodes.forEach(nI),this.nodes.forEach(nj),this.nodes.forEach(nR),this.clearAllSnapshots();let t=eA.now();tX.delta=Z(0,1e3/60,t-tX.timestamp),tX.timestamp=t,tX.isProcessing=!0,tG.update.process(tX),tG.preRender.process(tX),tG.render.process(tX),tX.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,v.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(nL),this.sharedNodes.forEach(nW)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,tW.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){tW.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let t=0;t<this.path.length;t++)this.path[t].updateScroll();let t=this.layout;this.layout=this.measure(!1),this.layoutCorrected=iI(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);let{visualElement:e}=this.options;e&&e.notify("LayoutMeasure",this.layout.layoutBox,t?t.layoutBox:void 0)}updateScroll(t="measure"){let e=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===t&&(e=!1),e&&(this.scroll={animationId:this.root.animationId,phase:t,isRoot:i(this.instance),offset:r(this.instance)})}resetTransform(){if(!n)return;let t=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,e=this.projectionDelta&&!nx(this.projectionDelta),r=this.getTransformTemplate(),i=r?r(this.latestValues,""):void 0,s=i!==this.prevTransformTemplateValue;t&&(e||iW(this.latestValues)||s)&&(n(this.instance,i),this.shouldResetTransform=!1,this.scheduleRender())}measure(t=!0){var e;let r=this.measurePageBox(),i=this.removeElementScroll(r);return t&&(i=this.removeTransform(i)),nq((e=i).x),nq(e.y),{animationId:this.root.animationId,measuredBox:r,layoutBox:i,latestValues:{},source:this.id}}measurePageBox(){let{visualElement:t}=this.options;if(!t)return iI();let e=t.measureViewportBox(),{scroll:r}=this.root;return r&&(iZ(e.x,r.offset.x),iZ(e.y,r.offset.y)),e}removeElementScroll(t){let e=iI();nd(e,t);for(let r=0;r<this.path.length;r++){let i=this.path[r],{scroll:n,options:s}=i;if(i!==this.root&&n&&s.layoutScroll){if(n.isRoot){nd(e,t);let{scroll:r}=this.root;r&&(iZ(e.x,-r.offset.x),iZ(e.y,-r.offset.y))}iZ(e.x,n.offset.x),iZ(e.y,n.offset.y)}}return e}applyTransform(t,e=!1){let r=iI();nd(r,t);for(let t=0;t<this.path.length;t++){let i=this.path[t];!e&&i.options.layoutScroll&&i.scroll&&i!==i.root&&iJ(r,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),iW(i.latestValues)&&iJ(r,i.latestValues)}return iW(this.latestValues)&&iJ(r,this.latestValues),r}removeTransform(t){let e=iI();nd(e,t);for(let t=0;t<this.path.length;t++){let r=this.path[t];if(!r.instance||!iW(r.latestValues))continue;iU(r.latestValues)&&r.updateSnapshot();let i=iI();nd(i,r.measurePageBox()),ny(e,r.latestValues,r.snapshot?r.snapshot.layoutBox:void 0,i)}return iW(this.latestValues)&&ny(e,this.latestValues),e}setTargetDelta(t){this.targetDelta=t,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(t){this.options={...this.options,...t,crossfade:void 0===t.crossfade||t.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==tX.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(t=!1){var e,r,i,n;let s=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=s.isSharedProjectionDirty);let o=!!this.resumingFrom||this!==s;if(!(t||o&&this.isSharedProjectionDirty||this.isProjectionDirty||(null===(e=this.parent)||void 0===e?void 0:e.isProjectionDirty)||this.attemptToResolveRelativeTarget))return;let{layout:a,layoutId:l}=this.options;if(this.layout&&(a||l)){if(this.resolvedRelativeTargetAt=tX.timestamp,!this.targetDelta&&!this.relativeTarget){let t=this.getClosestProjectingParent();t&&t.layout&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=iI(),this.relativeTargetOrigin=iI(),iV(this.relativeTargetOrigin,this.layout.layoutBox,t.layout.layoutBox),nd(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){if((this.target||(this.target=iI(),this.targetWithTransforms=iI()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target)?(this.forceRelativeParentToResolveTarget(),r=this.target,i=this.relativeTarget,n=this.relativeParent.target,iM(r.x,i.x,n.x),iM(r.y,i.y,n.y)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):nd(this.target,this.layout.layoutBox),iH(this.target,this.targetDelta)):nd(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;let t=this.getClosestProjectingParent();t&&!!t.resumingFrom==!!this.resumingFrom&&!t.options.layoutScroll&&t.target&&1!==this.animationProgress?(this.relativeParent=t,this.forceRelativeParentToResolveTarget(),this.relativeTarget=iI(),this.relativeTargetOrigin=iI(),iV(this.relativeTargetOrigin,this.target,t.target),nd(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}nM.resolvedTargetDeltas++}}}getClosestProjectingParent(){return!this.parent||iU(this.parent.latestValues)||iY(this.parent.latestValues)?void 0:this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var t;let e=this.getLead(),r=!!this.resumingFrom||this!==e,i=!0;if((this.isProjectionDirty||(null===(t=this.parent)||void 0===t?void 0:t.isProjectionDirty))&&(i=!1),r&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(i=!1),this.resolvedRelativeTargetAt===tX.timestamp&&(i=!1),i)return;let{layout:n,layoutId:s}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(n||s))return;nd(this.layoutCorrected,this.layout.layoutBox);let o=this.treeScale.x,a=this.treeScale.y;!function(t,e,r,i=!1){let n,s;let o=r.length;if(o){e.x=e.y=1;for(let a=0;a<o;a++){s=(n=r[a]).projectionDelta;let{visualElement:o}=n.options;(!o||!o.props.style||"contents"!==o.props.style.display)&&(i&&n.options.layoutScroll&&n.scroll&&n!==n.root&&iJ(t,{x:-n.scroll.offset.x,y:-n.scroll.offset.y}),s&&(e.x*=s.x.scale,e.y*=s.y.scale,iH(t,s)),i&&iW(n.latestValues)&&iJ(t,n.latestValues))}e.x=iK(e.x),e.y=iK(e.y)}}(this.layoutCorrected,this.treeScale,this.path,r),e.layout&&!e.target&&(1!==this.treeScale.x||1!==this.treeScale.y)&&(e.target=e.layout.layoutBox,e.targetWithTransforms=iI());let{target:l}=e;if(!l){this.projectionTransform&&(this.projectionDelta=i$(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=i$(),this.projectionDeltaWithTransform=i$());let u=this.projectionTransform;ik(this.projectionDelta,this.layoutCorrected,l,this.latestValues),this.projectionTransform=nS(this.projectionDelta,this.treeScale),(this.projectionTransform!==u||this.treeScale.x!==o||this.treeScale.y!==a)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",l)),nM.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(t=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),t){let t=this.getStack();t&&t.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(t,e=!1){let r;let i=this.snapshot,n=i?i.latestValues:{},s={...this.latestValues},o=i$();this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!e;let a=iI(),l=(i?i.source:void 0)!==(this.layout?this.layout.source:void 0),u=this.getStack(),c=!u||u.members.length<=1,h=!!(l&&!c&&!0===this.options.crossfade&&!this.path.some(nG));this.animationProgress=0,this.mixTargetDelta=e=>{let i=e/1e3;if(nY(o.x,t.x,i),nY(o.y,t.y,i),this.setTargetDelta(o),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout){var u,d,p,f;iV(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),p=this.relativeTarget,f=this.relativeTargetOrigin,nX(p.x,f.x,a.x,i),nX(p.y,f.y,a.y,i),r&&(u=this.relativeTarget,d=r,u.x.min===d.x.min&&u.x.max===d.x.max&&u.y.min===d.y.min&&u.y.max===d.y.max)&&(this.isProjectionDirty=!1),r||(r=iI()),nd(r,this.relativeTarget)}l&&(this.animationValues=s,function(t,e,r,i,n,s){n?(t.opacity=rD(0,void 0!==r.opacity?r.opacity:1,nl(i)),t.opacityExit=rD(void 0!==e.opacity?e.opacity:1,0,nu(i))):s&&(t.opacity=rD(void 0!==e.opacity?e.opacity:1,void 0!==r.opacity?r.opacity:1,i));for(let n=0;n<nn;n++){let s=`border${ni[n]}Radius`,o=na(e,s),a=na(r,s);(void 0!==o||void 0!==a)&&(o||(o=0),a||(a=0),0===o||0===a||no(o)===no(a)?(t[s]=Math.max(rD(ns(o),ns(a),i),0),(ta.test(a)||ta.test(o))&&(t[s]+="%")):t[s]=a)}(e.rotate||r.rotate)&&(t.rotate=rD(e.rotate||0,r.rotate||0,i))}(s,n,this.latestValues,i,h,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=i},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(t){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(tY(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=tW.update(()=>{i9.hasAnimatedSinceResize=!0,this.currentAnimation=function(t,e,r){let i=z(0)?0:is(0);return i.start(r8("",i,1e3,r)),i.animation}(0,0,{...t,onUpdate:e=>{this.mixTargetDelta(e),t.onUpdate&&t.onUpdate(e)},onComplete:()=>{t.onComplete&&t.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);let t=this.getStack();t&&t.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){let t=this.getLead(),{targetWithTransforms:e,target:r,layout:i,latestValues:n}=t;if(e&&r&&i){if(this!==t&&this.layout&&i&&nJ(this.options.animationType,this.layout.layoutBox,i.layoutBox)){r=this.target||iI();let e=iC(this.layout.layoutBox.x);r.x.min=t.target.x.min,r.x.max=r.x.min+e;let i=iC(this.layout.layoutBox.y);r.y.min=t.target.y.min,r.y.max=r.y.min+i}nd(e,r),iJ(e,n),ik(this.projectionDeltaWithTransform,this.layoutCorrected,e,n)}}registerSharedNode(t,e){this.sharedNodes.has(t)||this.sharedNodes.set(t,new nP),this.sharedNodes.get(t).add(e);let r=e.options.initialPromotionConfig;e.promote({transition:r?r.transition:void 0,preserveFollowOpacity:r&&r.shouldPreserveFollowOpacity?r.shouldPreserveFollowOpacity(e):void 0})}isLead(){let t=this.getStack();return!t||t.lead===this}getLead(){var t;let{layoutId:e}=this.options;return e&&(null===(t=this.getStack())||void 0===t?void 0:t.lead)||this}getPrevLead(){var t;let{layoutId:e}=this.options;return e?null===(t=this.getStack())||void 0===t?void 0:t.prevLead:void 0}getStack(){let{layoutId:t}=this.options;if(t)return this.root.sharedNodes.get(t)}promote({needsReset:t,transition:e,preserveFollowOpacity:r}={}){let i=this.getStack();i&&i.promote(this,r),t&&(this.projectionDelta=void 0,this.needsReset=!0),e&&this.setOptions({transition:e})}relegate(){let t=this.getStack();return!!t&&t.relegate(this)}resetSkewAndRotation(){let{visualElement:t}=this.options;if(!t)return;let e=!1,{latestValues:r}=t;if((r.z||r.rotate||r.rotateX||r.rotateY||r.rotateZ||r.skewX||r.skewY)&&(e=!0),!e)return;let i={};r.z&&nF("z",t,i,this.animationValues);for(let e=0;e<nC.length;e++)nF(`rotate${nC[e]}`,t,i,this.animationValues),nF(`skew${nC[e]}`,t,i,this.animationValues);for(let e in t.render(),i)t.setStaticValue(e,i[e]),this.animationValues&&(this.animationValues[e]=i[e]);t.scheduleRender()}getProjectionStyles(t){var e,r;if(!this.instance||this.isSVG)return;if(!this.isVisible)return nE;let i={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,i.opacity="",i.pointerEvents=tL(null==t?void 0:t.pointerEvents)||"",i.transform=n?n(this.latestValues,""):"none",i;let s=this.getLead();if(!this.projectionDelta||!this.layout||!s.target){let e={};return this.options.layoutId&&(e.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,e.pointerEvents=tL(null==t?void 0:t.pointerEvents)||""),this.hasProjected&&!iW(this.latestValues)&&(e.transform=n?n({},""):"none",this.hasProjected=!1),e}let o=s.animationValues||s.latestValues;this.applyTransformsToTarget(),i.transform=nS(this.projectionDeltaWithTransform,this.treeScale,o),n&&(i.transform=n(o,i.transform));let{x:a,y:l}=this.projectionDelta;for(let t in i.transformOrigin=`${100*a.origin}% ${100*l.origin}% 0`,s.animationValues?i.opacity=s===this?null!==(r=null!==(e=o.opacity)&&void 0!==e?e:this.latestValues.opacity)&&void 0!==r?r:1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:i.opacity=s===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0,$){if(void 0===o[t])continue;let{correct:e,applyTo:r}=$[t],n="none"===i.transform?o[t]:e(o[t],s);if(r){let t=r.length;for(let e=0;e<t;e++)i[r[e]]=n}else i[t]=n}return this.options.layoutId&&(i.pointerEvents=s===this?tL(null==t?void 0:t.pointerEvents)||"":"none"),i}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(t=>{var e;return null===(e=t.currentAnimation)||void 0===e?void 0:e.stop()}),this.root.nodes.forEach(n$),this.root.sharedNodes.clear()}}}function nj(t){t.updateLayout()}function nR(t){var e;let r=(null===(e=t.resumeFrom)||void 0===e?void 0:e.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&r&&t.hasListeners("didUpdate")){let{layoutBox:e,measuredBox:i}=t.layout,{animationType:n}=t.options,s=r.source!==t.layout.source;"size"===n?iB(t=>{let i=s?r.measuredBox[t]:r.layoutBox[t],n=iC(i);i.min=e[t].min,i.max=i.min+n}):nJ(n,r.layoutBox,e)&&iB(i=>{let n=s?r.measuredBox[i]:r.layoutBox[i],o=iC(e[i]);n.max=n.min+o,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[i].max=t.relativeTarget[i].min+o)});let o=i$();ik(o,e,r.layoutBox);let a=i$();s?ik(a,t.applyTransform(i,!0),r.measuredBox):ik(a,e,r.layoutBox);let l=!nx(o),u=!1;if(!t.resumeFrom){let i=t.getClosestProjectingParent();if(i&&!i.resumeFrom){let{snapshot:n,layout:s}=i;if(n&&s){let o=iI();iV(o,r.layoutBox,n.layoutBox);let a=iI();iV(a,e,s.layoutBox),nb(o,a)||(u=!0),i.options.layoutRoot&&(t.relativeTarget=a,t.relativeTargetOrigin=o,t.relativeParent=i)}}}t.notifyListeners("didUpdate",{layout:e,snapshot:r,delta:a,layoutDelta:o,hasLayoutChanged:l,hasRelativeTargetChanged:u})}else if(t.isLead()){let{onExitComplete:e}=t.options;e&&e()}t.options.transition=void 0}function nD(t){nM.totalNodes++,t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function nO(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function nL(t){t.clearSnapshot()}function n$(t){t.clearMeasurements()}function n_(t){t.isLayoutDirty=!1}function nI(t){let{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function nB(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function nz(t){t.resolveTargetDelta()}function nN(t){t.calcProjection()}function nU(t){t.resetSkewAndRotation()}function nW(t){t.removeLeadSnapshot()}function nY(t,e,r){t.translate=rD(e.translate,0,r),t.scale=rD(e.scale,1,r),t.origin=e.origin,t.originPoint=e.originPoint}function nX(t,e,r,i){t.min=rD(e.min,r.min,i),t.max=rD(e.max,r.max,i)}function nG(t){return t.animationValues&&void 0!==t.animationValues.opacityExit}let nH={duration:.45,ease:[.4,0,.1,1]},nK=t=>"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),nZ=nK("applewebkit/")&&!nK("chrome/")?Math.round:tU.Z;function nq(t){t.min=nZ(t.min),t.max=nZ(t.max)}function nJ(t,e,r){return"position"===t||"preserve-aspect"===t&&!(.2>=Math.abs(nw(e)-nw(r)))}let nQ=nV({attachResizeListener:(t,e)=>tZ(t,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),n0={current:void 0},n1=nV({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!n0.current){let t=new nQ({});t.mount(window),t.setOptions({layoutScroll:!0}),n0.current=t}return n0.current},resetTransform:(t,e)=>{t.style.transform=void 0!==e?e:"none"},checkIsScrollRoot:t=>"fixed"===window.getComputedStyle(t).position}),n3={current:null},n5={current:!1},n4=new WeakMap,n2=[...e_,eQ,e9],n6=t=>n2.find(e$(t)),n9=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],n7=E.length;class n8{scrapeMotionValuesFromProps(t,e,r){return{}}constructor({parent:t,props:e,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:n,visualState:s},o={}){this.applyWillChange=!1,this.resolveKeyframes=(t,e,r,i)=>new this.KeyframeResolver(t,e,r,i,this),this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=eY,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.isRenderScheduled=!1,this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.isRenderScheduled=!1,this.scheduleRender=()=>{this.isRenderScheduled||(this.isRenderScheduled=!0,tW.render(this.render,!1,!0))};let{latestValues:a,renderState:l}=s;this.latestValues=a,this.baseTarget={...a},this.initialValues=e.initial?{...a}:{},this.renderState=l,this.parent=t,this.props=e,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=o,this.blockInitialAnimation=!!n,this.isControllingVariants=k(e),this.isVariantNode=M(e),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);let{willChange:u,...c}=this.scrapeMotionValuesFromProps(e,{},this);for(let t in c){let e=c[t];void 0!==a[t]&&z(e)&&e.set(a[t],!1)}}mount(t){this.current=t,n4.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,e)=>this.bindToMotionValue(e,t)),n5.current||function(){if(n5.current=!0,c){if(window.matchMedia){let t=window.matchMedia("(prefers-reduced-motion)"),e=()=>n3.current=t.matches;t.addListener(e),e()}else n3.current=!1}}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||n3.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){for(let t in n4.delete(this.current),this.projection&&this.projection.unmount(),tY(this.notifyUpdate),tY(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this),this.events)this.events[t].clear();for(let t in this.features){let e=this.features[t];e&&(e.unmount(),e.isMounted=!1)}this.current=null}bindToMotionValue(t,e){let r=I.has(t),i=e.on("change",e=>{this.latestValues[t]=e,this.props.onUpdate&&tW.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0)}),n=e.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{i(),n(),e.owner&&e.stop()})}sortNodePosition(t){return this.current&&this.sortInstanceNodePosition&&this.type===t.type?this.sortInstanceNodePosition(this.current,t.current):0}updateFeatures(){let t="animation";for(t in j){let e=j[t];if(!e)continue;let{isEnabled:r,Feature:i}=e;if(!this.features[t]&&i&&r(this.props)&&(this.features[t]=new i(this)),this.features[t]){let e=this.features[t];e.isMounted?e.update():(e.mount(),e.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):iI()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,e){this.latestValues[t]=e}update(t,e){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=e;for(let e=0;e<n9.length;e++){let r=n9[e];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);let i=t["on"+r];i&&(this.propEventSubscriptions[r]=this.on(r,i))}this.prevMotionValues=function(t,e,r){for(let i in e){let n=e[i],s=r[i];if(z(n))t.addValue(i,n);else if(z(s))t.addValue(i,is(n,{owner:t}));else if(s!==n){if(t.hasValue(i)){let e=t.getValue(i);!0===e.liveStyle?e.jump(n):e.hasAnimated||e.set(n)}else{let e=t.getStaticValue(i);t.addValue(i,is(void 0!==e?e:n,{owner:t}))}}}for(let i in r)void 0===e[i]&&t.removeValue(i);return e}(this,this.scrapeMotionValuesFromProps(t,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){let t=this.parent&&this.parent.getVariantContext()||{};return void 0!==this.props.initial&&(t.initial=this.props.initial),t}let e={};for(let t=0;t<n7;t++){let r=E[t],i=this.props[r];(T(i)||!1===i)&&(e[r]=i)}return e}addVariantChild(t){let e=this.getClosestVariantNode();if(e)return e.variantChildren&&e.variantChildren.add(t),()=>e.variantChildren.delete(t)}addValue(t,e){let r=this.values.get(t);e!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,e),this.values.set(t,e),this.latestValues[t]=e.get())}removeValue(t){this.values.delete(t);let e=this.valueSubscriptions.get(t);e&&(e(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,e){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return void 0===r&&void 0!==e&&(r=is(null===e?void 0:e,{owner:this}),this.addValue(t,r)),r}readValue(t,e){var r;let i=void 0===this.latestValues[t]&&this.current?null!==(r=this.getBaseTargetFromProps(this.props,t))&&void 0!==r?r:this.readValueFromInstance(this.current,t,this.options):this.latestValues[t];return null!=i&&("string"==typeof i&&(ek(i)||eC(i))?i=parseFloat(i):!n6(i)&&e9.test(e)&&(i=rn(t,e)),this.setBaseTarget(t,z(i)?i.get():i)),z(i)?i.get():i}setBaseTarget(t,e){this.baseTarget[t]=e}getBaseTarget(t){var e;let r;let{initial:i}=this.props;if("string"==typeof i||"object"==typeof i){let n=tj(this.props,i,null===(e=this.presenceContext)||void 0===e?void 0:e.custom);n&&(r=n[t])}if(i&&void 0!==r)return r;let n=this.getBaseTargetFromProps(this.props,t);return void 0===n||z(n)?void 0!==this.initialValues[t]&&void 0===r?void 0:this.baseTarget[t]:n}on(t,e){return this.events[t]||(this.events[t]=new it),this.events[t].add(e)}notify(t,...e){this.events[t]&&this.events[t].notify(...e)}}class st extends n8{constructor(){super(...arguments),this.KeyframeResolver=ro}sortInstanceNodePosition(t,e){return 2&t.compareDocumentPosition(e)?1:-1}getBaseTargetFromProps(t,e){return t.style?t.style[e]:void 0}removeValueFromRenderState(t,{vars:e,style:r}){delete e[t],delete r[t]}}class se extends st{constructor(){super(...arguments),this.type="html",this.applyWillChange=!0,this.renderInstance=tC}readValueFromInstance(t,e){if(I.has(e)){let t=ri(e);return t&&t.default||0}{let r=window.getComputedStyle(t),i=(Y(e)?r.getPropertyValue(e):r[e])||0;return"string"==typeof i?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:e}){return iQ(t,e)}build(t,e,r){tf(t,e,r.transformTemplate)}scrapeMotionValuesFromProps(t,e,r){return tM(t,e,r)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);let{children:t}=this.props;z(t)&&(this.childSubscription=t.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class sr extends st{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,e){return t[e]}readValueFromInstance(t,e){if(I.has(e)){let t=ri(e);return t&&t.default||0}return e=tE.has(e)?e:p(e),t.getAttribute(e)}measureInstanceViewportBox(){return iI()}scrapeMotionValuesFromProps(t,e,r){return tF(t,e,r)}build(t,e,r){tS(t,e,this.isSVGTag,r.transformTemplate)}renderInstance(t,e,r,i){tk(t,e,r,i)}mount(t){this.isSVGTag=tA(t.tagName),super.mount(t)}}let si=(t,e)=>L(t)?new sr(e):new se(e,{allowProjection:t!==o.Fragment}),sn={animation:{Feature:iy},exit:{Feature:ix},inView:{Feature:ec},tap:{Feature:en},focus:{Feature:ee},hover:{Feature:et},pan:{Feature:i6},drag:{Feature:i4,ProjectionNode:n1,MeasureLayout:ne},layout:{ProjectionNode:n1,MeasureLayout:ne}},ss=function(t){function e(e,r={}){return function({preloadedFeatures:t,createVisualElement:e,useRender:r,useVisualState:i,Component:n}){t&&function(t){for(let e in t)j[e]={...j[e],...t[e]}}(t);let p=(0,o.forwardRef)(function(t,p){var m;let g;let y={...(0,o.useContext)(a),...t,layoutId:function({layoutId:t}){let e=(0,o.useContext)(R).id;return e&&void 0!==t?e+"-"+t:t}(t)},{isStatic:x}=y,A=function(t){let{initial:e,animate:r}=function(t,e){if(k(t)){let{initial:e,animate:r}=t;return{initial:!1===e||T(e)?e:void 0,animate:T(r)?r:void 0}}return!1!==t.inherit?e:{}}(t,(0,o.useContext)(l));return(0,o.useMemo)(()=>({initial:e,animate:r}),[F(e),F(r)])}(t),C=i(t,x);if(!x&&c){(0,o.useContext)(d).strict;let t=function(t){let{drag:e,layout:r}=j;if(!e&&!r)return{};let i={...e,...r};return{MeasureLayout:(null==e?void 0:e.isEnabled(t))||(null==r?void 0:r.isEnabled(t))?i.MeasureLayout:void 0,ProjectionNode:i.ProjectionNode}}(y);g=t.MeasureLayout,A.visualElement=function(t,e,r,i,n){let{visualElement:s}=(0,o.useContext)(l),c=(0,o.useContext)(d),p=(0,o.useContext)(u),m=(0,o.useContext)(a).reducedMotion,g=(0,o.useRef)();i=i||c.renderer,!g.current&&i&&(g.current=i(t,{visualState:e,parent:s,props:r,presenceContext:p,blockInitialAnimation:!!p&&!1===p.initial,reducedMotionConfig:m}));let y=g.current,x=(0,o.useContext)(w);y&&!y.projection&&n&&("html"===y.type||"svg"===y.type)&&function(t,e,r,i){let{layoutId:n,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:u}=e;t.projection=new r(t.latestValues,e["data-framer-portal-id"]?void 0:function t(e){if(e)return!1!==e.options.allowProjection?e.projection:t(e.parent)}(t.parent)),t.projection.setOptions({layoutId:n,layout:s,alwaysMeasureLayout:!!o||a&&b(a),visualElement:t,scheduleRender:()=>t.scheduleRender(),animationType:"string"==typeof s?s:"both",initialPromotionConfig:i,layoutScroll:l,layoutRoot:u})}(g.current,r,n,x),(0,o.useInsertionEffect)(()=>{y&&y.update(r,p)});let T=(0,o.useRef)(!!(r[f]&&!window.HandoffComplete));return h(()=>{y&&(y.updateFeatures(),v.render(y.render),T.current&&y.animationState&&y.animationState.animateChanges())}),(0,o.useEffect)(()=>{y&&(!T.current&&y.animationState&&y.animationState.animateChanges(),T.current&&(T.current=!1,P||(P=!0,queueMicrotask(S))))}),y}(n,C,y,e,t.ProjectionNode)}return(0,s.jsxs)(l.Provider,{value:A,children:[g&&A.visualElement?(0,s.jsx)(g,{visualElement:A.visualElement,...y}):null,r(n,t,(m=A.visualElement,(0,o.useCallback)(t=>{t&&C.mount&&C.mount(t),m&&(t?m.mount(t):m.unmount()),p&&("function"==typeof p?p(t):b(p)&&(p.current=t))},[m])),C,x,A.visualElement)]})});return p[D]=n,p}(t(e,r))}if("undefined"==typeof Proxy)return e;let r=new Map;return new Proxy(e,{get:(t,i)=>(r.has(i)||r.set(i,e(i)),r.get(i))})}((t,e)=>(function(t,{forwardMotionProps:e=!1},r,i){return{...L(t)?tH:tK,preloadedFeatures:r,useRender:function(t=!1){return(e,r,i,{latestValues:n},s)=>{let a=(L(e)?function(t,e,r,i){let n=(0,o.useMemo)(()=>{let r=tT();return tS(r,e,tA(i),t.transformTemplate),{...r.attrs,style:{...r.style}}},[e]);if(t.style){let e={};tg(e,t.style,t),n.style={...e,...n.style}}return n}:function(t,e){let r={},i=function(t,e){let r=t.style||{},i={};return tg(i,r,t),Object.assign(i,function({transformTemplate:t},e){return(0,o.useMemo)(()=>{let r=tm();return tf(r,e,t),Object.assign({},r.vars,r.style)},[e])}(t,e)),i}(t,e);return t.drag&&!1!==t.dragListener&&(r.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=!0===t.drag?"none":`pan-${"x"===t.drag?"y":"x"}`),void 0===t.tabIndex&&(t.onTap||t.onTapStart||t.whileTap)&&(r.tabIndex=0),r.style=i,r})(r,n,s,e),l=function(t,e,r){let i={};for(let n in t)("values"!==n||"object"!=typeof t.values)&&(tx(n)||!0===r&&tv(n)||!e&&!tv(n)||t.draggable&&n.startsWith("onDrag"))&&(i[n]=t[n]);return i}(r,"string"==typeof e,t),u=e!==o.Fragment?{...l,...a,ref:i}:{},{children:c}=r,h=(0,o.useMemo)(()=>z(c)?c.get():c,[c]);return(0,o.createElement)(e,{...u,children:h})}}(e),createVisualElement:i,Component:t}})(t,e,sn,si))},9047:function(t,e,r){r.d(e,{K:function(){return n},k:function(){return s}});var i=r(9276);let n=i.Z,s=i.Z},9276:function(t,e,r){r.d(e,{Z:function(){return i}});let i=t=>t},8733:function(t,e,r){r.d(e,{Y:function(){return s}});var i=r(2265);r(9047);let n={some:0,all:1};function s(t,{root:e,margin:r,amount:s,once:o=!1}={}){let[a,l]=(0,i.useState)(!1);return(0,i.useEffect)(()=>{if(!t.current||o&&a)return;let i={root:e&&e.current||void 0,margin:r,amount:s};return function(t,e,{root:r,margin:i,amount:s="some"}={}){var o;let a=("string"==typeof(o=t)?o=document.querySelectorAll(o):o instanceof Element&&(o=[o]),Array.from(o||[])),l=new WeakMap,u=new IntersectionObserver(t=>{t.forEach(t=>{let r=l.get(t.target);if(!!r!==t.isIntersecting){if(t.isIntersecting){let r=e(t);"function"==typeof r?l.set(t.target,r):u.unobserve(t.target)}else r&&(r(t),l.delete(t.target))}})},{root:r,rootMargin:i,threshold:"number"==typeof s?s:n[s]});return a.forEach(t=>u.observe(t)),()=>u.disconnect()}(t.current,()=>(l(!0),o?void 0:()=>l(!1)),i)},[e,t,r,o,s]),a}},3433:function(t,e,r){r.d(e,{ZP:function(){return S}});var i=r(7437),n=r(7179),s=r(2265);r(6309),r(6451),r(5006),r(1073);var o=i.Fragment;function a(t,e,r){return n.h.call(e,"css")?i.jsx(n.E,(0,n.c)(t,e),r):i.jsx(t,e,r)}var l=r(3098),u=Object.defineProperty,c=(t,e,r)=>e in t?u(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,h=(t,e,r)=>c(t,"symbol"!=typeof e?e+"":e,r),d=new Map,p=new WeakMap,f=0,m=void 0;function g(t,e){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:m;if(void 0===window.IntersectionObserver&&void 0!==i){let n=t.getBoundingClientRect();return e(i,{isIntersecting:i,target:t,intersectionRatio:"number"==typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}let{id:n,observer:s,elements:o}=function(t){let e=Object.keys(t).sort().filter(e=>void 0!==t[e]).map(e=>{var r;return"".concat(e,"_").concat("root"===e?(r=t.root)?(p.has(r)||(f+=1,p.set(r,f.toString())),p.get(r)):"0":t[e])}).toString(),r=d.get(e);if(!r){let i;let n=new Map,s=new IntersectionObserver(e=>{e.forEach(e=>{var r;let s=e.isIntersecting&&i.some(t=>e.intersectionRatio>=t);t.trackVisibility&&void 0===e.isVisible&&(e.isVisible=s),null==(r=n.get(e.target))||r.forEach(t=>{t(s,e)})})},t);i=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:s,elements:n},d.set(e,r)}return r}(r),a=o.get(t)||[];return o.has(t)||o.set(t,a),a.push(e),s.observe(t),function(){a.splice(a.indexOf(e),1),0===a.length&&(o.delete(t),s.unobserve(t)),0===o.size&&(s.disconnect(),d.delete(n))}}var y=class extends s.Component{componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(t){(t.rootMargin!==this.props.rootMargin||t.root!==this.props.root||t.threshold!==this.props.threshold||t.skip!==this.props.skip||t.trackVisibility!==this.props.trackVisibility||t.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;let{threshold:t,root:e,rootMargin:r,trackVisibility:i,delay:n,fallbackInView:s}=this.props;this._unobserveCb=g(this.node,this.handleChange,{threshold:t,root:e,rootMargin:r,trackVisibility:i,delay:n},s)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){let{children:t}=this.props;if("function"==typeof t){let{inView:e,entry:r}=this.state;return t({inView:e,entry:r,ref:this.handleNode})}let{as:e,triggerOnce:r,threshold:i,root:n,rootMargin:o,onChange:a,skip:l,trackVisibility:u,delay:c,initialInView:h,fallbackInView:d,...p}=this.props;return s.createElement(e||"div",{ref:this.handleNode,...p},t)}constructor(t){super(t),h(this,"node",null),h(this,"_unobserveCb",null),h(this,"handleNode",t=>{!this.node||(this.unobserve(),t||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),h(this,"handleChange",(t,e)=>{t&&this.props.triggerOnce&&this.unobserve(),"function"!=typeof this.props.children||this.setState({inView:t,entry:e}),this.props.onChange&&this.props.onChange(t,e)}),this.state={inView:!!t.initialInView,entry:void 0}}};function v(){var t;let{threshold:e,delay:r,trackVisibility:i,rootMargin:n,root:o,triggerOnce:a,skip:l,initialInView:u,fallbackInView:c,onChange:h}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[d,p]=s.useState(null),f=s.useRef(),[m,y]=s.useState({inView:!!u,entry:void 0});f.current=h,s.useEffect(()=>{let t;if(!l&&d)return t=g(d,(e,r)=>{y({inView:e,entry:r}),f.current&&f.current(e,r),r.isIntersecting&&a&&t&&(t(),t=void 0)},{root:o,rootMargin:n,threshold:e,trackVisibility:i,delay:r},c),()=>{t&&t()}},[Array.isArray(e)?e.toString():e,d,o,n,a,l,i,c,r]);let v=null==(t=m.entry)?void 0:t.target,x=s.useRef();d||!v||a||l||x.current===v||(x.current=v,y({inView:!!u,entry:void 0}));let b=[p,m.inView,m.entry];return b.ref=b[0],b.inView=b[1],b.entry=b[2],b}var x=r(3462);(0,l.F4)`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,(0,l.F4)`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,(0,l.F4)`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,(0,l.F4)`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,(0,l.F4)`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,(0,l.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,(0,l.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,(0,l.F4)`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,(0,l.F4)`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,(0,l.F4)`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,(0,l.F4)`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,(0,l.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,(0,l.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;let b=(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function w(t){var e;return e=()=>null,r=>r?t():e()}function P(t){return w(()=>({opacity:0}))(t)}(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;let S=t=>{let{cascade:e=!1,damping:r=.5,delay:i=0,duration:n=1e3,fraction:u=0,keyframes:c=b,triggerOnce:h=!1,className:d,style:p,childClassName:f,childStyle:m,children:g,onVisibilityChange:v}=t,T=(0,s.useMemo)(()=>(function({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:i=b,iterationCount:n=1}){return(0,l.iv)`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${i};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${n};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `})({keyframes:c,duration:n}),[n,c]);return void 0==g?null:"string"==typeof g||"number"==typeof g||"boolean"==typeof g?a(A,{...t,animationStyles:T,children:String(g)}):(0,x.isFragment)(g)?a(C,{...t,animationStyles:T}):a(o,{children:s.Children.map(g,(o,c)=>{if(!(0,s.isValidElement)(o))return null;let g=i+(e?c*n*r:0);switch(o.type){case"ol":case"ul":return a(l.ms,{children:({cx:e})=>a(o.type,{...o.props,className:e(d,o.props.className),style:Object.assign({},p,o.props.style),children:a(S,{...t,children:o.props.children})})});case"li":return a(y,{threshold:u,triggerOnce:h,onChange:v,children:({inView:t,ref:e})=>a(l.ms,{children:({cx:r})=>a(o.type,{...o.props,ref:e,className:r(f,o.props.className),css:w(()=>T)(t),style:Object.assign({},m,o.props.style,P(!t),{animationDelay:g+"ms"})})})});default:return a(y,{threshold:u,triggerOnce:h,onChange:v,children:({inView:t,ref:e})=>a("div",{ref:e,className:d,css:w(()=>T)(t),style:Object.assign({},p,P(!t),{animationDelay:g+"ms"}),children:a(l.ms,{children:({cx:t})=>a(o.type,{...o.props,className:t(f,o.props.className),style:Object.assign({},m,o.props.style)})})})})}})})},T={display:"inline-block",whiteSpace:"pre"},A=t=>{var e,r;let{animationStyles:i,cascade:n=!1,damping:s=.5,delay:o=0,duration:l=1e3,fraction:u=0,triggerOnce:c=!1,className:h,style:d,children:p,onVisibilityChange:f}=t,{ref:m,inView:g}=v({triggerOnce:c,threshold:u,onChange:f});return(e=()=>a("div",{ref:m,className:h,style:Object.assign({},d,T),children:p.split("").map((t,e)=>a("span",{css:w(()=>i)(g),style:{animationDelay:o+e*l*s+"ms"},children:t},e))}),r=()=>a(C,{...t,children:p}),t=>t?e():r())(n)},C=t=>{let{animationStyles:e,fraction:r=0,triggerOnce:i=!1,className:n,style:s,children:o,onVisibilityChange:l}=t,{ref:u,inView:c}=v({triggerOnce:i,threshold:r,onChange:l});return a("div",{ref:u,className:n,css:w(()=>e)(c),style:Object.assign({},s,P(!c)),children:o})};(0,l.F4)`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,(0,l.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,(0,l.F4)`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,(0,l.F4)`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,(0,l.F4)`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,(0,l.F4)`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,(0,l.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`,(0,l.F4)`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,(0,l.F4)`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,(0,l.F4)`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,(0,l.F4)`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,(0,l.F4)`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`,(0,l.F4)`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,(0,l.F4)`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,l.F4)`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,l.F4)`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,l.F4)`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,l.F4)`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`,(0,l.F4)`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,(0,l.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,(0,l.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,(0,l.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,(0,l.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,l.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,l.F4)`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,(0,l.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,(0,l.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,(0,l.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,(0,l.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`}}]);