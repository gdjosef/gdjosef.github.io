import{S as R,i as U,s as V,e as k,t as I,k as j,c as g,a as E,g as L,d as c,n as y,b as f,f as M,D as d,J as T,h as w,M as x,E as J,L as z}from"../../chunks/vendor-7b03c368.js";function N(i,l,s){const r=i.slice();return r[1]=l[s],r}function P(i){let l,s,r,n,o,_=T(i[1].date).format("YYYY, MMM DD")+"",a,e,u,t,h,p=i[1].title+"",Y,b,B;return{c(){l=k("li"),s=k("article"),r=k("div"),n=k("span"),o=k("time"),a=I(_),u=j(),t=k("h2"),h=k("a"),Y=I(p),B=j(),this.h()},l(v){l=g(v,"LI",{class:!0});var m=E(l);s=g(m,"ARTICLE",{class:!0});var D=E(s);r=g(D,"DIV",{class:!0});var A=E(r);n=g(A,"SPAN",{class:!0});var S=E(n);o=g(S,"TIME",{datetime:!0,class:!0});var q=E(o);a=L(q,_),q.forEach(c),S.forEach(c),A.forEach(c),u=y(D),t=g(D,"H2",{class:!0});var C=E(t);h=g(C,"A",{href:!0,class:!0});var H=E(h);Y=L(H,p),H.forEach(c),C.forEach(c),D.forEach(c),B=y(m),m.forEach(c),this.h()},h(){f(o,"datetime",e=i[1].date),f(o,"class","svelte-ksk0e5"),f(n,"class","svelte-ksk0e5"),f(r,"class","meta svelte-ksk0e5"),f(h,"href",b="/blog/"+i[1].slug),f(h,"class","svelte-ksk0e5"),f(t,"class","article-title svelte-ksk0e5"),f(s,"class","svelte-ksk0e5"),f(l,"class","article-item svelte-ksk0e5")},m(v,m){M(v,l,m),d(l,s),d(s,r),d(r,n),d(n,o),d(o,a),d(s,u),d(s,t),d(t,h),d(h,Y),d(l,B)},p(v,m){m&1&&_!==(_=T(v[1].date).format("YYYY, MMM DD")+"")&&w(a,_),m&1&&e!==(e=v[1].date)&&f(o,"datetime",e),m&1&&p!==(p=v[1].title+"")&&w(Y,p),m&1&&b!==(b="/blog/"+v[1].slug)&&f(h,"href",b)},d(v){v&&c(l)}}}function F(i){let l,s,r,n,o,_=i[0],a=[];for(let e=0;e<_.length;e+=1)a[e]=P(N(i,_,e));return{c(){l=j(),s=k("h1"),r=I("Blog"),n=j(),o=k("ul");for(let e=0;e<a.length;e+=1)a[e].c();this.h()},l(e){x('[data-svelte="svelte-154f8ye"]',document.head).forEach(c),l=y(e),s=g(e,"H1",{class:!0});var t=E(s);r=L(t,"Blog"),t.forEach(c),n=y(e),o=g(e,"UL",{class:!0});var h=E(o);for(let p=0;p<a.length;p+=1)a[p].l(h);h.forEach(c),this.h()},h(){document.title="Blog \u2022 jacktrepping",f(s,"class","title svelte-ksk0e5"),f(o,"class","svelte-ksk0e5")},m(e,u){M(e,l,u),M(e,s,u),d(s,r),M(e,n,u),M(e,o,u);for(let t=0;t<a.length;t+=1)a[t].m(o,null)},p(e,[u]){if(u&1){_=e[0];let t;for(t=0;t<_.length;t+=1){const h=N(e,_,t);a[t]?a[t].p(h,u):(a[t]=P(h),a[t].c(),a[t].m(o,null))}for(;t<a.length;t+=1)a[t].d(1);a.length=_.length}},i:J,o:J,d(e){e&&c(l),e&&c(s),e&&c(n),e&&c(o),z(a,e)}}}async function O({fetch:i}){const{posts:l}=await i("/blog/posts.json").then(s=>s.json());return{props:{posts:l}}}function G(i,l,s){let{posts:r}=l;return i.$$set=n=>{"posts"in n&&s(0,r=n.posts)},[r]}class Q extends R{constructor(l){super();U(this,l,G,F,V,{posts:0})}}export{Q as default,O as load};
