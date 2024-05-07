import{s as Yt,n as Fe}from"./scheduler.B0JbnikJ.js";import{S as Gt,i as At,e as i,s as n,H as Z,c as a,l as p,f as o,a as B,w as Q,d as t,p as r,g as s}from"./index.Dag17U6u.js";const Ut=""+new URL("../assets/penguins.CsfNPj69.mp4",import.meta.url).href;function Vt(jt){let d,Ke='Thanks for checking out my blog template. It’s based on the blog I built for my own <a href="https://mattjennings.io" rel="nofollow">website</a> and I hope this is a good starting point for you to start yours.',X,T,Ne="Let’s go over a few quick things:",ee,H,Oe='<li><p>This template was built with <code>@sveltejs/kit@1.0.0</code></p></li> <li><p>The theme of this blog is heavily borrowed from Tailwind’s <a href="https://spotlight.tailwindui.com/" rel="nofollow">“Spotlight” blog template</a>. This is <em>not</em> a port of that template, but the styling is pretty much the same.</p></li> <li><p>You should edit the <code>src/lib/info.js</code> file to contain your information. This will properly update the parts of the website that display your name, social links, and SEO (meta tags) for your posts.</p></li>',te,_,We="Now that that’s out of the way, let’s learn about how to make posts.",le,u,Je='<a href="#creating-a-post">Creating a Post</a>',se,x,Ze='All of your posts (including this one) are located in the <code>posts</code> folder. They are written in markdown and parsed with mdsvex. If you’re unfamiliar with mdsvex, I would recommend <a href="https://mdsvex.com/playground" rel="nofollow">looking at the website</a> to see what is all possible out of the box.',ie,M,Be="You can add a new post by creating either a new <code>.md</code> file or a folder with an <code>index.md</code> file:",ae,L,ne,It=`<code class="language-undefined">/posts/my-first-post.md
/posts/my-first-post/index.md</code>`,oe,k,Qe="Make sure your posts have <code>title</code> and <code>date</code> properties in the front matter:",pe,C,re,Et=`<code class="language-md"><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml">title: My First Post
date: 2021-07-09
preview: This text will be used for the preview instead of the first paragraph</span>
<span class="token punctuation">---</span></span>

(your content here)</code>`,de,b,Xe="The <code>preview</code> property is optional, in case you want to customize the preview text. If not provided, the first paragaph of your post will be used instead.",ue,h,et='<a href="#rendering-posts">Rendering Posts</a>',he,P,tt="Each individual post is rendered at <code>src/routes/post/[slug]</code>. You’ll notice the route has 3 files:",fe,j,ve,Rt=`<code class="language-undefined">-| +page.js
-| +page.server.js
-| +page.svelte</code>`,me,I,lt="The metadata for the post is loaded in <code>+page.server.js</code>. It is then used in <code>+page.js</code> to import the post’s markdown file. After that, both the post and its metadata are passed into <code>+page.svelte</code> to be rendered.",ce,E,st='There are some basic meta tags setup for SEO and social media sharing, including a generated open graph image (courtesy of <a href="https://og-image.vercel.app" rel="nofollow">og-image.vercel.app</a>).',ge,R,it='<img src="https://og-image.vercel.app/**Getting%20Started**?theme=light&amp;md=1&amp;fontSize=100px&amp;images=https://assets.vercel.com/image/upload/front/assets/design/hyper-color-logo.svg" alt="open-graph"/>',we,S,at="Feel free to customize this page as you see fit. I included some nice-to-haves like a table of contents and links to the next and/or previous posts.",ye,f,nt='<a href="#getting-posts">Getting Posts</a>',Te,q,ot="Your posts can be retrieved via <code>import { posts } from &#39;$lib/data/posts&#39;</code>. They are automatically sorted from newest to oldest and contain the metadata for each post.",He,z,pt="<code>$lib/data/posts</code> should only be imported in <code>*.server.js</code> files. It uses some APIs that only work server-side, so it will throw an error if you try to load it on client-side code. (It also is the data source for every post on your website, so you wouldn’t want that being bundled with your client code anyways!)",_e,Y,rt="If you wish to render an entire post, you will need to import the <code>.md</code> file directly (as done in <code>src/routes/post/[slug]/+page.js</code>).",xe,v,dt='<a href="#theme">Theme</a>',Me,G,ut='Most of the site is themed using Tailwind’s <a href="https://tailwindcss.com/docs/typography-plugin" rel="nofollow">typography plugin</a>. You can view the configuration in <code>tailwind.config.cjs</code>. As mentioned at the beginning of this post, the overall theme is taken from <a href="https://spotlight.tailwindui.com/" rel="nofollow">Tailwind’s “Spotlight”</a>.',Le,A,ht='If you wish to change the theme of your code blocks, you can edit the <code>src/prism.css</code> file. Prism themes can be <a href="https://github.com/PrismJS/prism-themes/tree/master/themes" rel="nofollow">found here</a>.',ke,U,Ce,St=`<code class="language-javascript"><span class="token keyword">function</span> <span class="token function">helloWorld</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">return</span> <span class="token string">'Hello World'</span>
<span class="token punctuation">&#125;</span></code>`,be,m,ft='<a href="#mdsvex-plugins">Mdsvex Plugins</a>',Pe,V,vt="I’ve added some mdsvex plugins to support a few extra things (check out the <code>mdsvex.config.js</code> file).",je,c,mt='<a href="#videos">Videos</a>',Ie,$,ct=".mp4 and .webm videos are supported just like images.",Ee,D,Re,qt='<code class="language-md"><span class="token url"><span class="token operator">!</span>[<span class="token content">my video</span>](<span class="token url">/videos/my-cool-video.mp4</span>)</span></code>',Se,g,gt='<a href="#relative-urls-for-images-and-videos">Relative URLs for Images and Videos</a>',qe,F,wt='The <a href="https://github.com/mattjennings/mdsvex-relative-images" rel="nofollow">mdsvex-relative-images</a> plugin allows loading images or videos with a relative path. This is particularly nice for grouping images with the post under the same folder.',ze,K,Ye,zt='<code class="language-md"><span class="token url"><span class="token operator">!</span>[<span class="token content">penguins</span>](<span class="token url">./penguins.mp4</span>)</span></code>',Ge,N,yt=`<video src="${Ut}" autoplay="" muted="" playsinline="" loop="" title="penguins"></video>`,Ae,w,Tt='<a href="#deploying">Deploying</a>',Ue,O,Ht="You can deploy this like you would any other SvelteKit project. It uses the auto adapter by default.",Ve,W,_t='<a href="https://kit.svelte.dev/docs/adapters" rel="nofollow">See the SvelteKit docs on adapters</a>',$e,y,xt='<a href="#thats-it">That’s it!</a>',De,J,Mt='I think I’ve covered most of the important stuff. If you have any questions, suggestions, or problems feel free to <a href="https://github.com/mattjennings/sveltekit-blog-template/issues" rel="nofollow">open an issue</a>.';return{c(){d=i("p"),d.innerHTML=Ke,X=n(),T=i("p"),T.textContent=Ne,ee=n(),H=i("ul"),H.innerHTML=Oe,te=n(),_=i("p"),_.textContent=We,le=n(),u=i("h2"),u.innerHTML=Je,se=n(),x=i("p"),x.innerHTML=Ze,ie=n(),M=i("p"),M.innerHTML=Be,ae=n(),L=i("pre"),ne=new Z(!1),oe=n(),k=i("p"),k.innerHTML=Qe,pe=n(),C=i("pre"),re=new Z(!1),de=n(),b=i("p"),b.innerHTML=Xe,ue=n(),h=i("h2"),h.innerHTML=et,he=n(),P=i("p"),P.innerHTML=tt,fe=n(),j=i("pre"),ve=new Z(!1),me=n(),I=i("p"),I.innerHTML=lt,ce=n(),E=i("p"),E.innerHTML=st,ge=n(),R=i("p"),R.innerHTML=it,we=n(),S=i("p"),S.textContent=at,ye=n(),f=i("h2"),f.innerHTML=nt,Te=n(),q=i("p"),q.innerHTML=ot,He=n(),z=i("p"),z.innerHTML=pt,_e=n(),Y=i("p"),Y.innerHTML=rt,xe=n(),v=i("h2"),v.innerHTML=dt,Me=n(),G=i("p"),G.innerHTML=ut,Le=n(),A=i("p"),A.innerHTML=ht,ke=n(),U=i("pre"),Ce=new Z(!1),be=n(),m=i("h2"),m.innerHTML=ft,Pe=n(),V=i("p"),V.innerHTML=vt,je=n(),c=i("h3"),c.innerHTML=mt,Ie=n(),$=i("p"),$.textContent=ct,Ee=n(),D=i("pre"),Re=new Z(!1),Se=n(),g=i("h3"),g.innerHTML=gt,qe=n(),F=i("p"),F.innerHTML=wt,ze=n(),K=i("pre"),Ye=new Z(!1),Ge=n(),N=i("p"),N.innerHTML=yt,Ae=n(),w=i("h2"),w.innerHTML=Tt,Ue=n(),O=i("p"),O.textContent=Ht,Ve=n(),W=i("p"),W.innerHTML=_t,$e=n(),y=i("h2"),y.innerHTML=xt,De=n(),J=i("p"),J.innerHTML=Mt,this.h()},l(e){d=a(e,"P",{"data-svelte-h":!0}),p(d)!=="svelte-g1hhd2"&&(d.innerHTML=Ke),X=o(e),T=a(e,"P",{"data-svelte-h":!0}),p(T)!=="svelte-1oua8o6"&&(T.textContent=Ne),ee=o(e),H=a(e,"UL",{"data-svelte-h":!0}),p(H)!=="svelte-b1t2iz"&&(H.innerHTML=Oe),te=o(e),_=a(e,"P",{"data-svelte-h":!0}),p(_)!=="svelte-3ogjut"&&(_.textContent=We),le=o(e),u=a(e,"H2",{id:!0,"data-svelte-h":!0}),p(u)!=="svelte-p1cuku"&&(u.innerHTML=Je),se=o(e),x=a(e,"P",{"data-svelte-h":!0}),p(x)!=="svelte-1jfbo2c"&&(x.innerHTML=Ze),ie=o(e),M=a(e,"P",{"data-svelte-h":!0}),p(M)!=="svelte-yms4jc"&&(M.innerHTML=Be),ae=o(e),L=a(e,"PRE",{class:!0});var l=B(L);ne=Q(l,!1),l.forEach(t),oe=o(e),k=a(e,"P",{"data-svelte-h":!0}),p(k)!=="svelte-1w2nyqh"&&(k.innerHTML=Qe),pe=o(e),C=a(e,"PRE",{class:!0});var Lt=B(C);re=Q(Lt,!1),Lt.forEach(t),de=o(e),b=a(e,"P",{"data-svelte-h":!0}),p(b)!=="svelte-1qmyyjh"&&(b.innerHTML=Xe),ue=o(e),h=a(e,"H2",{id:!0,"data-svelte-h":!0}),p(h)!=="svelte-s94vy9"&&(h.innerHTML=et),he=o(e),P=a(e,"P",{"data-svelte-h":!0}),p(P)!=="svelte-1crktlb"&&(P.innerHTML=tt),fe=o(e),j=a(e,"PRE",{class:!0});var kt=B(j);ve=Q(kt,!1),kt.forEach(t),me=o(e),I=a(e,"P",{"data-svelte-h":!0}),p(I)!=="svelte-dhwge9"&&(I.innerHTML=lt),ce=o(e),E=a(e,"P",{"data-svelte-h":!0}),p(E)!=="svelte-kt95ov"&&(E.innerHTML=st),ge=o(e),R=a(e,"P",{"data-svelte-h":!0}),p(R)!=="svelte-1w4h6zs"&&(R.innerHTML=it),we=o(e),S=a(e,"P",{"data-svelte-h":!0}),p(S)!=="svelte-4gufrn"&&(S.textContent=at),ye=o(e),f=a(e,"H2",{id:!0,"data-svelte-h":!0}),p(f)!=="svelte-1blqrf1"&&(f.innerHTML=nt),Te=o(e),q=a(e,"P",{"data-svelte-h":!0}),p(q)!=="svelte-1ifvj73"&&(q.innerHTML=ot),He=o(e),z=a(e,"P",{"data-svelte-h":!0}),p(z)!=="svelte-10rjh7w"&&(z.innerHTML=pt),_e=o(e),Y=a(e,"P",{"data-svelte-h":!0}),p(Y)!=="svelte-1loy8ct"&&(Y.innerHTML=rt),xe=o(e),v=a(e,"H2",{id:!0,"data-svelte-h":!0}),p(v)!=="svelte-1sg30y5"&&(v.innerHTML=dt),Me=o(e),G=a(e,"P",{"data-svelte-h":!0}),p(G)!=="svelte-15japq2"&&(G.innerHTML=ut),Le=o(e),A=a(e,"P",{"data-svelte-h":!0}),p(A)!=="svelte-ph8v5i"&&(A.innerHTML=ht),ke=o(e),U=a(e,"PRE",{class:!0});var Ct=B(U);Ce=Q(Ct,!1),Ct.forEach(t),be=o(e),m=a(e,"H2",{id:!0,"data-svelte-h":!0}),p(m)!=="svelte-dqoqrl"&&(m.innerHTML=ft),Pe=o(e),V=a(e,"P",{"data-svelte-h":!0}),p(V)!=="svelte-9902kv"&&(V.innerHTML=vt),je=o(e),c=a(e,"H3",{id:!0,"data-svelte-h":!0}),p(c)!=="svelte-1k87gnq"&&(c.innerHTML=mt),Ie=o(e),$=a(e,"P",{"data-svelte-h":!0}),p($)!=="svelte-1r2lc"&&($.textContent=ct),Ee=o(e),D=a(e,"PRE",{class:!0});var bt=B(D);Re=Q(bt,!1),bt.forEach(t),Se=o(e),g=a(e,"H3",{id:!0,"data-svelte-h":!0}),p(g)!=="svelte-o4ryyg"&&(g.innerHTML=gt),qe=o(e),F=a(e,"P",{"data-svelte-h":!0}),p(F)!=="svelte-38wrk6"&&(F.innerHTML=wt),ze=o(e),K=a(e,"PRE",{class:!0});var Pt=B(K);Ye=Q(Pt,!1),Pt.forEach(t),Ge=o(e),N=a(e,"P",{"data-svelte-h":!0}),p(N)!=="svelte-66nwu8"&&(N.innerHTML=yt),Ae=o(e),w=a(e,"H2",{id:!0,"data-svelte-h":!0}),p(w)!=="svelte-1rbziih"&&(w.innerHTML=Tt),Ue=o(e),O=a(e,"P",{"data-svelte-h":!0}),p(O)!=="svelte-1d4q3w7"&&(O.textContent=Ht),Ve=o(e),W=a(e,"P",{"data-svelte-h":!0}),p(W)!=="svelte-1gimt5c"&&(W.innerHTML=_t),$e=o(e),y=a(e,"H2",{id:!0,"data-svelte-h":!0}),p(y)!=="svelte-1pnv1d1"&&(y.innerHTML=xt),De=o(e),J=a(e,"P",{"data-svelte-h":!0}),p(J)!=="svelte-6n8w17"&&(J.innerHTML=Mt),this.h()},h(){r(u,"id","creating-a-post"),ne.a=null,r(L,"class","language-undefined"),re.a=null,r(C,"class","language-md"),r(h,"id","rendering-posts"),ve.a=null,r(j,"class","language-undefined"),r(f,"id","getting-posts"),r(v,"id","theme"),Ce.a=null,r(U,"class","language-javascript"),r(m,"id","mdsvex-plugins"),r(c,"id","videos"),Re.a=null,r(D,"class","language-md"),r(g,"id","relative-urls-for-images-and-videos"),Ye.a=null,r(K,"class","language-md"),r(w,"id","deploying"),r(y,"id","thats-it")},m(e,l){s(e,d,l),s(e,X,l),s(e,T,l),s(e,ee,l),s(e,H,l),s(e,te,l),s(e,_,l),s(e,le,l),s(e,u,l),s(e,se,l),s(e,x,l),s(e,ie,l),s(e,M,l),s(e,ae,l),s(e,L,l),ne.m(It,L),s(e,oe,l),s(e,k,l),s(e,pe,l),s(e,C,l),re.m(Et,C),s(e,de,l),s(e,b,l),s(e,ue,l),s(e,h,l),s(e,he,l),s(e,P,l),s(e,fe,l),s(e,j,l),ve.m(Rt,j),s(e,me,l),s(e,I,l),s(e,ce,l),s(e,E,l),s(e,ge,l),s(e,R,l),s(e,we,l),s(e,S,l),s(e,ye,l),s(e,f,l),s(e,Te,l),s(e,q,l),s(e,He,l),s(e,z,l),s(e,_e,l),s(e,Y,l),s(e,xe,l),s(e,v,l),s(e,Me,l),s(e,G,l),s(e,Le,l),s(e,A,l),s(e,ke,l),s(e,U,l),Ce.m(St,U),s(e,be,l),s(e,m,l),s(e,Pe,l),s(e,V,l),s(e,je,l),s(e,c,l),s(e,Ie,l),s(e,$,l),s(e,Ee,l),s(e,D,l),Re.m(qt,D),s(e,Se,l),s(e,g,l),s(e,qe,l),s(e,F,l),s(e,ze,l),s(e,K,l),Ye.m(zt,K),s(e,Ge,l),s(e,N,l),s(e,Ae,l),s(e,w,l),s(e,Ue,l),s(e,O,l),s(e,Ve,l),s(e,W,l),s(e,$e,l),s(e,y,l),s(e,De,l),s(e,J,l)},p:Fe,i:Fe,o:Fe,d(e){e&&(t(d),t(X),t(T),t(ee),t(H),t(te),t(_),t(le),t(u),t(se),t(x),t(ie),t(M),t(ae),t(L),t(oe),t(k),t(pe),t(C),t(de),t(b),t(ue),t(h),t(he),t(P),t(fe),t(j),t(me),t(I),t(ce),t(E),t(ge),t(R),t(we),t(S),t(ye),t(f),t(Te),t(q),t(He),t(z),t(_e),t(Y),t(xe),t(v),t(Me),t(G),t(Le),t(A),t(ke),t(U),t(be),t(m),t(Pe),t(V),t(je),t(c),t(Ie),t($),t(Ee),t(D),t(Se),t(g),t(qe),t(F),t(ze),t(K),t(Ge),t(N),t(Ae),t(w),t(Ue),t(O),t(Ve),t(W),t($e),t(y),t(De),t(J))}}}const Ft={title:"Getting Started",date:"2022-12-14T00:00:00.000Z",headings:[{depth:2,value:"Creating a Post",id:"creating-a-post"},{depth:2,value:"Rendering Posts",id:"rendering-posts"},{depth:2,value:"Getting Posts",id:"getting-posts"},{depth:2,value:"Theme",id:"theme"},{depth:2,value:"Mdsvex Plugins",id:"mdsvex-plugins"},{depth:3,value:"Videos",id:"videos"},{depth:3,value:"Relative URLs for Images and Videos",id:"relative-urls-for-images-and-videos"},{depth:2,value:"Deploying",id:"deploying"},{depth:2,value:"That’s it!",id:"thats-it"}]};class Kt extends Gt{constructor(d){super(),At(this,d,null,Vt,Yt,{})}}export{Kt as default,Ft as metadata};