import{S as K,i as x,s as ee,e as w,k as P,j as M,c as E,a as O,d as m,n as I,m as B,E as q,b as $,f as R,F as h,o as S,x as y,l as z,N as Q,O as te,u as C,r as le,w as ne,v as T,P as we,Q as ue,R as me,T as _e,U as Ee,V as ye,t as X,g as Y,M as b,W as pe,X as Pe,Y as Ie,Z as Re,_ as Ce,$ as re}from"../chunks/vendor-16d16a08.js";import{b as oe}from"../chunks/paths-28a87002.js";import{s as he,I as je}from"../chunks/InstallCommand-727e28bc.js";function ge(c,e,t){const n=c.slice();return n[3]=e[t][0],n[4]=e[t][1],n}function de(c,e,t){const n=c.slice();return n[7]=e[t],n}function Oe(c){let e;return{c(){e=X("CONVERT")},l(t){e=Y(t,"CONVERT")},m(t,n){R(t,e,n)},d(t){t&&m(e)}}}function Ue(c){return{c:b,l:b,m:b,p:b,i:b,o:b,d:b}}function Ne(c){let e,t=De(c);return{c(){t&&t.c(),e=P()},l(n){t&&t.l(n),e=I(n)},m(n,l){t&&t.m(n,l),R(n,e,l)},p(n,l){t.p(n,l)},i:b,o:b,d(n){t&&t.d(n),n&&m(e)}}}function De(c){let e,t;return{c(){e=w("img"),this.h()},l(n){e=E(n,"IMG",{src:!0,alt:!0}),this.h()},h(){q(e.src,t=URL.createObjectURL(new Blob([c[10]],{type:"image/png"})))||$(e,"src",t),$(e,"alt","converted")},m(n,l){R(n,e,l)},p(n,l){l&1&&!q(e.src,t=URL.createObjectURL(new Blob([n[10]],{type:"image/png"})))&&$(e,"src",t)},d(n){n&&m(e)}}}function Le(c){let e,t,n;return e=new pe({props:{style:"height:24px"}}),{c(){M(e.$$.fragment),t=P()},l(l){B(e.$$.fragment,l),t=I(l)},m(l,o){S(e,l,o),R(l,t,o),n=!0},p:b,i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){C(e.$$.fragment,l),n=!1},d(l){T(e,l),l&&m(t)}}}function $e(c){let e,t,n,l={ctx:c,current:null,token:null,hasCatch:!1,pending:Le,then:Ne,catch:Ue,value:10,blocks:[,,,]};return Q(t=c[7],l),{c(){e=z(),l.block.c()},l(o){e=z(),l.block.l(o)},m(o,s){R(o,e,s),l.block.m(o,l.anchor=s),l.mount=()=>e.parentNode,l.anchor=e,n=!0},p(o,s){c=o,l.ctx=c,s&1&&t!==(t=c[7])&&Q(t,l)||te(l,c,s)},i(o){n||(y(l.block),n=!0)},o(o){for(let s=0;s<3;s+=1){const r=l.blocks[s];C(r)}n=!1},d(o){o&&m(e),l.block.d(o),l.token=null,l=null}}}function be(c,e){let t,n,l,o,s,r,a,i,U,v,f,u;function k(){return e[2](e[3])}i=new Ee({props:{icon:ye,$$slots:{default:[Oe]},$$scope:{ctx:e}}}),i.$on("click",k);let j=e[4],g=[];for(let _=0;_<j.length;_+=1)g[_]=$e(de(e,j,_));const L=_=>C(g[_],1,1,()=>{g[_]=null});return{key:c,first:null,c(){t=w("div"),n=w("p"),l=w("img"),r=P(),a=w("p"),M(i.$$.fragment),U=P(),v=w("p");for(let _=0;_<g.length;_+=1)g[_].c();f=P(),this.h()},l(_){t=E(_,"DIV",{class:!0});var p=O(t);n=E(p,"P",{class:!0});var N=O(n);l=E(N,"IMG",{src:!0,alt:!0}),N.forEach(m),r=I(p),a=E(p,"P",{});var d=O(a);B(i.$$.fragment,d),d.forEach(m),U=I(p),v=E(p,"P",{class:!0});var V=O(v);for(let F=0;F<g.length;F+=1)g[F].l(V);V.forEach(m),f=I(p),p.forEach(m),this.h()},h(){q(l.src,o=e[3])||$(l,"src",o),$(l,"alt",s=""+(e[3]+" svg")),$(n,"class","input"),$(v,"class","result svelte-mzvxcn"),$(t,"class","svelte-mzvxcn"),this.first=t},m(_,p){R(_,t,p),h(t,n),h(n,l),h(t,r),h(t,a),S(i,a,null),h(t,U),h(t,v);for(let N=0;N<g.length;N+=1)g[N].m(v,null);h(t,f),u=!0},p(_,p){e=_,(!u||p&1&&!q(l.src,o=e[3]))&&$(l,"src",o),(!u||p&1&&s!==(s=""+(e[3]+" svg")))&&$(l,"alt",s);const N={};if(p&2048&&(N.$$scope={dirty:p,ctx:e}),i.$set(N),p&1){j=e[4];let d;for(d=0;d<j.length;d+=1){const V=de(e,j,d);g[d]?(g[d].p(V,p),y(g[d],1)):(g[d]=$e(V),g[d].c(),y(g[d],1),g[d].m(v,null))}for(le(),d=j.length;d<g.length;d+=1)L(d);ne()}},i(_){if(!u){y(i.$$.fragment,_);for(let p=0;p<j.length;p+=1)y(g[p]);u=!0}},o(_){C(i.$$.fragment,_),g=g.filter(Boolean);for(let p=0;p<g.length;p+=1)C(g[p]);u=!1},d(_){_&&m(t),T(i),we(g,_)}}}function Me(c){let e,t=[],n=new Map,l,o=Object.entries(c[0]);const s=r=>r[3];for(let r=0;r<o.length;r+=1){let a=ge(c,o,r),i=s(a);n.set(i,t[r]=be(i,a))}return{c(){e=w("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var a=O(e);for(let i=0;i<t.length;i+=1)t[i].l(a);a.forEach(m),this.h()},h(){$(e,"class","demos svelte-mzvxcn")},m(r,a){R(r,e,a);for(let i=0;i<t.length;i+=1)t[i].m(e,null);l=!0},p(r,[a]){a&3&&(o=Object.entries(r[0]),le(),t=ue(t,a,s,1,r,o,n,e,me,be,null,ge),ne())},i(r){if(!l){for(let a=0;a<o.length;a+=1)y(t[a]);l=!0}},o(r){for(let a=0;a<t.length;a+=1)C(t[a]);l=!1},d(r){r&&m(e);for(let a=0;a<t.length;a+=1)t[a].d()}}}function Be(c,e,t){let n;_e(c,he,s=>t(1,n=s));const l={[`${oe}/icon.svg`]:[],[`${oe}/gradient.svg`]:[],[`${oe}/parrot.svg`]:[]};return[l,n,s=>{const r=fetch(s).then(a=>a.text());t(0,l[s]=[r.then(a=>{var i;return(i=n(a,{scale:1}))!=null?i:Promise.reject("error")}),r.then(a=>{var i;return(i=n(a,{scale:2}))!=null?i:Promise.reject("error")}),r.then(a=>{var i;return(i=n(a,{scale:3}))!=null?i:Promise.reject("error")})],l)}]}class Se extends K{constructor(e){super();x(this,e,Be,Me,ee,{})}}function ve(c,e,t){const n=c.slice();return n[5]=e[t].id,n[6]=e[t].name,n[7]=e[t].value,n}function Te(c){let e,t,n;return e=new re({props:{name:c[6],status:"edit",errorBody:c[12]}}),{c(){M(e.$$.fragment),t=P()},l(l){B(e.$$.fragment,l),t=I(l)},m(l,o){S(e,l,o),R(l,t,o),n=!0},p(l,o){const s={};o&2&&(s.name=l[6]),o&2&&(s.errorBody=l[12]),e.$set(s)},i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){C(e.$$.fragment,l),n=!1},d(l){T(e,l),l&&m(t)}}}function Ve(c){let e,t,n,l,o;e=new re({props:{name:c[6],status:"complete"}});let s={ctx:c,current:null,token:null,hasCatch:!1,pending:Ge,then:ze,catch:Ae,value:11,blocks:[,,,]};return Q(n=c[2](c[10]),s),{c(){M(e.$$.fragment),t=P(),s.block.c(),l=P()},l(r){B(e.$$.fragment,r),t=I(r),s.block.l(r),l=I(r)},m(r,a){S(e,r,a),R(r,t,a),s.block.m(r,s.anchor=a),s.mount=()=>l.parentNode,s.anchor=l,R(r,l,a),o=!0},p(r,a){c=r;const i={};a&2&&(i.name=c[6]),e.$set(i),s.ctx=c,a&6&&n!==(n=c[2](c[10]))&&Q(n,s)||te(s,c,a)},i(r){o||(y(e.$$.fragment,r),y(s.block),o=!0)},o(r){C(e.$$.fragment,r);for(let a=0;a<3;a+=1){const i=s.blocks[a];C(i)}o=!1},d(r){T(e,r),r&&m(t),s.block.d(r),s.token=null,s=null,r&&m(l)}}}function Ae(c){return{c:b,l:b,m:b,p:b,i:b,o:b,d:b}}function ze(c){let e,t=Fe(c);return{c(){t&&t.c(),e=z()},l(n){t&&t.l(n),e=z()},m(n,l){t&&t.m(n,l),R(n,e,l)},p(n,l){t.p(n,l)},i:b,o:b,d(n){t&&t.d(n),n&&m(e)}}}function Fe(c){let e,t,n;return{c(){e=w("img"),this.h()},l(l){e=E(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){q(e.src,t=URL.createObjectURL(new Blob([c[11]],{type:"image/png"})))||$(e,"src",t),$(e,"alt",n=c[6]),$(e,"class","svelte-1615sw")},m(l,o){R(l,e,o)},p(l,o){o&6&&!q(e.src,t=URL.createObjectURL(new Blob([l[11]],{type:"image/png"})))&&$(e,"src",t),o&2&&n!==(n=l[6])&&$(e,"alt",n)},d(l){l&&m(e)}}}function Ge(c){let e,t;return e=new pe({}),{c(){M(e.$$.fragment)},l(n){B(e.$$.fragment,n)},m(n,l){S(e,n,l),t=!0},p:b,i(n){t||(y(e.$$.fragment,n),t=!0)},o(n){C(e.$$.fragment,n),t=!1},d(n){T(e,n)}}}function He(c){let e,t,n;return e=new re({props:{name:c[6],status:"uploading"}}),{c(){M(e.$$.fragment),t=P()},l(l){B(e.$$.fragment,l),t=I(l)},m(l,o){S(e,l,o),R(l,t,o),n=!0},p(l,o){const s={};o&2&&(s.name=l[6]),e.$set(s)},i(l){n||(y(e.$$.fragment,l),n=!0)},o(l){C(e.$$.fragment,l),n=!1},d(l){T(e,l),l&&m(t)}}}function ke(c,e){let t,n,l,o,s={ctx:e,current:null,token:null,hasCatch:!0,pending:He,then:Ve,catch:Te,value:10,error:12,blocks:[,,,]};return Q(l=e[7],s),{key:c,first:null,c(){t=z(),n=z(),s.block.c(),this.h()},l(r){t=z(),n=z(),s.block.l(r),this.h()},h(){this.first=t},m(r,a){R(r,t,a),R(r,n,a),s.block.m(r,s.anchor=a),s.mount=()=>n.parentNode,s.anchor=n,o=!0},p(r,a){e=r,s.ctx=e,a&2&&l!==(l=e[7])&&Q(l,s)||te(s,e,a)},i(r){o||(y(s.block),o=!0)},o(r){for(let a=0;a<3;a+=1){const i=s.blocks[a];C(i)}o=!1},d(r){r&&m(t),r&&m(n),s.block.d(r),s.token=null,s=null}}}function We(c){let e,t,n,l,o=[],s=new Map,r;function a(f){c[4](f)}let i={multiple:!0,labelText:"Drag and drop file here or click to upload svg",accept:[".svg"]};c[0]!==void 0&&(i.ref=c[0]),t=new Pe({props:i}),Ie.push(()=>Re(t,"ref",a)),t.$on("add",c[3]);let U=c[1];const v=f=>f[5];for(let f=0;f<U.length;f+=1){let u=ve(c,U,f),k=v(u);s.set(k,o[f]=ke(k,u))}return{c(){e=w("div"),M(t.$$.fragment),l=P();for(let f=0;f<o.length;f+=1)o[f].c()},l(f){e=E(f,"DIV",{});var u=O(e);B(t.$$.fragment,u),l=I(u);for(let k=0;k<o.length;k+=1)o[k].l(u);u.forEach(m)},m(f,u){R(f,e,u),S(t,e,null),h(e,l);for(let k=0;k<o.length;k+=1)o[k].m(e,null);r=!0},p(f,[u]){const k={};!n&&u&1&&(n=!0,k.ref=f[0],Ce(()=>n=!1)),t.$set(k),u&6&&(U=f[1],le(),o=ue(o,u,v,1,f,U,s,e,me,ke,null,ve),ne())},i(f){if(!r){y(t.$$.fragment,f);for(let u=0;u<U.length;u+=1)y(o[u]);r=!0}},o(f){C(t.$$.fragment,f);for(let u=0;u<o.length;u+=1)C(o[u]);r=!1},d(f){f&&m(e),T(t);for(let u=0;u<o.length;u+=1)o[u].d()}}}function qe(c,e,t){let n;_e(c,he,a=>t(2,n=a));let l,o=[];const s=({detail:a})=>{t(1,o=[...Array.from(a).filter(i=>i.type==="image/svg+xml").map(i=>({id:`file-${Math.random().toString(36)}`,name:i.name,value:i.text()})),...o])};function r(a){l=a,t(0,l)}return[l,o,n,s,r]}class Qe extends K{constructor(e){super();x(this,e,qe,We,ee,{})}}function Xe(c){let e,t,n,l,o,s,r,a,i,U,v,f,u,k,j,g,L,_,p,N,d,V,F,G,Z;return i=new je({}),j=new Se({}),G=new Qe({}),{c(){e=w("main"),t=w("section"),n=w("h1"),l=X("svg2png-wasm"),o=P(),s=w("p"),r=X("Convert svg to png using WebAssembly."),a=P(),M(i.$$.fragment),U=P(),v=w("section"),f=w("h2"),u=X("Demo"),k=P(),M(j.$$.fragment),g=P(),L=w("section"),_=w("h2"),p=X("Playground"),N=P(),d=w("p"),V=X("Runs in the browser, file is not sent to the server."),F=P(),M(G.$$.fragment),this.h()},l(D){e=E(D,"MAIN",{class:!0});var A=O(e);t=E(A,"SECTION",{class:!0});var H=O(t);n=E(H,"H1",{class:!0});var se=O(n);l=Y(se,"svg2png-wasm"),se.forEach(m),o=I(H),s=E(H,"P",{});var ae=O(s);r=Y(ae,"Convert svg to png using WebAssembly."),ae.forEach(m),a=I(H),B(i.$$.fragment,H),H.forEach(m),U=I(A),v=E(A,"SECTION",{class:!0});var J=O(v);f=E(J,"H2",{});var ce=O(f);u=Y(ce,"Demo"),ce.forEach(m),k=I(J),B(j.$$.fragment,J),J.forEach(m),g=I(A),L=E(A,"SECTION",{class:!0});var W=O(L);_=E(W,"H2",{});var ie=O(_);p=Y(ie,"Playground"),ie.forEach(m),N=I(W),d=E(W,"P",{});var fe=O(d);V=Y(fe,"Runs in the browser, file is not sent to the server."),fe.forEach(m),F=I(W),B(G.$$.fragment,W),W.forEach(m),A.forEach(m),this.h()},h(){$(n,"class","main-title svelte-fubwwx"),$(t,"class","svelte-fubwwx"),$(v,"class","svelte-fubwwx"),$(L,"class","svelte-fubwwx"),$(e,"class","svelte-fubwwx")},m(D,A){R(D,e,A),h(e,t),h(t,n),h(n,l),h(t,o),h(t,s),h(s,r),h(t,a),S(i,t,null),h(e,U),h(e,v),h(v,f),h(f,u),h(v,k),S(j,v,null),h(e,g),h(e,L),h(L,_),h(_,p),h(L,N),h(L,d),h(d,V),h(L,F),S(G,L,null),Z=!0},p:b,i(D){Z||(y(i.$$.fragment,D),y(j.$$.fragment,D),y(G.$$.fragment,D),Z=!0)},o(D){C(i.$$.fragment,D),C(j.$$.fragment,D),C(G.$$.fragment,D),Z=!1},d(D){D&&m(e),T(i),T(j),T(G)}}}class Ke extends K{constructor(e){super();x(this,e,null,Xe,ee,{})}}export{Ke as default};