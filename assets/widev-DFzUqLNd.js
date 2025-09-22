(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function Zf(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var so={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var ed=so.exports,Wu;function td(){return Wu||(Wu=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:ed,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,c=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,T={},A=T.toString,k=T.hasOwnProperty,M=k.toString,K=M.call(Object),W={},X=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},Z=function(u){return u!=null&&u===u.window},Y=e.document,Ae={type:!0,src:!0,nonce:!0,noModule:!0};function Se(s,u,h){h=h||Y;var d,m,y=h.createElement("script");if(y.text=s,u)for(d in Ae)m=u[d]||u.getAttribute&&u.getAttribute(d),m&&y.setAttribute(d,m);h.head.appendChild(y).parentNode.removeChild(y)}function je(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?T[A.call(s)]||"object":typeof s}var tt="3.7.1",ze=/HTML$/i,l=function(s,u){return new l.fn.init(s,u)};l.fn=l.prototype={jquery:tt,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=l.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(u,h){return s.call(u,h,u)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,h=+s+(s<0?u:0);return this.pushStack(h>=0&&h<u?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,u,h,d,m,y,v=arguments[0]||{},R=1,I=arguments.length,N=!1;for(typeof v=="boolean"&&(N=v,v=arguments[R]||{},R++),typeof v!="object"&&!X(v)&&(v={}),R===I&&(v=this,R--);R<I;R++)if((s=arguments[R])!=null)for(u in s)d=s[u],!(u==="__proto__"||v===d)&&(N&&d&&(l.isPlainObject(d)||(m=Array.isArray(d)))?(h=v[u],m&&!Array.isArray(h)?y=[]:!m&&!l.isPlainObject(h)?y={}:y=h,m=!1,v[u]=l.extend(N,y,d)):d!==void 0&&(v[u]=d));return v},l.extend({expando:"jQuery"+(tt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,h;return!s||A.call(s)!=="[object Object]"?!1:(u=i(s),u?(h=k.call(u,"constructor")&&u.constructor,typeof h=="function"&&M.call(h)===K):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,h){Se(s,{nonce:u&&u.nonce},h)},each:function(s,u){var h,d=0;if(C(s))for(h=s.length;d<h&&u.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(u.call(s[d],d,s[d])===!1)break;return s},text:function(s){var u,h="",d=0,m=s.nodeType;if(!m)for(;u=s[d++];)h+=l.text(u);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,u){var h=u||[];return s!=null&&(C(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,u,h){return u==null?-1:_.call(u,s,h)},isXMLDoc:function(s){var u=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!ze.test(u||h&&h.nodeName||"HTML")},merge:function(s,u){for(var h=+u.length,d=0,m=s.length;d<h;d++)s[m++]=u[d];return s.length=m,s},grep:function(s,u,h){for(var d,m=[],y=0,v=s.length,R=!h;y<v;y++)d=!u(s[y],y),d!==R&&m.push(s[y]);return m},map:function(s,u,h){var d,m,y=0,v=[];if(C(s))for(d=s.length;y<d;y++)m=u(s[y],y,h),m!=null&&v.push(m);else for(y in s)m=u(s[y],y,h),m!=null&&v.push(m);return c(v)},guid:1,support:W}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){T["[object "+u+"]"]=u.toLowerCase()});function C(s){var u=!!s&&"length"in s&&s.length,h=je(s);return X(s)||Z(s)?!1:h==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function S(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var x=r.pop,D=r.sort,L=r.splice,b="[\\x20\\t\\r\\n\\f]",We=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,u){var h=u&&u.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var on=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Zo(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(on,Zo)};var kt=Y,In=p;(function(){var s,u,h,d,m,y=In,v,R,I,N,q,B=l.expando,U=0,Q=0,se=Qs(),_e=Qs(),me=Qs(),Me=Qs(),o=function(w,P){return w===P&&(m=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",g="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",E="\\["+b+"*("+g+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+g+"))|)"+b+"*\\]",O=":("+g+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+E+")*)|.*)\\)|)",V=new RegExp(b+"+","g"),G=new RegExp("^"+b+"*,"+b+"*"),fe=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),Fe=new RegExp(b+"|>"),ye=new RegExp(O),Le=new RegExp("^"+g+"$"),Be={ID:new RegExp("^#("+g+")"),CLASS:new RegExp("^\\.("+g+")"),TAG:new RegExp("^("+g+"|[*])"),ATTR:new RegExp("^"+E),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},ct=/^(?:input|select|textarea|button)$/i,it=/^h\d$/i,$e=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Fn=/[+~]/,wt=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),dn=function(w,P){var F="0x"+w.slice(1)-65536;return P||(F<0?String.fromCharCode(F+65536):String.fromCharCode(F>>10|55296,F&1023|56320))},Wf=function(){Un()},Gf=Js(function(w){return w.disabled===!0&&S(w,"fieldset")},{dir:"parentNode",next:"legend"});function Kf(){try{return v.activeElement}catch{}}try{y.apply(r=a.call(kt.childNodes),kt.childNodes),r[kt.childNodes.length].nodeType}catch{y={apply:function(P,F){In.apply(P,a.call(F))},call:function(P){In.apply(P,a.call(arguments,1))}}}function Re(w,P,F,j){var $,J,ee,oe,te,ve,le,de=P&&P.ownerDocument,Te=P?P.nodeType:9;if(F=F||[],typeof w!="string"||!w||Te!==1&&Te!==9&&Te!==11)return F;if(!j&&(Un(P),P=P||v,I)){if(Te!==11&&(te=$e.exec(w)))if($=te[1]){if(Te===9)if(ee=P.getElementById($)){if(ee.id===$)return y.call(F,ee),F}else return F;else if(de&&(ee=de.getElementById($))&&Re.contains(P,ee)&&ee.id===$)return y.call(F,ee),F}else{if(te[2])return y.apply(F,P.getElementsByTagName(w)),F;if(($=te[3])&&P.getElementsByClassName)return y.apply(F,P.getElementsByClassName($)),F}if(!Me[w+" "]&&(!N||!N.test(w))){if(le=w,de=P,Te===1&&(Fe.test(w)||fe.test(w))){for(de=Fn.test(w)&&ua(P.parentNode)||P,(de!=P||!W.scope)&&((oe=P.getAttribute("id"))?oe=l.escapeSelector(oe):P.setAttribute("id",oe=B)),ve=Ji(w),J=ve.length;J--;)ve[J]=(oe?"#"+oe:":scope")+" "+Xs(ve[J]);le=ve.join(",")}try{return y.apply(F,de.querySelectorAll(le)),F}catch{Me(w,!0)}finally{oe===B&&P.removeAttribute("id")}}}return zu(w.replace(We,"$1"),P,F,j)}function Qs(){var w=[];function P(F,j){return w.push(F+" ")>u.cacheLength&&delete P[w.shift()],P[F+" "]=j}return P}function Mt(w){return w[B]=!0,w}function Hr(w){var P=v.createElement("fieldset");try{return!!w(P)}catch{return!1}finally{P.parentNode&&P.parentNode.removeChild(P),P=null}}function Qf(w){return function(P){return S(P,"input")&&P.type===w}}function Xf(w){return function(P){return(S(P,"input")||S(P,"button"))&&P.type===w}}function $u(w){return function(P){return"form"in P?P.parentNode&&P.disabled===!1?"label"in P?"label"in P.parentNode?P.parentNode.disabled===w:P.disabled===w:P.isDisabled===w||P.isDisabled!==!w&&Gf(P)===w:P.disabled===w:"label"in P?P.disabled===w:!1}}function Tr(w){return Mt(function(P){return P=+P,Mt(function(F,j){for(var $,J=w([],F.length,P),ee=J.length;ee--;)F[$=J[ee]]&&(F[$]=!(j[$]=F[$]))})})}function ua(w){return w&&typeof w.getElementsByTagName<"u"&&w}function Un(w){var P,F=w?w.ownerDocument||w:kt;return F==v||F.nodeType!==9||!F.documentElement||(v=F,R=v.documentElement,I=!l.isXMLDoc(v),q=R.matches||R.webkitMatchesSelector||R.msMatchesSelector,R.msMatchesSelector&&kt!=v&&(P=v.defaultView)&&P.top!==P&&P.addEventListener("unload",Wf),W.getById=Hr(function(j){return R.appendChild(j).id=l.expando,!v.getElementsByName||!v.getElementsByName(l.expando).length}),W.disconnectedMatch=Hr(function(j){return q.call(j,"*")}),W.scope=Hr(function(){return v.querySelectorAll(":scope")}),W.cssHas=Hr(function(){try{return v.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),W.getById?(u.filter.ID=function(j){var $=j.replace(wt,dn);return function(J){return J.getAttribute("id")===$}},u.find.ID=function(j,$){if(typeof $.getElementById<"u"&&I){var J=$.getElementById(j);return J?[J]:[]}}):(u.filter.ID=function(j){var $=j.replace(wt,dn);return function(J){var ee=typeof J.getAttributeNode<"u"&&J.getAttributeNode("id");return ee&&ee.value===$}},u.find.ID=function(j,$){if(typeof $.getElementById<"u"&&I){var J,ee,oe,te=$.getElementById(j);if(te){if(J=te.getAttributeNode("id"),J&&J.value===j)return[te];for(oe=$.getElementsByName(j),ee=0;te=oe[ee++];)if(J=te.getAttributeNode("id"),J&&J.value===j)return[te]}return[]}}),u.find.TAG=function(j,$){return typeof $.getElementsByTagName<"u"?$.getElementsByTagName(j):$.querySelectorAll(j)},u.find.CLASS=function(j,$){if(typeof $.getElementsByClassName<"u"&&I)return $.getElementsByClassName(j)},N=[],Hr(function(j){var $;R.appendChild(j).innerHTML="<a id='"+B+"' href='' disabled='disabled'></a><select id='"+B+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||N.push("\\["+b+"*(?:value|"+f+")"),j.querySelectorAll("[id~="+B+"-]").length||N.push("~="),j.querySelectorAll("a#"+B+"+*").length||N.push(".#.+[+~]"),j.querySelectorAll(":checked").length||N.push(":checked"),$=v.createElement("input"),$.setAttribute("type","hidden"),j.appendChild($).setAttribute("name","D"),R.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&N.push(":enabled",":disabled"),$=v.createElement("input"),$.setAttribute("name",""),j.appendChild($),j.querySelectorAll("[name='']").length||N.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),W.cssHas||N.push(":has"),N=N.length&&new RegExp(N.join("|")),o=function(j,$){if(j===$)return m=!0,0;var J=!j.compareDocumentPosition-!$.compareDocumentPosition;return J||(J=(j.ownerDocument||j)==($.ownerDocument||$)?j.compareDocumentPosition($):1,J&1||!W.sortDetached&&$.compareDocumentPosition(j)===J?j===v||j.ownerDocument==kt&&Re.contains(kt,j)?-1:$===v||$.ownerDocument==kt&&Re.contains(kt,$)?1:d?_.call(d,j)-_.call(d,$):0:J&4?-1:1)}),v}Re.matches=function(w,P){return Re(w,null,null,P)},Re.matchesSelector=function(w,P){if(Un(w),I&&!Me[P+" "]&&(!N||!N.test(P)))try{var F=q.call(w,P);if(F||W.disconnectedMatch||w.document&&w.document.nodeType!==11)return F}catch{Me(P,!0)}return Re(P,v,null,[w]).length>0},Re.contains=function(w,P){return(w.ownerDocument||w)!=v&&Un(w),l.contains(w,P)},Re.attr=function(w,P){(w.ownerDocument||w)!=v&&Un(w);var F=u.attrHandle[P.toLowerCase()],j=F&&k.call(u.attrHandle,P.toLowerCase())?F(w,P,!I):void 0;return j!==void 0?j:w.getAttribute(P)},Re.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},l.uniqueSort=function(w){var P,F=[],j=0,$=0;if(m=!W.sortStable,d=!W.sortStable&&a.call(w,0),D.call(w,o),m){for(;P=w[$++];)P===w[$]&&(j=F.push($));for(;j--;)L.call(w,F[j],1)}return d=null,w},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},u=l.expr={cacheLength:50,createPseudo:Mt,match:Be,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(wt,dn),w[3]=(w[3]||w[4]||w[5]||"").replace(wt,dn),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||Re.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&Re.error(w[0]),w},PSEUDO:function(w){var P,F=!w[6]&&w[2];return Be.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":F&&ye.test(F)&&(P=Ji(F,!0))&&(P=F.indexOf(")",F.length-P)-F.length)&&(w[0]=w[0].slice(0,P),w[2]=F.slice(0,P)),w.slice(0,3))}},filter:{TAG:function(w){var P=w.replace(wt,dn).toLowerCase();return w==="*"?function(){return!0}:function(F){return S(F,P)}},CLASS:function(w){var P=se[w+" "];return P||(P=new RegExp("(^|"+b+")"+w+"("+b+"|$)"))&&se(w,function(F){return P.test(typeof F.className=="string"&&F.className||typeof F.getAttribute<"u"&&F.getAttribute("class")||"")})},ATTR:function(w,P,F){return function(j){var $=Re.attr(j,w);return $==null?P==="!=":P?($+="",P==="="?$===F:P==="!="?$!==F:P==="^="?F&&$.indexOf(F)===0:P==="*="?F&&$.indexOf(F)>-1:P==="$="?F&&$.slice(-F.length)===F:P==="~="?(" "+$.replace(V," ")+" ").indexOf(F)>-1:P==="|="?$===F||$.slice(0,F.length+1)===F+"-":!1):!0}},CHILD:function(w,P,F,j,$){var J=w.slice(0,3)!=="nth",ee=w.slice(-4)!=="last",oe=P==="of-type";return j===1&&$===0?function(te){return!!te.parentNode}:function(te,ve,le){var de,Te,ue,ke,yt,lt=J!==ee?"nextSibling":"previousSibling",Ct=te.parentNode,Kt=oe&&te.nodeName.toLowerCase(),zr=!le&&!oe,mt=!1;if(Ct){if(J){for(;lt;){for(ue=te;ue=ue[lt];)if(oe?S(ue,Kt):ue.nodeType===1)return!1;yt=lt=w==="only"&&!yt&&"nextSibling"}return!0}if(yt=[ee?Ct.firstChild:Ct.lastChild],ee&&zr){for(Te=Ct[B]||(Ct[B]={}),de=Te[w]||[],ke=de[0]===U&&de[1],mt=ke&&de[2],ue=ke&&Ct.childNodes[ke];ue=++ke&&ue&&ue[lt]||(mt=ke=0)||yt.pop();)if(ue.nodeType===1&&++mt&&ue===te){Te[w]=[U,ke,mt];break}}else if(zr&&(Te=te[B]||(te[B]={}),de=Te[w]||[],ke=de[0]===U&&de[1],mt=ke),mt===!1)for(;(ue=++ke&&ue&&ue[lt]||(mt=ke=0)||yt.pop())&&!((oe?S(ue,Kt):ue.nodeType===1)&&++mt&&(zr&&(Te=ue[B]||(ue[B]={}),Te[w]=[U,mt]),ue===te)););return mt-=$,mt===j||mt%j===0&&mt/j>=0}}},PSEUDO:function(w,P){var F,j=u.pseudos[w]||u.setFilters[w.toLowerCase()]||Re.error("unsupported pseudo: "+w);return j[B]?j(P):j.length>1?(F=[w,w,"",P],u.setFilters.hasOwnProperty(w.toLowerCase())?Mt(function($,J){for(var ee,oe=j($,P),te=oe.length;te--;)ee=_.call($,oe[te]),$[ee]=!(J[ee]=oe[te])}):function($){return j($,0,F)}):j}},pseudos:{not:Mt(function(w){var P=[],F=[],j=fa(w.replace(We,"$1"));return j[B]?Mt(function($,J,ee,oe){for(var te,ve=j($,null,oe,[]),le=$.length;le--;)(te=ve[le])&&($[le]=!(J[le]=te))}):function($,J,ee){return P[0]=$,j(P,null,ee,F),P[0]=null,!F.pop()}}),has:Mt(function(w){return function(P){return Re(w,P).length>0}}),contains:Mt(function(w){return w=w.replace(wt,dn),function(P){return(P.textContent||l.text(P)).indexOf(w)>-1}}),lang:Mt(function(w){return Le.test(w||"")||Re.error("unsupported lang: "+w),w=w.replace(wt,dn).toLowerCase(),function(P){var F;do if(F=I?P.lang:P.getAttribute("xml:lang")||P.getAttribute("lang"))return F=F.toLowerCase(),F===w||F.indexOf(w+"-")===0;while((P=P.parentNode)&&P.nodeType===1);return!1}}),target:function(w){var P=e.location&&e.location.hash;return P&&P.slice(1)===w.id},root:function(w){return w===R},focus:function(w){return w===Kf()&&v.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:$u(!1),disabled:$u(!0),checked:function(w){return S(w,"input")&&!!w.checked||S(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!u.pseudos.empty(w)},header:function(w){return it.test(w.nodeName)},input:function(w){return ct.test(w.nodeName)},button:function(w){return S(w,"input")&&w.type==="button"||S(w,"button")},text:function(w){var P;return S(w,"input")&&w.type==="text"&&((P=w.getAttribute("type"))==null||P.toLowerCase()==="text")},first:Tr(function(){return[0]}),last:Tr(function(w,P){return[P-1]}),eq:Tr(function(w,P,F){return[F<0?F+P:F]}),even:Tr(function(w,P){for(var F=0;F<P;F+=2)w.push(F);return w}),odd:Tr(function(w,P){for(var F=1;F<P;F+=2)w.push(F);return w}),lt:Tr(function(w,P,F){var j;for(F<0?j=F+P:F>P?j=P:j=F;--j>=0;)w.push(j);return w}),gt:Tr(function(w,P,F){for(var j=F<0?F+P:F;++j<P;)w.push(j);return w})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=Qf(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=Xf(s);function Hu(){}Hu.prototype=u.filters=u.pseudos,u.setFilters=new Hu;function Ji(w,P){var F,j,$,J,ee,oe,te,ve=_e[w+" "];if(ve)return P?0:ve.slice(0);for(ee=w,oe=[],te=u.preFilter;ee;){(!F||(j=G.exec(ee)))&&(j&&(ee=ee.slice(j[0].length)||ee),oe.push($=[])),F=!1,(j=fe.exec(ee))&&(F=j.shift(),$.push({value:F,type:j[0].replace(We," ")}),ee=ee.slice(F.length));for(J in u.filter)(j=Be[J].exec(ee))&&(!te[J]||(j=te[J](j)))&&(F=j.shift(),$.push({value:F,type:J,matches:j}),ee=ee.slice(F.length));if(!F)break}return P?ee.length:ee?Re.error(w):_e(w,oe).slice(0)}function Xs(w){for(var P=0,F=w.length,j="";P<F;P++)j+=w[P].value;return j}function Js(w,P,F){var j=P.dir,$=P.next,J=$||j,ee=F&&J==="parentNode",oe=Q++;return P.first?function(te,ve,le){for(;te=te[j];)if(te.nodeType===1||ee)return w(te,ve,le);return!1}:function(te,ve,le){var de,Te,ue=[U,oe];if(le){for(;te=te[j];)if((te.nodeType===1||ee)&&w(te,ve,le))return!0}else for(;te=te[j];)if(te.nodeType===1||ee)if(Te=te[B]||(te[B]={}),$&&S(te,$))te=te[j]||te;else{if((de=Te[J])&&de[0]===U&&de[1]===oe)return ue[2]=de[2];if(Te[J]=ue,ue[2]=w(te,ve,le))return!0}return!1}}function ca(w){return w.length>1?function(P,F,j){for(var $=w.length;$--;)if(!w[$](P,F,j))return!1;return!0}:w[0]}function Jf(w,P,F){for(var j=0,$=P.length;j<$;j++)Re(w,P[j],F);return F}function Ys(w,P,F,j,$){for(var J,ee=[],oe=0,te=w.length,ve=P!=null;oe<te;oe++)(J=w[oe])&&(!F||F(J,j,$))&&(ee.push(J),ve&&P.push(oe));return ee}function la(w,P,F,j,$,J){return j&&!j[B]&&(j=la(j)),$&&!$[B]&&($=la($,J)),Mt(function(ee,oe,te,ve){var le,de,Te,ue,ke=[],yt=[],lt=oe.length,Ct=ee||Jf(P||"*",te.nodeType?[te]:te,[]),Kt=w&&(ee||!P)?Ys(Ct,ke,w,te,ve):Ct;if(F?(ue=$||(ee?w:lt||j)?[]:oe,F(Kt,ue,te,ve)):ue=Kt,j)for(le=Ys(ue,yt),j(le,[],te,ve),de=le.length;de--;)(Te=le[de])&&(ue[yt[de]]=!(Kt[yt[de]]=Te));if(ee){if($||w){if($){for(le=[],de=ue.length;de--;)(Te=ue[de])&&le.push(Kt[de]=Te);$(null,ue=[],le,ve)}for(de=ue.length;de--;)(Te=ue[de])&&(le=$?_.call(ee,Te):ke[de])>-1&&(ee[le]=!(oe[le]=Te))}}else ue=Ys(ue===oe?ue.splice(lt,ue.length):ue),$?$(null,oe,ue,ve):y.apply(oe,ue)})}function ha(w){for(var P,F,j,$=w.length,J=u.relative[w[0].type],ee=J||u.relative[" "],oe=J?1:0,te=Js(function(de){return de===P},ee,!0),ve=Js(function(de){return _.call(P,de)>-1},ee,!0),le=[function(de,Te,ue){var ke=!J&&(ue||Te!=h)||((P=Te).nodeType?te(de,Te,ue):ve(de,Te,ue));return P=null,ke}];oe<$;oe++)if(F=u.relative[w[oe].type])le=[Js(ca(le),F)];else{if(F=u.filter[w[oe].type].apply(null,w[oe].matches),F[B]){for(j=++oe;j<$&&!u.relative[w[j].type];j++);return la(oe>1&&ca(le),oe>1&&Xs(w.slice(0,oe-1).concat({value:w[oe-2].type===" "?"*":""})).replace(We,"$1"),F,oe<j&&ha(w.slice(oe,j)),j<$&&ha(w=w.slice(j)),j<$&&Xs(w))}le.push(F)}return ca(le)}function Yf(w,P){var F=P.length>0,j=w.length>0,$=function(J,ee,oe,te,ve){var le,de,Te,ue=0,ke="0",yt=J&&[],lt=[],Ct=h,Kt=J||j&&u.find.TAG("*",ve),zr=U+=Ct==null?1:Math.random()||.1,mt=Kt.length;for(ve&&(h=ee==v||ee||ve);ke!==mt&&(le=Kt[ke])!=null;ke++){if(j&&le){for(de=0,!ee&&le.ownerDocument!=v&&(Un(le),oe=!I);Te=w[de++];)if(Te(le,ee||v,oe)){y.call(te,le);break}ve&&(U=zr)}F&&((le=!Te&&le)&&ue--,J&&yt.push(le))}if(ue+=ke,F&&ke!==ue){for(de=0;Te=P[de++];)Te(yt,lt,ee,oe);if(J){if(ue>0)for(;ke--;)yt[ke]||lt[ke]||(lt[ke]=x.call(te));lt=Ys(lt)}y.apply(te,lt),ve&&!J&&lt.length>0&&ue+P.length>1&&l.uniqueSort(te)}return ve&&(U=zr,h=Ct),yt};return F?Mt($):$}function fa(w,P){var F,j=[],$=[],J=me[w+" "];if(!J){for(P||(P=Ji(w)),F=P.length;F--;)J=ha(P[F]),J[B]?j.push(J):$.push(J);J=me(w,Yf($,j)),J.selector=w}return J}function zu(w,P,F,j){var $,J,ee,oe,te,ve=typeof w=="function"&&w,le=!j&&Ji(w=ve.selector||w);if(F=F||[],le.length===1){if(J=le[0]=le[0].slice(0),J.length>2&&(ee=J[0]).type==="ID"&&P.nodeType===9&&I&&u.relative[J[1].type]){if(P=(u.find.ID(ee.matches[0].replace(wt,dn),P)||[])[0],P)ve&&(P=P.parentNode);else return F;w=w.slice(J.shift().value.length)}for($=Be.needsContext.test(w)?0:J.length;$--&&(ee=J[$],!u.relative[oe=ee.type]);)if((te=u.find[oe])&&(j=te(ee.matches[0].replace(wt,dn),Fn.test(J[0].type)&&ua(P.parentNode)||P))){if(J.splice($,1),w=j.length&&Xs(J),!w)return y.apply(F,j),F;break}}return(ve||fa(w,le))(j,P,!I,F,!P||Fn.test(w)&&ua(P.parentNode)||P),F}W.sortStable=B.split("").sort(o).join("")===B,Un(),W.sortDetached=Hr(function(w){return w.compareDocumentPosition(v.createElement("fieldset"))&1}),l.find=Re,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Re.compile=fa,Re.select=zu,Re.setDocument=Un,Re.tokenize=Ji,Re.escape=l.escapeSelector,Re.getText=l.text,Re.isXML=l.isXMLDoc,Re.selectors=l.expr,Re.support=l.support,Re.uniqueSort=l.uniqueSort})();var Dt=function(s,u,h){for(var d=[],m=h!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;d.push(s)}return d},Ps=function(s,u){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&h.push(s);return h},_i=l.expr.match.needsContext,vi=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Vr(s,u,h){return X(u)?l.grep(s,function(d,m){return!!u.call(d,m,d)!==h}):u.nodeType?l.grep(s,function(d){return d===u!==h}):typeof u!="string"?l.grep(s,function(d){return _.call(u,d)>-1!==h}):l.filter(u,s,h)}l.filter=function(s,u,h){var d=u[0];return h&&(s=":not("+s+")"),u.length===1&&d.nodeType===1?l.find.matchesSelector(d,s)?[d]:[]:l.find.matches(s,l.grep(u,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var u,h,d=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(u=0;u<d;u++)if(l.contains(m[u],this))return!0}));for(h=this.pushStack([]),u=0;u<d;u++)l.find(s,m[u],h);return d>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(Vr(this,s||[],!1))},not:function(s){return this.pushStack(Vr(this,s||[],!0))},is:function(s){return!!Vr(this,typeof s=="string"&&_i.test(s)?l(s):s||[],!1).length}});var ir,Ti=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ei=l.fn.init=function(s,u,h){var d,m;if(!s)return this;if(h=h||ir,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=Ti.exec(s),d&&(d[1]||!u))if(d[1]){if(u=u instanceof l?u[0]:u,l.merge(this,l.parseHTML(d[1],u&&u.nodeType?u.ownerDocument||u:Y,!0)),vi.test(d[1])&&l.isPlainObject(u))for(d in u)X(this[d])?this[d](u[d]):this.attr(d,u[d]);return this}else return m=Y.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!u||u.jquery?(u||h).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(X(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};Ei.prototype=l.fn,ir=l(Y);var wi=/^(?:parents|prev(?:Until|All))/,Ii={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var u=l(s,this),h=u.length;return this.filter(function(){for(var d=0;d<h;d++)if(l.contains(this,u[d]))return!0})},closest:function(s,u){var h,d=0,m=this.length,y=[],v=typeof s!="string"&&l(s);if(!_i.test(s)){for(;d<m;d++)for(h=this[d];h&&h!==u;h=h.parentNode)if(h.nodeType<11&&(v?v.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(l(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function Ai(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}l.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return Dt(s,"parentNode")},parentsUntil:function(s,u,h){return Dt(s,"parentNode",h)},next:function(s){return Ai(s,"nextSibling")},prev:function(s){return Ai(s,"previousSibling")},nextAll:function(s){return Dt(s,"nextSibling")},prevAll:function(s){return Dt(s,"previousSibling")},nextUntil:function(s,u,h){return Dt(s,"nextSibling",h)},prevUntil:function(s,u,h){return Dt(s,"previousSibling",h)},siblings:function(s){return Ps((s.parentNode||{}).firstChild,s)},children:function(s){return Ps(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(S(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,u){l.fn[s]=function(h,d){var m=l.map(this,u,h);return s.slice(-5)!=="Until"&&(d=h),d&&typeof d=="string"&&(m=l.filter(d,m)),this.length>1&&(Ii[s]||l.uniqueSort(m),wi.test(s)&&m.reverse()),this.pushStack(m)}});var It=/[^\x20\t\r\n\f]+/g;function ea(s){var u={};return l.each(s.match(It)||[],function(h,d){u[d]=!0}),u}l.Callbacks=function(s){s=typeof s=="string"?ea(s):l.extend({},s);var u,h,d,m,y=[],v=[],R=-1,I=function(){for(m=m||s.once,d=u=!0;v.length;R=-1)for(h=v.shift();++R<y.length;)y[R].apply(h[0],h[1])===!1&&s.stopOnFalse&&(R=y.length,h=!1);s.memory||(h=!1),u=!1,m&&(h?y=[]:y="")},N={add:function(){return y&&(h&&!u&&(R=y.length-1,v.push(h)),(function q(B){l.each(B,function(U,Q){X(Q)?(!s.unique||!N.has(Q))&&y.push(Q):Q&&Q.length&&je(Q)!=="string"&&q(Q)})})(arguments),h&&!u&&I()),this},remove:function(){return l.each(arguments,function(q,B){for(var U;(U=l.inArray(B,y,U))>-1;)y.splice(U,1),U<=R&&R--}),this},has:function(q){return q?l.inArray(q,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=v=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=v=[],!h&&!u&&(y=h=""),this},locked:function(){return!!m},fireWith:function(q,B){return m||(B=B||[],B=[q,B.slice?B.slice():B],v.push(B),u||I()),this},fire:function(){return N.fireWith(this,arguments),this},fired:function(){return!!d}};return N};function an(s){return s}function An(s){throw s}function bi(s,u,h,d){var m;try{s&&X(m=s.promise)?m.call(s).done(u).fail(h):s&&X(m=s.then)?m.call(s,u,h):u.apply(void 0,[s].slice(d))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var u=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",d={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(v){l.each(u,function(R,I){var N=X(y[I[4]])&&y[I[4]];m[I[1]](function(){var q=N&&N.apply(this,arguments);q&&X(q.promise)?q.promise().progress(v.notify).done(v.resolve).fail(v.reject):v[I[0]+"With"](this,N?[q]:arguments)})}),y=null}).promise()},then:function(y,v,R){var I=0;function N(q,B,U,Q){return function(){var se=this,_e=arguments,me=function(){var o,f;if(!(q<I)){if(o=U.apply(se,_e),o===B.promise())throw new TypeError("Thenable self-resolution");f=o&&(typeof o=="object"||typeof o=="function")&&o.then,X(f)?Q?f.call(o,N(I,B,an,Q),N(I,B,An,Q)):(I++,f.call(o,N(I,B,an,Q),N(I,B,An,Q),N(I,B,an,B.notifyWith))):(U!==an&&(se=void 0,_e=[o]),(Q||B.resolveWith)(se,_e))}},Me=Q?me:function(){try{me()}catch(o){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(o,Me.error),q+1>=I&&(U!==An&&(se=void 0,_e=[o]),B.rejectWith(se,_e))}};q?Me():(l.Deferred.getErrorHook?Me.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Me.error=l.Deferred.getStackHook()),e.setTimeout(Me))}}return l.Deferred(function(q){u[0][3].add(N(0,q,X(R)?R:an,q.notifyWith)),u[1][3].add(N(0,q,X(y)?y:an)),u[2][3].add(N(0,q,X(v)?v:An))}).promise()},promise:function(y){return y!=null?l.extend(y,d):d}},m={};return l.each(u,function(y,v){var R=v[2],I=v[5];d[v[1]]=R.add,I&&R.add(function(){h=I},u[3-y][2].disable,u[3-y][3].disable,u[0][2].lock,u[0][3].lock),R.add(v[3].fire),m[v[0]]=function(){return m[v[0]+"With"](this===m?void 0:this,arguments),this},m[v[0]+"With"]=R.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var u=arguments.length,h=u,d=Array(h),m=a.call(arguments),y=l.Deferred(),v=function(R){return function(I){d[R]=this,m[R]=arguments.length>1?a.call(arguments):I,--u||y.resolveWith(d,m)}};if(u<=1&&(bi(s,y.done(v(h)).resolve,y.reject,!u),y.state()==="pending"||X(m[h]&&m[h].then)))return y.then();for(;h--;)bi(m[h],v(h),y.reject);return y.promise()}});var ta=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&ta.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},l.readyException=function(s){e.setTimeout(function(){throw s})};var sr=l.Deferred();l.fn.ready=function(s){return sr.then(s).catch(function(u){l.readyException(u)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&sr.resolveWith(Y,[l]))}}),l.ready.then=sr.then;function bn(){Y.removeEventListener("DOMContentLoaded",bn),e.removeEventListener("load",bn),l.ready()}Y.readyState==="complete"||Y.readyState!=="loading"&&!Y.documentElement.doScroll?e.setTimeout(l.ready):(Y.addEventListener("DOMContentLoaded",bn),e.addEventListener("load",bn));var At=function(s,u,h,d,m,y,v){var R=0,I=s.length,N=h==null;if(je(h)==="object"){m=!0;for(R in h)At(s,u,R,h[R],!0,y,v)}else if(d!==void 0&&(m=!0,X(d)||(v=!0),N&&(v?(u.call(s,d),u=null):(N=u,u=function(q,B,U){return N.call(l(q),U)})),u))for(;R<I;R++)u(s[R],h,v?d:d.call(s[R],R,u(s[R],h)));return m?s:N?u.call(s):I?u(s[0],h):y},Ye=/^-ms-/,nt=/-([a-z])/g;function Or(s,u){return u.toUpperCase()}function bt(s){return s.replace(Ye,"ms-").replace(nt,Or)}var Sn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function or(){this.expando=l.expando+or.uid++}or.uid=1,or.prototype={cache:function(s){var u=s[this.expando];return u||(u={},Sn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,h){var d,m=this.cache(s);if(typeof u=="string")m[bt(u)]=h;else for(d in u)m[bt(d)]=u[d];return m},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][bt(u)]},access:function(s,u,h){return u===void 0||u&&typeof u=="string"&&h===void 0?this.get(s,u):(this.set(s,u,h),h!==void 0?h:u)},remove:function(s,u){var h,d=s[this.expando];if(d!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(bt):(u=bt(u),u=u in d?[u]:u.match(It)||[]),h=u.length;h--;)delete d[u[h]];(u===void 0||l.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!l.isEmptyObject(u)}};var ie=new or,rt=new or,ks=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Si=/[A-Z]/g;function na(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:ks.test(s)?JSON.parse(s):s}function Ds(s,u,h){var d;if(h===void 0&&s.nodeType===1)if(d="data-"+u.replace(Si,"-$&").toLowerCase(),h=s.getAttribute(d),typeof h=="string"){try{h=na(h)}catch{}rt.set(s,u,h)}else h=void 0;return h}l.extend({hasData:function(s){return rt.hasData(s)||ie.hasData(s)},data:function(s,u,h){return rt.access(s,u,h)},removeData:function(s,u){rt.remove(s,u)},_data:function(s,u,h){return ie.access(s,u,h)},_removeData:function(s,u){ie.remove(s,u)}}),l.fn.extend({data:function(s,u){var h,d,m,y=this[0],v=y&&y.attributes;if(s===void 0){if(this.length&&(m=rt.get(y),y.nodeType===1&&!ie.get(y,"hasDataAttrs"))){for(h=v.length;h--;)v[h]&&(d=v[h].name,d.indexOf("data-")===0&&(d=bt(d.slice(5)),Ds(y,d,m[d])));ie.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){rt.set(this,s)}):At(this,function(R){var I;if(y&&R===void 0)return I=rt.get(y,s),I!==void 0||(I=Ds(y,s),I!==void 0)?I:void 0;this.each(function(){rt.set(this,s,R)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){rt.remove(this,s)})}}),l.extend({queue:function(s,u,h){var d;if(s)return u=(u||"fx")+"queue",d=ie.get(s,u),h&&(!d||Array.isArray(h)?d=ie.access(s,u,l.makeArray(h)):d.push(h)),d||[]},dequeue:function(s,u){u=u||"fx";var h=l.queue(s,u),d=h.length,m=h.shift(),y=l._queueHooks(s,u),v=function(){l.dequeue(s,u)};m==="inprogress"&&(m=h.shift(),d--),m&&(u==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,v,y)),!d&&y&&y.empty.fire()},_queueHooks:function(s,u){var h=u+"queueHooks";return ie.get(s,h)||ie.access(s,h,{empty:l.Callbacks("once memory").add(function(){ie.remove(s,[u+"queue",h])})})}}),l.fn.extend({queue:function(s,u){var h=2;return typeof s!="string"&&(u=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):u===void 0?this:this.each(function(){var d=l.queue(this,s,u);l._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var h,d=1,m=l.Deferred(),y=this,v=this.length,R=function(){--d||m.resolveWith(y,[y])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";v--;)h=ie.get(y[v],s+"queueHooks"),h&&h.empty&&(d++,h.empty.add(R));return R(),m.promise(u)}});var Ci=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Cn=new RegExp("^(?:([+-])=|)("+Ci+")([a-z%]*)$","i"),gt=["Top","Right","Bottom","Left"],Nt=Y.documentElement,jt=function(s){return l.contains(s.ownerDocument,s)},un={composed:!0};Nt.getRootNode&&(jt=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(un)===s.ownerDocument});var ar=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&jt(s)&&l.css(s,"display")==="none"};function ur(s,u,h,d){var m,y,v=20,R=d?function(){return d.cur()}:function(){return l.css(s,u,"")},I=R(),N=h&&h[3]||(l.cssNumber[u]?"":"px"),q=s.nodeType&&(l.cssNumber[u]||N!=="px"&&+I)&&Cn.exec(l.css(s,u));if(q&&q[3]!==N){for(I=I/2,N=N||q[3],q=+I||1;v--;)l.style(s,u,q+N),(1-y)*(1-(y=R()/I||.5))<=0&&(v=0),q=q/y;q=q*2,l.style(s,u,q+N),h=h||[]}return h&&(q=+q||+I||0,m=h[1]?q+(h[1]+1)*h[2]:+h[2],d&&(d.unit=N,d.start=q,d.end=m)),m}var Ri={};function cr(s){var u,h=s.ownerDocument,d=s.nodeName,m=Ri[d];return m||(u=h.body.appendChild(h.createElement(d)),m=l.css(u,"display"),u.parentNode.removeChild(u),m==="none"&&(m="block"),Ri[d]=m,m)}function cn(s,u){for(var h,d,m=[],y=0,v=s.length;y<v;y++)d=s[y],d.style&&(h=d.style.display,u?(h==="none"&&(m[y]=ie.get(d,"display")||null,m[y]||(d.style.display="")),d.style.display===""&&ar(d)&&(m[y]=cr(d))):h!=="none"&&(m[y]="none",ie.set(d,"display",h)));for(y=0;y<v;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}l.fn.extend({show:function(){return cn(this,!0)},hide:function(){return cn(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){ar(this)?l(this).show():l(this).hide()})}});var qe=/^(?:checkbox|radio)$/i,Pi=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Rn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=Y.createDocumentFragment(),u=s.appendChild(Y.createElement("div")),h=Y.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),u.appendChild(h),W.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",W.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",W.option=!!u.lastChild})();var Ze={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Ze.tbody=Ze.tfoot=Ze.colgroup=Ze.caption=Ze.thead,Ze.th=Ze.td,W.option||(Ze.optgroup=Ze.option=[1,"<select multiple='multiple'>","</select>"]);function ut(s,u){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(u||"*"):h=[],u===void 0||u&&S(s,u)?l.merge([s],h):h}function ki(s,u){for(var h=0,d=s.length;h<d;h++)ie.set(s[h],"globalEval",!u||ie.get(u[h],"globalEval"))}var Pn=/<|&#?\w+;/;function Ns(s,u,h,d,m){for(var y,v,R,I,N,q,B=u.createDocumentFragment(),U=[],Q=0,se=s.length;Q<se;Q++)if(y=s[Q],y||y===0)if(je(y)==="object")l.merge(U,y.nodeType?[y]:y);else if(!Pn.test(y))U.push(u.createTextNode(y));else{for(v=v||B.appendChild(u.createElement("div")),R=(Pi.exec(y)||["",""])[1].toLowerCase(),I=Ze[R]||Ze._default,v.innerHTML=I[1]+l.htmlPrefilter(y)+I[2],q=I[0];q--;)v=v.lastChild;l.merge(U,v.childNodes),v=B.firstChild,v.textContent=""}for(B.textContent="",Q=0;y=U[Q++];){if(d&&l.inArray(y,d)>-1){m&&m.push(y);continue}if(N=jt(y),v=ut(B.appendChild(y),"script"),N&&ki(v),h)for(q=0;y=v[q++];)Rn.test(y.type||"")&&h.push(y)}return B}var xs=/^([^.]*)(?:\.(.+)|)/;function xt(){return!0}function ln(){return!1}function Mr(s,u,h,d,m,y){var v,R;if(typeof u=="object"){typeof h!="string"&&(d=d||h,h=void 0);for(R in u)Mr(s,R,h,d,u[R],y);return s}if(d==null&&m==null?(m=h,d=h=void 0):m==null&&(typeof h=="string"?(m=d,d=void 0):(m=d,d=h,h=void 0)),m===!1)m=ln;else if(!m)return s;return y===1&&(v=m,m=function(I){return l().off(I),v.apply(this,arguments)},m.guid=v.guid||(v.guid=l.guid++)),s.each(function(){l.event.add(this,u,m,d,h)})}l.event={global:{},add:function(s,u,h,d,m){var y,v,R,I,N,q,B,U,Q,se,_e,me=ie.get(s);if(Sn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&l.find.matchesSelector(Nt,m),h.guid||(h.guid=l.guid++),(I=me.events)||(I=me.events=Object.create(null)),(v=me.handle)||(v=me.handle=function(Me){return typeof l<"u"&&l.event.triggered!==Me.type?l.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(It)||[""],N=u.length;N--;)R=xs.exec(u[N])||[],Q=_e=R[1],se=(R[2]||"").split(".").sort(),Q&&(B=l.event.special[Q]||{},Q=(m?B.delegateType:B.bindType)||Q,B=l.event.special[Q]||{},q=l.extend({type:Q,origType:_e,data:d,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:se.join(".")},y),(U=I[Q])||(U=I[Q]=[],U.delegateCount=0,(!B.setup||B.setup.call(s,d,se,v)===!1)&&s.addEventListener&&s.addEventListener(Q,v)),B.add&&(B.add.call(s,q),q.handler.guid||(q.handler.guid=h.guid)),m?U.splice(U.delegateCount++,0,q):U.push(q),l.event.global[Q]=!0)},remove:function(s,u,h,d,m){var y,v,R,I,N,q,B,U,Q,se,_e,me=ie.hasData(s)&&ie.get(s);if(!(!me||!(I=me.events))){for(u=(u||"").match(It)||[""],N=u.length;N--;){if(R=xs.exec(u[N])||[],Q=_e=R[1],se=(R[2]||"").split(".").sort(),!Q){for(Q in I)l.event.remove(s,Q+u[N],h,d,!0);continue}for(B=l.event.special[Q]||{},Q=(d?B.delegateType:B.bindType)||Q,U=I[Q]||[],R=R[2]&&new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"),v=y=U.length;y--;)q=U[y],(m||_e===q.origType)&&(!h||h.guid===q.guid)&&(!R||R.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(U.splice(y,1),q.selector&&U.delegateCount--,B.remove&&B.remove.call(s,q));v&&!U.length&&((!B.teardown||B.teardown.call(s,se,me.handle)===!1)&&l.removeEvent(s,Q,me.handle),delete I[Q])}l.isEmptyObject(I)&&ie.remove(s,"handle events")}},dispatch:function(s){var u,h,d,m,y,v,R=new Array(arguments.length),I=l.event.fix(s),N=(ie.get(this,"events")||Object.create(null))[I.type]||[],q=l.event.special[I.type]||{};for(R[0]=I,u=1;u<arguments.length;u++)R[u]=arguments[u];if(I.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,I)===!1)){for(v=l.event.handlers.call(this,I,N),u=0;(m=v[u++])&&!I.isPropagationStopped();)for(I.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!I.isImmediatePropagationStopped();)(!I.rnamespace||y.namespace===!1||I.rnamespace.test(y.namespace))&&(I.handleObj=y,I.data=y.data,d=((l.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,R),d!==void 0&&(I.result=d)===!1&&(I.preventDefault(),I.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,I),I.result}},handlers:function(s,u){var h,d,m,y,v,R=[],I=u.delegateCount,N=s.target;if(I&&N.nodeType&&!(s.type==="click"&&s.button>=1)){for(;N!==this;N=N.parentNode||this)if(N.nodeType===1&&!(s.type==="click"&&N.disabled===!0)){for(y=[],v={},h=0;h<I;h++)d=u[h],m=d.selector+" ",v[m]===void 0&&(v[m]=d.needsContext?l(m,this).index(N)>-1:l.find(m,this,null,[N]).length),v[m]&&y.push(d);y.length&&R.push({elem:N,handlers:y})}}return N=this,I<u.length&&R.push({elem:N,handlers:u.slice(I)}),R},addProp:function(s,u){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:X(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return qe.test(u.type)&&u.click&&S(u,"input")&&kn(u,"click",!0),!1},trigger:function(s){var u=this||s;return qe.test(u.type)&&u.click&&S(u,"input")&&kn(u,"click"),!0},_default:function(s){var u=s.target;return qe.test(u.type)&&u.click&&S(u,"input")&&ie.get(u,"click")||S(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function kn(s,u,h){if(!h){ie.get(s,u)===void 0&&l.event.add(s,u,xt);return}ie.set(s,u,!1),l.event.add(s,u,{namespace:!1,handler:function(d){var m,y=ie.get(this,u);if(d.isTrigger&1&&this[u]){if(y)(l.event.special[u]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),ie.set(this,u,y),this[u](),m=ie.get(this,u),ie.set(this,u,!1),y!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else y&&(ie.set(this,u,l.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=xt)}})}l.removeEvent=function(s,u,h){s.removeEventListener&&s.removeEventListener(u,h)},l.Event=function(s,u){if(!(this instanceof l.Event))return new l.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?xt:ln,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&l.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:ln,isPropagationStopped:ln,isImmediatePropagationStopped:ln,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=xt,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=xt,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=xt,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,u){function h(d){if(Y.documentMode){var m=ie.get(this,"handle"),y=l.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(d),y.target===y.currentTarget&&m(y)}else l.event.simulate(u,d.target,l.event.fix(d))}l.event.special[s]={setup:function(){var d;if(kn(this,s,!0),Y.documentMode)d=ie.get(this,u),d||this.addEventListener(u,h),ie.set(this,u,(d||0)+1);else return!1},trigger:function(){return kn(this,s),!0},teardown:function(){var d;if(Y.documentMode)d=ie.get(this,u)-1,d?ie.set(this,u,d):(this.removeEventListener(u,h),ie.remove(this,u));else return!1},_default:function(d){return ie.get(d.target,s)},delegateType:u},l.event.special[u]={setup:function(){var d=this.ownerDocument||this.document||this,m=Y.documentMode?this:d,y=ie.get(m,u);y||(Y.documentMode?this.addEventListener(u,h):d.addEventListener(s,h,!0)),ie.set(m,u,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=Y.documentMode?this:d,y=ie.get(m,u)-1;y?ie.set(m,u,y):(Y.documentMode?this.removeEventListener(u,h):d.removeEventListener(s,h,!0),ie.remove(m,u))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){l.event.special[s]={delegateType:u,bindType:u,handle:function(h){var d,m=this,y=h.relatedTarget,v=h.handleObj;return(!y||y!==m&&!l.contains(m,y))&&(h.type=v.origType,d=v.handler.apply(this,arguments),h.type=u),d}}}),l.fn.extend({on:function(s,u,h,d){return Mr(this,s,u,h,d)},one:function(s,u,h,d){return Mr(this,s,u,h,d,1)},off:function(s,u,h){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,l(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,u,s[m]);return this}return(u===!1||typeof u=="function")&&(h=u,u=void 0),h===!1&&(h=ln),this.each(function(){l.event.remove(this,s,h,u)})}});var lr=/<script|<style|<link/i,ra=/checked\s*(?:[^=]|=\s*.checked.)/i,qt=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Di(s,u){return S(s,"table")&&S(u.nodeType!==11?u:u.firstChild,"tr")&&l(s).children("tbody")[0]||s}function Vs(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function Ni(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Lr(s,u){var h,d,m,y,v,R,I;if(u.nodeType===1){if(ie.hasData(s)&&(y=ie.get(s),I=y.events,I)){ie.remove(u,"handle events");for(m in I)for(h=0,d=I[m].length;h<d;h++)l.event.add(u,m,I[m][h])}rt.hasData(s)&&(v=rt.access(s),R=l.extend({},v),rt.set(u,R))}}function Os(s,u){var h=u.nodeName.toLowerCase();h==="input"&&qe.test(s.type)?u.checked=s.checked:(h==="input"||h==="textarea")&&(u.defaultValue=s.defaultValue)}function Dn(s,u,h,d){u=c(u);var m,y,v,R,I,N,q=0,B=s.length,U=B-1,Q=u[0],se=X(Q);if(se||B>1&&typeof Q=="string"&&!W.checkClone&&ra.test(Q))return s.each(function(_e){var me=s.eq(_e);se&&(u[0]=Q.call(this,_e,me.html())),Dn(me,u,h,d)});if(B&&(m=Ns(u,s[0].ownerDocument,!1,s,d),y=m.firstChild,m.childNodes.length===1&&(m=y),y||d)){for(v=l.map(ut(m,"script"),Vs),R=v.length;q<B;q++)I=m,q!==U&&(I=l.clone(I,!0,!0),R&&l.merge(v,ut(I,"script"))),h.call(s[q],I,q);if(R)for(N=v[v.length-1].ownerDocument,l.map(v,Ni),q=0;q<R;q++)I=v[q],Rn.test(I.type||"")&&!ie.access(I,"globalEval")&&l.contains(N,I)&&(I.src&&(I.type||"").toLowerCase()!=="module"?l._evalUrl&&!I.noModule&&l._evalUrl(I.src,{nonce:I.nonce||I.getAttribute("nonce")},N):Se(I.textContent.replace(qt,""),I,N))}return s}function xi(s,u,h){for(var d,m=u?l.filter(u,s):s,y=0;(d=m[y])!=null;y++)!h&&d.nodeType===1&&l.cleanData(ut(d)),d.parentNode&&(h&&jt(d)&&ki(ut(d,"script")),d.parentNode.removeChild(d));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,u,h){var d,m,y,v,R=s.cloneNode(!0),I=jt(s);if(!W.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(v=ut(R),y=ut(s),d=0,m=y.length;d<m;d++)Os(y[d],v[d]);if(u)if(h)for(y=y||ut(s),v=v||ut(R),d=0,m=y.length;d<m;d++)Lr(y[d],v[d]);else Lr(s,R);return v=ut(R,"script"),v.length>0&&ki(v,!I&&ut(s,"script")),R},cleanData:function(s){for(var u,h,d,m=l.event.special,y=0;(h=s[y])!==void 0;y++)if(Sn(h)){if(u=h[ie.expando]){if(u.events)for(d in u.events)m[d]?l.event.remove(h,d):l.removeEvent(h,d,u.handle);h[ie.expando]=void 0}h[rt.expando]&&(h[rt.expando]=void 0)}}}),l.fn.extend({detach:function(s){return xi(this,s,!0)},remove:function(s){return xi(this,s)},text:function(s){return At(this,function(u){return u===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return Dn(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Di(this,s);u.appendChild(s)}})},prepend:function(){return Dn(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Di(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return Dn(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return Dn(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(l.cleanData(ut(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return l.clone(this,s,u)})},html:function(s){return At(this,function(u){var h=this[0]||{},d=0,m=this.length;if(u===void 0&&h.nodeType===1)return h.innerHTML;if(typeof u=="string"&&!lr.test(u)&&!Ze[(Pi.exec(u)||["",""])[1].toLowerCase()]){u=l.htmlPrefilter(u);try{for(;d<m;d++)h=this[d]||{},h.nodeType===1&&(l.cleanData(ut(h,!1)),h.innerHTML=u);h=0}catch{}}h&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return Dn(this,arguments,function(u){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(ut(this)),h&&h.replaceChild(u,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){l.fn[s]=function(h){for(var d,m=[],y=l(h),v=y.length-1,R=0;R<=v;R++)d=R===v?this:this.clone(!0),l(y[R])[u](d),p.apply(m,d.get());return this.pushStack(m)}});var Vi=new RegExp("^("+Ci+")(?!px)[a-z%]+$","i"),Nn=/^--/,hr=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},Fr=function(s,u,h){var d,m,y={};for(m in u)y[m]=s.style[m],s.style[m]=u[m];d=h.call(s);for(m in u)s.style[m]=y[m];return d},fr=new RegExp(gt.join("|"),"i");(function(){function s(){if(N){I.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",N.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Nt.appendChild(I).appendChild(N);var q=e.getComputedStyle(N);h=q.top!=="1%",R=u(q.marginLeft)===12,N.style.right="60%",y=u(q.right)===36,d=u(q.width)===36,N.style.position="absolute",m=u(N.offsetWidth/3)===12,Nt.removeChild(I),N=null}}function u(q){return Math.round(parseFloat(q))}var h,d,m,y,v,R,I=Y.createElement("div"),N=Y.createElement("div");N.style&&(N.style.backgroundClip="content-box",N.cloneNode(!0).style.backgroundClip="",W.clearCloneStyle=N.style.backgroundClip==="content-box",l.extend(W,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),R},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var q,B,U,Q;return v==null&&(q=Y.createElement("table"),B=Y.createElement("tr"),U=Y.createElement("div"),q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",B.style.cssText="box-sizing:content-box;border:1px solid",B.style.height="1px",U.style.height="9px",U.style.display="block",Nt.appendChild(q).appendChild(B).appendChild(U),Q=e.getComputedStyle(B),v=parseInt(Q.height,10)+parseInt(Q.borderTopWidth,10)+parseInt(Q.borderBottomWidth,10)===B.offsetHeight,Nt.removeChild(q)),v}}))})();function Tt(s,u,h){var d,m,y,v,R=Nn.test(u),I=s.style;return h=h||hr(s),h&&(v=h.getPropertyValue(u)||h[u],R&&v&&(v=v.replace(We,"$1")||void 0),v===""&&!jt(s)&&(v=l.style(s,u)),!W.pixelBoxStyles()&&Vi.test(v)&&fr.test(u)&&(d=I.width,m=I.minWidth,y=I.maxWidth,I.minWidth=I.maxWidth=I.width=v,v=h.width,I.width=d,I.minWidth=m,I.maxWidth=y)),v!==void 0?v+"":v}function Ur(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Ms=["Webkit","Moz","ms"],Oi=Y.createElement("div").style,Mi={};function Ls(s){for(var u=s[0].toUpperCase()+s.slice(1),h=Ms.length;h--;)if(s=Ms[h]+u,s in Oi)return s}function dr(s){var u=l.cssProps[s]||Mi[s];return u||(s in Oi?s:Mi[s]=Ls(s)||s)}var Li=/^(none|table(?!-c[ea]).+)/,Fs={position:"absolute",visibility:"hidden",display:"block"},Fi={letterSpacing:"0",fontWeight:"400"};function Ui(s,u,h){var d=Cn.exec(u);return d?Math.max(0,d[2]-(h||0))+(d[3]||"px"):u}function ji(s,u,h,d,m,y){var v=u==="width"?1:0,R=0,I=0,N=0;if(h===(d?"border":"content"))return 0;for(;v<4;v+=2)h==="margin"&&(N+=l.css(s,h+gt[v],!0,m)),d?(h==="content"&&(I-=l.css(s,"padding"+gt[v],!0,m)),h!=="margin"&&(I-=l.css(s,"border"+gt[v]+"Width",!0,m))):(I+=l.css(s,"padding"+gt[v],!0,m),h!=="padding"?I+=l.css(s,"border"+gt[v]+"Width",!0,m):R+=l.css(s,"border"+gt[v]+"Width",!0,m));return!d&&y>=0&&(I+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-y-I-R-.5))||0),I+N}function Vt(s,u,h){var d=hr(s),m=!W.boxSizingReliable()||h,y=m&&l.css(s,"boxSizing",!1,d)==="border-box",v=y,R=Tt(s,u,d),I="offset"+u[0].toUpperCase()+u.slice(1);if(Vi.test(R)){if(!h)return R;R="auto"}return(!W.boxSizingReliable()&&y||!W.reliableTrDimensions()&&S(s,"tr")||R==="auto"||!parseFloat(R)&&l.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,d)==="border-box",v=I in s,v&&(R=s[I])),R=parseFloat(R)||0,R+ji(s,u,h||(y?"border":"content"),v,d,R)+"px"}l.extend({cssHooks:{opacity:{get:function(s,u){if(u){var h=Tt(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,h,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,v,R=bt(u),I=Nn.test(u),N=s.style;if(I||(u=dr(R)),v=l.cssHooks[u]||l.cssHooks[R],h!==void 0){if(y=typeof h,y==="string"&&(m=Cn.exec(h))&&m[1]&&(h=ur(s,u,m),y="number"),h==null||h!==h)return;y==="number"&&!I&&(h+=m&&m[3]||(l.cssNumber[R]?"":"px")),!W.clearCloneStyle&&h===""&&u.indexOf("background")===0&&(N[u]="inherit"),(!v||!("set"in v)||(h=v.set(s,h,d))!==void 0)&&(I?N.setProperty(u,h):N[u]=h)}else return v&&"get"in v&&(m=v.get(s,!1,d))!==void 0?m:N[u]}},css:function(s,u,h,d){var m,y,v,R=bt(u),I=Nn.test(u);return I||(u=dr(R)),v=l.cssHooks[u]||l.cssHooks[R],v&&"get"in v&&(m=v.get(s,!0,h)),m===void 0&&(m=Tt(s,u,d)),m==="normal"&&u in Fi&&(m=Fi[u]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),l.each(["height","width"],function(s,u){l.cssHooks[u]={get:function(h,d,m){if(d)return Li.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?Fr(h,Fs,function(){return Vt(h,u,m)}):Vt(h,u,m)},set:function(h,d,m){var y,v=hr(h),R=!W.scrollboxSize()&&v.position==="absolute",I=R||m,N=I&&l.css(h,"boxSizing",!1,v)==="border-box",q=m?ji(h,u,m,N,v):0;return N&&R&&(q-=Math.ceil(h["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(v[u])-ji(h,u,"border",!1,v)-.5)),q&&(y=Cn.exec(d))&&(y[3]||"px")!=="px"&&(h.style[u]=d,d=l.css(h,u)),Ui(h,d,q)}}}),l.cssHooks.marginLeft=Ur(W.reliableMarginLeft,function(s,u){if(u)return(parseFloat(Tt(s,"marginLeft"))||s.getBoundingClientRect().left-Fr(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,u){l.cssHooks[s+u]={expand:function(h){for(var d=0,m={},y=typeof h=="string"?h.split(" "):[h];d<4;d++)m[s+gt[d]+u]=y[d]||y[d-2]||y[0];return m}},s!=="margin"&&(l.cssHooks[s+u].set=Ui)}),l.fn.extend({css:function(s,u){return At(this,function(h,d,m){var y,v,R={},I=0;if(Array.isArray(d)){for(y=hr(h),v=d.length;I<v;I++)R[d[I]]=l.css(h,d[I],!1,y);return R}return m!==void 0?l.style(h,d,m):l.css(h,d)},s,u,arguments.length>1)}});function Ne(s,u,h,d,m){return new Ne.prototype.init(s,u,h,d,m)}l.Tween=Ne,Ne.prototype={constructor:Ne,init:function(s,u,h,d,m,y){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=d,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=Ne.propHooks[this.prop];return s&&s.get?s.get(this):Ne.propHooks._default.get(this)},run:function(s){var u,h=Ne.propHooks[this.prop];return this.options.duration?this.pos=u=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):Ne.propHooks._default.set(this),this}},Ne.prototype.init.prototype=Ne.prototype,Ne.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=l.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[dr(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Ne.propHooks.scrollTop=Ne.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=Ne.prototype.init,l.fx.step={};var St,Bt,qi=/^(?:toggle|show|hide)$/,Pe=/queueHooks$/;function xn(){Bt&&(Y.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(xn):e.setTimeout(xn,l.fx.interval),l.fx.tick())}function Vn(){return e.setTimeout(function(){St=void 0}),St=Date.now()}function $t(s,u){var h,d=0,m={height:s};for(u=u?1:0;d<4;d+=2-u)h=gt[d],m["margin"+h]=m["padding"+h]=s;return u&&(m.opacity=m.width=s),m}function Us(s,u,h){for(var d,m=(Et.tweeners[u]||[]).concat(Et.tweeners["*"]),y=0,v=m.length;y<v;y++)if(d=m[y].call(h,u,s))return d}function js(s,u,h){var d,m,y,v,R,I,N,q,B="width"in u||"height"in u,U=this,Q={},se=s.style,_e=s.nodeType&&ar(s),me=ie.get(s,"fxshow");h.queue||(v=l._queueHooks(s,"fx"),v.unqueued==null&&(v.unqueued=0,R=v.empty.fire,v.empty.fire=function(){v.unqueued||R()}),v.unqueued++,U.always(function(){U.always(function(){v.unqueued--,l.queue(s,"fx").length||v.empty.fire()})}));for(d in u)if(m=u[d],qi.test(m)){if(delete u[d],y=y||m==="toggle",m===(_e?"hide":"show"))if(m==="show"&&me&&me[d]!==void 0)_e=!0;else continue;Q[d]=me&&me[d]||l.style(s,d)}if(I=!l.isEmptyObject(u),!(!I&&l.isEmptyObject(Q))){B&&s.nodeType===1&&(h.overflow=[se.overflow,se.overflowX,se.overflowY],N=me&&me.display,N==null&&(N=ie.get(s,"display")),q=l.css(s,"display"),q==="none"&&(N?q=N:(cn([s],!0),N=s.style.display||N,q=l.css(s,"display"),cn([s]))),(q==="inline"||q==="inline-block"&&N!=null)&&l.css(s,"float")==="none"&&(I||(U.done(function(){se.display=N}),N==null&&(q=se.display,N=q==="none"?"":q)),se.display="inline-block")),h.overflow&&(se.overflow="hidden",U.always(function(){se.overflow=h.overflow[0],se.overflowX=h.overflow[1],se.overflowY=h.overflow[2]})),I=!1;for(d in Q)I||(me?"hidden"in me&&(_e=me.hidden):me=ie.access(s,"fxshow",{display:N}),y&&(me.hidden=!_e),_e&&cn([s],!0),U.done(function(){_e||cn([s]),ie.remove(s,"fxshow");for(d in Q)l.style(s,d,Q[d])})),I=Us(_e?me[d]:0,d,U),d in me||(me[d]=I.start,_e&&(I.end=I.start,I.start=0))}}function ia(s,u){var h,d,m,y,v;for(h in s)if(d=bt(h),m=u[d],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==d&&(s[d]=y,delete s[h]),v=l.cssHooks[d],v&&"expand"in v){y=v.expand(y),delete s[d];for(h in y)h in s||(s[h]=y[h],u[h]=m)}else u[d]=m}function Et(s,u,h){var d,m,y=0,v=Et.prefilters.length,R=l.Deferred().always(function(){delete I.elem}),I=function(){if(m)return!1;for(var B=St||Vn(),U=Math.max(0,N.startTime+N.duration-B),Q=U/N.duration||0,se=1-Q,_e=0,me=N.tweens.length;_e<me;_e++)N.tweens[_e].run(se);return R.notifyWith(s,[N,se,U]),se<1&&me?U:(me||R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N]),!1)},N=R.promise({elem:s,props:l.extend({},u),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:u,originalOptions:h,startTime:St||Vn(),duration:h.duration,tweens:[],createTween:function(B,U){var Q=l.Tween(s,N.opts,B,U,N.opts.specialEasing[B]||N.opts.easing);return N.tweens.push(Q),Q},stop:function(B){var U=0,Q=B?N.tweens.length:0;if(m)return this;for(m=!0;U<Q;U++)N.tweens[U].run(1);return B?(R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N,B])):R.rejectWith(s,[N,B]),this}}),q=N.props;for(ia(q,N.opts.specialEasing);y<v;y++)if(d=Et.prefilters[y].call(N,s,q,N.opts),d)return X(d.stop)&&(l._queueHooks(N.elem,N.opts.queue).stop=d.stop.bind(d)),d;return l.map(q,Us,N),X(N.opts.start)&&N.opts.start.call(s,N),N.progress(N.opts.progress).done(N.opts.done,N.opts.complete).fail(N.opts.fail).always(N.opts.always),l.fx.timer(l.extend(I,{elem:s,anim:N,queue:N.opts.queue})),N}l.Animation=l.extend(Et,{tweeners:{"*":[function(s,u){var h=this.createTween(s,u);return ur(h.elem,s,Cn.exec(u),h),h}]},tweener:function(s,u){X(s)?(u=s,s=["*"]):s=s.match(It);for(var h,d=0,m=s.length;d<m;d++)h=s[d],Et.tweeners[h]=Et.tweeners[h]||[],Et.tweeners[h].unshift(u)},prefilters:[js],prefilter:function(s,u){u?Et.prefilters.unshift(s):Et.prefilters.push(s)}}),l.speed=function(s,u,h){var d=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&u||X(s)&&s,duration:s,easing:h&&u||u&&!X(u)&&u};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){X(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(s,u,h,d){return this.filter(ar).css("opacity",0).show().end().animate({opacity:u},s,h,d)},animate:function(s,u,h,d){var m=l.isEmptyObject(s),y=l.speed(u,h,d),v=function(){var R=Et(this,l.extend({},s),y);(m||ie.get(this,"finish"))&&R.stop(!0)};return v.finish=v,m||y.queue===!1?this.each(v):this.queue(y.queue,v)},stop:function(s,u,h){var d=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",v=l.timers,R=ie.get(this);if(y)R[y]&&R[y].stop&&d(R[y]);else for(y in R)R[y]&&R[y].stop&&Pe.test(y)&&d(R[y]);for(y=v.length;y--;)v[y].elem===this&&(s==null||v[y].queue===s)&&(v[y].anim.stop(h),m=!1,v.splice(y,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,h=ie.get(this),d=h[s+"queue"],m=h[s+"queueHooks"],y=l.timers,v=d?d.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),u=y.length;u--;)y[u].elem===this&&y[u].queue===s&&(y[u].anim.stop(!0),y.splice(u,1));for(u=0;u<v;u++)d[u]&&d[u].finish&&d[u].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,u){var h=l.fn[u];l.fn[u]=function(d,m,y){return d==null||typeof d=="boolean"?h.apply(this,arguments):this.animate($t(u,!0),d,m,y)}}),l.each({slideDown:$t("show"),slideUp:$t("hide"),slideToggle:$t("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){l.fn[s]=function(h,d,m){return this.animate(u,h,d,m)}}),l.timers=[],l.fx.tick=function(){var s,u=0,h=l.timers;for(St=Date.now();u<h.length;u++)s=h[u],!s()&&h[u]===s&&h.splice(u--,1);h.length||l.fx.stop(),St=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Bt||(Bt=!0,xn())},l.fx.stop=function(){Bt=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,u){return s=l.fx&&l.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(h,d){var m=e.setTimeout(h,s);d.stop=function(){e.clearTimeout(m)}})},(function(){var s=Y.createElement("input"),u=Y.createElement("select"),h=u.appendChild(Y.createElement("option"));s.type="checkbox",W.checkOn=s.value!=="",W.optSelected=h.selected,s=Y.createElement("input"),s.value="t",s.type="radio",W.radioValue=s.value==="t"})();var qs,pr=l.expr.attrHandle;l.fn.extend({attr:function(s,u){return At(this,l.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,u,h);if((y!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[u.toLowerCase()]||(l.expr.match.bool.test(u)?qs:void 0)),h!==void 0){if(h===null){l.removeAttr(s,u);return}return m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:(s.setAttribute(u,h+""),h)}return m&&"get"in m&&(d=m.get(s,u))!==null?d:(d=l.find.attr(s,u),d??void 0)}},attrHooks:{type:{set:function(s,u){if(!W.radioValue&&u==="radio"&&S(s,"input")){var h=s.value;return s.setAttribute("type",u),h&&(s.value=h),u}}}},removeAttr:function(s,u){var h,d=0,m=u&&u.match(It);if(m&&s.nodeType===1)for(;h=m[d++];)s.removeAttribute(h)}}),qs={set:function(s,u,h){return u===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,u){var h=pr[u]||l.find.attr;pr[u]=function(d,m,y){var v,R,I=m.toLowerCase();return y||(R=pr[I],pr[I]=v,v=h(d,m,y)!=null?I:null,pr[I]=R),v}});var gr=/^(?:input|select|textarea|button)$/i,hn=/^(?:a|area)$/i;l.fn.extend({prop:function(s,u){return At(this,l.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(u=l.propFix[u]||u,m=l.propHooks[u]),h!==void 0?m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:s[u]=h:m&&"get"in m&&(d=m.get(s,u))!==null?d:s[u]},propHooks:{tabIndex:{get:function(s){var u=l.find.attr(s,"tabindex");return u?parseInt(u,10):gr.test(s.nodeName)||hn.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),W.optSelected||(l.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Ht(s){var u=s.match(It)||[];return u.join(" ")}function zt(s){return s.getAttribute&&s.getAttribute("class")||""}function jr(s){return Array.isArray(s)?s:typeof s=="string"?s.match(It)||[]:[]}l.fn.extend({addClass:function(s){var u,h,d,m,y,v;return X(s)?this.each(function(R){l(this).addClass(s.call(this,R,zt(this)))}):(u=jr(s),u.length?this.each(function(){if(d=zt(this),h=this.nodeType===1&&" "+Ht(d)+" ",h){for(y=0;y<u.length;y++)m=u[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");v=Ht(h),d!==v&&this.setAttribute("class",v)}}):this)},removeClass:function(s){var u,h,d,m,y,v;return X(s)?this.each(function(R){l(this).removeClass(s.call(this,R,zt(this)))}):arguments.length?(u=jr(s),u.length?this.each(function(){if(d=zt(this),h=this.nodeType===1&&" "+Ht(d)+" ",h){for(y=0;y<u.length;y++)for(m=u[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");v=Ht(h),d!==v&&this.setAttribute("class",v)}}):this):this.attr("class","")},toggleClass:function(s,u){var h,d,m,y,v=typeof s,R=v==="string"||Array.isArray(s);return X(s)?this.each(function(I){l(this).toggleClass(s.call(this,I,zt(this),u),u)}):typeof u=="boolean"&&R?u?this.addClass(s):this.removeClass(s):(h=jr(s),this.each(function(){if(R)for(y=l(this),m=0;m<h.length;m++)d=h[m],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(s===void 0||v==="boolean")&&(d=zt(this),d&&ie.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":ie.get(this,"__className__")||""))}))},hasClass:function(s){var u,h,d=0;for(u=" "+s+" ";h=this[d++];)if(h.nodeType===1&&(" "+Ht(zt(h))+" ").indexOf(u)>-1)return!0;return!1}});var Bs=/\r/g;l.fn.extend({val:function(s){var u,h,d,m=this[0];return arguments.length?(d=X(s),this.each(function(y){var v;this.nodeType===1&&(d?v=s.call(this,y,l(this).val()):v=s,v==null?v="":typeof v=="number"?v+="":Array.isArray(v)&&(v=l.map(v,function(R){return R==null?"":R+""})),u=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,v,"value")===void 0)&&(this.value=v))})):m?(u=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],u&&"get"in u&&(h=u.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(Bs,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var u=l.find.attr(s,"value");return u??Ht(l.text(s))}},select:{get:function(s){var u,h,d,m=s.options,y=s.selectedIndex,v=s.type==="select-one",R=v?null:[],I=v?y+1:m.length;for(y<0?d=I:d=v?y:0;d<I;d++)if(h=m[d],(h.selected||d===y)&&!h.disabled&&(!h.parentNode.disabled||!S(h.parentNode,"optgroup"))){if(u=l(h).val(),v)return u;R.push(u)}return R},set:function(s,u){for(var h,d,m=s.options,y=l.makeArray(u),v=m.length;v--;)d=m[v],(d.selected=l.inArray(l.valHooks.option.get(d),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=l.inArray(l(s).val(),u)>-1}},W.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var On=e.location,fn={guid:Date.now()},Bi=/\?/;l.parseXML=function(s){var u,h;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=u&&u.getElementsByTagName("parsererror")[0],(!u||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(d){return d.textContent}).join(`
`):s)),u};var $s=/^(?:focusinfocus|focusoutblur)$/,Hs=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,u,h,d){var m,y,v,R,I,N,q,B,U=[h||Y],Q=k.call(s,"type")?s.type:s,se=k.call(s,"namespace")?s.namespace.split("."):[];if(y=B=v=h=h||Y,!(h.nodeType===3||h.nodeType===8)&&!$s.test(Q+l.event.triggered)&&(Q.indexOf(".")>-1&&(se=Q.split("."),Q=se.shift(),se.sort()),I=Q.indexOf(":")<0&&"on"+Q,s=s[l.expando]?s:new l.Event(Q,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=se.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),u=u==null?[s]:l.makeArray(u,[s]),q=l.event.special[Q]||{},!(!d&&q.trigger&&q.trigger.apply(h,u)===!1))){if(!d&&!q.noBubble&&!Z(h)){for(R=q.delegateType||Q,$s.test(R+Q)||(y=y.parentNode);y;y=y.parentNode)U.push(y),v=y;v===(h.ownerDocument||Y)&&U.push(v.defaultView||v.parentWindow||e)}for(m=0;(y=U[m++])&&!s.isPropagationStopped();)B=y,s.type=m>1?R:q.bindType||Q,N=(ie.get(y,"events")||Object.create(null))[s.type]&&ie.get(y,"handle"),N&&N.apply(y,u),N=I&&y[I],N&&N.apply&&Sn(y)&&(s.result=N.apply(y,u),s.result===!1&&s.preventDefault());return s.type=Q,!d&&!s.isDefaultPrevented()&&(!q._default||q._default.apply(U.pop(),u)===!1)&&Sn(h)&&I&&X(h[Q])&&!Z(h)&&(v=h[I],v&&(h[I]=null),l.event.triggered=Q,s.isPropagationStopped()&&B.addEventListener(Q,Hs),h[Q](),s.isPropagationStopped()&&B.removeEventListener(Q,Hs),l.event.triggered=void 0,v&&(h[I]=v)),s.result}},simulate:function(s,u,h){var d=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(d,null,u)}}),l.fn.extend({trigger:function(s,u){return this.each(function(){l.event.trigger(s,u,this)})},triggerHandler:function(s,u){var h=this[0];if(h)return l.event.trigger(s,u,h,!0)}});var Wt=/\[\]$/,zs=/\r?\n/g,$i=/^(?:submit|button|image|reset|file)$/i,qr=/^(?:input|select|textarea|keygen)/i;function Br(s,u,h,d){var m;if(Array.isArray(u))l.each(u,function(y,v){h||Wt.test(s)?d(s,v):Br(s+"["+(typeof v=="object"&&v!=null?y:"")+"]",v,h,d)});else if(!h&&je(u)==="object")for(m in u)Br(s+"["+m+"]",u[m],h,d);else d(s,u)}l.param=function(s,u){var h,d=[],m=function(y,v){var R=X(v)?v():v;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(R??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)Br(h,s[h],u,m);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&qr.test(this.nodeName)&&!$i.test(s)&&(this.checked||!qe.test(s))}).map(function(s,u){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(d){return{name:u.name,value:d.replace(zs,`\r
`)}}):{name:u.name,value:h.replace(zs,`\r
`)}}).get()}});var mr=/%20/g,yr=/#.*$/,Ws=/([?&])_=[^&]*/,Hi=/^(.*?):[ \t]*([^\r\n]*)$/mg,Oe=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,sa=/^(?:GET|HEAD)$/,oa=/^\/\//,zi={},$r={},Wi="*/".concat("*"),Mn=Y.createElement("a");Mn.href=On.href;function Ot(s){return function(u,h){typeof u!="string"&&(h=u,u="*");var d,m=0,y=u.toLowerCase().match(It)||[];if(X(h))for(;d=y[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(h)):(s[d]=s[d]||[]).push(h)}}function Gi(s,u,h,d){var m={},y=s===$r;function v(R){var I;return m[R]=!0,l.each(s[R]||[],function(N,q){var B=q(u,h,d);if(typeof B=="string"&&!y&&!m[B])return u.dataTypes.unshift(B),v(B),!1;if(y)return!(I=B)}),I}return v(u.dataTypes[0])||!m["*"]&&v("*")}function Ki(s,u){var h,d,m=l.ajaxSettings.flatOptions||{};for(h in u)u[h]!==void 0&&((m[h]?s:d||(d={}))[h]=u[h]);return d&&l.extend(!0,s,d),s}function _r(s,u,h){for(var d,m,y,v,R=s.contents,I=s.dataTypes;I[0]==="*";)I.shift(),d===void 0&&(d=s.mimeType||u.getResponseHeader("Content-Type"));if(d){for(m in R)if(R[m]&&R[m].test(d)){I.unshift(m);break}}if(I[0]in h)y=I[0];else{for(m in h){if(!I[0]||s.converters[m+" "+I[0]]){y=m;break}v||(v=m)}y=y||v}if(y)return y!==I[0]&&I.unshift(y),h[y]}function Gs(s,u,h,d){var m,y,v,R,I,N={},q=s.dataTypes.slice();if(q[1])for(v in s.converters)N[v.toLowerCase()]=s.converters[v];for(y=q.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=u),!I&&d&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),I=y,y=q.shift(),y){if(y==="*")y=I;else if(I!=="*"&&I!==y){if(v=N[I+" "+y]||N["* "+y],!v){for(m in N)if(R=m.split(" "),R[1]===y&&(v=N[I+" "+R[0]]||N["* "+R[0]],v)){v===!0?v=N[m]:N[m]!==!0&&(y=R[0],q.unshift(R[1]));break}}if(v!==!0)if(v&&s.throws)u=v(u);else try{u=v(u)}catch(B){return{state:"parsererror",error:v?B:"No conversion from "+I+" to "+y}}}}return{state:"success",data:u}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:On.href,type:"GET",isLocal:Oe.test(On.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Wi,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?Ki(Ki(s,l.ajaxSettings),u):Ki(l.ajaxSettings,s)},ajaxPrefilter:Ot(zi),ajaxTransport:Ot($r),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var h,d,m,y,v,R,I,N,q,B,U=l.ajaxSetup({},u),Q=U.context||U,se=U.context&&(Q.nodeType||Q.jquery)?l(Q):l.event,_e=l.Deferred(),me=l.Callbacks("once memory"),Me=U.statusCode||{},o={},f={},g="canceled",E={readyState:0,getResponseHeader:function(V){var G;if(I){if(!y)for(y={};G=Hi.exec(m);)y[G[1].toLowerCase()+" "]=(y[G[1].toLowerCase()+" "]||[]).concat(G[2]);G=y[V.toLowerCase()+" "]}return G==null?null:G.join(", ")},getAllResponseHeaders:function(){return I?m:null},setRequestHeader:function(V,G){return I==null&&(V=f[V.toLowerCase()]=f[V.toLowerCase()]||V,o[V]=G),this},overrideMimeType:function(V){return I==null&&(U.mimeType=V),this},statusCode:function(V){var G;if(V)if(I)E.always(V[E.status]);else for(G in V)Me[G]=[Me[G],V[G]];return this},abort:function(V){var G=V||g;return h&&h.abort(G),O(0,G),this}};if(_e.promise(E),U.url=((s||U.url||On.href)+"").replace(oa,On.protocol+"//"),U.type=u.method||u.type||U.method||U.type,U.dataTypes=(U.dataType||"*").toLowerCase().match(It)||[""],U.crossDomain==null){R=Y.createElement("a");try{R.href=U.url,R.href=R.href,U.crossDomain=Mn.protocol+"//"+Mn.host!=R.protocol+"//"+R.host}catch{U.crossDomain=!0}}if(U.data&&U.processData&&typeof U.data!="string"&&(U.data=l.param(U.data,U.traditional)),Gi(zi,U,u,E),I)return E;N=l.event&&U.global,N&&l.active++===0&&l.event.trigger("ajaxStart"),U.type=U.type.toUpperCase(),U.hasContent=!sa.test(U.type),d=U.url.replace(yr,""),U.hasContent?U.data&&U.processData&&(U.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(U.data=U.data.replace(mr,"+")):(B=U.url.slice(d.length),U.data&&(U.processData||typeof U.data=="string")&&(d+=(Bi.test(d)?"&":"?")+U.data,delete U.data),U.cache===!1&&(d=d.replace(Ws,"$1"),B=(Bi.test(d)?"&":"?")+"_="+fn.guid+++B),U.url=d+B),U.ifModified&&(l.lastModified[d]&&E.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&E.setRequestHeader("If-None-Match",l.etag[d])),(U.data&&U.hasContent&&U.contentType!==!1||u.contentType)&&E.setRequestHeader("Content-Type",U.contentType),E.setRequestHeader("Accept",U.dataTypes[0]&&U.accepts[U.dataTypes[0]]?U.accepts[U.dataTypes[0]]+(U.dataTypes[0]!=="*"?", "+Wi+"; q=0.01":""):U.accepts["*"]);for(q in U.headers)E.setRequestHeader(q,U.headers[q]);if(U.beforeSend&&(U.beforeSend.call(Q,E,U)===!1||I))return E.abort();if(g="abort",me.add(U.complete),E.done(U.success),E.fail(U.error),h=Gi($r,U,u,E),!h)O(-1,"No Transport");else{if(E.readyState=1,N&&se.trigger("ajaxSend",[E,U]),I)return E;U.async&&U.timeout>0&&(v=e.setTimeout(function(){E.abort("timeout")},U.timeout));try{I=!1,h.send(o,O)}catch(V){if(I)throw V;O(-1,V)}}function O(V,G,fe,Fe){var ye,Le,Be,ct,it,$e=G;I||(I=!0,v&&e.clearTimeout(v),h=void 0,m=Fe||"",E.readyState=V>0?4:0,ye=V>=200&&V<300||V===304,fe&&(ct=_r(U,E,fe)),!ye&&l.inArray("script",U.dataTypes)>-1&&l.inArray("json",U.dataTypes)<0&&(U.converters["text script"]=function(){}),ct=Gs(U,ct,E,ye),ye?(U.ifModified&&(it=E.getResponseHeader("Last-Modified"),it&&(l.lastModified[d]=it),it=E.getResponseHeader("etag"),it&&(l.etag[d]=it)),V===204||U.type==="HEAD"?$e="nocontent":V===304?$e="notmodified":($e=ct.state,Le=ct.data,Be=ct.error,ye=!Be)):(Be=$e,(V||!$e)&&($e="error",V<0&&(V=0))),E.status=V,E.statusText=(G||$e)+"",ye?_e.resolveWith(Q,[Le,$e,E]):_e.rejectWith(Q,[E,$e,Be]),E.statusCode(Me),Me=void 0,N&&se.trigger(ye?"ajaxSuccess":"ajaxError",[E,U,ye?Le:Be]),me.fireWith(Q,[E,$e]),N&&(se.trigger("ajaxComplete",[E,U]),--l.active||l.event.trigger("ajaxStop")))}return E},getJSON:function(s,u,h){return l.get(s,u,h,"json")},getScript:function(s,u){return l.get(s,void 0,u,"script")}}),l.each(["get","post"],function(s,u){l[u]=function(h,d,m,y){return X(d)&&(y=y||m,m=d,d=void 0),l.ajax(l.extend({url:h,type:u,dataType:y,data:d,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),l._evalUrl=function(s,u,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,u,h)}})},l.fn.extend({wrapAll:function(s){var u;return this[0]&&(X(s)&&(s=s.call(this[0])),u=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return X(s)?this.each(function(u){l(this).wrapInner(s.call(this,u))}):this.each(function(){var u=l(this),h=u.contents();h.length?h.wrapAll(s):u.append(s)})},wrap:function(s){var u=X(s);return this.each(function(h){l(this).wrapAll(u?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var Qi={0:200,1223:204},Gt=l.ajaxSettings.xhr();W.cors=!!Gt&&"withCredentials"in Gt,W.ajax=Gt=!!Gt,l.ajaxTransport(function(s){var u,h;if(W.cors||Gt&&!s.crossDomain)return{send:function(d,m){var y,v=s.xhr();if(v.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)v[y]=s.xhrFields[y];s.mimeType&&v.overrideMimeType&&v.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)v.setRequestHeader(y,d[y]);u=function(R){return function(){u&&(u=h=v.onload=v.onerror=v.onabort=v.ontimeout=v.onreadystatechange=null,R==="abort"?v.abort():R==="error"?typeof v.status!="number"?m(0,"error"):m(v.status,v.statusText):m(Qi[v.status]||v.status,v.statusText,(v.responseType||"text")!=="text"||typeof v.responseText!="string"?{binary:v.response}:{text:v.responseText},v.getAllResponseHeaders()))}},v.onload=u(),h=v.onerror=v.ontimeout=u("error"),v.onabort!==void 0?v.onabort=h:v.onreadystatechange=function(){v.readyState===4&&e.setTimeout(function(){u&&h()})},u=u("abort");try{v.send(s.hasContent&&s.data||null)}catch(R){if(u)throw R}},abort:function(){u&&u()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,h;return{send:function(d,m){u=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){u.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),Y.head.appendChild(u[0])},abort:function(){h&&h()}}}});var Xi=[],Ln=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=Xi.pop()||l.expando+"_"+fn.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,u,h){var d,m,y,v=s.jsonp!==!1&&(Ln.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ln.test(s.data)&&"data");if(v||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=X(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,v?s[v]=s[v].replace(Ln,"$1"+d):s.jsonp!==!1&&(s.url+=(Bi.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return y||l.error(d+" was not called"),y[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){y=arguments},h.always(function(){m===void 0?l(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=u.jsonpCallback,Xi.push(d)),y&&X(m)&&m(y[0]),y=m=void 0}),"script"}),W.createHTMLDocument=(function(){var s=Y.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,u,h){if(typeof s!="string")return[];typeof u=="boolean"&&(h=u,u=!1);var d,m,y;return u||(W.createHTMLDocument?(u=Y.implementation.createHTMLDocument(""),d=u.createElement("base"),d.href=Y.location.href,u.head.appendChild(d)):u=Y),m=vi.exec(s),y=!h&&[],m?[u.createElement(m[1])]:(m=Ns([s],u,y),y&&y.length&&l(y).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,u,h){var d,m,y,v=this,R=s.indexOf(" ");return R>-1&&(d=Ht(s.slice(R)),s=s.slice(0,R)),X(u)?(h=u,u=void 0):u&&typeof u=="object"&&(m="POST"),v.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:u}).done(function(I){y=arguments,v.html(d?l("<div>").append(l.parseHTML(I)).find(d):I)}).always(h&&function(I,N){v.each(function(){h.apply(this,y||[I.responseText,N,I])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(u){return s===u.elem}).length},l.offset={setOffset:function(s,u,h){var d,m,y,v,R,I,N,q=l.css(s,"position"),B=l(s),U={};q==="static"&&(s.style.position="relative"),R=B.offset(),y=l.css(s,"top"),I=l.css(s,"left"),N=(q==="absolute"||q==="fixed")&&(y+I).indexOf("auto")>-1,N?(d=B.position(),v=d.top,m=d.left):(v=parseFloat(y)||0,m=parseFloat(I)||0),X(u)&&(u=u.call(s,h,l.extend({},R))),u.top!=null&&(U.top=u.top-R.top+v),u.left!=null&&(U.left=u.left-R.left+m),"using"in u?u.using.call(s,U):B.css(U)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var u,h,d=this[0];if(d)return d.getClientRects().length?(u=d.getBoundingClientRect(),h=d.ownerDocument.defaultView,{top:u.top+h.pageYOffset,left:u.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,h,d=this[0],m={top:0,left:0};if(l.css(d,"position")==="fixed")u=d.getBoundingClientRect();else{for(u=this.offset(),h=d.ownerDocument,s=d.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:u.top-m.top-l.css(d,"marginTop",!0),left:u.left-m.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Nt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var h=u==="pageYOffset";l.fn[s]=function(d){return At(this,function(m,y,v){var R;if(Z(m)?R=m:m.nodeType===9&&(R=m.defaultView),v===void 0)return R?R[u]:m[y];R?R.scrollTo(h?R.pageXOffset:v,h?v:R.pageYOffset):m[y]=v},s,d,arguments.length)}}),l.each(["top","left"],function(s,u){l.cssHooks[u]=Ur(W.pixelPosition,function(h,d){if(d)return d=Tt(h,u),Vi.test(d)?l(h).position()[u]+"px":d})}),l.each({Height:"height",Width:"width"},function(s,u){l.each({padding:"inner"+s,content:u,"":"outer"+s},function(h,d){l.fn[d]=function(m,y){var v=arguments.length&&(h||typeof m!="boolean"),R=h||(m===!0||y===!0?"margin":"border");return At(this,function(I,N,q){var B;return Z(I)?d.indexOf("outer")===0?I["inner"+s]:I.document.documentElement["client"+s]:I.nodeType===9?(B=I.documentElement,Math.max(I.body["scroll"+s],B["scroll"+s],I.body["offset"+s],B["offset"+s],B["client"+s])):q===void 0?l.css(I,N,R):l.style(I,N,q,R)},u,v?m:void 0,v)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){l.fn[u]=function(h){return this.on(u,h)}}),l.fn.extend({bind:function(s,u,h){return this.on(s,null,u,h)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,h,d){return this.on(u,s,h,d)},undelegate:function(s,u,h){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",h)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){l.fn[u]=function(h,d){return arguments.length>0?this.on(u,null,h,d):this.trigger(u)}});var aa=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,u){var h,d,m;if(typeof u=="string"&&(h=s[u],u=s,s=h),!!X(s))return d=a.call(arguments,2),m=function(){return s.apply(u||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=S,l.isFunction=X,l.isWindow=Z,l.camelCase=bt,l.type=je,l.now=Date.now,l.isNumeric=function(s){var u=l.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(aa,"$1")};var Ks=e.jQuery,vr=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=vr),s&&e.jQuery===l&&(e.jQuery=Ks),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(so)),so.exports}var nd=td();const xe=Zf(nd),rd=()=>{};var Gu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},id=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],c=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(c&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},El={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],c=i+1<n.length,p=c?n[i+1]:0,_=i+2<n.length,T=_?n[i+2]:0,A=a>>2,k=(a&3)<<4|p>>4;let M=(p&15)<<2|T>>6,K=T&63;_||(K=64,c||(M=64)),r.push(t[A],t[k],t[M],t[K])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Tl(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):id(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const T=i<n.length?t[n.charAt(i)]:64;++i;const k=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||T==null||k==null)throw new sd;const M=a<<2|p>>4;if(r.push(M),T!==64){const K=p<<4&240|T>>2;if(r.push(K),k!==64){const W=T<<6&192|k;r.push(W)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class sd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const od=function(n){const e=Tl(n);return El.encodeByteArray(e,!0)},yo=function(n){return od(n).replace(/\./g,"")},wl=function(n){try{return El.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ad(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=()=>ad().__FIREBASE_DEFAULTS__,cd=()=>{if(typeof process>"u"||typeof Gu>"u")return;const n=Gu.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ld=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wl(n[1]);return e&&JSON.parse(e)},Mo=()=>{try{return rd()||ud()||cd()||ld()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Il=n=>Mo()?.emulatorHosts?.[n],hd=n=>{const e=Il(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},Al=()=>Mo()?.config,bl=n=>Mo()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Sl(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[yo(JSON.stringify(t)),yo(JSON.stringify(c)),""].join(".")}const ns={};function pd(){const n={prod:[],emulator:[]};for(const e of Object.keys(ns))ns[e]?n.emulator.push(e):n.prod.push(e);return n}function gd(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ku=!1;function Cl(n,e){if(typeof window>"u"||typeof document>"u"||!li(window.location.host)||ns[n]===e||ns[n]||Ku)return;ns[n]=e;function t(M){return`__firebase__banner__${M}`}const r="__firebase__banner",a=pd().prod.length>0;function c(){const M=document.getElementById(r);M&&M.remove()}function p(M){M.style.display="flex",M.style.background="#7faaf0",M.style.position="fixed",M.style.bottom="5px",M.style.left="5px",M.style.padding=".5em",M.style.borderRadius="5px",M.style.alignItems="center"}function _(M,K){M.setAttribute("width","24"),M.setAttribute("id",K),M.setAttribute("height","24"),M.setAttribute("viewBox","0 0 24 24"),M.setAttribute("fill","none"),M.style.marginLeft="-6px"}function T(){const M=document.createElement("span");return M.style.cursor="pointer",M.style.marginLeft="16px",M.style.fontSize="24px",M.innerHTML=" &times;",M.onclick=()=>{Ku=!0,c()},M}function A(M,K){M.setAttribute("id",K),M.innerText="Learn more",M.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",M.setAttribute("target","__blank"),M.style.paddingLeft="5px",M.style.textDecoration="underline"}function k(){const M=gd(r),K=t("text"),W=document.getElementById(K)||document.createElement("span"),X=t("learnmore"),Z=document.getElementById(X)||document.createElement("a"),Y=t("preprendIcon"),Ae=document.getElementById(Y)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(M.created){const Se=M.element;p(Se),A(Z,X);const je=T();_(Ae,Y),Se.append(Ae,W,Z,je),document.body.appendChild(Se)}a?(W.innerText="Preview backend disconnected.",Ae.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(Ae.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",K)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",k):k()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function md(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function yd(){const n=Mo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function _d(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function vd(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Td(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ed(){const n=pt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function wd(){return!yd()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Id(){try{return typeof indexedDB=="object"}catch{return!1}}function Ad(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="FirebaseError";class wn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=bd,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ys.prototype.create)}}class ys{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?Sd(a,r):"Error",p=`${this.serviceName}: ${c} (${i}).`;return new wn(i,p,r)}}function Sd(n,e){return n.replace(Cd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Cd=/\{\$([^}]+)}/g;function Rd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function br(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],c=e[i];if(Qu(a)&&Qu(c)){if(!br(a,c))return!1}else if(a!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function Qu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Pd(n,e){const t=new kd(n,e);return t.subscribe.bind(t)}class kd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Dd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=da),i.error===void 0&&(i.error=da),i.complete===void 0&&(i.complete=da);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Dd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function da(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vt(n){return n&&n._delegate?n._delegate:n}class Sr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new fd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Vd(e))try{this.getOrInitializeService({instanceIdentifier:Er})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Er){return this.instances.has(e)}getOptions(e=Er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&c.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Er){return this.component?this.component.multipleInstances?e:Er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xd(n){return n===Er?void 0:n}function Vd(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Od{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Nd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ee;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ee||(Ee={}));const Md={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},Ld=Ee.INFO,Fd={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},Ud=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Fd[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Xa{constructor(e){this.name=e,this._logLevel=Ld,this._logHandler=Ud,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Md[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const jd=(n,e)=>e.some(t=>n instanceof t);let Xu,Ju;function qd(){return Xu||(Xu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Bd(){return Ju||(Ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Rl=new WeakMap,ba=new WeakMap,Pl=new WeakMap,pa=new WeakMap,Ja=new WeakMap;function $d(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Wn(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Rl.set(t,n)}).catch(()=>{}),Ja.set(e,n),e}function Hd(n){if(ba.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});ba.set(n,e)}let Sa={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ba.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Pl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Wn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function zd(n){Sa=n(Sa)}function Wd(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ga(this),e,...t);return Pl.set(r,e.sort?e.sort():[e]),Wn(r)}:Bd().includes(n)?function(...e){return n.apply(ga(this),e),Wn(Rl.get(this))}:function(...e){return Wn(n.apply(ga(this),e))}}function Gd(n){return typeof n=="function"?Wd(n):(n instanceof IDBTransaction&&Hd(n),jd(n,qd())?new Proxy(n,Sa):n)}function Wn(n){if(n instanceof IDBRequest)return $d(n);if(pa.has(n))return pa.get(n);const e=Gd(n);return e!==n&&(pa.set(n,e),Ja.set(e,n)),e}const ga=n=>Ja.get(n);function Kd(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const c=indexedDB.open(n,e),p=Wn(c);return r&&c.addEventListener("upgradeneeded",_=>{r(Wn(c.result),_.oldVersion,_.newVersion,Wn(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",T=>i(T.oldVersion,T.newVersion,T))}).catch(()=>{}),p}const Qd=["get","getKey","getAll","getAllKeys","count"],Xd=["put","add","delete","clear"],ma=new Map;function Yu(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ma.get(e))return ma.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Xd.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Qd.includes(t)))return;const a=async function(c,...p){const _=this.transaction(c,i?"readwrite":"readonly");let T=_.store;return r&&(T=T.index(p.shift())),(await Promise.all([T[t](...p),i&&_.done]))[0]};return ma.set(e,a),a}zd(n=>({...n,get:(e,t,r)=>Yu(e,t)||n.get(e,t,r),has:(e,t)=>!!Yu(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Yd(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Yd(n){return n.getComponent()?.type==="VERSION"}const Ca="@firebase/app",Zu="0.14.3";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn=new Xa("@firebase/app"),Zd="@firebase/app-compat",ep="@firebase/analytics-compat",tp="@firebase/analytics",np="@firebase/app-check-compat",rp="@firebase/app-check",ip="@firebase/auth",sp="@firebase/auth-compat",op="@firebase/database",ap="@firebase/data-connect",up="@firebase/database-compat",cp="@firebase/functions",lp="@firebase/functions-compat",hp="@firebase/installations",fp="@firebase/installations-compat",dp="@firebase/messaging",pp="@firebase/messaging-compat",gp="@firebase/performance",mp="@firebase/performance-compat",yp="@firebase/remote-config",_p="@firebase/remote-config-compat",vp="@firebase/storage",Tp="@firebase/storage-compat",Ep="@firebase/firestore",wp="@firebase/ai",Ip="@firebase/firestore-compat",Ap="firebase",bp="12.3.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="[DEFAULT]",Sp={[Ca]:"fire-core",[Zd]:"fire-core-compat",[tp]:"fire-analytics",[ep]:"fire-analytics-compat",[rp]:"fire-app-check",[np]:"fire-app-check-compat",[ip]:"fire-auth",[sp]:"fire-auth-compat",[op]:"fire-rtdb",[ap]:"fire-data-connect",[up]:"fire-rtdb-compat",[cp]:"fire-fn",[lp]:"fire-fn-compat",[hp]:"fire-iid",[fp]:"fire-iid-compat",[dp]:"fire-fcm",[pp]:"fire-fcm-compat",[gp]:"fire-perf",[mp]:"fire-perf-compat",[yp]:"fire-rc",[_p]:"fire-rc-compat",[vp]:"fire-gcs",[Tp]:"fire-gcs-compat",[Ep]:"fire-fst",[Ip]:"fire-fst-compat",[wp]:"fire-vertex","fire-js":"fire-js",[Ap]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map,Cp=new Map,Pa=new Map;function ec(n,e){try{n.container.addComponent(e)}catch(t){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ni(n){const e=n.name;if(Pa.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;Pa.set(e,n);for(const t of _o.values())ec(t,n);for(const t of Cp.values())ec(t,n);return!0}function Ya(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Xt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new ys("app","Firebase",Rp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=bp;function kl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ra,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Gn.create("bad-app-name",{appName:String(i)});if(t||(t=Al()),!t)throw Gn.create("no-options");const a=_o.get(i);if(a){if(br(t,a.options)&&br(r,a.config))return a;throw Gn.create("duplicate-app",{appName:i})}const c=new Od(i);for(const _ of Pa.values())c.addComponent(_);const p=new Pp(t,r,c);return _o.set(i,p),p}function Dl(n=Ra){const e=_o.get(n);if(!e&&n===Ra&&Al())return kl();if(!e)throw Gn.create("no-app",{appName:n});return e}function Kn(n,e,t){let r=Sp[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(c.join(" "));return}ni(new Sr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kp="firebase-heartbeat-database",Dp=1,us="firebase-heartbeat-store";let ya=null;function Nl(){return ya||(ya=Kd(kp,Dp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(us)}catch(t){console.warn(t)}}}}).catch(n=>{throw Gn.create("idb-open",{originalErrorMessage:n.message})})),ya}async function Np(n){try{const t=(await Nl()).transaction(us),r=await t.objectStore(us).get(xl(n));return await t.done,r}catch(e){if(e instanceof wn)yn.warn(e.message);else{const t=Gn.create("idb-get",{originalErrorMessage:e?.message});yn.warn(t.message)}}}async function tc(n,e){try{const r=(await Nl()).transaction(us,"readwrite");await r.objectStore(us).put(e,xl(n)),await r.done}catch(t){if(t instanceof wn)yn.warn(t.message);else{const r=Gn.create("idb-set",{originalErrorMessage:t?.message});yn.warn(r.message)}}}function xl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=1024,Vp=30;class Op{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Lp(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=nc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>Vp){const i=Fp(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){yn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=nc(),{heartbeatsToSend:t,unsentEntries:r}=Mp(this._heartbeatsCache.heartbeats),i=yo(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return yn.warn(e),""}}}function nc(){return new Date().toISOString().substring(0,10)}function Mp(n,e=xp){const t=[];let r=n.slice();for(const i of n){const a=t.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),rc(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),rc(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Lp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Id()?Ad().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Np(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return tc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function rc(n){return yo(JSON.stringify({version:2,heartbeats:n})).length}function Fp(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Up(n){ni(new Sr("platform-logger",e=>new Jd(e),"PRIVATE")),ni(new Sr("heartbeat",e=>new Op(e),"PRIVATE")),Kn(Ca,Zu,n),Kn(Ca,Zu,"esm2020"),Kn("fire-js","")}Up("");var jp="firebase",qp="12.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(jp,qp,"app");function Vl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Bp=Vl,Ol=new ys("auth","Firebase",Vl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vo=new Xa("@firebase/auth");function $p(n,...e){vo.logLevel<=Ee.WARN&&vo.warn(`Auth (${hi}): ${n}`,...e)}function oo(n,...e){vo.logLevel<=Ee.ERROR&&vo.error(`Auth (${hi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,...e){throw Za(n,...e)}function Jt(n,...e){return Za(n,...e)}function Ml(n,e,t){const r={...Bp(),[e]:t};return new ys("auth","Firebase",r).create(e,{appName:n.name})}function Ir(n){return Ml(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Za(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ol.create(n,...e)}function he(n,e,...t){if(!n)throw Za(e,...t)}function pn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw oo(e),new Error(e)}function vn(n,e){n||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ka(){return typeof self<"u"&&self.location?.href||""}function Hp(){return ic()==="http:"||ic()==="https:"}function ic(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Hp()||vd()||"connection"in navigator)?navigator.onLine:!0}function Wp(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t){this.shortDelay=e,this.longDelay=t,vn(t>e,"Short delay should be less than long delay!"),this.isMobile=md()||Td()}get(){return zp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n,e){vn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Qp=new vs(3e4,6e4);function tu(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function fi(n,e,t,r,i={}){return Fl(n,i,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const p=_s({key:n.config.apiKey,...c}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const T={method:e,headers:_,...a};return _d()||(T.referrerPolicy="no-referrer"),n.emulatorConfig&&li(n.emulatorConfig.host)&&(T.credentials="include"),Ll.fetch()(await Ul(n,n.config.apiHost,t,p),T)})}async function Fl(n,e,t){n._canInitEmulator=!1;const r={...Gp,...e};try{const i=new Jp(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw Zs(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const p=a.ok?c.errorMessage:c.error.message,[_,T]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zs(n,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw Zs(n,"email-already-in-use",c);if(_==="USER_DISABLED")throw Zs(n,"user-disabled",c);const A=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(T)throw Ml(n,A,T);_n(n,A)}}catch(i){if(i instanceof wn)throw i;_n(n,"network-request-failed",{message:String(i)})}}async function Xp(n,e,t,r,i={}){const a=await fi(n,e,t,r,i);return"mfaPendingCredential"in a&&_n(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function Ul(n,e,t,r){const i=`${e}${t}?${r}`,a=n,c=a.config.emulator?eu(n.config,i):`${n.config.apiScheme}://${i}`;return Kp.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}class Jp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Jt(this.auth,"network-request-failed")),Qp.get())})}}function Zs(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Jt(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yp(n,e){return fi(n,"POST","/v1/accounts:delete",e)}async function To(n,e){return fi(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Zp(n,e=!1){const t=vt(n),r=await t.getIdToken(e),i=nu(r);he(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a?.sign_in_provider;return{claims:i,token:r,authTime:rs(_a(i.auth_time)),issuedAtTime:rs(_a(i.iat)),expirationTime:rs(_a(i.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function _a(n){return Number(n)*1e3}function nu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return oo("JWT malformed, contained fewer than 3 sections"),null;try{const i=wl(t);return i?JSON.parse(i):(oo("Failed to decode base64 JWT payload"),null)}catch(i){return oo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function sc(n){const e=nu(n);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wn&&eg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function eg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=rs(this.lastLoginAt),this.creationTime=rs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(n){const e=n.auth,t=await n.getIdToken(),r=await cs(n,To(e,{idToken:t}));he(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?jl(i.providerUserInfo):[],c=rg(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!c?.length,T=p?_:!1,A={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Da(i.createdAt,i.lastLoginAt),isAnonymous:T};Object.assign(n,A)}async function ng(n){const e=vt(n);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function rg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function jl(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ig(n,e){const t=await Fl(n,{},async()=>{const r=_s({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,c=await Ul(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&li(n.emulatorConfig.host)&&(_.credentials="include"),Ll.fetch()(c,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function sg(n,e){return fi(n,"POST","/v2/accounts:revokeToken",tu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):sc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){he(e.length!==0,"internal-error");const t=sc(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await ig(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,c=new Jr;return r&&(he(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(he(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(he(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(n,e){he(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Lt{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new tg(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Da(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await cs(this,this.stsTokenManager.getToken(this.auth,e));return he(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Zp(this,e)}reload(){return ng(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Lt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Xt(this.auth.app))return Promise.reject(Ir(this.auth));const e=await this.getIdToken();return await cs(this,Yp(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,T=t.createdAt??void 0,A=t.lastLoginAt??void 0,{uid:k,emailVerified:M,isAnonymous:K,providerData:W,stsTokenManager:X}=t;he(k&&X,e,"internal-error");const Z=Jr.fromJSON(this.name,X);he(typeof k=="string",e,"internal-error"),jn(r,e.name),jn(i,e.name),he(typeof M=="boolean",e,"internal-error"),he(typeof K=="boolean",e,"internal-error"),jn(a,e.name),jn(c,e.name),jn(p,e.name),jn(_,e.name),jn(T,e.name),jn(A,e.name);const Y=new Lt({uid:k,auth:e,email:i,emailVerified:M,displayName:r,isAnonymous:K,photoURL:c,phoneNumber:a,tenantId:p,stsTokenManager:Z,createdAt:T,lastLoginAt:A});return W&&Array.isArray(W)&&(Y.providerData=W.map(Ae=>({...Ae}))),_&&(Y._redirectEventId=_),Y}static async _fromIdTokenResponse(e,t,r=!1){const i=new Jr;i.updateFromServerResponse(t);const a=new Lt({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Eo(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];he(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?jl(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!a?.length,p=new Jr;p.updateFromIdToken(r);const _=new Lt({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:c}),T={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Da(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,T),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc=new Map;function gn(n){vn(n instanceof Function,"Expected a class definition");let e=oc.get(n);return e?(vn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,oc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ql.type="NONE";const ac=ql;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(n,e,t){return`firebase:${n}:${e}:${t}`}class Yr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=ao(this.userKey,i.apiKey,a),this.fullPersistenceKey=ao("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await To(this.auth,{idToken:e}).catch(()=>{});return t?Lt._fromGetAccountInfoResponse(this.auth,t,e):null}return Lt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Yr(gn(ac),e,r);const i=(await Promise.all(t.map(async T=>{if(await T._isAvailable())return T}))).filter(T=>T);let a=i[0]||gn(ac);const c=ao(r,e.config.apiKey,e.name);let p=null;for(const T of t)try{const A=await T._get(c);if(A){let k;if(typeof A=="string"){const M=await To(e,{idToken:A}).catch(()=>{});if(!M)break;k=await Lt._fromGetAccountInfoResponse(e,M,A)}else k=Lt._fromJSON(e,A);T!==a&&(p=k),a=T;break}}catch{}const _=i.filter(T=>T._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new Yr(a,e,r):(a=_[0],p&&await a._set(c,p.toJSON()),await Promise.all(t.map(async T=>{if(T!==a)try{await T._remove(c)}catch{}})),new Yr(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uc(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Bl(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Gl(e))return"Blackberry";if(Kl(e))return"Webos";if($l(e))return"Safari";if((e.includes("chrome/")||Hl(e))&&!e.includes("edge/"))return"Chrome";if(Wl(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Bl(n=pt()){return/firefox\//i.test(n)}function $l(n=pt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hl(n=pt()){return/crios\//i.test(n)}function zl(n=pt()){return/iemobile/i.test(n)}function Wl(n=pt()){return/android/i.test(n)}function Gl(n=pt()){return/blackberry/i.test(n)}function Kl(n=pt()){return/webos/i.test(n)}function ru(n=pt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function og(n=pt()){return ru(n)&&!!window.navigator?.standalone}function ag(){return Ed()&&document.documentMode===10}function Ql(n=pt()){return ru(n)||Wl(n)||Kl(n)||Gl(n)||/windows phone/i.test(n)||zl(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(n,e=[]){let t;switch(n){case"Browser":t=uc(pt());break;case"Worker":t=`${uc(pt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${hi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,p)=>{try{const _=e(a);c(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cg(n,e={}){return fi(n,"GET","/v2/passwordPolicy",tu(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lg=6;class hg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??lg,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new cc(this),this.idTokenSubscription=new cc(this),this.beforeStateQueue=new ug(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ol,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=gn(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await Yr.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await To(this,{idToken:e}),r=await Lt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(Xt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,c=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===c)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Wp()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Xt(this.app))return Promise.reject(Ir(this));const t=e?vt(e):null;return t&&he(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Xt(this.app)?Promise.reject(Ir(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Xt(this.app)?Promise.reject(Ir(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await cg(this),t=new hg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ys("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await sg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&gn(e)||this._popupRedirectResolver;he(t,this,"argument-error"),this.redirectPersistenceManager=await Yr.create(this,[gn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(p,this,"internal-error"),p.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Xl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(Xt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&$p(`Error while retrieving App Check token: ${e.error}`),e?.token}}function iu(n){return vt(n)}class cc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pd(t=>this.observer=t)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dg(n){su=n}function pg(n){return su.loadJS(n)}function gg(){return su.gapiScript}function mg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yg(n,e){const t=Ya(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(br(a,e??{}))return i;_n(i,"already-initialized")}return t.initialize({options:e})}function _g(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(gn);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function vg(n,e,t){const r=iu(n);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=Jl(e),{host:c,port:p}=Tg(e),_=p===null?"":`:${p}`,T={url:`${a}//${c}${_}/`},A=Object.freeze({host:c,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(br(T,r.config.emulator)&&br(A,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=T,r.emulatorConfig=A,r.settings.appVerificationDisabledForTesting=!0,li(c)?(Sl(`${a}//${c}${_}`),Cl("Auth",!0)):Eg()}function Jl(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Tg(n){const e=Jl(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:lc(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:lc(c)}}}function lc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Eg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,t){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zr(n,e){return Xp(n,"POST","/v1/accounts:signInWithIdp",tu(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="http://localhost";class Cr extends Yl{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):_n("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const c=new Cr(r,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Zr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Zr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Zr(e,t)}buildRequest(){const e={requestUri:wg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=_s(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Zl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn extends Ts{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ts{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Cr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Bn.credential(t,r)}catch{return null}}}Bn.GOOGLE_SIGN_IN_METHOD="google.com";Bn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Ts{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn extends Ts{constructor(){super("twitter.com")}static credential(e,t){return Cr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Hn.credential(t,r)}catch{return null}}}Hn.TWITTER_SIGN_IN_METHOD="twitter.com";Hn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await Lt._fromIdTokenResponse(e,r,i),c=hc(r);return new ri({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=hc(r);return new ri({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function hc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo extends wn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wo.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new wo(e,t,r,i)}}function eh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?wo._fromErrorAndOperation(n,a,e,r):a})}async function Ig(n,e,t=!1){const r=await cs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return ri._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(n,e,t=!1){const{auth:r}=n;if(Xt(r.app))return Promise.reject(Ir(r));const i="reauthenticate";try{const a=await cs(n,eh(r,i,e,n),t);he(a.idToken,r,"internal-error");const c=nu(a.idToken);he(c,r,"internal-error");const{sub:p}=c;return he(n.uid===p,r,"user-mismatch"),ri._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&_n(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(n,e,t=!1){if(Xt(n.app))return Promise.reject(Ir(n));const r="signIn",i=await eh(n,r,e),a=await ri._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}function Sg(n,e,t,r){return vt(n).onIdTokenChanged(e,t,r)}function Cg(n,e,t){return vt(n).beforeAuthStateChanged(e,t)}function iT(n,e,t,r){return vt(n).onAuthStateChanged(e,t,r)}function sT(n){return vt(n).signOut()}const Io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=1e3,Pg=10;class nh extends th{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ql(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,_)=>{this.notifyListeners(c,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);ag()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Pg):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Rg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}nh.type="LOCAL";const kg=nh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends th{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}rh.type="SESSION";const ih=rh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Lo(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,c=this.handlersMap[i];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(c).map(async T=>T(t.origin,a)),_=await Dg(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((p,_)=>{const T=ou("",20);i.port1.start();const A=setTimeout(()=>{_(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(k){const M=k;if(M.data.eventId===T)switch(M.data.status){case"ack":clearTimeout(A),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(M.data.response);break;default:clearTimeout(A),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:T,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(){return window}function xg(n){Yt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sh(){return typeof Yt().WorkerGlobalScope<"u"&&typeof Yt().importScripts=="function"}async function Vg(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Og(){return navigator?.serviceWorker?.controller||null}function Mg(){return sh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="firebaseLocalStorageDb",Lg=1,Ao="firebaseLocalStorage",ah="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Fo(n,e){return n.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function Fg(){const n=indexedDB.deleteDatabase(oh);return new Es(n).toPromise()}function Na(){const n=indexedDB.open(oh,Lg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ao,{keyPath:ah})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ao)?e(r):(r.close(),await Fg(),e(await Na()))})})}async function fc(n,e,t){const r=Fo(n,!0).put({[ah]:e,value:t});return new Es(r).toPromise()}async function Ug(n,e){const t=Fo(n,!1).get(e),r=await new Es(t).toPromise();return r===void 0?null:r.value}function dc(n,e){const t=Fo(n,!0).delete(e);return new Es(t).toPromise()}const jg=800,qg=3;class uh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Na(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>qg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return sh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(Mg()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await Vg(),!this.activeServiceWorker)return;this.sender=new Ng(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Og()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Na();return await fc(e,Io,"1"),await dc(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>fc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ug(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>dc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Fo(i,!1).getAll();return new Es(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uh.type="LOCAL";const Bg=uh;new vs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n,e){return e?gn(e):(he(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends Yl{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Zr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Zr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Zr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Hg(n){return bg(n.auth,new au(n),n.bypassAuthState)}function zg(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),Ag(t,new au(n),n.bypassAuthState)}async function Wg(n){const{auth:e,user:t}=n;return he(t,e,"internal-error"),Ig(t,new au(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:c,type:p}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(T){this.reject(T)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hg;case"linkViaPopup":case"linkViaRedirect":return Wg;case"reauthViaPopup":case"reauthViaRedirect":return zg;default:_n(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new vs(2e3,1e4);class Xr extends ch{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,Xr.currentPopupAction&&Xr.currentPopupAction.cancel(),Xr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gg.get())};e()}}Xr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="pendingRedirect",uo=new Map;class Qg extends ch{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=uo.get(this.auth._key());if(!e){try{const r=await Xg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}uo.set(this.auth._key(),e)}return this.bypassAuthState||uo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xg(n,e){const t=Zg(e),r=Yg(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function Jg(n,e){uo.set(n._key(),e)}function Yg(n){return gn(n._redirectPersistence)}function Zg(n){return ao(Kg,n.config.apiKey,n.name)}async function em(n,e,t=!1){if(Xt(n.app))return Promise.reject(Ir(n));const r=iu(n),i=$g(r,e),c=await new Qg(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tm=600*1e3;class nm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rm(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!lh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Jt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tm&&this.cachedEventUids.clear(),this.cachedEventUids.has(pc(e))}saveEventToCache(e){this.cachedEventUids.add(pc(e)),this.lastProcessedEventTime=Date.now()}}function pc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function lh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function rm(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return lh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function im(n,e={}){return fi(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,om=/^https?/;async function am(n){if(n.config.emulator)return;const{authorizedDomains:e}=await im(n);for(const t of e)try{if(um(t))return}catch{}_n(n,"unauthorized-domain")}function um(n){const e=ka(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!om.test(t))return!1;if(sm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=new vs(3e4,6e4);function gc(){const n=Yt().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function lm(n){return new Promise((e,t)=>{function r(){gc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{gc(),t(Jt(n,"network-request-failed"))},timeout:cm.get()})}if(Yt().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(Yt().gapi?.load)r();else{const i=mg("iframefcb");return Yt()[i]=()=>{gapi.load?r():t(Jt(n,"network-request-failed"))},pg(`${gg()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw co=null,e})}let co=null;function hm(n){return co=co||lm(n),co}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm=new vs(5e3,15e3),dm="__/auth/iframe",pm="emulator/auth/iframe",gm={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},mm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ym(n){const e=n.config;he(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?eu(e,pm):`https://${n.config.authDomain}/${dm}`,r={apiKey:e.apiKey,appName:n.name,v:hi},i=mm.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${_s(r).slice(1)}`}async function _m(n){const e=await hm(n),t=Yt().gapi;return he(t,n,"internal-error"),e.open({where:document.body,url:ym(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:gm,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const c=Jt(n,"network-request-failed"),p=Yt().setTimeout(()=>{a(c)},fm.get());function _(){Yt().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Tm=500,Em=600,wm="_blank",Im="http://localhost";class mc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Am(n,e,t,r=Tm,i=Em){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...vm,width:r.toString(),height:i.toString(),top:a,left:c},T=pt().toLowerCase();t&&(p=Hl(T)?wm:t),Bl(T)&&(e=e||Im,_.scrollbars="yes");const A=Object.entries(_).reduce((M,[K,W])=>`${M}${K}=${W},`,"");if(og(T)&&p!=="_self")return bm(e||"",p),new mc(null);const k=window.open(e||"",p,A);he(k,n,"popup-blocked");try{k.focus()}catch{}return new mc(k)}function bm(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm="__/auth/handler",Cm="emulator/auth/handler",Rm=encodeURIComponent("fac");async function yc(n,e,t,r,i,a){he(n.config.authDomain,n,"auth-domain-config-required"),he(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:hi,eventId:i};if(e instanceof Zl){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Rd(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[A,k]of Object.entries({}))c[A]=k}if(e instanceof Ts){const A=e.getScopes().filter(k=>k!=="");A.length>0&&(c.scopes=A.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const A of Object.keys(p))p[A]===void 0&&delete p[A];const _=await n._getAppCheckToken(),T=_?`#${Rm}=${encodeURIComponent(_)}`:"";return`${Pm(n)}?${_s(p).slice(1)}${T}`}function Pm({config:n}){return n.emulator?eu(n,Cm):`https://${n.authDomain}/${Sm}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va="webStorageSupport";class km{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ih,this._completeRedirectFn=em,this._overrideRedirectResult=Jg}async _openPopup(e,t,r,i){vn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await yc(e,t,r,ka(),i);return Am(e,a,ou())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await yc(e,t,r,ka(),i);return xg(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(vn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await _m(e),r=new nm(e);return t.register("authEvent",i=>(he(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(va,{type:va},i=>{const a=i?.[0]?.[va];a!==void 0&&t(!!a),_n(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=am(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ql()||$l()||ru()}}const Dm=km;var _c="@firebase/auth",vc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Vm(n){ni(new Sr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=r.options;he(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Xl(n)},T=new fg(r,i,a,_);return _g(T,t),T},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ni(new Sr("auth-internal",e=>{const t=iu(e.getProvider("auth").getImmediate());return(r=>new Nm(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(_c,vc,xm(n)),Kn(_c,vc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Om=300,Mm=bl("authIdTokenMaxAge")||Om;let Tc=null;const Lm=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Mm)return;const i=t?.token;Tc!==i&&(Tc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fm(n=Dl()){const e=Ya(n,"auth");if(e.isInitialized())return e.getImmediate();const t=yg(n,{popupRedirectResolver:Dm,persistence:[Bg,kg,ih]}),r=bl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=Lm(a.toString());Cg(t,c,()=>c(t.currentUser)),Sg(t,p=>c(p))}}const i=Il("auth");return i&&vg(t,`http://${i}`),t}function Um(){return document.getElementsByTagName("head")?.[0]??document}dg({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=Jt("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",Um().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Vm("Browser");var Ec=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Qn,hh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,C){function S(){}S.prototype=C.prototype,l.F=C.prototype,l.prototype=new S,l.prototype.constructor=l,l.D=function(x,D,L){for(var b=Array(arguments.length-2),We=2;We<arguments.length;We++)b[We-2]=arguments[We];return C.prototype[D].apply(x,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,C,S){S||(S=0);const x=Array(16);if(typeof C=="string")for(var D=0;D<16;++D)x[D]=C.charCodeAt(S++)|C.charCodeAt(S++)<<8|C.charCodeAt(S++)<<16|C.charCodeAt(S++)<<24;else for(D=0;D<16;++D)x[D]=C[S++]|C[S++]<<8|C[S++]<<16|C[S++]<<24;C=l.g[0],S=l.g[1],D=l.g[2];let L=l.g[3],b;b=C+(L^S&(D^L))+x[0]+3614090360&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(D^C&(S^D))+x[1]+3905402710&4294967295,L=C+(b<<12&4294967295|b>>>20),b=D+(S^L&(C^S))+x[2]+606105819&4294967295,D=L+(b<<17&4294967295|b>>>15),b=S+(C^D&(L^C))+x[3]+3250441966&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(L^S&(D^L))+x[4]+4118548399&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(D^C&(S^D))+x[5]+1200080426&4294967295,L=C+(b<<12&4294967295|b>>>20),b=D+(S^L&(C^S))+x[6]+2821735955&4294967295,D=L+(b<<17&4294967295|b>>>15),b=S+(C^D&(L^C))+x[7]+4249261313&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(L^S&(D^L))+x[8]+1770035416&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(D^C&(S^D))+x[9]+2336552879&4294967295,L=C+(b<<12&4294967295|b>>>20),b=D+(S^L&(C^S))+x[10]+4294925233&4294967295,D=L+(b<<17&4294967295|b>>>15),b=S+(C^D&(L^C))+x[11]+2304563134&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(L^S&(D^L))+x[12]+1804603682&4294967295,C=S+(b<<7&4294967295|b>>>25),b=L+(D^C&(S^D))+x[13]+4254626195&4294967295,L=C+(b<<12&4294967295|b>>>20),b=D+(S^L&(C^S))+x[14]+2792965006&4294967295,D=L+(b<<17&4294967295|b>>>15),b=S+(C^D&(L^C))+x[15]+1236535329&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(D^L&(S^D))+x[1]+4129170786&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^D&(C^S))+x[6]+3225465664&4294967295,L=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(L^C))+x[11]+643717713&4294967295,D=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(D^L))+x[0]+3921069994&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^L&(S^D))+x[5]+3593408605&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^D&(C^S))+x[10]+38016083&4294967295,L=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(L^C))+x[15]+3634488961&4294967295,D=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(D^L))+x[4]+3889429448&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^L&(S^D))+x[9]+568446438&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^D&(C^S))+x[14]+3275163606&4294967295,L=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(L^C))+x[3]+4107603335&4294967295,D=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(D^L))+x[8]+1163531501&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^L&(S^D))+x[13]+2850285829&4294967295,C=S+(b<<5&4294967295|b>>>27),b=L+(S^D&(C^S))+x[2]+4243563512&4294967295,L=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(L^C))+x[7]+1735328473&4294967295,D=L+(b<<14&4294967295|b>>>18),b=S+(L^C&(D^L))+x[12]+2368359562&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(S^D^L)+x[5]+4294588738&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^D)+x[8]+2272392833&4294967295,L=C+(b<<11&4294967295|b>>>21),b=D+(L^C^S)+x[11]+1839030562&4294967295,D=L+(b<<16&4294967295|b>>>16),b=S+(D^L^C)+x[14]+4259657740&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^L)+x[1]+2763975236&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^D)+x[4]+1272893353&4294967295,L=C+(b<<11&4294967295|b>>>21),b=D+(L^C^S)+x[7]+4139469664&4294967295,D=L+(b<<16&4294967295|b>>>16),b=S+(D^L^C)+x[10]+3200236656&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^L)+x[13]+681279174&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^D)+x[0]+3936430074&4294967295,L=C+(b<<11&4294967295|b>>>21),b=D+(L^C^S)+x[3]+3572445317&4294967295,D=L+(b<<16&4294967295|b>>>16),b=S+(D^L^C)+x[6]+76029189&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^L)+x[9]+3654602809&4294967295,C=S+(b<<4&4294967295|b>>>28),b=L+(C^S^D)+x[12]+3873151461&4294967295,L=C+(b<<11&4294967295|b>>>21),b=D+(L^C^S)+x[15]+530742520&4294967295,D=L+(b<<16&4294967295|b>>>16),b=S+(D^L^C)+x[2]+3299628645&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(D^(S|~L))+x[0]+4096336452&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~D))+x[7]+1126891415&4294967295,L=C+(b<<10&4294967295|b>>>22),b=D+(C^(L|~S))+x[14]+2878612391&4294967295,D=L+(b<<15&4294967295|b>>>17),b=S+(L^(D|~C))+x[5]+4237533241&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~L))+x[12]+1700485571&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~D))+x[3]+2399980690&4294967295,L=C+(b<<10&4294967295|b>>>22),b=D+(C^(L|~S))+x[10]+4293915773&4294967295,D=L+(b<<15&4294967295|b>>>17),b=S+(L^(D|~C))+x[1]+2240044497&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~L))+x[8]+1873313359&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~D))+x[15]+4264355552&4294967295,L=C+(b<<10&4294967295|b>>>22),b=D+(C^(L|~S))+x[6]+2734768916&4294967295,D=L+(b<<15&4294967295|b>>>17),b=S+(L^(D|~C))+x[13]+1309151649&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~L))+x[4]+4149444226&4294967295,C=S+(b<<6&4294967295|b>>>26),b=L+(S^(C|~D))+x[11]+3174756917&4294967295,L=C+(b<<10&4294967295|b>>>22),b=D+(C^(L|~S))+x[2]+718787259&4294967295,D=L+(b<<15&4294967295|b>>>17),b=S+(L^(D|~C))+x[9]+3951481745&4294967295,l.g[0]=l.g[0]+C&4294967295,l.g[1]=l.g[1]+(D+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+D&4294967295,l.g[3]=l.g[3]+L&4294967295}r.prototype.v=function(l,C){C===void 0&&(C=l.length);const S=C-this.blockSize,x=this.C;let D=this.h,L=0;for(;L<C;){if(D==0)for(;L<=S;)i(this,l,L),L+=this.blockSize;if(typeof l=="string"){for(;L<C;)if(x[D++]=l.charCodeAt(L++),D==this.blockSize){i(this,x),D=0;break}}else for(;L<C;)if(x[D++]=l[L++],D==this.blockSize){i(this,x),D=0;break}}this.h=D,this.o+=C},r.prototype.A=function(){var l=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);l[0]=128;for(var C=1;C<l.length-8;++C)l[C]=0;C=this.o*8;for(var S=l.length-8;S<l.length;++S)l[S]=C&255,C/=256;for(this.v(l),l=Array(16),C=0,S=0;S<4;++S)for(let x=0;x<32;x+=8)l[C++]=this.g[S]>>>x&255;return l};function a(l,C){var S=p;return Object.prototype.hasOwnProperty.call(S,l)?S[l]:S[l]=C(l)}function c(l,C){this.h=C;const S=[];let x=!0;for(let D=l.length-1;D>=0;D--){const L=l[D]|0;x&&L==C||(S[D]=L,x=!1)}this.g=S}var p={};function _(l){return-128<=l&&l<128?a(l,function(C){return new c([C|0],C<0?-1:0)}):new c([l|0],l<0?-1:0)}function T(l){if(isNaN(l)||!isFinite(l))return k;if(l<0)return Z(T(-l));const C=[];let S=1;for(let x=0;l>=S;x++)C[x]=l/S|0,S*=4294967296;return new c(C,0)}function A(l,C){if(l.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(l.charAt(0)=="-")return Z(A(l.substring(1),C));if(l.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=T(Math.pow(C,8));let x=k;for(let L=0;L<l.length;L+=8){var D=Math.min(8,l.length-L);const b=parseInt(l.substring(L,L+D),C);D<8?(D=T(Math.pow(C,D)),x=x.j(D).add(T(b))):(x=x.j(S),x=x.add(T(b)))}return x}var k=_(0),M=_(1),K=_(16777216);n=c.prototype,n.m=function(){if(X(this))return-Z(this).m();let l=0,C=1;for(let S=0;S<this.g.length;S++){const x=this.i(S);l+=(x>=0?x:4294967296+x)*C,C*=4294967296}return l},n.toString=function(l){if(l=l||10,l<2||36<l)throw Error("radix out of range: "+l);if(W(this))return"0";if(X(this))return"-"+Z(this).toString(l);const C=T(Math.pow(l,6));var S=this;let x="";for(;;){const D=je(S,C).g;S=Y(S,D.j(C));let L=((S.g.length>0?S.g[0]:S.h)>>>0).toString(l);if(S=D,W(S))return L+x;for(;L.length<6;)L="0"+L;x=L+x}},n.i=function(l){return l<0?0:l<this.g.length?this.g[l]:this.h};function W(l){if(l.h!=0)return!1;for(let C=0;C<l.g.length;C++)if(l.g[C]!=0)return!1;return!0}function X(l){return l.h==-1}n.l=function(l){return l=Y(this,l),X(l)?-1:W(l)?0:1};function Z(l){const C=l.g.length,S=[];for(let x=0;x<C;x++)S[x]=~l.g[x];return new c(S,~l.h).add(M)}n.abs=function(){return X(this)?Z(this):this},n.add=function(l){const C=Math.max(this.g.length,l.g.length),S=[];let x=0;for(let D=0;D<=C;D++){let L=x+(this.i(D)&65535)+(l.i(D)&65535),b=(L>>>16)+(this.i(D)>>>16)+(l.i(D)>>>16);x=b>>>16,L&=65535,b&=65535,S[D]=b<<16|L}return new c(S,S[S.length-1]&-2147483648?-1:0)};function Y(l,C){return l.add(Z(C))}n.j=function(l){if(W(this)||W(l))return k;if(X(this))return X(l)?Z(this).j(Z(l)):Z(Z(this).j(l));if(X(l))return Z(this.j(Z(l)));if(this.l(K)<0&&l.l(K)<0)return T(this.m()*l.m());const C=this.g.length+l.g.length,S=[];for(var x=0;x<2*C;x++)S[x]=0;for(x=0;x<this.g.length;x++)for(let D=0;D<l.g.length;D++){const L=this.i(x)>>>16,b=this.i(x)&65535,We=l.i(D)>>>16,on=l.i(D)&65535;S[2*x+2*D]+=b*on,Ae(S,2*x+2*D),S[2*x+2*D+1]+=L*on,Ae(S,2*x+2*D+1),S[2*x+2*D+1]+=b*We,Ae(S,2*x+2*D+1),S[2*x+2*D+2]+=L*We,Ae(S,2*x+2*D+2)}for(l=0;l<C;l++)S[l]=S[2*l+1]<<16|S[2*l];for(l=C;l<2*C;l++)S[l]=0;return new c(S,0)};function Ae(l,C){for(;(l[C]&65535)!=l[C];)l[C+1]+=l[C]>>>16,l[C]&=65535,C++}function Se(l,C){this.g=l,this.h=C}function je(l,C){if(W(C))throw Error("division by zero");if(W(l))return new Se(k,k);if(X(l))return C=je(Z(l),C),new Se(Z(C.g),Z(C.h));if(X(C))return C=je(l,Z(C)),new Se(Z(C.g),C.h);if(l.g.length>30){if(X(l)||X(C))throw Error("slowDivide_ only works with positive integers.");for(var S=M,x=C;x.l(l)<=0;)S=tt(S),x=tt(x);var D=ze(S,1),L=ze(x,1);for(x=ze(x,2),S=ze(S,2);!W(x);){var b=L.add(x);b.l(l)<=0&&(D=D.add(S),L=b),x=ze(x,1),S=ze(S,1)}return C=Y(l,D.j(C)),new Se(D,C)}for(D=k;l.l(C)>=0;){for(S=Math.max(1,Math.floor(l.m()/C.m())),x=Math.ceil(Math.log(S)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),L=T(S),b=L.j(C);X(b)||b.l(l)>0;)S-=x,L=T(S),b=L.j(C);W(L)&&(L=M),D=D.add(L),l=Y(l,b)}return new Se(D,l)}n.B=function(l){return je(this,l).h},n.and=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)&l.i(x);return new c(S,this.h&l.h)},n.or=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)|l.i(x);return new c(S,this.h|l.h)},n.xor=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)^l.i(x);return new c(S,this.h^l.h)};function tt(l){const C=l.g.length+1,S=[];for(let x=0;x<C;x++)S[x]=l.i(x)<<1|l.i(x-1)>>>31;return new c(S,l.h)}function ze(l,C){const S=C>>5;C%=32;const x=l.g.length-S,D=[];for(let L=0;L<x;L++)D[L]=C>0?l.i(L+S)>>>C|l.i(L+S+1)<<32-C:l.i(L+S);return new c(D,l.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,hh=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=T,c.fromString=A,Qn=c}).apply(typeof Ec<"u"?Ec:typeof self<"u"?self:typeof window<"u"?window:{});var eo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var fh,Yi,dh,lo,xa,ph,gh,mh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof eo=="object"&&eo];for(var f=0;f<o.length;++f){var g=o[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var g=r;o=o.split(".");for(var E=0;E<o.length-1;E++){var O=o[E];if(!(O in g))break e;g=g[O]}o=o[o.length-1],E=g[o],f=f(E),f!=E&&f!=null&&e(g,o,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(f){var g=[],E;for(E in f)Object.prototype.hasOwnProperty.call(f,E)&&g.push([E,f[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function p(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function _(o,f,g){return o.call.apply(o.bind,arguments)}function T(o,f,g){return T=_,T.apply(null,arguments)}function A(o,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),o.apply(this,E)}}function k(o,f){function g(){}g.prototype=f.prototype,o.Z=f.prototype,o.prototype=new g,o.prototype.constructor=o,o.Ob=function(E,O,V){for(var G=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)G[fe-2]=arguments[fe];return f.prototype[O].apply(E,G)}}var M=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function K(o){const f=o.length;if(f>0){const g=Array(f);for(let E=0;E<f;E++)g[E]=o[E];return g}return[]}function W(o,f){for(let E=1;E<arguments.length;E++){const O=arguments[E];var g=typeof O;if(g=g!="object"?g:O?Array.isArray(O)?"array":g:"null",g=="array"||g=="object"&&typeof O.length=="number"){g=o.length||0;const V=O.length||0;o.length=g+V;for(let G=0;G<V;G++)o[g+G]=O[G]}else o.push(O)}}class X{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function Z(o){c.setTimeout(()=>{throw o},0)}function Y(){var o=l;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class Ae{constructor(){this.h=this.g=null}add(f,g){const E=Se.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Se=new X(()=>new je,o=>o.reset());class je{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let tt,ze=!1,l=new Ae,C=()=>{const o=Promise.resolve(void 0);tt=()=>{o.then(S)}};function S(){for(var o;o=Y();){try{o.h.call(o.g)}catch(g){Z(g)}var f=Se;f.j(o),f.h<100&&(f.h++,o.next=f.g,f.g=o)}ze=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};c.addEventListener("test",g,f),c.removeEventListener("test",g,f)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function We(o,f){D.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,f)}k(We,D),We.prototype.init=function(o,f){const g=this.type=o.type,E=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget,f||(g=="mouseover"?f=o.fromElement:g=="mouseout"&&(f=o.toElement)),this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&We.Z.h.call(this)},We.prototype.h=function(){We.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var on="closure_listenable_"+(Math.random()*1e6|0),Zo=0;function kt(o,f,g,E,O){this.listener=o,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=O,this.key=++Zo,this.da=this.fa=!1}function In(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Dt(o,f,g){for(const E in o)f.call(g,o[E],E,o)}function Ps(o,f){for(const g in o)f.call(void 0,o[g],g,o)}function _i(o){const f={};for(const g in o)f[g]=o[g];return f}const vi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vr(o,f){let g,E;for(let O=1;O<arguments.length;O++){E=arguments[O];for(g in E)o[g]=E[g];for(let V=0;V<vi.length;V++)g=vi[V],Object.prototype.hasOwnProperty.call(E,g)&&(o[g]=E[g])}}function ir(o){this.src=o,this.g={},this.h=0}ir.prototype.add=function(o,f,g,E,O){const V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);const G=Ei(o,f,E,O);return G>-1?(f=o[G],g||(f.fa=!1)):(f=new kt(f,this.src,V,!!E,O),f.fa=g,o.push(f)),f};function Ti(o,f){const g=f.type;if(g in o.g){var E=o.g[g],O=Array.prototype.indexOf.call(E,f,void 0),V;(V=O>=0)&&Array.prototype.splice.call(E,O,1),V&&(In(f),o.g[g].length==0&&(delete o.g[g],o.h--))}}function Ei(o,f,g,E){for(let O=0;O<o.length;++O){const V=o[O];if(!V.da&&V.listener==f&&V.capture==!!g&&V.ha==E)return O}return-1}var wi="closure_lm_"+(Math.random()*1e6|0),Ii={};function Ai(o,f,g,E,O){if(Array.isArray(f)){for(let V=0;V<f.length;V++)Ai(o,f[V],g,E,O);return null}return g=At(g),o&&o[on]?o.J(f,g,p(E)?!!E.capture:!1,O):It(o,f,g,!1,E,O)}function It(o,f,g,E,O,V){if(!f)throw Error("Invalid event type");const G=p(O)?!!O.capture:!!O;let fe=sr(o);if(fe||(o[wi]=fe=new ir(o)),g=fe.add(f,g,E,G,V),g.proxy)return g;if(E=ea(),g.proxy=E,E.src=o,E.listener=g,o.addEventListener)L||(O=G),O===void 0&&(O=!1),o.addEventListener(f.toString(),E,O);else if(o.attachEvent)o.attachEvent(bi(f.toString()),E);else if(o.addListener&&o.removeListener)o.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function ea(){function o(g){return f.call(o.src,o.listener,g)}const f=ta;return o}function an(o,f,g,E,O){if(Array.isArray(f))for(var V=0;V<f.length;V++)an(o,f[V],g,E,O);else E=p(E)?!!E.capture:!!E,g=At(g),o&&o[on]?(o=o.i,V=String(f).toString(),V in o.g&&(f=o.g[V],g=Ei(f,g,E,O),g>-1&&(In(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete o.g[V],o.h--)))):o&&(o=sr(o))&&(f=o.g[f.toString()],o=-1,f&&(o=Ei(f,g,E,O)),(g=o>-1?f[o]:null)&&An(g))}function An(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[on])Ti(f.i,o);else{var g=o.type,E=o.proxy;f.removeEventListener?f.removeEventListener(g,E,o.capture):f.detachEvent?f.detachEvent(bi(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=sr(f))?(Ti(g,o),g.h==0&&(g.src=null,f[wi]=null)):In(o)}}}function bi(o){return o in Ii?Ii[o]:Ii[o]="on"+o}function ta(o,f){if(o.da)o=!0;else{f=new We(f,this);const g=o.listener,E=o.ha||o.src;o.fa&&An(o),o=g.call(E,f)}return o}function sr(o){return o=o[wi],o instanceof ir?o:null}var bn="__closure_events_fn_"+(Math.random()*1e9>>>0);function At(o){return typeof o=="function"?o:(o[bn]||(o[bn]=function(f){return o.handleEvent(f)}),o[bn])}function Ye(){x.call(this),this.i=new ir(this),this.M=this,this.G=null}k(Ye,x),Ye.prototype[on]=!0,Ye.prototype.removeEventListener=function(o,f,g,E){an(this,o,f,g,E)};function nt(o,f){var g,E=o.G;if(E)for(g=[];E;E=E.G)g.push(E);if(o=o.M,E=f.type||f,typeof f=="string")f=new D(f,o);else if(f instanceof D)f.target=f.target||o;else{var O=f;f=new D(E,o),Vr(f,O)}O=!0;let V,G;if(g)for(G=g.length-1;G>=0;G--)V=f.g=g[G],O=Or(V,E,!0,f)&&O;if(V=f.g=o,O=Or(V,E,!0,f)&&O,O=Or(V,E,!1,f)&&O,g)for(G=0;G<g.length;G++)V=f.g=g[G],O=Or(V,E,!1,f)&&O}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var o=this.i;for(const f in o.g){const g=o.g[f];for(let E=0;E<g.length;E++)In(g[E]);delete o.g[f],o.h--}}this.G=null},Ye.prototype.J=function(o,f,g,E){return this.i.add(String(o),f,!1,g,E)},Ye.prototype.K=function(o,f,g,E){return this.i.add(String(o),f,!0,g,E)};function Or(o,f,g,E){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();let O=!0;for(let V=0;V<f.length;++V){const G=f[V];if(G&&!G.da&&G.capture==g){const fe=G.listener,Fe=G.ha||G.src;G.fa&&Ti(o.i,G),O=fe.call(Fe,E)!==!1&&O}}return O&&!E.defaultPrevented}function bt(o,f){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=T(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:c.setTimeout(o,f||0)}function Sn(o){o.g=bt(()=>{o.g=null,o.i&&(o.i=!1,Sn(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class or extends x{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:Sn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(o){x.call(this),this.h=o,this.g={}}k(ie,x);var rt=[];function ks(o){Dt(o.g,function(f,g){this.g.hasOwnProperty(g)&&An(f)},o),o.g={}}ie.prototype.N=function(){ie.Z.N.call(this),ks(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Si=c.JSON.stringify,na=c.JSON.parse,Ds=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function Ci(){}function Cn(){}var gt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Nt(){D.call(this,"d")}k(Nt,D);function jt(){D.call(this,"c")}k(jt,D);var un={},ar=null;function ur(){return ar=ar||new Ye}un.Ia="serverreachability";function Ri(o){D.call(this,un.Ia,o)}k(Ri,D);function cr(o){const f=ur();nt(f,new Ri(f))}un.STAT_EVENT="statevent";function cn(o,f){D.call(this,un.STAT_EVENT,o),this.stat=f}k(cn,D);function qe(o){const f=ur();nt(f,new cn(f,o))}un.Ja="timingevent";function Pi(o,f){D.call(this,un.Ja,o),this.size=f}k(Pi,D);function Rn(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},f)}function Ze(){this.g=!0}Ze.prototype.ua=function(){this.g=!1};function ut(o,f,g,E,O,V){o.info(function(){if(o.g)if(V){var G="",fe=V.split("&");for(let ye=0;ye<fe.length;ye++){var Fe=fe[ye].split("=");if(Fe.length>1){const Le=Fe[0];Fe=Fe[1];const Be=Le.split("_");G=Be.length>=2&&Be[1]=="type"?G+(Le+"="+Fe+"&"):G+(Le+"=redacted&")}}}else G=null;else G=V;return"XMLHTTP REQ ("+E+") [attempt "+O+"]: "+f+`
`+g+`
`+G})}function ki(o,f,g,E,O,V,G){o.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+O+"]: "+f+`
`+g+`
`+V+" "+G})}function Pn(o,f,g,E){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+xs(o,g)+(E?" "+E:"")})}function Ns(o,f){o.info(function(){return"TIMEOUT: "+f})}Ze.prototype.info=function(){};function xs(o,f){if(!o.g)return f;if(!f)return null;try{const V=JSON.parse(f);if(V){for(o=0;o<V.length;o++)if(Array.isArray(V[o])){var g=V[o];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var O=E[0];if(O!="noop"&&O!="stop"&&O!="close")for(let G=1;G<E.length;G++)E[G]=""}}}}return Si(V)}catch{return f}}var xt={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},ln={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Mr;function kn(){}k(kn,Ci),kn.prototype.g=function(){return new XMLHttpRequest},Mr=new kn;function lr(o){return encodeURIComponent(String(o))}function ra(o){var f=1;o=o.split(":");const g=[];for(;f>0&&o.length;)g.push(o.shift()),f--;return o.length&&g.push(o.join(":")),g}function qt(o,f,g,E){this.j=o,this.i=f,this.l=g,this.S=E||1,this.V=new ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Di}function Di(){this.i=null,this.g="",this.h=!1}var Vs={},Ni={};function Lr(o,f,g){o.M=1,o.A=xn(Ne(f)),o.u=g,o.R=!0,Os(o,null)}function Os(o,f){o.F=Date.now(),Nn(o),o.B=Ne(o.A);var g=o.B,E=o.S;Array.isArray(E)||(E=[String(E)]),Bs(g.i,"t",E),o.C=0,g=o.j.L,o.h=new Di,o.g=B(o.j,g?f:null,!o.u),o.P>0&&(o.O=new or(T(o.Y,o,o.g),o.P)),f=o.V,g=o.g,E=o.ba;var O="readystatechange";Array.isArray(O)||(O&&(rt[0]=O.toString()),O=rt);for(let V=0;V<O.length;V++){const G=Ai(g,O[V],E||f.handleEvent,!1,f.h||f);if(!G)break;f.g[G.key]=G}f=o.J?_i(o.J):{},o.u?(o.v||(o.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,f)):(o.v="GET",o.g.ea(o.B,o.v,null,f)),cr(),ut(o.i,o.v,o.B,o.l,o.S,o.u)}qt.prototype.ba=function(o){o=o.target;const f=this.O;f&&Ot(o)==3?f.j():this.Y(o)},qt.prototype.Y=function(o){try{if(o==this.g)e:{const fe=Ot(this.g),Fe=this.g.ya(),ye=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Gi(this.g)))){this.K||fe!=4||Fe==7||(Fe==8||ye<=0?cr(3):cr(2)),Fr(this);var f=this.g.ca();this.X=f;var g=Dn(this);if(this.o=f==200,ki(this.i,this.v,this.B,this.l,this.S,fe,f),this.o){if(this.U&&!this.L){t:{if(this.g){var E,O=this.g;if((E=O.g?O.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(E)){var V=E;break t}}V=null}if(o=V)Pn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ur(this,o);else{this.o=!1,this.m=3,qe(12),Tt(this),fr(this);break e}}if(this.R){o=!0;let Le;for(;!this.K&&this.C<g.length;)if(Le=Vi(this,g),Le==Ni){fe==4&&(this.m=4,qe(14),o=!1),Pn(this.i,this.l,null,"[Incomplete Response]");break}else if(Le==Vs){this.m=4,qe(15),Pn(this.i,this.l,g,"[Invalid Chunk]"),o=!1;break}else Pn(this.i,this.l,Le,null),Ur(this,Le);if(xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||g.length!=0||this.h.h||(this.m=1,qe(16),o=!1),this.o=this.o&&o,!o)Pn(this.i,this.l,g,"[Invalid Chunked Response]"),Tt(this),fr(this);else if(g.length>0&&!this.W){this.W=!0;var G=this.j;G.g==this&&G.aa&&!G.P&&(G.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),d(G),G.P=!0,qe(11))}}else Pn(this.i,this.l,g,null),Ur(this,g);fe==4&&Tt(this),this.o&&!this.K&&(fe==4?v(this.j,this):(this.o=!1,Nn(this)))}else Ki(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,qe(12)):(this.m=0,qe(13)),Tt(this),fr(this)}}}catch{}finally{}};function Dn(o){if(!xi(o))return o.g.la();const f=Gi(o.g);if(f==="")return"";let g="";const E=f.length,O=Ot(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Tt(o),fr(o),"";o.h.i=new c.TextDecoder}for(let V=0;V<E;V++)o.h.h=!0,g+=o.h.i.decode(f[V],{stream:!(O&&V==E-1)});return f.length=0,o.h.g+=g,o.C=0,o.h.g}function xi(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Vi(o,f){var g=o.C,E=f.indexOf(`
`,g);return E==-1?Ni:(g=Number(f.substring(g,E)),isNaN(g)?Vs:(E+=1,E+g>f.length?Ni:(f=f.slice(E,E+g),o.C=E+g,f)))}qt.prototype.cancel=function(){this.K=!0,Tt(this)};function Nn(o){o.T=Date.now()+o.H,hr(o,o.H)}function hr(o,f){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Rn(T(o.aa,o),f)}function Fr(o){o.D&&(c.clearTimeout(o.D),o.D=null)}qt.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Ns(this.i,this.B),this.M!=2&&(cr(),qe(17)),Tt(this),this.m=2,fr(this)):hr(this,this.T-o)};function fr(o){o.j.I==0||o.K||v(o.j,o)}function Tt(o){Fr(o);var f=o.O;f&&typeof f.dispose=="function"&&f.dispose(),o.O=null,ks(o.V),o.g&&(f=o.g,o.g=null,f.abort(),f.dispose())}function Ur(o,f){try{var g=o.j;if(g.I!=0&&(g.g==o||dr(g.h,o))){if(!o.L&&dr(g.h,o)&&g.I==3){try{var E=g.Ba.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var O=E;if(O[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<o.F)y(g),Gt(g);else break e;h(g),qe(18)}}else g.xa=O[1],0<g.xa-g.K&&O[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Rn(T(g.Va,g),6e3));Ls(g.h)<=1&&g.ta&&(g.ta=void 0)}else I(g,11)}else if((o.L||g.g==o)&&y(g),!b(f))for(O=g.Ba.g.parse(f),f=0;f<O.length;f++){let ye=O[f];const Le=ye[0];if(!(Le<=g.K))if(g.K=Le,ye=ye[1],g.I==2)if(ye[0]=="c"){g.M=ye[1],g.ba=ye[2];const Be=ye[3];Be!=null&&(g.ka=Be,g.j.info("VER="+g.ka));const ct=ye[4];ct!=null&&(g.za=ct,g.j.info("SVER="+g.za));const it=ye[5];it!=null&&typeof it=="number"&&it>0&&(E=1.5*it,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const $e=o.g;if($e){const Fn=$e.g?$e.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fn){var V=E.h;V.g||Fn.indexOf("spdy")==-1&&Fn.indexOf("quic")==-1&&Fn.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Li(V,V.h),V.h=null))}if(E.G){const wt=$e.g?$e.g.getResponseHeader("X-HTTP-Session-Id"):null;wt&&(E.wa=wt,Pe(E.J,E.G,wt))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-o.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var G=o;if(E.na=q(E,E.L?E.ba:null,E.W),G.L){Fs(E.h,G);var fe=G,Fe=E.O;Fe&&(fe.H=Fe),fe.D&&(Fr(fe),Nn(fe)),E.g=G}else u(E);g.i.length>0&&Ln(g)}else ye[0]!="stop"&&ye[0]!="close"||I(g,7);else g.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?I(g,7):Qi(g):ye[0]!="noop"&&g.l&&g.l.qa(ye),g.A=0)}}cr(4)}catch{}}var Ms=class{constructor(o,f){this.g=o,this.map=f}};function Oi(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Mi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ls(o){return o.h?1:o.g?o.g.size:0}function dr(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function Li(o,f){o.g?o.g.add(f):o.h=f}function Fs(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}Oi.prototype.cancel=function(){if(this.i=Fi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Fi(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const g of o.g.values())f=f.concat(g.G);return f}return K(o.i)}var Ui=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ji(o,f){if(o){o=o.split("&");for(let g=0;g<o.length;g++){const E=o[g].indexOf("=");let O,V=null;E>=0?(O=o[g].substring(0,E),V=o[g].substring(E+1)):O=o[g],f(O,V?decodeURIComponent(V.replace(/\+/g," ")):"")}}}function Vt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;o instanceof Vt?(this.l=o.l,St(this,o.j),this.o=o.o,this.g=o.g,Bt(this,o.u),this.h=o.h,qi(this,On(o.i)),this.m=o.m):o&&(f=String(o).match(Ui))?(this.l=!1,St(this,f[1]||"",!0),this.o=Vn(f[2]||""),this.g=Vn(f[3]||"",!0),Bt(this,f[4]),this.h=Vn(f[5]||"",!0),qi(this,f[6]||"",!0),this.m=Vn(f[7]||"")):(this.l=!1,this.i=new gr(null,this.l))}Vt.prototype.toString=function(){const o=[];var f=this.j;f&&o.push($t(f,js,!0),":");var g=this.g;return(g||f=="file")&&(o.push("//"),(f=this.o)&&o.push($t(f,js,!0),"@"),o.push(lr(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&o.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push($t(g,g.charAt(0)=="/"?Et:ia,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",$t(g,pr)),o.join("")},Vt.prototype.resolve=function(o){const f=Ne(this);let g=!!o.j;g?St(f,o.j):g=!!o.o,g?f.o=o.o:g=!!o.g,g?f.g=o.g:g=o.u!=null;var E=o.h;if(g)Bt(f,o.u);else if(g=!!o.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var O=f.h.lastIndexOf("/");O!=-1&&(E=f.h.slice(0,O+1)+E)}if(O=E,O==".."||O==".")E="";else if(O.indexOf("./")!=-1||O.indexOf("/.")!=-1){E=O.lastIndexOf("/",0)==0,O=O.split("/");const V=[];for(let G=0;G<O.length;){const fe=O[G++];fe=="."?E&&G==O.length&&V.push(""):fe==".."?((V.length>1||V.length==1&&V[0]!="")&&V.pop(),E&&G==O.length&&V.push("")):(V.push(fe),E=!0)}E=V.join("/")}else E=O}return g?f.h=E:g=o.i.toString()!=="",g?qi(f,On(o.i)):g=!!o.m,g&&(f.m=o.m),f};function Ne(o){return new Vt(o)}function St(o,f,g){o.j=g?Vn(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function Bt(o,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);o.u=f}else o.u=null}function qi(o,f,g){f instanceof gr?(o.i=f,Bi(o.i,o.l)):(g||(f=$t(f,qs)),o.i=new gr(f,o.l))}function Pe(o,f,g){o.i.set(f,g)}function xn(o){return Pe(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Vn(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function $t(o,f,g){return typeof o=="string"?(o=encodeURI(o).replace(f,Us),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Us(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var js=/[#\/\?@]/g,ia=/[#\?:]/g,Et=/[#\?]/g,qs=/[#\?@]/g,pr=/#/g;function gr(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function hn(o){o.g||(o.g=new Map,o.h=0,o.i&&ji(o.i,function(f,g){o.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=gr.prototype,n.add=function(o,f){hn(this),this.i=null,o=fn(this,o);let g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(f),this.h+=1,this};function Ht(o,f){hn(o),f=fn(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function zt(o,f){return hn(o),f=fn(o,f),o.g.has(f)}n.forEach=function(o,f){hn(this),this.g.forEach(function(g,E){g.forEach(function(O){o.call(f,O,E,this)},this)},this)};function jr(o,f){hn(o);let g=[];if(typeof f=="string")zt(o,f)&&(g=g.concat(o.g.get(fn(o,f))));else for(o=Array.from(o.g.values()),f=0;f<o.length;f++)g=g.concat(o[f]);return g}n.set=function(o,f){return hn(this),this.i=null,o=fn(this,o),zt(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=jr(this,o),o.length>0?String(o[0]):f):f};function Bs(o,f,g){Ht(o,f),g.length>0&&(o.i=null,o.g.set(fn(o,f),K(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(let E=0;E<f.length;E++){var g=f[E];const O=lr(g);g=jr(this,g);for(let V=0;V<g.length;V++){let G=O;g[V]!==""&&(G+="="+lr(g[V])),o.push(G)}}return this.i=o.join("&")};function On(o){const f=new gr;return f.i=o.i,o.g&&(f.g=new Map(o.g),f.h=o.h),f}function fn(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function Bi(o,f){f&&!o.j&&(hn(o),o.i=null,o.g.forEach(function(g,E){const O=E.toLowerCase();E!=O&&(Ht(this,E),Bs(this,O,g))},o)),o.j=f}function $s(o,f){const g=new Ze;if(c.Image){const E=new Image;E.onload=A(Wt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=A(Wt,g,"TestLoadImage: error",!1,f,E),E.onabort=A(Wt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=A(Wt,g,"TestLoadImage: timeout",!1,f,E),c.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=o}else f(!1)}function Hs(o,f){const g=new Ze,E=new AbortController,O=setTimeout(()=>{E.abort(),Wt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:E.signal}).then(V=>{clearTimeout(O),V.ok?Wt(g,"TestPingServer: ok",!0,f):Wt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(O),Wt(g,"TestPingServer: error",!1,f)})}function Wt(o,f,g,E,O){try{O&&(O.onload=null,O.onerror=null,O.onabort=null,O.ontimeout=null),E(g)}catch{}}function zs(){this.g=new Ds}function $i(o){this.i=o.Sb||null,this.h=o.ab||!1}k($i,Ci),$i.prototype.g=function(){return new qr(this.i,this.h)};function qr(o,f){Ye.call(this),this.H=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}k(qr,Ye),n=qr.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=f,this.readyState=1,yr(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(f.body=o),(this.H||c).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,mr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Br(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Br(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?mr(this):yr(this),this.readyState==3&&Br(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,mr(this))},n.Na=function(o){this.g&&(this.response=o,mr(this))},n.ga=function(){this.g&&mr(this)};function mr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,yr(o)}n.setRequestHeader=function(o,f){this.A.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=f.next();return o.join(`\r
`)};function yr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(qr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Ws(o){let f="";return Dt(o,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Hi(o,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=Ws(g),typeof o=="string"?g!=null&&lr(g):Pe(o,f,g))}function Oe(o){Ye.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}k(Oe,Ye);var sa=/^https?$/i,oa=["POST","PUT"];n=Oe.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Mr.g(),this.g.onreadystatechange=M(T(this.Ca,this));try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(V){zi(this,V);return}if(o=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var O in E)g.set(O,E[O]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const V of E.keys())g.set(V,E.get(V));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(V=>V.toLowerCase()=="content-type"),O=c.FormData&&o instanceof c.FormData,!(Array.prototype.indexOf.call(oa,f,void 0)>=0)||E||O||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,G]of g)this.g.setRequestHeader(V,G);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(V){zi(this,V)}};function zi(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.o=5,$r(o),Mn(o)}function $r(o){o.A||(o.A=!0,nt(o,"complete"),nt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,nt(this,"complete"),nt(this,"abort"),Mn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Mn(this,!0)),Oe.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Wi(this):this.Xa())},n.Xa=function(){Wi(this)};function Wi(o){if(o.h&&typeof a<"u"){if(o.v&&Ot(o)==4)setTimeout(o.Ca.bind(o),0);else if(nt(o,"readystatechange"),Ot(o)==4){o.h=!1;try{const V=o.ca();e:switch(V){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=V===0){let G=String(o.D).match(Ui)[1]||null;!G&&c.self&&c.self.location&&(G=c.self.location.protocol.slice(0,-1)),E=!sa.test(G?G.toLowerCase():"")}g=E}if(g)nt(o,"complete"),nt(o,"success");else{o.o=6;try{var O=Ot(o)>2?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.ca()+"]",$r(o)}}finally{Mn(o)}}}}function Mn(o,f){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const g=o.g;o.g=null,f||nt(o,"ready");try{g.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Ot(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Ot(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),na(f)}};function Gi(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Ki(o){const f={};o=(o.g&&Ot(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<o.length;E++){if(b(o[E]))continue;var g=ra(o[E]);const O=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const V=f[O]||[];f[O]=V,V.push(g)}Ps(f,function(E){return E.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function _r(o,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||f}function Gs(o){this.za=0,this.i=[],this.j=new Ze,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=_r("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=_r("baseRetryDelayMs",5e3,o),this.Za=_r("retryDelaySeedMs",1e4,o),this.Ta=_r("forwardChannelMaxRetries",2,o),this.va=_r("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new Oi(o&&o.concurrentRequestLimit),this.Ba=new zs,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Gs.prototype,n.ka=8,n.I=1,n.connect=function(o,f,g,E){qe(0),this.W=o,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=q(this,null,this.W),Ln(this)};function Qi(o){if(Xi(o),o.I==3){var f=o.V++,g=Ne(o.J);if(Pe(g,"SID",o.M),Pe(g,"RID",f),Pe(g,"TYPE","terminate"),vr(o,g),f=new qt(o,o.j,f),f.M=2,f.A=xn(Ne(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&c.Image&&(new Image().src=f.A,g=!0),g||(f.g=B(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Nn(f)}N(o)}function Gt(o){o.g&&(d(o),o.g.cancel(),o.g=null)}function Xi(o){Gt(o),o.v&&(c.clearTimeout(o.v),o.v=null),y(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&c.clearTimeout(o.m),o.m=null)}function Ln(o){if(!Mi(o.h)&&!o.m){o.m=!0;var f=o.Ea;tt||C(),ze||(tt(),ze=!0),l.add(f,o),o.D=0}}function aa(o,f){return Ls(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=f.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Rn(T(o.Ea,o,f),R(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const O=new qt(this,this.j,o);let V=this.o;if(this.U&&(V?(V=_i(V),Vr(V,this.U)):V=this.U),this.u!==null||this.R||(O.J=V,V=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=s(this,O,f),g=Ne(this.J),Pe(g,"RID",o),Pe(g,"CVER",22),this.G&&Pe(g,"X-HTTP-Session-Id",this.G),vr(this,g),V&&(this.R?f="headers="+lr(Ws(V))+"&"+f:this.u&&Hi(g,this.u,V)),Li(this.h,O),this.Ra&&Pe(g,"TYPE","init"),this.S?(Pe(g,"$req",f),Pe(g,"SID","null"),O.U=!0,Lr(O,g,null)):Lr(O,g,f),this.I=2}}else this.I==3&&(o?Ks(this,o):this.i.length==0||Mi(this.h)||Ks(this))};function Ks(o,f){var g;f?g=f.l:g=o.V++;const E=Ne(o.J);Pe(E,"SID",o.M),Pe(E,"RID",g),Pe(E,"AID",o.K),vr(o,E),o.u&&o.o&&Hi(E,o.u,o.o),g=new qt(o,o.j,g,o.D+1),o.u===null&&(g.J=o.o),f&&(o.i=f.G.concat(o.i)),f=s(o,g,1e3),g.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Li(o.h,g),Lr(g,E,f)}function vr(o,f){o.H&&Dt(o.H,function(g,E){Pe(f,E,g)}),o.l&&Dt({},function(g,E){Pe(f,E,g)})}function s(o,f,g){g=Math.min(o.i.length,g);const E=o.l?T(o.l.Ka,o.l,o):null;e:{var O=o.i;let fe=-1;for(;;){const Fe=["count="+g];fe==-1?g>0?(fe=O[0].g,Fe.push("ofs="+fe)):fe=0:Fe.push("ofs="+fe);let ye=!0;for(let Le=0;Le<g;Le++){var V=O[Le].g;const Be=O[Le].map;if(V-=fe,V<0)fe=Math.max(0,O[Le].g-100),ye=!1;else try{V="req"+V+"_"||"";try{var G=Be instanceof Map?Be:Object.entries(Be);for(const[ct,it]of G){let $e=it;p(it)&&($e=Si(it)),Fe.push(V+ct+"="+encodeURIComponent($e))}}catch(ct){throw Fe.push(V+"type="+encodeURIComponent("_badmap")),ct}}catch{E&&E(Be)}}if(ye){G=Fe.join("&");break e}}G=void 0}return o=o.i.splice(0,g),f.G=o,G}function u(o){if(!o.g&&!o.v){o.Y=1;var f=o.Da;tt||C(),ze||(tt(),ze=!0),l.add(f,o),o.A=0}}function h(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Rn(T(o.Da,o),R(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,m(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Rn(T(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,qe(10),Gt(this),m(this))};function d(o){o.B!=null&&(c.clearTimeout(o.B),o.B=null)}function m(o){o.g=new qt(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var f=Ne(o.na);Pe(f,"RID","rpc"),Pe(f,"SID",o.M),Pe(f,"AID",o.K),Pe(f,"CI",o.F?"0":"1"),!o.F&&o.ia&&Pe(f,"TO",o.ia),Pe(f,"TYPE","xmlhttp"),vr(o,f),o.u&&o.o&&Hi(f,o.u,o.o),o.O&&(o.g.H=o.O);var g=o.g;o=o.ba,g.M=1,g.A=xn(Ne(f)),g.u=null,g.R=!0,Os(g,o)}n.Va=function(){this.C!=null&&(this.C=null,Gt(this),h(this),qe(19))};function y(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function v(o,f){var g=null;if(o.g==f){y(o),d(o),o.g=null;var E=2}else if(dr(o.h,f))g=f.G,Fs(o.h,f),E=1;else return;if(o.I!=0){if(f.o)if(E==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var O=o.D;E=ur(),nt(E,new Pi(E,g)),Ln(o)}else u(o);else if(O=f.m,O==3||O==0&&f.X>0||!(E==1&&aa(o,f)||E==2&&h(o)))switch(g&&g.length>0&&(f=o.h,f.i=f.i.concat(g)),O){case 1:I(o,5);break;case 4:I(o,10);break;case 3:I(o,6);break;default:I(o,2)}}}function R(o,f){let g=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(g*=2),g*f}function I(o,f){if(o.j.info("Error code "+f),f==2){var g=T(o.bb,o),E=o.Ua;const O=!E;E=new Vt(E||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||St(E,"https"),xn(E),O?$s(E.toString(),g):Hs(E.toString(),g)}else qe(2);o.I=0,o.l&&o.l.pa(f),N(o),Xi(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),qe(2)):(this.j.info("Failed to ping google.com"),qe(1))};function N(o){if(o.I=0,o.ja=[],o.l){const f=Fi(o.h);(f.length!=0||o.i.length!=0)&&(W(o.ja,f),W(o.ja,o.i),o.h.i.length=0,K(o.i),o.i.length=0),o.l.oa()}}function q(o,f,g){var E=g instanceof Vt?Ne(g):new Vt(g);if(E.g!="")f&&(E.g=f+"."+E.g),Bt(E,E.u);else{var O=c.location;E=O.protocol,f=f?f+"."+O.hostname:O.hostname,O=+O.port;const V=new Vt(null);E&&St(V,E),f&&(V.g=f),O&&Bt(V,O),g&&(V.h=g),E=V}return g=o.G,f=o.wa,g&&f&&Pe(E,g,f),Pe(E,"VER",o.ka),vr(o,E),E}function B(o,f,g){if(f&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Aa&&!o.ma?new Oe(new $i({ab:g})):new Oe(o.ma),f.Fa(o.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function U(){}n=U.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Q(){}Q.prototype.g=function(o,f){return new se(o,f)};function se(o,f){Ye.call(this),this.g=new Gs(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(o?o["X-WebChannel-Client-Profile"]=f.sa:o={"X-WebChannel-Client-Profile":f.sa}),this.g.U=o,(o=f&&f.Qb)&&!b(o)&&(this.g.u=o),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!b(f)&&(this.g.G=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Me(this)}k(se,Ye),se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){Qi(this.g)},se.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.v&&(g={},g.__data__=Si(o),o=g);f.i.push(new Ms(f.Ya++,o)),f.I==3&&Ln(f)},se.prototype.N=function(){this.g.l=null,delete this.j,Qi(this.g),delete this.g,se.Z.N.call(this)};function _e(o){Nt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const g in f){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}k(_e,Nt);function me(){jt.call(this),this.status=1}k(me,jt);function Me(o){this.g=o}k(Me,U),Me.prototype.ra=function(){nt(this.g,"a")},Me.prototype.qa=function(o){nt(this.g,new _e(o))},Me.prototype.pa=function(o){nt(this.g,new me)},Me.prototype.oa=function(){nt(this.g,"b")},Q.prototype.createWebChannel=Q.prototype.g,se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,mh=function(){return new Q},gh=function(){return ur()},ph=un,xa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},xt.NO_ERROR=0,xt.TIMEOUT=8,xt.HTTP_ERROR=6,lo=xt,ln.COMPLETE="complete",dh=ln,Cn.EventType=gt,gt.OPEN="a",gt.CLOSE="b",gt.ERROR="c",gt.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,Yi=Cn,Oe.prototype.listenOnce=Oe.prototype.K,Oe.prototype.getLastError=Oe.prototype.Ha,Oe.prototype.getLastErrorCode=Oe.prototype.ya,Oe.prototype.getStatus=Oe.prototype.ca,Oe.prototype.getResponseJson=Oe.prototype.La,Oe.prototype.getResponseText=Oe.prototype.la,Oe.prototype.send=Oe.prototype.ea,Oe.prototype.setWithCredentials=Oe.prototype.Fa,fh=Oe}).apply(typeof eo<"u"?eo:typeof self<"u"?self:typeof window<"u"?window:{});const wc="@firebase/firestore",Ic="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ft.UNAUTHENTICATED=new ft(null),ft.GOOGLE_CREDENTIALS=new ft("google-credentials-uid"),ft.FIRST_PARTY=new ft("first-party-uid"),ft.MOCK_USER=new ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rr=new Xa("@firebase/firestore");function Wr(){return Rr.logLevel}function re(n,...e){if(Rr.logLevel<=Ee.DEBUG){const t=e.map(uu);Rr.debug(`Firestore (${di}): ${n}`,...t)}}function Tn(n,...e){if(Rr.logLevel<=Ee.ERROR){const t=e.map(uu);Rr.error(`Firestore (${di}): ${n}`,...t)}}function ii(n,...e){if(Rr.logLevel<=Ee.WARN){const t=e.map(uu);Rr.warn(`Firestore (${di}): ${n}`,...t)}}function uu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,yh(n,r,t)}function yh(n,e,t){let r=`FIRESTORE (${di}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw Tn(r),new Error(r)}function Ce(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||yh(e,i,r)}function ge(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ne extends wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(ft.UNAUTHENTICATED)))}shutdown(){}}class qm{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Bm{constructor(e){this.t=e,this.currentUser=ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ce(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new mn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new mn,e.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new mn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ce(typeof r.accessToken=="string",31837,{l:r}),new _h(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ce(e===null||typeof e=="string",2055,{h:e}),new ft(e)}}class $m{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=ft.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Hm{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new $m(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(ft.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Ac{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zm{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Xt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Ce(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Ac(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Ce(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Ac(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wm(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Wm(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function we(n,e){return n<e?-1:n>e?1:0}function Va(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return Ta(i)===Ta(a)?we(i,a):Ta(i)?1:-1}return we(n.length,e.length)}const Gm=55296,Km=57343;function Ta(n){const e=n.charCodeAt(0);return e>=Gm&&e<=Km}function si(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bc="__name__";class Qt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ce(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ce(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Qt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Qt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=Qt.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return we(e.length,t.length)}static compareSegments(e,t){const r=Qt.isNumericId(e),i=Qt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Qt.extractNumericId(e).compare(Qt.extractNumericId(t)):Va(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Qn.fromString(e.substring(4,e.length-2))}}class De extends Qt{construct(e,t,r){return new De(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ne(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new De(t)}static emptyPath(){return new De([])}}const Qm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Qt{construct(e,t,r){return new ot(e,t,r)}static isValidIdentifier(e){return Qm.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===bc}static keyField(){return new ot([bc])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new ne(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ne(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(c=!c,i++):p!=="."||c?(r+=p,i++):(a(),i++)}if(a(),c)throw new ne(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(t)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(De.fromString(e))}static fromName(e){return new ae(De.fromString(e).popFirst(5))}static empty(){return new ae(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new De(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vh(n,e,t){if(!t)throw new ne(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Xm(n,e,t,r){if(e===!0&&r===!0)throw new ne(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Sc(n){if(!ae.isDocumentKey(n))throw new ne(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Cc(n){if(ae.isDocumentKey(n))throw new ne(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Th(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Uo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ce(12329,{type:typeof n})}function Jn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ne(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Uo(n);throw new ne(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(n,e){const t={typeString:n};return e&&(t.value=e),t}function ws(n,e){if(!Th(n))throw new ne(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ne(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rc=-62135596800,Pc=1e6;class Ve{static now(){return Ve.fromMillis(Date.now())}static fromDate(e){return Ve.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*Pc);return new Ve(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ne(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Rc)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ne(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pc}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ws(e,Ve._jsonSchema))return new Ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Rc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ve._jsonSchemaVersion="firestore/timestamp/1.0",Ve._jsonSchema={type:Qe("string",Ve._jsonSchemaVersion),seconds:Qe("number"),nanoseconds:Qe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Ve(0,0))}static max(){return new pe(new Ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=-1;function Jm(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new Ve(t+1,0):new Ve(t,r));return new Yn(i,ae.empty(),e)}function Ym(n){return new Yn(n.readTime,n.key,ls)}class Yn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Yn(pe.min(),ae.empty(),ls)}static max(){return new Yn(pe.max(),ae.empty(),ls)}}function Zm(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:we(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ey="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ty{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pi(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==ey)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ce(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):z.reject(t)}static resolve(e){return new z(((t,r)=>{t(e)}))}static reject(e){return new z(((t,r)=>{r(e)}))}static waitFor(e){return new z(((t,r)=>{let i=0,a=0,c=!1;e.forEach((p=>{++i,p.next((()=>{++a,c&&a===i&&t()}),(_=>r(_)))})),c=!0,a===i&&t()}))}static or(e){let t=z.resolve(!1);for(const r of e)t=t.next((i=>i?z.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new z(((r,i)=>{const a=e.length,c=new Array(a);let p=0;for(let _=0;_<a;_++){const T=_;t(e[T]).next((A=>{c[T]=A,++p,p===a&&r(c)}),(A=>i(A)))}}))}static doWhile(e,t){return new z(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function ny(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function gi(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}jo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lu=-1;function qo(n){return n==null}function bo(n){return n===0&&1/n==-1/0}function ry(n){return typeof n=="number"&&Number.isInteger(n)&&!bo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh="";function iy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=kc(e)),e=sy(n.get(t),e);return kc(e)}function sy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case Eh:t+="";break;default:t+=a}}return t}function kc(n){return n+Eh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function kr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function wh(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,t){this.comparator=e,this.root=t||st.EMPTY}insert(e,t){return new Ue(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,st.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,st.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new to(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new to(this.root,e,this.comparator,!1)}getReverseIterator(){return new to(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new to(this.root,e,this.comparator,!0)}}class to{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class st{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??st.RED,this.left=i??st.EMPTY,this.right=a??st.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new st(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return st.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return st.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,st.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,st.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ce(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ce(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ce(27949);return e+(this.isRed()?0:1)}}st.EMPTY=null,st.RED=!0,st.BLACK=!1;st.EMPTY=new class{constructor(){this.size=0}get key(){throw ce(57766)}get value(){throw ce(16141)}get color(){throw ce(16727)}get left(){throw ce(29726)}get right(){throw ce(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new st(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Nc(this.data.getIterator())}getIteratorFrom(e){return new Nc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class Nc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Ft([])}unionWith(e){let t=new Je(ot.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ft(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return si(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Ih("Invalid base64 string: "+a):a}})(e);return new at(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let c=0;c<i.length;++c)a+=String.fromCharCode(i[c]);return a})(e);return new at(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const oy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(n){if(Ce(!!n,39018),typeof n=="string"){let e=0;const t=oy.exec(n);if(Ce(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:He(n.seconds),nanos:He(n.nanos)}}function He(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function er(n){return typeof n=="string"?at.fromBase64String(n):at.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah="server_timestamp",bh="__type__",Sh="__previous_value__",Ch="__local_write_time__";function hu(n){return(n?.mapValue?.fields||{})[bh]?.stringValue===Ah}function Bo(n){const e=n.mapValue.fields[Sh];return hu(e)?Bo(e):e}function hs(n){const e=Zn(n.mapValue.fields[Ch].timestampValue);return new Ve(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(e,t,r,i,a,c,p,_,T,A){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=T,this.isUsingEmulator=A}}const So="(default)";class fs{constructor(e,t){this.projectId=e,this.database=t||So}static empty(){return new fs("","")}get isDefaultDatabase(){return this.database===So}isEqual(e){return e instanceof fs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rh="__type__",uy="__max__",no={mapValue:{}},Ph="__vector__",Co="value";function tr(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?hu(n)?4:ly(n)?9007199254740991:cy(n)?10:11:ce(28295,{value:n})}function sn(n,e){if(n===e)return!0;const t=tr(n);if(t!==tr(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return hs(n).isEqual(hs(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=Zn(i.timestampValue),p=Zn(a.timestampValue);return c.seconds===p.seconds&&c.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return er(i.bytesValue).isEqual(er(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return He(i.geoPointValue.latitude)===He(a.geoPointValue.latitude)&&He(i.geoPointValue.longitude)===He(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return He(i.integerValue)===He(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const c=He(i.doubleValue),p=He(a.doubleValue);return c===p?bo(c)===bo(p):isNaN(c)&&isNaN(p)}return!1})(n,e);case 9:return si(n.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return(function(i,a){const c=i.mapValue.fields||{},p=a.mapValue.fields||{};if(Dc(c)!==Dc(p))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(p[_]===void 0||!sn(c[_],p[_])))return!1;return!0})(n,e);default:return ce(52216,{left:n})}}function ds(n,e){return(n.values||[]).find((t=>sn(t,e)))!==void 0}function oi(n,e){if(n===e)return 0;const t=tr(n),r=tr(e);if(t!==r)return we(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return we(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const p=He(a.integerValue||a.doubleValue),_=He(c.integerValue||c.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return xc(n.timestampValue,e.timestampValue);case 4:return xc(hs(n),hs(e));case 5:return Va(n.stringValue,e.stringValue);case 6:return(function(a,c){const p=er(a),_=er(c);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const p=a.split("/"),_=c.split("/");for(let T=0;T<p.length&&T<_.length;T++){const A=we(p[T],_[T]);if(A!==0)return A}return we(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const p=we(He(a.latitude),He(c.latitude));return p!==0?p:we(He(a.longitude),He(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Vc(n.arrayValue,e.arrayValue);case 10:return(function(a,c){const p=a.fields||{},_=c.fields||{},T=p[Co]?.arrayValue,A=_[Co]?.arrayValue,k=we(T?.values?.length||0,A?.values?.length||0);return k!==0?k:Vc(T,A)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===no.mapValue&&c===no.mapValue)return 0;if(a===no.mapValue)return 1;if(c===no.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),T=c.fields||{},A=Object.keys(T);_.sort(),A.sort();for(let k=0;k<_.length&&k<A.length;++k){const M=Va(_[k],A[k]);if(M!==0)return M;const K=oi(p[_[k]],T[A[k]]);if(K!==0)return K}return we(_.length,A.length)})(n.mapValue,e.mapValue);default:throw ce(23264,{he:t})}}function xc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return we(n,e);const t=Zn(n),r=Zn(e),i=we(t.seconds,r.seconds);return i!==0?i:we(t.nanos,r.nanos)}function Vc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=oi(t[i],r[i]);if(a)return a}return we(t.length,r.length)}function ai(n){return Oa(n)}function Oa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Zn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return er(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ae.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=Oa(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const c of r)a?a=!1:i+=",",i+=`${c}:${Oa(t.fields[c])}`;return i+"}"})(n.mapValue):ce(61005,{value:n})}function ho(n){switch(tr(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Bo(n);return e?16+ho(e):16;case 5:return 2*n.stringValue.length;case 6:return er(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+ho(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return kr(r.fields,((a,c)=>{i+=a.length+ho(c)})),i})(n.mapValue);default:throw ce(13486,{value:n})}}function Oc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Ma(n){return!!n&&"integerValue"in n}function fu(n){return!!n&&"arrayValue"in n}function Mc(n){return!!n&&"nullValue"in n}function Lc(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function fo(n){return!!n&&"mapValue"in n}function cy(n){return(n?.mapValue?.fields||{})[Rh]?.stringValue===Ph}function is(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return kr(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=is(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=is(n.arrayValue.values[t]);return e}return{...n}}function ly(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===uy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!fo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=is(t)}setAll(e){let t=ot.emptyPath(),r={},i=[];e.forEach(((c,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}c?r[p.lastSegment()]=is(c):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());fo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];fo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){kr(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new Rt(is(this.value))}}function kh(n){const e=[];return kr(n.fields,((t,r)=>{const i=new ot([t]);if(fo(r)){const a=kh(r.mapValue).fields;if(a.length===0)e.push(i);else for(const c of a)e.push(i.child(c))}else e.push(i)})),new Ft(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t,r,i,a,c,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=c,this.documentState=p}static newInvalidDocument(e){return new dt(e,0,pe.min(),pe.min(),pe.min(),Rt.empty(),0)}static newFoundDocument(e,t,r,i){return new dt(e,1,t,pe.min(),r,i,0)}static newNoDocument(e,t){return new dt(e,2,t,pe.min(),pe.min(),Rt.empty(),0)}static newUnknownDocument(e,t){return new dt(e,3,t,pe.min(),pe.min(),Rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.position=e,this.inclusive=t}}function Fc(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],c=n.position[i];if(a.field.isKeyField()?r=ae.comparator(ae.fromName(c.referenceValue),t.key):r=oi(c,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function Uc(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!sn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t="asc"){this.field=e,this.dir=t}}function hy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{}class Ke extends Dh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new dy(e,t,r):t==="array-contains"?new my(e,r):t==="in"?new yy(e,r):t==="not-in"?new _y(e,r):t==="array-contains-any"?new vy(e,r):new Ke(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new py(e,r):new gy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(oi(t,this.value)):t!==null&&tr(this.value)===tr(t)&&this.matchesComparison(oi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ut extends Dh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Ut(e,t)}matches(e){return Nh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Nh(n){return n.op==="and"}function xh(n){return fy(n)&&Nh(n)}function fy(n){for(const e of n.filters)if(e instanceof Ut)return!1;return!0}function La(n){if(n instanceof Ke)return n.field.canonicalString()+n.op.toString()+ai(n.value);if(xh(n))return n.filters.map((e=>La(e))).join(",");{const e=n.filters.map((t=>La(t))).join(",");return`${n.op}(${e})`}}function Vh(n,e){return n instanceof Ke?(function(r,i){return i instanceof Ke&&r.op===i.op&&r.field.isEqual(i.field)&&sn(r.value,i.value)})(n,e):n instanceof Ut?(function(r,i){return i instanceof Ut&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,c,p)=>a&&Vh(c,i.filters[p])),!0):!1})(n,e):void ce(19439)}function Oh(n){return n instanceof Ke?(function(t){return`${t.field.canonicalString()} ${t.op} ${ai(t.value)}`})(n):n instanceof Ut?(function(t){return t.op.toString()+" {"+t.getFilters().map(Oh).join(" ,")+"}"})(n):"Filter"}class dy extends Ke{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class py extends Ke{constructor(e,t){super(e,"in",t),this.keys=Mh("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class gy extends Ke{constructor(e,t){super(e,"not-in",t),this.keys=Mh("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function Mh(n,e){return(e.arrayValue?.values||[]).map((t=>ae.fromName(t.referenceValue)))}class my extends Ke{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return fu(t)&&ds(t.arrayValue,this.value)}}class yy extends Ke{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ds(this.value.arrayValue,t)}}class _y extends Ke{constructor(e,t){super(e,"not-in",t)}matches(e){if(ds(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ds(this.value.arrayValue,t)}}class vy extends Ke{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!fu(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ds(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(e,t=null,r=[],i=[],a=null,c=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=c,this.endAt=p,this.Te=null}}function jc(n,e=null,t=[],r=[],i=null,a=null,c=null){return new Ty(n,e,t,r,i,a,c)}function du(n){const e=ge(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>La(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),qo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>ai(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>ai(r))).join(",")),e.Te=t}return e.Te}function pu(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!hy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vh(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Uc(n.startAt,e.startAt)&&Uc(n.endAt,e.endAt)}function Fa(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t=null,r=[],i=[],a=null,c="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=c,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Ey(n,e,t,r,i,a,c,p){return new Is(n,e,t,r,i,a,c,p)}function gu(n){return new Is(n)}function qc(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Lh(n){return n.collectionGroup!==null}function ss(n){const e=ge(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let p=new Je(ot.comparator);return c.filters.forEach((_=>{_.getFlattenedFilters().forEach((T=>{T.isInequality()&&(p=p.add(T.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new Po(a,r))})),t.has(ot.keyField().canonicalString())||e.Ie.push(new Po(ot.keyField(),r))}return e.Ie}function Zt(n){const e=ge(n);return e.Ee||(e.Ee=wy(e,ss(n))),e.Ee}function wy(n,e){if(n.limitType==="F")return jc(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new Po(i.field,a)}));const t=n.endAt?new Ro(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ro(n.startAt.position,n.startAt.inclusive):null;return jc(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Ua(n,e){const t=n.filters.concat([e]);return new Is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function ja(n,e,t){return new Is(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function $o(n,e){return pu(Zt(n),Zt(e))&&n.limitType===e.limitType}function Fh(n){return`${du(Zt(n))}|lt:${n.limitType}`}function Gr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>Oh(i))).join(", ")}]`),qo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>ai(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>ai(i))).join(",")),`Target(${r})`})(Zt(n))}; limitType=${n.limitType})`}function Ho(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ae.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of ss(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(c,p,_){const T=Fc(c,p,_);return c.inclusive?T<=0:T<0})(r.startAt,ss(r),i)||r.endAt&&!(function(c,p,_){const T=Fc(c,p,_);return c.inclusive?T>=0:T>0})(r.endAt,ss(r),i))})(n,e)}function Iy(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Uh(n){return(e,t)=>{let r=!1;for(const i of ss(n)){const a=Ay(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function Ay(n,e,t){const r=n.field.isKeyField()?ae.comparator(e.key,t.key):(function(a,c,p){const _=c.data.field(a),T=p.data.field(a);return _!==null&&T!==null?oi(_,T):ce(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ce(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){kr(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return wh(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const by=new Ue(ae.comparator);function En(){return by}const jh=new Ue(ae.comparator);function Zi(...n){let e=jh;for(const t of n)e=e.insert(t.key,t);return e}function qh(n){let e=jh;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function wr(){return os()}function Bh(){return os()}function os(){return new Dr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Sy=new Ue(ae.comparator),Cy=new Je(ae.comparator);function Ie(...n){let e=Cy;for(const t of n)e=e.add(t);return e}const Ry=new Je(we);function Py(){return Ry}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mu(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bo(e)?"-0":e}}function $h(n){return{integerValue:""+n}}function ky(n,e){return ry(e)?$h(e):mu(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zo{constructor(){this._=void 0}}function Dy(n,e,t){return n instanceof ps?(function(i,a){const c={fields:{[bh]:{stringValue:Ah},[Ch]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&hu(a)&&(a=Bo(a)),a&&(c.fields[Sh]=a),{mapValue:c}})(t,e):n instanceof gs?zh(n,e):n instanceof ms?Wh(n,e):(function(i,a){const c=Hh(i,a),p=Bc(c)+Bc(i.Ae);return Ma(c)&&Ma(i.Ae)?$h(p):mu(i.serializer,p)})(n,e)}function Ny(n,e,t){return n instanceof gs?zh(n,e):n instanceof ms?Wh(n,e):t}function Hh(n,e){return n instanceof ko?(function(r){return Ma(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class ps extends zo{}class gs extends zo{constructor(e){super(),this.elements=e}}function zh(n,e){const t=Gh(e);for(const r of n.elements)t.some((i=>sn(i,r)))||t.push(r);return{arrayValue:{values:t}}}class ms extends zo{constructor(e){super(),this.elements=e}}function Wh(n,e){let t=Gh(e);for(const r of n.elements)t=t.filter((i=>!sn(i,r)));return{arrayValue:{values:t}}}class ko extends zo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Bc(n){return He(n.integerValue||n.doubleValue)}function Gh(n){return fu(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t){this.field=e,this.transform=t}}function Vy(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof gs&&i instanceof gs||r instanceof ms&&i instanceof ms?si(r.elements,i.elements,sn):r instanceof ko&&i instanceof ko?sn(r.Ae,i.Ae):r instanceof ps&&i instanceof ps})(n.transform,e.transform)}class Oy{constructor(e,t){this.version=e,this.transformResults=t}}class en{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new en}static exists(e){return new en(void 0,e)}static updateTime(e){return new en(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function po(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Wo{}function Kh(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new yu(n.key,en.none()):new As(n.key,n.data,en.none());{const t=n.data,r=Rt.empty();let i=new Je(ot.comparator);for(let a of e.fields)if(!i.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?r.delete(a):r.set(a,c),i=i.add(a)}return new Nr(n.key,r,new Ft(i.toArray()),en.none())}}function My(n,e,t){n instanceof As?(function(i,a,c){const p=i.value.clone(),_=Hc(i.fieldTransforms,a,c.transformResults);p.setAll(_),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):n instanceof Nr?(function(i,a,c){if(!po(i.precondition,a))return void a.convertToUnknownDocument(c.version);const p=Hc(i.fieldTransforms,a,c.transformResults),_=a.data;_.setAll(Qh(i)),_.setAll(p),a.convertToFoundDocument(c.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function as(n,e,t,r){return n instanceof As?(function(a,c,p,_){if(!po(a.precondition,c))return p;const T=a.value.clone(),A=zc(a.fieldTransforms,_,c);return T.setAll(A),c.convertToFoundDocument(c.version,T).setHasLocalMutations(),null})(n,e,t,r):n instanceof Nr?(function(a,c,p,_){if(!po(a.precondition,c))return p;const T=zc(a.fieldTransforms,_,c),A=c.data;return A.setAll(Qh(a)),A.setAll(T),c.convertToFoundDocument(c.version,A).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((k=>k.field)))})(n,e,t,r):(function(a,c,p){return po(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):p})(n,e,t)}function Ly(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=Hh(r.transform,i||null);a!=null&&(t===null&&(t=Rt.empty()),t.set(r.field,a))}return t||null}function $c(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&si(r,i,((a,c)=>Vy(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class As extends Wo{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Nr extends Wo{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function Qh(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Hc(n,e,t){const r=new Map;Ce(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],c=a.transform,p=e.data.field(a.field);r.set(a.field,Ny(c,p,t[i]))}return r}function zc(n,e,t){const r=new Map;for(const i of n){const a=i.transform,c=t.data.field(i.field);r.set(i.field,Dy(a,c,e))}return r}class yu extends Wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fy extends Wo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&My(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=as(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=as(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Bh();return this.mutations.forEach((i=>{const a=e.get(i.key),c=a.overlayedDocument;let p=this.applyToLocalView(c,a.mutatedFields);p=t.has(i.key)?null:p;const _=Kh(c,p);_!==null&&r.set(i.key,_),c.isValidDocument()||c.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Ie())}isEqual(e){return this.batchId===e.batchId&&si(this.mutations,e.mutations,((t,r)=>$c(t,r)))&&si(this.baseMutations,e.baseMutations,((t,r)=>$c(t,r)))}}class _u{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Ce(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return Sy})();const a=e.mutations;for(let c=0;c<a.length;c++)i=i.insert(a[c].key,r[c].version);return new _u(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ge,be;function By(n){switch(n){case H.OK:return ce(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return ce(15467,{code:n})}}function Xh(n){if(n===void 0)return Tn("GRPC error has no .code"),H.UNKNOWN;switch(n){case Ge.OK:return H.OK;case Ge.CANCELLED:return H.CANCELLED;case Ge.UNKNOWN:return H.UNKNOWN;case Ge.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ge.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ge.INTERNAL:return H.INTERNAL;case Ge.UNAVAILABLE:return H.UNAVAILABLE;case Ge.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ge.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ge.NOT_FOUND:return H.NOT_FOUND;case Ge.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ge.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ge.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ge.ABORTED:return H.ABORTED;case Ge.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ge.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ge.DATA_LOSS:return H.DATA_LOSS;default:return ce(39323,{code:n})}}(be=Ge||(Ge={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=new Qn([4294967295,4294967295],0);function Wc(n){const e=$y().encode(n),t=new hh;return t.update(e),new Uint8Array(t.digest())}function Gc(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Qn([t,r],0),new Qn([i,a],0)]}class vu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new es(`Invalid padding: ${t}`);if(r<0)throw new es(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new es(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new es(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Qn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Qn.fromNumber(r)));return i.compare(Hy)===1&&(i=new Qn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Wc(e),[r,i]=Gc(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);if(!this.we(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new vu(a,i,t);return r.forEach((p=>c.insert(p))),c}insert(e){if(this.ge===0)return;const t=Wc(e),[r,i]=Gc(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class es extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,bs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Go(pe.min(),i,new Ue(we),En(),Ie())}}class bs{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new bs(r,t,Ie(),Ie(),Ie())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class Jh{constructor(e,t){this.targetId=e,this.Ce=t}}class Yh{constructor(e,t,r=at.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class Kc{constructor(){this.ve=0,this.Fe=Qc(),this.Me=at.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Ie(),t=Ie(),r=Ie();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:ce(38017,{changeType:a})}})),new bs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Qc()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Ce(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class zy{constructor(e){this.Ge=e,this.ze=new Map,this.je=En(),this.Je=ro(),this.He=ro(),this.Ye=new Ue(we)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ce(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(Fa(a))if(r===0){const c=new ae(a.path);this.et(t,c,dt.newNoDocument(c,pe.min()))}else Ce(r===1,20013,{expectedCount:r});else{const c=this._t(t);if(c!==r){const p=this.ut(e),_=p?this.ct(p,e,c):1;if(_!==0){this.it(t);const T=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,T)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let c,p;try{c=er(r).toUint8Array()}catch(_){if(_ instanceof Ih)return ii("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new vu(c,i,a)}catch(_){return ii(_ instanceof es?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const c=this.Ge.ht(),p=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,c)=>{const p=this.ot(c);if(p){if(a.current&&Fa(p.target)){const _=new ae(p.target.path);this.It(_).has(c)||this.Et(c,_)||this.et(c,_,dt.newNoDocument(_,e))}a.Be&&(t.set(c,a.ke()),a.qe())}}));let r=Ie();this.He.forEach(((a,c)=>{let p=!0;c.forEachWhile((_=>{const T=this.ot(_);return!T||T.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,c)=>c.setReadTime(e)));const i=new Go(e,t,this.Ye,this.je,r);return this.je=En(),this.Je=ro(),this.He=ro(),this.Ye=new Ue(we),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Kc,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Je(we),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Je(we),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Kc),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function ro(){return new Ue(ae.comparator)}function Qc(){return new Ue(ae.comparator)}const Wy={asc:"ASCENDING",desc:"DESCENDING"},Gy={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ky={and:"AND",or:"OR"};class Qy{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function qa(n,e){return n.useProto3Json||qo(e)?e:{value:e}}function Do(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Zh(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Xy(n,e){return Do(n,e.toTimestamp())}function tn(n){return Ce(!!n,49232),pe.fromTimestamp((function(t){const r=Zn(t);return new Ve(r.seconds,r.nanos)})(n))}function Tu(n,e){return Ba(n,e).canonicalString()}function Ba(n,e){const t=(function(i){return new De(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function ef(n){const e=De.fromString(n);return Ce(of(e),10190,{key:e.toString()}),e}function $a(n,e){return Tu(n.databaseId,e.path)}function Ea(n,e){const t=ef(e);if(t.get(1)!==n.databaseId.projectId)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ne(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(nf(t))}function tf(n,e){return Tu(n.databaseId,e)}function Jy(n){const e=ef(n);return e.length===4?De.emptyPath():nf(e)}function Ha(n){return new De(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function nf(n){return Ce(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Xc(n,e,t){return{name:$a(n,e),fields:t.value.mapValue.fields}}function Yy(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(T){return T==="NO_CHANGE"?0:T==="ADD"?1:T==="REMOVE"?2:T==="CURRENT"?3:T==="RESET"?4:ce(39313,{state:T})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(T,A){return T.useProto3Json?(Ce(A===void 0||typeof A=="string",58123),at.fromBase64String(A||"")):(Ce(A===void 0||A instanceof Buffer||A instanceof Uint8Array,16193),at.fromUint8Array(A||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,p=c&&(function(T){const A=T.code===void 0?H.UNKNOWN:Xh(T.code);return new ne(A,T.message||"")})(c);t=new Yh(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Ea(n,r.document.name),a=tn(r.document.updateTime),c=r.document.createTime?tn(r.document.createTime):pe.min(),p=new Rt({mapValue:{fields:r.document.fields}}),_=dt.newFoundDocument(i,a,c,p),T=r.targetIds||[],A=r.removedTargetIds||[];t=new go(T,A,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Ea(n,r.document),a=r.readTime?tn(r.readTime):pe.min(),c=dt.newNoDocument(i,a),p=r.removedTargetIds||[];t=new go([],p,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Ea(n,r.document),a=r.removedTargetIds||[];t=new go([],a,i,null)}else{if(!("filter"in e))return ce(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,c=new qy(i,a),p=r.targetId;t=new Jh(p,c)}}return t}function Zy(n,e){let t;if(e instanceof As)t={update:Xc(n,e.key,e.value)};else if(e instanceof yu)t={delete:$a(n,e.key)};else if(e instanceof Nr)t={update:Xc(n,e.key,e.data),updateMask:u_(e.fieldMask)};else{if(!(e instanceof Fy))return ce(16599,{Vt:e.type});t={verify:$a(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,c){const p=c.transform;if(p instanceof ps)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof gs)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof ms)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof ko)return{fieldPath:c.field.canonicalString(),increment:p.Ae};throw ce(20930,{transform:c.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:Xy(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:ce(27497)})(n,e.precondition)),t}function e_(n,e){return n&&n.length>0?(Ce(e!==void 0,14353),n.map((t=>(function(i,a){let c=i.updateTime?tn(i.updateTime):tn(a);return c.isEqual(pe.min())&&(c=tn(a)),new Oy(c,i.transformResults||[])})(t,e)))):[]}function t_(n,e){return{documents:[tf(n,e.path)]}}function n_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=tf(n,i);const a=(function(T){if(T.length!==0)return sf(Ut.create(T,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(T){if(T.length!==0)return T.map((A=>(function(M){return{field:Kr(M.field),direction:s_(M.dir)}})(A)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const p=qa(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(T){return{before:T.inclusive,values:T.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(T){return{before:!T.inclusive,values:T.position}})(e.endAt)),{ft:t,parent:i}}function r_(n){let e=Jy(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Ce(r===1,65062);const A=t.from[0];A.allDescendants?i=A.collectionId:e=e.child(A.collectionId)}let a=[];t.where&&(a=(function(k){const M=rf(k);return M instanceof Ut&&xh(M)?M.getFilters():[M]})(t.where));let c=[];t.orderBy&&(c=(function(k){return k.map((M=>(function(W){return new Po(Qr(W.field),(function(Z){switch(Z){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(M)))})(t.orderBy));let p=null;t.limit&&(p=(function(k){let M;return M=typeof k=="object"?k.value:k,qo(M)?null:M})(t.limit));let _=null;t.startAt&&(_=(function(k){const M=!!k.before,K=k.values||[];return new Ro(K,M)})(t.startAt));let T=null;return t.endAt&&(T=(function(k){const M=!k.before,K=k.values||[];return new Ro(K,M)})(t.endAt)),Ey(e,i,c,a,p,"F",_,T)}function i_(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function rf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Qr(t.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Qr(t.unaryFilter.field);return Ke.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=Qr(t.unaryFilter.field);return Ke.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Qr(t.unaryFilter.field);return Ke.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ce(61313);default:return ce(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Ke.create(Qr(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ce(58110);default:return ce(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Ut.create(t.compositeFilter.filters.map((r=>rf(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ce(1026)}})(t.compositeFilter.op))})(n):ce(30097,{filter:n})}function s_(n){return Wy[n]}function o_(n){return Gy[n]}function a_(n){return Ky[n]}function Kr(n){return{fieldPath:n.canonicalString()}}function Qr(n){return ot.fromServerFormat(n.fieldPath)}function sf(n){return n instanceof Ke?(function(t){if(t.op==="=="){if(Lc(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NAN"}};if(Mc(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Lc(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NOT_NAN"}};if(Mc(t.value))return{unaryFilter:{field:Kr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Kr(t.field),op:o_(t.op),value:t.value}}})(n):n instanceof Ut?(function(t){const r=t.getFilters().map((i=>sf(i)));return r.length===1?r[0]:{compositeFilter:{op:a_(t.op),filters:r}}})(n):ce(54877,{filter:n})}function u_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function of(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(e,t,r,i,a=pe.min(),c=pe.min(),p=at.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new zn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new zn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c_{constructor(e){this.yt=e}}function l_(n){const e=r_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ja(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h_{constructor(){this.Cn=new f_}addToCollectionParentIndex(e,t){return this.Cn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(Yn.min())}updateCollectionGroup(e,t,r){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class f_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Je(De.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},af=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(af,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new ui(0)}static cr(){return new ui(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yc="LruGarbageCollector",d_=1048576;function Zc([n,e],[t,r]){const i=we(n,t);return i===0?we(e,r):i}class p_{constructor(e){this.Ir=e,this.buffer=new Je(Zc),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Zc(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class g_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(Yc,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){gi(t)?re(Yc,"Ignoring IndexedDB error during garbage collection: ",t):await pi(t)}await this.Vr(3e5)}))}}class m_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return z.resolve(jo.ce);const r=new p_(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(Jc)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jc):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,c,p,_,T;const A=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((k=>(k>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${k}`),i=this.params.maximumSequenceNumbersToCollect):i=k,c=Date.now(),this.nthSequenceNumber(e,i)))).next((k=>(r=k,p=Date.now(),this.removeTargets(e,r,t)))).next((k=>(a=k,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((k=>(T=Date.now(),Wr()<=Ee.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-A}ms
	Determined least recently used ${i} in `+(p-c)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${k} documents in `+(T-_)+`ms
Total Duration: ${T-A}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:k}))))}}function y_(n,e){return new m_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(){this.changes=new Dr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T_{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&as(r.mutation,i,Ft.empty(),Ve.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Ie()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Ie()){const i=wr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let c=Zi();return a.forEach(((p,_)=>{c=c.insert(p,_.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const r=wr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Ie())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((c,p)=>{t.set(c,p)}))}))}computeViews(e,t,r,i){let a=En();const c=os(),p=(function(){return os()})();return t.forEach(((_,T)=>{const A=r.get(T.key);i.has(T.key)&&(A===void 0||A.mutation instanceof Nr)?a=a.insert(T.key,T):A!==void 0?(c.set(T.key,A.mutation.getFieldMask()),as(A.mutation,T,A.mutation.getFieldMask(),Ve.now())):c.set(T.key,Ft.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((T,A)=>c.set(T,A))),t.forEach(((T,A)=>p.set(T,new v_(A,c.get(T)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=os();let i=new Ue(((c,p)=>c-p)),a=Ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const p of c)p.keys().forEach((_=>{const T=t.get(_);if(T===null)return;let A=r.get(_)||Ft.empty();A=p.applyToLocalView(T,A),r.set(_,A);const k=(i.get(p.batchId)||Ie()).add(_);i=i.insert(p.batchId,k)}))})).next((()=>{const c=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),T=_.key,A=_.value,k=Bh();A.forEach((M=>{if(!a.has(M)){const K=Kh(t.get(M),r.get(M));K!==null&&k.set(M,K),a=a.add(M)}})),c.push(this.documentOverlayCache.saveOverlays(e,T,k))}return z.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(c){return ae.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Lh(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const c=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):z.resolve(wr());let p=ls,_=a;return c.next((T=>z.forEach(T,((A,k)=>(p<k.largestBatchId&&(p=k.largestBatchId),a.get(A)?z.resolve():this.remoteDocumentCache.getEntry(e,A).next((M=>{_=_.insert(A,M)}))))).next((()=>this.populateOverlays(e,T,a))).next((()=>this.computeViews(e,_,T,Ie()))).next((A=>({batchId:p,changes:qh(A)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((r=>{let i=Zi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let c=Zi();return this.indexManager.getCollectionParents(e,a).next((p=>z.forEach(p,(_=>{const T=(function(k,M){return new Is(M,null,k.explicitOrderBy.slice(),k.filters.slice(),k.limit,k.limitType,k.startAt,k.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,T,r,i).next((A=>{A.forEach(((k,M)=>{c=c.insert(k,M)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((c=>{a.forEach(((_,T)=>{const A=T.getKey();c.get(A)===null&&(c=c.insert(A,dt.newInvalidDocument(A)))}));let p=Zi();return c.forEach(((_,T)=>{const A=a.get(_);A!==void 0&&as(A.mutation,T,Ft.empty(),Ve.now()),Ho(t,T)&&(p=p.insert(_,T))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:tn(i.createTime)}})(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:l_(i.bundledQuery),readTime:tn(i.readTime)}})(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(){this.overlays=new Ue(ae.comparator),this.qr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=wr();return z.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),z.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),z.resolve()}getOverlaysForCollection(e,t,r){const i=wr(),a=t.length+1,c=new ae(t.child("")),p=this.overlays.getIteratorFrom(c);for(;p.hasNext();){const _=p.getNext().value,T=_.getKey();if(!t.isPrefixOf(T.path))break;T.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return z.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new Ue(((T,A)=>T-A));const c=this.overlays.getIterator();for(;c.hasNext();){const T=c.getNext().value;if(T.getKey().getCollectionGroup()===t&&T.largestBatchId>r){let A=a.get(T.largestBatchId);A===null&&(A=wr(),a=a.insert(T.largestBatchId,A)),A.set(T.getKey(),T)}}const p=wr(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((T,A)=>p.set(T,A))),!(p.size()>=i)););return z.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new jy(t,r));let a=this.qr.get(t);a===void 0&&(a=Ie(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(){this.sessionToken=at.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(){this.Qr=new Je(et.$r),this.Ur=new Je(et.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new et(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new et(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new ae(new De([])),r=new et(t,e),i=new et(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(c=>{this.Gr(c),a.push(c.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ae(new De([])),r=new et(t,e),i=new et(t,e+1);let a=Ie();return this.Ur.forEachInRange([r,i],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new et(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ae.comparator(e.key,t.key)||we(e.Yr,t.Yr)}static Kr(e,t){return we(e.Yr,t.Yr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A_{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Je(et.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new Uy(a,t,r,i);this.mutationQueue.push(c);for(const p of i)this.Zr=this.Zr.add(new et(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return z.resolve(c)}lookupMutationBatch(e,t){return z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?lu:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new et(t,0),i=new et(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(c=>{const p=this.Xr(c.Yr);a.push(p)})),z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Je(we);return t.forEach((i=>{const a=new et(i,0),c=new et(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,c],(p=>{r=r.add(p.Yr)}))})),z.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ae.isDocumentKey(a)||(a=a.child(""));const c=new et(new ae(a),0);let p=new Je(we);return this.Zr.forEachWhile((_=>{const T=_.key.path;return!!r.isPrefixOf(T)&&(T.length===i&&(p=p.add(_.Yr)),!0)}),c),z.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Ce(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return z.forEach(t.mutations,(i=>{const a=new et(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new et(t,0),i=this.Zr.firstAfterOrEqual(r);return z.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(e){this.ri=e,this.docs=(function(){return new Ue(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,c=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return z.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(t))}getEntries(e,t){let r=En();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():dt.newInvalidDocument(i))})),z.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=En();const c=t.path,p=new ae(c.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:T,value:{document:A}}=_.getNext();if(!c.isPrefixOf(T.path))break;T.path.length>c.length+1||Zm(Ym(A),r)<=0||(i.has(A.key)||Ho(t,A))&&(a=a.insert(A.key,A.mutableCopy()))}return z.resolve(a)}getAllFromCollectionGroup(e,t,r,i){ce(9500)}ii(e,t){return z.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new S_(this)}getSize(e){return z.resolve(this.size)}}class S_ extends __{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C_{constructor(e){this.persistence=e,this.si=new Dr((t=>du(t)),pu),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Eu,this.targetCount=0,this.ai=ui.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new ui(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Pr(t),z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((c,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(c),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),z.waitFor(a).next((()=>i))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return z.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),z.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((c=>{a.push(i.markPotentiallyOrphaned(e,c))})),z.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return z.resolve(r)}containsKey(e,t){return z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(e,t){this.ui={},this.overlays={},this.ci=new jo(0),this.li=!1,this.li=!0,this.hi=new I_,this.referenceDelegate=e(this),this.Pi=new C_(this),this.indexManager=new h_,this.remoteDocumentCache=(function(i){return new b_(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new c_(t),this.Ii=new E_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new w_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new A_(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const i=new R_(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return z.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class R_ extends ty{constructor(e){super(),this.currentSequenceNumber=e}}class wu{constructor(e){this.persistence=e,this.Ri=new Eu,this.Vi=null}static mi(e){return new wu(e)}get fi(){if(this.Vi)return this.Vi;throw ce(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),z.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,(r=>{const i=ae.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,pe.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return z.or([()=>z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class No{constructor(e,t){this.persistence=e,this.pi=new Dr((r=>iy(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=y_(this,t)}static mi(e,t){return new No(e,t)}Ei(){}di(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return z.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?z.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(c=>this.br(e,c,t).next((p=>{p||(r++,a.removeEntry(c,pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=ho(e.data.value)),t}br(e,t,r){return z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return z.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Ie(),i=Ie();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Iu(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return wd()?8:ny(pt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new P_;return this.Ss(e,t,c).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,c,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(Wr()<=Ee.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Gr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(Wr()<=Ee.DEBUG&&re("QueryEngine","Query:",Gr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Wr()<=Ee.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Gr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Zt(t))):z.resolve())}ys(e,t){if(qc(t))return z.resolve(null);let r=Zt(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=ja(t,null,"F"),r=Zt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const c=Ie(...a);return this.ps.getDocuments(e,c).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const T=this.Ds(t,p);return this.Cs(t,T,c,_.readTime)?this.ys(e,ja(t,null,"F")):this.vs(e,T,t,_)}))))})))))}ws(e,t,r,i){return qc(t)||i.isEqual(pe.min())?z.resolve(null):this.ps.getDocuments(e,r).next((a=>{const c=this.Ds(t,a);return this.Cs(t,c,r,i)?z.resolve(null):(Wr()<=Ee.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Gr(t)),this.vs(e,c,t,Jm(i,ls)).next((p=>p)))}))}Ds(e,t){let r=new Je(Uh(e));return t.forEach(((i,a)=>{Ho(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return Wr()<=Ee.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Gr(t)),this.ps.getDocumentsMatchingQuery(e,t,Yn.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au="LocalStore",D_=3e8;class N_{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new Ue(we),this.xs=new Dr((a=>du(a)),pu),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new T_(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function x_(n,e,t,r){return new N_(n,e,t,r)}async function cf(n,e){const t=ge(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const c=[],p=[];let _=Ie();for(const T of i){c.push(T.batchId);for(const A of T.mutations)_=_.add(A.key)}for(const T of a){p.push(T.batchId);for(const A of T.mutations)_=_.add(A.key)}return t.localDocuments.getDocuments(r,_).next((T=>({Ls:T,removedBatchIds:c,addedBatchIds:p})))}))}))}function V_(n,e){const t=ge(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,T,A){const k=T.batch,M=k.keys();let K=z.resolve();return M.forEach((W=>{K=K.next((()=>A.getEntry(_,W))).next((X=>{const Z=T.docVersions.get(W);Ce(Z!==null,48541),X.version.compareTo(Z)<0&&(k.applyToRemoteDocument(X,T),X.isValidDocument()&&(X.setReadTime(T.commitVersion),A.addEntry(X)))}))})),K.next((()=>p.mutationQueue.removeMutationBatch(_,k)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Ie();for(let T=0;T<p.mutationResults.length;++T)p.mutationResults[T].transformResults.length>0&&(_=_.add(p.batch.mutations[T].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function lf(n){const e=ge(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function O_(n,e){const t=ge(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((A,k)=>{const M=i.get(k);if(!M)return;p.push(t.Pi.removeMatchingKeys(a,A.removedDocuments,k).next((()=>t.Pi.addMatchingKeys(a,A.addedDocuments,k))));let K=M.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(k)!==null?K=K.withResumeToken(at.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):A.resumeToken.approximateByteSize()>0&&(K=K.withResumeToken(A.resumeToken,r)),i=i.insert(k,K),(function(X,Z,Y){return X.resumeToken.approximateByteSize()===0||Z.snapshotVersion.toMicroseconds()-X.snapshotVersion.toMicroseconds()>=D_?!0:Y.addedDocuments.size+Y.modifiedDocuments.size+Y.removedDocuments.size>0})(M,K,A)&&p.push(t.Pi.updateTargetData(a,K))}));let _=En(),T=Ie();if(e.documentUpdates.forEach((A=>{e.resolvedLimboDocuments.has(A)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,A))})),p.push(M_(a,c,e.documentUpdates).next((A=>{_=A.ks,T=A.qs}))),!r.isEqual(pe.min())){const A=t.Pi.getLastRemoteSnapshotVersion(a).next((k=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(A)}return z.waitFor(p).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,T))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function M_(n,e,t){let r=Ie(),i=Ie();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let c=En();return t.forEach(((p,_)=>{const T=a.get(p);_.isFoundDocument()!==T.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(pe.min())?(e.removeEntry(p,_.readTime),c=c.insert(p,_)):!T.isValidDocument()||_.version.compareTo(T.version)>0||_.version.compareTo(T.version)===0&&T.hasPendingWrites?(e.addEntry(_),c=c.insert(p,_)):re(Au,"Ignoring outdated watch update for ",p,". Current version:",T.version," Watch version:",_.version)})),{ks:c,qs:i}}))}function L_(n,e){const t=ge(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=lu),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function F_(n,e){const t=ge(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,z.resolve(i)):t.Pi.allocateTargetId(r).next((c=>(i=new zn(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function za(n,e,t){const r=ge(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(c=>r.persistence.referenceDelegate.removeTarget(c,i)))}catch(c){if(!gi(c))throw c;re(Au,`Failed to update sequence numbers for target ${e}: ${c}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function el(n,e,t){const r=ge(n);let i=pe.min(),a=Ie();return r.persistence.runTransaction("Execute query","readwrite",(c=>(function(_,T,A){const k=ge(_),M=k.xs.get(A);return M!==void 0?z.resolve(k.Ms.get(M)):k.Pi.getTargetData(T,A)})(r,c,Zt(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(c,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(c,e,t?i:pe.min(),t?a:Ie()))).next((p=>(U_(r,Iy(e),p),{documents:p,Qs:a})))))}function U_(n,e,t){let r=n.Os.get(e)||pe.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class tl{constructor(){this.activeTargetIds=Py()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class j_{constructor(){this.Mo=new tl,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new tl,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl="ConnectivityMonitor";class rl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(nl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(nl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io=null;function Wa(){return io===null?io=(function(){return 268435456+Math.round(2147483648*Math.random())})():io++,"0x"+io.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="RestConnection",B_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class $_{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===So?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const c=Wa(),p=this.zo(e,t.toUriEncodedString());re(wa,`Sending RPC '${e}' ${c}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:T}=new URL(p),A=li(T);return this.Jo(e,p,_,r,A).then((k=>(re(wa,`Received RPC '${e}' ${c}: `,k),k)),(k=>{throw ii(wa,`RPC '${e}' ${c} failed with error: `,k,"url: ",p,"request:",r),k}))}Ho(e,t,r,i,a,c){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+di})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=B_[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class z_ extends $_{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const c=Wa();return new Promise(((p,_)=>{const T=new fh;T.setWithCredentials(!0),T.listenOnce(dh.COMPLETE,(()=>{try{switch(T.getLastErrorCode()){case lo.NO_ERROR:const k=T.getResponseJson();re(ht,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(k)),p(k);break;case lo.TIMEOUT:re(ht,`RPC '${e}' ${c} timed out`),_(new ne(H.DEADLINE_EXCEEDED,"Request time out"));break;case lo.HTTP_ERROR:const M=T.getStatus();if(re(ht,`RPC '${e}' ${c} failed with status:`,M,"response text:",T.getResponseText()),M>0){let K=T.getResponseJson();Array.isArray(K)&&(K=K[0]);const W=K?.error;if(W&&W.status&&W.message){const X=(function(Y){const Ae=Y.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(Ae)>=0?Ae:H.UNKNOWN})(W.status);_(new ne(X,W.message))}else _(new ne(H.UNKNOWN,"Server responded with status "+T.getStatus()))}else _(new ne(H.UNAVAILABLE,"Connection failed."));break;default:ce(9055,{l_:e,streamId:c,h_:T.getLastErrorCode(),P_:T.getLastError()})}}finally{re(ht,`RPC '${e}' ${c} completed.`)}}));const A=JSON.stringify(i);re(ht,`RPC '${e}' ${c} sending request:`,i),T.send(t,"POST",A,r,15)}))}T_(e,t,r){const i=Wa(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=mh(),p=gh(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},T=this.longPollingOptions.timeoutSeconds;T!==void 0&&(_.longPollingTimeout=Math.round(1e3*T)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const A=a.join("");re(ht,`Creating RPC '${e}' stream ${i}: ${A}`,_);const k=c.createWebChannel(A,_);this.I_(k);let M=!1,K=!1;const W=new H_({Yo:Z=>{K?re(ht,`Not sending because RPC '${e}' stream ${i} is closed:`,Z):(M||(re(ht,`Opening RPC '${e}' stream ${i} transport.`),k.open(),M=!0),re(ht,`RPC '${e}' stream ${i} sending:`,Z),k.send(Z))},Zo:()=>k.close()}),X=(Z,Y,Ae)=>{Z.listen(Y,(Se=>{try{Ae(Se)}catch(je){setTimeout((()=>{throw je}),0)}}))};return X(k,Yi.EventType.OPEN,(()=>{K||(re(ht,`RPC '${e}' stream ${i} transport opened.`),W.o_())})),X(k,Yi.EventType.CLOSE,(()=>{K||(K=!0,re(ht,`RPC '${e}' stream ${i} transport closed`),W.a_(),this.E_(k))})),X(k,Yi.EventType.ERROR,(Z=>{K||(K=!0,ii(ht,`RPC '${e}' stream ${i} transport errored. Name:`,Z.name,"Message:",Z.message),W.a_(new ne(H.UNAVAILABLE,"The operation could not be completed")))})),X(k,Yi.EventType.MESSAGE,(Z=>{if(!K){const Y=Z.data[0];Ce(!!Y,16349);const Ae=Y,Se=Ae?.error||Ae[0]?.error;if(Se){re(ht,`RPC '${e}' stream ${i} received error:`,Se);const je=Se.status;let tt=(function(C){const S=Ge[C];if(S!==void 0)return Xh(S)})(je),ze=Se.message;tt===void 0&&(tt=H.INTERNAL,ze="Unknown error status: "+je+" with message "+Se.message),K=!0,W.a_(new ne(tt,ze)),k.close()}else re(ht,`RPC '${e}' stream ${i} received:`,Y),W.u_(Y)}})),X(p,ph.STAT_EVENT,(Z=>{Z.stat===xa.PROXY?re(ht,`RPC '${e}' stream ${i} detected buffering proxy`):Z.stat===xa.NOPROXY&&re(ht,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{W.__()}),0),W}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Ia(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ko(n){return new Qy(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hf{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il="PersistentStream";class ff{constructor(e,t,r,i,a,c,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new hf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Tn(t.toString()),Tn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new ne(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(il,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(il,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class W_ extends ff{constructor(e,t,r,i,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=Yy(this.serializer,e),r=(function(a){if(!("targetChange"in a))return pe.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?pe.min():c.readTime?tn(c.readTime):pe.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=Ha(this.serializer),t.addTarget=(function(a,c){let p;const _=c.target;if(p=Fa(_)?{documents:t_(a,_)}:{query:n_(a,_).ft},p.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){p.resumeToken=Zh(a,c.resumeToken);const T=qa(a,c.expectedCount);T!==null&&(p.expectedCount=T)}else if(c.snapshotVersion.compareTo(pe.min())>0){p.readTime=Do(a,c.snapshotVersion.toTimestamp());const T=qa(a,c.expectedCount);T!==null&&(p.expectedCount=T)}return p})(this.serializer,e);const r=i_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=Ha(this.serializer),t.removeTarget=e,this.q_(t)}}class G_ extends ff{constructor(e,t,r,i,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Ce(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ce(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Ce(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=e_(e.writeResults,e.commitTime),r=tn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=Ha(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>Zy(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{}class Q_ extends K_{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Go(e,Ba(t,r),i,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ne(H.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,p])=>this.connection.Ho(e,Ba(t,r),i,c,p,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ne(H.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class X_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Tn(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="RemoteStore";class J_{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{xr(this)&&(re(Pr,"Restarting streams for network reachability change."),await(async function(_){const T=ge(_);T.Ea.add(4),await Ss(T),T.Ra.set("Unknown"),T.Ea.delete(4),await Qo(T)})(this))}))})),this.Ra=new X_(r,i)}}async function Qo(n){if(xr(n))for(const e of n.da)await e(!0)}async function Ss(n){for(const e of n.da)await e(!1)}function df(n,e){const t=ge(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Ru(t)?Cu(t):mi(t).O_()&&Su(t,e))}function bu(n,e){const t=ge(n),r=mi(t);t.Ia.delete(e),r.O_()&&pf(t,e),t.Ia.size===0&&(r.O_()?r.L_():xr(t)&&t.Ra.set("Unknown"))}function Su(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}mi(n).Y_(e)}function pf(n,e){n.Va.Ue(e),mi(n).Z_(e)}function Cu(n){n.Va=new zy({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),mi(n).start(),n.Ra.ua()}function Ru(n){return xr(n)&&!mi(n).x_()&&n.Ia.size>0}function xr(n){return ge(n).Ea.size===0}function gf(n){n.Va=void 0}async function Y_(n){n.Ra.set("Online")}async function Z_(n){n.Ia.forEach(((e,t)=>{Su(n,e)}))}async function ev(n,e){gf(n),Ru(n)?(n.Ra.ha(e),Cu(n)):n.Ra.set("Unknown")}async function tv(n,e,t){if(n.Ra.set("Online"),e instanceof Yh&&e.state===2&&e.cause)try{await(async function(i,a){const c=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,c),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){re(Pr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await xo(n,r)}else if(e instanceof go?n.Va.Ze(e):e instanceof Jh?n.Va.st(e):n.Va.tt(e),!t.isEqual(pe.min()))try{const r=await lf(n.localStore);t.compareTo(r)>=0&&await(function(a,c){const p=a.Va.Tt(c);return p.targetChanges.forEach(((_,T)=>{if(_.resumeToken.approximateByteSize()>0){const A=a.Ia.get(T);A&&a.Ia.set(T,A.withResumeToken(_.resumeToken,c))}})),p.targetMismatches.forEach(((_,T)=>{const A=a.Ia.get(_);if(!A)return;a.Ia.set(_,A.withResumeToken(at.EMPTY_BYTE_STRING,A.snapshotVersion)),pf(a,_);const k=new zn(A.target,_,T,A.sequenceNumber);Su(a,k)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){re(Pr,"Failed to raise snapshot:",r),await xo(n,r)}}async function xo(n,e,t){if(!gi(e))throw e;n.Ea.add(1),await Ss(n),n.Ra.set("Offline"),t||(t=()=>lf(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Pr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await Qo(n)}))}function mf(n,e){return e().catch((t=>xo(n,t,e)))}async function Xo(n){const e=ge(n),t=nr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:lu;for(;nv(e);)try{const i=await L_(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,rv(e,i)}catch(i){await xo(e,i)}yf(e)&&_f(e)}function nv(n){return xr(n)&&n.Ta.length<10}function rv(n,e){n.Ta.push(e);const t=nr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function yf(n){return xr(n)&&!nr(n).x_()&&n.Ta.length>0}function _f(n){nr(n).start()}async function iv(n){nr(n).ra()}async function sv(n){const e=nr(n);for(const t of n.Ta)e.ea(t.mutations)}async function ov(n,e,t){const r=n.Ta.shift(),i=_u.from(r,e,t);await mf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await Xo(n)}async function av(n,e){e&&nr(n).X_&&await(async function(r,i){if((function(c){return By(c)&&c!==H.ABORTED})(i.code)){const a=r.Ta.shift();nr(r).B_(),await mf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await Xo(r)}})(n,e),yf(n)&&_f(n)}async function sl(n,e){const t=ge(n);t.asyncQueue.verifyOperationInProgress(),re(Pr,"RemoteStore received new credentials");const r=xr(t);t.Ea.add(3),await Ss(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await Qo(t)}async function uv(n,e){const t=ge(n);e?(t.Ea.delete(2),await Qo(t)):e||(t.Ea.add(2),await Ss(t),t.Ra.set("Unknown"))}function mi(n){return n.ma||(n.ma=(function(t,r,i){const a=ge(t);return a.sa(),new W_(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Y_.bind(null,n),t_:Z_.bind(null,n),r_:ev.bind(null,n),H_:tv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Ru(n)?Cu(n):n.Ra.set("Unknown")):(await n.ma.stop(),gf(n))}))),n.ma}function nr(n){return n.fa||(n.fa=(function(t,r,i){const a=ge(t);return a.sa(),new G_(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:iv.bind(null,n),r_:av.bind(null,n),ta:sv.bind(null,n),na:ov.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await Xo(n)):(await n.fa.stop(),n.Ta.length>0&&(re(Pr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new mn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const c=Date.now()+r,p=new Pu(e,t,c,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ne(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ku(n,e){if(Tn("AsyncQueue",`${e}: ${n}`),gi(n))return new ne(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{static emptySet(e){return new ei(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ae.comparator(t.key,r.key):(t,r)=>ae.comparator(t.key,r.key),this.keyedMap=Zi(),this.sortedSet=new Ue(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ei)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ei;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.ga=new Ue(ae.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ce(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class ci{constructor(e,t,r,i,a,c,p,_,T){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=T}static fromInitialDocuments(e,t,r,i,a){const c=[];return t.forEach((p=>{c.push({type:0,doc:p})})),new ci(e,t,ei.emptySet(t),c,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&$o(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class lv{constructor(){this.queries=al(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ge(t),a=i.queries;i.queries=al(),a.forEach(((c,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new ne(H.ABORTED,"Firestore shutting down"))}}function al(){return new Dr((n=>Fh(n)),$o)}async function vf(n,e){const t=ge(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new cv,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const p=ku(c,`Initialization of query '${Gr(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Du(t)}async function Tf(n,e){const t=ge(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const c=a.Sa.indexOf(e);c>=0&&(a.Sa.splice(c,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function hv(n,e){const t=ge(n);let r=!1;for(const i of e){const a=i.query,c=t.queries.get(a);if(c){for(const p of c.Sa)p.Fa(i)&&(r=!0);c.wa=i}}r&&Du(t)}function fv(n,e,t){const r=ge(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function Du(n){n.Ca.forEach((e=>{e.next()}))}var Ga,ul;(ul=Ga||(Ga={})).Ma="default",ul.Cache="cache";class Ef{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new ci(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ga.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wf{constructor(e){this.key=e}}class If{constructor(e){this.key=e}}class dv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Ie(),this.mutatedKeys=Ie(),this.eu=Uh(e),this.tu=new ei(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new ol,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,c=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,T=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((A,k)=>{const M=i.get(A),K=Ho(this.query,k)?k:null,W=!!M&&this.mutatedKeys.has(M.key),X=!!K&&(K.hasLocalMutations||this.mutatedKeys.has(K.key)&&K.hasCommittedMutations);let Z=!1;M&&K?M.data.isEqual(K.data)?W!==X&&(r.track({type:3,doc:K}),Z=!0):this.su(M,K)||(r.track({type:2,doc:K}),Z=!0,(_&&this.eu(K,_)>0||T&&this.eu(K,T)<0)&&(p=!0)):!M&&K?(r.track({type:0,doc:K}),Z=!0):M&&!K&&(r.track({type:1,doc:M}),Z=!0,(_||T)&&(p=!0)),Z&&(K?(c=c.add(K),a=X?a.add(A):a.delete(A)):(c=c.delete(A),a=a.delete(A)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const A=this.query.limitType==="F"?c.last():c.first();c=c.delete(A.key),a=a.delete(A.key),r.track({type:1,doc:A})}return{tu:c,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((A,k)=>(function(K,W){const X=Z=>{switch(Z){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce(20277,{Rt:Z})}};return X(K)-X(W)})(A.type,k.type)||this.eu(A.doc,k.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,T=_!==this.Za;return this.Za=_,c.length!==0||T?{snapshot:new ci(this.query,e.tu,a,c,e.mutatedKeys,_===0,T,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new ol,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Ie(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new If(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new wf(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Ie();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return ci.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const Nu="SyncEngine";class pv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class gv{constructor(e){this.key=e,this.hu=!1}}class mv{constructor(e,t,r,i,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Dr((p=>Fh(p)),$o),this.Iu=new Map,this.Eu=new Set,this.du=new Ue(ae.comparator),this.Au=new Map,this.Ru=new Eu,this.Vu={},this.mu=new Map,this.fu=ui.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function yv(n,e,t=!0){const r=Pf(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await Af(r,e,t,!0),i}async function _v(n,e){const t=Pf(n);await Af(t,e,!0,!1)}async function Af(n,e,t,r){const i=await F_(n.localStore,Zt(e)),a=i.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await vv(n,e,a,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&df(n.remoteStore,i),p}async function vv(n,e,t,r,i){n.pu=(k,M,K)=>(async function(X,Z,Y,Ae){let Se=Z.view.ru(Y);Se.Cs&&(Se=await el(X.localStore,Z.query,!1).then((({documents:l})=>Z.view.ru(l,Se))));const je=Ae&&Ae.targetChanges.get(Z.targetId),tt=Ae&&Ae.targetMismatches.get(Z.targetId)!=null,ze=Z.view.applyChanges(Se,X.isPrimaryClient,je,tt);return ll(X,Z.targetId,ze.au),ze.snapshot})(n,k,M,K);const a=await el(n.localStore,e,!0),c=new dv(e,a.Qs),p=c.ru(a.documents),_=bs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),T=c.applyChanges(p,n.isPrimaryClient,_);ll(n,t,T.au);const A=new pv(e,t,c);return n.Tu.set(e,A),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),T.snapshot}async function Tv(n,e,t){const r=ge(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((c=>!$o(c,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await za(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&bu(r.remoteStore,i.targetId),Ka(r,i.targetId)})).catch(pi)):(Ka(r,i.targetId),await za(r.localStore,i.targetId,!0))}async function Ev(n,e){const t=ge(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),bu(t.remoteStore,r.targetId))}async function wv(n,e,t){const r=Pv(n);try{const i=await(function(c,p){const _=ge(c),T=Ve.now(),A=p.reduce(((K,W)=>K.add(W.key)),Ie());let k,M;return _.persistence.runTransaction("Locally write mutations","readwrite",(K=>{let W=En(),X=Ie();return _.Ns.getEntries(K,A).next((Z=>{W=Z,W.forEach(((Y,Ae)=>{Ae.isValidDocument()||(X=X.add(Y))}))})).next((()=>_.localDocuments.getOverlayedDocuments(K,W))).next((Z=>{k=Z;const Y=[];for(const Ae of p){const Se=Ly(Ae,k.get(Ae.key).overlayedDocument);Se!=null&&Y.push(new Nr(Ae.key,Se,kh(Se.value.mapValue),en.exists(!0)))}return _.mutationQueue.addMutationBatch(K,T,Y,p)})).next((Z=>{M=Z;const Y=Z.applyToLocalDocumentSet(k,X);return _.documentOverlayCache.saveOverlays(K,Z.batchId,Y)}))})).then((()=>({batchId:M.batchId,changes:qh(k)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(c,p,_){let T=c.Vu[c.currentUser.toKey()];T||(T=new Ue(we)),T=T.insert(p,_),c.Vu[c.currentUser.toKey()]=T})(r,i.batchId,t),await Cs(r,i.changes),await Xo(r.remoteStore)}catch(i){const a=ku(i,"Failed to persist write");t.reject(a)}}async function bf(n,e){const t=ge(n);try{const r=await O_(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const c=t.Au.get(a);c&&(Ce(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.hu=!0:i.modifiedDocuments.size>0?Ce(c.hu,14607):i.removedDocuments.size>0&&(Ce(c.hu,42227),c.hu=!1))})),await Cs(t,r,e)}catch(r){await pi(r)}}function cl(n,e,t){const r=ge(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,c)=>{const p=c.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(c,p){const _=ge(c);_.onlineState=p;let T=!1;_.queries.forEach(((A,k)=>{for(const M of k.Sa)M.va(p)&&(T=!0)})),T&&Du(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Iv(n,e,t){const r=ge(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let c=new Ue(ae.comparator);c=c.insert(a,dt.newNoDocument(a,pe.min()));const p=Ie().add(a),_=new Go(pe.min(),new Map,new Ue(we),c,p);await bf(r,_),r.du=r.du.remove(a),r.Au.delete(e),xu(r)}else await za(r.localStore,e,!1).then((()=>Ka(r,e,t))).catch(pi)}async function Av(n,e){const t=ge(n),r=e.batch.batchId;try{const i=await V_(t.localStore,e);Cf(t,r,null),Sf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Cs(t,i)}catch(i){await pi(i)}}async function bv(n,e,t){const r=ge(n);try{const i=await(function(c,p){const _=ge(c);return _.persistence.runTransaction("Reject batch","readwrite-primary",(T=>{let A;return _.mutationQueue.lookupMutationBatch(T,p).next((k=>(Ce(k!==null,37113),A=k.keys(),_.mutationQueue.removeMutationBatch(T,k)))).next((()=>_.mutationQueue.performConsistencyCheck(T))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(T,A,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(T,A))).next((()=>_.localDocuments.getDocuments(T,A)))}))})(r.localStore,e);Cf(r,e,t),Sf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Cs(r,i)}catch(i){await pi(i)}}function Sf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Cf(n,e,t){const r=ge(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function Ka(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Rf(n,r)}))}function Rf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(bu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),xu(n))}function ll(n,e,t){for(const r of t)r instanceof wf?(n.Ru.addReference(r.key,e),Sv(n,r)):r instanceof If?(re(Nu,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Rf(n,r.key)):ce(19791,{wu:r})}function Sv(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re(Nu,"New document in limbo: "+t),n.Eu.add(r),xu(n))}function xu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ae(De.fromString(e)),r=n.fu.next();n.Au.set(r,new gv(t)),n.du=n.du.insert(t,r),df(n.remoteStore,new zn(Zt(gu(t.path)),r,"TargetPurposeLimboResolution",jo.ce))}}async function Cs(n,e,t){const r=ge(n),i=[],a=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{c.push(r.pu(_,e,t).then((T=>{if((T||t)&&r.isPrimaryClient){const A=T?!T.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,A?"current":"not-current")}if(T){i.push(T);const A=Iu.As(_.targetId,T);a.push(A)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(_,T){const A=ge(_);try{await A.persistence.runTransaction("notifyLocalViewChanges","readwrite",(k=>z.forEach(T,(M=>z.forEach(M.Es,(K=>A.persistence.referenceDelegate.addReference(k,M.targetId,K))).next((()=>z.forEach(M.ds,(K=>A.persistence.referenceDelegate.removeReference(k,M.targetId,K)))))))))}catch(k){if(!gi(k))throw k;re(Au,"Failed to update sequence numbers: "+k)}for(const k of T){const M=k.targetId;if(!k.fromCache){const K=A.Ms.get(M),W=K.snapshotVersion,X=K.withLastLimboFreeSnapshotVersion(W);A.Ms=A.Ms.insert(M,X)}}})(r.localStore,a))}async function Cv(n,e){const t=ge(n);if(!t.currentUser.isEqual(e)){re(Nu,"User change. New user:",e.toKey());const r=await cf(t.localStore,e);t.currentUser=e,(function(a,c){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new ne(H.CANCELLED,c))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Cs(t,r.Ls)}}function Rv(n,e){const t=ge(n),r=t.Au.get(e);if(r&&r.hu)return Ie().add(r.key);{let i=Ie();const a=t.Iu.get(e);if(!a)return i;for(const c of a){const p=t.Tu.get(c);i=i.unionWith(p.view.nu)}return i}}function Pf(n){const e=ge(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=bf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Rv.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Iv.bind(null,e),e.Pu.H_=hv.bind(null,e.eventManager),e.Pu.yu=fv.bind(null,e.eventManager),e}function Pv(n){const e=ge(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Av.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=bv.bind(null,e),e}class Vo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ko(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return x_(this.persistence,new k_,e.initialUser,this.serializer)}Cu(e){return new uf(wu.mi,this.serializer)}Du(e){return new j_}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Vo.provider={build:()=>new Vo};class kv extends Vo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Ce(this.persistence.referenceDelegate instanceof No,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new g_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new uf((r=>No.mi(r,t)),this.serializer)}}class Qa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Cv.bind(null,this.syncEngine),await uv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new lv})()}createDatastore(e){const t=Ko(e.databaseInfo.databaseId),r=(function(a){return new z_(a)})(e.databaseInfo);return(function(a,c,p,_){return new Q_(a,c,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,c,p){return new J_(r,i,a,c,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>cl(this.syncEngine,t,0)),(function(){return rl.v()?new rl:new q_})())}createSyncEngine(e,t){return(function(i,a,c,p,_,T,A){const k=new mv(i,a,c,p,_,T);return A&&(k.gu=!0),k})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ge(t);re(Pr,"RemoteStore shutting down."),r.Ea.add(5),await Ss(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Qa.provider={build:()=>new Qa};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):Tn("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="FirestoreClient";class Dv{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=ft.UNAUTHENTICATED,this.clientId=cu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async c=>{re(rr,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(re(rr,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new mn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=ku(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Aa(n,e){n.asyncQueue.verifyOperationInProgress(),re(rr,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await cf(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function hl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Nv(n);re(rr,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>sl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>sl(e.remoteStore,i))),n._onlineComponents=e}async function Nv(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(rr,"Using user provided OfflineComponentProvider");try{await Aa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;ii("Error using user provided cache. Falling back to memory cache: "+t),await Aa(n,new Vo)}}else re(rr,"Using default OfflineComponentProvider"),await Aa(n,new kv(void 0));return n._offlineComponents}async function Df(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(rr,"Using user provided OnlineComponentProvider"),await hl(n,n._uninitializedComponentsProvider._online)):(re(rr,"Using default OnlineComponentProvider"),await hl(n,new Qa))),n._onlineComponents}function xv(n){return Df(n).then((e=>e.syncEngine))}async function Nf(n){const e=await Df(n),t=e.eventManager;return t.onListen=yv.bind(null,e.syncEngine),t.onUnlisten=Tv.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=_v.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=Ev.bind(null,e.syncEngine),t}function Vv(n,e,t={}){const r=new mn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,T){const A=new kf({next:M=>{A.Nu(),c.enqueueAndForget((()=>Tf(a,k)));const K=M.docs.has(p);!K&&M.fromCache?T.reject(new ne(H.UNAVAILABLE,"Failed to get document because the client is offline.")):K&&M.fromCache&&_&&_.source==="server"?T.reject(new ne(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):T.resolve(M)},error:M=>T.reject(M)}),k=new Ef(gu(p.path),A,{includeMetadataChanges:!0,qa:!0});return vf(a,k)})(await Nf(n),n.asyncQueue,e,t,r))),r.promise}function Ov(n,e,t={}){const r=new mn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,T){const A=new kf({next:M=>{A.Nu(),c.enqueueAndForget((()=>Tf(a,k))),M.fromCache&&_.source==="server"?T.reject(new ne(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):T.resolve(M)},error:M=>T.reject(M)}),k=new Ef(p,A,{includeMetadataChanges:!0,qa:!0});return vf(a,k)})(await Nf(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xf(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vf="firestore.googleapis.com",dl=!0;class pl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ne(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Vf,this.ssl=dl}else this.host=e.host,this.ssl=e.ssl??dl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=af;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<d_)throw new ne(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Xm("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xf(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ne(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Jo{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ne(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ne(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new jm;switch(r.type){case"firstParty":return new Hm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ne(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=fl.get(t);r&&(re("ComponentProvider","Removing Datastore"),fl.delete(t),r.terminate())})(this),Promise.resolve()}}function Mv(n,e,t,r={}){n=Jn(n,Jo);const i=li(e),a=n._getSettings(),c={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&(Sl(`https://${p}`),Cl("Firestore",!0)),a.host!==Vf&&a.host!==p&&ii("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!br(_,c)&&(n._setSettings(_),r.mockUserToken)){let T,A;if(typeof r.mockUserToken=="string")T=r.mockUserToken,A=ft.MOCK_USER;else{T=dd(r.mockUserToken,n._app?.options.projectId);const k=r.mockUserToken.sub||r.mockUserToken.user_id;if(!k)throw new ne(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");A=new ft(k)}n._authCredentials=new qm(new _h(T,A))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yi(this.firestore,e,this._query)}}class Xe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xe(this.firestore,e,this._key)}toJSON(){return{type:Xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(ws(t,Xe._jsonSchema))return new Xe(e,r||null,new ae(De.fromString(t.referencePath)))}}Xe._jsonSchemaVersion="firestore/documentReference/1.0",Xe._jsonSchema={type:Qe("string",Xe._jsonSchemaVersion),referencePath:Qe("string")};class Xn extends yi{constructor(e,t,r){super(e,t,gu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xe(this.firestore,null,new ae(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function aT(n,e,...t){if(n=vt(n),vh("collection","path",e),n instanceof Jo){const r=De.fromString(e,...t);return Cc(r),new Xn(n,null,r)}{if(!(n instanceof Xe||n instanceof Xn))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(De.fromString(e,...t));return Cc(r),new Xn(n.firestore,null,r)}}function uT(n,e,...t){if(n=vt(n),arguments.length===1&&(e=cu.newId()),vh("doc","path",e),n instanceof Jo){const r=De.fromString(e,...t);return Sc(r),new Xe(n,null,new ae(r))}{if(!(n instanceof Xe||n instanceof Xn))throw new ne(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(De.fromString(e,...t));return Sc(r),new Xe(n.firestore,n instanceof Xn?n.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="AsyncQueue";class ml{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new hf(this,"async_queue_retry"),this._c=()=>{const r=Ia();r&&re(gl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ia();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ia();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new mn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!gi(e))throw e;re(gl,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,Tn("INTERNAL UNHANDLED ERROR: ",yl(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=Pu.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&ce(47125,{Pc:yl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function yl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Rs extends Jo{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new ml,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ml(e),this._firestoreClient=void 0,await e}}}function Lv(n,e){const t=typeof n=="object"?n:Dl(),r=typeof n=="string"?n:So,i=Ya(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=hd("firestore");a&&Mv(i,...a)}return i}function Vu(n){if(n._terminated)throw new ne(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||Fv(n),n._firestoreClient}function Fv(n){const e=n._freezeSettings(),t=(function(i,a,c,p){return new ay(i,a,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,xf(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new Dv(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(at.fromBase64String(e))}catch(t){throw new ne(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pt(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ws(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:Qe("string",Pt._jsonSchemaVersion),bytes:Qe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ne(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ne(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ne(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:nn._jsonSchemaVersion}}static fromJSON(e){if(ws(e,nn._jsonSchema))return new nn(e.latitude,e.longitude)}}nn._jsonSchemaVersion="firestore/geoPoint/1.0",nn._jsonSchema={type:Qe("string",nn._jsonSchemaVersion),latitude:Qe("number"),longitude:Qe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:rn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ws(e,rn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new rn(e.vectorValues);throw new ne(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}rn._jsonSchemaVersion="firestore/vectorValue/1.0",rn._jsonSchema={type:Qe("string",rn._jsonSchemaVersion),vectorValues:Qe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv=/^__.*__$/;class jv{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Nr(e,this.data,this.fieldMask,t,this.fieldTransforms):new As(e,this.data,t,this.fieldTransforms)}}function Of(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce(40011,{Ac:n})}}class Lu{constructor(e,t,r,i,a,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Lu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Oo(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(Of(this.Ac)&&Uv.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class qv{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ko(e)}Cc(e,t,r,i=!1){return new Lu({Ac:e,methodName:t,Dc:r,path:ot.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Mf(n){const e=n._freezeSettings(),t=Ko(n._databaseId);return new qv(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Bv(n,e,t,r,i,a={}){const c=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);Uf("Data must be an object, but it was:",c,r);const p=Lf(r,c);let _,T;if(a.merge)_=new Ft(c.fieldMask),T=c.fieldTransforms;else if(a.mergeFields){const A=[];for(const k of a.mergeFields){const M=Hv(e,k,t);if(!c.contains(M))throw new ne(H.INVALID_ARGUMENT,`Field '${M}' is specified in your field mask but missing from your input data.`);Wv(A,M)||A.push(M)}_=new Ft(A),T=c.fieldTransforms.filter((k=>_.covers(k.field)))}else _=null,T=c.fieldTransforms;return new jv(new Rt(p),_,T)}class Fu extends Mu{_toFieldTransform(e){return new xy(e.path,new ps)}isEqual(e){return e instanceof Fu}}function $v(n,e,t,r=!1){return Uu(t,n.Cc(r?4:3,e))}function Uu(n,e){if(Ff(n=vt(n)))return Uf("Unsupported field value:",e,n),Lf(n,e);if(n instanceof Mu)return(function(r,i){if(!Of(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let c=0;for(const p of r){let _=Uu(p,i.wc(c));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),c++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ky(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Ve.fromDate(r);return{timestampValue:Do(i.serializer,a)}}if(r instanceof Ve){const a=new Ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Do(i.serializer,a)}}if(r instanceof nn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:Zh(i.serializer,r._byteString)};if(r instanceof Xe){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Tu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof rn)return(function(c,p){return{mapValue:{fields:{[Rh]:{stringValue:Ph},[Co]:{arrayValue:{values:c.toArray().map((T=>{if(typeof T!="number")throw p.Sc("VectorValues must only contain numeric values.");return mu(p.serializer,T)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Uo(r)}`)})(n,e)}function Lf(n,e){const t={};return wh(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):kr(n,((r,i)=>{const a=Uu(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function Ff(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ve||n instanceof nn||n instanceof Pt||n instanceof Xe||n instanceof Mu||n instanceof rn)}function Uf(n,e,t){if(!Ff(t)||!Th(t)){const r=Uo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function Hv(n,e,t){if((e=vt(e))instanceof Ou)return e._internalPath;if(typeof e=="string")return jf(n,e);throw Oo("Field path arguments must be of type string or ",n,!1,void 0,t)}const zv=new RegExp("[~\\*/\\[\\]]");function jf(n,e,t){if(e.search(zv)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ou(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Oo(n,e,t,r,i){const a=r&&!r.isEmpty(),c=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||c)&&(_+=" (found",a&&(_+=` in field ${r}`),c&&(_+=` in document ${i}`),_+=")"),new ne(H.INVALID_ARGUMENT,p+n+_)}function Wv(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new Xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Gv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ju("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Gv extends qf{data(){return super.data()}}function ju(n,e){return typeof e=="string"?jf(n,e):e instanceof Ou?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ne(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class qu{}class Qv extends qu{}function cT(n,e,...t){let r=[];e instanceof qu&&r.push(e),r=r.concat(t),(function(a){const c=a.filter((_=>_ instanceof Bu)).length,p=a.filter((_=>_ instanceof Yo)).length;if(c>1||c>0&&p>0)throw new ne(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class Yo extends Qv{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Yo(e,t,r)}_apply(e){const t=this._parse(e);return Bf(e._query,t),new yi(e.firestore,e.converter,Ua(e._query,t))}_parse(e){const t=Mf(e.firestore);return(function(a,c,p,_,T,A,k){let M;if(T.isKeyField()){if(A==="array-contains"||A==="array-contains-any")throw new ne(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${A}' queries on documentId().`);if(A==="in"||A==="not-in"){vl(k,A);const W=[];for(const X of k)W.push(_l(_,a,X));M={arrayValue:{values:W}}}else M=_l(_,a,k)}else A!=="in"&&A!=="not-in"&&A!=="array-contains-any"||vl(k,A),M=$v(p,c,k,A==="in"||A==="not-in");return Ke.create(T,A,M)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function lT(n,e,t){const r=e,i=ju("where",n);return Yo._create(i,r,t)}class Bu extends qu{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Bu(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Ut.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let c=i;const p=a.getFlattenedFilters();for(const _ of p)Bf(c,_),c=Ua(c,_)})(e._query,t),new yi(e.firestore,e.converter,Ua(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function _l(n,e,t){if(typeof(t=vt(t))=="string"){if(t==="")throw new ne(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Lh(e)&&t.indexOf("/")!==-1)throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(De.fromString(t));if(!ae.isDocumentKey(r))throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Oc(n,new ae(r))}if(t instanceof Xe)return Oc(n,t._key);throw new ne(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Uo(t)}.`)}function vl(n,e){if(!Array.isArray(n)||n.length===0)throw new ne(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Bf(n,e){const t=(function(i,a){for(const c of i)for(const p of c.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ne(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ne(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Xv{convertValue(e,t="none"){switch(tr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return He(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(er(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ce(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return kr(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Co].arrayValue?.values?.map((r=>He(r.doubleValue)));return new rn(t)}convertGeoPoint(e){return new nn(He(e.latitude),He(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Bo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(hs(e));default:return null}}convertTimestamp(e){const t=Zn(e);return new Ve(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=De.fromString(e);Ce(of(r),9688,{name:e});const i=new fs(r.get(1),r.get(3)),a=new ae(r.popFirst(5));return i.isEqual(t)||Tn(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ts{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ar extends qf{constructor(e,t,r,i,a,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new mo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ju("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Ar._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ar._jsonSchema={type:Qe("string",Ar._jsonSchemaVersion),bundleSource:Qe("string","DocumentSnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class mo extends Ar{data(e={}){return super.data(e)}}class ti{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new ts(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new mo(this._firestore,this._userDataWriter,r.key,r,new ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ne(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((p=>{const _=new mo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ts(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new mo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new ts(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let T=-1,A=-1;return p.type!==0&&(T=c.indexOf(p.doc.key),c=c.delete(p.doc.key)),p.type!==1&&(c=c.add(p.doc),A=c.indexOf(p.doc.key)),{type:Yv(p.type),doc:_,oldIndex:T,newIndex:A}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ne(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ti._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=cu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Yv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hT(n){n=Jn(n,Xe);const e=Jn(n.firestore,Rs);return Vv(Vu(e),n._key).then((t=>Zv(e,n,t)))}ti._jsonSchemaVersion="firestore/querySnapshot/1.0",ti._jsonSchema={type:Qe("string",ti._jsonSchemaVersion),bundleSource:Qe("string","QuerySnapshot"),bundleName:Qe("string"),bundle:Qe("string")};class $f extends Xv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Xe(this.firestore,null,t)}}function fT(n){n=Jn(n,yi);const e=Jn(n.firestore,Rs),t=Vu(e),r=new $f(e);return Kv(n._query),Ov(t,n._query).then((i=>new ti(e,r,n,i)))}function dT(n,e,t){n=Jn(n,Xe);const r=Jn(n.firestore,Rs),i=Jv(n.converter,e,t);return Hf(r,[Bv(Mf(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,en.none())])}function pT(n){return Hf(Jn(n.firestore,Rs),[new yu(n._key,en.none())])}function Hf(n,e){return(function(r,i){const a=new mn;return r.asyncQueue.enqueueAndForget((async()=>wv(await xv(r),i,a))),a.promise})(Vu(n),e)}function Zv(n,e,t){const r=t.docs.get(e._key),i=new $f(n);return new Ar(n,i,e._key,r,new ts(t.hasPendingWrites,t.fromCache),e.converter)}function gT(){return new Fu("serverTimestamp")}(function(e,t=!0){(function(i){di=i})(hi),ni(new Sr("firestore",((r,{instanceIdentifier:i,options:a})=>{const c=r.getProvider("app").getImmediate(),p=new Rs(new Bm(r.getProvider("auth-internal")),new zm(c,r.getProvider("app-check-internal")),(function(T,A){if(!Object.prototype.hasOwnProperty.apply(T.options,["projectId"]))throw new ne(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fs(T.options.projectId,A)})(c,i),c);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),Kn(wc,Ic,e),Kn(wc,Ic,"esm2020")})();const eT={apiKey:"AIzaSyBuiCJP-wY2DvbIyoRNl3XqPGsqPWVyyC0",authDomain:"tusfloresamor.firebaseapp.com",projectId:"tusfloresamor",storageBucket:"tusfloresamor.firebasestorage.app",messagingSenderId:"122545929199",appId:"1:122545929199:web:c391eca0e55d1055a7541a"},zf=kl(eT),mT=Fm(zf),yT=Lv(zf);(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=r=>{const[i,a]=xe(r).data("tema").split("|");xe("html").attr("data-theme",i),xe('meta[name="theme-color"]').length?xe('meta[name="theme-color"]').attr("content",a):xe("<meta>",{name:"theme-color",content:a}).appendTo("head"),tT("wiTema",`${i}|${a}`,720),xe(".mtha").removeClass("mtha"),xe(r).addClass("mtha")},t=()=>{xe(".witemas").html(n.map(([a,c])=>`<div class="tema" data-tema="${a}|${c}" style="background:${c}"></div>`).join(""));const r=nT("wiTema"),i=xe(`[data-tema="${r}"]`)[0]||xe(".mtha")[0]||xe("[data-tema]").first()[0];i&&e(i),xe(document).off("click.witema").on("click.witema","[data-tema]",a=>e(a.currentTarget))};return xe(".witemas").length?t():new MutationObserver(r=>r.some(({addedNodes:i})=>[...i].some(a=>a.querySelector?.(".witemas")))&&(t(),!0)).observe(document.body,{childList:!0,subtree:!0}),{set:e}})();const _T=(n,e)=>{xe(n).addClass(e).siblings().removeClass(e)};(()=>{const n=()=>{const e=new Date;xe(".wty").text(e.getFullYear()),xe(".wtu").text(e.toLocaleString()),xe(document).off("click.infoo",".abw,.abwok").on("click.infoo",".abw,.abwok",function(){const t=this.id||"";navigator.clipboard&&t&&navigator.clipboard.writeText(t).catch(()=>{}),xe(".abwc").toggleClass("dpn")})};return xe(".wty,.wtu,.abw,.abwok").length?n():new MutationObserver(e=>e.some(({addedNodes:t})=>[...t].some(r=>r.querySelector?.(".wty,.wtu,.abw,.abwok")))&&(n(),!0)).observe(document.body,{childList:!0,subtree:!0}),n})();function vT(n,e="error",t=3e3){const r={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},i={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};xe("#notificationsContainer").length||xe("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const a=xe(`
    <div class="notification" style="background:#fff;border-left:4px solid ${i[e]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${r[e]}" style="color:${i[e]};"></i>
      <span style="flex:1">${n}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);xe("#notificationsContainer").append(a),requestAnimationFrame(()=>a.css({opacity:1,transform:"translateX(0)"})),a.find("button").on("click",()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)}),setTimeout(()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)},t)}const TT=(n,e="success")=>{xe(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:c}=t[e]||t.error,p=xe(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${r};
            color: ${i};
            border-left: 4px solid ${a};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${c}"></i>
            <span>${n}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)};function tT(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function nT(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),rT(n),null}}function rT(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}export{xe as $,TT as M,vT as N,yT as a,gT as b,sT as c,uT as d,_T as e,pT as f,hT as g,tT as h,fT as i,aT as j,nT as k,mT as l,iT as o,cT as q,dT as s,lT as w};
