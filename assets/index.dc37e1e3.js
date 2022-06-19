const ke=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const i of f.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerpolicy&&(f.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?f.credentials="include":l.crossorigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function r(l){if(l.ep)return;l.ep=!0;const f=n(l);fetch(l.href,f)}};ke();function j(){}function me(e){return e()}function oe(){return Object.create(null)}function M(e){e.forEach(me)}function qe(e){return typeof e=="function"}function W(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ye(e){return Object.keys(e).length===0}function $e(e,...t){if(e==null)return j;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function ne(e,t,n){e.$$.on_destroy.push($e(t,n))}function we(e,t,n){return e.set(n),t}function u(e,t){e.appendChild(t)}function A(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function Ce(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function b(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function R(){return C(" ")}function T(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Re(e){return e===""?null:+e}function Ee(e){return Array.from(e.childNodes)}function S(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function se(e,t){e.value=t==null?"":t}function K(e,t,n,r){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function I(e,t,n){e.classList[n?"add":"remove"](t)}let x;function B(e){x=e}function Oe(){if(!x)throw new Error("Function called outside component initialization");return x}function Ae(e){Oe().$$.on_destroy.push(e)}const F=[],ie=[],U=[],ce=[],Ne=Promise.resolve();let Y=!1;function Se(){Y||(Y=!0,Ne.then(pe))}function Z(e){U.push(e)}const X=new Set;let H=0;function pe(){const e=x;do{for(;H<F.length;){const t=F[H];H++,B(t),je(t.$$)}for(B(null),F.length=0,H=0;ie.length;)ie.pop()();for(let t=0;t<U.length;t+=1){const n=U[t];X.has(n)||(X.add(n),n())}U.length=0}while(F.length);for(;ce.length;)ce.pop()();Y=!1,X.clear(),B(e)}function je(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(Z)}}const G=new Set;let L;function _e(){L={r:0,c:[],p:L}}function ge(){L.r||M(L.c),L=L.p}function P(e,t){e&&e.i&&(G.delete(e),e.i(t))}function D(e,t,n,r){if(e&&e.o){if(G.has(e))return;G.add(e),L.c.push(()=>{G.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}function ee(e){e&&e.c()}function J(e,t,n,r){const{fragment:l,on_mount:f,on_destroy:i,after_update:c}=e.$$;l&&l.m(t,n),r||Z(()=>{const s=f.map(me).filter(qe);i?i.push(...s):M(s),e.$$.on_mount=[]}),c.forEach(Z)}function Q(e,t){const n=e.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Le(e,t){e.$$.dirty[0]===-1&&(F.push(e),Se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function re(e,t,n,r,l,f,i,c=[-1]){const s=x;B(e);const o=e.$$={fragment:null,ctx:null,props:f,update:j,not_equal:l,bound:oe(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(s?s.$$.context:[])),callbacks:oe(),dirty:c,skip_bound:!1,root:t.target||s.$$.root};i&&i(o.root);let h=!1;if(o.ctx=n?n(e,t.props||{},(m,k,...d)=>{const a=d.length?d[0]:k;return o.ctx&&l(o.ctx[m],o.ctx[m]=a)&&(!o.skip_bound&&o.bound[m]&&o.bound[m](a),h&&Le(e,m)),k}):[],o.update(),h=!0,M(o.before_update),o.fragment=r?r(o.ctx):!1,t.target){if(t.hydrate){const m=Ee(t.target);o.fragment&&o.fragment.l(m),m.forEach(E)}else o.fragment&&o.fragment.c();t.intro&&P(e.$$.fragment),J(e,t.target,t.anchor,t.customElement),pe()}B(s)}class le{$destroy(){Q(this,1),this.$destroy=j}$on(t,n){const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(t){this.$$set&&!ye(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const z=[];function be(e,t=j){let n;const r=new Set;function l(c){if(W(e,c)&&(e=c,n)){const s=!z.length;for(const o of r)o[1](),z.push(o,e);if(s){for(let o=0;o<z.length;o+=2)z[o][0](z[o+1]);z.length=0}}}function f(c){l(c(e))}function i(c,s=j){const o=[c,s];return r.add(o),r.size===1&&(n=t(l)||j),c(e),()=>{r.delete(o),r.size===0&&(n(),n=null)}}return{set:l,update:f,subscribe:i}}const te=be(1e7),fe=15,V={Coal:{power:0,value:1,interval:1,req:[]},Iron:{unlock_cost:50,power:2,value:3,interval:3,req:[]},Steel:{unlock_cost:50,power:8,value:10,interval:5,req:[["Coal",1],["Iron",1]]},Filler:{unlock_cost:50,power:-1,value:-5,interval:1e-5,req:[]}},ue=be([{name:"Coal",eff:1,prog:0,stored:0},{name:"Iron",eff:0,prog:0,stored:0},{name:"Steel",eff:0,prog:0,stored:0}]);function Pe(e){let t,n,r=e[1].unlock_cost+"",l,f,i,c;return{c(){t=b("button"),n=C("Unlock ($"),l=C(r),f=C(")"),g(t,"class","unlock-btn svelte-18qkdvh")},m(s,o){A(s,t,o),u(t,n),u(t,l),u(t,f),i||(c=T(t,"click",e[9]),i=!0)},p(s,o){o&2&&r!==(r=s[1].unlock_cost+"")&&S(l,r)},d(s){s&&E(t),i=!1,c()}}}function ze(e){let t,n,r=Math.round(e[0].prog)+"",l,f,i,c,s,o=e[0].eff+"",h,m,k,d,a,p=e[1].interval+"",_,O,N=e[1].interval==1?"":"s",q,w,y;return{c(){t=b("div"),n=b("div"),l=C(r),f=C("%"),i=R(),c=b("div"),s=b("h3"),h=C(o),m=R(),k=b("hr"),d=R(),a=b("h3"),_=C(p),O=C(" Sec"),q=C(N),g(n,"class","center svelte-18qkdvh"),g(t,"class","progress svelte-18qkdvh"),K(t,"background-image","conic-gradient(#f3373a "+e[0].prog+"%, #2a343a 0)"),g(s,"class","svelte-18qkdvh"),K(k,"border","1.5px solid #2a343a"),g(a,"class","svelte-18qkdvh"),g(c,"class","res-eff svelte-18qkdvh")},m(v,$){A(v,t,$),u(t,n),u(n,l),u(n,f),A(v,i,$),A(v,c,$),u(c,s),u(s,h),u(c,m),u(c,k),u(c,d),u(c,a),u(a,_),u(a,O),u(a,q),w||(y=T(t,"click",e[8]),w=!0)},p(v,$){$&1&&r!==(r=Math.round(v[0].prog)+"")&&S(l,r),$&1&&K(t,"background-image","conic-gradient(#f3373a "+v[0].prog+"%, #2a343a 0)"),$&1&&o!==(o=v[0].eff+"")&&S(h,o),$&2&&p!==(p=v[1].interval+"")&&S(_,p),$&2&&N!==(N=v[1].interval==1?"":"s")&&S(q,N)},d(v){v&&E(t),v&&E(i),v&&E(c),w=!1,y()}}}function ae(e){let t,n=e[0].stored+"",r,l,f,i,c=e[1].value+"",s,o,h,m,k;return{c(){t=b("h3"),r=C(n),l=R(),f=b("h3"),i=C("$"),s=C(c),o=R(),h=b("h3"),h.textContent="+",g(t,"class","stored svelte-18qkdvh"),g(f,"class","value svelte-18qkdvh"),g(h,"class","other svelte-18qkdvh"),I(h,"open",e[2])},m(d,a){A(d,t,a),u(t,r),A(d,l,a),A(d,f,a),u(f,i),u(f,s),A(d,o,a),A(d,h,a),m||(k=T(h,"click",e[11]),m=!0)},p(d,a){a&1&&n!==(n=d[0].stored+"")&&S(r,n),a&2&&c!==(c=d[1].value+"")&&S(s,c),a&4&&I(h,"open",d[2])},d(d){d&&E(t),d&&E(l),d&&E(f),d&&E(o),d&&E(h),m=!1,k()}}}function Ie(e){let t,n,r,l=e[0].name+"",f,i,c,s,o,h,m=e[6][e[3]]+"",k,d,a,p,_,O;function N(v,$){return v[0].eff>0?ze:Pe}let q=N(e),w=q(e),y=e[0].eff>0&&ae(e);return{c(){t=b("main"),n=b("div"),r=b("h3"),f=C(l),i=R(),w.c(),c=R(),s=b("menu"),o=b("h1"),h=C("Sell: "),k=C(m),d=R(),a=b("input"),p=R(),y&&y.c(),K(r,"font-size","1.5rem"),g(n,"class","resource-card svelte-18qkdvh"),I(n,"hidden",e[2]),g(a,"type","range"),g(a,"id","sell-range"),g(a,"min","0"),g(a,"max","4"),g(s,"class","svelte-18qkdvh"),I(s,"hidden",!e[2]),g(t,"class","svelte-18qkdvh")},m(v,$){A(v,t,$),u(t,n),u(n,r),u(r,f),u(n,i),w.m(n,null),u(t,c),u(t,s),u(s,o),u(o,h),u(o,k),u(s,d),u(s,a),se(a,e[3]),u(t,p),y&&y.m(t,null),_||(O=[T(a,"change",e[10]),T(a,"input",e[10])],_=!0)},p(v,[$]){$&1&&l!==(l=v[0].name+"")&&S(f,l),q===(q=N(v))&&w?w.p(v,$):(w.d(1),w=q(v),w&&(w.c(),w.m(n,null))),$&4&&I(n,"hidden",v[2]),$&8&&m!==(m=v[6][v[3]]+"")&&S(k,m),$&8&&se(a,v[3]),$&4&&I(s,"hidden",!v[2]),v[0].eff>0?y?y.p(v,$):(y=ae(v),y.c(),y.m(t,null)):y&&(y.d(1),y=null)},i:j,o:j,d(v){v&&E(t),w.d(),y&&y.d(),_=!1,M(O)}}}function Me(e,t,n){let r;ne(e,te,_=>n(12,r=_));let{res:l=null}=t,{info:f=null}=t,{updateRes:i=()=>{}}=t;const c=_=>{_.eff!=0&&(_.prog+=10,i())},s=_=>{r<f.unlock_cost||(we(te,r-=f.unlock_cost,r),_.eff=1,i())};let o=!1,h=0;const m=[1,10,100,1e3,"All"],k=()=>c(l),d=()=>s(l);function a(){h=Re(this.value),n(3,h)}const p=()=>void n(2,o=!o);return e.$$set=_=>{"res"in _&&n(0,l=_.res),"info"in _&&n(1,f=_.info),"updateRes"in _&&n(7,i=_.updateRes)},[l,f,o,h,c,s,m,i,k,d,a,p]}class Fe extends le{constructor(t){super(),re(this,t,Me,Ie,W,{res:0,info:1,updateRes:7})}}function de(e,t,n){const r=e.slice();return r[6]=t[n],r}function he(e){let t,n;return t=new Fe({props:{res:e[6],info:V[e[6].name],updateRes:e[1]}}),{c(){ee(t.$$.fragment)},m(r,l){J(t,r,l),n=!0},p(r,l){const f={};l&1&&(f.res=r[6]),l&1&&(f.info=V[r[6].name]),t.$set(f)},i(r){n||(P(t.$$.fragment,r),n=!0)},o(r){D(t.$$.fragment,r),n=!1},d(r){Q(t,r)}}}function Be(e){let t,n,r=e[0],l=[];for(let i=0;i<r.length;i+=1)l[i]=he(de(e,r,i));const f=i=>D(l[i],1,1,()=>{l[i]=null});return{c(){t=b("main");for(let i=0;i<l.length;i+=1)l[i].c();g(t,"class","svelte-1jf8guc")},m(i,c){A(i,t,c);for(let s=0;s<l.length;s+=1)l[s].m(t,null);n=!0},p(i,[c]){if(c&3){r=i[0];let s;for(s=0;s<r.length;s+=1){const o=de(i,r,s);l[s]?(l[s].p(o,c),P(l[s],1)):(l[s]=he(o),l[s].c(),P(l[s],1),l[s].m(t,null))}for(_e(),s=r.length;s<l.length;s+=1)f(s);ge()}},i(i){if(!n){for(let c=0;c<r.length;c+=1)P(l[c]);n=!0}},o(i){l=l.filter(Boolean);for(let c=0;c<l.length;c+=1)D(l[c]);n=!1},d(i){i&&E(t),Ce(l,i)}}}function Te(e,t,n){let r;ne(e,ue,o=>n(0,r=o));const l=setInterval(()=>{for(let o=0;o<r.length;o++){const h=r[o];c(h)}},1e3/fe);Ae(()=>{window.clearInterval(l)});const f=()=>ue.set(r),i=o=>r.find(h=>h.name==o),c=o=>{o.eff!=0&&(o.prog+=100/fe/V[o.name].interval,o.prog>=100&&s(o),f())},s=o=>{const h=V[o.name];o.prog=0;for(let m=0;m<h.req.length;m++){const[k,d]=h.req[m],a=i(k);if(a.stored<d)return;a.stored-=d}o.stored+=o.eff};return[r,f]}class xe extends le{constructor(t){super(),re(this,t,Te,Be,W,{})}}function De(e){let t,n,r,l,f,i,c,s,o,h,m,k,d,a,p,_;var O=e[1][ve];function N(q){return{}}return O&&(p=new O(N())),{c(){t=b("main"),n=b("nav"),r=b("h1"),l=C("$"),f=C(e[0]),i=R(),c=b("h2"),c.textContent="Production",s=R(),o=b("h2"),o.textContent="Other Nav 1",h=R(),m=b("h2"),m.textContent="Other Nav 2",k=R(),d=b("h2"),d.textContent="Other Nav 3",a=R(),p&&ee(p.$$.fragment),g(r,"id","cash-txt"),g(r,"class","svelte-r3h5fc"),g(c,"class","svelte-r3h5fc"),g(o,"class","svelte-r3h5fc"),g(m,"class","svelte-r3h5fc"),g(d,"class","svelte-r3h5fc"),g(n,"class","svelte-r3h5fc"),g(t,"class","svelte-r3h5fc")},m(q,w){A(q,t,w),u(t,n),u(n,r),u(r,l),u(r,f),u(n,i),u(n,c),u(n,s),u(n,o),u(n,h),u(n,m),u(n,k),u(n,d),u(t,a),p&&J(p,t,null),_=!0},p(q,[w]){if((!_||w&1)&&S(f,q[0]),O!==(O=q[1][ve])){if(p){_e();const y=p;D(y.$$.fragment,1,0,()=>{Q(y,1)}),ge()}O?(p=new O(N()),ee(p.$$.fragment),P(p.$$.fragment,1),J(p,t,null)):p=null}},i(q){_||(p&&P(p.$$.fragment,q),_=!0)},o(q){p&&D(p.$$.fragment,q),_=!1},d(q){q&&E(t),p&&Q(p)}}}let ve=0;function He(e,t,n){let r;return ne(e,te,f=>n(0,r=f)),[r,[xe]]}class Ke extends le{constructor(t){super(),re(this,t,He,De,W,{})}}new Ke({target:document.body});