import{s as mt,n as ye}from"./scheduler.B0JbnikJ.js";import{S as vt,i as _t,e as n,s as p,H as b,c as l,l as i,f as o,a as C,w,d as t,o as c,g as s}from"./index.v1IzgqVw.js";const dt=""+new URL("../assets/variableDeclaration.BSaawdt1.png",import.meta.url).href,bt=""+new URL("../assets/if_else.B1awCP1E.png",import.meta.url).href,Ct=""+new URL("../assets/or.BfD5IPPq.png",import.meta.url).href,wt=""+new URL("../assets/elseif.C3R0Dg-6.png",import.meta.url).href,Lt=""+new URL("../assets/for.CcUJiJfR.png",import.meta.url).href,xt=""+new URL("../assets/forfor.8Um8L10d.png",import.meta.url).href,Ht=""+new URL("../assets/forif.Ds3F8vQg.png",import.meta.url).href,Tt=""+new URL("../assets/comment.B371xIDX.png",import.meta.url).href;function ht(lt){let u,qe='<a href="#variable-declaration">Variable Declaration</a>',I,L,Pe="Java의 변수 선언 방법",V,x,A,pt=`<code class="language-java"><span class="token comment">//[자료형] [변수명];</span>
<span class="token keyword">int</span> i<span class="token punctuation">;</span>
<span class="token comment">// 선언과 함께 초기화</span>
<span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token number">3.14</span><span class="token punctuation">;</span></code>`,z,H,je=`<p>실습 예제
<img src="${dt}" alt="variableDeclaration"/></p>`,X,r,Oe='<a href="#conditional-statements-if-else">Conditional Statements if else</a>',G,T,Re="조건문 if else",N,h,W,ot=`<code class="language-java"><span class="token comment">// bool 값</span>
<span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">if</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    <span class="token comment">// b == true</span>
<span class="token punctuation">&#125;</span>
<span class="token keyword">else</span>
<span class="token punctuation">&#123;</span>
    <span class="token comment">// b == false</span>
<span class="token punctuation">&#125;</span></code>`,Y,M,Ue=`<p>실습 예제
<img src="${bt}" alt="if_else"/></p>`,Z,k,Be='<a href="#operator--">Operator ||, &amp;&amp;</a>',ee,E,ge="조건이 2개일 때",te,y,ae,it=`<code class="language-java"><span class="token keyword">boolean</span> a <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> b <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

<span class="token comment">// or 연산: a와 b 중 하나라도 true라면 true</span>
<span class="token keyword">boolean</span> result <span class="token operator">=</span> a <span class="token operator">||</span> b<span class="token punctuation">;</span>

<span class="token comment">// and 연산: 둘 다 true일때만 true</span>
result <span class="token operator">=</span> a <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">;</span></code>`,se,q,De=`<p>실습 예제
<img src="${Ct}" alt="or"/></p>`,ne,f,Qe='<a href="#else-if">else if</a>',le,P,pe,ct=`<code class="language-java">    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token comment">// false기 때문에 다음 else if 문으로 넘어감    </span>
    <span class="token punctuation">&#125;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token comment">// 로직 실행</span>
    <span class="token punctuation">&#125;</span></code>`,oe,j,Ke=`<p>실습 예제
<img src="${wt}" alt="elseif"/></p>`,ie,m,$e='<a href="#for">for</a>',ce,O,Se="반복문 사용법",ue,R,re,ut=`<code class="language-java"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token comment">/*반복문 사용할 변수*/</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token comment">/*조건*/</span><span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token comment">/*값 변경*/</span><span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    <span class="token comment">// 반복할 내용</span>
<span class="token punctuation">&#125;</span></code>`,ke,U,Fe=`<p>실습 예제
<img src="${Lt}" alt="for"/></p>`,fe,v,Je='<a href="#for--for">for &amp; for</a>',me,B,Ie="이중 반복문",ve,g,_e,rt=`<code class="language-java"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
<span class="token punctuation">&#123;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>j<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token operator">++</span>j<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>

    <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`,de,D,Ve=`<p>실습 예제
<img src="${xt}" alt="forfor"/></p>`,be,_,Ae='<a href="#for--if">for &amp; if</a>',Ce,Q,ze="조건문과 반복문",we,K,Le,kt=`<code class="language-java">    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span><span class="token number">10</span><span class="token punctuation">;</span><span class="token operator">++</span>i<span class="token punctuation">)</span>
    <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>i<span class="token operator">==</span><span class="token number">9</span><span class="token punctuation">)</span>
        <span class="token punctuation">&#123;</span>
            <span class="token comment">// 조건에 맞게 실행될 명령</span>
        <span class="token punctuation">&#125;</span>
    <span class="token punctuation">&#125;</span></code>`,xe,$,Xe=`<p>실습 예제
<img src="${Ht}" alt="forif"/></p>`,He,d,Ge='<a href="#comment">comment</a>',Te,S,Ne="주석",he,F,Me,ft=`<code class="language-java"><span class="token comment">// 주석 내용</span>
<span class="token comment">/*
    주석 내용
*/</span></code>`,Ee,J,We=`<p>실습 예제
<img src="${Tt}" alt="comment"/></p>`;return{c(){u=n("h2"),u.innerHTML=qe,I=p(),L=n("p"),L.textContent=Pe,V=p(),x=n("pre"),A=new b(!1),z=p(),H=n("blockquote"),H.innerHTML=je,X=p(),r=n("h2"),r.innerHTML=Oe,G=p(),T=n("p"),T.textContent=Re,N=p(),h=n("pre"),W=new b(!1),Y=p(),M=n("blockquote"),M.innerHTML=Ue,Z=p(),k=n("h2"),k.innerHTML=Be,ee=p(),E=n("p"),E.textContent=ge,te=p(),y=n("pre"),ae=new b(!1),se=p(),q=n("blockquote"),q.innerHTML=De,ne=p(),f=n("h2"),f.innerHTML=Qe,le=p(),P=n("pre"),pe=new b(!1),oe=p(),j=n("blockquote"),j.innerHTML=Ke,ie=p(),m=n("h2"),m.innerHTML=$e,ce=p(),O=n("p"),O.textContent=Se,ue=p(),R=n("pre"),re=new b(!1),ke=p(),U=n("blockquote"),U.innerHTML=Fe,fe=p(),v=n("h2"),v.innerHTML=Je,me=p(),B=n("p"),B.textContent=Ie,ve=p(),g=n("pre"),_e=new b(!1),de=p(),D=n("blockquote"),D.innerHTML=Ve,be=p(),_=n("h2"),_.innerHTML=Ae,Ce=p(),Q=n("p"),Q.textContent=ze,we=p(),K=n("pre"),Le=new b(!1),xe=p(),$=n("blockquote"),$.innerHTML=Xe,He=p(),d=n("h2"),d.innerHTML=Ge,Te=p(),S=n("p"),S.textContent=Ne,he=p(),F=n("pre"),Me=new b(!1),Ee=p(),J=n("blockquote"),J.innerHTML=We,this.h()},l(e){u=l(e,"H2",{id:!0,"data-svelte-h":!0}),i(u)!=="svelte-1fj93jw"&&(u.innerHTML=qe),I=o(e),L=l(e,"P",{"data-svelte-h":!0}),i(L)!=="svelte-1661bfy"&&(L.textContent=Pe),V=o(e),x=l(e,"PRE",{class:!0});var a=C(x);A=w(a,!1),a.forEach(t),z=o(e),H=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(H)!=="svelte-hf1z5e"&&(H.innerHTML=je),X=o(e),r=l(e,"H2",{id:!0,"data-svelte-h":!0}),i(r)!=="svelte-1jbitc6"&&(r.innerHTML=Oe),G=o(e),T=l(e,"P",{"data-svelte-h":!0}),i(T)!=="svelte-ytsgis"&&(T.textContent=Re),N=o(e),h=l(e,"PRE",{class:!0});var Ye=C(h);W=w(Ye,!1),Ye.forEach(t),Y=o(e),M=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(M)!=="svelte-179q1v5"&&(M.innerHTML=Ue),Z=o(e),k=l(e,"H2",{id:!0,"data-svelte-h":!0}),i(k)!=="svelte-1b629so"&&(k.innerHTML=Be),ee=o(e),E=l(e,"P",{"data-svelte-h":!0}),i(E)!=="svelte-fv46iq"&&(E.textContent=ge),te=o(e),y=l(e,"PRE",{class:!0});var Ze=C(y);ae=w(Ze,!1),Ze.forEach(t),se=o(e),q=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(q)!=="svelte-1jj5uo"&&(q.innerHTML=De),ne=o(e),f=l(e,"H2",{id:!0,"data-svelte-h":!0}),i(f)!=="svelte-1qteixu"&&(f.innerHTML=Qe),le=o(e),P=l(e,"PRE",{class:!0});var et=C(P);pe=w(et,!1),et.forEach(t),oe=o(e),j=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(j)!=="svelte-ildqmy"&&(j.innerHTML=Ke),ie=o(e),m=l(e,"H2",{id:!0,"data-svelte-h":!0}),i(m)!=="svelte-134qcv3"&&(m.innerHTML=$e),ce=o(e),O=l(e,"P",{"data-svelte-h":!0}),i(O)!=="svelte-1hdnqkn"&&(O.textContent=Se),ue=o(e),R=l(e,"PRE",{class:!0});var tt=C(R);re=w(tt,!1),tt.forEach(t),ke=o(e),U=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(U)!=="svelte-lmti1q"&&(U.innerHTML=Fe),fe=o(e),v=l(e,"H2",{id:!0,"data-svelte-h":!0}),i(v)!=="svelte-htmx3a"&&(v.innerHTML=Je),me=o(e),B=l(e,"P",{"data-svelte-h":!0}),i(B)!=="svelte-vgyyv2"&&(B.textContent=Ie),ve=o(e),g=l(e,"PRE",{class:!0});var at=C(g);_e=w(at,!1),at.forEach(t),de=o(e),D=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(D)!=="svelte-1x8o4kq"&&(D.innerHTML=Ve),be=o(e),_=l(e,"H2",{id:!0,"data-svelte-h":!0}),i(_)!=="svelte-1h9e7m8"&&(_.innerHTML=Ae),Ce=o(e),Q=l(e,"P",{"data-svelte-h":!0}),i(Q)!=="svelte-dk9lib"&&(Q.textContent=ze),we=o(e),K=l(e,"PRE",{class:!0});var st=C(K);Le=w(st,!1),st.forEach(t),xe=o(e),$=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i($)!=="svelte-82es76"&&($.innerHTML=Xe),He=o(e),d=l(e,"H2",{id:!0,"data-svelte-h":!0}),i(d)!=="svelte-1x5vw3l"&&(d.innerHTML=Ge),Te=o(e),S=l(e,"P",{"data-svelte-h":!0}),i(S)!=="svelte-1xh4t05"&&(S.textContent=Ne),he=o(e),F=l(e,"PRE",{class:!0});var nt=C(F);Me=w(nt,!1),nt.forEach(t),Ee=o(e),J=l(e,"BLOCKQUOTE",{"data-svelte-h":!0}),i(J)!=="svelte-61v6ra"&&(J.innerHTML=We),this.h()},h(){c(u,"id","variable-declaration"),A.a=null,c(x,"class","language-java"),c(r,"id","conditional-statements-if-else"),W.a=null,c(h,"class","language-java"),c(k,"id","operator--"),ae.a=null,c(y,"class","language-java"),c(f,"id","else-if"),pe.a=null,c(P,"class","language-java"),c(m,"id","for"),re.a=null,c(R,"class","language-java"),c(v,"id","for--for"),_e.a=null,c(g,"class","language-java"),c(_,"id","for--if"),Le.a=null,c(K,"class","language-java"),c(d,"id","comment"),Me.a=null,c(F,"class","language-java")},m(e,a){s(e,u,a),s(e,I,a),s(e,L,a),s(e,V,a),s(e,x,a),A.m(pt,x),s(e,z,a),s(e,H,a),s(e,X,a),s(e,r,a),s(e,G,a),s(e,T,a),s(e,N,a),s(e,h,a),W.m(ot,h),s(e,Y,a),s(e,M,a),s(e,Z,a),s(e,k,a),s(e,ee,a),s(e,E,a),s(e,te,a),s(e,y,a),ae.m(it,y),s(e,se,a),s(e,q,a),s(e,ne,a),s(e,f,a),s(e,le,a),s(e,P,a),pe.m(ct,P),s(e,oe,a),s(e,j,a),s(e,ie,a),s(e,m,a),s(e,ce,a),s(e,O,a),s(e,ue,a),s(e,R,a),re.m(ut,R),s(e,ke,a),s(e,U,a),s(e,fe,a),s(e,v,a),s(e,me,a),s(e,B,a),s(e,ve,a),s(e,g,a),_e.m(rt,g),s(e,de,a),s(e,D,a),s(e,be,a),s(e,_,a),s(e,Ce,a),s(e,Q,a),s(e,we,a),s(e,K,a),Le.m(kt,K),s(e,xe,a),s(e,$,a),s(e,He,a),s(e,d,a),s(e,Te,a),s(e,S,a),s(e,he,a),s(e,F,a),Me.m(ft,F),s(e,Ee,a),s(e,J,a)},p:ye,i:ye,o:ye,d(e){e&&(t(u),t(I),t(L),t(V),t(x),t(z),t(H),t(X),t(r),t(G),t(T),t(N),t(h),t(Y),t(M),t(Z),t(k),t(ee),t(E),t(te),t(y),t(se),t(q),t(ne),t(f),t(le),t(P),t(oe),t(j),t(ie),t(m),t(ce),t(O),t(ue),t(R),t(ke),t(U),t(fe),t(v),t(me),t(B),t(ve),t(g),t(de),t(D),t(be),t(_),t(Ce),t(Q),t(we),t(K),t(xe),t($),t(He),t(d),t(Te),t(S),t(he),t(F),t(Ee),t(J))}}}const yt={title:"Do it! 첫 코딩 with Java",date:"2024-05-8",preview:"엘리스 코딩의 Do it! 첫 코딩 실습 모음",headings:[{depth:2,value:"Variable Declaration",id:"variable-declaration"},{depth:2,value:"Conditional Statements if else",id:"conditional-statements-if-else"},{depth:2,value:"Operator ||, &&",id:"operator--"},{depth:2,value:"else if",id:"else-if"},{depth:2,value:"for",id:"for"},{depth:2,value:"for & for",id:"for--for"},{depth:2,value:"for & if",id:"for--if"},{depth:2,value:"comment",id:"comment"}]};class qt extends vt{constructor(u){super(),_t(this,u,null,ht,mt,{})}}export{qt as default,yt as metadata};
