var Mt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O=function(t){try{return!!t()}catch{return!0}},A=!O(function(){return Object.defineProperty({},1,{get:function(){return 7}})[1]!=7}),X=function(t){return t&&t.Math==Math&&t},v=X(typeof globalThis=="object"&&globalThis)||X(typeof window=="object"&&window)||X(typeof self=="object"&&self)||X(typeof Mt=="object"&&Mt)||function(){return this}()||Function("return this")(),Ae=O,$e=/#|\.prototype\./,W=function(t,e){var n=Me[Le(t)];return n==De||n!=Ue&&(typeof e=="function"?Ae(e):!!e)},Le=W.normalize=function(t){return String(t).replace($e,".").toLowerCase()},Me=W.data={},Ue=W.NATIVE="N",De=W.POLYFILL="P",de=W,C=function(t){return typeof t=="object"?t!==null:typeof t=="function"},Fe=C,$=function(t){if(!Fe(t))throw TypeError(String(t)+" is not an object");return t},ze=C,Ke=$,Be=function(t){if(!ze(t)&&t!==null)throw TypeError("Can't set "+String(t)+" as a prototype");return t},We=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch{}return function(r,o){return Ke(r),Be(o),e?t.call(r,o):r.__proto__=o,r}}():void 0),Ge=C,Ut=We,G={},Dt=C,Ot=v.document,Ve=Dt(Ot)&&Dt(Ot.createElement),Ye=function(t){return Ve?Ot.createElement(t):{}},ye=!A&&!O(function(){return Object.defineProperty(Ye("div"),"a",{get:function(){return 7}}).a!=7}),H=C,ve=function(t,e){if(!H(t))return t;var n,r;if(e&&typeof(n=t.toString)=="function"&&!H(r=n.call(t))||typeof(n=t.valueOf)=="function"&&!H(r=n.call(t))||!e&&typeof(n=t.toString)=="function"&&!H(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},qe=A,Xe=ye,Ft=$,He=ve,zt=Object.defineProperty;G.f=qe?zt:function(t,e,n){if(Ft(t),e=He(e,!0),Ft(n),Xe)try{return zt(t,e,n)}catch{}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t};var _t={},it=function(t){if(t==null)throw TypeError("Can't call method on "+t);return t},Je=it,xe=function(t){return Object(Je(t))},Qe=xe,Ze={}.hasOwnProperty,L=function(t,e){return Ze.call(Qe(t),e)},tn={}.toString,at=function(t){return tn.call(t).slice(8,-1)},en=at,nn="".split,rn=O(function(){return!Object("z").propertyIsEnumerable(0)})?function(t){return en(t)=="String"?nn.call(t,""):Object(t)}:Object,on=it,Tt=function(t){return rn(on(t))},an=Math.ceil,cn=Math.floor,ct=function(t){return isNaN(t=+t)?0:(t>0?cn:an)(t)},un=ct,ln=Math.min,be=function(t){return t>0?ln(un(t),9007199254740991):0},fn=ct,sn=Math.max,pn=Math.min,gn=Tt,hn=be,dn=function(t,e){var n=fn(t);return n<0?sn(n+e,0):pn(n,e)},Kt=function(t){return function(e,n,r){var o,i=gn(e),a=hn(i.length),c=dn(r,a);if(t&&n!=n){for(;a>c;)if((o=i[c++])!=o)return!0}else for(;a>c;c++)if((t||c in i)&&i[c]===n)return t||c||0;return!t&&-1}},yn={includes:Kt(!0),indexOf:Kt(!1)},me={},ft=L,vn=Tt,xn=yn.indexOf,bn=me,mn=function(t,e){var n,r=vn(t),o=0,i=[];for(n in r)!ft(bn,n)&&ft(r,n)&&i.push(n);for(;e.length>o;)ft(r,n=e[o++])&&(~xn(i,n)||i.push(n));return i},En=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");_t.f=Object.getOwnPropertyNames||function(t){return mn(t,En)};var ut={exports:{}},Ee=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},Sn=G,wn=Ee,V=A?function(t,e,n){return Sn.f(t,e,wn(1,n))}:function(t,e,n){return t[e]=n,t},Bt=v,On=V,jt=function(t,e){try{On(Bt,t,e)}catch{Bt[t]=e}return e},Rn=jt,It=v["__core-js_shared__"]||Rn("__core-js_shared__",{}),Wt=It;(ut.exports=function(t,e){return Wt[t]||(Wt[t]=e!==void 0?e:{})})("versions",[]).push({version:"3.12.1",mode:"global",copyright:"\xA9 2021 Denis Pushkarev (zloirock.ru)"});var j,Q,_n=0,Tn=Math.random(),Se=function(t){return"Symbol("+String(t===void 0?"":t)+")_"+(++_n+Tn).toString(36)},st=v,pt=v,Gt=function(t){return typeof t=="function"?t:void 0},Ct=function(t,e){return arguments.length<2?Gt(st[t])||Gt(pt[t]):st[t]&&st[t][e]||pt[t]&&pt[t][e]},gt=Ct("navigator","userAgent")||"",Vt=v.process,Yt=Vt&&Vt.versions,qt=Yt&&Yt.v8;qt?Q=(j=qt.split("."))[0]<4?1:j[0]+j[1]:gt&&(!(j=gt.match(/Edge\/(\d+)/))||j[1]>=74)&&(j=gt.match(/Chrome\/(\d+)/))&&(Q=j[1]);var Xt=Q&&+Q,jn=O,we=!!Object.getOwnPropertySymbols&&!jn(function(){return!String(Symbol())||!Symbol.sham&&Xt&&Xt<41}),In=we&&!Symbol.sham&&typeof Symbol.iterator=="symbol",Cn=v,Pn=ut.exports,Ht=L,Nn=Se,Jt=we,kn=In,F=Pn("wks"),z=Cn.Symbol,An=kn?z:z&&z.withoutSetter||Nn,M=function(t){return Ht(F,t)&&(Jt||typeof F[t]=="string")||(Jt&&Ht(z,t)?F[t]=z[t]:F[t]=An("Symbol."+t)),F[t]},$n=C,Ln=at,Mn=M("match"),Un=$,Pt=function(){var t=Un(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e},Z={},Qt=O;function Zt(t,e){return RegExp(t,e)}Z.UNSUPPORTED_Y=Qt(function(){var t=Zt("a","y");return t.lastIndex=2,t.exec("abcd")!=null}),Z.BROKEN_CARET=Qt(function(){var t=Zt("^r","gy");return t.lastIndex=2,t.exec("str")!=null});var U={exports:{}},Rt=It,Dn=Function.toString;typeof Rt.inspectSource!="function"&&(Rt.inspectSource=function(t){return Dn.call(t)});var tt,K,et,Oe=Rt.inspectSource,Fn=Oe,te=v.WeakMap,zn=typeof te=="function"&&/native code/.test(Fn(te)),Kn=ut.exports,Bn=Se,ee=Kn("keys"),Wn=zn,Gn=C,Vn=V,ht=L,dt=It,Yn=function(t){return ee[t]||(ee[t]=Bn(t))},qn=me,Xn=v.WeakMap;if(Wn||dt.state){var I=dt.state||(dt.state=new Xn),Hn=I.get,ne=I.has,Jn=I.set;tt=function(t,e){if(ne.call(I,t))throw new TypeError("Object already initialized");return e.facade=t,Jn.call(I,t,e),e},K=function(t){return Hn.call(I,t)||{}},et=function(t){return ne.call(I,t)}}else{var k=Yn("state");qn[k]=!0,tt=function(t,e){if(ht(t,k))throw new TypeError("Object already initialized");return e.facade=t,Vn(t,k,e),e},K=function(t){return ht(t,k)?t[k]:{}},et=function(t){return ht(t,k)}}var Nt={set:tt,get:K,has:et,enforce:function(t){return et(t)?K(t):tt(t,{})},getterFor:function(t){return function(e){var n;if(!Gn(e)||(n=K(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}},Qn=v,re=V,Zn=L,tr=jt,er=Oe,nr=Nt.get,rr=Nt.enforce,or=String(String).split("String");(U.exports=function(t,e,n,r){var o,i=!!r&&!!r.unsafe,a=!!r&&!!r.enumerable,c=!!r&&!!r.noTargetGet;typeof n=="function"&&(typeof e!="string"||Zn(n,"name")||re(n,"name",e),(o=rr(n)).source||(o.source=or.join(typeof e=="string"?e:""))),t!==Qn?(i?!c&&t[e]&&(a=!0):delete t[e],a?t[e]=n:re(t,e,n)):a?t[e]=n:tr(e,n)})(Function.prototype,"toString",function(){return typeof this=="function"&&nr(this).source||er(this)});var ir=Ct,ar=G,cr=A,oe=M("species"),ur=A,Re=v,lr=de,fr=function(t,e,n){var r,o;return Ut&&typeof(r=e.constructor)=="function"&&r!==n&&Ge(o=r.prototype)&&o!==n.prototype&&Ut(t,o),t},sr=G.f,pr=_t.f,gr=function(t){var e;return $n(t)&&((e=t[Mn])!==void 0?!!e:Ln(t)=="RegExp")},hr=Pt,dr=Z,yr=U.exports,vr=O,xr=Nt.enforce,br=function(t){var e=ir(t),n=ar.f;cr&&e&&!e[oe]&&n(e,oe,{configurable:!0,get:function(){return this}})},mr=M("match"),b=Re.RegExp,yt=b.prototype,B=/a/g,vt=/a/g,xt=new b(B)!==B,bt=dr.UNSUPPORTED_Y;if(ur&&lr("RegExp",!xt||bt||vr(function(){return vt[mr]=!1,b(B)!=B||b(vt)==vt||b(B,"i")!="/a/i"}))){for(var w=function(t,e){var n,r=this instanceof w,o=gr(t),i=e===void 0;if(!r&&o&&t.constructor===w&&i)return t;xt?o&&!i&&(t=t.source):t instanceof w&&(i&&(e=hr.call(t)),t=t.source),bt&&(n=!!e&&e.indexOf("y")>-1)&&(e=e.replace(/y/g,""));var a=fr(xt?new b(t,e):b(t,e),r?this:yt,w);return bt&&n&&(xr(a).sticky=!0),a},Er=function(t){t in w||sr(w,t,{configurable:!0,get:function(){return b[t]},set:function(e){b[t]=e}})},ie=pr(b),ae=0;ie.length>ae;)Er(ie[ae++]);yt.constructor=w,w.prototype=yt,yr(Re,"RegExp",w)}br("RegExp");var kt={},_e={},Te={}.propertyIsEnumerable,je=Object.getOwnPropertyDescriptor,Sr=je&&!Te.call({1:2},1);_e.f=Sr?function(t){var e=je(this,t);return!!e&&e.enumerable}:Te;var wr=A,Or=_e,Rr=Ee,_r=Tt,Tr=ve,jr=L,Ir=ye,ce=Object.getOwnPropertyDescriptor;kt.f=wr?ce:function(t,e){if(t=_r(t),e=Tr(e,!0),Ir)try{return ce(t,e)}catch{}if(jr(t,e))return Rr(!Or.f.call(t,e),t[e])};var Ie={};Ie.f=Object.getOwnPropertySymbols;var Cr=_t,Pr=Ie,Nr=$,kr=Ct("Reflect","ownKeys")||function(t){var e=Cr.f(Nr(t)),n=Pr.f;return n?e.concat(n(t)):e},Ar=L,$r=kr,Lr=kt,Mr=G,mt=v,Ur=kt.f,Dr=V,Fr=U.exports,zr=jt,Kr=function(t,e){for(var n=$r(e),r=Mr.f,o=Lr.f,i=0;i<n.length;i++){var a=n[i];Ar(t,a)||r(t,a,o(e,a))}},Br=de,Wr=Pt,ue=Z,Gr=ut.exports,nt=RegExp.prototype.exec,Vr=Gr("native-string-replace",String.prototype.replace),Ce=nt,Et=function(){var t=/a/,e=/b*/g;return nt.call(t,"a"),nt.call(e,"a"),t.lastIndex!==0||e.lastIndex!==0}(),le=ue.UNSUPPORTED_Y||ue.BROKEN_CARET,St=/()??/.exec("")[1]!==void 0;(Et||St||le)&&(Ce=function(t){var e,n,r,o,i=this,a=le&&i.sticky,c=Wr.call(i),f=i.source,g=0,p=t;return a&&((c=c.replace("y","")).indexOf("g")===-1&&(c+="g"),p=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&t[i.lastIndex-1]!==`
`)&&(f="(?: "+f+")",p=" "+p,g++),n=new RegExp("^(?:"+f+")",c)),St&&(n=new RegExp("^"+f+"$(?!\\s)",c)),Et&&(e=i.lastIndex),r=nt.call(a?n:i,p),a?r?(r.input=r.input.slice(g),r[0]=r[0].slice(g),r.index=i.lastIndex,i.lastIndex+=r[0].length):i.lastIndex=0:Et&&r&&(i.lastIndex=i.global?r.index+r[0].length:e),St&&r&&r.length>1&&Vr.call(r[0],n,function(){for(o=1;o<arguments.length-2;o++)arguments[o]===void 0&&(r[o]=void 0)}),r});var rt=Ce;(function(t,e){var n,r,o,i,a,c=t.target,f=t.global,g=t.stat;if(n=f?mt:g?mt[c]||zr(c,{}):(mt[c]||{}).prototype)for(r in e){if(i=e[r],o=t.noTargetGet?(a=Ur(n,r))&&a.value:n[r],!Br(f?r:c+(g?".":"#")+r,t.forced)&&o!==void 0){if(typeof i==typeof o)continue;Kr(i,o)}(t.sham||o&&o.sham)&&Dr(i,"sham",!0),Fr(n,r,i,t)}})({target:"RegExp",proto:!0,forced:/./.exec!==rt},{exec:rt});var Yr=U.exports,qr=$,Xr=O,Hr=Pt,Pe=RegExp.prototype,Ne=Pe.toString,Jr=Xr(function(){return Ne.call({source:"a",flags:"b"})!="/a/b"}),Qr=Ne.name!="toString";(Jr||Qr)&&Yr(RegExp.prototype,"toString",function(){var t=qr(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(n===void 0&&t instanceof RegExp&&!("flags"in Pe)?Hr.call(t):n)},{unsafe:!0});var fe=U.exports,Zr=rt,ot=O,At=M,to=V,eo=At("species"),wt=RegExp.prototype,no=!ot(function(){var t=/./;return t.exec=function(){var e=[];return e.groups={a:"7"},e},"".replace(t,"$<a>")!=="7"}),se="a".replace(/./,"$0")==="$0",pe=At("replace"),ge=!!/./[pe]&&/./[pe]("a","$0")==="",ro=!ot(function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return n.length!==2||n[0]!=="a"||n[1]!=="b"}),oo=ct,io=it,he=function(t){return function(e,n){var r,o,i=String(io(e)),a=oo(n),c=i.length;return a<0||a>=c?t?"":void 0:(r=i.charCodeAt(a))<55296||r>56319||a+1===c||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):r:t?i.slice(a,a+2):o-56320+(r-55296<<10)+65536}},ao={codeAt:he(!1),charAt:he(!0)}.charAt,co=xe,uo=Math.floor,lo="".replace,fo=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,so=/\$([$&'`]|\d{1,2})/g,po=at,go=rt,ho=function(t,e,n,r){var o=At(t),i=!ot(function(){var u={};return u[o]=function(){return 7},""[t](u)!=7}),a=i&&!ot(function(){var u=!1,l=/a/;return t==="split"&&((l={}).constructor={},l.constructor[eo]=function(){return l},l.flags="",l[o]=/./[o]),l.exec=function(){return u=!0,null},l[o](""),!u});if(!i||!a||t==="replace"&&(!no||!se||ge)||t==="split"&&!ro){var c=/./[o],f=n(o,""[t],function(u,l,y,R,_){var d=l.exec;return d===Zr||d===wt.exec?i&&!_?{done:!0,value:c.call(l,y,R)}:{done:!0,value:u.call(y,l,R)}:{done:!1}},{REPLACE_KEEPS_$0:se,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:ge}),g=f[0],p=f[1];fe(String.prototype,t,g),fe(wt,o,e==2?function(u,l){return p.call(u,this,l)}:function(u){return p.call(u,this)})}r&&to(wt[o],"sham",!0)},yo=$,vo=be,xo=ct,bo=it,mo=function(t,e,n){return e+(n?ao(t,e).length:1)},Eo=function(t,e,n,r,o,i){var a=n+t.length,c=r.length,f=so;return o!==void 0&&(o=co(o),f=fo),lo.call(i,f,function(g,p){var u;switch(p.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,n);case"'":return e.slice(a);case"<":u=o[p.slice(1,-1)];break;default:var l=+p;if(l===0)return g;if(l>c){var y=uo(l/10);return y===0?g:y<=c?r[y-1]===void 0?p.charAt(1):r[y-1]+p.charAt(1):g}u=r[l-1]}return u===void 0?"":u})},So=function(t,e){var n=t.exec;if(typeof n=="function"){var r=n.call(t,e);if(typeof r!="object")throw TypeError("RegExp exec method returned something other than an Object or null");return r}if(po(t)!=="RegExp")throw TypeError("RegExp#exec called on incompatible receiver");return go.call(t,e)},wo=Math.max,Oo=Math.min;ho("replace",2,function(t,e,n,r){var o=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=r.REPLACE_KEEPS_$0,a=o?"$":"$0";return[function(c,f){var g=bo(this),p=c==null?void 0:c[t];return p!==void 0?p.call(c,g,f):e.call(String(g),c,f)},function(c,f){if(!o&&i||typeof f=="string"&&f.indexOf(a)===-1){var g=n(e,c,this,f);if(g.done)return g.value}var p=yo(c),u=String(this),l=typeof f=="function";l||(f=String(f));var y=p.global;if(y){var R=p.unicode;p.lastIndex=0}for(var _=[];;){var d=So(p,u);if(d===null||(_.push(d),!y))break;String(d[0])===""&&(p.lastIndex=mo(u,vo(p.lastIndex),R))}for(var T,Y="",m=0,E=0;E<_.length;E++){d=_[E];for(var s=String(d[0]),h=wo(Oo(xo(d.index),u.length),0),P=[],x=1;x<d.length;x++)P.push((T=d[x])===void 0?T:String(T));var S=d.groups;if(l){var N=[s].concat(P,h,u);S!==void 0&&N.push(S);var q=String(f.apply(void 0,N))}else q=Eo(s,u,h,P,S,f);h>=m&&(Y+=u.slice(m,h)+q,m=h+s.length)}return Y+u.slice(m)}]});var ke={};ke[M("toStringTag")]="z";var $t=String(ke)==="[object z]",Ro=$t,J=at,_o=M("toStringTag"),To=J(function(){return arguments}())=="Arguments",jo=Ro?J:function(t){var e,n,r;return t===void 0?"Undefined":t===null?"Null":typeof(n=function(o,i){try{return o[i]}catch{}}(e=Object(t),_o))=="string"?n:To?J(e):(r=J(e))=="Object"&&typeof e.callee=="function"?"Arguments":r},Io=$t?{}.toString:function(){return"[object "+jo(this)+"]"},Co=$t,Po=U.exports,No=Io;Co||Po(Object.prototype,"toString",No,{unsafe:!0});function ko(){var t,e,n,r,o,i,a;function c(){(e=document.createElement("div")).classList.add("searchbox"),e.style.position="absolute",e.style.top="10px",e.style.right="10px",e.style.zIndex=10,e.innerHTML=`<input type="search" class="searchinput" placeholder="Search..." style="vertical-align: top;"/>
		</span>`,(n=e.querySelector(".searchinput")).style.width="240px",n.style.fontSize="14px",n.style.padding="4px 6px",n.style.color="#000",n.style.background="#fff",n.style.borderRadius="2px",n.style.border="0",n.style.outline="0",n.style.boxShadow="0 2px 18px rgba(0, 0, 0, 0.2)",n.style["-webkit-appearance"]="none",t.getRevealElement().appendChild(e),n.addEventListener("keyup",function(u){switch(u.keyCode){case 13:u.preventDefault(),function(){if(i){var l=n.value;l===""?(a&&a.remove(),r=null):(a=new p("slidecontent"),r=a.apply(l),o=0)}r&&(r.length&&r.length<=o&&(o=0),r.length>o&&(t.slide(r[o].h,r[o].v),o++))}(),i=!1;break;default:i=!0}},!1),g()}function f(){e||c(),e.style.display="inline",n.focus(),n.select()}function g(){e||c(),e.style.display="none",a&&a.remove()}function p(u,l){var y=document.getElementById(u)||document.body,R=l||"EM",_=new RegExp("^(?:"+R+"|SCRIPT|FORM)$"),d=["#ff6","#a0ffff","#9f9","#f99","#f6f"],T=[],Y=0,m="",E=[];this.setRegex=function(s){s=s.replace(/^[^\w]+|[^\w]+$/g,"").replace(/[^\w'-]+/g,"|"),m=new RegExp("("+s+")","i")},this.getRegex=function(){return m.toString().replace(/^\/\\b\(|\)\\b\/i$/g,"").replace(/\|/g," ")},this.hiliteWords=function(s){if(s!=null&&s&&m&&!_.test(s.nodeName)){if(s.hasChildNodes())for(var h=0;h<s.childNodes.length;h++)this.hiliteWords(s.childNodes[h]);var P,x;if(s.nodeType==3&&(P=s.nodeValue)&&(x=m.exec(P))){for(var S=s;S!=null&&S.nodeName!="SECTION";)S=S.parentNode;var N=t.getIndices(S),q=E.length,Lt=!1;for(h=0;h<q;h++)E[h].h===N.h&&E[h].v===N.v&&(Lt=!0);Lt||E.push(N),T[x[0].toLowerCase()]||(T[x[0].toLowerCase()]=d[Y++%d.length]);var D=document.createElement(R);D.appendChild(document.createTextNode(x[0])),D.style.backgroundColor=T[x[0].toLowerCase()],D.style.fontStyle="inherit",D.style.color="#000";var lt=s.splitText(x.index);lt.nodeValue=lt.nodeValue.substring(x[0].length),s.parentNode.insertBefore(D,lt)}}},this.remove=function(){for(var s,h=document.getElementsByTagName(R);h.length&&(s=h[0]);)s.parentNode.replaceChild(s.firstChild,s)},this.apply=function(s){if(s!=null&&s)return this.remove(),this.setRegex(s),this.hiliteWords(y),E}}return{id:"search",init:function(u){(t=u).registerKeyboardShortcut("CTRL + Shift + F","Search"),document.addEventListener("keydown",function(l){l.key=="F"&&(l.ctrlKey||l.metaKey)&&(l.preventDefault(),e||c(),e.style.display!=="inline"?f():g())},!1)},open:f}}export{ko as default};
